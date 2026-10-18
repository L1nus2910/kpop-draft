// 画面づくりの小さな部品
import { fullAgencyName, shortAgencyName } from "./data.js";

export const TEAM_COLORS = [
  "#d8405f", "#2f66d4", "#11998a", "#e0861b", "#8550e2",
  "#2f9a4e", "#d1418c", "#1a8bb2", "#b3861c", "#5465a8"
];

export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

export function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

export function teamColor(index) {
  return TEAM_COLORS[((index % TEAM_COLORS.length) + TEAM_COLORS.length) % TEAM_COLORS.length];
}

/** グループ名から毎回同じ色相を作る（モノグラムの色） */
const hueCache = new Map();
export function groupHue(group) {
  if (hueCache.has(group)) return hueCache.get(group);
  let hash = 0;
  for (const char of String(group)) hash = (hash * 31 + char.codePointAt(0)) >>> 0;
  const hue = hash % 360;
  hueCache.set(group, hue);
  return hue;
}

export function monogram(idol, extraClass = "") {
  const first = Array.from(idol?.japaneseName || idol?.name || "?")[0];
  return `<span class="monogram ${extraClass}" style="--h:${groupHue(idol?.group || "")}" aria-hidden="true">${esc(first)}</span>`;
}

export function agencyShort(idol) {
  return shortAgencyName(fullAgencyName(idol?.group, idol?.agency));
}
export function agencyFull(idol) {
  return fullAgencyName(idol?.group, idol?.agency);
}

export function stars(count) {
  const n = Math.max(1, Math.min(5, Number(count) || 1));
  return `<span class="stars" aria-label="人気参考 星${n}つ">${"★".repeat(n)}<span class="off">${"★".repeat(5 - n)}</span></span>`;
}

const ICONS = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  ban: '<circle cx="12" cy="12" r="8"/><path d="m6.5 6.5 11 11"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5"/>',
  users: '<circle cx="9" cy="9" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="8" r="2.6"/><path d="M15.5 13.6A4.6 4.6 0 0 1 21 18"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17"/>',
  menu: '<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
  share: '<path d="M12 3.5v11M8 7.5l4-4 4 4"/><path d="M5 12.5V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.5"/>',
  copy: '<rect x="8" y="8" width="11" height="11" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  play: '<path d="M8 5.5v13l10-6.5z"/>',
  refresh: '<path d="M4.5 12a7.5 7.5 0 0 1 13-5.1M19.5 12a7.5 7.5 0 0 1-13 5.1"/><path d="M17.8 3.8v3.4h-3.4M6.2 20.2v-3.4h3.4"/>',
  home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="m4 18 5-5 4 4 3-3 4 4"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  envelope: '<rect x="3.5" y="6" width="17" height="12.5" rx="2"/><path d="m4 7 8 6 8-6"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>'
};
export function icon(name, extraClass = "") {
  return `<svg class="icon ${extraClass}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

export function formatDate(timestamp) {
  try {
    return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(timestamp));
  } catch {
    return "";
  }
}

export const MODE_LABEL = { ai: "AIドラフト", local: "1台で対戦", online: "オンライン" };

export function reducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

let toastSeq = 0;
export function toast(message, { color = "", duration = 3600, slot = "" } = {}) {
  const box = document.getElementById("toasts");
  if (!box) return;
  if (slot) box.querySelectorAll(`[data-slot="${slot}"]`).forEach(el => el.remove());
  const element = document.createElement("div");
  if (slot) element.dataset.slot = slot;
  element.className = "toast";
  element.dataset.id = String(++toastSeq);
  if (color) element.style.setProperty("--team-color", color);
  element.innerHTML = `<i aria-hidden="true"></i><span>${esc(message)}</span>`;
  box.append(element);
  while (box.children.length > 3) box.firstElementChild.remove();
  window.setTimeout(() => {
    element.classList.add("is-leaving");
    window.setTimeout(() => element.remove(), 260);
  }, duration);
}

/** window.confirm の代わり（見た目をそろえる） */
export function confirmDialog({ title, message, ok = "OK", cancel = "キャンセル", danger = false }) {
  return new Promise(resolve => {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
      <form method="dialog" class="modal-body">
        <h2 id="modalTitle">${esc(title)}</h2>
        ${message ? `<p>${esc(message)}</p>` : ""}
        <div class="modal-actions">
          <button class="btn btn-ghost" value="cancel">${esc(cancel)}</button>
          <button class="btn ${danger ? "btn-danger" : "btn-primary"}" value="ok">${esc(ok)}</button>
        </div>
      </form>`;
    modal.addEventListener("close", () => resolve(modal.returnValue === "ok"), { once: true });
    modal.showModal();
    modal.querySelector(`button[value="${danger ? "cancel" : "ok"}"]`)?.focus();
  });
}

/** window.prompt の代わり */
export function promptDialog({ title, label, value = "", ok = "保存", placeholder = "" }) {
  return new Promise(resolve => {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
      <form method="dialog" class="modal-body">
        <h2 id="modalTitle">${esc(title)}</h2>
        <label class="field"><span class="field-label">${esc(label)}</span>
          <input class="input" name="value" maxlength="30" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off"></label>
        <div class="modal-actions">
          <button class="btn btn-ghost" value="cancel" formnovalidate>キャンセル</button>
          <button class="btn btn-primary" value="ok">${esc(ok)}</button>
        </div>
      </form>`;
    const input = modal.querySelector("input");
    modal.addEventListener("close", () => resolve(modal.returnValue === "ok" ? input.value.trim() : null), { once: true });
    modal.showModal();
    input.select();
  });
}

/** 選択肢を並べた小さなメニュー */
export function menuDialog({ title, items }) {
  return new Promise(resolve => {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
      <form method="dialog" class="modal-body">
        <h2 id="modalTitle">${esc(title)}</h2>
        <div class="sheet-list">
          ${items.map(item => `<button value="${esc(item.value)}" class="${item.danger ? "is-danger" : ""}">${item.icon ? icon(item.icon) : ""}${esc(item.label)}</button>`).join("")}
        </div>
        <div class="modal-actions"><button class="btn btn-ghost" value="">閉じる</button></div>
      </form>`;
    modal.addEventListener("close", () => resolve(modal.returnValue || null), { once: true });
    modal.showModal();
  });
}
