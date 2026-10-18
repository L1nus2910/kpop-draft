// CSS や JS を変更したら実行：node tools/bump-version.mjs
// index.html の ?v=（CSS・JS・import map）をまとめて今日の日付＋連番に書き換えます。
import fs from "node:fs";
const file = new URL("../index.html", import.meta.url);
const html = fs.readFileSync(file, "utf8");
const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const current = html.match(/\?v=(\d{8})-v2-(\d+)/);
const n = current && current[1] === today ? Number(current[2]) + 1 : 1;
const next = `${today}-v2-${n}`;
const updated = html.replace(/\?v=\d{8}-v2-\d+/g, `?v=${next}`);
fs.writeFileSync(file, updated);
console.log(`バージョンを ${next} にしました`);
