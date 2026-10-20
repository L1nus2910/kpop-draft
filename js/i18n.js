// 表示する言語（日本語・韓国語・英語）
// 文はすべて日本語で書いてあり、tr("日本語") で今の言語の文に置き換える。
// 韓国語・英語の文は js/lang/ko.js・en.js にあり、使う言語のものだけを読み込む（日本語は読み込みなし）。
export const LANGS = [["ja", "日本語"], ["ko", "한국어"], ["en", "English"]];
const KEY = "kdraftLang";

export function detectLang() {
  if (typeof window === "undefined") return "ja"; // テストなどブラウザ以外では日本語
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && LANGS.some(([code]) => code === saved)) return saved;
  } catch { /* ignore */ }
  const list = (typeof navigator !== "undefined" && (navigator.languages?.length ? navigator.languages : [navigator.language])) || [];
  for (const raw of list) {
    const code = String(raw || "").toLowerCase();
    if (code.startsWith("ja")) return "ja";
    if (code.startsWith("ko")) return "ko";
    if (code.startsWith("en")) return "en";
  }
  return list.length ? "en" : "ja";
}

export let lang = "ja";
let dict = {};

export async function initLang(code = detectLang()) {
  lang = LANGS.some(([c]) => c === code) ? code : "ja";
  if (lang !== "ja") {
    try {
      dict = (lang === "ko" ? await import("./lang/ko.js") : await import("./lang/en.js")).default || {};
    } catch {
      lang = "ja"; dict = {};
    }
  }
  if (typeof document !== "undefined") document.documentElement.lang = lang;
  return lang;
}

/** 選んだ言語を覚えて、ページを読み込み直す（途中のドラフトやルームはそのまま） */
export function setLang(code) {
  try { localStorage.setItem(KEY, code); } catch { /* ignore */ }
  location.reload();
}

/** 日本語の文を今の言語にする。{name} は params の値に置き換える */
export function tr(ja, params) {
  let text = lang === "ja" ? ja : (dict[ja] ?? ja);
  if (params) text = text.replace(/\{(\w+)\}/g, (m, k) => (params[k] ?? m));
  return text;
}

/** 数の後ろにつく言葉（英語だけ複数形） */
export const isEnglish = () => lang === "en";

// ほかのモジュールより先に言語を決めておく（このファイルを読み込んだ時点で準備完了）
await initLang();
