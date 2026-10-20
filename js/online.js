// オンラインドラフト（Firebase 匿名認証 + Realtime Database）
// データベースのルール（firebase-database-rules.json）は旧版のまま使える形にしている。
//
// rooms/{code}
//   hostUid       … ホストのみ（読めない）
//   status        … "lobby" | "playing"
//   settings      … { pickLimit, orderMode, startOrder }
//   players/{uid} … { name, teamName, order, host, departed?, kickedByHost? }
//   joinRequests/{uid} … 参加申請 { name, createdAt } / ホストの返事 { status: "full" | "closed" | "kicked" }
//   actions/{id}  … 参加者の操作 { uid, kind: "pick"|"envelope"|"leave", ... } をホストが処理して消す
//   state         … ホストが書く共有状態 { rev, json（エンジン状態のJSON文字列）, acks }
//
// lobby/{code}    … 「ルーム一覧に公開」にしたルームだけ。ホストが書く
//   { host, count, max, pickLimit, limits, createdAt, updatedAt }

import { tr } from "./i18n.js";
const SDK_VERSION = "12.19.0";
const SDK = ["app", "auth", "database"].map(name => `https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-${name}-compat.js`);
export const MAX_PLAYERS = 10;

let sdkPromise = null;
function loadSdk() {
  if (window.firebase?.auth && window.firebase?.database) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  // 3つを同時にダウンロードし、順番どおりに実行する（async = false）
  sdkPromise = Promise.all(SDK.map(src => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(tr("オンライン機能を読み込めませんでした。通信状態を確認してください。")));
    document.head.append(script);
  }))).catch(error => { sdkPromise = null; throw error; });
  return sdkPromise;
}

export function onlineConfigured() {
  const config = window.STAGE_PICK_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.databaseURL && !JSON.stringify(config).includes("YOUR_"));
}

export async function identity() {
  if (!onlineConfigured()) throw new Error(tr("オンライン機能の設定（firebase-config.js）がありません。"));
  if (!navigator.onLine) throw new Error(tr("オフラインです。インターネットにつないでから試してください。"));
  await loadSdk();
  if (!window.firebase.apps.length) window.firebase.initializeApp(window.STAGE_PICK_FIREBASE_CONFIG);
  const auth = window.firebase.auth();
  if (!auth.currentUser) await auth.signInAnonymously();
  return auth.currentUser.uid;
}

