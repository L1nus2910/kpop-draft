// 人気投票（グループ・メンバー）。票は Firebase に保存するので、サイトを更新しても消えない。
//
// polls/voters/{uid}/{kind}   … { day, w, m, n, item }  その人の今日の投票数（n は 1〜5）
// polls/tally/{kind}/{period}/{item} … 票数
// polls/total/{kind}/{period}        … 総投票数
//   kind   … "g"（グループ）/ "m"（メンバー）
//   period … "d{日}"・"w{週}"・"m{月}"・"all"（日・週・月は日本時間で数える）
import { groups, idols, normalizeSearchText, searchRank, shortAgencyName, fullAgencyName, groupAliases, looseSearchText } from "./data.js";
import { identity, onlineConfigured } from "./online.js";
import { $, esc, icon, toast } from "./ui.js";

export const VOTES_PER_DAY = 5;
const DAY = 86400000;
const JST = 9 * 3600000;

// ---------------------------------------------------------------- 期間
function periodInfo(serverNow) {
  const day = Math.floor((serverNow + JST) / DAY);
  const week = Math.floor((day + 3) / 7); // 月曜はじまり
  const date = new Date(serverNow + JST);
  const month = date.getUTCFullYear() * 12 + date.getUTCMonth();
  return { day, week, month };
}
const PERIODS = [
  ["d", "今日"], ["w", "今週"], ["m", "今月"], ["all", "累計"]
];
function periodKey(type, info) {
  if (type === "d") return `d${info.day}`;
  if (type === "w") return `w${info.week}`;
  if (type === "m") return `m${info.month}`;
  return "all";
}
function periodLabel(type, info) {
  const fmt = dayNumber => {
    const d = new Date(dayNumber * DAY);
    return `${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
  };
  if (type === "d") return fmt(info.day);
  if (type === "w") return `${fmt(info.week * 7 - 3)}〜${fmt(info.week * 7 + 3)}`;
  if (type === "m") return `${Math.floor(info.month / 12)}年${(info.month % 12) + 1}月`;
  return "これまでの合計";
}

// ---------------------------------------------------------------- 投票先
// Firebase のキーに使えない文字（. # $ / [ ]）を避けて符号化する
const encodeKey = text => encodeURIComponent(text).replace(/\./g, "%2E");
const groupItems = groups.map(group => {
  const members = idols.filter(idol => idol.group === group.name);
  const agency = shortAgencyName(fullAgencyName(group.name, members[0]?.agency));
  return {
    key: encodeKey(group.name),
    name: group.name,
    sub: [agency, group.generation].filter(Boolean).join("・"),
    // 0：グループ名・別表記（カタカナ・ひらがな・ハングル）／1：事務所・メンバー名
    names: [group.name, ...String(groupAliases[group.name] || "").split(" ").filter(Boolean)].map(normalizeSearchText),
    loose: [group.name, ...String(groupAliases[group.name] || "").split(" ").filter(Boolean)].map(looseSearchText),
    others: [agency, fullAgencyName(group.name, members[0]?.agency), ...members.flatMap(m => [m.name, m.japaneseName, m.koreanName])].filter(Boolean).map(normalizeSearchText),
    order: -Math.max(0, ...members.map(m => m.popularitySortScore || 0)) // 票が同じ時は人気の目安順
  };
});
const memberItems = (() => {
  const byPerson = new Map();
  idols.forEach(idol => {
    const current = byPerson.get(idol.personKey);
    // 同じ人が複数グループにいる時は、活動中のグループを代表にする
    if (!current || (idol.activity === "活動中" && current.idol.activity !== "活動中")) byPerson.set(idol.personKey, { idol, groups: [...(current?.groups || []), idol.group] });
    else current.groups.push(idol.group);
  });
  return [...byPerson.values()].map(({ idol, groups: list }) => ({
    key: encodeKey(idol.personKey),
    id: idol.id,
    name: idol.japaneseName,
    sub: [...new Set(list)].join("・"),
    search: "",
    order: -(idol.popularitySortScore || 0)
  }));
})();
const ITEMS = { g: groupItems, m: memberItems };

// ---------------------------------------------------------------- 状態
const P = {
  kind: "m",
  period: "d",
  query: "",
  limit: 30,
  tally: {},      // item -> 票数（表示中の kind・期間）
  total: 0,
  voter: { g: null, m: null },
  uid: null,
  offset: 0,
  ready: false,
  error: "",
  sending: 0,
  offs: []
};
const serverNow = () => Date.now() + P.offset;

let viewEl = null;
export async function renderVote(view) {
  viewEl = view;
  draw();
  if (!onlineConfigured()) { P.error = "投票の設定が見つかりません。"; draw(); return; }
  try {
    await connect();
  } catch (error) {
    P.error = error?.message || "投票を読み込めませんでした。";
    draw();
  }
}

export function leaveVote() {
  P.offs.splice(0).forEach(off => { try { off(); } catch { /* ignore */ } });
  P.subscribed = "";
  viewEl = null;
}

async function connect() {
  P.uid = await identity();
  const db = window.firebase.database();
  if (!P.offsetWatched) {
    P.offsetWatched = true;
    db.ref(".info/serverTimeOffset").on("value", snap => { P.offset = Number(snap.val()) || 0; });
  }
  const voterSnap = await db.ref(`polls/voters/${P.uid}`).once("value");
  P.voter = { g: null, m: null, ...(voterSnap.val() || {}) };
  subscribe();
}

/** 表示中の kind・期間の票数を購読する */
function subscribe() {
  if (!window.firebase?.database || !P.uid) return;
  const info = periodInfo(serverNow());
  const key = `${P.kind}/${periodKey(P.period, info)}`;
  if (P.subscribed === key) return;
  P.offs.splice(0).forEach(off => { try { off(); } catch { /* ignore */ } });
  P.subscribed = key;
  P.ready = false;
  P.tally = {};
  P.total = 0;
  draw();
  const db = window.firebase.database();
  const tallyRef = db.ref(`polls/tally/${key}`);
  const totalRef = db.ref(`polls/total/${key}`);
  const onTally = snap => { if (P.subscribed !== key) return; P.tally = snap.val() || {}; P.ready = true; P.error = ""; drawList(); };
  const onTotal = snap => { if (P.subscribed !== key) return; P.total = Number(snap.val()) || 0; drawHead(); };
  const onErr = () => { P.error = "ランキングを読み込めませんでした。データベースのルールを確認してください。"; draw(); };
  tallyRef.on("value", onTally, onErr);
  totalRef.on("value", onTotal, onErr);
  P.offs.push(() => tallyRef.off("value", onTally), () => totalRef.off("value", onTotal));
}

function remaining(kind) {
  const v = P.voter[kind];
  const today = periodInfo(serverNow()).day;
  return v && Number(v.day) === today ? Math.max(0, VOTES_PER_DAY - (Number(v.n) || 0)) : VOTES_PER_DAY;
}

// ---------------------------------------------------------------- 投票
async function vote(kind, itemKey) {
  if (!P.uid || remaining(kind) <= 0) return;
  const db = window.firebase.database();
  const inc = window.firebase.database.ServerValue.increment(1);
  const info = periodInfo(serverNow());
  const prev = P.voter[kind];
  const n = prev && Number(prev.day) === info.day ? (Number(prev.n) || 0) + 1 : 1;
  const voter = { day: info.day, w: info.week, m: info.month, dk: periodKey("d", info), wk: periodKey("w", info), mk: periodKey("m", info), n, item: itemKey };
  const updates = { [`polls/voters/${P.uid}/${kind}`]: voter };
  ["d", "w", "m", "all"].forEach(type => {
    const pk = periodKey(type, info);
    updates[`polls/tally/${kind}/${pk}/${itemKey}`] = inc;
    updates[`polls/total/${kind}/${pk}`] = inc;
  });
  // 先に画面へ反映（押した瞬間に数字が変わる）
  P.voter[kind] = voter;
  const showing = P.kind === kind;
  if (showing) { P.tally = { ...P.tally, [itemKey]: (Number(P.tally[itemKey]) || 0) + 1 }; P.total += 1; }
  P.sending += 1;
  refresh();
  try {
    await db.ref().update(updates);
  } catch (error) {
    // 別のタブで投票していた等：最新の状態を読み直す
    P.voter[kind] = prev;
    const snap = await db.ref(`polls/voters/${P.uid}/${kind}`).once("value").catch(() => null);
    if (snap) P.voter[kind] = snap.val();
    toast(remaining(kind) <= 0 ? "今日の票はもう使い切りました" : "投票できませんでした。もう一度押してください。");
    P.subscribed = "";
    subscribe();
  } finally {
    P.sending -= 1;
    refresh();
  }
}

// ---------------------------------------------------------------- 画面
function filteredItems() {
  const items = ITEMS[P.kind];
  const q = normalizeSearchText(P.query.trim());
  let list = items;
  if (q) {
    if (P.kind === "m") {
      const rank = new Map();
      list = items.filter(item => { const r = searchRank(item.id, q); if (r < 0) return false; rank.set(item.key, r); return true; });
      list.sort((a, b) => (rank.get(a.key) - rank.get(b.key)) || ((Number(P.tally[b.key]) || 0) - (Number(P.tally[a.key]) || 0)));
      return list;
    }
    const rank = new Map();
    list = items.filter(item => {
      const lq = looseSearchText(q);
      const r = item.names.some(v => v.startsWith(q)) ? 0
        : (lq.length >= 2 && item.loose.some(v => v.startsWith(lq))) ? 0
        : item.names.some(v => v.includes(q)) ? 1
        : item.others.some(v => v.includes(q)) ? 2 : -1;
      if (r < 0) return false;
      rank.set(item.key, r);
      return true;
    });
    return list.sort((a, b) => (rank.get(a.key) - rank.get(b.key)) || ((Number(P.tally[b.key]) || 0) - (Number(P.tally[a.key]) || 0)) || (a.order - b.order));
  }
  return list.slice().sort((a, b) => ((Number(P.tally[b.key]) || 0) - (Number(P.tally[a.key]) || 0)) || (a.order - b.order) || a.name.localeCompare(b.name, "ja"));
}

function draw() {
  if (!viewEl) return;
  const info = periodInfo(serverNow());
  viewEl.innerHTML = `
    <div class="poll">
      <header class="poll-hero">
        <p class="poll-kicker">POPULARITY VOTE</p>
        <h1>人気投票</h1>
        <p>好きなグループとメンバーに投票できます。<b>1日 グループ${VOTES_PER_DAY}票・メンバー${VOTES_PER_DAY}票</b>、毎日0時（日本時間）に戻ります。同じ相手にまとめて入れてもOKです。</p>
      </header>
      ${P.error ? `<p class="notice notice-warn">${esc(P.error)}</p>` : ""}
      <div class="poll-controls">
        <div class="segmented poll-kind" role="radiogroup" aria-label="投票の種類" data-poll-seg="kind">
          ${[["m", "メンバー"], ["g", "グループ"]].map(([v, t]) => `<button type="button" role="radio" aria-checked="${P.kind === v}" data-value="${v}">${t}<small>今日の残り ${remaining(v)}票</small></button>`).join("")}
        </div>
        <div class="poll-tabs" role="tablist" aria-label="集計の期間" data-poll-seg="period">
          ${PERIODS.map(([v, t]) => `<button type="button" role="tab" aria-selected="${P.period === v}" data-value="${v}">${t}</button>`).join("")}
        </div>
      </div>
      <div class="poll-head" id="pollHead"></div>
      <label class="search poll-search">${icon("search")}<span class="sr-only">探す</span>
        <input class="input" type="search" id="pollSearch" value="${esc(P.query)}" placeholder="${P.kind === "m" ? "メンバー名・グループで探す（例：ウォニョン）" : "グループ名で探す（例：アイヴ／IVE／아이브）"}" autocomplete="off" enterkeyhint="search">
      </label>
      <ol class="poll-list" id="pollList"></ol>
      <div class="poll-more" id="pollMore"></div>
    </div>`;
  drawHead(info);
  drawList();
}

function drawHead(info = periodInfo(serverNow())) {
  const box = viewEl?.querySelector("#pollHead");
  if (!box) return;
  const left = remaining(P.kind);
  box.innerHTML = `
    <div><small>${esc(PERIODS.find(p => p[0] === P.period)[1])}（${esc(periodLabel(P.period, info))}）の${P.kind === "m" ? "メンバー" : "グループ"}投票</small>
      <strong>総投票数 <b>${P.total.toLocaleString()}</b>票</strong></div>
    <span class="poll-left ${left ? "" : "is-empty"}">今日の残り <b>${left}</b>/${VOTES_PER_DAY}票</span>`;
}

function drawList() {
  const list = viewEl?.querySelector("#pollList");
  if (!list) return;
  drawHead();
  if (!P.ready && !P.error) { list.innerHTML = `<li class="poll-empty">読み込んでいます…</li>`; viewEl.querySelector("#pollMore").innerHTML = ""; return; }
  const items = filteredItems();
  const shown = P.query.trim() ? items : items.slice(0, P.limit);
  const max = Math.max(1, ...items.map(item => Number(P.tally[item.key]) || 0));
  const left = remaining(P.kind);
  let rank = 0, prevVotes = null, index = 0;
  const ranks = new Map();
  items.forEach(item => { const v = Number(P.tally[item.key]) || 0; index += 1; if (v !== prevVotes) { rank = index; prevVotes = v; } ranks.set(item.key, v > 0 ? rank : null); });
  list.innerHTML = shown.length ? shown.map(item => {
    const votes = Number(P.tally[item.key]) || 0;
    const r = ranks.get(item.key);
    return `<li class="poll-row ${r && r <= 3 ? `is-top is-top${r}` : ""}">
      <span class="poll-rank">${r ? r : "—"}</span>
      <div class="poll-main">
        <strong>${esc(item.name)}</strong><small>${esc(item.sub)}</small>
        <span class="poll-bar" aria-hidden="true"><i style="width:${votes ? Math.max(3, Math.round(votes / max * 100)) : 0}%"></i></span>
      </div>
      <span class="poll-votes"><b>${votes.toLocaleString()}</b>票</span>
      <button class="btn btn-sm ${left ? "btn-primary" : "btn-ghost"}" data-poll-vote="${esc(item.key)}" ${left ? "" : "disabled"} aria-label="${esc(item.name)}に1票">＋1票</button>
    </li>`;
  }).join("") : `<li class="poll-empty">見つかりませんでした。</li>`;
  const more = viewEl.querySelector("#pollMore");
  const rest = items.length - shown.length;
  more.innerHTML = rest > 0 ? `<button class="btn btn-secondary load-more" data-poll-more>さらに${Math.min(30, rest)}件を表示<small>残り${rest}件</small></button>` : "";
}

/** 検索欄を作り直さずに、数字と一覧だけ更新する */
function refresh() {
  if (!viewEl) return;
  viewEl.querySelectorAll('[data-poll-seg="kind"] button').forEach(button => {
    const small = button.querySelector("small");
    if (small) small.textContent = `今日の残り ${remaining(button.dataset.value)}票`;
  });
  drawList();
}

// ---------------------------------------------------------------- 操作
export function onVoteClick(event) {
  const seg = event.target.closest("[data-poll-seg] button[data-value]");
  if (seg) {
    const name = seg.closest("[data-poll-seg]").dataset.pollSeg;
    if (name === "kind") { P.kind = seg.dataset.value; P.query = ""; P.limit = 30; }
    else P.period = seg.dataset.value;
    draw();
    subscribe();
    return true;
  }
  const voteBtn = event.target.closest("[data-poll-vote]");
  if (voteBtn && !voteBtn.disabled) {
    voteBtn.classList.remove("is-voted"); void voteBtn.offsetWidth; voteBtn.classList.add("is-voted");
    vote(P.kind, voteBtn.dataset.pollVote);
    return true;
  }
  if (event.target.closest("[data-poll-more]")) { P.limit += 30; drawList(); return true; }
  return false;
}
export function onVoteInput(event) {
  if (event.target.id !== "pollSearch") return false;
  if (event.isComposing) return true;
  P.query = event.target.value;
  drawList();
  return true;
}
