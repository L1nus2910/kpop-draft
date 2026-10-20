// KDraft — 画面と進行
import { tr, lang, LANGS, setLang } from "./i18n.js";
import { idols, normalizeSearchText, agencyFilterName, searchRank, popularityRankingSources, shortAgencyName } from "./data.js";
import * as E from "./engine.js";
import { chooseAIIdol, preferredPersonCandidates } from "./ai.js";
import { store, HISTORY_LIMIT } from "./store.js";
// オンライン・画像共有は必要になったときだけ読み込む（最初の表示を軽くする）
const loadShare = () => import("./share.js");
let onlineModule = null;
const loadOnline = () => (onlineModule ||= import("./online.js"));
const MAX_PLAYERS = 10;
const onlineConfigured = () => {
  const config = window.STAGE_PICK_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.databaseURL && !JSON.stringify(config).includes("YOUR_"));
};
const normalizeName = (value, fallback = tr("プレイヤー")) => String(value || "").replace(/[.#$\/\[\]]/g, "").trim().slice(0, 16) || fallback;
const normalizeCode = value => String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
const normalizeRoomName = value => String(value || "").replace(/[\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim().slice(0, 20);
import {
  $, $$, esc, icon, monogram, stars, teamColor, agencyShort, agencyFull, formatDate,
  MODE_LABEL, reducedMotion, toast, confirmDialog, promptDialog, menuDialog, memberName, valueLabel
} from "./ui.js";

// ======================================================================
// 状態
// ======================================================================
const DEFAULT_SETUP = { aiCount: 3, localCount: 4, pickLimit: 5, orderMode: "snake", startOrder: "random", pickMode: "waiver" };
/** 入札の呼び名（1巡目は「第1回選択希望」） */
const bidLabel = round => (round > 1 ? tr("第{n}巡選択希望", { n: round }) : tr("第1回選択希望"));
const LOCAL_TEAM_NAMES = [tr("チームA"), tr("チームB"), tr("チームC"), tr("チームD"), tr("チームE"), tr("チームF"), tr("チームG"), tr("チームH"), tr("チームI"), tr("チームJ")];
const PAGE = () => 20;

const prefs = store.prefs();
const S = {
  route: { name: "home", param: "" },
  draft: null,
  session: null, // { mode, viewerTeamId }
  excluded: store.excluded(),
  shortlist: store.shortlist(),
  presets: store.presets(),
  pool: { query: "", generation: "", nationality: "", agency: "", group: "", hideDrafted: true, showExcluded: false, onlyShortlist: false, sort: "recommended", limit: PAGE() },
  selectedId: null,
  tab: "pool",
  boardMode: "table",
  resultsMode: "table",
  setup: {
    ...DEFAULT_SETUP,
    ...(prefs.setup || {}),
    playerName: prefs.playerName || tr("あなた"),
    teamNames: Array.isArray(prefs.teamNames) ? prefs.teamNames : LOCAL_TEAM_NAMES.slice(),
    limits: E.normalizeLimits(prefs.setup?.limits),
    limitsOn: prefs.setup?.limitsOn === true
  },
  limitsOpen: "",
  speed: prefs.speed === "fast" ? "fast" : "normal",
  online: null, // { room, rev, acks, pending, hostRev, status, players, settings, joinState, error }
  lastSeq: 0,
  savedHistoryIds: new Set(),
  shareStatus: ""
};

function savePrefs() {
  store.savePrefs({
    speed: S.speed,
    playerName: S.setup.playerName,
    teamNames: S.setup.teamNames,
    onlineName: S.onlineName || prefs.onlineName || "",
    roomPublic: Boolean(S.roomPublic),
    setup: { aiCount: S.setup.aiCount, localCount: S.setup.localCount, pickLimit: S.setup.pickLimit, orderMode: S.setup.orderMode, startOrder: S.setup.startOrder, pickMode: S.setup.pickMode, limits: S.setup.limits, limitsOn: S.setup.limitsOn }
  });
}
S.onlineName = prefs.onlineName || "";
S.roomPublic = prefs.roomPublic === true;

const now = () => (S.online?.room ? S.online.room.now() : Date.now());
const isOnline = () => S.draft?.mode === "online";
const isHost = () => Boolean(S.online?.room?.isHost);
const isDirector = () => S.draft && (!isOnline() || isHost());
const speedFactor = () => (reducedMotion() ? 0.35 : S.speed === "fast" ? 0.45 : 1);

function myTeamId() {
  const s = S.draft;
  if (!s) return null;
  if (s.mode === "online") return s.teams.find(t => t.uid && t.uid === S.online?.room?.uid)?.id || null;
  if (s.mode === "ai") return s.teams.find(t => t.kind === "human")?.id || null;
  return null;
}

/** この端末で今操作するチーム（1台モードは手番のチーム） */
function actingTeamId() {
  const s = S.draft;
  if (!s) return null;
  if (s.mode === "local") {
    const current = E.currentTeam(s);
    return current && E.team(s, current)?.kind === "human" ? current : null;
  }
  const mine = myTeamId();
  return mine && E.canAct(s, mine) ? mine : null;
}

function canActNow() {
  const team = actingTeamId();
  if (!team) return false;
  if (isOnline() && S.online?.pending) return false;
  return E.canAct(S.draft, team);
}

const draftedKeys = () => new Set(S.draft?.drafted || []);

// ======================================================================
// ルーティング
// ======================================================================
const VIEWS = ["home", "setup", "room", "draft", "results", "history", "about", "vote"];
let pollModule = null;
const loadPoll = () => import("./poll.js").then(m => (pollModule = m));

function parseRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  const [name, param = ""] = hash.split("/");
  return { name: VIEWS.includes(name) ? name : "home", param };
}

export function go(path, { replace = false } = {}) {
  const target = path ? `#/${path}` : "#/";
  if (location.hash === target) { render(); return; }
  if (replace) history.replaceState(null, "", target);
  else location.hash = target;
  if (replace) onRoute();
}

function onRoute() {
  let route = parseRoute();
  if ((route.name === "draft" || route.name === "results") && !S.draft) {
    const resume = store.resume();
    if (resume?.draft && route.name === "draft") restoreLocal(resume);
    else { history.replaceState(null, "", "#/"); route = { name: "home", param: "" }; }
  }
  if (route.name === "room" && !S.online?.room) { history.replaceState(null, "", "#/setup/online"); route = { name: "setup", param: "online" }; }
  if (route.name === "setup" && !["ai", "local", "online"].includes(route.param)) route.param = "ai";
  const changed = route.name !== S.route.name || route.param !== S.route.param;
  if (changed && S.route.name === "vote") pollModule?.leaveVote();
  if (changed && !["history", "about"].includes(S.route.name)) S.returnTo = location.hash && S.route.name ? `${S.route.name}${S.route.param ? `/${S.route.param}` : ""}` : "";
  if (changed) $$('#toasts [data-slot="pick"]').forEach(el => el.remove());
  S.route = route;
  if (!(route.name === "setup" && route.param === "online")) stopPublicRooms();
  document.body.dataset.view = route.name;
  if (route.name !== "draft") { $("#dockMount").innerHTML = ""; document.body.classList.remove("has-dock"); }
  closeBoardFull();
  VIEWS.forEach(name => { $(`#view-${name}`).hidden = name !== route.name; });
  const navKey = route.param ? `${route.name}/${route.param}` : route.name;
  $$(".appbar-nav a").forEach(link => {
    if (link.dataset.nav === route.name || link.dataset.nav === navKey) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  render();
  if (route.name === "draft" && S.draft && changed) direct();
  if (changed) {
    const view = $(`#view-${route.name}`);
    view.classList.remove("is-entering");
    void view.offsetWidth;
    view.classList.add("is-entering");
    window.scrollTo({ top: 0, behavior: "auto" });
    $("#main").focus({ preventScroll: true });
    document.title = {
      home: tr("KDraft — K-POPガールズグループ・ドラフト"),
      setup: tr("ドラフトの設定 — KDraft"),
      room: tr("オンラインルーム — KDraft"),
      draft: tr("ドラフト中 — KDraft"),
      results: tr("ドラフト結果 — KDraft"),
      history: tr("過去のドラフト — KDraft"),
      about: tr("サイト情報 — KDraft"),
      vote: tr("人気投票 — KDraft")
    }[route.name];
  }
}
window.addEventListener("hashchange", onRoute);

function render() {
  const name = S.route.name;
  renderAppbar();
  if (name === "home") renderHome();
  else if (name === "setup") renderSetup();
  else if (name === "room") renderRoom();
  else if (name === "draft") renderDraft();
  else if (name === "results") renderResults();
  else if (name === "history") renderHistory();
  else if (name === "about") renderAbout();
  else if (name === "vote") loadPoll().then(m => { if (S.route.name === "vote") m.renderVote($("#view-vote")); }).catch(() => { $("#view-vote").innerHTML = `<p class="notice notice-warn">${tr("投票を読み込めませんでした。通信状態を確認してください。")}</p>`; });
  renderReveal();
}

function renderAppbar() {
  const box = $("#appbarContext");
  if (S.route.name === "draft" && S.draft) {
    const code = isOnline() && S.online?.room ? `<span class="chip">${tr("ルーム")} ${esc(S.online.room.code)}</span>` : "";
    box.innerHTML = `<span class="chip chip-brand">${esc(MODE_LABEL[S.draft.mode])}</span>${code}
      <span style="flex:1"></span>
      <button class="btn btn-ghost btn-sm draft-menu-btn" data-action="draft-menu" aria-label="${tr("ドラフトのメニュー")}">${icon("menu")}<span>${tr("メニュー")}</span></button>`;
  } else {
    box.innerHTML = "";
  }
}

// ======================================================================
// ホーム
// ======================================================================
function resumeInfo() {
  if (S.draft && !E.isFinished(S.draft)) return { draft: S.draft, live: true };
  const saved = store.resume();
  if (saved?.draft && !E.isFinished(saved.draft)) return { draft: saved.draft, live: false };
  return null;
}

function renderHome() {
  const resume = resumeInfo();
  const history = store.history().slice(0, 3);
  const resumeHtml = resume ? (() => {
    const d = resume.draft;
    const done = E.totalPicks(d);
    const total = d.teams.length * d.settings.pickLimit;
    return `<div class="resume-card" role="region" aria-label="${tr("途中のドラフト")}">
      <span class="resume-card-mark">${icon("play")}</span>
      <div class="resume-card-copy">
        <strong>${d.mode === "online" ? tr("オンラインドラフトが進行中です") : tr("途中のドラフトがあります")}</strong>
        <span>${esc(tr(MODE_LABEL[d.mode]))}・${tr("{n}チーム", { n: d.teams.length })}・${tr("{done}/{total}人指名済み", { done, total })}・${tr("{n}巡目", { n: d.round })}</span>
      </div>
      <div class="resume-card-actions">
        ${d.mode === "online" ? "" : `<button class="btn btn-ghost btn-sm" data-action="discard-resume">${tr("破棄")}</button>`}
        <button class="btn btn-hot" data-action="resume">${tr("続きから")}</button>
      </div>
    </div>`;
  })() : "";

  $("#view-home").innerHTML = `
    <section class="kv" aria-labelledby="kvTitle">
      <div class="kv-bg" aria-hidden="true">
        <span class="kv-tile t1"></span><span class="kv-tile t2"></span><span class="kv-tile t3"></span><span class="kv-tile t4"></span><span class="kv-tile t5"></span><span class="kv-tile t6"></span>
        <svg class="kv-ribbon" viewBox="0 0 800 340" preserveAspectRatio="none">
          <defs>
            <linearGradient id="kvRib" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
              <stop offset=".35" stop-color="#e9d8ff" stop-opacity=".9"/>
              <stop offset=".6" stop-color="#ffd1ee" stop-opacity=".95"/>
              <stop offset="1" stop-color="#b9e6ff" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path class="glow" d="M120 330 C 300 250, 420 330, 560 220 S 760 40, 820 70"/>
          <path d="M120 330 C 300 250, 420 330, 560 220 S 760 40, 820 70"/>
          <path class="thin" d="M260 345 C 420 290, 520 320, 640 230 S 780 120, 830 140"/>
        </svg>
      </div>
      <div class="kv-copy">
        <p class="kv-kicker">K-POP GIRL GROUP <b>DRAFT</b><i aria-hidden="true"></i></p>
        <h1 id="kvTitle"><span>${tr("推しでつくる、")}</span><span class="kv-shine">${tr("夢のドラフト。")}</span></h1>
        <p class="kv-lead">${tr("条件で絞って、候補を選んで、")}<br>${tr("ドラフトを楽しもう。")}</p>
      </div>
      <div class="kv-card" aria-hidden="true">
        <div class="kv-card-inner">
          <img src="assets/kdraft-280.webp" alt="" width="200" height="200" decoding="async">
          <small>K-POP GIRL GROUP DRAFT</small>
        </div>
        <svg class="kv-spark s1" viewBox="0 0 24 24"><path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0z"/></svg>
        <svg class="kv-spark s2" viewBox="0 0 24 24"><path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0z"/></svg>
        <svg class="kv-spark s3" viewBox="0 0 24 24"><path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0z"/></svg>
      </div>
      <svg class="kv-spark s4" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 0c.8 6.6 4.4 10.4 12 12-7.6 1.6-11.2 5.4-12 12-.8-6.6-4.4-10.4-12-12C7.6 10.4 11.2 6.6 12 0z"/></svg>
    </section>
    <a class="news-strip" href="#/vote">
      <b>${tr("人気投票")}</b><span>${tr("受付中！ グループ・メンバー各1日3票")}</span><i aria-hidden="true">›</i>
    </a>
    ${resumeHtml}

    <section class="home-block" aria-labelledby="modesTitle">
      <header class="block-head"><p>PLAY</p><h2 id="modesTitle">${tr("遊び方を選ぶ")}</h2><span>${tr("どのモードも同じルールで遊べます")}</span></header>
      <div class="mode-big-grid">
        <a class="mode-big" href="#/setup/ai" data-mode="ai">
          <span class="mode-big-icon">${icon("robot")}</span>
          <strong>AI DRAFT</strong><span class="mode-big-ja">${tr("AIとドラフト")}</span><small>${tr("ひとりで遊ぶ")}</small>
        </a>
        <a class="mode-big" href="#/setup/local" data-mode="local">
          <span class="mode-big-icon">${icon("users")}</span>
          <strong>LOCAL</strong><span class="mode-big-ja">${tr("1台で対戦")}</span><small>${tr("その場の友達と")}</small>
        </a>
        <a class="mode-big" href="#/setup/online" data-mode="online">
          <span class="mode-big-icon">${icon("globe")}</span>
          <strong>ONLINE</strong><span class="mode-big-ja">${tr("オンライン")}</span><small>${tr("離れた友達と")}</small>
        </a>
      </div>
      <div class="menu-tiles">
        <a class="menu-tile is-hot" href="#/vote">${icon("heart")}<span><b>${tr("人気投票")}</b><small>${tr("ランキング")}</small></span></a>
        <a class="menu-tile" href="#/history">${icon("refresh")}<span><b>${tr("過去の結果")}</b><small>${tr("履歴・共有")}</small></span></a>
        <button type="button" class="menu-tile" data-action="scroll-rules">${icon("filter")}<span><b>${tr("ドラフトの流れ")}</b><small>${tr("はじめての方へ")}</small></span></button>
        <button type="button" class="menu-tile" data-action="install-help">${icon("addHome")}<span><b>${tr("ホームに追加")}</b><small>${tr("アイコンから開く")}</small></span></button>
      </div>
    </section>

    <section class="home-block" id="rules" aria-labelledby="rulesTitle">
      <header class="block-head"><p>HOW TO PLAY</p><h2 id="rulesTitle">${tr("ドラフトの流れ")}</h2><span>${tr("プロ野球のドラフト会議と同じ進め方です")}</span></header>
      <ol class="rules">
        <li class="rule"><h3>${tr("チームと人数を決める")}</h3><p>${tr("チーム数と、各チームが指名する人数（1〜8人）を決めます。最初の順番は抽選か設定順。")}</p></li>
        <li class="rule"><h3>${tr("1巡目は入札")}</h3><p>${tr("全チームが「第1回選択希望メンバー」を1人ずつ入札。そろったら順番に発表します。")}</p></li>
        <li class="rule"><h3>${tr("重なったら抽選")}</h3><p>${tr("同じメンバーに入札が重なったら封筒で抽選。外れたチームは、全員が決まるまで再入札。")}</p></li>
        <li class="rule"><h3>${tr("2巡目からは順番に")}</h3><p>${tr("ウェーバー（前の巡の逆順）か毎巡同じ順で、1人ずつ指名して全員そろったら終了。設定で「毎巡 入札」にすると、全部の巡を入札と抽選で進めます。")}</p></li>
      </ol>
    </section>

    ${history.length ? `<section class="home-block" aria-labelledby="recentTitle">
      <header class="block-head"><p>RECENT</p><h2 id="recentTitle">${tr("最近のドラフト")}</h2><a class="block-more" href="#/history">${tr("すべて見る ›")}</a></header>
      <div class="recent-list">${history.map(entry => `
        <a class="recent-item" href="#/history">
          <time>${esc(formatDate(entry.completedAt))}</time>
          <strong>${esc(MODE_LABEL[entry.mode] || tr("ドラフト"))}・${tr("{n}チーム", { n: (entry.teams || []).length })}</strong>
          <span>${esc((entry.teams || []).map(t => `${t.name}：${(t.picks || []).find(p => Number(p.round) === 1)?.name || "—"}`).join("　"))}</span>
        </a>`).join("")}</div>
    </section>` : ""}

    <footer class="site-foot">
      <span>${tr("KDraft は非公式のファン制作ゲームです。各グループ・事務所・情報元とは関係ありません。")}</span>
      <a href="#/about">${tr("出典・権利表記・プライバシー")}</a>
    </footer>`;
}

// ======================================================================
// 設定
// ======================================================================
function segmented(name, options, value, { disabled = false, label = "" } = {}) {
  return `<div class="segmented" role="radiogroup" ${label ? `aria-label="${esc(label)}"` : ""} data-seg="${esc(name)}">
    ${options.map(([v, text, sub]) => `<button type="button" role="radio" aria-checked="${v === value}" data-value="${esc(v)}" ${disabled ? "disabled" : ""}>${esc(text)}${sub ? `<small>${esc(sub)}</small>` : ""}</button>`).join("")}
  </div>`;
}

function stepper(name, value, min, max, unit, { disabled = false } = {}) {
  return `<div class="stepper" data-stepper="${esc(name)}" data-min="${min}" data-max="${max}">
    <button type="button" data-step="-1" aria-label="${tr("減らす")}" ${disabled || value <= min ? "disabled" : ""}>−</button>
    <output aria-live="polite">${value}<small>${esc(unit)}</small></output>
    <button type="button" data-step="1" aria-label="${tr("増やす")}" ${disabled || value >= max ? "disabled" : ""}>＋</button>
  </div>`;
}

function rulesFields(settings, { disabled = false } = {}) {
  return `
    <div class="setup-row">
      <div class="field"><span class="field-label">${tr("各チームの指名人数")}</span>${stepper("pickLimit", settings.pickLimit, 1, 8, tr("人"), { disabled })}</div>
    </div>
    <div class="field"><span class="field-label">${tr("指名のしかた")}</span>
      ${segmented("pickMode", [["waiver", tr("1巡目だけ入札"), tr("2巡目からは順番に指名")], ["bid", tr("毎巡 入札"), tr("重なったら毎回抽選")]], settings.pickMode === "bid" ? "bid" : "waiver", { disabled, label: tr("指名のしかた") })}</div>
    <div class="field"><span class="field-label">${tr("1巡目のチーム順")}</span>
      ${segmented("startOrder", [["random", tr("開始時にランダム抽選")], ["fixed", tr("設定した順番のまま")]], settings.startOrder, { disabled, label: tr("1巡目のチーム順") })}</div>
    <div class="field"><span class="field-label">${tr("2巡目以降の指名順")}</span>
      ${segmented("orderMode", [["snake", tr("ウェーバー"), tr("前の巡の逆順")], ["fixed", tr("毎巡同じ順番"), tr("チーム順で固定")]], settings.orderMode, { disabled, label: tr("2巡目以降の指名順") })}
      ${settings.pickMode === "bid" ? `<p class="field-hint">${tr("毎巡入札では、この順番が入札順と抽選の封筒を選ぶ順になります。")}</p>` : ""}</div>`;
}

// ---------------------------------------------------------------- 縛り（候補の条件）
let limitGroupsCache = null;
const limitGroups = () => limitGroupsCache || (limitGroupsCache = (() => {
  const count = (fn) => {
    const map = new Map();
    idols.forEach(idol => fn(idol).forEach(value => { if (value && value !== "未公表" && value !== "未確認") map.set(value, (map.get(value) || 0) + 1); }));
    return [...map.entries()];
  };
  const generations = count(i => [i.generation]).sort((a, b) => a[0].localeCompare(b[0], "ja"));
  const nationalities = count(i => String(i.nationality || "").split("・")).sort((a, b) => b[1] - a[1]);
  const agencies = count(i => [agencyFilterName(i.agency)]).sort((a, b) => b[1] - a[1]);
  return [
    { key: "generations", label: tr("世代"), items: generations, show: 99 },
    { key: "nationalities", label: tr("国籍"), items: nationalities, show: 8 },
    { key: "agencies", label: tr("事務所"), items: agencies, show: 12 }
  ];
})());
const NO_LIMITS = { generations: [], nationalities: [], agencies: [] };
/** 縛り「あり」の時だけ条件を使う */
const effectiveLimits = settings => (settings?.limitsOn ? E.normalizeLimits(settings.limits) : NO_LIMITS);
const eligibleCache = new Map();
const eligibleCount = limits => {
  const key = JSON.stringify(limits || {});
  if (!eligibleCache.has(key)) eligibleCache.set(key, E.eligibleCount(limits));
  return eligibleCache.get(key);
};

function limitsBlock(settings, opts = {}) {
  const on = Boolean(settings?.limitsOn);
  return `${segmented("limitsOn", [["off", tr("なし"), tr("全員が候補")], ["on", tr("あり"), tr("条件で絞る")]], on ? "on" : "off", { disabled: opts.disabled, label: tr("縛り") })}
    ${on ? limitsFields(E.normalizeLimits(settings.limits), opts) : ""}`;
}

function limitsFields(limits, { disabled = false, teamCount = 0, pickLimit = 5 } = {}) {
  const total = eligibleCount(limits);
  const need = teamCount * pickLimit;
  const short = teamCount > 0 && total < need;
  const any = E.hasLimits(limits);
  return `<div class="limits ${disabled ? "is-disabled" : ""}">
    <p class="field-hint">${tr("選ぶと、その条件に合うメンバーだけが候補になります。何も選ばなければ全員が候補です。同じ項目の中で複数選ぶと「どれか」に合う人が対象です。")}</p>
    ${limitGroups().map(group => {
      const selected = new Set(limits?.[group.key] || []);
      const open = S.limitsOpen === group.key;
      const items = open ? group.items : group.items.filter(([value], i) => i < group.show || selected.has(value));
      const hidden = group.items.length - items.length;
      return `<div class="limit-group"><span class="field-label">${esc(group.label)}${selected.size ? `<b>${tr("{n}件", { n: selected.size })}</b>` : ""}</span>
        <div class="limit-chips">${items.map(([value, n]) => `<button type="button" class="limit-chip" data-action="toggle-limit" data-key="${group.key}" data-value="${esc(value)}" aria-pressed="${selected.has(value)}" ${disabled ? "disabled" : ""}>${esc(group.key === "agencies" ? shortAgencyName(value) : valueLabel(value))}<small>${n}</small></button>`).join("")}
          ${hidden > 0 ? `<button type="button" class="limit-more" data-action="limits-more" data-key="${group.key}">${tr("ほか{n}件を表示", { n: hidden })}</button>` : open && group.items.length > group.show ? `<button type="button" class="limit-more" data-action="limits-more" data-key="">${tr("たたむ")}</button>` : ""}
        </div></div>`;
    }).join("")}
    <div class="limit-summary ${short ? "is-short" : ""}">
      <span>${any ? `${tr("縛り：")}<strong>${esc(E.limitsLabel(limits))}</strong>` : tr("縛りなし（全員が候補）")}</span>
      <span>${tr("候補 {n}人", { n: `<strong>${total}</strong>` })}${teamCount ? tr("／必要 {n}人", { n: need }) : ""}</span>
      ${any && !disabled ? `<button type="button" class="btn btn-ghost btn-sm" data-action="limits-clear">${tr("縛りを外す")}</button>` : ""}
    </div>
    ${short ? `<p class="notice notice-warn">${tr("候補が足りません。{need}人（{teams}チーム×{picks}人）以上になるよう、条件を増やすか指名人数を減らしてください。", { need, teams: teamCount, picks: pickLimit })}</p>` : ""}
  </div>`;
}

const SETUP_COPY = {
  ai: {
    title: tr("AIとドラフト"),
    lead: tr("あなたとAIでドラフトします。AIはチームごとに指名の好みが違います。"),
    points: [tr("AIは同世代型・世代ミックス型・同事務所型・事務所ミックス型・同国籍型・国籍ミックス型・ランダム型の順に入ります"), tr("AIも人気（星）を参考にしつつ、チーム構成を考えて指名します"), tr("途中で閉じても、続きから再開できます")]
  },
  local: {
    title: tr("1台で対戦"),
    lead: tr("1台の端末を回して遊びます。画面上部に今の手番のチームが出ます。"),
    points: [tr("1巡目の入札は、全チームがそろうまで名前が伏せられます"), tr("抽選の封筒は、当たったチームの順に選びます"), tr("チーム名は空欄なら初期名になります")]
  },
  online: {
    title: tr("オンライン"),
    lead: tr("ルームを作って招待リンクを送れば、離れた友達とドラフトできます。"),
    points: [tr("2〜10人で遊べます。登録やログインは不要です"), tr("1巡目は全員が同時に入札。ホストが開示すると全員の画面で発表が始まります"), tr("表示名とドラフト結果はルームの参加者に共有されます。本名や連絡先は入れないでください")]
  }
};

function renderSetup() {
  const mode = S.route.param;
  const copy = SETUP_COPY[mode];
  const st = S.setup;
  let form = "";
  if (mode === "ai") {
    form = `
      <div class="panel setup-form">
        <div class="setup-section">
          <h2>${tr("チーム")}</h2>
          <div class="setup-row">
            <label class="field"><span class="field-label">${tr("あなたのチーム名")}</span>
              <input class="input" data-setup="playerName" maxlength="16" value="${esc(st.playerName)}" placeholder="${tr("あなた")}" autocomplete="off"></label>
            <div class="field"><span class="field-label">${tr("AIの数（あなた以外）")}</span>${stepper("aiCount", st.aiCount, 1, 10, tr("人"))}</div>
          </div>
          <p class="field-hint">${tr("合計 {n} チームでドラフトします。", { n: st.aiCount + 1 })}</p>
        </div>
        <div class="setup-section"><h2>${tr("ルール")}</h2>${rulesFields(st)}</div>
        <div class="setup-section"><h2>${tr("縛り")}</h2>${limitsBlock(st, { teamCount: st.aiCount + 1, pickLimit: st.pickLimit })}</div>
        <div class="setup-section"><h2>${tr("演出")}</h2>
          <div class="field"><span class="field-label">${tr("発表のテンポ")}</span>${segmented("speed", [["normal", tr("じっくり")], ["fast", tr("テンポよく")]], S.speed, { label: tr("発表のテンポ") })}</div>
        </div>
        <div class="setup-start"><button class="btn btn-primary btn-lg" data-action="start-local">${icon("play")}${tr("ドラフトを始める")}</button></div>
      </div>`;
  } else if (mode === "local") {
    const names = Array.from({ length: st.localCount }, (_, i) => st.teamNames[i] ?? LOCAL_TEAM_NAMES[i]);
    form = `
      <div class="panel setup-form">
        <div class="setup-section">
          <h2>${tr("チーム")}</h2>
          <div class="field"><span class="field-label">${tr("チーム数")}</span>${stepper("localCount", st.localCount, 1, 10, tr("チーム"))}</div>
          <div class="field"><span class="field-label">${tr("チーム名")}</span>
            <div class="team-names">${names.map((name, i) => `
              <label class="team-name-input" style="--team-color:${teamColor(i)}"><i aria-hidden="true"></i>
                <span class="sr-only">${tr("チーム{n}の名前", { n: i + 1 })}</span>
                <input class="input" data-team-name="${i}" maxlength="16" value="${esc(name)}" placeholder="${esc(LOCAL_TEAM_NAMES[i])}" autocomplete="off"></label>`).join("")}
            </div>
          </div>
        </div>
        <div class="setup-section"><h2>${tr("ルール")}</h2>${rulesFields(st)}</div>
        <div class="setup-section"><h2>${tr("縛り")}</h2>${limitsBlock(st, { teamCount: st.localCount, pickLimit: st.pickLimit })}</div>
        <div class="setup-section"><h2>${tr("演出")}</h2>
          <div class="field"><span class="field-label">${tr("発表のテンポ")}</span>${segmented("speed", [["normal", tr("じっくり")], ["fast", tr("テンポよく")]], S.speed, { label: tr("発表のテンポ") })}</div>
        </div>
        <div class="setup-start"><button class="btn btn-primary btn-lg" data-action="start-local">${icon("play")}${tr("ドラフトを始める")}</button></div>
      </div>`;
  } else {
    const invite = new URLSearchParams(location.search).get("room") || "";
    const configured = onlineConfigured();
    if (configured) loadOnline().then(m => m.warmup()).catch(() => {});
    const err = S.online?.error || "";
    form = `
      <div class="setup-form">
        <div class="panel setup-section">
          <label class="field"><span class="field-label">${tr("あなたの表示名（チーム名になります）")}</span>
            <input class="input" id="onlineName" maxlength="16" value="${esc(S.onlineName)}" placeholder="${tr("例：ゆき")}" autocomplete="nickname"></label>
          <p class="field-hint">${tr("ルームの参加者に表示されます。本名や連絡先は使わないでください。")}</p>
        </div>
        ${configured ? "" : `<p class="notice notice-warn">${tr("オンライン機能の設定が見つかりません。")}</p>`}
        <div class="online-choice">
          <div class="panel" ${invite ? 'style="order:2"' : ""}>
            <div><h2 class="panel-title">${tr("ルームを作る")}</h2><p class="panel-sub">${tr("あなたがホストになります。ルールはルームで決められます。")}</p></div>
            <label class="field"><span class="field-label">${tr("ルーム名（任意）")}</span>
              <input class="input" id="roomName" maxlength="20" value="${esc(S.roomName || "")}" placeholder="${tr("例：○○縛り")}" autocomplete="off"></label>
            <label class="check-row"><input type="checkbox" id="roomPublic" ${S.roomPublic ? "checked" : ""}><span><strong>${tr("ルーム一覧に公開する")}</strong><small>${tr("オフなら招待リンクを知っている人だけが参加できます")}</small></span></label>
            <button class="btn btn-primary" data-action="create-room" ${configured ? "" : "disabled"}>${icon("globe")}${tr("ルームを作る")}</button>
          </div>
          <div class="panel">
            <div><h2 class="panel-title">${tr("招待コードで参加")}</h2><p class="panel-sub">${tr("ホストから届いた8文字のコードを入れてください。")}</p></div>
            <input class="input code-input" id="roomCode" maxlength="9" value="${esc(invite)}" placeholder="ABCD2345" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="${tr("ルームコード")}">
            <button class="btn ${invite ? "btn-primary" : "btn-secondary"}" data-action="join-room" ${configured ? "" : "disabled"}>${tr("参加する")}</button>
          </div>
        </div>
        <p class="status-line ${err ? "is-error" : ""}" id="onlineStatus" role="status">${esc(err || S.online?.message || "")}</p>
        ${configured ? `<section class="panel public-rooms" aria-labelledby="publicRoomsTitle">
          <div class="public-head"><h2 class="panel-title" id="publicRoomsTitle">${tr("公開中のルーム")}</h2><span class="panel-sub">${tr("参加すると、上の表示名で入ります")}</span></div>
          <div id="publicRooms"></div>
        </section>` : ""}
      </div>`;
  }
  $("#view-setup").innerHTML = `
    <a class="back-link" href="#/">${tr("ホームへ戻る")}</a>
    <div class="setup">
      <aside class="setup-aside" data-mode="${mode}">
        <h1>${esc(copy.title)}</h1>
        <p>${esc(copy.lead)}</p>
        <ul>${copy.points.map(point => `<li>${esc(point)}</li>`).join("")}</ul>
      </aside>
      ${form}
    </div>`;
  if (mode === "online") { renderPublicRooms(); startPublicRooms(); }
}

async function startLocalDraft() {
  const mode = S.route.param === "local" ? "local" : "ai";
  const existing = resumeInfo();
  if (existing && existing.draft.mode !== "online") {
    const ok = await confirmDialog({ title: tr("途中のドラフトを破棄しますか？"), message: tr("新しいドラフトを始めると、保存されている途中のドラフトは消えます。"), ok: tr("破棄して始める"), danger: true });
    if (!ok) return;
  }
  const st = S.setup;
  const teams = mode === "ai"
    ? [{ name: (st.playerName || "").trim() || tr("あなた"), kind: "human" }, ...Array.from({ length: st.aiCount }, (_, i) => ({ name: `AI${i + 1}`, kind: "ai" }))]
    : Array.from({ length: st.localCount }, (_, i) => ({ name: (st.teamNames[i] || "").trim() || LOCAL_TEAM_NAMES[i], kind: "human" }));
  const limits = effectiveLimits(st);
  if (eligibleCount(limits) < teams.length * st.pickLimit) {
    toast(tr("縛りの候補が足りません。条件を増やすか、指名人数を減らしてください。"));
    return;
  }
  savePrefs();
  beginDraft(E.createDraft({ mode, teams, settings: { pickLimit: st.pickLimit, orderMode: st.orderMode, startOrder: st.startOrder, pickMode: st.pickMode, limits } }));
}

function beginDraft(state) {
  S.draft = state;
  S.selectedId = null;
  S.lastSeq = state.seq;
  S.tab = "pool";
  S.pool.limit = PAGE();
  S.shareStatus = "";
  go("draft");
  commit({ silent: true });
  if (state.settings.startOrder === "random") {
    toast(tr("抽選で順番が決まりました：{order}", { order: state.teams.map(t => t.name).join("→") }), { duration: 4200 });
  }
}

function restoreLocal(resume) {
  S.draft = resume.draft;
  S.lastSeq = S.draft.seq;
  S.selectedId = null;
}

// ======================================================================
// 進行（AI の手番・発表のテンポ）— 1台/AI と オンラインのホストが担当
// ======================================================================
let directorTimer = null;
function schedule(fn, ms) {
  clearTimeout(directorTimer);
  directorTimer = window.setTimeout(() => { directorTimer = null; fn(); }, Math.max(0, ms));
}
function stopDirector() { clearTimeout(directorTimer); directorTimer = null; }

const T = {
  intro: 1900, lotteryIntro: 1200, shownLocal: 2800, shownOnline: 4000,
  aiBid: 450, aiPick: 650, envelope: 800, readyLocal: 900, opening: 2300, resultOnline: 5200, resultLocal: 6000
};

function isAutoTeam(state, teamId) {
  const entry = E.team(state, teamId);
  return Boolean(entry && (entry.kind === "ai" || entry.departed));
}

function direct() {
  stopDirector();
  const s = S.draft;
  if (!s || !isDirector() || E.isFinished(s)) return;
  if (s.mode !== "online" && S.route.name !== "draft") return;
  const k = speedFactor();
  const r = s.reveal;
  if (r) {
    if (r.stage === "intro") return schedule(() => { E.showReveal(s, now()); commit(); }, (r.type === "lottery" ? T.lotteryIntro : T.intro) * k);
    if (r.stage === "shown") return schedule(() => { E.advanceReveal(s, now()); commit(); }, (isOnline() ? T.shownOnline : T.shownLocal) * (isOnline() ? 1 : k));
    if (r.stage === "choosing") {
      const drawer = E.lotteryDrawer(s);
      if (drawer && isAutoTeam(s, drawer)) {
        return schedule(() => {
          const free = [...Array(r.envelopes).keys()].filter(i => !(String(i) in r.selections));
          E.chooseEnvelope(s, drawer, free[Math.floor(Math.random() * free.length)], now());
          commit();
        }, T.envelope * k);
      }
      return;
    }
    if (r.stage === "ready") {
      if (isOnline()) return;
      return schedule(() => { E.openLottery(s, now()); commit(); }, T.readyLocal * k);
    }
    if (r.stage === "opening") return schedule(() => { E.completeLottery(s, now()); commit(); }, reducedMotion() ? 300 : T.opening);
    if (r.stage === "result") return schedule(() => { E.advanceReveal(s, now()); commit(); }, isOnline() ? T.resultOnline : T.resultLocal);
    return;
  }
  if (s.r1.awaitingOpen) return;
  if (!s.r1.started) {
    if (s.mode === "online") return;
    const team = E.currentTeam(s);
    if (team && isAutoTeam(s, team)) {
      return schedule(() => {
        const idol = chooseAIIdol(s, team, S.excluded);
        E.submitBid(s, team, idol?.id || "", now());
        commit();
      }, T.aiBid * k);
    }
    return;
  }
  const team = E.currentTeam(s);
  if (team && isAutoTeam(s, team)) {
    schedule(() => {
      const idol = chooseAIIdol(s, team, S.excluded);
      if (idol) { E.submitPick(s, team, idol.id, now()); commit(); }
    }, T.aiPick * k);
  }
}

/** 状態が変わったら必ず呼ぶ：保存・同期・描画・次の進行 */
function commit({ silent = false } = {}) {
  const s = S.draft;
  if (!s) return;
  // 新しく起きたこと（指名）を通知
  if (!silent) announce(s);
  S.lastSeq = s.seq;
  if (s.mode !== "online") {
    if (E.isFinished(s)) store.saveResume(null);
    else store.saveResume({ draft: s });
  } else if (isHost()) {
    pushOnlineState();
  }
  if (S.selectedId && !E.idolAvailable(s, S.selectedId)) S.selectedId = null;
  // 発表中は下の画面が隠れているので描き直さない（終わったときにまとめて更新）
  if (S.route.name === "draft") {
    if (s.reveal && !$("#reveal").hidden) S.draftDirty = true;
    else { S.draftDirty = false; renderDraft(); }
  } else renderAppbar();
  renderReveal();
  if (E.isFinished(s)) onFinished();
  else direct();
}

function announce(s) {
  const fresh = s.log.filter(entry => entry.seq > S.lastSeq);
  fresh.forEach(entry => {
    if (entry.kind === "pick" && entry.round >= 2 && s.mode !== "online") {
      // ボードが見えていない（スマホの候補タブ）ときだけ知らせる
      if (window.innerWidth > 1100 || S.tab !== "pool" || S.route.name !== "draft") return;
      const idol = E.idolById.get(entry.idolId);
      toast(tr("{team} が {name} を指名", { team: E.teamLabel(s, entry.teamId), name: memberName(idol) }), { color: teamColor(E.teamIndex(s, entry.teamId)), duration: 2200, slot: "pick" });
    } else if (entry.kind === "rebid") {
      toast(tr("外れたチームは再入札です（{n}回目）", { n: entry.attempt }));
    } else if (entry.kind === "round" && E.biddingEveryRound(s)) {
      toast(tr("{prev}巡目が確定しました。{n}巡目も入札です", { prev: entry.round - 1, n: entry.round }));
    } else if (entry.kind === "round" && entry.round === 2) {
      toast(tr("1巡目が確定しました。2巡目からは順番に指名します"));
    } else if (entry.kind === "departed") {
      toast(tr("{team} が退出しました。以降の指名はスキップします", { team: E.teamLabel(s, entry.teamId) }));
    }
  });
}

function onFinished() {
  const s = S.draft;
  saveHistory(s);
  if (S.route.name === "draft") window.setTimeout(() => { if (S.draft === s && S.route.name === "draft") go("results"); }, 900);
}

function saveHistory(s) {
  if (S.savedHistoryIds.has(s.id)) return;
  S.savedHistoryIds.add(s.id);
  const list = store.history();
  if (list.some(entry => entry?.id === s.id)) return;
  const entry = {
    id: s.id,
    completedAt: Date.now(),
    mode: s.mode,
    pickLimit: s.settings.pickLimit,
    limitsLabel: E.limitsLabel(s.settings.limits),
    teams: s.teams.map(team => ({
      name: E.teamLabel(s, team.id),
      isMe: team.id === myTeamId(),
      picks: (s.picks[team.id] || []).map(pick => {
        const idol = E.idolById.get(pick.idolId);
        return { round: pick.round, name: memberName(idol) || "", group: idol?.group || "", agency: idol?.agency || "" };
      }),
      losses: Array.from({ length: s.settings.pickLimit }, (_, i) => E.lossesFor(s, team.id, i + 1).map(id => {
        const idol = E.idolById.get(id);
        return { round: i + 1, name: memberName(idol) || "", group: idol?.group || "", agency: idol?.agency || "" };
      })).flat()
    }))
  };
  store.saveHistory([entry, ...list].slice(0, HISTORY_LIMIT));
}

// ======================================================================
// ドラフト画面
// ======================================================================
function renderDraft() {
  const s = S.draft;
  const view = $("#view-draft");
  if (!s) { view.innerHTML = ""; return; }
  if (!view.querySelector(".draft-layout")) {
    view.innerHTML = `
      <div id="turnBanner"></div>
      <div class="order-strip" id="orderStrip" aria-label="${tr("指名順")}"></div>
      ${segmented("tab", [["pool", tr("候補を探す")], ["board", tr("指名ボード")]], S.tab, { label: tr("表示の切り替え") }).replace('class="segmented"', 'class="segmented draft-tabs"')}
      <div class="draft-layout" data-tab="${S.tab}">
        <section class="pool" aria-label="${tr("候補メンバー")}">
          <div class="pool-tools" id="poolTools"></div>
          <div class="card-grid" id="cardGrid"></div>
        </section>
        <aside class="board-panel" aria-label="${tr("指名ボード")}" id="boardPanel"></aside>
      </div>`;
    renderPoolTools();
    S.cardsKey = "";
  }
  view.querySelector(".draft-layout").dataset.tab = S.tab;
  $$('[data-seg="tab"] button', view).forEach(b => b.setAttribute("aria-checked", String(b.dataset.value === S.tab)));
  renderAppbar();
  renderTurn();
  renderOrderStrip();
  const cardsKey = `${s.id}:${s.drafted.length}`;
  if (S.cardsKey !== cardsKey) { S.cardsKey = cardsKey; renderCards(); updateFilterOptions(); }
  renderBoardPanel();
  renderDock();
}

function bannerContent(s) {
  const mine = myTeamId();
  const acting = actingTeamId();
  const total = s.teams.filter(t => !t.departed).length * s.settings.pickLimit;
  const done = E.totalPicks(s);
  let title = "";
  let sub = "";
  let action = "";
  let state = "";
  let color = "";
  if (E.isFinished(s)) {
    title = tr("ドラフト終了！");
    sub = tr("全チームの指名がそろいました。");
    action = `<button class="btn btn-light" data-action="to-results">${tr("結果を見る")}</button>`;
  } else if (s.reveal || s.queue.length) {
    title = s.reveal?.type === "lottery" ? tr("抽選中") : tr("指名発表中");
    sub = tr("発表画面で確認してください。");
    state = "is-waiting";
  } else if (!s.r1.started) {
    const count = E.firstRoundBidCount(s);
    const live = s.r1.order.filter(id => !E.isDeparted(s, id)).length;
    const rebid = s.r1.attempt > 1 ? tr("再入札") : tr("入札");
    if (s.r1.awaitingOpen) {
      title = tr("全員の入札がそろいました");
      if (isHost()) { sub = tr("ホストの操作待ちです。右のボタンを押すと、全員の画面で発表が始まります。"); state = "is-host-action"; action = `<button class="btn btn-light btn-attention" data-action="open-bids">${icon("play")}${tr("入札を開示する")}</button>`; }
      else { sub = tr("ホストが開示すると発表が始まります。"); state = "is-waiting"; }
    } else if (s.mode === "online") {
      if (mine && E.bidPending(s, mine)) {
        title = S.online?.pending ? tr("入札しました") : tr("{label}メンバーを{action}してください", { label: bidLabel(s.round), action: rebid });
        sub = tr("提出済み {count}/{live}チーム。入札は全員がそろうまで伏せられます。", { count, live });
        state = S.online?.pending ? "is-waiting" : "is-mine";
      } else {
        title = tr("ほかのチームの入札を待っています");
        sub = tr("提出済み {count}/{live}チーム", { count, live });
        state = "is-waiting";
      }
    } else {
      const current = E.currentTeam(s);
      color = teamColor(E.teamIndex(s, current));
      if (acting) {
        title = s.mode === "ai" ? tr("あなたの{action}番です", { action: rebid }) : tr("{team} の{action}番です", { team: E.teamLabel(s, current), action: rebid });
        sub = s.mode === "local" ? tr("ほかの人に見えないように候補を選んで入札してください。") : tr("候補を選んで入札してください。全員そろったら発表です。");
        state = "is-mine";
      } else {
        title = tr("{team} が{action}中", { team: E.teamLabel(s, current), action: rebid });
        sub = tr("提出済み {count}/{live}チーム", { count, live });
        state = "is-waiting";
      }
    }
  } else {
    const current = E.currentTeam(s);
    color = teamColor(E.teamIndex(s, current));
    const label = E.teamLabel(s, current);
    if (acting) {
      title = s.mode === "local" ? tr("{team} の指名番です", { team: label }) : tr("あなたの指名番です");
      sub = S.online?.pending ? tr("指名しました。まもなく発表されます。") : tr("第{n}巡選択メンバーを選んでください。", { n: s.round });
      state = S.online?.pending ? "is-waiting" : "is-mine";
    } else {
      title = isAutoTeam(s, current) ? tr("{team} が指名中", { team: label }) : tr("{team} の指名番です", { team: label });
      sub = mine ? `${tr("あなたは次の巡も同じ順番で待ちます。")}` : "";
      sub = mine && s.mode !== "local" ? tr("指名を待っています。") : sub;
      state = "is-waiting";
    }
  }
  return { title, sub, action, state, color, done, total };
}

function renderTurn() {
  const s = S.draft;
  const box = $("#turnBanner");
  if (!box) return;
  const b = bannerContent(s);
  const roundLabel = tr("{n}巡", { n: s.round });
  const roundSub = s.r1.started ? tr("全{n}巡", { n: s.settings.pickLimit }) : (s.r1.attempt > 1 ? tr("再入札 {n}回目", { n: s.r1.attempt }) : tr("入札"));
  box.innerHTML = `
    <div class="turn-banner ${b.state}" style="${b.color ? `--turn-color:${b.color}` : ""}" role="status" aria-live="polite">
      <div class="turn-round">${roundLabel}<small>${esc(roundSub)}</small></div>
      <div class="turn-main"><strong>${esc(b.title)}</strong>${b.sub ? `<span>${esc(b.sub)}</span>` : ""}</div>
      <div class="turn-side">
        ${b.action}
        <div class="turn-progress"><b>${b.done}<small>/${tr("{n}人", { n: b.total })}</small></b><div class="progress-bar"><i style="width:${b.total ? Math.round((b.done / b.total) * 100) : 0}%"></i></div></div>
      </div>
      <div class="turn-line" aria-hidden="true"><i style="width:${b.total ? Math.round((b.done / b.total) * 100) : 0}%"></i></div>
    </div>`;
}

// ---------------------------------------------------------------- 指名順（矢印つき）
function renderOrderStrip() {
  const box = $("#orderStrip");
  const s = S.draft;
  if (!box || !s) return;
  const me = myTeamId();
  const current = E.currentTeam(s);
  const item = (id, state) => {
    const t = E.team(s, id);
    return `<li class="order-item is-${state}${id === me ? " is-me" : ""}" style="--team-color:${teamColor(E.teamIndex(s, id))}">
      <i aria-hidden="true"></i><span>${esc(t?.name || "")}${id === me && t?.name !== tr("あなた") ? `<small>${tr("（あなた）")}</small>` : ""}</span>${state === "done" ? `<b aria-label="${tr("済み")}">✓</b>` : ""}</li>`;
  };
  const arrow = '<li class="order-arrow" aria-hidden="true">→</li>';
  let label = "";
  let items = [];
  if (E.isFinished(s)) {
    box.hidden = true;
    return;
  }
  if (!s.r1.started) {
    const order = s.resolution ? s.resolution.batchOrder : s.r1.order;
    label = s.mode === "online" ? tr("{n}巡目（同時入札）", { n: s.round }) : (s.r1.attempt > 1 ? tr("再入札の順番") : tr("{n}巡目の入札順", { n: s.round }));
    items = order.filter(id => !E.isDeparted(s, id)).map(id => item(id,
      (id in s.r1.bids) || s.resolution ? "done" : (s.mode !== "online" && id === current) ? "now" : "wait"));
    const sep = s.mode === "online" ? '<li class="order-arrow" aria-hidden="true">・</li>' : arrow;
    box.innerHTML = `<span class="order-label">${label}</span><ol class="order-list">${items.join(sep)}</ol>`;
  } else {
    label = tr("{n}巡目の指名順", { n: s.round });
    items = s.order.filter(id => !E.isDeparted(s, id) && (s.picks[id] || []).length <= s.settings.pickLimit).map((id, index) => {
      const pickedThisRound = (s.picks[id] || []).some(p => p.round === s.round);
      return item(id, pickedThisRound ? "done" : id === current ? "now" : "wait");
    });
    const nextNote = s.round < s.settings.pickLimit ? `<span class="order-note">${s.settings.orderMode === "snake" ? tr("次の巡は逆順") : tr("次の巡も同じ順")}</span>` : "";
    box.innerHTML = `<span class="order-label">${label}</span><ol class="order-list">${items.join(arrow)}</ol>${nextNote}`;
  }
  box.hidden = false;
  box.querySelector(".is-now")?.scrollIntoView({ block: "nearest", inline: "center" });
}

// ---------------------------------------------------------------- 候補
function compareCandidates(a, b) {
  const recommended = () =>
    (b.popularityStars || 0) - (a.popularityStars || 0) ||
    (Number(b.popularitySortScore) || 0) - (Number(a.popularitySortScore) || 0) ||
    memberName(a).localeCompare(memberName(b), lang);
  if (S.pool.sort === "score") return (Number(b.popularityScore) || 0) - (Number(a.popularityScore) || 0) || recommended();
  if (S.pool.sort === "generation") return (parseInt(a.generation, 10) || 0) - (parseInt(b.generation, 10) || 0) || recommended();
  if (S.pool.sort === "name") return memberName(a).localeCompare(memberName(b), lang) || recommended();
  return recommended();
}

function candidates(ignore = "", dedupe = true) {
  const p = S.pool;
  const query = normalizeSearchText(p.query.trim());
  const drafted = draftedKeys();
  const ranks = new Map();
  const limits = S.draft?.settings?.limits;
  const list = idols.filter(idol => {
    if (limits && !E.inLimits(limits, idol)) return false;
    if (!query) return true;
    const rank = searchRank(idol.id, query);
    if (rank < 0) return false;
    ranks.set(idol.id, rank);
    return true;
  }).filter(idol =>
    (ignore === "generation" || !p.generation || idol.generation === p.generation) &&
    (ignore === "nationality" || !p.nationality || idol.nationality === p.nationality) &&
    (ignore === "agency" || !p.agency || agencyFilterName(idol.agency) === p.agency) &&
    (ignore === "group" || !p.group || idol.group === p.group) &&
    (!p.hideDrafted || !drafted.has(idol.personKey)) &&
    (p.showExcluded || !S.excluded.has(idol.id)) &&
    (!p.onlyShortlist || S.shortlist.has(idol.id))
  );
  if (!dedupe) return list;
  // 検索中は「名前が当てはまる人」を先に、その中はいつもの並び順
  return preferredPersonCandidates(list, query).sort((a, b) =>
    (query ? (ranks.get(a.id) ?? 2) - (ranks.get(b.id) ?? 2) : 0) || compareCandidates(a, b));
}

const FILTERS = [
  ["generation", tr("世代"), idol => idol.generation],
  ["nationality", tr("国籍"), idol => idol.nationality],
  ["agency", tr("事務所"), idol => agencyFilterName(idol.agency)],
  ["group", tr("グループ"), idol => idol.group]
];

function renderPoolTools() {
  const box = $("#poolTools");
  if (!box) return;
  const p = S.pool;
  const presetNames = Object.keys(S.presets);
  const limits = S.draft?.settings?.limits;
  box.innerHTML = `
    ${E.hasLimits(limits) ? `<p class="pool-limits"><b>${tr("縛り")}</b>${esc(E.limitsLabel(limits))}</p>` : ""}
    <label class="search">${icon("search")}<span class="sr-only">${tr("名前やグループで検索")}</span>
      <input class="input" type="search" id="poolSearch" value="${esc(p.query)}" placeholder="${tr("名前・グループ・事務所で検索（例：モモ／Momo／모모）")}" autocomplete="off" enterkeyhint="search">
      <button class="search-clear" type="button" data-action="clear-search" aria-label="${tr("検索をクリア")}" ${p.query ? "" : "hidden"}>×</button>
    </label>
    <div class="filter-grid" role="group" aria-label="${tr("絞り込み")}">
      ${FILTERS.map(([key, label]) => `<label class="filter-chip"><span class="sr-only">${label}</span><select data-filter="${key}" class="${p[key] ? "is-set" : ""}"></select></label>`).join("")}
    </div>
    <div class="toggle-row" role="group" aria-label="${tr("表示の条件")}">
      <button type="button" class="toggle-chip" data-action="toggle-shortlist-only" aria-pressed="${p.onlyShortlist}">${icon("heart")}${tr("気になる")} ${S.shortlist.size ? `(${S.shortlist.size})` : ""}</button>
      <button type="button" class="toggle-chip" data-action="toggle-hide-drafted" aria-pressed="${p.hideDrafted}">${tr("指名済みを隠す")}</button>
      <button type="button" class="toggle-chip" data-action="toggle-show-excluded" aria-pressed="${p.showExcluded}">${tr("除外も表示")}</button>
      ${presetNames.length ? `<label class="filter-chip"><span class="sr-only">${tr("保存した条件")}</span><select data-action-select="preset"><option value="">${tr("保存した条件")}</option>${presetNames.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join("")}</select></label>` : ""}
    </div>
    <div class="pool-meta">
      <span class="pool-count" id="poolCount"></span>
      <span class="pool-links">
        <button class="btn btn-ghost btn-sm" data-action="random-pick">${icon("dice")}${tr("ランダム")}</button>
        <button class="btn btn-ghost btn-sm" data-action="save-preset">${tr("条件を保存")}</button>
        <button class="btn btn-ghost btn-sm" data-action="reset-filters">${tr("リセット")}</button>
        <label><span class="sr-only">${tr("並び順")}</span><select class="sort-select" data-action-select="sort">
          ${[["recommended", tr("おすすめ順")], ["score", tr("人気スコア順")], ["generation", tr("世代順")], ["name", tr("名前順")]].map(([v, t]) => `<option value="${v}" ${p.sort === v ? "selected" : ""}>${t}</option>`).join("")}
        </select></label>
      </span>
    </div>`;
  updateFilterOptions();
}

function updateFilterOptions() {
  FILTERS.forEach(([key, label, get]) => {
    const select = $(`select[data-filter="${key}"]`);
    if (!select) return;
    const values = [...new Set(candidates(key, false).map(get))].sort((a, b) => a.localeCompare(b, "ja"));
    if (S.pool[key] && !values.includes(S.pool[key])) values.unshift(S.pool[key]);
    select.innerHTML = `<option value="">${tr("{label}：すべて", { label })}</option>` + values.map(v => `<option value="${esc(v)}" ${v === S.pool[key] ? "selected" : ""}>${esc(key === "generation" || key === "nationality" ? valueLabel(v) : v)}</option>`).join("");
    select.classList.toggle("is-set", Boolean(S.pool[key]));
  });
}

function cardHTML(idol, drafted) {
  const selected = S.selectedId === idol.id;
  const isDrafted = drafted.has(idol.personKey);
  const excluded = S.excluded.has(idol.id);
  const liked = S.shortlist.has(idol.id);
  const cls = ["card", selected && "is-selected", isDrafted && "is-drafted", excluded && "is-excluded"].filter(Boolean).join(" ");
  return `<article class="${cls}" data-id="${idol.id}">
    ${isDrafted ? `<span class="card-state chip chip-dark">${tr("指名済み")}</span>` : ""}
    <button class="card-main" type="button" data-action="select" data-id="${idol.id}" aria-pressed="${selected}" ${isDrafted ? "disabled" : ""}
      aria-label="${esc(`${memberName(idol)}（${idol.group}）`)}">
      <span class="card-group">${esc(idol.group)}</span>
      <span class="card-name">${esc(memberName(idol))}</span>
      <span class="card-meta"><span class="chip">${esc(valueLabel(idol.generation))}</span><span class="chip">${esc(valueLabel(idol.nationality))}</span></span>
      <span class="card-foot">${stars(idol.popularityStars)}<span>${idol.popularityScore > 0 ? tr("{n}点", { n: Math.round(idol.popularityScore) }) : tr("順位外")}</span></span>
    </button>
    <div class="card-tools">
      <span class="card-agency">${esc(agencyShort(idol))}</span>
      <span class="card-tools-buttons">
        <button class="icon-btn is-heart" type="button" data-action="like" data-id="${idol.id}" aria-pressed="${liked}" aria-label="${liked ? tr("気になるから外す") : tr("気になるに追加")}" title="${tr("気になる")}">${icon("heart")}</button>
        <button class="icon-btn" type="button" data-action="exclude" data-id="${idol.id}" aria-pressed="${excluded}" aria-label="${excluded ? tr("除外をやめる") : tr("候補から除外")}" title="${excluded ? tr("除外をやめる") : tr("除外")}">${icon("ban")}</button>
      </span>
    </div>
  </article>`;
}

function renderCards() {
  const grid = $("#cardGrid");
  if (!grid) return;
  const list = candidates();
  const drafted = draftedKeys();
  const p = S.pool;
  // 検索や絞り込みをしているときは当てはまる人を全員、していないときは20人ずつ
  const filtered = Boolean(p.query.trim() || p.generation || p.nationality || p.agency || p.group || p.onlyShortlist);
  const shown = filtered ? list : list.slice(0, p.limit);
  const rest = list.length - shown.length;
  grid.innerHTML = shown.length
    ? shown.map(idol => cardHTML(idol, drafted)).join("") +
      (rest > 0 ? `<button class="btn btn-secondary load-more" data-action="load-more" id="loadMore">${tr("さらに{n}人を表示", { n: Math.min(20, rest) })}<small>${tr("（残り{n}人）", { n: rest })}</small></button>` : "")
    : `<div class="empty" style="grid-column:1/-1"><strong>${tr("条件に合う候補がいません")}</strong>${tr("検索や絞り込みを変えてみてください。")}<br><button class="btn btn-secondary btn-sm" style="margin-top:12px" data-action="reset-filters">${tr("条件をリセット")}</button></div>`;
  const count = $("#poolCount");
  if (count) count.innerHTML = tr("{n}人の候補", { n: `<b>${list.length}</b>` });
}

function refreshCardSelection(previous) {
  [previous, S.selectedId].filter(Boolean).forEach(id => {
    const card = $(`.card[data-id="${id}"]`);
    if (!card) return;
    const selected = id === S.selectedId;
    card.classList.toggle("is-selected", selected);
    card.querySelector(".card-main")?.setAttribute("aria-pressed", String(selected));
  });
}

// ---------------------------------------------------------------- 指名ドック
function renderDock() {
  const mount = $("#dockMount");
  if (!mount) return;
  const s = S.draft;
  const idol = S.selectedId ? E.idolById.get(S.selectedId) : null;
  if (!idol || !s || E.isFinished(s) || s.reveal) {
    mount.innerHTML = "";
    document.body.classList.remove("has-dock");
    return;
  }
  document.body.classList.add("has-dock");
  const can = canActNow() && E.idolAvailable(s, idol.id);
  const acting = actingTeamId();
  const isBid = !s.r1.started;
  const verb = isBid ? "{name}で入札する" : "{name}を指名する";
  const who = s.mode === "local" && acting ? tr("{team}の{action}", { team: E.teamLabel(s, acting), action: isBid ? tr("入札") : tr("指名") }) : (isBid ? bidLabel(s.round) : tr("第{n}巡選択", { n: s.round }));
  let note = "";
  if (!can) {
    if (S.online?.pending) note = tr("送信しました");
    else if (s.r1.awaitingOpen) note = tr("入札の開示を待っています");
    else if (myTeamId() && isOnline() && !s.r1.started && !E.bidPending(s, myTeamId())) note = tr("入札は提出済みです");
    else note = tr("あなたの番になったら指名できます");
  }
  mount.innerHTML = `
    <div class="dock" role="region" aria-label="${tr("選んだメンバー")}">
      <div class="dock-copy">
        <small>${esc(can ? who : tr("選択中のメンバー"))}</small>
        <strong>${esc(memberName(idol))}</strong>
        <span>${esc([idol.group, agencyFull(idol), idol.generation, idol.nationality].filter(Boolean).join("・"))}</span>
      </div>
      <div class="dock-actions">
        <button class="btn btn-ghost" data-action="deselect">${tr("やめる")}</button>
        ${can
          ? `<button class="btn btn-hot btn-lg" data-action="confirm-pick">${esc(tr(verb, { name: memberName(idol) }))}</button>`
          : `<span class="dock-note">${esc(note)}</span><button class="icon-btn is-heart" data-action="like" data-id="${idol.id}" aria-pressed="${S.shortlist.has(idol.id)}" aria-label="${tr("気になる")}" style="color:#fff">${icon("heart")}</button>`}
      </div>
    </div>`;
}

async function confirmPick() {
  const s = S.draft;
  const idol = E.idolById.get(S.selectedId || "");
  if (!s || !idol || !canActNow()) return;
  const team = actingTeamId();
  if (isOnline() && !isHost()) {
    sendGuestAction({ kind: "pick", idolId: idol.id, round: s.round, attempt: s.r1.attempt });
    renderDock();
    renderTurn();
    return;
  }
  const result = E.submitPick(s, team, idol.id, now());
  if (!result.ok) { toast(result.reason); return; }
  S.selectedId = null;
  if (s.mode === "local" && !s.r1.started && !s.reveal) toast(tr("入札しました。次のチームに端末を渡してください"));
  commit();
}

// ---------------------------------------------------------------- 指名ボード
function boardModelFromState(s) {
  const me = myTeamId();
  const current = E.currentTeam(s);
  const resolution = s.resolution;
  return {
    pickLimit: s.settings.pickLimit,
    teams: s.teams.map((team, index) => {
      const cells = [];
      for (let round = 1; round <= s.settings.pickLimit; round += 1) {
        const pick = (s.picks[team.id] || []).find(p => p.round === round);
        const losses = E.lossesFor(s, team.id, round).map(id => E.idolById.get(id)).filter(Boolean)
          .map(l => ({ name: memberName(l), agency: agencyShort(l), group: l.group }));
        if (pick) {
          const idol = E.idolById.get(pick.idolId);
          cells.push({ kind: "filled", name: memberName(idol), agency: agencyShort(idol), group: idol?.group, losses, isNew: s.log.at(-1)?.idolId === pick.idolId && s.log.at(-1)?.teamId === team.id });
          continue;
        }
        if (team.departed) { cells.push({ kind: "empty", text: round === 1 || cells.some(c => c.kind === "filled") ? tr("退出") : "—", losses }); continue; }
        if (round === s.round && !s.r1.started) {
          if (resolution) {
            const nominated = resolution.nominations.some(n => n.teamId === team.id);
            const revealed = resolution.revealed.includes(team.id);
            cells.push({ kind: "sealed", text: nominated ? (revealed ? tr("抽選へ") : tr("発表待ち")) : tr("再入札へ"), losses });
          } else if (team.id in s.r1.bids) {
            const ownBid = s.mode === "online" && team.id === me ? memberName(E.idolById.get(s.r1.bids[team.id])) : "";
            cells.push({ kind: "sealed", text: ownBid ? tr("{name}（入札）", { name: ownBid }) : tr("入札済み"), losses });
          } else if (s.r1.order.includes(team.id)) {
            const now = s.mode === "online" ? true : current === team.id;
            cells.push({ kind: now ? "now" : "empty", text: now ? tr("入札中") : "—", losses });
          } else {
            cells.push({ kind: "empty", text: "—", losses });
          }
          continue;
        }
        if (s.r1.started && round === s.round && current === team.id && !s.reveal) { cells.push({ kind: "now", text: tr("指名中"), losses }); continue; }
        cells.push({ kind: "empty", text: "—", losses });
      }
      return {
        label: team.name,
        sublabel: team.kind === "ai" ? E.strategyLabel(team.strategy) : "",
        color: teamColor(index),
        isMe: team.id === me,
        isCurrent: team.id === current,
        count: (s.picks[team.id] || []).length,
        departed: Boolean(team.departed),
        cells
      };
    })
  };
}

function boardModelFromHistory(entry) {
  const pickLimit = Number(entry.pickLimit) || Math.max(1, ...entry.teams.map(t => (t.picks || []).length));
  return {
    pickLimit,
    teams: entry.teams.map((team, index) => ({
      label: team.name,
      color: teamColor(index),
      isMe: Boolean(team.isMe),
      isCurrent: false,
      count: (team.picks || []).length,
      cells: Array.from({ length: pickLimit }, (_, i) => {
        const pick = (team.picks || []).find(p => Number(p.round) === i + 1);
        const losses = (team.losses || []).filter(l => (Number(l.round) || 1) === i + 1).map(l => ({ name: l.name, agency: agencyShort(l), group: l.group }));
        return pick
          ? { kind: "filled", name: pick.name, agency: agencyShort(pick), group: pick.group, losses }
          : { kind: "empty", text: "—", losses };
      })
    }))
  };
}

function boardTableHTML(model) {
  return `<table class="board-table" style="--teams:${model.teams.length}">
    <thead><tr><th class="round-col" scope="col">${tr("巡")}</th>${model.teams.map(t => `
      <th scope="col" class="board-team ${t.isCurrent ? "is-current" : ""} ${t.isMe && t.label !== tr("あなた") ? "is-me" : ""}" style="--team-color:${t.color}">
        <strong>${esc(t.label)}</strong>${t.sublabel ? `<em>${esc(t.sublabel)}</em>` : ""}<small>${t.departed ? tr("退出") : `${t.count}/${tr("{n}人", { n: model.pickLimit })}`}</small></th>`).join("")}</tr></thead>
    <tbody>${Array.from({ length: model.pickLimit }, (_, r) => `<tr><th class="round-col" scope="row">${r + 1}</th>${model.teams.map(t => {
      const c = t.cells[r];
      const losses = c.losses?.length ? c.losses.map(l => `<span class="pick-loss" title="${tr("抽選外れ")}"><b>${esc(l.name)}</b>${l.agency ? `<small>${esc(l.agency)}</small>` : ""}<small>${esc(l.group || "")}</small></span>`).join("") : "";
      if (c.kind === "filled") return `<td>${losses}<div class="pick-slot is-filled ${c.isNew ? "is-new" : ""}"><strong>${esc(c.name)}</strong>${c.agency ? `<small>${esc(c.agency)}</small>` : ""}<small>${esc(c.group || "")}</small></div></td>`;
      return `<td>${losses}<div class="pick-slot is-${c.kind}">${esc(c.text || "—")}</div></td>`;
    }).join("")}</tr>`).join("")}</tbody></table>`;
}

function teamStackHTML(model) {
  return `<div class="team-stack">${model.teams.map(t => `
    <section class="team-card" style="--team-color:${t.color}">
      <header class="team-card-head"><strong>${esc(t.label)}${t.sublabel ? `<small style="margin-left:6px">${esc(t.sublabel)}</small>` : ""}${t.isMe && t.label !== tr("あなた") ? ` <span class="chip chip-hot">${tr("あなた")}</span>` : ""}</strong><small>${t.departed ? tr("退出") : `${t.count}/${tr("{n}人", { n: model.pickLimit })}`}</small></header>
      <ol>${t.cells.map((c, i) => `<li class="${c.kind === "filled" ? "" : "is-empty"}"><b>${tr("{n}巡", { n: i + 1 })}</b><span>${(c.losses || []).map(l => `<span class="lost"><em>${tr("抽選外れ")}</em><b>${esc(l.name)}</b><small>${esc(l.agency || "")}</small><small>${esc(l.group || "")}</small></span>`).join("")}${c.kind === "filled"
        ? `<strong>${esc(c.name)}</strong><small>${esc(c.agency || "")}</small><small>${esc(c.group || "")}</small>`
        : esc(c.text || "—")}</span></li>`).join("")}</ol>
    </section>`).join("")}</div>`;
}

function renderBoardPanel() {
  const box = $("#boardPanel");
  if (!box) return;
  const s = S.draft;
  const model = boardModelFromState(s);
  const recent = s.log.filter(e => e.kind === "pick" || e.kind === "lottery").slice(-4).reverse();
  box.innerHTML = `
    <div class="board-head"><h2>${tr("指名ボード")}</h2><button class="icon-btn" data-action="board-full" aria-label="${tr("表を広げて全体を見る")}" title="${tr("表を広げて全体を見る")}">${icon("expand")}</button><span style="flex:1"></span>${segmented("boardMode", [["table", tr("表")], ["teams", tr("チーム別")]], S.boardMode, { label: tr("ボードの表示") })}</div>
    <div class="board-box">${S.boardMode === "table" ? boardTableHTML(model) : `<div style="padding:10px">${teamStackHTML(model)}</div>`}</div>
    ${recent.length ? `<div class="ticker" aria-label="${tr("最近の指名")}">${recent.map(e => {
      const idol = E.idolById.get(e.idolId);
      return `<div class="ticker-item" style="--team-color:${teamColor(E.teamIndex(s, e.teamId))}"><i></i><span>${tr("{n}巡", { n: e.round || 1 })}　<strong>${esc(E.teamLabel(s, e.teamId))}</strong>　${esc(memberName(idol) || "")}${e.kind === "lottery" ? tr("（抽選で交渉権確定）") : ""}</span></div>`;
    }).join("")}</div>` : ""}`;
}

// ======================================================================
// 指名発表・抽選（全画面）
// ======================================================================
let revealKey = "";
function revealTitle(r) {
  if (r.type === "lottery") return `${bidLabel(r.round || 1)} ${tr("重複指名の抽選")}`;
  if (r.type === "nomination") return tr("{label}メンバー", { label: bidLabel(r.round || 1) });
  return tr("第{n}巡選択メンバー", { n: r.round });
}

function renderReveal() {
  const box = $("#reveal");
  const s = S.draft;
  const r = s?.reveal;
  const visible = Boolean(r) && (S.route.name === "draft" || S.route.name === "results");
  if (!visible) {
    if (!box.hidden) {
      box.hidden = true; box.innerHTML = ""; revealKey = ""; document.body.classList.remove("is-locked");
      if (S.draftDirty && S.route.name === "draft") { S.draftDirty = false; renderDraft(); }
    }
    return;
  }
  document.body.classList.add("is-locked");
  box.hidden = false;
  const idol = E.idolById.get(r.idolId);
  if (revealKey !== r.key) {
    revealKey = r.key;
    const color = teamColor(E.teamIndex(s, r.teamId));
    if (r.type === "lottery") {
      box.innerHTML = `
        <div class="stage" data-type="lottery">
          <p class="stage-kicker">${tr("抽選")}</p>
          <h2 class="stage-title">${esc(revealTitle(r))}</h2>
          <div class="lottery-member">
            <small>${tr("入札が重なったメンバー")}</small>
            <strong>${esc(memberName(idol))}</strong>
            <span>${esc([idol?.group, agencyShort(idol)].filter(Boolean).join("・"))}</span>
          </div>
          <div class="lottery-teams">${r.drawOrder.map(id => `<span style="--team-color:${teamColor(E.teamIndex(s, id))}">${esc(E.teamLabel(s, id))}</span>`).join("")}</div>
          <div class="envelopes" role="group" aria-label="${tr("抽選の封筒")}">${Array.from({ length: r.envelopes }, (_, i) => `
            <button class="envelope" type="button" data-action="envelope" data-env="${i}" aria-label="封筒${i + 1}">
              <span class="env">
                <span class="env-back"></span>
                <span class="env-paper"><span class="env-paper-inner"><span class="paper-q">？</span></span></span>
                <span class="env-pocket"><b>${i + 1}</b></span>
                <span class="env-flap"></span>
                <span class="env-seal"></span>
              </span>
              <span class="envelope-owner" hidden></span>
            </button>`).join("")}
          </div>
          <div class="lottery-result" hidden></div>
          <div class="stage-foot"><p class="stage-hint" id="stageHint"></p><div class="stage-actions" id="stageActions"></div></div>
        </div>`;
    } else {
      box.innerHTML = `
        <div class="stage" data-type="${r.type}" style="--team-color:${color}">
          <p class="stage-kicker">${tr("指名発表")}</p>
          <h2 class="stage-title">${esc(revealTitle(r))}</h2>
          <div class="stage-team"><small>${tr("指名チーム")}</small><strong>${esc(E.teamLabel(s, r.teamId))}</strong></div>
          <div class="nameplate"><div class="nameplate-inner">
            <div class="nameplate-face nameplate-back"><img src="assets/kdraft-168.webp" alt="" width="84" height="84"><span>KDRAFT</span></div>
            <div class="nameplate-face nameplate-front">
              <small>${r.type === "nomination" ? bidLabel(r.round || 1) : tr("第{n}巡選択", { n: r.round })}</small>
              <p class="nameplate-name">${esc(memberName(idol))}</p>
              <p class="nameplate-meta"><span>${esc(agencyShort(idol))}</span><span>${esc(idol?.group)}</span></p>
            </div>
          </div></div>
          <div class="stage-foot"><p class="stage-hint" id="stageHint"></p><div class="stage-actions" id="stageActions"></div></div>
        </div>
        ${!isOnline() ? `<div class="stage-skip"><button class="btn btn-sm" data-action="reveal-skip-all">${tr("発表をまとめて見る")}</button></div>` : ""}`;
    }
    window.setTimeout(() => $("#stageActions button")?.focus({ preventScroll: true }), 50);
  }
  patchReveal(s, r);
}

function patchReveal(s, r) {
  const stage = $("#reveal .stage");
  if (!stage) return;
  stage.dataset.stage = r.stage;
  const hint = $("#stageHint");
  const actions = $("#stageActions");
  const remaining = s.queue.length;
  const director = isDirector();
  if (r.type !== "lottery") {
    $(".nameplate", stage)?.classList.toggle("is-shown", r.stage === "shown");
    if (r.stage === "intro") {
      hint.textContent = tr("まもなく発表します…");
      actions.innerHTML = director ? `<button class="btn btn-ghost" data-action="reveal-next">${tr("すぐに見る")}</button>` : "";
    } else {
      hint.textContent = remaining ? tr("このあと {n}件の発表があります", { n: remaining }) : "";
      actions.innerHTML = director
        ? `<button class="btn btn-light btn-lg btn-attention" data-action="reveal-next">${remaining ? tr("次の発表へ") : tr("ボードに戻る")}</button>`
        : `<span class="stage-hint">${tr("ホストの画面に合わせて自動で進みます")}</span>`;
    }
    return;
  }
  // 抽選
  const me = s.mode === "local" ? null : myTeamId();
  const drawer = E.lotteryDrawer(s);
  const opened = r.stage === "opening" || r.stage === "result";
  $$(".envelope", stage).forEach(button => {
    const env = Number(button.dataset.env);
    const owner = r.selections[env];
    const ownerEl = $(".envelope-owner", button);
    ownerEl.hidden = !owner;
    if (owner) {
      ownerEl.textContent = E.teamLabel(s, owner);
      ownerEl.style.setProperty("--team-color", teamColor(E.teamIndex(s, owner)));
    }
    button.classList.toggle("is-taken", Boolean(owner));
    button.classList.toggle("is-opening", opened && Boolean(owner));
    const canPick = r.stage === "choosing" && !owner && drawer && !isAutoTeam(s, drawer) &&
      (s.mode === "online" ? drawer === me && !S.online?.pending : true);
    button.disabled = !canPick;
    if (r.stage === "result") {
      const won = env === r.winningEnvelope;
      button.classList.add("is-result", won ? "is-winner" : "is-loser");
      const inner = $(".env-paper-inner", button);
      if (inner && !inner.dataset.done) {
        inner.dataset.done = "1";
        inner.innerHTML = won ? `<span class="stamp">${tr("交渉権")}<br>${tr("確定")}</span>` : `<span class="miss">${tr("外れ")}</span>`;
      }
      button.setAttribute("aria-label", tr("封筒{n}：{team} {result}", { n: env + 1, team: owner ? E.teamLabel(s, owner) : "", result: won ? tr("交渉権確定") : tr("外れ") }));
    } else if (owner) {
      button.setAttribute("aria-label", tr("封筒{n}：{team}が選択", { n: env + 1, team: E.teamLabel(s, owner) }));
    }
  });
  const resultBox = $(".lottery-result", stage);
  if (r.stage === "result" && r.winner) {
    if (resultBox.hidden) {
      resultBox.hidden = false;
      resultBox.style.setProperty("--team-color", teamColor(E.teamIndex(s, r.winner)));
      resultBox.innerHTML = `<small>${tr("交渉権確定")}</small><strong>${esc(E.teamLabel(s, r.winner))}</strong>`;
    }
  }
  if (r.stage === "intro") {
    hint.textContent = tr("封筒を順番に選び、全員がそろったら一斉に開封します");
    actions.innerHTML = "";
  } else if (r.stage === "choosing") {
    const drawerLabel = E.teamLabel(s, drawer);
    const mine = s.mode === "online" ? drawer === me : !isAutoTeam(s, drawer);
    hint.textContent = mine
      ? (s.mode === "local" ? tr("▲ {team} の番：光っている封筒を1つ押してください", { team: drawerLabel }) : tr("▲ あなたの番です。光っている封筒を1つ押してください"))
      : tr("{team} が封筒を選んでいます…", { team: drawerLabel });
    hint.classList.toggle("is-attention", Boolean(mine));
    actions.innerHTML = "";
  } else if (r.stage === "ready") {
    hint.textContent = tr("全員の封筒がそろいました");
    actions.innerHTML = isOnline()
      ? (isHost() ? `<span class="host-callout">${tr("ホストの操作です")}</span><button class="btn btn-light btn-lg btn-attention" data-action="open-lottery">${icon("envelope")}${tr("一斉に開封する")}</button>` : `<span class="stage-hint">${tr("ホストが開封するのを待っています")}</span>`)
      : "";
  } else if (r.stage === "opening") {
    hint.textContent = tr("せーの…！");
    actions.innerHTML = "";
  } else if (r.stage === "result") {
    hint.textContent = remaining ? tr("このあと {n}件の発表があります", { n: remaining }) : tr("外れたチームは再入札します");
    actions.innerHTML = director
      ? `<button class="btn btn-light btn-lg btn-attention" data-action="reveal-next">${remaining ? tr("次の発表へ") : tr("続ける")}</button>`
      : `<span class="stage-hint">${tr("まもなく自動で進みます")}</span>`;
  }
}

function revealNext() {
  const s = S.draft;
  const r = s?.reveal;
  if (!r || !isDirector()) return;
  if (r.stage === "intro") E.showReveal(s, now());
  else E.advanceReveal(s, now());
  commit();
}

function revealSkipAll() {
  const s = S.draft;
  if (!s || isOnline()) return;
  let guard = 0;
  while (s.reveal && guard++ < 200) {
    const r = s.reveal;
    if (r.type === "lottery" && r.stage !== "result") break;
    if (r.stage === "intro") E.showReveal(s, now());
    else E.advanceReveal(s, now());
  }
  commit();
}

function chooseEnvelope(env) {
  const s = S.draft;
  const r = s?.reveal;
  if (!r || r.type !== "lottery" || r.stage !== "choosing") return;
  const drawer = E.lotteryDrawer(s);
  if (isOnline()) {
    if (drawer !== myTeamId()) return;
    if (!isHost()) { sendGuestAction({ kind: "envelope", envelope: env, revealKey: r.key }); patchReveal(s, r); return; }
  } else if (isAutoTeam(s, drawer)) return;
  if (E.chooseEnvelope(s, drawer, env, now())) commit();
}

// ======================================================================
// 結果
// ======================================================================
function teamStats(s, teamId) {
  const list = (s.picks[teamId] || []).map(p => E.idolById.get(p.idolId)).filter(Boolean);
  if (!list.length) return [];
  const avg = list.reduce((sum, i) => sum + (i.popularityStars || 1), 0) / list.length;
  const gens = new Set(list.map(i => i.generation)).size;
  const agencies = new Set(list.map(i => agencyFilterName(i.agency))).size;
  const nations = new Set(list.map(i => i.nationality)).size;
  const groups = new Set(list.map(i => i.group)).size;
  return [`${tr("平均 ★")}${avg.toFixed(1)}`, `${gens}${tr("世代")}`, `${agencies}${tr("事務所")}`, `${groups}${tr("グループ")}`, `${nations}${tr("か国・地域")}`];
}

function renderResults() {
  const s = S.draft;
  const view = $("#view-results");
  if (!s) { view.innerHTML = ""; return; }
  const finished = E.isFinished(s);
  const me = myTeamId();
  const canRestart = !isOnline() || isHost();
  view.innerHTML = `
    <section class="results-hero">
      <div>
        <small>${tr("ドラフト会議 終了")}</small>
        <h1>${finished ? tr("最終ドラフト結果") : tr("ここまでのドラフト結果")}</h1>
        <p>${esc(tr(MODE_LABEL[s.mode]))}・${tr("{teams}チーム・各{n}人", { teams: s.teams.length, n: s.settings.pickLimit })}${E.biddingEveryRound(s) ? tr("・毎巡入札") : ""}・${esc(formatDate(Date.now()))}</p>
        ${E.hasLimits(s.settings.limits) ? `<p class="results-limits">${tr("縛り：")}${esc(E.limitsLabel(s.settings.limits))}</p>` : ""}
      </div>
      <div class="results-actions">
        <button class="btn btn-light" data-action="share-image">${icon("image")}${tr("画像で共有")}</button>
        ${canRestart ? `<button class="btn btn-ghost" data-action="restart">${icon("refresh")}${tr("再ドラフト")}</button>` : ""}
        <a class="btn btn-ghost" href="#/" data-action="${isOnline() ? "" : "finish-home"}">${icon("home")}${tr("ホームへ")}</a>
        ${isOnline() && S.online?.room ? `<button class="btn btn-ghost btn-room-exit" data-action="${isHost() ? "close-room" : "leave-room"}">${icon("close")}${isHost() ? tr("ルームを終了する") : tr("ルームから退出する")}</button>` : ""}
      </div>
    </section>
    ${S.shareStatus ? `<p class="share-status" role="status">${esc(S.shareStatus)}</p>` : ""}
    ${segmented("resultsMode", [["table", tr("指名一覧表")], ["teams", tr("チーム別")]], S.resultsMode, { label: tr("結果の表示") }).replace('class="segmented"', 'class="segmented results-tabs"')}
    ${S.resultsMode === "table"
      ? `<div class="board-expand-row"><button class="btn btn-secondary btn-sm" data-action="board-full">${icon("expand")}${tr("表を広げて全体を見る")}</button></div>
         <div class="board-box">${boardTableHTML(boardModelFromState(s))}</div>`
      : `<div class="results-grid">${s.teams.map((team, index) => `
        <article class="result-team" style="--team-color:${teamColor(index)}">
          <header class="result-team-head ${team.id === me && team.name !== tr("あなた") ? "is-me" : ""}"><small>${tr("{n}番目のチーム", { n: index + 1 })}${team.departed ? tr("・退出") : ""}</small><h3>${esc(E.teamLabel(s, team.id))}</h3></header>
          <ol>${Array.from({ length: s.settings.pickLimit }, (_, i) => {
            const pick = (s.picks[team.id] || []).find(p => p.round === i + 1);
            const idol = pick && E.idolById.get(pick.idolId);
            const losses = E.lossesFor(s, team.id, i + 1).map(id => E.idolById.get(id)).filter(Boolean);
            const lossHtml = losses.map(l => `<span class="lost"><em>${tr("抽選外れ")}</em><b>${esc(memberName(l))}</b><small>${esc(agencyShort(l))}</small><small>${esc(l.group)}</small></span>`).join("");
            return `<li><b>${tr("{n}巡", { n: i + 1 })}</b><span>${lossHtml}${idol
              ? `<strong>${esc(memberName(idol))}</strong><small>${esc(agencyShort(idol))}</small><small>${esc(idol.group)}</small>`
              : `<strong style="color:var(--faint)">—</strong>`}</span></li>`;
          }).join("")}</ol>
        </article>`).join("")}</div>`}
    ${isOnline() && S.online?.room ? `<div class="notice results-room" style="margin-top:16px">
        <span>${isHost() ? tr("「再ドラフト」で、同じルームのまま次のドラフトを始められます。遊び終わったら「ルームを終了する」を押してください（参加者名や結果が削除されます）。") : tr("ホストが再ドラフトを始めると、自動でドラフト画面に移ります。")}</span>
      </div>` : ""}`;
}

// ---------------------------------------------------------------- 表を全画面で見る
let boardFullEl = null;
function openBoardFull(model, title) {
  closeBoardFull();
  S.boardFit = true;
  boardFullEl = document.createElement("div");
  boardFullEl.className = "board-full";
  boardFullEl.setAttribute("role", "dialog");
  boardFullEl.setAttribute("aria-modal", "true");
  boardFullEl.setAttribute("aria-label", title);
  boardFullEl.innerHTML = `
    <div class="board-full-bar">
      <strong>${esc(title)}</strong>
      <span class="board-full-hint">${tr("横向きにすると大きく見られます")}</span>
      <span style="flex:1"></span>
      <button class="btn btn-ghost btn-sm" data-action="board-full-fit" id="boardFitBtn"></button>
      <button class="btn btn-light btn-sm" data-action="board-full-close">${tr("閉じる")}</button>
    </div>
    <div class="board-full-scroll"><div class="board-full-stage">${boardTableHTML(model)}</div></div>`;
  document.body.append(boardFullEl);
  document.body.classList.add("is-locked");
  fitBoardFull();
  boardFullEl.querySelector('[data-action="board-full-close"]').focus();
}
function fitBoardFull() {
  if (!boardFullEl) return;
  const scroll = boardFullEl.querySelector(".board-full-scroll");
  const stage = boardFullEl.querySelector(".board-full-stage");
  const table = stage.querySelector("table");
  table.style.transform = "";
  stage.style.width = stage.style.height = "";
  const tw = table.scrollWidth, th = table.scrollHeight;
  const aw = scroll.clientWidth - 24, ah = scroll.clientHeight - 24;
  const scale = S.boardFit ? Math.min(1, aw / tw, ah / th) : 1;
  table.style.transform = `scale(${scale})`;
  stage.style.width = `${Math.ceil(tw * scale)}px`;
  stage.style.height = `${Math.ceil(th * scale)}px`;
  const btn = boardFullEl.querySelector("#boardFitBtn");
  btn.hidden = scale === 1 && S.boardFit;
  btn.textContent = S.boardFit ? tr("実際の大きさで見る") : tr("画面に合わせる");
  if (!S.boardFit) btn.hidden = false;
}
function closeBoardFull() {
  if (!boardFullEl) return;
  boardFullEl.remove();
  boardFullEl = null;
  if ($("#reveal").hidden) document.body.classList.remove("is-locked");
}
window.addEventListener("resize", () => { if (boardFullEl) fitBoardFull(); });

// ======================================================================
// 履歴・サイト情報
// ======================================================================
function backLinkHTML() {
  const to = S.returnTo || "";
  const name = to.split("/")[0];
  const label = { draft: tr("ドラフトに戻る"), results: tr("結果に戻る"), setup: tr("設定に戻る"), room: tr("ルームに戻る") }[name] || tr("ホームに戻る");
  const target = ["draft", "results"].includes(name) && !S.draft ? "" : to;
  return `<a class="back-link back-link-strong" href="#/${esc(target)}">${label}</a>`;
}

function renderHistory() {
  const list = store.history();
  $("#view-history").innerHTML = backLinkHTML() + `
    <div class="page-head"><div><h1>${tr("過去のドラフト")}</h1><p>${tr("この端末に保存された最近{n}件の結果です。", { n: HISTORY_LIMIT })}</p></div>
      ${list.length ? `<button class="btn btn-ghost btn-sm" data-action="clear-history">${tr("履歴をすべて消す")}</button>` : ""}</div>
    ${list.length ? `<div class="history-list">${list.map((entry, index) => `
      <details class="history-entry" ${index === 0 ? "open" : ""}>
        <summary><div><strong>${esc(formatDate(entry.completedAt))}</strong>
          <span>${esc(MODE_LABEL[entry.mode] || tr("ドラフト"))}・${tr("{teams}チーム・各{n}人", { teams: (entry.teams || []).length, n: entry.pickLimit || "?" })}${entry.limitsLabel ? `${tr("・縛り：")}${esc(entry.limitsLabel)}` : ""}</span></div></summary>
        <div class="history-body">
          <div class="board-box">${boardTableHTML(boardModelFromHistory(entry))}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-secondary btn-sm" data-action="board-full" data-history="${esc(entry.id)}">${icon("expand")}${tr("表を広げて見る")}</button><button class="btn btn-ghost btn-sm" data-action="delete-history" data-id="${esc(entry.id)}">${tr("この記録を消す")}</button></div>
        </div>
      </details>`).join("")}</div>`
      : `<div class="panel empty"><strong>${tr("まだ記録がありません")}</strong>${tr("ドラフトを最後まで終えると、ここに結果が残ります。")}<br><a class="btn btn-primary" style="margin-top:16px" href="#/setup/ai">${tr("AIとドラフトする")}</a></div>`}`;
}

function renderAbout() {
  const links = [
    [tr("個人ブランド評判 2026年9月"), "https://www.soompi.com/article/1871886wpp/september-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年8月"), "https://www.soompi.com/article/1863187wpp/august-girl-group-member-brand-reputation-rankings-announced"],
    [tr("2026年7月"), "https://www.soompi.com/article/1855573wpp/july-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年6月"), "https://www.soompi.com/article/1849160wpp/june-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年5月"), "https://www.soompi.com/article/1841653wpp/may-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年4月"), "https://www.soompi.com/article/1834176wpp/april-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年3月"), "https://www.soompi.com/article/1825006wpp/march-girl-group-member-brand-reputation-rankings-announced-8"],
    [tr("2026年2月"), "https://www.soompi.com/article/1819502wpp/february-girl-group-member-brand-reputation-rankings-announced-7"],
    [tr("2026年1月"), "https://kpopnewswire.com/wonyoung-jennie-winter-lead-january-2026-girl-group-member-brand-reputation-rankings/"],
    [tr("2025年12月"), "https://kpopnewswire.com/december-2025-girl-group-member-brand-reputation-rankings-wonyoung-jennie-rose-lead/"],
    [tr("2025年11月"), "https://kpopnewswire.com/wonyoung-jennie-rose-lead-november-2025-girl-group-member-brand-reputation-rankings/"],
    [tr("2025年10月"), "https://kpopnewswire.com/ive-and-blackpink-take-all-top-five-spots-in-october-2025-girl-group-member-brand-reputation-rankings/"],
    ["Gallup 2015", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=713"],
    ["Gallup 2016", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=800"],
    ["Gallup 2017", "https://panel.gallup.co.kr/Contents/GallupReport/GallupReport%2820171219%29_%EA%B0%80%EC%88%98%EC%99%80%EA%B0%80%EC%9A%94.pdf"],
    ["Gallup 2018", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=974"],
    ["Gallup 2019", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=1072"],
    [tr("Gallup 2025全国調査"), "https://www.gallup.co.kr/dir/GallupReport/GallupReport%2820251222%29_%EC%98%AC%ED%95%B4%EC%9D%98%EA%B0%80%EC%88%98%EC%99%80%EA%B0%80%EC%9A%94.pdf"],
    [tr("CHOEAEDOL 6月 ICON"), "https://magazine.myloveidol.com/en/posts/ranking-2026-06-icon-female-individual"],
    [tr("CHOEAEDOL 6月 LEGEND"), "https://magazine.myloveidol.com/en/posts/ranking-2026-06-legend-female-individual"],
    [tr("CHOEAEDOL 7月"), "https://magazine.myloveidol.com/en/posts/ranking-2026-07-monthly-female"],
    [tr("CHOEAEDOL 8月"), "https://magazine.myloveidol.com/en/posts/ranking-2026-08-monthly-female"],
    [tr("CHOEAEDOL 9月"), "https://magazine.myloveidol.com/en/posts/ranking-2026-09-monthly-female"],
    [tr("IDOL CHART 年間総合"), "https://www.idol-chart.com/ranking/?d_type=Y"],
    [tr("IDOL CHART 年間個人投票"), "https://www.idol-chart.com/score/?d_type=Y"],
    ["NAVER DataLab", "https://datalab.naver.com/keyword/trendSearch.naver"],
    ["@5thGenKpop", "https://x.com/5thGenKpop"],
    ["@AboutMusicYT", "https://x.com/AboutMusicYT"],
    ["@karinachartss", "https://x.com/karinachartss"],
    [tr("Star News 女性アイドル第259回"), "https://www.starnewskorea.com/star-ranking/female-idol/259"],
    [tr("Fannstar 女性スター順位"), "https://fannstar.tf.co.kr/rank/view/topic?mode=women"]
  ];
  $("#view-about").innerHTML = backLinkHTML() + `
    <div class="page-head"><div><h1>${tr("サイト情報")}</h1><p>${tr("KDraft について、星の評価方法、プライバシー。")}</p></div></div>
    <div class="about">
      <section class="panel"><h2>${tr("このサイトについて")}</h2>
        <p>${tr("KDraft は個人制作の非公式ファン向けゲームです。芸能事務所、グループ、メンバー、ランキング運営元から公式な監修・推薦を受けていません。")}</p>
        <p>${tr("メンバー名、グループ名、事務所名などは候補を識別する目的で表示しています。これらに関する権利が認められる場合、その権利は各権利者に帰属します。公式写真、音源、ロゴ、ランキング記事の本文や表のデザインは掲載していません。")}</p>
        <p>${tr("誤記や権利に関する連絡、ご意見は、X（旧Twitter）の {account} へDMでお願いします。", { account: `<a href="https://x.com/Wooian_S2U" target="_blank" rel="noopener noreferrer">@Wooian_S2U</a>` })}</p>
      </section>
      <section class="panel"><h2>${tr("ホーム画面に追加")}</h2>
        <div class="install-card"><img src="assets/kdraft-168.webp" alt="" width="56" height="56" loading="lazy">
          <div><p id="installText">${tr("ホーム画面にアイコンを置くと、すぐに開けます。一度開いたあとは、通信が切れてもAIドラフトと1台での対戦を遊べます。")}</p>
          <button class="btn btn-primary btn-sm" data-action="install" id="installButton" style="margin-top:10px" hidden>${tr("ホーム画面に追加")}</button></div>
        </div>
      </section>
      <section class="panel about-wide"><h2>${tr("星（人気参考）の評価方法")}</h2>
        <p>${tr("星1は個人順位データなし。順位データがある人は同じ世代の中で上位から約25%ずつ星5・星4・星3・星2に分けます（同点は同じ星）。人気参考スコアは、個人ブランド評判の直近1年（2025年10月〜2026年9月）を55%（直近6か月を70%、前半6か月を30%）、音源・アルバム・YouTube・放送・SNSなどを集計するIDOL CHART年間総合順位（2024・2025年）を20%、韓国ギャラップ全国調査で個人名が挙がった順位を10%、個人名入りの2015〜2019年調査を5%として計算します。過去のギャラップ調査がない第4・第5世代にはその分を適用せず、残りの情報で再計算します。グループ名だけの回答は個々のメンバーに配りません。ファン投票型のCHOEAEDOL（4%）、Star News（4%）、Fannstar（2%）は計10%に抑えています。")}</p>
        <p>${tr("ネイバーの検索トレンドや各チャート情報アカウントは、星の点数には混ぜず、急上昇や見落としの確認に使っています。星は公式の順位・評価ではなく、ゲーム用の目安です。AIは星を指名材料の一つにします。")}</p>
        <div class="source-links">${links.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join("")}</div>
      </section>
      <section class="panel about-wide"><h2>${tr("プライバシー・オンラインドラフト")}</h2>
        <p>${tr("メールアドレスやパスワードによるアカウント登録はありません。除外したメンバー、気になるリスト、保存した条件、途中のドラフト、過去の結果（最大{n}件）は、利用中のブラウザー内にだけ保存されます。", { n: HISTORY_LIMIT })}</p>
        <p>${tr("オンラインドラフトでは、Firebaseの匿名認証とRealtime Databaseを使用します。匿名の識別子のほか、入力した表示名、ルームコード、参加者、ドラフト設定、指名・抽選を含むゲーム進行情報を同期します。同じルームの参加者には表示名とドラフト結果が表示されます。人気投票では、匿名の識別子ごとに「その日に何票入れたか」と「最後に投票した相手」を記録し、各グループ・メンバーの票数だけを公開します。ホストが「ルーム一覧に公開」を選んだ場合は、ホストの表示名・人数・ルール・縛りが、サイトを開いた人全員に表示され、誰でも参加できるようになります。表示名には本名、住所、学校名、連絡先などを使わず、招待リンクやコードは参加してほしい相手だけに共有してください。")}</p>
        <p>${tr("Realtime Databaseはシンガポール（asia-southeast1）に設定されています。Googleの案内ではFirebase Authenticationは米国内のデータセンターで運用され、サービス提供のためIPアドレスやブラウザー情報等が処理される場合があります。詳しくは")} <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">${tr("Firebaseのプライバシー案内")}</a> ${tr("をご確認ください。ルーム情報は、ホストが「ルームを終了」を実行するまで残ります。サイトの配信元である")} <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">${tr("GitHubのプライバシー説明")}</a> ${tr("もご確認ください。")}</p>
      </section>
    </div>
    <footer class="site-foot"><span>${tr("データ収録：{members}人・{groups}グループ・人気参考データ {sources}種", { members: idols.length, groups: new Set(idols.map(i => i.group)).size, sources: popularityRankingSources.length })}</span><a href="#/">${tr("ホームへ")}</a></footer>`;
  refreshInstallUI();
}

// ======================================================================
// オンライン
// ======================================================================
function onlineMessage(message, isError = false) {
  S.online = S.online || {};
  S.online.message = isError ? "" : message;
  S.online.error = isError ? message : "";
  const line = $("#onlineStatus");
  if (line) { line.textContent = message; line.classList.toggle("is-error", isError); }
}

/** Firebase の英語のエラーを、わかる言葉にする */
function friendlyError(error, fallback) {
  const text = String(error?.code || error?.message || "");
  if (/PERMISSION_DENIED|permission/i.test(text)) return tr("このルームには入れませんでした。ドラフトが始まったか、ルームが終了した可能性があります。");
  if (/network|offline|disconnect/i.test(text)) return tr("通信できませんでした。電波のよいところでもう一度試してください。");
  return error?.message || fallback;
}

/** この端末（ブラウザ）で開いたままのルーム。{ code, host, attached } か null */
async function existingRoom() {
  if (S.online?.room) return { code: S.online.room.code, host: S.online.room.isHost, attached: true };
  const saved = store.room();
  if (!saved?.code) return null;
  try {
    const { Room } = await loadOnline();
    const member = await Room.memberInfo(saved.code);
    if (member) return { code: saved.code, host: Boolean(member.host), attached: false };
  } catch { /* つながらない時は確認できないので作成に進む */ }
  store.saveRoom(null);
  return null;
}

/** 前のルームが残っていたら、戻るか終了・退出するかを選んでもらう。新しく作ってよければ true */
async function settlePreviousRoom() {
  onlineMessage(tr("前のルームを確認しています…"));
  const prev = await existingRoom();
  onlineMessage("");
  if (!prev) return true;
  const choice = await menuDialog({
    title: prev.host ? tr("ルーム {code} がまだ開いています", { code: prev.code }) : tr("ルーム {code} に参加中です", { code: prev.code }),
    items: [
      { value: "back", label: tr("そのルームに戻る"), icon: "play" },
      { value: "end", label: prev.host ? tr("そのルームを終了して、新しく作る") : tr("そのルームから退出して、新しく作る"), icon: "close", danger: true }
    ]
  });
  if (choice === "back") {
    if (prev.attached) go(S.draft?.mode === "online" && S.online?.status === "playing" ? (E.isFinished(S.draft) ? "results" : "draft") : "room");
    else joinRoom(prev.code);
    return false;
  }
  if (choice !== "end") return false;
  try {
    onlineMessage(prev.host ? tr("前のルームを終了しています…") : tr("前のルームから退出しています…"));
    let room = S.online?.room;
    if (!room) {
      const { Room } = await loadOnline();
      room = (await Room.join({ code: prev.code, name: S.onlineName })).room;
    }
    if (prev.host) {
      stopDirector();
      await room.close();
    } else if (S.online?.status === "playing" || (await room.ref.child("status").once("value")).val() === "playing") {
      await room.sendAction({ kind: "leave" }).done.catch(() => {});
      room.detach();
    } else {
      await room.leaveLobby();
    }
    leaveRoomLocally("", true);
    return true;
  } catch (error) {
    onlineMessage(error.message || tr("前のルームを閉じられませんでした。"), true);
    return false;
  }
}

async function createRoom() {
  S.onlineName = normalizeName($("#onlineName")?.value || S.onlineName, tr("ホスト"));
  savePrefs();
  const publicChecked = Boolean($("#roomPublic")?.checked);
  S.roomName = normalizeRoomName($("#roomName")?.value || "");
  if (!(await settlePreviousRoom())) return;
  try {
    onlineMessage(tr("ルームを作っています…"));
    S.roomPublic = publicChecked;
    savePrefs();
    const settings = { pickLimit: S.setup.pickLimit, orderMode: S.setup.orderMode, startOrder: S.setup.startOrder, pickMode: S.setup.pickMode, limits: S.setup.limits, limitsOn: S.setup.limitsOn, public: S.roomPublic, roomName: S.roomName };
    const { Room } = await loadOnline();
    const room = await Room.create({ name: S.onlineName, settings });
    attachRoom(room);
    go("room");
  } catch (error) {
    onlineMessage(friendlyError(error, tr("ルームを作れませんでした。")), true);
  }
}

async function joinRoom(codeValue, { userAction = false } = {}) {
  const code = normalizeCode(codeValue ?? $("#roomCode")?.value);
  S.onlineName = normalizeName($("#onlineName")?.value || S.onlineName);
  savePrefs();
  // 別のルームを開いたまま参加しようとした時は、先に片付けてもらう
  const other = S.online?.room?.code || store.room()?.code || "";
  if (userAction && other && other !== code && !(await settlePreviousRoom())) return;
  try {
    onlineMessage(tr("ルームに接続しています…"));
    const { Room } = await loadOnline();
    const { room, rejoined } = await Room.join({ code, name: S.onlineName });
    attachRoom(room);
    if (rejoined) {
      const snap = await room.readState().catch(() => null);
      const status = (await room.ref.child("status").once("value")).val();
      if (status === "playing" && snap?.state) {
        applyRemoteState(snap, { force: true });
        if (room.isHost) { S.online.hostRev = snap.rev; S.online.acks = snap.acks || {}; commit({ silent: true }); }
        go(E.isFinished(S.draft) ? "results" : "draft");
        toast(tr("進行中のドラフトに再接続しました"));
        return;
      }
    } else {
      S.online.joinState = "requesting";
    }
    go("room");
  } catch (error) {
    onlineMessage(friendlyError(error, tr("参加できませんでした。")), true);
    if (Array.isArray(publicRooms)) { publicRooms = publicRooms.filter(r => r.code !== code); renderPublicRooms(); }
    if (S.route.name !== "setup") go("setup/online");
  }
}

/** ホスト：「ルーム一覧に公開」の内容をルームの状態に合わせる */
function syncLobby() {
  const o = S.online;
  const room = o?.room;
  if (!room?.isHost) return;
  const active = Object.values(o.players || {}).filter(p => !p.departed);
  const settings = o.settings || {};
  const listed = settings.public === true && o.status === "lobby" && active.length < MAX_PLAYERS;
  const task = listed
    ? room.publish({ host: o.players?.[room.uid]?.teamName || S.onlineName, name: settings.roomName, count: active.length, pickLimit: settings.pickLimit, limits: E.limitsLabel(effectiveLimits(settings)) })
    : room.unpublish();
  task.catch(error => {
    console.warn("lobby", error);
    if (listed && !o.lobbyWarned) { o.lobbyWarned = true; toast(tr("ルーム一覧に載せられませんでした。招待リンクでは参加できます。")); }
  });
}

// 公開中のルーム一覧（オンラインの設定画面）
let publicRoomsOff = null;
let publicRooms = null;
async function startPublicRooms() {
  if (publicRoomsOff || !onlineConfigured()) return;
  publicRoomsOff = () => {};
  try {
    const { watchPublicRooms } = await loadOnline();
    const off = await watchPublicRooms(list => { publicRooms = list; renderPublicRooms(); }, () => { publicRooms = "error"; renderPublicRooms(); });
    if (S.route.name === "setup" && S.route.param === "online") publicRoomsOff = off;
    else { off(); publicRoomsOff = null; }
  } catch {
    publicRooms = "error";
    publicRoomsOff = null;
    renderPublicRooms();
  }
}
function stopPublicRooms() {
  if (publicRoomsOff) { publicRoomsOff(); publicRoomsOff = null; }
}
function renderPublicRooms() {
  const box = $("#publicRooms");
  if (!box) return;
  if (publicRooms === null) { box.innerHTML = `<p class="public-empty">${tr("読み込んでいます…")}</p>`; return; }
  if (publicRooms === "error") { box.innerHTML = `<p class="public-empty">${tr("ルーム一覧を読み込めませんでした。招待コードでは参加できます。")}</p>`; return; }
  if (!publicRooms.length) { box.innerHTML = `<p class="public-empty">${tr("いま公開中のルームはありません。ルームを作るときに「一覧に公開する」を選ぶと、ここに表示されます。")}</p>`; return; }
  box.innerHTML = `<ul class="public-list">${publicRooms.map(r => {
    const full = Number(r.count) >= Number(r.max || MAX_PLAYERS);
    return `<li class="public-room">
      <div class="public-room-main">
        <strong>${esc(r.name || tr("{host}のルーム", { host: r.host }))}</strong>
        <span>${r.name ? `${tr("ホスト：")}${esc(r.host)}・` : ""}${esc(tr("{count}/{max}人・各{n}人指名", { count: r.count, max: r.max || MAX_PLAYERS, n: r.pickLimit }))}${r.limits ? `${tr("・縛り：")}${esc(r.limits)}` : ""}</span>
      </div>
      <button class="btn btn-sm ${full ? "btn-ghost" : "btn-primary"}" data-action="join-public" data-code="${esc(r.code)}" ${full ? "disabled" : ""}>${full ? tr("満員") : tr("参加する")}</button>
    </li>`;
  }).join("")}</ul>`;
}

function attachRoom(room) {
  S.online = { room, rev: -1, hostRev: 0, acks: {}, pending: null, players: {}, status: "lobby", settings: null, joinState: room.isHost ? "joined" : "joined", message: "", error: "", actionQueue: Promise.resolve(), handled: new Set() };
  store.saveRoom({ code: room.code });
  const url = new URL(location.href);
  url.searchParams.set("room", room.code);
  history.replaceState(null, "", url);
  room.watchBasics({
    onPlayers: players => { S.online.players = players; syncLobby(); if (S.route.name === "room") renderRoom(); if (S.route.name === "draft") renderBoardPanel(); },
    onStatus: (status, exists) => {
      S.online.status = status;
      if (!exists) { leaveRoomLocally(tr("ルームが終了しました。")); return; }
      syncLobby();
      if (S.route.name === "room") renderRoom();
    },
    onSettings: settings => { S.online.settings = settings; syncLobby(); if (S.route.name === "room") renderRoom(); },
    onError: error => console.warn("room listener", error)
  });
  if (room.isHost) {
    room.watchJoinRequests((uid, request, ref) => {
      S.online.actionQueue = S.online.actionQueue.then(() => room.acceptJoin(uid, request, ref)).catch(error => console.warn(error));
    });
    room.watchActions((key, action) => {
      if (S.online.handled.has(key)) return;
      S.online.handled.add(key);
      S.online.actionQueue = S.online.actionQueue.then(() => processAction(key, action)).catch(error => console.warn(error));
    });
  } else {
    room.watchSelf({
      onMember: member => {
        if (member) {
          S.online.joinState = "joined";
          if (member.departed) leaveRoomLocally(member.kickedByHost ? tr("ホストによってルームから退出させられました。") : tr("ルームから退出しました。"));
          else if (S.route.name === "room") renderRoom();
        }
      },
      onRequest: request => {
        const messages = { full: tr("ルームが満員のため参加できませんでした。"), closed: tr("ドラフトがすでに始まっていたため参加できませんでした。"), kicked: tr("このルームには参加できません。") };
        if (request?.status && messages[request.status]) leaveRoomLocally(messages[request.status], true);
      }
    });
    room.watchState(snap => applyRemoteState(snap), error => console.warn("state", error));
  }
}

function applyRemoteState(snap, { force = false } = {}) {
  if (!S.online || (!force && snap.rev <= S.online.rev)) return;
  S.online.rev = snap.rev;
  const previousId = S.draft?.id;
  const previous = S.draft;
  S.draft = snap.state;
  const pending = S.online.pending;
  const ack = pending && snap.acks?.[S.online.room.uid];
  if (pending && ack?.id === pending.key) {
    S.online.pending = null;
    if (!ack.ok) toast(ack.reason || tr("操作が反映されませんでした。"));
    else if (pending.kind === "pick") S.selectedId = null;
  }
  if (previous && previousId === snap.state.id) S.lastSeq = previous.seq;
  else { S.lastSeq = snap.state.seq; S.selectedId = null; }
  if (S.online.room.isHost) return;
  if (previousId !== snap.state.id) {
    go("draft");
    return;
  }
  announce(S.draft);
  S.lastSeq = S.draft.seq;
  if (S.route.name === "room") go("draft");
  else if (S.route.name === "draft") {
    if (S.draft.reveal && !$("#reveal").hidden) S.draftDirty = true;
    else renderDraft();
  }
  else if (S.route.name === "results" && !E.isFinished(S.draft)) go("draft");
  renderReveal();
  if (E.isFinished(S.draft)) onFinished();
}

let pushTimer = null;
function pushOnlineState() {
  if (!S.online?.room || !isHost() || !S.draft) return;
  // 同じ処理の中で何度変わっても、書き込みは1回にまとめてすぐ送る
  if (pushTimer) return;
  pushTimer = true;
  queueMicrotask(() => {
    pushTimer = null;
    S.online.hostRev += 1;
    S.online.room.writeState({ rev: S.online.hostRev, state: S.draft, acks: S.online.acks }).catch(error => {
      toast(tr("共有に失敗しました：{reason}", { reason: error.message || tr("通信を確認してください") }));
    });
  });
}

async function processAction(key, action) {
  const room = S.online?.room;
  const s = S.draft;
  if (!room || !room.isHost) return;
  let ok = false;
  let reason = "";
  const player = room.players[action?.uid];
  const team = s?.teams.find(t => t.uid === action?.uid);
  try {
    if (!player || !s || !team) reason = tr("参加者を確認できませんでした。");
    else if (action.kind === "leave") {
      await room.markDeparted(action.uid);
      ok = E.markDeparted(s, team.id, now());
    } else if (team.departed) reason = tr("退出済みのチームです。");
    else if (action.kind === "pick") {
      const result = E.submitPick(s, team.id, action.idolId, now());
      ok = result.ok;
      reason = result.reason || "";
    } else if (action.kind === "envelope") {
      ok = s.reveal?.key === action.revealKey && E.chooseEnvelope(s, team.id, action.envelope, now());
      if (!ok) reason = tr("封筒を選べませんでした。");
    }
  } catch (error) {
    reason = error.message || tr("操作を処理できませんでした。");
  }
  if (action?.uid) S.online.acks[action.uid] = { id: key, ok, reason };
  commit();
  room.removeAction(key); // 片付けは待たずに次の操作へ
}

function sendGuestAction(action) {
  const room = S.online?.room;
  if (!room || S.online.pending) return;
  const { key, done } = room.sendAction(action);
  S.online.pending = { key, kind: action.kind };
  done.then(() => {
    window.setTimeout(() => {
      if (S.online?.pending?.key === key) {
        S.online.pending = null;
        toast(tr("ホストからの応答がありません。通信を確認して、もう一度試してください。"));
        render();
      }
    }, 12000);
  }).catch(error => {
    S.online.pending = null;
    toast(error.message || tr("送信できませんでした。"));
    render();
  });
}

function leaveRoomLocally(message, toSetup = false) {
  const room = S.online?.room;
  room?.detach();
  stopDirector();
  S.online = null;
  store.saveRoom(null);
  if (S.draft?.mode === "online") S.draft = null;
  const url = new URL(location.href);
  url.searchParams.delete("room");
  history.replaceState(null, "", url.pathname + url.search + location.hash);
  if (message) toast(message, { duration: 5000 });
  if (toSetup) { S.online = { message: "", error: message }; go("setup/online"); }
  else go("");
}

function renderRoom() {
  // 入力中のルーム名は、ほかの更新で書き換わらないように保つ
  const editing = document.activeElement?.id === "roomNameEdit" ? { value: document.activeElement.value, pos: document.activeElement.selectionStart } : null;
  const o = S.online;
  const room = o?.room;
  const view = $("#view-room");
  if (!room) { view.innerHTML = ""; return; }
  const host = room.isHost;
  const settings = o.settings || { pickLimit: 5, orderMode: "snake", startOrder: "random" };
  const players = Object.entries(o.players || {}).sort(([, a], [, b]) => (Number(a.order) || 0) - (Number(b.order) || 0));
  const active = players.filter(([, p]) => !p.departed);
  const waitingApproval = !host && !o.players?.[room.uid];
  const playing = o.status === "playing";
  view.innerHTML = `
    <a class="back-link" href="#/" >${tr("ホームへ")}</a>
    <div class="room">
      <section class="room-code-card" aria-label="${tr("ルームコード")}">
        ${settings.roomName ? `<p class="room-name">${esc(settings.roomName)}</p>` : ""}
        <small>${tr("ルームコード")}</small>
        <div class="room-code">${esc(room.code)}</div>
        <p style="color:rgba(255,255,255,.8);font-size:14px">${host ? tr("招待リンクを友達に送ってください。リンクを開くと、このルームの参加画面になります。") : tr("ホストがドラフトを始めるまでお待ちください。")}</p>
        <div class="room-code-actions">
          <button class="btn btn-sm" data-action="share-invite">${icon("share")}${tr("招待リンクを送る")}</button>
          <button class="btn btn-sm btn-ghost" data-action="copy-invite">${icon("copy")}${tr("コピー")}</button>
        </div>
      </section>
      <div style="display:grid;gap:16px">
        <section class="panel" style="display:grid;gap:14px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px"><h2 class="panel-title">${tr("参加者")}</h2><span class="chip">${active.length}/${tr("{n}人", { n: MAX_PLAYERS })}</span></div>
          ${waitingApproval ? `<p class="notice">${tr("参加を申請しています。ホストの端末が自動で承認します…")}</p>` : ""}
          <ol class="player-list">${players.map(([uid, p], i) => `
            <li class="player ${p.departed ? "is-departed" : ""}" style="--team-color:${teamColor(i)}">
              <span class="player-dot">${i + 1}</span><strong>${esc(p.teamName || p.name)}</strong>
              <span class="player-tag">${p.host ? tr("ホスト") : p.departed ? tr("退出") : uid === room.uid ? tr("あなた") : tr("参加者")}</span>
              ${host && !p.host && !p.departed ? `<button class="btn btn-ghost btn-sm" data-action="kick" data-uid="${esc(uid)}">${tr("退出させる")}</button>` : ""}
            </li>`).join("")}</ol>
        </section>
        <section class="panel setup-form">
          <div><h2 class="panel-title">${tr("ルール")}</h2><p class="panel-sub">${host ? tr("ホストが決めます。") : tr("ホストが決めたルールです。")}</p></div>
          ${host && !playing ? `<label class="field"><span class="field-label">${tr("ルーム名（任意）")}</span>
            <input class="input" id="roomNameEdit" maxlength="20" value="${esc(settings.roomName || "")}" placeholder="${tr("例：○○縛り")}" autocomplete="off"></label>` : ""}
          <div class="field"><span class="field-label">${tr("ルーム一覧")}</span>
            ${host && !playing
              ? segmented("roomPublic", [["private", tr("招待した人だけ")], ["public", tr("一覧に公開")]], settings.public ? "public" : "private", { label: tr("ルーム一覧への公開") })
              : `<p class="limit-readonly">${settings.public ? tr("一覧に公開中（誰でも参加できます）") : tr("招待した人だけが参加できます")}</p>`}</div>
          ${rulesFields(settings, { disabled: !host || playing })}
          <div class="field"><span class="field-label">${tr("縛り")}</span>${host && !playing
            ? limitsBlock(settings, { teamCount: active.length, pickLimit: settings.pickLimit })
            : `<p class="limit-readonly">${E.hasLimits(effectiveLimits(settings)) ? esc(E.limitsLabel(effectiveLimits(settings))) : tr("縛りなし（全員が候補）")}</p>`}</div>
        </section>
        <div class="room-actions">
          ${host
            ? `<button class="btn btn-primary btn-lg" data-action="start-online" ${active.length < 2 || playing ? "disabled" : ""}>${icon("play")}${active.length < 2 ? tr("参加者を待っています（2人から）") : tr("{n}人でドラフトを始める", { n: active.length })}</button>`
            : `<p class="notice">${playing ? tr("ドラフトが始まっています。") : tr("ホストがドラフトを始めると、自動で画面が切り替わります。")}</p>`}
          <button class="btn btn-ghost" data-action="${host ? "close-room" : "leave-room"}">${host ? tr("ルームを終了する") : tr("ルームから退出する")}</button>
        </div>
      </div>
    </div>`;
  if (editing) {
    const input = $("#roomNameEdit");
    if (input) { input.value = editing.value; input.focus(); try { input.setSelectionRange(editing.pos, editing.pos); } catch { /* ignore */ } }
  }
}

async function startOnline() {
  const o = S.online;
  const room = o?.room;
  if (!room?.isHost) return;
  const active = room.activePlayers();
  if (active.length < 2) { toast(tr("2人以上そろうと始められます")); return; }
  const settings = o.settings || { pickLimit: 5, orderMode: "snake", startOrder: "random" };
  if (eligibleCount(effectiveLimits(settings)) < active.length * (Number(settings.pickLimit) || 5)) {
    toast(tr("縛りの候補が足りません。条件を増やすか、指名人数を減らしてください。"));
    return;
  }
  const draft = E.createDraft({
    mode: "online",
    teams: active.map(([uid, p]) => ({ name: p.teamName || p.name, kind: "human", uid })),
    settings: { ...settings, limits: effectiveLimits(settings) }
  });
  try {
    await room.clearActions();
    await room.setStatus("playing");
    o.acks = {};
    beginDraft(draft);
  } catch (error) {
    toast(error.message || tr("開始できませんでした。"));
  }
}

async function restartDraft() {
  const s = S.draft;
  if (!s) return;
  if (isOnline()) {
    if (!isHost()) return;
    const room = S.online.room;
    await room.removeDepartedPlayers().catch(() => {});
    await room.clearActions().catch(() => {});
    const active = room.activePlayers();
    if (active.length < 2) { toast(tr("参加者が2人未満のため再ドラフトできません")); return; }
    S.online.acks = {};
    beginDraft(E.createDraft({ mode: "online", teams: active.map(([uid, p]) => ({ name: p.teamName || p.name, kind: "human", uid })), settings: s.settings }));
    return;
  }
  const teams = s.teams.map(t => ({ name: t.name, kind: t.kind }));
  beginDraft(E.createDraft({ mode: s.mode, teams, settings: s.settings }));
}

async function openDraftMenu() {
  const s = S.draft;
  if (!s) return;
  const items = [];
  items.push({ value: "speed", label: tr("発表のテンポ：{speed}（切り替え）", { speed: S.speed === "fast" ? tr("テンポよく") : tr("じっくり") }), icon: "refresh" });
  if (!isOnline()) {
    items.push({ value: "home", label: tr("中断してホームへ（あとで再開できます）"), icon: "home" });
    items.push({ value: "restart", label: tr("最初からやり直す"), icon: "refresh" });
  } else {
    items.push({ value: "invite", label: tr("招待リンクをコピー"), icon: "copy" });
    items.push({ value: "home", label: tr("ホームへ（ルームには残ります）"), icon: "home" });
    items.push(isHost() ? { value: "close", label: tr("ルームを終了する"), icon: "close", danger: true } : { value: "leave", label: tr("ルームから退出する"), icon: "close", danger: true });
  }
  const choice = await menuDialog({ title: tr("メニュー"), items });
  if (choice === "speed") { S.speed = S.speed === "fast" ? "normal" : "fast"; savePrefs(); toast(tr("発表のテンポ：{speed}", { speed: S.speed === "fast" ? tr("テンポよく") : tr("じっくり") })); direct(); }
  else if (choice === "home") go("");
  else if (choice === "restart") {
    if (await confirmDialog({ title: tr("最初からやり直しますか？"), message: tr("今のドラフトは消えて、同じ設定で新しく始まります。"), ok: tr("やり直す"), danger: true })) restartDraft();
  } else if (choice === "invite") copyInvite();
  else if (choice === "close") closeRoom();
  else if (choice === "leave") leaveRoom();
}

async function closeRoom() {
  const room = S.online?.room;
  if (!room?.isHost) return;
  if (!(await confirmDialog({ title: tr("ルームを終了しますか？"), message: tr("参加者名・設定・指名結果を含むルームのデータを削除します。"), ok: tr("終了して削除"), danger: true }))) return;
  try {
    stopDirector();
    await room.close();
    leaveRoomLocally(tr("ルームを終了しました。"));
  } catch (error) {
    toast(error.message || tr("ルームを終了できませんでした。"));
  }
}

async function leaveRoom() {
  const o = S.online;
  const room = o?.room;
  if (!room || room.isHost) return;
  if (!(await confirmDialog({ title: tr("ルームから退出しますか？"), message: o.status === "playing" ? tr("ドラフト中に退出すると、あなたのチームの残りの指名はスキップされます。") : "", ok: tr("退出する"), danger: true }))) return;
  if (o.status === "playing") {
    room.sendAction({ kind: "leave" }).done.catch(() => {});
    leaveRoomLocally(tr("ルームから退出しました。"));
  } else {
    await room.leaveLobby();
    leaveRoomLocally(tr("ルームから退出しました。"));
  }
}

async function kickPlayer(uid) {
  const room = S.online?.room;
  const player = room?.players[uid];
  if (!room?.isHost || !player) return;
  const playing = S.online.status === "playing";
  if (!(await confirmDialog({ title: tr("{name} を退出させますか？", { name: player.teamName || player.name }), message: playing ? tr("このチームの残りの指名はスキップされます。") : "", ok: tr("退出させる"), danger: true }))) return;
  try {
    if (playing) {
      await room.markDeparted(uid, true);
      const team = S.draft?.teams.find(t => t.uid === uid);
      if (team) { E.markDeparted(S.draft, team.id, now()); commit(); }
    } else {
      await room.markDeparted(uid, true);
    }
  } catch (error) {
    toast(error.message || tr("退出させられませんでした。"));
  }
}

async function copyInvite() {
  const room = S.online?.room;
  if (!room) return;
  try {
    await navigator.clipboard.writeText(room.inviteUrl());
    toast(tr("招待リンクをコピーしました"));
  } catch {
    await promptDialog({ title: tr("招待リンク"), label: tr("このリンクをコピーして送ってください"), value: room.inviteUrl(), ok: tr("閉じる") });
  }
}

async function shareInvite() {
  const room = S.online?.room;
  if (!room) return;
  if (navigator.share) {
    try { await navigator.share({ title: tr("KDraft オンラインドラフト"), text: tr("KDraftでドラフトしよう！ルームコード：{code}", { code: room.code }), url: room.inviteUrl() }); return; }
    catch (error) { if (error?.name === "AbortError") return; }
  }
  copyInvite();
}

// ======================================================================
// 操作（イベントの受け口）
// ======================================================================
// 押した瞬間（指が触れた時点）に、次の画面で使う部品を先に読み込み始める
document.addEventListener("pointerdown", event => {
  const link = event.target.closest?.('a[href="#/vote"], a[href="#/setup/online"]');
  if (!link) return;
  if (link.getAttribute("href") === "#/vote") loadPoll().catch(() => {});
  if (onlineConfigured()) loadOnline().then(m => m.warmup()).catch(() => {});
}, { passive: true });

document.addEventListener("click", async event => {
  if (S.route.name === "vote" && pollModule?.onVoteClick(event)) return;
  const target = event.target.closest("[data-action]");
  const segButton = event.target.closest("[data-seg] button[data-value]");
  const stepButton = event.target.closest("[data-stepper] button[data-step]");
  if (segButton && !segButton.disabled) { onSegment(segButton.closest("[data-seg]").dataset.seg, segButton.dataset.value); return; }
  if (stepButton && !stepButton.disabled) {
    const box = stepButton.closest("[data-stepper]");
    onStepper(box.dataset.stepper, Number(stepButton.dataset.step), Number(box.dataset.min), Number(box.dataset.max));
    return;
  }
  if (!target || target.disabled) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  switch (action) {
    case "select": {
      const previous = S.selectedId;
      S.selectedId = previous === id ? null : id;
      refreshCardSelection(previous);
      renderDock();
      break;
    }
    case "deselect": { const previous = S.selectedId; S.selectedId = null; refreshCardSelection(previous); renderDock(); break; }
    case "confirm-pick": confirmPick(); break;
    case "like":
      if (S.shortlist.has(id)) S.shortlist.delete(id); else S.shortlist.add(id);
      store.saveShortlist(S.shortlist);
      $$(`[data-action="like"][data-id="${id}"]`).forEach(b => b.setAttribute("aria-pressed", String(S.shortlist.has(id))));
      { const chip = $('[data-action="toggle-shortlist-only"]'); if (chip) chip.innerHTML = `${icon("heart")}${tr("気になる")} ${S.shortlist.size ? `(${S.shortlist.size})` : ""}`; }
      if (S.pool.onlyShortlist) renderCards();
      break;
    case "exclude":
      if (S.excluded.has(id)) S.excluded.delete(id); else { S.excluded.add(id); if (S.selectedId === id) S.selectedId = null; }
      store.saveExcluded(S.excluded);
      renderCards(); renderDock();
      toast(S.excluded.has(id) ? tr("候補から除外しました（AIも選びません）") : tr("除外をやめました"));
      break;
    case "load-more": S.pool.limit += PAGE(); renderCards(); break;
    case "clear-search": {
      S.pool.query = "";
      const input = $("#poolSearch");
      if (input) { input.value = ""; input.focus(); }
      target.hidden = true;
      renderCards(); updateFilterOptions();
      break;
    }
    case "join-public": {
      const code = target.dataset.code;
      if ($("#roomCode")) $("#roomCode").value = code;
      joinRoom(code, { userAction: true });
      break;
    }
    case "toggle-limit": toggleLimit(target.dataset.key, target.dataset.value); break;
    case "limits-clear": setLimits({ generations: [], nationalities: [], agencies: [] }); break;
    case "limits-more": S.limitsOpen = target.dataset.key || ""; S.route.name === "room" ? renderRoom() : renderSetup(); break;
    case "toggle-shortlist-only": S.pool.onlyShortlist = !S.pool.onlyShortlist; S.pool.limit = PAGE(); renderPoolTools(); renderCards(); break;
    case "toggle-hide-drafted": S.pool.hideDrafted = !S.pool.hideDrafted; renderPoolTools(); renderCards(); break;
    case "toggle-show-excluded": S.pool.showExcluded = !S.pool.showExcluded; renderPoolTools(); renderCards(); break;
    case "reset-filters":
      Object.assign(S.pool, { query: "", generation: "", nationality: "", agency: "", group: "", hideDrafted: true, showExcluded: false, onlyShortlist: false, limit: PAGE() });
      renderPoolTools(); renderCards(); break;
    case "random-pick": {
      const drafted = draftedKeys();
      const list = candidates().filter(i => !drafted.has(i.personKey) && !S.excluded.has(i.id));
      if (!list.length) { toast(tr("選べる候補がいません。条件を変えてみてください")); break; }
      const idol = list[Math.floor(Math.random() * list.length)];
      const previous = S.selectedId;
      S.selectedId = idol.id;
      refreshCardSelection(previous);
      renderDock();
      $(`.card[data-id="${idol.id}"]`)?.scrollIntoView({ block: "center", behavior: reducedMotion() ? "auto" : "smooth" });
      break;
    }
    case "save-preset": {
      const name = await promptDialog({ title: tr("絞り込み条件を保存"), label: tr("条件の名前"), placeholder: tr("例：4世代のSM") });
      if (!name) break;
      const p = S.pool;
      S.presets[name] = { query: p.query, generation: p.generation, nationality: p.nationality, agency: p.agency, group: p.group, hideDrafted: p.hideDrafted };
      store.savePresets(S.presets);
      renderPoolTools();
      toast(tr("「{name}」を保存しました", { name }));
      break;
    }
    case "to-results": go("results"); break;
    case "open-bids": if (isHost() && E.openBids(S.draft, now())) commit(); break;
    case "open-lottery": if (isHost() && E.openLottery(S.draft, now())) commit(); break;
    case "reveal-next": revealNext(); break;
    case "reveal-skip-all": revealSkipAll(); break;
    case "envelope": chooseEnvelope(Number(target.dataset.env)); break;
    case "draft-menu": openDraftMenu(); break;
    case "start-local": startLocalDraft(); break;
    case "resume": {
      const info = resumeInfo();
      if (!info) break;
      if (!S.draft) restoreLocal({ draft: info.draft });
      go(E.isFinished(S.draft) ? "results" : "draft");
      direct();
      break;
    }
    case "discard-resume":
      if (await confirmDialog({ title: tr("途中のドラフトを破棄しますか？"), ok: tr("破棄する"), danger: true })) {
        store.saveResume(null);
        if (S.draft && S.draft.mode !== "online") { S.draft = null; stopDirector(); }
        renderHome();
      }
      break;
    case "share-image": {
      S.shareStatus = tr("画像を作っています…");
      renderResults();
      try {
        const { shareResult, xIntentUrl } = await loadShare();
        const result = await shareResult(S.draft);
        S.shareStatus = result === "downloaded" ? tr("結果画像を保存しました。Xなどに添付して投稿できます。") : result === "shared" ? tr("共有しました。") : "";
        if (result === "downloaded") window.open(xIntentUrl(), "_blank", "noopener,noreferrer");
      } catch (error) {
        S.shareStatus = tr("画像を作れませんでした。もう一度お試しください。");
      }
      renderResults();
      break;
    }
    case "copy-result":
      try { const { resultText } = await loadShare(); await navigator.clipboard.writeText(resultText(S.draft)); toast(tr("結果をテキストでコピーしました")); }
      catch { toast(tr("コピーできませんでした")); }
      break;
    case "restart":
      if (await confirmDialog({ title: tr("同じ設定で再ドラフトしますか？"), message: isOnline() ? tr("ルームの全員で新しいドラフトを始めます。") : "", ok: tr("再ドラフト") })) restartDraft();
      break;
    case "finish-home": break;
    case "clear-history":
      if (await confirmDialog({ title: tr("履歴をすべて消しますか？"), message: tr("この端末に保存されたドラフト結果がすべて消えます。"), ok: tr("すべて消す"), danger: true })) { store.saveHistory([]); renderHistory(); }
      break;
    case "delete-history":
      store.saveHistory(store.history().filter(entry => entry.id !== id));
      renderHistory();
      break;
    case "create-room": createRoom(); break;
    case "join-room": joinRoom(undefined, { userAction: true }); break;
    case "copy-invite": copyInvite(); break;
    case "share-invite": shareInvite(); break;
    case "start-online": startOnline(); break;
    case "close-room": closeRoom(); break;
    case "leave-room": leaveRoom(); break;
    case "kick": kickPlayer(target.dataset.uid); break;
    case "install": requestInstall(); break;
    case "install-help": installHelp(); break;
    case "scroll-rules": $("#rules")?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" }); break;
    case "site-menu": openSiteMenu(); break;
    case "lang-menu": openLangMenu(); break;
    case "board-full": {
      const entry = target.dataset.history ? store.history().find(h => h.id === target.dataset.history) : null;
      const model = entry ? boardModelFromHistory(entry) : S.draft ? boardModelFromState(S.draft) : null;
      if (model) openBoardFull(model, entry ? formatDate(entry.completedAt) : (E.isFinished(S.draft) ? tr("最終ドラフト結果") : tr("指名ボード")));
      break;
    }
    case "board-full-close": closeBoardFull(); break;
    case "board-full-fit": S.boardFit = !S.boardFit; fitBoardFull(); break;
    default: break;
  }
});

function setLimits(limits) {
  const next = E.normalizeLimits(limits);
  if (S.route.name === "room") {
    if (!isHost() || S.online?.status === "playing") return;
    const settings = { ...(S.online.settings || {}), limits: next };
    S.online.room.setSettings(settings);
    S.online.settings = settings;
    renderRoom();
    return;
  }
  S.setup.limits = next;
  savePrefs();
  renderSetup();
}
function toggleLimit(key, value) {
  const current = E.normalizeLimits(S.route.name === "room" ? S.online?.settings?.limits : S.setup.limits);
  if (!current[key]) return;
  const set = new Set(current[key]);
  if (set.has(value)) set.delete(value); else set.add(value);
  setLimits({ ...current, [key]: [...set] });
}

function onSegment(name, value) {
  if (name === "tab") { S.tab = value; renderDraft(); window.scrollTo({ top: 0 }); return; }
  if (name === "boardMode") { S.boardMode = value; renderBoardPanel(); return; }
  if (name === "resultsMode") { S.resultsMode = value; renderResults(); return; }
  if (name === "speed") { S.speed = value; savePrefs(); renderSetup(); return; }
  if (name === "limitsOn") {
    const on = value === "on";
    if (S.route.name === "room") {
      if (!isHost() || S.online?.status === "playing") return;
      const next = { ...(S.online.settings || {}), limitsOn: on };
      S.online.room.setSettings(next);
      S.online.settings = next;
      renderRoom();
      return;
    }
    S.setup.limitsOn = on;
    savePrefs();
    renderSetup();
    return;
  }
  if (name === "roomPublic") {
    if (!isHost() || S.route.name !== "room") return;
    const next = { ...(S.online.settings || {}), public: value === "public" };
    S.online.room.setSettings(next);
    S.online.settings = next;
    syncLobby();
    renderRoom();
    if (value === "public") toast(tr("ルーム一覧に公開しました。誰でも参加できます"));
    return;
  }
  if (["startOrder", "orderMode", "pickMode"].includes(name)) {
    if (S.route.name === "room") {
      if (!isHost()) return;
      const next = { ...(S.online.settings || {}), [name]: value };
      S.online.room.setSettings(next);
      S.online.settings = next;
      renderRoom();
      return;
    }
    S.setup[name] = value;
    savePrefs();
    renderSetup();
  }
}

function onStepper(name, step, min, max) {
  if (S.route.name === "room") {
    if (!isHost() || name !== "pickLimit") return;
    const current = Number(S.online.settings?.pickLimit) || 5;
    const next = { ...(S.online.settings || {}), pickLimit: Math.min(max, Math.max(min, current + step)) };
    S.online.room.setSettings(next);
    S.online.settings = next;
    renderRoom();
    return;
  }
  S.setup[name] = Math.min(max, Math.max(min, (Number(S.setup[name]) || min) + step));
  savePrefs();
  renderSetup();
}

document.addEventListener("input", event => {
  if (S.route.name === "vote" && pollModule?.onVoteInput(event)) return;
  const el = event.target;
  if (el.id === "poolSearch") {
    S.pool.query = el.value;
    S.pool.limit = PAGE();
    clearTimeout(el._t);
    // 入力欄そのものは描き直さない（描き直すと入力中の文字や日本語変換が消える）
    const clear = $(".search-clear");
    if (clear) clear.hidden = !S.pool.query;
    if (event.isComposing) return;
    el._t = setTimeout(() => { renderCards(); updateFilterOptions(); }, 120);
  } else if (el.dataset.setup === "playerName") { S.setup.playerName = el.value; savePrefs(); }
  else if (el.dataset.teamName != null) { S.setup.teamNames[Number(el.dataset.teamName)] = el.value; savePrefs(); }
  else if (el.id === "onlineName") { S.onlineName = el.value; }
  else if (el.id === "roomCode") { const pos = el.selectionStart; el.value = el.value.toUpperCase(); el.setSelectionRange(pos, pos); }
});

// 日本語変換の確定時に検索を反映
document.addEventListener("compositionend", event => {
  if (event.target.id === "pollSearch") { pollModule?.onVoteInput({ target: event.target, isComposing: false }); return; }
  if (event.target.id !== "poolSearch") return;
  S.pool.query = event.target.value;
  clearTimeout(event.target._t);
  event.target._t = setTimeout(() => { renderCards(); updateFilterOptions(); }, 60);
});

document.addEventListener("change", event => {
  const el = event.target;
  if (S.route.name === "vote" && pollModule?.onVoteChange(event)) return;
  if (el.id === "roomNameEdit" && isHost() && S.route.name === "room") {
    const next = { ...(S.online.settings || {}), roomName: normalizeRoomName(el.value) };
    S.online.room.setSettings(next);
    S.online.settings = next;
    syncLobby();
    toast(next.roomName ? tr("ルーム名を「{name}」にしました", { name: next.roomName }) : tr("ルーム名を消しました"));
    return;
  }
  if (el.dataset.filter) { S.pool[el.dataset.filter] = el.value; S.pool.limit = PAGE(); updateFilterOptions(); renderCards(); }
  else if (el.dataset.actionSelect === "sort") { S.pool.sort = el.value; renderCards(); }
  else if (el.dataset.actionSelect === "preset") {
    const preset = S.presets[el.value];
    if (!preset) return;
    Object.assign(S.pool, { query: preset.query || "", generation: preset.generation || "", nationality: preset.nationality || "", agency: agencyFilterName(preset.agency || ""), group: preset.group || "", hideDrafted: preset.hideDrafted !== false, limit: PAGE() });
    renderPoolTools(); renderCards();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && S.route.name === "draft" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    $("#poolSearch")?.focus();
  } else if (event.key === "Escape" && boardFullEl) {
    closeBoardFull();
  } else if (event.key === "Escape" && S.selectedId && S.route.name === "draft" && !$("#modal").open) {
    const previous = S.selectedId; S.selectedId = null; refreshCardSelection(previous); renderDock();
  } else if (event.key === "Enter" && event.target.id === "roomCode") {
    joinRoom(undefined, { userAction: true });
  }
});

// ======================================================================
// ホーム画面に追加・オフライン
// ======================================================================
let installPrompt = null;
const standalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
window.addEventListener("beforeinstallprompt", event => { event.preventDefault(); installPrompt = event; refreshInstallUI(); });
window.addEventListener("appinstalled", () => { installPrompt = null; refreshInstallUI(); });
function refreshInstallUI() {
  const barButton = $("#appbarInstall");
  if (barButton) barButton.hidden = standalone();
  const button = $("#installButton");
  const text = $("#installText");
  if (!button || !text) return;
  if (standalone()) { button.hidden = true; text.textContent = tr("ホーム画面のアイコンから開いています。"); return; }
  button.hidden = false;
  button.dataset.action = installPrompt ? "install" : "install-help";
  if (isIOS) text.textContent = tr("共有ボタン（四角から矢印が出ているアイコン）から「ホーム画面に追加」を選ぶと、アイコンから開けます。一度開いたあとは、通信が切れてもAIドラフトを遊べます。");
}
async function openLangMenu() {
  const picked = await menuDialog({ title: "言語 / 언어 / Language", items: LANGS.map(([code, name]) => ({ value: code, label: `${code === lang ? "✓ " : ""}${name}` })) });
  if (picked && picked !== lang) setLang(picked);
}

async function openSiteMenu() {
  const items = [
    { value: "home", label: tr("ホーム"), icon: "home" },
    { value: "setup/ai", label: tr("AIとドラフト"), icon: "robot" },
    { value: "setup/local", label: tr("1台で対戦"), icon: "users" },
    { value: "setup/online", label: tr("オンライン"), icon: "globe" },
    { value: "vote", label: tr("人気投票"), icon: "heart" },
    { value: "history", label: tr("過去のドラフト（履歴）"), icon: "refresh" },
    { value: "about", label: tr("サイト情報・お問い合わせ"), icon: "filter" }
  ];
  if (!standalone()) items.push({ value: "#install", label: tr("ホーム画面に追加"), icon: "addHome" });
  items.push({ value: "#lang", label: `${tr("言語")} / Language：${LANGS.find(([c]) => c === lang)?.[1] || ""}`, icon: "globe" });
  const choice = await menuDialog({ title: tr("メニュー"), items });
  if (choice === null) return;
  if (choice === "#install") { installHelp(); return; }
  if (choice === "#lang") { openLangMenu(); return; }
  go(choice === "home" ? "" : choice);
}

function installHelp() {
  if (installPrompt) { requestInstall(); return; }
  const share = icon("share");
  const isAndroid = /android/i.test(navigator.userAgent);
  const steps = isIOS
    ? [tr("画面の下（または上）にある共有ボタン {icon} を押します", { icon: share }), tr("メニューを下にスクロールして「ホーム画面に追加」を選びます"), tr("右上の「追加」を押すと、ホーム画面にKDraftのアイコンができます")]
    : isAndroid
      ? [tr("ブラウザ右上のメニュー（︙）を押します"), tr("「ホーム画面に追加」または「アプリをインストール」を選びます"), tr("「追加」を押すと、ホーム画面にKDraftのアイコンができます")]
      : [tr("アドレスバー右側のインストールボタン、またはブラウザのメニューを開きます"), tr("「アプリをインストール」「ホーム画面に追加」「Dockに追加」などを選びます"), tr("追加したアイコンから、いつでもすぐに開けます")];
  const modal = $("#modal");
  modal.innerHTML = `
    <form method="dialog" class="modal-body">
      <h2 id="modalTitle">${tr("ホーム画面に追加")}</h2>
      <p>${tr("アイコンからすぐ開けるようになります。一度開いたあとは、通信が切れてもAIドラフトと1台での対戦を遊べます。")}</p>
      <ol class="install-steps">${steps.map(step => `<li>${step}</li>`).join("")}</ol>
      <div class="modal-actions"><button class="btn btn-primary" value="ok">${tr("わかった")}</button></div>
    </form>`;
  modal.showModal();
}
async function requestInstall() {
  if (!installPrompt) return;
  const promptEvent = installPrompt;
  installPrompt = null;
  promptEvent.prompt();
  const choice = await promptEvent.userChoice.catch(() => null);
  if (choice?.outcome === "accepted") toast(tr("ホーム画面に追加しました"));
  refreshInstallUI();
}
window.addEventListener("offline", () => toast(tr("オフラインになりました。AIドラフトと1台での対戦はそのまま遊べます"), { duration: 5200 }));
window.addEventListener("online", () => toast(tr("オンラインに戻りました")));
refreshInstallUI();

if ("serviceWorker" in navigator && (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname))) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(() => {}));
}

// ======================================================================
// 起動
// ======================================================================
function boot() {
  // 静的な部分（上部バーなど）の文を今の言語に
  const menuBtn = $(".appbar-menu");
  if (menuBtn) { menuBtn.setAttribute("aria-label", tr("メニューを開く")); const label = menuBtn.querySelector("span"); if (label) label.textContent = tr("メニュー"); }
  const skip = $(".skip-link"); if (skip) skip.textContent = tr("本文へ移動");
  const langBtn = $(".appbar-lang");
  if (langBtn) {
    langBtn.querySelector(".lang-long").textContent = LANGS.find(([c]) => c === lang)?.[1] || "";
    langBtn.querySelector(".lang-short").textContent = lang.toUpperCase();
  }
  // iOS Safari で :active（押した瞬間の見た目）を効かせる
  document.addEventListener("touchstart", () => {}, { passive: true });
  const params = new URLSearchParams(location.search);
  const invite = normalizeCode(params.get("room") || "");
  const savedRoom = store.room();
  if (invite && savedRoom?.code === invite) {
    joinRoom(invite);
  } else if (invite) {
    history.replaceState(null, "", `${location.pathname}?room=${invite}#/setup/online`);
  } else if (savedRoom?.code) {
    // 前回のオンラインルームに自動で戻る（失敗したら忘れる）
    loadOnline().then(({ Room }) => Room.isMember(savedRoom.code)).then(member => {
      if (member) joinRoom(savedRoom.code);
      else store.saveRoom(null);
    }).catch(() => store.saveRoom(null));
  }
  onRoute();
  if (S.draft && S.route.name === "draft") direct();
}
boot();