export function normalizeName(value, fallback = tr("プレイヤー")) {
  const cleaned = String(value || "").replace(/[.#$\/\[\]]/g, "").trim().slice(0, 16);
  return cleaned || fallback;
}

/** ルーム名（任意・20文字まで） */
export function normalizeRoomName(value) {
  return String(value || "").replace(/[\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim().slice(0, 20);
}

export function normalizeCode(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
}

function makeCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return [...bytes].map(byte => alphabet[byte % alphabet.length]).join("");
}

export class Room {
  constructor(code, uid, isHost) {
    this.code = code;
    this.uid = uid;
    this.isHost = isHost;
    this.ref = window.firebase.database().ref(`rooms/${code}`);
    this.offs = [];
    this.players = {};
    this.status = "";
    this.settings = null;
    this.serverOffset = 0;
    const offsetRef = window.firebase.database().ref(".info/serverTimeOffset");
    const offsetCb = snap => { this.serverOffset = Number(snap.val()) || 0; };
    offsetRef.on("value", offsetCb);
    this.offs.push(() => offsetRef.off("value", offsetCb));
  }

  now() { return Date.now() + this.serverOffset; }

  listen(path, event, callback, onError) {
    const ref = path ? this.ref.child(path) : this.ref;
    const cb = snapshot => callback(snapshot);
    ref.on(event, cb, error => onError?.(error));
    this.offs.push(() => ref.off(event, cb));
  }

  detach() {
    this.offs.splice(0).forEach(off => { try { off(); } catch { /* ignore */ } });
  }

  // ------------------------------------------------------------ 作成・参加
  static async create({ name, settings }) {
    const uid = await identity();
    const db = window.firebase.database();
    let code = makeCode();
    for (let attempt = 0; attempt < 4 && (await db.ref(`rooms/${code}/status`).once("value")).exists(); attempt += 1) {
      code = makeCode();
    }
    const teamName = normalizeName(name, tr("ホスト"));
    await db.ref(`rooms/${code}`).set({
      hostUid: uid,
      status: "lobby",
      settings,
      players: { [uid]: { name: teamName, teamName, order: 0, host: true } }
    });
    return new Room(code, uid, true);
  }

  /** 参加（すでにメンバーなら再接続）。戻り値 { room, rejoined } */
  static async join({ code, name }) {
    const uid = await identity();
    const normalized = normalizeCode(code);
    if (normalized.length !== 8) throw new Error(tr("8文字のルームコードを入力してください。"));
    const db = window.firebase.database();
    const statusSnap = await db.ref(`rooms/${normalized}/status`).once("value");
    if (!statusSnap.exists()) throw new Error(tr("ルームが見つかりません。コードを確かめるか、ホストに新しいリンクをもらってください。"));
    const memberSnap = await db.ref(`rooms/${normalized}/players/${uid}`).once("value");
    const member = memberSnap.val();
    if (member) {
      if (member.kickedByHost) throw new Error(tr("このルームからは退出させられたため、再参加できません。"));
      if (member.departed) throw new Error(tr("このルームはすでに退出しています。"));
      return { room: new Room(normalized, uid, Boolean(member.host)), rejoined: true };
    }
    if (statusSnap.val() !== "lobby") throw new Error(tr("このルームはすでにドラフトが始まっています。"));
    const room = new Room(normalized, uid, false);
    const requestRef = room.ref.child(`joinRequests/${uid}`);
    // 前回の申請（満員・締め切りの返事など）が残っていると新しく出せないので、先に消す
    if ((await requestRef.once("value").catch(() => null))?.exists()) await requestRef.remove().catch(() => {});
    await requestRef.set({ name: normalizeName(name), createdAt: Date.now() }).catch(error => {
      throw new Error(String(error?.code || error?.message || "").includes("PERMISSION")
        ? tr("このルームには参加できませんでした。ドラフトが始まったか、ルームが終了した可能性があります。")
        : (error?.message || tr("参加できませんでした。")));
    });
    return { room, rejoined: false };
  }

  /** 自分がこのルームのメンバーなら、その記録（host など）を返す */
  static async memberInfo(code) {
    const uid = await identity();
    const snap = await window.firebase.database().ref(`rooms/${normalizeCode(code)}/players/${uid}`).once("value");
    const member = snap.val();
    return member && !member.departed && !member.kickedByHost ? member : null;
  }

  /** 申請を出さずに、まだこのルームのメンバーか確かめる */
  static async isMember(code) {
    const uid = await identity();
    const snap = await window.firebase.database().ref(`rooms/${normalizeCode(code)}/players/${uid}`).once("value");
    const member = snap.val();
    return Boolean(member && !member.departed);
  }

  // ------------------------------------------------------------ 共通の購読
  watchBasics({ onPlayers, onStatus, onSettings, onError }) {
    this.listen("players", "value", snap => { this.players = snap.val() || {}; onPlayers?.(this.players); }, onError);
    this.listen("status", "value", snap => { this.status = snap.val() || "closed"; onStatus?.(this.status, snap.exists()); }, onError);
    this.listen("settings", "value", snap => { this.settings = snap.val(); onSettings?.(this.settings); }, onError);
  }

  watchState(onState, onError) {
    this.listen("state", "value", snap => {
      const value = snap.val();
      if (!value?.json) return;
      try {
        onState({ rev: Number(value.rev) || 0, state: JSON.parse(value.json), acks: value.acks || {} });
      } catch (error) {
        onError?.(error);
      }
    }, onError);
  }

  async readState() {
    const snap = await this.ref.child("state").once("value");
    const value = snap.val();
    if (!value?.json) return null;
    return { rev: Number(value.rev) || 0, state: JSON.parse(value.json), acks: value.acks || {} };
  }

  /** 参加者：自分の申請・参加状態を見る */
  watchSelf({ onMember, onRequest }) {
    this.listen(`players/${this.uid}`, "value", snap => onMember?.(snap.val()));
    this.listen(`joinRequests/${this.uid}`, "value", snap => onRequest?.(snap.val()));
  }

  // ------------------------------------------------------------ ホスト
  watchJoinRequests(onRequest) {
    this.listen("joinRequests", "child_added", snap => onRequest(snap.key, snap.val(), snap.ref));
  }

  async acceptJoin(uid, request, requestRef) {
    if (this.status !== "lobby") { await requestRef.update({ status: "closed" }); return; }
    const existing = this.players[uid];
    if (existing?.kickedByHost) { await requestRef.update({ status: "kicked" }); return; }
    if (existing) { await requestRef.remove(); return; }
    const active = Object.values(this.players).filter(player => !player.departed);
    if (active.length >= MAX_PLAYERS) { await requestRef.update({ status: "full" }); return; }
    const base = normalizeName(request?.name);
    const taken = new Set(active.map(player => player.teamName));
    let teamName = base;
    for (let n = 2; taken.has(teamName); n += 1) teamName = `${base} ${n}`;
    const order = Math.max(-1, ...Object.values(this.players).map(player => Number(player.order) || 0)) + 1;
    const record = { name: base, teamName, order, host: false };
    await this.ref.child(`players/${uid}`).set(record);
    this.players[uid] = record;
    await requestRef.remove();
  }

  watchActions(onAction) {
    this.listen("actions", "child_added", snap => onAction(snap.key, snap.val()));
  }
  removeAction(key) { return this.ref.child(`actions/${key}`).remove().catch(() => {}); }
  async clearActions() {
    const snap = await this.ref.child("actions").once("value");
    await Promise.all(Object.keys(snap.val() || {}).map(key => this.removeAction(key)));
  }

  setSettings(settings) { return this.ref.child("settings").set(settings); }
  setStatus(status) { return this.ref.child("status").set(status); }
  writeState(payload) {
    return this.ref.child("state").set({ rev: payload.rev, json: JSON.stringify(payload.state), acks: payload.acks || {}, at: Date.now() });
  }
  markDeparted(uid, kicked = false) {
    const updates = { departed: true, departedAt: Date.now() };
    if (kicked) updates.kickedByHost = true;
    return this.ref.child(`players/${uid}`).update(updates);
  }
  removeLobbyPlayer(uid) { return this.ref.child(`players/${uid}`).remove(); }
  async removeDepartedPlayers() {
    const tasks = Object.entries(this.players).filter(([, p]) => p.departed).map(([uid]) => this.ref.child(`players/${uid}`).remove());
    await Promise.all(tasks);
  }
  async close() {
    this.detach();
    await this.unpublish().catch(() => {});
    await this.ref.remove();
  }

  // ------------------------------------------------------------ ルーム一覧（公開）
  lobbyRef() { return window.firebase.database().ref(`lobby/${this.code}`); }
  /** 一覧に載せる・内容を更新する。通信が切れたら自動で消え、つながり直したら載せ直す */
  async publish(info) {
    const entry = {
      host: normalizeName(info.host, tr("ホスト")),
      count: Math.max(0, Number(info.count) || 0),
      max: MAX_PLAYERS,
      pickLimit: Number(info.pickLimit) || 5,
      limits: String(info.limits || "").slice(0, 120),
      ...(normalizeRoomName(info.name) ? { name: normalizeRoomName(info.name) } : {}),
      createdAt: this.publishedAt || (this.publishedAt = this.now()),
      updatedAt: this.now()
    };
    const key = JSON.stringify({ ...entry, updatedAt: 0 });
    if (key === this.publishedKey) return;
    this.publishedKey = key;
    this.publishedEntry = entry;
    const ref = this.lobbyRef();
    if (!this.lobbyDisconnectSet) {
      this.lobbyDisconnectSet = true;
      ref.onDisconnect?.().remove();
      const connectedRef = window.firebase.database().ref(".info/connected");
      const cb = snap => {
        if (snap.val() === true && this.publishedEntry) {
          ref.onDisconnect?.().remove();
          ref.set({ ...this.publishedEntry, updatedAt: this.now() }).catch(() => {});
        }
      };
      connectedRef.on("value", cb);
      this.offs.push(() => connectedRef.off("value", cb));
    }
    try {
      await ref.set(entry);
    } catch (error) {
      // データベースのルールが古い（name を受け付けない）時は、名前なしで載せる
      if (!entry.name) throw error;
      const { name, ...withoutName } = entry;
      this.publishedEntry = withoutName;
      await ref.set(withoutName);
    }
  }
  async unpublish() {
    if (!this.publishedEntry && !this.publishedKey) return;
    this.publishedEntry = null;
    this.publishedKey = "";
    const ref = this.lobbyRef();
    try { ref.onDisconnect?.().cancel(); } catch { /* ignore */ }
    await ref.remove();
  }

  // ------------------------------------------------------------ 参加者
  /** 操作を送る。key はすぐ返し、done で送信完了を待てる */
  sendAction(action) {
    const ref = this.ref.child("actions").push();
    const done = ref.set({ ...action, uid: this.uid, createdAt: Date.now() });
    return { key: ref.key, done };
  }
  async leaveLobby() {
    const uid = this.uid;
    const room = this.ref;
    this.detach();
    await Promise.allSettled([
      room.child(`players/${uid}`).remove(),
      room.child(`joinRequests/${uid}`).once("value").then(snap => snap.exists() ? snap.ref.remove() : null)
    ]);
  }

  activePlayers() {
    return Object.entries(this.players)
      .filter(([, player]) => !player.departed)
      .sort(([, a], [, b]) => (Number(a.order) || 0) - (Number(b.order) || 0));
  }

  inviteUrl() {
    const url = new URL(location.href);
    url.search = "";
    url.hash = "";
    url.searchParams.set("room", this.code);
    return url.toString();
  }
}

/** 公開中のルーム一覧を見る。戻り値は購読をやめる関数 */
export async function watchPublicRooms(onList, onError) {
  await identity();
  const db = window.firebase.database();
  const ref = db.ref("lobby");
  const statusCache = new Map(); // code -> { status, at }
  let latest = 0;
  // ルームが本当に参加者を待っているか確かめる。消えたルームの掲載は片付ける
  const roomStatus = async code => {
    const cached = statusCache.get(code);
    if (cached && Date.now() - cached.at < 20000) return cached.status;
    const status = (await db.ref(`rooms/${code}/status`).once("value").catch(() => null))?.val() ?? null;
    statusCache.set(code, { status, at: Date.now() });
    if (status === null) db.ref(`lobby/${code}`).remove().catch(() => {});
    return status;
  };
  const cb = async snap => {
    const run = ++latest;
    const now = Date.now();
    const candidates = Object.entries(snap.val() || {})
      .map(([code, room]) => ({ code, ...room }))
      .filter(room => /^[A-Z0-9]{8}$/.test(room.code) && now - (Number(room.updatedAt) || 0) < 3 * 60 * 60 * 1000)
      .sort((a, b) => (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0))
      .slice(0, 30);
    const statuses = await Promise.all(candidates.map(room => roomStatus(room.code)));
    if (run !== latest) return;
    onList(candidates.filter((room, i) => statuses[i] === "lobby"));
  };
  ref.on("value", cb, error => onError?.(error));
  return () => ref.off("value", cb);
}

/** オンライン画面を開いた時点で接続の準備をしておく（ルーム作成・参加を速くする） */
export function warmup() {
  if (onlineConfigured() && navigator.onLine) identity().catch(() => {});
}
