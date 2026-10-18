// KDraft — 画面と進行
import { idols, normalizeSearchText, agencyFilterName, candidateSearchTextById, popularityRankingSources } from "./data.js";
import * as E from "./engine.js";
import { chooseAIIdol, preferredPersonCandidates } from "./ai.js";
import { store, HISTORY_LIMIT } from "./store.js";
import { shareResult, xIntentUrl, resultText } from "./share.js";
import { Room, onlineConfigured, normalizeName, normalizeCode, MAX_PLAYERS } from "./online.js";
import {
  $, $$, esc, icon, monogram, stars, teamColor, agencyShort, agencyFull, formatDate,
  MODE_LABEL, reducedMotion, toast, confirmDialog, promptDialog, menuDialog
} from "./ui.js";

// ======================================================================
// 状態
// ======================================================================
const DEFAULT_SETUP = { aiCount: 3, localCount: 4, pickLimit: 5, orderMode: "snake", startOrder: "random" };
const LOCAL_TEAM_NAMES = ["チームA", "チームB", "チームC", "チームD", "チームE", "チームF", "チームG", "チームH", "チームI", "チームJ"];
const PAGE = () => (window.innerWidth <= 720 ? 24 : 48);

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
  boardMode: window.innerWidth <= 720 ? "teams" : "table",
  resultsMode: "teams",
  setup: {
    ...DEFAULT_SETUP,
    ...(prefs.setup || {}),
    playerName: prefs.playerName || "あなた",
    teamNames: Array.isArray(prefs.teamNames) ? prefs.teamNames : LOCAL_TEAM_NAMES.slice()
  },
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
    setup: { aiCount: S.setup.aiCount, localCount: S.setup.localCount, pickLimit: S.setup.pickLimit, orderMode: S.setup.orderMode, startOrder: S.setup.startOrder }
  });
}
S.onlineName = prefs.onlineName || "";

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
const VIEWS = ["home", "setup", "room", "draft", "results", "history", "about"];

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
  if (changed) $$('#toasts [data-slot="pick"]').forEach(el => el.remove());
  S.route = route;
  document.body.dataset.view = route.name;
  if (route.name !== "draft") { $("#dockMount").innerHTML = ""; document.body.classList.remove("has-dock"); }
  VIEWS.forEach(name => { $(`#view-${name}`).hidden = name !== route.name; });
  $$(".appbar-nav a").forEach(link => {
    if (link.dataset.nav === route.name) link.setAttribute("aria-current", "page");
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
      home: "KDraft — K-POPガールズグループ・ドラフト",
      setup: "ドラフトの設定 — KDraft",
      room: "オンラインルーム — KDraft",
      draft: "ドラフト中 — KDraft",
      results: "ドラフト結果 — KDraft",
      history: "過去のドラフト — KDraft",
      about: "サイト情報 — KDraft"
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
  renderReveal();
}

function renderAppbar() {
  const box = $("#appbarContext");
  if (S.route.name === "draft" && S.draft) {
    const code = isOnline() && S.online?.room ? `<span class="chip">ルーム ${esc(S.online.room.code)}</span>` : "";
    box.innerHTML = `<span class="chip chip-brand">${esc(MODE_LABEL[S.draft.mode])}</span>${code}
      <span style="flex:1"></span>
      <button class="btn btn-ghost btn-sm draft-menu-btn" data-action="draft-menu" aria-label="ドラフトのメニュー">${icon("menu")}<span>メニュー</span></button>`;
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
    return `<div class="resume-card" role="region" aria-label="途中のドラフト">
      <span class="resume-card-mark">${icon("play")}</span>
      <div class="resume-card-copy">
        <strong>${d.mode === "online" ? "オンラインドラフトが進行中です" : "途中のドラフトがあります"}</strong>
        <span>${esc(MODE_LABEL[d.mode])}・${d.teams.length}チーム・${done}/${total}人指名済み・${d.r1.started ? `${d.round}巡目` : "1巡目"}</span>
      </div>
      <div class="resume-card-actions">
        ${d.mode === "online" ? "" : `<button class="btn btn-ghost btn-sm" data-action="discard-resume">破棄</button>`}
        <button class="btn btn-hot" data-action="resume">続きから</button>
      </div>
    </div>`;
  })() : "";

  $("#view-home").innerHTML = `
    <section class="home-hero">
      <div class="home-hero-copy">
        <p class="home-hero-kicker"><i aria-hidden="true"></i>K-POPガールズグループ・ドラフト</p>
        <h1><span>推しでつくる、</span><span class="holo-text">夢のドラフト。</span></h1>
        <p class="home-hero-lead">${idols.length.toLocaleString()}人の候補から、1巡目は入札、重なったら封筒で抽選。ドラフト会議のように指名して、あなただけのチームをつくろう。</p>
        <div class="home-hero-actions">
          <a class="btn btn-lg btn-light" href="#/setup/ai">${icon("robot")}AIとドラフトする</a>
          <a class="btn btn-lg btn-secondary" href="#/setup/online">${icon("globe")}友達とオンラインで</a>
        </div>
      </div>
      <div class="photocard-stack" aria-hidden="true">
        <div class="photocard photocard-back"><span class="photocard-pattern"></span></div>
        <div class="photocard photocard-mid"><span class="photocard-pattern"></span></div>
        <figure class="photocard photocard-front">
          <img src="assets/kdraft-512-v4.png" alt="" width="180" height="180">
          <figcaption><strong>第1回選択希望</strong><small>KDRAFT MEMBER CARD</small></figcaption>
        </figure>
      </div>
    </section>
    ${resumeHtml}

    <section class="section" aria-labelledby="modesTitle">
      <div class="section-head"><h2 id="modesTitle">遊び方を選ぶ</h2><p>どのモードも同じルールで遊べます。</p></div>
      <div class="mode-grid">
        <a class="mode-tile" data-mode="ai" href="#/setup/ai">
          <span class="mode-tile-icon">${icon("robot")}</span>
          <h3>AIとドラフト</h3>
          <p>ひとりで遊ぶならこれ。同世代型・同事務所型など、指名の好みが違うAIと競います。</p>
          <span class="mode-tile-foot"><span>ひとりで・AI 1〜10人</span><span class="mode-tile-go">設定へ</span></span>
        </a>
        <a class="mode-tile" data-mode="local" href="#/setup/local">
          <span class="mode-tile-icon">${icon("users")}</span>
          <h3>1台で対戦</h3>
          <p>1台のスマホやPCを回して、その場の友達と。入札は全員がそろうまで伏せられます。</p>
          <span class="mode-tile-foot"><span>1〜10チーム</span><span class="mode-tile-go">設定へ</span></span>
        </a>
        <a class="mode-tile" data-mode="online" href="#/setup/online">
          <span class="mode-tile-icon">${icon("globe")}</span>
          <h3>オンライン</h3>
          <p>ルームを作って招待リンクを送るだけ。離れた友達と、同じ発表をリアルタイムで見られます。</p>
          <span class="mode-tile-foot"><span>2〜10人・登録不要</span><span class="mode-tile-go">ルームへ</span></span>
        </a>
      </div>
    </section>

    <section class="section" id="rules" aria-labelledby="rulesTitle">
      <div class="section-head"><h2 id="rulesTitle">ドラフトの流れ</h2><p>プロ野球のドラフト会議と同じ進め方です。</p></div>
      <ol class="rules">
        <li class="rule"><h3>チームと人数を決める</h3><p>チーム数と、各チームが指名する人数（1〜8人）を決めます。最初の順番は抽選か設定順。</p></li>
        <li class="rule"><h3>1巡目は入札</h3><p>全チームが「第1回選択希望メンバー」を1人ずつ入札。そろったら順番に発表します。</p></li>
        <li class="rule"><h3>重なったら抽選</h3><p>同じメンバーに入札が重なったら封筒で抽選。外れたチームは、全員が決まるまで再入札。</p></li>
        <li class="rule"><h3>2巡目からは順番に</h3><p>ウェーバー（前の巡の逆順）か毎巡同じ順で、1人ずつ指名して全員そろったら終了。</p></li>
      </ol>
    </section>

    ${history.length ? `<section class="section" aria-labelledby="recentTitle">
      <div class="section-head"><h2 id="recentTitle">最近のドラフト</h2><a class="btn btn-ghost btn-sm" href="#/history">すべて見る</a></div>
      <div class="recent-list">${history.map(entry => `
        <a class="recent-item" href="#/history">
          <time>${esc(formatDate(entry.completedAt))}</time>
          <strong>${esc(MODE_LABEL[entry.mode] || "ドラフト")}・${(entry.teams || []).length}チーム</strong>
          <span>${esc((entry.teams || []).map(t => `${t.name}：${(t.picks || []).find(p => Number(p.round) === 1)?.name || "—"}`).join("　"))}</span>
        </a>`).join("")}</div>
    </section>` : ""}

    <footer class="site-foot">
      <span>KDraft は非公式のファン制作ゲームです。各グループ・事務所・情報元とは関係ありません。</span>
      <a href="#/about">出典・権利表記・プライバシー</a>
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
    <button type="button" data-step="-1" aria-label="減らす" ${disabled || value <= min ? "disabled" : ""}>−</button>
    <output aria-live="polite">${value}<small>${esc(unit)}</small></output>
    <button type="button" data-step="1" aria-label="増やす" ${disabled || value >= max ? "disabled" : ""}>＋</button>
  </div>`;
}

