// 端末内の保存（localStorage）。どれも失敗してもゲームは止めない。
// キー名は旧版と互換のものはそのまま使う（除外・保存条件・履歴）。

const KEYS = {
  excluded: "stagePickExcluded",
  presets: "stagePickPresets",
  history: "kdraftCompletedDraftHistory",
  resume: "kdraftResumeV2",
  shortlist: "kdraftShortlist",
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

export const store = {
  excluded: () => new Set(read(KEYS.excluded, [])),
  saveExcluded: set => write(KEYS.excluded, [...set]),
  shortlist: () => new Set(read(KEYS.shortlist, [])),
  saveShortlist: set => write(KEYS.shortlist, [...set]),
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
