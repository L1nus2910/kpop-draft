// エンジンの自動テスト: node test/engine.test.mjs
import assert from "node:assert/strict";
import * as E from "../js/engine.js";
import { chooseAIIdol } from "../js/ai.js";
import { idols } from "../js/data.js";

let failures = 0;
function test(name, fn) {
  try { fn(); console.log("ok  ", name); }
  catch (error) { failures += 1; console.log("FAIL", name, "\n", error); }
}
function seeded(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 2 ** 32; };
}
const byName = (japaneseName, group) => idols.find(i => i.japaneseName === japaneseName && (!group || i.group === group));

/** 発表キューを全部流す（抽選は順に封筒を選ぶ） */
function drainReveals(state) {
  let guard = 0;
  while (state.reveal && guard++ < 500) {
    const r = state.reveal;
    if (r.stage === "intro") E.showReveal(state);
    else if (r.stage === "choosing") {
      const drawer = E.lotteryDrawer(state);
      const free = [...Array(r.envelopes).keys()].find(i => !(String(i) in r.selections));
      assert.ok(E.chooseEnvelope(state, drawer, free));
    } else if (r.stage === "ready") E.openLottery(state);
    else if (r.stage === "opening") E.completeLottery(state);
    else E.advanceReveal(state);
  }
}

/** AIだけで最後までドラフトする */
function runAI(state) {
  let guard = 0;
  while (!E.isFinished(state) && guard++ < 5000) {
    if (state.reveal) { drainReveals(state); continue; }
    if (state.r1.awaitingOpen) { E.openBids(state); continue; }
    if (!state.r1.started) {
      const pending = state.mode === "online"
        ? state.r1.order.find(id => E.bidPending(state, id))
        : E.currentTeam(state);
      const idol = chooseAIIdol(state, pending);
      assert.ok(E.submitBid(state, pending, idol.id).ok);
      continue;
    }
    const current = E.currentTeam(state);
    const idol = chooseAIIdol(state, current);
    assert.ok(E.submitPick(state, current, idol.id).ok);
  }
  assert.ok(E.isFinished(state), "finished");
}

const teams4 = ["A", "B", "C", "D"].map(name => ({ name, kind: "ai" }));

test("固定順・ウェーバーの指名順（2巡目は1巡目の逆、以降毎巡逆）", () => {
  E.setRandom(seeded(1));
  const s = E.createDraft({ mode: "local", teams: teams4.map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 4, orderMode: "snake", startOrder: "fixed" } });
  assert.deepEqual(s.teams.map(t => t.name), ["A", "B", "C", "D"]);
  // 重複しない入札
  const picks = ["テヨン", "ジス", "ナヨン", "アイリーン"].map(n => byName(n));
  for (const [i, idol] of picks.entries()) assert.ok(E.submitBid(s, `t${i}`, idol.id).ok);
  assert.ok(s.reveal, "発表が始まる");
  drainReveals(s);
  assert.equal(s.r1.started, true);
  assert.equal(s.round, 2);
  const order2 = [];
  for (let i = 0; i < 4; i++) { const c = E.currentTeam(s); order2.push(c); E.submitPick(s, c, chooseAIIdol(s, c).id); }
  assert.deepEqual(order2, ["t3", "t2", "t1", "t0"]);
  const order3 = [];
  for (let i = 0; i < 4; i++) { const c = E.currentTeam(s); order3.push(c); E.submitPick(s, c, chooseAIIdol(s, c).id); }
  assert.deepEqual(order3, ["t0", "t1", "t2", "t3"]);
  assert.equal(s.round, 4);
});

test("固定順モードは毎巡チーム順", () => {
  E.setRandom(seeded(2));
  const s = E.createDraft({ mode: "local", teams: teams4.map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 3, orderMode: "fixed", startOrder: "fixed" } });
  ["テヨン", "ジス", "ナヨン", "アイリーン"].forEach((n, i) => E.submitBid(s, `t${i}`, byName(n).id));
  drainReveals(s);
  const order = [];
  for (let i = 0; i < 8; i++) { const c = E.currentTeam(s); order.push(c); E.submitPick(s, c, chooseAIIdol(s, c).id); }
  assert.deepEqual(order, ["t0", "t1", "t2", "t3", "t0", "t1", "t2", "t3"]);
  assert.ok(E.isFinished(s));
});

test("1巡目の重複は抽選、外れたチームだけ再入札", () => {
  E.setRandom(seeded(3));
  const s = E.createDraft({ mode: "local", teams: teams4.map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 2, orderMode: "snake", startOrder: "fixed" } });
  const jisoo = byName("ジス");
  E.submitBid(s, "t0", jisoo.id);
  E.submitBid(s, "t1", byName("テヨン").id);
  E.submitBid(s, "t2", jisoo.id);
  E.submitBid(s, "t3", jisoo.id);
  // 4件の発表 + 抽選1件
  assert.equal(s.reveal.type, "nomination");
  assert.equal(s.queue.length, 3 + 1);
  const lottery = s.queue.at(-1);
  assert.equal(lottery.type, "lottery");
  assert.deepEqual(lottery.drawOrder, ["t3", "t2", "t0"], "封筒は2巡目の指名順（逆順）で選ぶ");
  drainReveals(s);
  assert.equal(s.r1.started, false);
  assert.equal(s.r1.attempt, 2);
  const winner = ["t0", "t2", "t3"].find(id => s.picks[id].length === 1);
  const losers = ["t0", "t2", "t3"].filter(id => id !== winner);
  assert.deepEqual(s.r1.order, losers, "外れたチームが元の順番で再入札");
  losers.forEach(id => assert.deepEqual(s.losses[id], [jisoo.id]));
  assert.equal(s.picks.t1[0].round, 1);
  assert.equal(E.currentTeam(s), losers[0]);
  // 再入札：ジスはもう選べない
  assert.equal(E.submitBid(s, losers[0], jisoo.id).ok, false);
});

