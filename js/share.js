// 結果画像（SNS共有用）とテキスト
import { idolById, teamLabel, isDeparted } from "./engine.js";
import { agencyShort, teamColor } from "./ui.js";

const SITE_URL = "https://l1nus2910.github.io/kpop-draft/";
const DISPLAY = '"Dela Gothic One", "Zen Kaku Gothic New", "Hiragino Sans", "Noto Sans JP", sans-serif';
const SANS = '"Zen Kaku Gothic New", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif';

function fitText(ctx, value, x, y, maxWidth, size, { color = "#191430", weight = 700, align = "left", min = 9, family = SANS } = {}) {
  let text = String(value ?? "");
  let px = size;
  const set = () => { ctx.font = `${weight} ${px}px ${family}`; };
  set();
  while (px > min && ctx.measureText(text).width > maxWidth) { px -= 1; set(); }
  if (ctx.measureText(text).width > maxWidth) {
    const chars = Array.from(text);
    while (chars.length > 1 && ctx.measureText(`${chars.join("")}…`).width > maxWidth) chars.pop();
    text = `${chars.join("")}…`;
  }
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function createResultImage(state) {
  try { await document.fonts?.ready; } catch { /* ignore */ }
  const teams = state.teams;
  const rounds = state.settings.pickLimit;
  const cols = Math.max(1, teams.length);
  const width = Math.max(1200, Math.min(2400, 260 + cols * 200));
  const pad = 56;
  const roundW = 96;
  const headerH = 92;
  const lossMax = Math.max(0, ...teams.map(t => (state.losses[t.id] || []).length));
  const rowH = 96;
  const firstRowH = lossMax ? Math.max(rowH, 70 + lossMax * 30) : rowH;
  const titleH = 170;
  const footH = 70;
  const tableW = width - pad * 2;
  const colW = (tableW - roundW) / cols;
  const height = pad + titleH + headerH + firstRowH + (rounds - 1) * rowH + footH;
  const scale = 1;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("画像を作れませんでした。");

  // 背景
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#0d1330");
  bg.addColorStop(1, "#1d2a63");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);
  const glow = ctx.createRadialGradient(width * 0.85, 0, 10, width * 0.85, 0, width * 0.6);
  glow.addColorStop(0, "rgba(214,176,98,0.35)");
  glow.addColorStop(1, "rgba(214,176,98,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
  // ホロの線
  const holo = ctx.createLinearGradient(pad, 0, width - pad, 0);
  ["#ff9fd6", "#ffd6a0", "#b9f3d6", "#a0d8ff", "#c9b6ff"].forEach((c, i, a) => holo.addColorStop(i / (a.length - 1), c));
  ctx.fillStyle = holo;
  ctx.fillRect(pad, pad - 8, 120, 4);

  fitText(ctx, "KDRAFT  ドラフト結果", pad, pad + 24, tableW, 20, { color: "#d6b062", weight: 700 });
  const total = teams.reduce((sum, t) => sum + (state.picks[t.id] || []).length, 0);
  fitText(ctx, "最終ドラフト結果", pad, pad + 84, tableW, 52, { color: "#ffffff", weight: 400, family: DISPLAY });
  fitText(ctx, `${cols}チーム・${rounds}巡・合計${total}人`, pad, pad + 136, tableW, 20, { color: "rgba(255,255,255,0.7)", weight: 700 });

  const tx = pad;
  const ty = pad + titleH;
  // 表の土台
  roundRect(ctx, tx, ty, tableW, headerH + firstRowH + (rounds - 1) * rowH, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.save();
  ctx.clip();

  ctx.fillStyle = "#f3f0f9";
  ctx.fillRect(tx, ty, roundW, headerH + firstRowH + (rounds - 1) * rowH);
  fitText(ctx, "巡目", tx + roundW / 2, ty + headerH / 2, roundW - 10, 16, { color: "#7a7493", align: "center" });

  teams.forEach((team, index) => {
    const x = tx + roundW + colW * index;
    const color = teamColor(index);
    const head = ctx.createLinearGradient(x, ty, x, ty + headerH);
    head.addColorStop(0, color);
    head.addColorStop(1, color + "cc");
    ctx.fillStyle = head;
    ctx.fillRect(x, ty, colW, headerH);
    fitText(ctx, teamLabel(state, team.id), x + colW / 2, ty + 38, colW - 18, 21, { color: "#fff", weight: 900, align: "center", min: 11 });
    fitText(ctx, isDeparted(state, team.id) ? "退出" : `${(state.picks[team.id] || []).length}/${rounds}人`, x + colW / 2, ty + 66, colW - 18, 14, { color: "rgba(255,255,255,0.85)", align: "center" });
  });

  let y = ty + headerH;
  for (let round = 1; round <= rounds; round += 1) {
    const h = round === 1 ? firstRowH : rowH;
    ctx.fillStyle = "#e3deed";
    ctx.fillRect(tx, y, tableW, 1);
    fitText(ctx, `${round}`, tx + roundW / 2, y + h / 2, roundW - 10, 28, { color: "#463f60", weight: 400, align: "center", family: DISPLAY });
    teams.forEach((team, index) => {
      const x = tx + roundW + colW * index;
      if (index > 0 || true) { ctx.fillStyle = "#e3deed"; ctx.fillRect(x, y, 1, h); }
      const pick = (state.picks[team.id] || []).find(p => p.round === round);
      const losses = round === 1 ? (state.losses[team.id] || []) : [];
      let cy = y + (h - (losses.length * 30 + 52)) / 2 + 6;
      losses.forEach(id => {
        const lost = idolById.get(id);
        fitText(ctx, `${lost?.japaneseName || ""}（抽選外れ）`, x + colW / 2, cy + 8, colW - 20, 13, { color: "#a9a4bd", align: "center", weight: 500 });
        cy += 30;
      });
      if (!pick) {
        fitText(ctx, "—", x + colW / 2, y + h / 2, colW - 20, 18, { color: "#d3cce3", align: "center" });
        return;
      }
      const idol = idolById.get(pick.idolId);
      fitText(ctx, idol?.japaneseName || "", x + colW / 2, cy + 14, colW - 20, 22, { color: "#191430", weight: 900, align: "center", min: 11 });
      fitText(ctx, [agencyShort(idol), idol?.group].filter(Boolean).join(" · "), x + colW / 2, cy + 40, colW - 20, 13, { color: "#7a7493", align: "center", weight: 700 });
    });
    y += h;
  }
  ctx.restore();

  fitText(ctx, "KDraft — 非公式ファン制作のK-POPドラフトゲーム", pad, height - footH / 2 - 4, tableW - 300, 15, { color: "rgba(255,255,255,0.65)" });
  fitText(ctx, "#KDraft", width - pad, height - footH / 2 - 4, 300, 18, { color: "#d6b062", align: "right", weight: 900 });

  const blob = await new Promise((resolve, reject) => canvas.toBlob(b => (b ? resolve(b) : reject(new Error("画像を書き出せませんでした。"))), "image/png"));
  return new File([blob], "kdraft-result.png", { type: "image/png" });
}

export function resultText(state) {
  const lines = ["KDraft ドラフト結果"];
  state.teams.forEach(team => {
    const names = (state.picks[team.id] || []).slice().sort((a, b) => a.round - b.round)
      .map(p => idolById.get(p.idolId)?.japaneseName).filter(Boolean);
    lines.push(`【${teamLabel(state, team.id)}】${names.join("・")}`);
  });
  lines.push("#KDraft", SITE_URL);
  return lines.join("\n");
}

export async function shareResult(state) {
  const image = await createResultImage(state);
  const text = `#KDraft\n${SITE_URL}`;
  const canShareFiles = typeof navigator.share === "function" && (typeof navigator.canShare !== "function" || navigator.canShare({ files: [image] }));
  if (canShareFiles) {
    try {
      await navigator.share({ files: [image], text, title: "KDraft ドラフト結果" });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") return "cancelled";
    }
  }
  const url = URL.createObjectURL(image);
  const link = document.createElement("a");
  link.href = url;
  link.download = image.name;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  return "downloaded";
}

export function xIntentUrl() {
  const url = new URL("https://twitter.com/intent/tweet");
  url.searchParams.set("text", `#KDraft\n${SITE_URL}`);
  return url.toString();
}
