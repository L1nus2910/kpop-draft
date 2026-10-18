// 端末内の保存（localStorage）。どれも失敗してもゲームは止めない。
// キー名は旧版と互換のものはそのまま使う（除外・保存条件・履歴）。
//
// 気になる・除外は「グループ名|メンバー名」で保存する。
// 番号（id）はメンバーデータの並び順で決まるため、データを更新すると別の人を指してしまう。
import { idols } from "./data.js";

const idByStableKey = new Map(idols.map(idol => [`${idol.group}|${idol.name}`, idol.id]));
const stableKeyById = new Map(idols.map(idol => [idol.id, `${idol.group}|${idol.name}`]));

const KEYS = {
  excluded: "stagePickExcluded",
  presets: "stagePickPresets",
  history: "kdraftCompletedDraftHistory",
  resume: "kdraftResumeV2",
  shortlist: "kdraftShortlist",
  excludedStable: "kdraftExcludedMembers",
  shortlistStable: "kdraftShortlistMembers",
  prefs: "kdraftPrefs",
  room: "kdraftOnlineRoom"
};
export const HISTORY_LIMIT = 20;

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  try {
    if (value === null || value === undefined) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/** 保存済みのメンバー一覧を、今のデータの id の Set にして返す */
function loadMembers(stableKey, legacyKey) {
  const stable = read(stableKey, null);
  if (Array.isArray(stable)) {
    return new Set(stable.map(key => idByStableKey.get(key)).filter(Boolean));
  }
  // 以前の形式（id の配列）から一度だけ移す
  const legacy = read(legacyKey, []);
  const ids = new Set((Array.isArray(legacy) ? legacy : []).map(String).filter(id => stableKeyById.has(id)));
  if (ids.size) write(stableKey, [...ids].map(id => stableKeyById.get(id)));
  return ids;
}
function saveMembers(stableKey, legacyKey, set) {
  // データにない人（将来消えたメンバー）の記録は残しておく
  const known = new Set(idols.map(idol => `${idol.group}|${idol.name}`));
  const previous = read(stableKey, []);
  const kept = (Array.isArray(previous) ? previous : []).filter(key => !known.has(key));
  const ok = write(stableKey, [...new Set([...kept, ...[...set].map(id => stableKeyById.get(id)).filter(Boolean)])]);
  write(legacyKey, [...set]); // 古いページが開かれても困らないように同じ内容も残す
  return ok;
}

export const store = {
  excluded: () => loadMembers(KEYS.excludedStable, KEYS.excluded),
  saveExcluded: set => saveMembers(KEYS.excludedStable, KEYS.excluded, set),
  shortlist: () => loadMembers(KEYS.shortlistStable, KEYS.shortlist),
  saveShortlist: set => saveMembers(KEYS.shortlistStable, KEYS.shortlist, set),
  presets: () => {
    const value = read(KEYS.presets, {});
    return value && typeof value === "object" ? value : {};
  },
  savePresets: value => write(KEYS.presets, value),
  history: () => {
    const value = read(KEYS.history, []);
    return Array.isArray(value) ? value.filter(Boolean) : [];
  },
  saveHistory: list => write(KEYS.history, list.slice(0, HISTORY_LIMIT)),
  resume: () => read(KEYS.resume, null),
  saveResume: value => write(KEYS.resume, value),
  prefs: () => ({ speed: "normal", name: "", ...read(KEYS.prefs, {}) }),
  savePrefs: value => write(KEYS.prefs, value),
  room: () => read(KEYS.room, null),
  saveRoom: value => write(KEYS.room, value)
};

// 旧版の途中保存は形式が違うので片付ける
try { localStorage.removeItem("kdraftInProgressDraft"); } catch { /* ignore */ }