test("同一人物（別グループ表記）も重複扱い", () => {
  E.setRandom(seeded(4));
  const s = E.createDraft({ mode: "local", teams: teams4.slice(0, 2).map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 1, orderMode: "snake", startOrder: "fixed" } });
  const a = idols.find(i => i.group === "IZ*ONE" && i.name === "Wonyoung");
  const b = idols.find(i => i.group === "IVE" && i.name === "Wonyoung");
  assert.equal(a.personKey, b.personKey);
  E.submitBid(s, "t0", a.id);
  E.submitBid(s, "t1", b.id);
  assert.equal(s.queue.at(-1).type, "lottery");
});

test("オンラインは同時入札・ホスト開示待ち・指名ごとに発表", () => {
  E.setRandom(seeded(5));
  const s = E.createDraft({ mode: "online", teams: teams4.map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 2, orderMode: "snake", startOrder: "fixed" } });
  assert.equal(E.currentTeam(s), null);
  assert.ok(E.canAct(s, "t2"));
  ["テヨン", "ジス", "ナヨン", "アイリーン"].forEach((n, i) => E.submitBid(s, `t${3 - i}`, byName(n).id));
  assert.equal(s.r1.awaitingOpen, true);
  assert.equal(s.reveal, null);
  assert.ok(E.openBids(s));
  drainReveals(s);
  const c = E.currentTeam(s);
  E.submitPick(s, c, chooseAIIdol(s, c).id);
  assert.equal(s.reveal?.type, "pick");
  assert.equal(E.currentTeam(s), null, "発表中は誰も指名できない");
});

test("退出したチームは飛ばす", () => {
  E.setRandom(seeded(6));
  const s = E.createDraft({ mode: "online", teams: teams4.map(t => ({ ...t, kind: "human" })), settings: { pickLimit: 3, orderMode: "snake", startOrder: "fixed" } });
  E.submitBid(s, "t0", byName("テヨン").id);
  E.submitBid(s, "t1", byName("ジス").id);
  E.submitBid(s, "t2", byName("ナヨン").id);
  E.markDeparted(s, "t3");
  assert.equal(s.r1.awaitingOpen, true);
  E.openBids(s);
  drainReveals(s);
  const seen = new Set();
  runAI(s);
  assert.equal(s.picks.t3.length, 0);
  assert.equal(s.picks.t0.length, 3);
});

test("AIだけで多数のドラフトを最後まで（不変条件）", () => {
  for (let seed = 10; seed < 160; seed++) {
    E.setRandom(seeded(seed));
    const count = 2 + (seed % 9);
    const pickLimit = 1 + (seed % 8);
    const teams = Array.from({ length: count }, (_, i) => ({ name: `AI${i + 1}`, kind: "ai" }));
    const mode = seed % 3 === 0 ? "online" : "ai";
    const s = E.createDraft({ mode, teams, settings: { pickLimit, orderMode: seed % 2 ? "snake" : "fixed", startOrder: seed % 4 ? "random" : "fixed" } });
    runAI(s);
    const keys = [];
    for (const t of s.teams) {
      assert.equal(s.picks[t.id].length, pickLimit, "全員指名人数ぴったり");
      assert.deepEqual(s.picks[t.id].map(p => p.round), Array.from({ length: pickLimit }, (_, i) => i + 1), "巡目が1から順");
      for (const p of s.picks[t.id]) keys.push(E.idolById.get(p.idolId).personKey);
    }
    assert.equal(new Set(keys).size, keys.length, "同じ人は1回だけ");
    JSON.parse(JSON.stringify(s));
  }
});

test("AIの戦略はチーム順に割り当て", () => {
  E.setRandom(seeded(7));
  const s = E.createDraft({ mode: "ai", teams: [{ name: "あなた", kind: "human" }, ...Array.from({ length: 3 }, (_, i) => ({ name: `AI${i + 1}`, kind: "ai" }))], settings: { pickLimit: 5, orderMode: "snake", startOrder: "fixed" } });
  assert.deepEqual(s.teams.filter(t => t.kind === "ai").map(t => t.strategy), ["generationFocus", "generationMix", "agencyFocus"]);
  assert.equal(E.teamLabel(s, "t1"), "AI1（同世代型）");
});

console.log(failures ? `\n${failures} failed` : "\nall passed");
process.exit(failures ? 1 : 0);
