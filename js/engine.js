// KDraft ドラフトの進行ルール（画面から独立した純粋なロジック）
// 状態はすべて JSON にできる形で持つので、途中保存やオンライン同期にそのまま使える。
//
// ルール（旧版と同じ）
// - 開始時のチーム順は「設定順」か「ランダム抽選」。
// - 1巡目は全チームが入札（オンラインは同時・伏せ札、1台/AIは順番に）。
//   全員の入札がそろったら順番に発表し、同じメンバーが重なったら封筒の抽選。
//   外れたチームと無効な入札のチームは、当たるまで再入札を繰り返す。
// - 抽選で封筒を選ぶ順は「2巡目の指名順」と同じ順。
// - 2巡目は、ウェーバー（前巡の逆順）なら 1巡目の逆、固定ならチーム順。
//   以降、ウェーバーは毎巡逆順に、固定は毎巡チーム順。
// - 指名人数に達したチーム（とオンラインで退出したチーム）は飛ばす。

import { idols } from "./data.js";

export const idolById = new Map(idols.map(idol => [idol.id, idol]));

let rng = Math.random;
export function setRandom(fn) { rng = fn || Math.random; }
export function random() { return rng(); }

export function shuffle(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const AI_STRATEGIES = [
  { label: "同世代型", style: "generationFocus" },
  { label: "世代ミックス型", style: "generationMix" },
  { label: "同事務所型", style: "agencyFocus" },
  { label: "事務所ミックス型", style: "agencyMix" },
  { label: "同国籍型", style: "nationalityFocus" },
  { label: "国籍ミックス型", style: "nationalityMix" },
  { label: "ランダム型", style: "random" }
];

export function strategyLabel(style) {
  return AI_STRATEGIES.find(item => item.style === style)?.label || "";
}

/**
 * 新しいドラフトを作る。
 * teams: [{ name, kind: "human"|"ai", uid? }]（設定順）
 * settings: { pickLimit, orderMode: "snake"|"fixed", startOrder: "random"|"fixed" }
 */
export function createDraft({ mode, teams, settings }) {
  let aiIndex = 0;
  const prepared = teams.map((team, index) => {
    const entry = { id: `t${index}`, name: team.name, kind: team.kind || "human" };
    if (team.uid) entry.uid = team.uid;
    if (entry.kind === "ai") {
      entry.strategy = aiIndex < AI_STRATEGIES.length
        ? AI_STRATEGIES[aiIndex].style
        : AI_STRATEGIES[Math.floor(rng() * AI_STRATEGIES.length)].style;
      aiIndex += 1;
    }
    return entry;
  });
  const ordered = settings.startOrder === "fixed" ? prepared : shuffle(prepared);
  const order = ordered.map(team => team.id);
  return {
    v: 1,
    id: `${Date.now().toString(36)}-${Math.floor(rng() * 1e9).toString(36)}`,
    mode,
    createdAt: Date.now(),
    settings: {
      pickLimit: Number(settings.pickLimit) || 5,
      orderMode: settings.orderMode === "fixed" ? "fixed" : "snake",
      startOrder: settings.startOrder === "fixed" ? "fixed" : "random"
    },
    teams: ordered,
    picks: Object.fromEntries(order.map(id => [id, []])),
    losses: Object.fromEntries(order.map(id => [id, []])),
    drafted: [],
    round: 1,
    r1: { started: false, order: order.slice(), bids: {}, attempt: 1, awaitingOpen: false },
    resolution: null,
    queue: [],
    reveal: null,
    firstRoundOrder: settings.orderMode === "fixed" ? order.slice() : order.slice().reverse(),
    order: order.slice(),
    turn: 0,
    seq: 0,
    log: []
  };
}

// ---------------------------------------------------------------- 参照系

export function team(state, teamId) {
  return state.teams.find(item => item.id === teamId) || null;
}

export function teamLabel(state, teamId) {
  const entry = team(state, teamId);
  if (!entry) return "";
  return entry.kind === "ai" ? `${entry.name}（${strategyLabel(entry.strategy)}）` : entry.name;
}

export function teamIndex(state, teamId) {
  return Math.max(0, state.teams.findIndex(item => item.id === teamId));
}

export function isDeparted(state, teamId) {
  return Boolean(team(state, teamId)?.departed);
}

export function teamComplete(state, teamId) {
  if (isDeparted(state, teamId)) return true;
  return (state.picks[teamId] || []).length >= state.settings.pickLimit;
}

export function allComplete(state) {
  return state.teams.length > 0 && state.teams.every(entry => teamComplete(state, entry.id));
}

export function personDrafted(state, idol) {
  return state.drafted.includes(idol.personKey || idol.id);
}

export function isRevealActive(state) {
  return Boolean(state.reveal) || state.queue.length > 0;
}

export function isFinished(state) {
  return state.r1.started && allComplete(state) && !state.resolution && !isRevealActive(state);
}

export function inFirstRound(state) {
  return !state.r1.started;
}

/** 1巡目の入札をまだ出していて、出せる状態のチーム */
export function bidPending(state, teamId) {
  return !state.r1.started && !state.resolution && !state.r1.awaitingOpen &&
    state.r1.order.includes(teamId) && !(teamId in state.r1.bids) && !isDeparted(state, teamId);
}

export function allBidsIn(state) {
  const live = state.r1.order.filter(id => !isDeparted(state, id));
  return live.length > 0 && live.every(id => id in state.r1.bids);
}

/**
 * いま操作できるチーム。
 * 1巡目のオンラインは同時入札なので null（各自 bidPending で判定）。
 */
export function currentTeam(state) {
  if (isFinished(state) || isRevealActive(state) || state.resolution) return null;
  if (!state.r1.started) {
    if (state.r1.awaitingOpen) return null;
    if (state.mode === "online") return null;
    return state.r1.order.find(id => !(id in state.r1.bids) && !isDeparted(state, id)) || null;
  }
  if (allComplete(state)) return null;
  for (let index = state.turn; index < state.order.length; index += 1) {
    if (!teamComplete(state, state.order[index])) return state.order[index];
  }
  return null;
}

/** このチームが今すぐ候補を選んで提出できるか */
export function canAct(state, teamId) {
  if (!teamId || isRevealActive(state) || state.resolution || isFinished(state)) return false;
  if (!state.r1.started) {
    if (!bidPending(state, teamId)) return false;
    return state.mode === "online" || currentTeam(state) === teamId;
  }
  return currentTeam(state) === teamId;
}

export function idolAvailable(state, idolId) {
  const idol = idolById.get(String(idolId));
  return Boolean(idol && !personDrafted(state, idol));
}

export function totalPicks(state) {
  return state.teams.reduce((sum, entry) => sum + (state.picks[entry.id] || []).length, 0);
}

export function firstRoundBidCount(state) {
  return state.r1.order.filter(id => !isDeparted(state, id) && id in state.r1.bids).length;
}

// ---------------------------------------------------------------- 内部

function pushLog(state, entry) {
  state.seq += 1;
  state.log.push({ seq: state.seq, at: Date.now(), ...entry });
  if (state.log.length > 40) state.log.splice(0, state.log.length - 40);
}

function recordPick(state, teamId, idol, round) {
  state.picks[teamId].push({ round, idolId: idol.id });
  const key = idol.personKey || idol.id;
  if (!state.drafted.includes(key)) state.drafted.push(key);
}

function skipCompletedTurns(state) {
  while (state.turn < state.order.length && teamComplete(state, state.order[state.turn])) {
    state.turn += 1;
  }
  if (state.turn >= state.order.length && !allComplete(state)) {
    state.round += 1;
    state.order = state.settings.orderMode === "snake"
      ? state.order.slice().reverse()
      : state.teams.map(entry => entry.id);
    state.turn = 0;
    while (state.turn < state.order.length && teamComplete(state, state.order[state.turn])) {
      state.turn += 1;
    }
  }
}

function enterSecondRound(state) {
  state.r1.started = true;
  state.r1.order = [];
  state.r1.bids = {};
  state.r1.awaitingOpen = false;
  if (allComplete(state)) return;
  state.round = 2;
  state.order = state.firstRoundOrder.slice();
  state.turn = 0;
  skipCompletedTurns(state);
}

function finishResolution(state) {
  const batch = state.resolution;
  if (!batch) return;
  state.resolution = null;
  state.r1.order = batch.batchOrder.filter(id => batch.waiting.includes(id) && !isDeparted(state, id));
  state.r1.bids = {};
  state.r1.awaitingOpen = false;
  if (state.r1.order.length > 0) {
    state.r1.attempt += 1;
    pushLog(state, { kind: "rebid", teams: state.r1.order.slice(), attempt: state.r1.attempt });
  } else {
    enterSecondRound(state);
    if (!isFinished(state)) pushLog(state, { kind: "round", round: state.round });
  }
}

function completeNomination(state, reveal) {
  const batch = state.resolution;
  if (!batch || reveal?.type !== "nomination" || batch.revealed.includes(reveal.teamId)) return;
  batch.revealed.push(reveal.teamId);
  const idol = idolById.get(reveal.idolId);
  if (!idol) return;
  const key = idol.personKey || idol.id;
  const sameMember = batch.nominations.filter(item => {
    const candidate = idolById.get(item.idolId);
    return candidate && (candidate.personKey || candidate.id) === key;
  });
  if (sameMember.length !== 1) return;
  if ((state.picks[reveal.teamId] || []).some(item => item.round === 1)) return;
  recordPick(state, reveal.teamId, idol, 1);
  batch.waiting = batch.waiting.filter(id => id !== reveal.teamId);
  pushLog(state, { kind: "pick", teamId: reveal.teamId, idolId: idol.id, round: 1 });
}

function makeRevealKey(state, item) {
  return `${state.id}:${state.seq}:${item.type}:${item.round}:${item.idolId}`;
}

// ---------------------------------------------------------------- 発表キュー

/** 次の発表へ進める（今の発表の結果を確定させてから） */
export function startNextReveal(state, now = Date.now()) {
  const current = state.reveal;
  if (current?.type === "nomination") completeNomination(state, current);
  state.reveal = null;
  const next = state.queue.shift();
  if (!next) {
    if (state.resolution) finishResolution(state);
    return state;
  }
  state.seq += 1;
  next.key = makeRevealKey(state, next);
  next.stage = "intro";
  next.stageAt = now;
  if (next.type === "lottery") {
    next.envelopes = next.teams.length;
    next.winningEnvelope = Math.floor(rng() * next.envelopes);
    next.selections = {};
    next.winner = null;
  }
  state.reveal = next;
  return state;
}

/** 発表の「指名チーム → メンバー公開」へ（抽選なら封筒選びへ） */
export function showReveal(state, now = Date.now()) {
  const reveal = state.reveal;
  if (!reveal || reveal.stage !== "intro") return false;
  reveal.stage = reveal.type === "lottery" ? "choosing" : "shown";
  reveal.stageAt = now;
  return true;
}

export function lotteryDrawer(state) {
  const reveal = state.reveal;
  if (!reveal || reveal.type !== "lottery" || reveal.stage !== "choosing") return null;
  const chosen = Object.keys(reveal.selections).length;
  return reveal.drawOrder[chosen] || null;
}

export function chooseEnvelope(state, teamId, envelope, now = Date.now()) {
  const reveal = state.reveal;
  if (!reveal || reveal.type !== "lottery" || reveal.stage !== "choosing") return false;
  if (lotteryDrawer(state) !== teamId) return false;
  const env = Number(envelope);
  if (!Number.isInteger(env) || env < 0 || env >= reveal.envelopes || String(env) in reveal.selections) return false;
  reveal.selections[env] = teamId;
  if (Object.keys(reveal.selections).length >= reveal.drawOrder.length) {
    reveal.stage = "ready";
    reveal.stageAt = now;
  }
  return true;
}

export function openLottery(state, now = Date.now()) {
  const reveal = state.reveal;
  if (!reveal || reveal.type !== "lottery" || reveal.stage !== "ready") return false;
  reveal.stage = "opening";
  reveal.stageAt = now;
  return true;
}

export function completeLottery(state, now = Date.now()) {
  const reveal = state.reveal;
  if (!reveal || reveal.type !== "lottery" || reveal.stage !== "opening") return false;
  const winner = reveal.selections[reveal.winningEnvelope];
  const idol = idolById.get(reveal.idolId);
  if (!winner || !idol) return false;
  reveal.winner = winner;
  reveal.stage = "result";
  reveal.stageAt = now;
  reveal.teams.forEach(id => {
    if (id === winner) return;
    const losses = state.losses[id] || (state.losses[id] = []);
    if (!losses.includes(idol.id)) losses.push(idol.id);
  });
  if (!(state.picks[winner] || []).some(item => item.round === 1)) recordPick(state, winner, idol, 1);
  if (state.resolution) {
    state.resolution.waiting = state.resolution.waiting.filter(id => id !== winner);
    state.resolution.results.push({ idolId: idol.id, winner });
  }
  pushLog(state, { kind: "lottery", teamId: winner, idolId: idol.id, teams: reveal.teams.slice() });
  return true;
}

/** 今の発表を閉じて次へ（発表済み・抽選結果確定後のみ） */
export function advanceReveal(state, now = Date.now()) {
  const reveal = state.reveal;
  if (!reveal) return false;
  if (reveal.type === "lottery" ? reveal.stage !== "result" : reveal.stage !== "shown") return false;
  startNextReveal(state, now);
  return true;
}

// ---------------------------------------------------------------- 1巡目

/**
 * 1巡目の入札を出す。全員そろったら、オンラインはホストの開示待ち、
 * それ以外はすぐに開示して発表キューを作る。
 */
export function submitBid(state, teamId, idolId, now = Date.now()) {
  if (!canAct(state, teamId)) return { ok: false, reason: "いまは入札できません。" };
  const id = idolId == null ? "" : String(idolId);
  if (id && !idolAvailable(state, id)) return { ok: false, reason: "このメンバーはすでに指名されています。" };
  state.r1.bids[teamId] = id;
  pushLog(state, { kind: "bid", teamId });
  if (allBidsIn(state)) {
    if (state.mode === "online") state.r1.awaitingOpen = true;
    else openBids(state, now);
  }
  return { ok: true };
}

/** 全員の入札を開示して、発表・抽選のキューを作る */
export function openBids(state, now = Date.now()) {
  if (state.r1.started || state.resolution || !allBidsIn(state)) return false;
  state.r1.awaitingOpen = false;
  const batchOrder = state.r1.order.filter(id => !isDeparted(state, id));
  const nominations = batchOrder.map(teamId => ({ teamId, idolId: state.r1.bids[teamId] || "" }));
  const valid = nominations.filter(item => idolAvailable(state, item.idolId));
  const waiting = new Set(nominations.filter(item => !idolAvailable(state, item.idolId)).map(item => item.teamId));

  const byPerson = new Map();
  valid.forEach(({ teamId, idolId }) => {
    const idol = idolById.get(idolId);
    const key = idol.personKey || idol.id;
    if (!byPerson.has(key)) byPerson.set(key, { idolId, teams: [] });
    byPerson.get(key).teams.push(teamId);
  });
  const lotteries = [];
  byPerson.forEach(({ idolId, teams }) => {
    if (teams.length < 2) return;
    teams.forEach(id => waiting.add(id));
    const drawOrder = state.firstRoundOrder.filter(id => teams.includes(id));
    lotteries.push({
      type: "lottery",
      teamId: drawOrder[0] || teams[0],
      idolId,
      round: 1,
      teams: teams.slice(),
      drawOrder: drawOrder.length === teams.length ? drawOrder : teams.slice()
    });
  });

  state.resolution = {
    batchOrder,
    nominations: valid.map(item => ({ teamId: item.teamId, idolId: item.idolId })),
    revealed: [],
    waiting: [...waiting],
    results: []
  };
  state.r1.order = [];
  state.r1.bids = {};
  valid.forEach(item => state.queue.push({ type: "nomination", teamId: item.teamId, idolId: item.idolId, round: 1 }));
  lotteries.forEach(item => state.queue.push(item));
  pushLog(state, { kind: "open", count: valid.length, lotteries: lotteries.length });
  startNextReveal(state, now);
  return true;
}

// ---------------------------------------------------------------- 2巡目以降

export function submitPick(state, teamId, idolId, now = Date.now()) {
  if (!state.r1.started) return submitBid(state, teamId, idolId, now);
  if (!canAct(state, teamId)) return { ok: false, reason: "いまはこのチームの指名番ではありません。" };
  const idol = idolById.get(String(idolId));
  if (!idol || personDrafted(state, idol)) return { ok: false, reason: "このメンバーはすでに指名されています。" };
  const round = state.round;
  recordPick(state, teamId, idol, round);
  pushLog(state, { kind: "pick", teamId, idolId: idol.id, round });
  state.turn += 1;
  if (!allComplete(state)) skipCompletedTurns(state);
  if (state.mode === "online") {
    state.queue.push({ type: "pick", teamId, idolId: idol.id, round });
    if (!state.reveal) startNextReveal(state, now);
  }
  return { ok: true };
}

// ---------------------------------------------------------------- オンライン退出

export function markDeparted(state, teamId, now = Date.now()) {
  const entry = team(state, teamId);
  if (!entry || entry.departed) return false;
  entry.departed = true;
  pushLog(state, { kind: "departed", teamId });
  if (!state.r1.started && !state.resolution && !(teamId in state.r1.bids)) {
    state.r1.order = state.r1.order.filter(id => id !== teamId);
    if (allBidsIn(state)) {
      if (state.mode === "online") state.r1.awaitingOpen = true;
      else openBids(state, now);
    }
  }
  if (state.r1.started && !allComplete(state)) {
    while (state.turn < state.order.length && teamComplete(state, state.order[state.turn])) state.turn += 1;
    if (state.turn >= state.order.length) skipCompletedTurns(state);
  }
  return true;
}

// ---------------------------------------------------------------- 表示用

/** ボード表示用：巡目ごとの各チームの指名 */
export function boardRows(state) {
  const rows = [];
  for (let round = 1; round <= state.settings.pickLimit; round += 1) {
    rows.push({
      round,
      cells: state.teams.map(entry => ({
        teamId: entry.id,
        pick: (state.picks[entry.id] || []).find(item => item.round === round) || null,
        losses: round === 1 ? (state.losses[entry.id] || []) : []
      }))
    });
  }
  return rows;
}

export function statusText(state, viewerTeamId = null) {
  if (isFinished(state)) return "ドラフト終了";
  if (state.reveal || state.queue.length) return "指名発表中";
  if (!state.r1.started) {
    if (state.r1.awaitingOpen) return "全員の入札がそろいました";
    if (state.r1.attempt > 1) return `1巡目 再入札（${state.r1.attempt}回目）`;
    return "1巡目 入札";
  }
  const current = currentTeam(state);
  if (!current) return `${state.round}巡目`;
  return viewerTeamId && current === viewerTeamId ? `${state.round}巡目・あなたの番` : `${state.round}巡目・${teamLabel(state, current)}`;
}