function rulesFields(settings, { disabled = false } = {}) {
  return `
    <div class="setup-row">
      <div class="field"><span class="field-label">各チームの指名人数</span>${stepper("pickLimit", settings.pickLimit, 1, 8, "人", { disabled })}</div>
    </div>
    <div class="field"><span class="field-label">1巡目のチーム順</span>
      ${segmented("startOrder", [["random", "開始時にランダム抽選"], ["fixed", "設定した順番のまま"]], settings.startOrder, { disabled, label: "1巡目のチーム順" })}</div>
    <div class="field"><span class="field-label">2巡目以降の指名順</span>
      ${segmented("orderMode", [["snake", "ウェーバー", "前の巡の逆順"], ["fixed", "毎巡同じ順番", "チーム順で固定"]], settings.orderMode, { disabled, label: "2巡目以降の指名順" })}</div>`;
}

const SETUP_COPY = {
  ai: {
    title: "AIとドラフト",
    lead: "あなたとAIでドラフトします。AIはチームごとに指名の好みが違います。",
    points: ["AIは同世代型・世代ミックス型・同事務所型・事務所ミックス型・同国籍型・国籍ミックス型・ランダム型の順に入ります", "AIも人気（星）を参考にしつつ、チーム構成を考えて指名します", "途中で閉じても、続きから再開できます"]
  },
  local: {
    title: "1台で対戦",
    lead: "1台の端末を回して遊びます。画面上部に今の手番のチームが出ます。",
    points: ["1巡目の入札は、全チームがそろうまで名前が伏せられます", "抽選の封筒は、当たったチームの順に選びます", "チーム名は空欄なら初期名になります"]
  },
  online: {
    title: "オンライン",
    lead: "ルームを作って招待リンクを送れば、離れた友達とドラフトできます。",
    points: ["2〜10人で遊べます。登録やログインは不要です", "1巡目は全員が同時に入札。ホストが開示すると全員の画面で発表が始まります", "表示名とドラフト結果はルームの参加者に共有されます。本名や連絡先は入れないでください"]
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
          <h2>チーム</h2>
          <div class="setup-row">
            <label class="field"><span class="field-label">あなたのチーム名</span>
              <input class="input" data-setup="playerName" maxlength="16" value="${esc(st.playerName)}" placeholder="あなた" autocomplete="off"></label>
            <div class="field"><span class="field-label">AIの数（あなた以外）</span>${stepper("aiCount", st.aiCount, 1, 10, "人")}</div>
          </div>
          <p class="field-hint">合計 ${st.aiCount + 1} チームでドラフトします。</p>
        </div>
        <div class="setup-section"><h2>ルール</h2>${rulesFields(st)}</div>
        <div class="setup-section"><h2>演出</h2>
          <div class="field"><span class="field-label">発表のテンポ</span>${segmented("speed", [["normal", "じっくり"], ["fast", "テンポよく"]], S.speed, { label: "発表のテンポ" })}</div>
        </div>
        <div class="setup-start"><button class="btn btn-primary btn-lg" data-action="start-local">${icon("play")}ドラフトを始める</button></div>
      </div>`;
  } else if (mode === "local") {
    const names = Array.from({ length: st.localCount }, (_, i) => st.teamNames[i] ?? LOCAL_TEAM_NAMES[i]);
    form = `
      <div class="panel setup-form">
        <div class="setup-section">
          <h2>チーム</h2>
          <div class="field"><span class="field-label">チーム数</span>${stepper("localCount", st.localCount, 1, 10, "チーム")}</div>
          <div class="field"><span class="field-label">チーム名</span>
            <div class="team-names">${names.map((name, i) => `
              <label class="team-name-input" style="--team-color:${teamColor(i)}"><i aria-hidden="true"></i>
                <span class="sr-only">チーム${i + 1}の名前</span>
                <input class="input" data-team-name="${i}" maxlength="16" value="${esc(name)}" placeholder="${esc(LOCAL_TEAM_NAMES[i])}" autocomplete="off"></label>`).join("")}
            </div>
          </div>
        </div>
        <div class="setup-section"><h2>ルール</h2>${rulesFields(st)}</div>
        <div class="setup-section"><h2>演出</h2>
          <div class="field"><span class="field-label">発表のテンポ</span>${segmented("speed", [["normal", "じっくり"], ["fast", "テンポよく"]], S.speed, { label: "発表のテンポ" })}</div>
        </div>
        <div class="setup-start"><button class="btn btn-primary btn-lg" data-action="start-local">${icon("play")}ドラフトを始める</button></div>
      </div>`;
  } else {
    const invite = new URLSearchParams(location.search).get("room") || "";
    const configured = onlineConfigured();
    const err = S.online?.error || "";
    form = `
      <div class="setup-form">
        <div class="panel setup-section">
          <label class="field"><span class="field-label">あなたの表示名（チーム名になります）</span>
            <input class="input" id="onlineName" maxlength="16" value="${esc(S.onlineName)}" placeholder="例：ゆき" autocomplete="nickname"></label>
          <p class="field-hint">ルームの参加者に表示されます。本名や連絡先は使わないでください。</p>
        </div>
        ${configured ? "" : `<p class="notice notice-warn">オンライン機能の設定が見つかりません。</p>`}
        <div class="online-choice">
          <div class="panel" ${invite ? 'style="order:2"' : ""}>
            <div><h2 class="panel-title">ルームを作る</h2><p class="panel-sub">あなたがホストになります。ルールはルームで決められます。</p></div>
            <button class="btn btn-primary" data-action="create-room" ${configured ? "" : "disabled"}>${icon("globe")}ルームを作る</button>
          </div>
          <div class="panel">
            <div><h2 class="panel-title">招待コードで参加</h2><p class="panel-sub">ホストから届いた8文字のコードを入れてください。</p></div>
            <input class="input code-input" id="roomCode" maxlength="9" value="${esc(invite)}" placeholder="ABCD2345" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="ルームコード">
            <button class="btn ${invite ? "btn-primary" : "btn-secondary"}" data-action="join-room" ${configured ? "" : "disabled"}>参加する</button>
          </div>
        </div>
        <p class="status-line ${err ? "is-error" : ""}" id="onlineStatus" role="status">${esc(err || S.online?.message || "")}</p>
      </div>`;
  }
  $("#view-setup").innerHTML = `
    <a class="back-link" href="#/">ホームへ戻る</a>
    <div class="setup">
      <aside class="setup-aside" data-mode="${mode}">
        <h1>${esc(copy.title)}</h1>
        <p>${esc(copy.lead)}</p>
        <ul>${copy.points.map(point => `<li>${esc(point)}</li>`).join("")}</ul>
      </aside>
      ${form}
    </div>`;
}

async function startLocalDraft() {
  const mode = S.route.param === "local" ? "local" : "ai";
  const existing = resumeInfo();
  if (existing && existing.draft.mode !== "online") {
    const ok = await confirmDialog({ title: "途中のドラフトを破棄しますか？", message: "新しいドラフトを始めると、保存されている途中のドラフトは消えます。", ok: "破棄して始める", danger: true });
    if (!ok) return;
  }
  const st = S.setup;
  const teams = mode === "ai"
    ? [{ name: (st.playerName || "").trim() || "あなた", kind: "human" }, ...Array.from({ length: st.aiCount }, (_, i) => ({ name: `AI${i + 1}`, kind: "ai" }))]
    : Array.from({ length: st.localCount }, (_, i) => ({ name: (st.teamNames[i] || "").trim() || LOCAL_TEAM_NAMES[i], kind: "human" }));
  savePrefs();
  beginDraft(E.createDraft({ mode, teams, settings: { pickLimit: st.pickLimit, orderMode: st.orderMode, startOrder: st.startOrder } }));
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
    toast(`抽選で順番が決まりました：${state.teams.map(t => t.name).join("→")}`, { duration: 4200 });
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
      toast(`${E.teamLabel(s, entry.teamId)} が ${idol?.japaneseName} を指名`, { color: teamColor(E.teamIndex(s, entry.teamId)), duration: 2200, slot: "pick" });
    } else if (entry.kind === "rebid") {
      toast(`外れたチームは再入札です（${entry.attempt}回目）`);
    } else if (entry.kind === "round" && entry.round === 2) {
      toast("1巡目が確定しました。2巡目からは順番に指名します");
    } else if (entry.kind === "departed") {
      toast(`${E.teamLabel(s, entry.teamId)} が退出しました。以降の指名はスキップします`);
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
    teams: s.teams.map(team => ({
      name: E.teamLabel(s, team.id),
      isMe: team.id === myTeamId(),
      picks: (s.picks[team.id] || []).map(pick => {
        const idol = E.idolById.get(pick.idolId);
        return { round: pick.round, name: idol?.japaneseName || "", group: idol?.group || "", agency: idol?.agency || "" };
      }),
      losses: (s.losses[team.id] || []).map(id => {
        const idol = E.idolById.get(id);
        return { round: 1, name: idol?.japaneseName || "", group: idol?.group || "", agency: idol?.agency || "" };
      })
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
      ${segmented("tab", [["pool", "候補を探す"], ["board", "指名ボード"]], S.tab, { label: "表示の切り替え" }).replace('class="segmented"', 'class="segmented draft-tabs"')}
      <div class="draft-layout" data-tab="${S.tab}">
        <section class="pool" aria-label="候補メンバー">
          <div class="pool-tools" id="poolTools"></div>
          <div class="card-grid" id="cardGrid"></div>
        </section>
        <aside class="board-panel" aria-label="指名ボード" id="boardPanel"></aside>
      </div>`;
    renderPoolTools();
    S.cardsKey = "";
  }
  view.querySelector(".draft-layout").dataset.tab = S.tab;
  $$('[data-seg="tab"] button', view).forEach(b => b.setAttribute("aria-checked", String(b.dataset.value === S.tab)));
  renderAppbar();
  renderTurn();
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
    title = "ドラフト終了！";
    sub = "全チームの指名がそろいました。";
    action = `<button class="btn btn-light" data-action="to-results">結果を見る</button>`;
  } else if (s.reveal || s.queue.length) {
    title = s.reveal?.type === "lottery" ? "抽選中" : "指名発表中";
    sub = "発表画面で確認してください。";
    state = "is-waiting";
  } else if (!s.r1.started) {
    const count = E.firstRoundBidCount(s);
    const live = s.r1.order.filter(id => !E.isDeparted(s, id)).length;
    const rebid = s.r1.attempt > 1 ? "再入札" : "入札";
    if (s.r1.awaitingOpen) {
      title = "全員の入札がそろいました";
      if (isHost()) { sub = "準備ができたら開示してください。全員の画面で発表が始まります。"; action = `<button class="btn btn-light" data-action="open-bids">入札を開示する</button>`; }
      else { sub = "ホストが開示すると発表が始まります。"; state = "is-waiting"; }
    } else if (s.mode === "online") {
      if (mine && E.bidPending(s, mine)) {
        title = S.online?.pending ? "入札を送信中" : `第1回選択希望メンバーを${rebid}してください`;
        sub = `提出済み ${count}/${live}チーム。入札は全員がそろうまで伏せられます。`;
        state = S.online?.pending ? "is-waiting" : "is-mine";
      } else {
        title = "ほかのチームの入札を待っています";
        sub = `提出済み ${count}/${live}チーム`;
        state = "is-waiting";
      }
    } else {
      const current = E.currentTeam(s);
      color = teamColor(E.teamIndex(s, current));
      if (acting) {
        title = s.mode === "ai" ? `あなたの${rebid}番です` : `${E.teamLabel(s, current)} の${rebid}番です`;
        sub = s.mode === "local" ? "ほかの人に見えないように候補を選んで入札してください。" : "候補を選んで入札してください。全員そろったら発表です。";
        state = "is-mine";
      } else {
        title = `${E.teamLabel(s, current)} が${rebid}中`;
        sub = `提出済み ${count}/${live}チーム`;
        state = "is-waiting";
      }
    }
  } else {
    const current = E.currentTeam(s);
    color = teamColor(E.teamIndex(s, current));
    const label = E.teamLabel(s, current);
    if (acting) {
      title = s.mode === "local" ? `${label} の指名番です` : "あなたの指名番です";
      sub = S.online?.pending ? "指名を送信中…" : `第${s.round}巡選択メンバーを選んでください。`;
      state = S.online?.pending ? "is-waiting" : "is-mine";
    } else {
      title = isAutoTeam(s, current) ? `${label} が指名中` : `${label} の指名番です`;
      sub = mine ? `あなたは次の巡も同じ順番で待ちます。` : "";
      sub = mine && s.mode !== "local" ? "指名を待っています。" : sub;
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
  const roundLabel = s.r1.started ? `${s.round}巡` : "1巡";
  const roundSub = s.r1.started ? `全${s.settings.pickLimit}巡` : (s.r1.attempt > 1 ? `再入札 ${s.r1.attempt}回目` : "入札");
  box.innerHTML = `
    <div class="turn-banner ${b.state}" style="${b.color ? `--turn-color:${b.color}` : ""}" role="status" aria-live="polite">
      <div class="turn-round">${roundLabel}<small>${esc(roundSub)}</small></div>
      <div class="turn-main"><strong>${esc(b.title)}</strong>${b.sub ? `<span>${esc(b.sub)}</span>` : ""}</div>
      <div class="turn-side">
        ${b.action}
        <div class="turn-progress"><b>${b.done}<small>/${b.total}人</small></b><div class="progress-bar"><i style="width:${b.total ? Math.round((b.done / b.total) * 100) : 0}%"></i></div></div>
      </div>
      <div class="turn-line" aria-hidden="true"><i style="width:${b.total ? Math.round((b.done / b.total) * 100) : 0}%"></i></div>
    </div>`;
}

// ---------------------------------------------------------------- 候補
function compareCandidates(a, b) {
  const recommended = () =>
    (b.popularityStars || 0) - (a.popularityStars || 0) ||
    (Number(b.popularitySortScore) || 0) - (Number(a.popularitySortScore) || 0) ||
    a.japaneseName.localeCompare(b.japaneseName, "ja");
  if (S.pool.sort === "score") return (Number(b.popularityScore) || 0) - (Number(a.popularityScore) || 0) || recommended();
  if (S.pool.sort === "generation") return (parseInt(a.generation, 10) || 0) - (parseInt(b.generation, 10) || 0) || recommended();
  if (S.pool.sort === "name") return a.japaneseName.localeCompare(b.japaneseName, "ja") || recommended();
  return recommended();
}

function candidates(ignore = "", dedupe = true) {
  const p = S.pool;
  const query = normalizeSearchText(p.query.trim());
  const drafted = draftedKeys();
  const list = idols.filter(idol =>
    (!query || candidateSearchTextById.get(idol.id).some(value => value.includes(query))) &&
    (ignore === "generation" || !p.generation || idol.generation === p.generation) &&
    (ignore === "nationality" || !p.nationality || idol.nationality === p.nationality) &&
    (ignore === "agency" || !p.agency || agencyFilterName(idol.agency) === p.agency) &&
    (ignore === "group" || !p.group || idol.group === p.group) &&
    (!p.hideDrafted || !drafted.has(idol.personKey)) &&
    (p.showExcluded || !S.excluded.has(idol.id)) &&
    (!p.onlyShortlist || S.shortlist.has(idol.id))
  );
  return dedupe ? preferredPersonCandidates(list, query).sort(compareCandidates) : list;
}

const FILTERS = [
  ["generation", "世代", idol => idol.generation],
  ["nationality", "国籍", idol => idol.nationality],
  ["agency", "事務所", idol => agencyFilterName(idol.agency)],
  ["group", "グループ", idol => idol.group]
];

function renderPoolTools() {
  const box = $("#poolTools");
  if (!box) return;
  const p = S.pool;
  const presetNames = Object.keys(S.presets);
  box.innerHTML = `
    <label class="search">${icon("search")}<span class="sr-only">名前やグループで検索</span>
      <input class="input" type="search" id="poolSearch" value="${esc(p.query)}" placeholder="名前・グループ・事務所で検索（例：モモ／Momo／모모）" autocomplete="off" enterkeyhint="search">
      <button class="search-clear" type="button" data-action="clear-search" aria-label="検索をクリア" ${p.query ? "" : "hidden"}>×</button>
    </label>
    <div class="filter-bar" role="group" aria-label="絞り込み">
      ${FILTERS.map(([key, label]) => `<label class="filter-chip"><span class="sr-only">${label}</span><select data-filter="${key}" class="${p[key] ? "is-set" : ""}"></select></label>`).join("")}
      <button type="button" class="toggle-chip" data-action="toggle-shortlist-only" aria-pressed="${p.onlyShortlist}">${icon("heart")}気になる ${S.shortlist.size ? `(${S.shortlist.size})` : ""}</button>
      <button type="button" class="toggle-chip" data-action="toggle-hide-drafted" aria-pressed="${p.hideDrafted}">指名済みを隠す</button>
      <button type="button" class="toggle-chip" data-action="toggle-show-excluded" aria-pressed="${p.showExcluded}">除外も表示</button>
      ${presetNames.length ? `<label class="filter-chip"><span class="sr-only">保存した条件</span><select data-action-select="preset"><option value="">保存した条件</option>${presetNames.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join("")}</select></label>` : ""}
    </div>
    <div class="pool-meta">
      <span class="pool-count" id="poolCount"></span>
      <span class="pool-links">
        <button class="btn btn-ghost btn-sm" data-action="random-pick">${icon("dice")}ランダム</button>
        <button class="btn btn-ghost btn-sm" data-action="save-preset">条件を保存</button>
        <button class="btn btn-ghost btn-sm" data-action="reset-filters">リセット</button>
        <label><span class="sr-only">並び順</span><select class="sort-select" data-action-select="sort">
          ${[["recommended", "おすすめ順"], ["score", "人気スコア順"], ["generation", "世代順"], ["name", "名前順"]].map(([v, t]) => `<option value="${v}" ${p.sort === v ? "selected" : ""}>${t}</option>`).join("")}
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
    select.innerHTML = `<option value="">${label}：すべて</option>` + values.map(v => `<option value="${esc(v)}" ${v === S.pool[key] ? "selected" : ""}>${esc(v)}</option>`).join("");
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
    ${isDrafted ? `<span class="card-state chip chip-dark">指名済み</span>` : ""}
    <button class="card-main" type="button" data-action="select" data-id="${idol.id}" aria-pressed="${selected}" ${isDrafted ? "disabled" : ""}
      aria-label="${esc(`${idol.japaneseName}（${idol.group}）`)}">
      <span class="card-group">${esc(idol.group)}</span>
      <span class="card-name">${esc(idol.japaneseName)}</span>
      <span class="card-meta"><span class="chip">${esc(idol.generation)}</span><span class="chip">${esc(idol.nationality)}</span></span>
      <span class="card-foot">${stars(idol.popularityStars)}<span>${idol.popularityScore > 0 ? `${Math.round(idol.popularityScore)}点` : "順位外"}</span></span>
    </button>
    <div class="card-tools">
      <span class="card-agency">${esc(agencyShort(idol))}</span>
      <span class="card-tools-buttons">
        <button class="icon-btn is-heart" type="button" data-action="like" data-id="${idol.id}" aria-pressed="${liked}" aria-label="${liked ? "気になるから外す" : "気になるに追加"}" title="気になる">${icon("heart")}</button>
        <button class="icon-btn" type="button" data-action="exclude" data-id="${idol.id}" aria-pressed="${excluded}" aria-label="${excluded ? "除外をやめる" : "候補から除外"}" title="${excluded ? "除外をやめる" : "除外"}">${icon("ban")}</button>
      </span>
    </div>
  </article>`;
}

let cardObserver = null;
function renderCards() {
  const grid = $("#cardGrid");
  if (!grid) return;
  const list = candidates();
  const drafted = draftedKeys();
  const shown = list.slice(0, S.pool.limit);
  grid.innerHTML = shown.length
    ? shown.map(idol => cardHTML(idol, drafted)).join("") +
      (list.length > shown.length ? `<button class="btn btn-secondary load-more" data-action="load-more" id="loadMore">さらに表示（あと${list.length - shown.length}人）</button>` : "")
    : `<div class="empty" style="grid-column:1/-1"><strong>条件に合う候補がいません</strong>検索や絞り込みを変えてみてください。<br><button class="btn btn-secondary btn-sm" style="margin-top:12px" data-action="reset-filters">条件をリセット</button></div>`;
  const count = $("#poolCount");
  if (count) count.innerHTML = `<b>${list.length}</b>人の候補`;
  cardObserver?.disconnect();
  const more = $("#loadMore");
  if (more && "IntersectionObserver" in window) {
    cardObserver = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { S.pool.limit += PAGE(); renderCards(); }
    }, { rootMargin: "600px" });
    cardObserver.observe(more);
  }
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
  const verb = isBid ? "で入札する" : "を指名する";
  const who = s.mode === "local" && acting ? `${E.teamLabel(s, acting)}の${isBid ? "入札" : "指名"}` : (isBid ? "第1回選択希望" : `第${s.round}巡選択`);
  let note = "";
  if (!can) {
    if (S.online?.pending) note = "送信中です…";
    else if (s.r1.awaitingOpen) note = "入札の開示を待っています";
    else if (myTeamId() && isOnline() && !s.r1.started && !E.bidPending(s, myTeamId())) note = "入札は提出済みです";
    else note = "あなたの番になったら指名できます";
  }
  mount.innerHTML = `
    <div class="dock" role="region" aria-label="選んだメンバー">
      <div class="dock-copy">
        <small>${esc(can ? who : "選択中のメンバー")}</small>
        <strong>${esc(idol.japaneseName)}</strong>
        <span>${esc([idol.group, agencyFull(idol), idol.generation, idol.nationality].filter(Boolean).join("・"))}</span>
      </div>
      <div class="dock-actions">
        <button class="btn btn-ghost" data-action="deselect">やめる</button>
        ${can
          ? `<button class="btn btn-hot btn-lg" data-action="confirm-pick">${esc(idol.japaneseName)}${verb}</button>`
          : `<span class="dock-note">${esc(note)}</span><button class="icon-btn is-heart" data-action="like" data-id="${idol.id}" aria-pressed="${S.shortlist.has(idol.id)}" aria-label="気になる" style="color:#fff">${icon("heart")}</button>`}
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
  if (s.mode === "local" && !s.r1.started && !s.reveal) toast("入札しました。次のチームに端末を渡してください");
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
        const losses = round === 1 ? (s.losses[team.id] || []).map(id => E.idolById.get(id)).filter(Boolean)
          .map(l => ({ name: l.japaneseName, agency: agencyShort(l), group: l.group })) : [];
        if (pick) {
          const idol = E.idolById.get(pick.idolId);
          cells.push({ kind: "filled", name: idol?.japaneseName, agency: agencyShort(idol), group: idol?.group, losses, isNew: s.log.at(-1)?.idolId === pick.idolId && s.log.at(-1)?.teamId === team.id });
          continue;
        }
        if (team.departed) { cells.push({ kind: "empty", text: round === 1 || cells.some(c => c.kind === "filled") ? "退出" : "—", losses }); continue; }
        if (round === 1 && !s.r1.started) {
          if (resolution) {
            const nominated = resolution.nominations.some(n => n.teamId === team.id);
            const revealed = resolution.revealed.includes(team.id);
            cells.push({ kind: "sealed", text: nominated ? (revealed ? "抽選へ" : "発表待ち") : "再入札へ", losses });
          } else if (team.id in s.r1.bids) {
            const ownBid = s.mode === "online" && team.id === me ? E.idolById.get(s.r1.bids[team.id])?.japaneseName : "";
            cells.push({ kind: "sealed", text: ownBid ? `${ownBid}（入札）` : "入札済み", losses });
          } else if (s.r1.order.includes(team.id)) {
            const now = s.mode === "online" ? true : current === team.id;
            cells.push({ kind: now ? "now" : "empty", text: now ? "入札中" : "—", losses });
          } else {
            cells.push({ kind: "empty", text: "—", losses });
          }
          continue;
        }
        if (s.r1.started && round === s.round && current === team.id && !s.reveal) { cells.push({ kind: "now", text: "指名中", losses }); continue; }
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
        const losses = i === 0 ? (team.losses || []).map(l => ({ name: l.name, agency: agencyShort(l), group: l.group })) : [];
        return pick
          ? { kind: "filled", name: pick.name, agency: agencyShort(pick), group: pick.group, losses }
          : { kind: "empty", text: "—", losses };
      })
    }))
  };
}

function boardTableHTML(model) {
  return `<table class="board-table" style="--teams:${model.teams.length}">
    <thead><tr><th class="round-col" scope="col">巡</th>${model.teams.map(t => `
      <th scope="col" class="board-team ${t.isCurrent ? "is-current" : ""} ${t.isMe && t.label !== "あなた" ? "is-me" : ""}" style="--team-color:${t.color}">
        <strong>${esc(t.label)}</strong>${t.sublabel ? `<em>${esc(t.sublabel)}</em>` : ""}<small>${t.departed ? "退出" : `${t.count}/${model.pickLimit}人`}</small></th>`).join("")}</tr></thead>
    <tbody>${Array.from({ length: model.pickLimit }, (_, r) => `<tr><th class="round-col" scope="row">${r + 1}</th>${model.teams.map(t => {
      const c = t.cells[r];
      const losses = c.losses?.length ? c.losses.map(l => `<span class="pick-loss" title="抽選外れ"><b>${esc(l.name)}</b>${l.agency ? `<small>${esc(l.agency)}</small>` : ""}<small>${esc(l.group || "")}</small></span>`).join("") : "";
      if (c.kind === "filled") return `<td>${losses}<div class="pick-slot is-filled ${c.isNew ? "is-new" : ""}"><strong>${esc(c.name)}</strong>${c.agency ? `<small>${esc(c.agency)}</small>` : ""}<small>${esc(c.group || "")}</small></div></td>`;
      return `<td>${losses}<div class="pick-slot is-${c.kind}">${esc(c.text || "—")}</div></td>`;
    }).join("")}</tr>`).join("")}</tbody></table>`;
}

function teamStackHTML(model) {
  return `<div class="team-stack">${model.teams.map(t => `
    <section class="team-card" style="--team-color:${t.color}">
      <header class="team-card-head"><strong>${esc(t.label)}${t.sublabel ? `<small style="margin-left:6px">${esc(t.sublabel)}</small>` : ""}${t.isMe && t.label !== "あなた" ? ' <span class="chip chip-hot">あなた</span>' : ""}</strong><small>${t.departed ? "退出" : `${t.count}/${model.pickLimit}人`}</small></header>
      <ol>${t.cells.map((c, i) => `<li class="${c.kind === "filled" ? "" : "is-empty"}"><b>${i + 1}巡</b><span>${(c.losses || []).map(l => `<span class="lost"><em>抽選外れ</em><b>${esc(l.name)}</b><small>${esc(l.agency || "")}</small><small>${esc(l.group || "")}</small></span>`).join("")}${c.kind === "filled"
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
    <div class="board-head"><h2>指名ボード</h2>${segmented("boardMode", [["table", "表"], ["teams", "チーム別"]], S.boardMode, { label: "ボードの表示" })}</div>
    <div class="board-box">${S.boardMode === "table" ? boardTableHTML(model) : `<div style="padding:10px">${teamStackHTML(model)}</div>`}</div>
    ${recent.length ? `<div class="ticker" aria-label="最近の指名">${recent.map(e => {
      const idol = E.idolById.get(e.idolId);
      return `<div class="ticker-item" style="--team-color:${teamColor(E.teamIndex(s, e.teamId))}"><i></i><span>${e.round ? `${e.round}巡` : "1巡"}　<strong>${esc(E.teamLabel(s, e.teamId))}</strong>　${esc(idol?.japaneseName || "")}${e.kind === "lottery" ? "（抽選で交渉権確定）" : ""}</span></div>`;
    }).join("")}</div>` : ""}`;
}

// ======================================================================
// 指名発表・抽選（全画面）
// ======================================================================
let revealKey = "";
function revealTitle(r) {
  if (r.type === "lottery") return "第1回選択希望 重複指名の抽選";
  if (r.type === "nomination") return "第1回選択希望メンバー";
  return `第${r.round}巡選択メンバー`;
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
          <p class="stage-kicker">抽選</p>
          <h2 class="stage-title">${esc(revealTitle(r))}</h2>
          <div class="lottery-member">
            <small>入札が重なったメンバー</small>
            <strong>${esc(idol?.japaneseName)}</strong>
            <span>${esc([idol?.group, agencyShort(idol)].filter(Boolean).join("・"))}</span>
          </div>
          <div class="lottery-teams">${r.drawOrder.map(id => `<span style="--team-color:${teamColor(E.teamIndex(s, id))}">${esc(E.teamLabel(s, id))}</span>`).join("")}</div>
          <div class="envelopes" role="group" aria-label="抽選の封筒">${Array.from({ length: r.envelopes }, (_, i) => `
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
          <p class="stage-kicker">指名発表</p>
          <h2 class="stage-title">${esc(revealTitle(r))}</h2>
          <div class="stage-team"><small>指名チーム</small><strong>${esc(E.teamLabel(s, r.teamId))}</strong></div>
          <div class="nameplate"><div class="nameplate-inner">
            <div class="nameplate-face nameplate-back"><img src="assets/kdraft-192-v3.png" alt="" width="84" height="84"><span>KDRAFT</span></div>
            <div class="nameplate-face nameplate-front">
              <small>${r.type === "nomination" ? "第1回選択希望" : `第${r.round}巡選択`}</small>
              <p class="nameplate-name">${esc(idol?.japaneseName)}</p>
              <p class="nameplate-meta"><span>${esc(agencyFull(idol))}</span><span>${esc(idol?.group)}</span></p>
            </div>
          </div></div>
          <div class="stage-foot"><p class="stage-hint" id="stageHint"></p><div class="stage-actions" id="stageActions"></div></div>
        </div>
        ${!isOnline() ? `<div class="stage-skip"><button class="btn btn-sm" data-action="reveal-skip-all">発表をまとめて見る</button></div>` : ""}`;
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
      hint.textContent = "まもなく発表します…";
      actions.innerHTML = director ? `<button class="btn btn-ghost" data-action="reveal-next">すぐに見る</button>` : "";
    } else {
      hint.textContent = remaining ? `このあと ${remaining}件の発表があります` : "";
      actions.innerHTML = director
        ? `<button class="btn btn-light btn-lg" data-action="reveal-next">${remaining ? "次の発表へ" : "ボードに戻る"}</button>`
        : `<span class="stage-hint">ホストの画面に合わせて自動で進みます</span>`;
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
        inner.innerHTML = won ? `<span class="stamp">交渉権<br>確定</span>` : `<span class="miss">外れ</span>`;
      }
      button.setAttribute("aria-label", `封筒${env + 1}：${owner ? E.teamLabel(s, owner) : ""} ${won ? "交渉権確定" : "外れ"}`);
    } else if (owner) {
      button.setAttribute("aria-label", `封筒${env + 1}：${E.teamLabel(s, owner)}が選択`);
    }
  });
  const resultBox = $(".lottery-result", stage);
  if (r.stage === "result" && r.winner) {
    if (resultBox.hidden) {
      resultBox.hidden = false;
      resultBox.style.setProperty("--team-color", teamColor(E.teamIndex(s, r.winner)));
      resultBox.innerHTML = `<small>交渉権確定</small><strong>${esc(E.teamLabel(s, r.winner))}</strong>`;
    }
  }
  if (r.stage === "intro") {
    hint.textContent = "封筒を順番に選び、全員がそろったら一斉に開封します";
    actions.innerHTML = "";
  } else if (r.stage === "choosing") {
    const drawerLabel = E.teamLabel(s, drawer);
    const mine = s.mode === "online" ? drawer === me : !isAutoTeam(s, drawer);
    hint.textContent = mine
      ? (s.mode === "local" ? `${drawerLabel} の番：封筒を1つ選んでください` : "あなたの番です。封筒を1つ選んでください")
      : `${drawerLabel} が封筒を選んでいます…`;
    actions.innerHTML = "";
  } else if (r.stage === "ready") {
    hint.textContent = "全員の封筒がそろいました";
    actions.innerHTML = isOnline()
      ? (isHost() ? `<button class="btn btn-light btn-lg" data-action="open-lottery">${icon("envelope")}一斉に開封する</button>` : `<span class="stage-hint">ホストが開封するのを待っています</span>`)
      : "";
  } else if (r.stage === "opening") {
    hint.textContent = "せーの…！";
    actions.innerHTML = "";
  } else if (r.stage === "result") {
    hint.textContent = remaining ? `このあと ${remaining}件の発表があります` : "外れたチームは再入札します";
    actions.innerHTML = director
      ? `<button class="btn btn-light btn-lg" data-action="reveal-next">${remaining ? "次の発表へ" : "続ける"}</button>`
      : `<span class="stage-hint">まもなく自動で進みます</span>`;
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
  return [`平均 ★${avg.toFixed(1)}`, `${gens}世代`, `${agencies}事務所`, `${groups}グループ`, `${nations}か国・地域`];
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
        <small>ドラフト会議 終了</small>
        <h1>${finished ? "最終ドラフト結果" : "ここまでのドラフト結果"}</h1>
        <p>${esc(MODE_LABEL[s.mode])}・${s.teams.length}チーム・各${s.settings.pickLimit}人・${esc(formatDate(Date.now()))}</p>
      </div>
      <div class="results-actions">
        <button class="btn btn-light" data-action="share-image">${icon("image")}画像で共有</button>
        <button class="btn btn-ghost" data-action="copy-result">${icon("copy")}テキストをコピー</button>
        ${canRestart ? `<button class="btn btn-ghost" data-action="restart">${icon("refresh")}再ドラフト</button>` : ""}
        <a class="btn btn-ghost" href="#/" data-action="${isOnline() ? "" : "finish-home"}">${icon("home")}ホームへ</a>
      </div>
    </section>
    ${S.shareStatus ? `<p class="share-status" role="status">${esc(S.shareStatus)}</p>` : ""}
    ${segmented("resultsMode", [["teams", "チーム別"], ["table", "指名一覧表"]], S.resultsMode, { label: "結果の表示" }).replace('class="segmented"', 'class="segmented results-tabs"')}
    ${S.resultsMode === "table"
      ? `<div class="board-box">${boardTableHTML(boardModelFromState(s))}</div>`
      : `<div class="results-grid">${s.teams.map((team, index) => `
        <article class="result-team" style="--team-color:${teamColor(index)}">
          <header class="result-team-head ${team.id === me && team.name !== "あなた" ? "is-me" : ""}"><small>${index + 1}番目のチーム${team.departed ? "・退出" : ""}</small><h3>${esc(E.teamLabel(s, team.id))}</h3></header>
          <ol>${Array.from({ length: s.settings.pickLimit }, (_, i) => {
            const pick = (s.picks[team.id] || []).find(p => p.round === i + 1);
            const idol = pick && E.idolById.get(pick.idolId);
            const losses = i === 0 ? (s.losses[team.id] || []).map(id => E.idolById.get(id)).filter(Boolean) : [];
            const lossHtml = losses.map(l => `<span class="lost"><em>抽選外れ</em><b>${esc(l.japaneseName)}</b><small>${esc(agencyShort(l))}</small><small>${esc(l.group)}</small></span>`).join("");
            return `<li><b>${i + 1}巡</b><span>${lossHtml}${idol
              ? `<strong>${esc(idol.japaneseName)}</strong><small>${esc(agencyShort(idol))}</small><small>${esc(idol.group)}</small>`
              : `<strong style="color:var(--faint)">—</strong>`}</span></li>`;
          }).join("")}</ol>
          <div class="result-team-stats">${teamStats(s, team.id).map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </article>`).join("")}</div>`}
    ${isOnline() && S.online?.room ? `<div class="notice results-room" style="margin-top:16px">
        <span>${isHost() ? "「再ドラフト」で、同じルームのまま次のドラフトを始められます。遊び終わったらルームを終了してください（参加者名や結果が削除されます）。" : "ホストが再ドラフトを始めると、自動でドラフト画面に移ります。"}</span>
        <button class="btn btn-sm ${isHost() ? "btn-danger" : "btn-secondary"}" data-action="${isHost() ? "close-room" : "leave-room"}">${isHost() ? "ルームを終了する" : "ルームから退出する"}</button>
      </div>` : ""}`;
}

// ======================================================================
// 履歴・サイト情報
// ======================================================================
function renderHistory() {
  const list = store.history();
  $("#view-history").innerHTML = `
    <div class="page-head"><div><h1>過去のドラフト</h1><p>この端末に保存された最近${HISTORY_LIMIT}件の結果です。</p></div>
      ${list.length ? `<button class="btn btn-ghost btn-sm" data-action="clear-history">履歴をすべて消す</button>` : ""}</div>
    ${list.length ? `<div class="history-list">${list.map((entry, index) => `
      <details class="history-entry" ${index === 0 ? "open" : ""}>
        <summary><div><strong>${esc(formatDate(entry.completedAt))}</strong>
          <span>${esc(MODE_LABEL[entry.mode] || "ドラフト")}・${(entry.teams || []).length}チーム・各${entry.pickLimit || "?"}人</span></div></summary>
        <div class="history-body">
          <div class="board-box">${boardTableHTML(boardModelFromHistory(entry))}</div>
          <div><button class="btn btn-ghost btn-sm" data-action="delete-history" data-id="${esc(entry.id)}">この記録を消す</button></div>
        </div>
      </details>`).join("")}</div>`
      : `<div class="panel empty"><strong>まだ記録がありません</strong>ドラフトを最後まで終えると、ここに結果が残ります。<br><a class="btn btn-primary" style="margin-top:16px" href="#/setup/ai">AIとドラフトする</a></div>`}`;
}

function renderAbout() {
  const links = [
    ["個人ブランド評判 2026年9月", "https://www.soompi.com/article/1871886wpp/september-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年8月", "https://www.soompi.com/article/1863187wpp/august-girl-group-member-brand-reputation-rankings-announced"],
    ["2026年7月", "https://www.soompi.com/article/1855573wpp/july-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年6月", "https://www.soompi.com/article/1849160wpp/june-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年5月", "https://www.soompi.com/article/1841653wpp/may-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年4月", "https://www.soompi.com/article/1834176wpp/april-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年3月", "https://www.soompi.com/article/1825006wpp/march-girl-group-member-brand-reputation-rankings-announced-8"],
    ["2026年2月", "https://www.soompi.com/article/1819502wpp/february-girl-group-member-brand-reputation-rankings-announced-7"],
    ["2026年1月", "https://kpopnewswire.com/wonyoung-jennie-winter-lead-january-2026-girl-group-member-brand-reputation-rankings/"],
    ["2025年12月", "https://kpopnewswire.com/december-2025-girl-group-member-brand-reputation-rankings-wonyoung-jennie-rose-lead/"],
    ["2025年11月", "https://kpopnewswire.com/wonyoung-jennie-rose-lead-november-2025-girl-group-member-brand-reputation-rankings/"],
    ["2025年10月", "https://kpopnewswire.com/ive-and-blackpink-take-all-top-five-spots-in-october-2025-girl-group-member-brand-reputation-rankings/"],
    ["Gallup 2015", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=713"],
    ["Gallup 2016", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=800"],
    ["Gallup 2017", "https://panel.gallup.co.kr/Contents/GallupReport/GallupReport%2820171219%29_%EA%B0%80%EC%88%98%EC%99%80%EA%B0%80%EC%9A%94.pdf"],
    ["Gallup 2018", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=974"],
    ["Gallup 2019", "https://www.gallup.co.kr/gallupdb/reportContent.asp?seqNo=1072"],
    ["Gallup 2025全国調査", "https://www.gallup.co.kr/dir/GallupReport/GallupReport%2820251222%29_%EC%98%AC%ED%95%B4%EC%9D%98%EA%B0%80%EC%88%98%EC%99%80%EA%B0%80%EC%9A%94.pdf"],
    ["CHOEAEDOL 6月 ICON", "https://magazine.myloveidol.com/en/posts/ranking-2026-06-icon-female-individual"],
    ["CHOEAEDOL 6月 LEGEND", "https://magazine.myloveidol.com/en/posts/ranking-2026-06-legend-female-individual"],
    ["CHOEAEDOL 7月", "https://magazine.myloveidol.com/en/posts/ranking-2026-07-monthly-female"],
    ["CHOEAEDOL 8月", "https://magazine.myloveidol.com/en/posts/ranking-2026-08-monthly-female"],
    ["CHOEAEDOL 9月", "https://magazine.myloveidol.com/en/posts/ranking-2026-09-monthly-female"],
    ["IDOL CHART 年間総合", "https://www.idol-chart.com/ranking/?d_type=Y"],
    ["IDOL CHART 年間個人投票", "https://www.idol-chart.com/score/?d_type=Y"],
    ["NAVER DataLab", "https://datalab.naver.com/keyword/trendSearch.naver"],
    ["@5thGenKpop", "https://x.com/5thGenKpop"],
    ["@AboutMusicYT", "https://x.com/AboutMusicYT"],
    ["@karinachartss", "https://x.com/karinachartss"],
    ["Star News 女性アイドル第259回", "https://www.starnewskorea.com/star-ranking/female-idol/259"],
    ["Fannstar 女性スター順位", "https://fannstar.tf.co.kr/rank/view/topic?mode=women"]
  ];
  $("#view-about").innerHTML = `
    <div class="page-head"><div><h1>サイト情報</h1><p>KDraft について、星の評価方法、プライバシー。</p></div></div>
    <div class="about">
      <section class="panel"><h2>このサイトについて</h2>
        <p>KDraft は個人制作の非公式ファン向けゲームです。芸能事務所、グループ、メンバー、ランキング運営元から公式な監修・推薦を受けていません。</p>
        <p>メンバー名、グループ名、事務所名などは候補を識別する目的で表示しています。これらに関する権利が認められる場合、その権利は各権利者に帰属します。公式写真、音源、ロゴ、ランキング記事の本文や表のデザインは掲載していません。</p>
        <p>誤記や権利に関する連絡は <a href="https://github.com/L1nus2910/kpop-draft/issues" target="_blank" rel="noopener noreferrer">GitHubの問い合わせページ</a> からお願いします。公開の投稿欄には個人情報を書かないでください。</p>
      </section>
      <section class="panel"><h2>ホーム画面に追加</h2>
        <div class="install-card"><img src="assets/kdraft-192-v3.png" alt="" width="56" height="56">
          <div><p id="installText">ホーム画面にアイコンを置くと、すぐに開けます。一度開いたあとは、通信が切れてもAIドラフトと1台での対戦を遊べます。</p>
          <button class="btn btn-primary btn-sm" data-action="install" id="installButton" style="margin-top:10px" hidden>ホーム画面に追加</button></div>
        </div>
      </section>
      <section class="panel about-wide"><h2>星（人気参考）の評価方法</h2>
        <p>星1は個人順位データなし。順位データがある人は同じ世代の中で上位から約25%ずつ星5・星4・星3・星2に分けます（同点は同じ星）。人気参考スコアは、個人ブランド評判の直近1年（2025年10月〜2026年9月）を55%（直近6か月を70%、前半6か月を30%）、音源・アルバム・YouTube・放送・SNSなどを集計するIDOL CHART年間総合順位（2024・2025年）を20%、韓国ギャラップ全国調査で個人名が挙がった順位を10%、個人名入りの2015〜2019年調査を5%として計算します。過去のギャラップ調査がない第4・第5世代にはその分を適用せず、残りの情報で再計算します。グループ名だけの回答は個々のメンバーに配りません。ファン投票型のCHOEAEDOL（4%）、Star News（4%）、Fannstar（2%）は計10%に抑えています。</p>
        <p>ネイバーの検索トレンドや各チャート情報アカウントは、星の点数には混ぜず、急上昇や見落としの確認に使っています。星は公式の順位・評価ではなく、ゲーム用の目安です。AIは星を指名材料の一つにします。</p>
        <div class="source-links">${links.map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join("")}</div>
      </section>
      <section class="panel about-wide"><h2>プライバシー・オンラインドラフト</h2>
        <p>メールアドレスやパスワードによるアカウント登録はありません。除外したメンバー、気になるリスト、保存した条件、途中のドラフト、過去の結果（最大${HISTORY_LIMIT}件）は、利用中のブラウザー内にだけ保存されます。</p>
        <p>オンラインドラフトでは、Firebaseの匿名認証とRealtime Databaseを使用します。匿名の識別子のほか、入力した表示名、ルームコード、参加者、ドラフト設定、指名・抽選を含むゲーム進行情報を同期します。同じルームの参加者には表示名とドラフト結果が表示されます。表示名には本名、住所、学校名、連絡先などを使わず、招待リンクやコードは参加してほしい相手だけに共有してください。</p>
        <p>Realtime Databaseはシンガポール（asia-southeast1）に設定されています。Googleの案内ではFirebase Authenticationは米国内のデータセンターで運用され、サービス提供のためIPアドレスやブラウザー情報等が処理される場合があります。詳しくは <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebaseのプライバシー案内</a> をご確認ください。ルーム情報は、ホストが「ルームを終了」を実行するまで残ります。サイトの配信元である <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHubのプライバシー説明</a> もご確認ください。</p>
      </section>
    </div>
    <footer class="site-foot"><span>データ収録：${idols.length}人・${new Set(idols.map(i => i.group)).size}グループ・人気参考データ ${popularityRankingSources.length}種</span><a href="#/">ホームへ</a></footer>`;
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

async function createRoom() {
  S.onlineName = normalizeName($("#onlineName")?.value || S.onlineName, "ホスト");
  savePrefs();
  try {
    onlineMessage("ルームを作っています…");
    const settings = { pickLimit: S.setup.pickLimit, orderMode: S.setup.orderMode, startOrder: S.setup.startOrder };
    const room = await Room.create({ name: S.onlineName, settings });
    attachRoom(room);
    go("room");
  } catch (error) {
    onlineMessage(error.message || "ルームを作れませんでした。", true);
  }
}

async function joinRoom(codeValue) {
  const code = normalizeCode(codeValue ?? $("#roomCode")?.value);
  S.onlineName = normalizeName($("#onlineName")?.value || S.onlineName);
  savePrefs();
  try {
    onlineMessage("ルームに接続しています…");
    const { room, rejoined } = await Room.join({ code, name: S.onlineName });
    attachRoom(room);
    if (rejoined) {
      const snap = await room.readState().catch(() => null);
      const status = (await room.ref.child("status").once("value")).val();
      if (status === "playing" && snap?.state) {
        applyRemoteState(snap, { force: true });
        if (room.isHost) { S.online.hostRev = snap.rev; S.online.acks = snap.acks || {}; commit({ silent: true }); }
        go(E.isFinished(S.draft) ? "results" : "draft");
        toast("進行中のドラフトに再接続しました");
        return;
      }
    } else {
      S.online.joinState = "requesting";
    }
    go("room");
  } catch (error) {
    onlineMessage(error.message || "参加できませんでした。", true);
    if (S.route.name !== "setup") go("setup/online");
  }
}

function attachRoom(room) {
  S.online = { room, rev: -1, hostRev: 0, acks: {}, pending: null, players: {}, status: "lobby", settings: null, joinState: room.isHost ? "joined" : "joined", message: "", error: "", actionQueue: Promise.resolve(), handled: new Set() };
  store.saveRoom({ code: room.code });
  const url = new URL(location.href);
  url.searchParams.set("room", room.code);
  history.replaceState(null, "", url);
  room.watchBasics({
    onPlayers: players => { S.online.players = players; if (S.route.name === "room") renderRoom(); if (S.route.name === "draft") renderBoardPanel(); },
    onStatus: (status, exists) => {
      S.online.status = status;
      if (!exists) { leaveRoomLocally("ルームが終了しました。"); return; }
      if (S.route.name === "room") renderRoom();
    },
    onSettings: settings => { S.online.settings = settings; if (S.route.name === "room") renderRoom(); },
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
          if (member.departed) leaveRoomLocally(member.kickedByHost ? "ホストによってルームから退出させられました。" : "ルームから退出しました。");
          else if (S.route.name === "room") renderRoom();
        }
      },
      onRequest: request => {
        const messages = { full: "ルームが満員のため参加できませんでした。", closed: "ドラフトがすでに始まっていたため参加できませんでした。", kicked: "このルームには参加できません。" };
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
    if (!ack.ok) toast(ack.reason || "操作が反映されませんでした。");
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
  clearTimeout(pushTimer);
  pushTimer = window.setTimeout(() => {
    S.online.hostRev += 1;
    S.online.room.writeState({ rev: S.online.hostRev, state: S.draft, acks: S.online.acks }).catch(error => {
      toast(`共有に失敗しました：${error.message || "通信を確認してください"}`);
    });
  }, 30);
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
    if (!player || !s || !team) reason = "参加者を確認できませんでした。";
    else if (action.kind === "leave") {
      await room.markDeparted(action.uid);
      ok = E.markDeparted(s, team.id, now());
    } else if (team.departed) reason = "退出済みのチームです。";
    else if (action.kind === "pick") {
      const result = E.submitPick(s, team.id, action.idolId, now());
      ok = result.ok;
      reason = result.reason || "";
    } else if (action.kind === "envelope") {
      ok = s.reveal?.key === action.revealKey && E.chooseEnvelope(s, team.id, action.envelope, now());
      if (!ok) reason = "封筒を選べませんでした。";
    }
  } catch (error) {
    reason = error.message || "操作を処理できませんでした。";
  }
  if (action?.uid) S.online.acks[action.uid] = { id: key, ok, reason };
  commit();
  await room.removeAction(key);
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
        toast("ホストからの応答がありません。通信を確認して、もう一度試してください。");
        render();
      }
    }, 12000);
  }).catch(error => {
    S.online.pending = null;
    toast(error.message || "送信できませんでした。");
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
    <a class="back-link" href="#/" >ホームへ</a>
    <div class="room">
      <section class="room-code-card" aria-label="ルームコード">
        <small>ルームコード</small>
        <div class="room-code">${esc(room.code)}</div>
        <p style="color:rgba(255,255,255,.8);font-size:14px">${host ? "招待リンクを友達に送ってください。リンクを開くと、このルームの参加画面になります。" : "ホストがドラフトを始めるまでお待ちください。"}</p>
        <div class="room-code-actions">
          <button class="btn btn-sm" data-action="share-invite">${icon("share")}招待リンクを送る</button>
          <button class="btn btn-sm btn-ghost" data-action="copy-invite">${icon("copy")}コピー</button>
        </div>
      </section>
      <div style="display:grid;gap:16px">
        <section class="panel" style="display:grid;gap:14px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px"><h2 class="panel-title">参加者</h2><span class="chip">${active.length}/${MAX_PLAYERS}人</span></div>
          ${waitingApproval ? `<p class="notice">参加を申請しています。ホストの端末が自動で承認します…</p>` : ""}
          <ol class="player-list">${players.map(([uid, p], i) => `
            <li class="player ${p.departed ? "is-departed" : ""}" style="--team-color:${teamColor(i)}">
              <span class="player-dot">${i + 1}</span><strong>${esc(p.teamName || p.name)}</strong>
              <span class="player-tag">${p.host ? "ホスト" : p.departed ? "退出" : uid === room.uid ? "あなた" : "参加者"}</span>
              ${host && !p.host && !p.departed ? `<button class="btn btn-ghost btn-sm" data-action="kick" data-uid="${esc(uid)}">退出させる</button>` : ""}
            </li>`).join("")}</ol>
        </section>
        <section class="panel setup-form">
          <div><h2 class="panel-title">ルール</h2><p class="panel-sub">${host ? "ホストが決めます。" : "ホストが決めたルールです。"}</p></div>
          ${rulesFields(settings, { disabled: !host || playing })}
        </section>
        <div class="room-actions">
          ${host
            ? `<button class="btn btn-primary btn-lg" data-action="start-online" ${active.length < 2 || playing ? "disabled" : ""}>${icon("play")}${active.length < 2 ? "参加者を待っています（2人から）" : `${active.length}人でドラフトを始める`}</button>`
            : `<p class="notice">${playing ? "ドラフトが始まっています。" : "ホストがドラフトを始めると、自動で画面が切り替わります。"}</p>`}
          <button class="btn btn-ghost" data-action="${host ? "close-room" : "leave-room"}">${host ? "ルームを終了する" : "ルームから退出する"}</button>
        </div>
      </div>
    </div>`;
}

async function startOnline() {
  const o = S.online;
  const room = o?.room;
  if (!room?.isHost) return;
  const active = room.activePlayers();
  if (active.length < 2) { toast("2人以上そろうと始められます"); return; }
  const settings = o.settings || { pickLimit: 5, orderMode: "snake", startOrder: "random" };
  const draft = E.createDraft({
    mode: "online",
    teams: active.map(([uid, p]) => ({ name: p.teamName || p.name, kind: "human", uid })),
    settings
  });
  try {
    await room.clearActions();
    await room.setStatus("playing");
    o.acks = {};
    beginDraft(draft);
  } catch (error) {
    toast(error.message || "開始できませんでした。");
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
    if (active.length < 2) { toast("参加者が2人未満のため再ドラフトできません"); return; }
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
  items.push({ value: "speed", label: `発表のテンポ：${S.speed === "fast" ? "テンポよく" : "じっくり"}（切り替え）`, icon: "refresh" });
  if (!isOnline()) {
    items.push({ value: "home", label: "中断してホームへ（あとで再開できます）", icon: "home" });
    items.push({ value: "restart", label: "最初からやり直す", icon: "refresh" });
  } else {
    items.push({ value: "invite", label: "招待リンクをコピー", icon: "copy" });
    items.push({ value: "home", label: "ホームへ（ルームには残ります）", icon: "home" });
    items.push(isHost() ? { value: "close", label: "ルームを終了する", icon: "close", danger: true } : { value: "leave", label: "ルームから退出する", icon: "close", danger: true });
  }
  const choice = await menuDialog({ title: "メニュー", items });
  if (choice === "speed") { S.speed = S.speed === "fast" ? "normal" : "fast"; savePrefs(); toast(`発表のテンポ：${S.speed === "fast" ? "テンポよく" : "じっくり"}`); direct(); }
  else if (choice === "home") go("");
  else if (choice === "restart") {
    if (await confirmDialog({ title: "最初からやり直しますか？", message: "今のドラフトは消えて、同じ設定で新しく始まります。", ok: "やり直す", danger: true })) restartDraft();
  } else if (choice === "invite") copyInvite();
  else if (choice === "close") closeRoom();
  else if (choice === "leave") leaveRoom();
}

async function closeRoom() {
  const room = S.online?.room;
  if (!room?.isHost) return;
  if (!(await confirmDialog({ title: "ルームを終了しますか？", message: "参加者名・設定・指名結果を含むルームのデータを削除します。", ok: "終了して削除", danger: true }))) return;
  try {
    stopDirector();
    await room.close();
    leaveRoomLocally("ルームを終了しました。");
  } catch (error) {
    toast(error.message || "ルームを終了できませんでした。");
  }
}

async function leaveRoom() {
  const o = S.online;
  const room = o?.room;
  if (!room || room.isHost) return;
  if (!(await confirmDialog({ title: "ルームから退出しますか？", message: o.status === "playing" ? "ドラフト中に退出すると、あなたのチームの残りの指名はスキップされます。" : "", ok: "退出する", danger: true }))) return;
  if (o.status === "playing") {
    room.sendAction({ kind: "leave" }).done.catch(() => {});
    leaveRoomLocally("ルームから退出しました。");
  } else {
    await room.leaveLobby();
    leaveRoomLocally("ルームから退出しました。");
  }
}

async function kickPlayer(uid) {
  const room = S.online?.room;
  const player = room?.players[uid];
  if (!room?.isHost || !player) return;
  const playing = S.online.status === "playing";
  if (!(await confirmDialog({ title: `${player.teamName || player.name} を退出させますか？`, message: playing ? "このチームの残りの指名はスキップされます。" : "", ok: "退出させる", danger: true }))) return;
  try {
    if (playing) {
      await room.markDeparted(uid, true);
      const team = S.draft?.teams.find(t => t.uid === uid);
      if (team) { E.markDeparted(S.draft, team.id, now()); commit(); }
    } else {
      await room.markDeparted(uid, true);
    }
  } catch (error) {
    toast(error.message || "退出させられませんでした。");
  }
}

async function copyInvite() {
  const room = S.online?.room;
  if (!room) return;
  try {
    await navigator.clipboard.writeText(room.inviteUrl());
    toast("招待リンクをコピーしました");
  } catch {
    await promptDialog({ title: "招待リンク", label: "このリンクをコピーして送ってください", value: room.inviteUrl(), ok: "閉じる" });
  }
}

async function shareInvite() {
  const room = S.online?.room;
  if (!room) return;
  if (navigator.share) {
    try { await navigator.share({ title: "KDraft オンラインドラフト", text: `KDraftでドラフトしよう！ルームコード：${room.code}`, url: room.inviteUrl() }); return; }
    catch (error) { if (error?.name === "AbortError") return; }
  }
  copyInvite();
}

// ======================================================================
// 操作（イベントの受け口）
// ======================================================================
document.addEventListener("click", async event => {
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
      { const chip = $('[data-action="toggle-shortlist-only"]'); if (chip) chip.innerHTML = `${icon("heart")}気になる ${S.shortlist.size ? `(${S.shortlist.size})` : ""}`; }
      if (S.pool.onlyShortlist) renderCards();
      break;
    case "exclude":
      if (S.excluded.has(id)) S.excluded.delete(id); else { S.excluded.add(id); if (S.selectedId === id) S.selectedId = null; }
      store.saveExcluded(S.excluded);
      renderCards(); renderDock();
      toast(S.excluded.has(id) ? "候補から除外しました（AIも選びません）" : "除外をやめました");
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
    case "toggle-shortlist-only": S.pool.onlyShortlist = !S.pool.onlyShortlist; S.pool.limit = PAGE(); renderPoolTools(); renderCards(); break;
    case "toggle-hide-drafted": S.pool.hideDrafted = !S.pool.hideDrafted; renderPoolTools(); renderCards(); break;
    case "toggle-show-excluded": S.pool.showExcluded = !S.pool.showExcluded; renderPoolTools(); renderCards(); break;
    case "reset-filters":
      Object.assign(S.pool, { query: "", generation: "", nationality: "", agency: "", group: "", hideDrafted: true, showExcluded: false, onlyShortlist: false, limit: PAGE() });
      renderPoolTools(); renderCards(); break;
    case "random-pick": {
      const drafted = draftedKeys();
      const list = candidates().filter(i => !drafted.has(i.personKey) && !S.excluded.has(i.id));
      if (!list.length) { toast("選べる候補がいません。条件を変えてみてください"); break; }
      const idol = list[Math.floor(Math.random() * list.length)];
      const previous = S.selectedId;
      S.selectedId = idol.id;
      refreshCardSelection(previous);
      renderDock();
      $(`.card[data-id="${idol.id}"]`)?.scrollIntoView({ block: "center", behavior: reducedMotion() ? "auto" : "smooth" });
      break;
    }
    case "save-preset": {
      const name = await promptDialog({ title: "絞り込み条件を保存", label: "条件の名前", placeholder: "例：4世代のSM" });
      if (!name) break;
      const p = S.pool;
      S.presets[name] = { query: p.query, generation: p.generation, nationality: p.nationality, agency: p.agency, group: p.group, hideDrafted: p.hideDrafted };
      store.savePresets(S.presets);
      renderPoolTools();
      toast(`「${name}」を保存しました`);
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
      if (await confirmDialog({ title: "途中のドラフトを破棄しますか？", ok: "破棄する", danger: true })) {
        store.saveResume(null);
        if (S.draft && S.draft.mode !== "online") { S.draft = null; stopDirector(); }
        renderHome();
      }
      break;
    case "share-image": {
      S.shareStatus = "画像を作っています…";
      renderResults();
      try {
        const result = await shareResult(S.draft);
        S.shareStatus = result === "downloaded" ? "結果画像を保存しました。Xなどに添付して投稿できます。" : result === "shared" ? "共有しました。" : "";
        if (result === "downloaded") window.open(xIntentUrl(), "_blank", "noopener,noreferrer");
      } catch (error) {
        S.shareStatus = "画像を作れませんでした。もう一度お試しください。";
      }
      renderResults();
      break;
    }
    case "copy-result":
      try { await navigator.clipboard.writeText(resultText(S.draft)); toast("結果をテキストでコピーしました"); }
      catch { toast("コピーできませんでした"); }
      break;
    case "restart":
      if (await confirmDialog({ title: "同じ設定で再ドラフトしますか？", message: isOnline() ? "ルームの全員で新しいドラフトを始めます。" : "", ok: "再ドラフト" })) restartDraft();
      break;
    case "finish-home": break;
    case "clear-history":
      if (await confirmDialog({ title: "履歴をすべて消しますか？", message: "この端末に保存されたドラフト結果がすべて消えます。", ok: "すべて消す", danger: true })) { store.saveHistory([]); renderHistory(); }
      break;
    case "delete-history":
      store.saveHistory(store.history().filter(entry => entry.id !== id));
      renderHistory();
      break;
    case "create-room": createRoom(); break;
    case "join-room": joinRoom(); break;
    case "copy-invite": copyInvite(); break;
    case "share-invite": shareInvite(); break;
    case "start-online": startOnline(); break;
    case "close-room": closeRoom(); break;
    case "leave-room": leaveRoom(); break;
    case "kick": kickPlayer(target.dataset.uid); break;
    case "install": requestInstall(); break;
    default: break;
  }
});

function onSegment(name, value) {
  if (name === "tab") { S.tab = value; renderDraft(); window.scrollTo({ top: 0 }); return; }
  if (name === "boardMode") { S.boardMode = value; renderBoardPanel(); return; }
  if (name === "resultsMode") { S.resultsMode = value; renderResults(); return; }
  if (name === "speed") { S.speed = value; savePrefs(); renderSetup(); return; }
  if (["startOrder", "orderMode"].includes(name)) {
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
  if (event.target.id !== "poolSearch") return;
  S.pool.query = event.target.value;
  clearTimeout(event.target._t);
  event.target._t = setTimeout(() => { renderCards(); updateFilterOptions(); }, 60);
});

document.addEventListener("change", event => {
  const el = event.target;
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
  } else if (event.key === "Escape" && S.selectedId && S.route.name === "draft" && !$("#modal").open) {
    const previous = S.selectedId; S.selectedId = null; refreshCardSelection(previous); renderDock();
  } else if (event.key === "Enter" && event.target.id === "roomCode") {
    joinRoom();
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
  const button = $("#installButton");
  const text = $("#installText");
  if (!button || !text) return;
  if (standalone()) { button.hidden = true; text.textContent = "ホーム画面のアイコンから開いています。"; return; }
  if (installPrompt) { button.hidden = false; return; }
  button.hidden = true;
  if (isIOS) text.textContent = "Safariの共有ボタン（四角から矢印が出ているアイコン）から「ホーム画面に追加」を選ぶと、アイコンから開けます。一度開いたあとは、通信が切れてもAIドラフトを遊べます。";
}
async function requestInstall() {
  if (!installPrompt) return;
  const promptEvent = installPrompt;
  installPrompt = null;
  promptEvent.prompt();
  const choice = await promptEvent.userChoice.catch(() => null);
  if (choice?.outcome === "accepted") toast("ホーム画面に追加しました");
  refreshInstallUI();
}
window.addEventListener("offline", () => toast("オフラインになりました。AIドラフトと1台での対戦はそのまま遊べます", { duration: 5200 }));
window.addEventListener("online", () => toast("オンラインに戻りました"));

if ("serviceWorker" in navigator && (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname))) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(() => {}));
}

// ======================================================================
// 起動
// ======================================================================
function boot() {
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
    Room.isMember(savedRoom.code).then(member => {
      if (member) joinRoom(savedRoom.code);
      else store.saveRoom(null);
    }).catch(() => store.saveRoom(null));
  }
  onRoute();
  if (S.draft && S.route.name === "draft") direct();
}
boot();
