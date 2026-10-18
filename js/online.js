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

const SDK_VERSION = "12.19.0";
const SDK = ["app", "auth", "database"].map(name => `https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-${name}-compat.js`);
export const MAX_PLAYERS = 10;

let sdkPromise = null;
function loadSdk() {
  if (window.firebase?.auth && window.firebase?.database) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = SDK.reduce((chain, src) => chain.then(() => new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`) && window.firebase) { resolve(); return; }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("オンライン機能を読み込めませんでした。通信状態を確認してください。"));
    document.head.append(script);
  })), Promise.resolve()).catch(error => { sdkPromise = null; throw error; });
  return sdkPromise;
}

export function onlineConfigured() {
  const config = window.STAGE_PICK_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.databaseURL && !JSON.stringify(config).includes("YOUR_"));
}

async function identity() {
  if (!onlineConfigured()) throw new Error("オンライン機能の設定（firebase-config.js）がありません。");
  if (!navigator.onLine) throw new Error("オフラインです。インターネットにつないでから試してください。");
  await loadSdk();
  if (!window.firebase.apps.length) window.firebase.initializeApp(window.STAGE_PICK_FIREBASE_CONFIG);
  const auth = window.firebase.auth();
  if (!auth.currentUser) await auth.signInAnonymously();
  return auth.currentUser.uid;
}

export function normalizeName(value, fallback = "プレイヤー") {
  const cleaned = String(value || "").replace(/[.#$\/\[\]]/g, "").trim().slice(0, 16);
  return cleaned || fallback;
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
    const teamName = normalizeName(name, "ホスト");
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
    if (normalized.length !== 8) throw new Error("8文字のルームコードを入力してください。");
    const db = window.firebase.database();
    const statusSnap = await db.ref(`rooms/${normalized}/status`).once("value");
    if (!statusSnap.exists()) throw new Error("ルームが見つかりません。コードを確かめるか、ホストに新しいリンクをもらってください。");
    const memberSnap = await db.ref(`rooms/${normalized}/players/${uid}`).once("value");
    const member = memberSnap.val();
    if (member) {
      if (member.kickedByHost) throw new Error("このルームからは退出させられたため、再参加できません。");
      if (member.departed) throw new Error("このルームはすでに退出しています。");
      return { room: new Room(normalized, uid, Boolean(member.host)), rejoined: true };
    }
    if (statusSnap.val() !== "lobby") throw new Error("このルームはすでにドラフトが始まっています。");
    const room = new Room(normalized, uid, false);
    await room.ref.child(`joinRequests/${uid}`).set({ name: normalizeName(name), createdAt: Date.now() });
    return { room, rejoined: false };
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
    await this.ref.remove();
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

/** オンライン画面を開いた時点で接続の準備をしておく（ルーム作成・参加を速くする） */
export function warmup() {
  if (onlineConfigured() && navigator.onLine) identity().catch(() => {});
}
