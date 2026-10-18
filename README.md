# KDraft — K-POPガールズグループ・ドラフト

推しでつくる、夢のドラフト。プロ野球のドラフト会議と同じ進め方（1巡目は入札・重複は抽選・2巡目からウェーバー）で、K-POPガールズグループのメンバーを指名してチームを組む、非公式のファン制作ゲームです。

https://l1nus2910.github.io/kpop-draft/

## ファイル構成

| ファイル | 中身 |
| --- | --- |
| `index.html` | ページの骨組み（画面はすべて JS で描画） |
| `css/app.css` | 見た目のすべて |
| `js/data.js` | 候補データ（グループ・メンバー・事務所・人気データ）。**メンバーの追加・修正はここ** |
| `js/engine.js` | ドラフトのルール（入札・抽選・再入札・指名順）。画面から独立 |
| `js/ai.js` | AI の指名ロジック |
| `js/app.js` | 画面の切り替え・操作・進行 |
| `js/online.js` | オンラインドラフト（Firebase） |
| `js/share.js` | 結果画像の作成・共有 |
| `js/store.js` / `js/ui.js` | 端末への保存 / 小さな部品 |
| `sw.js` | オフライン対応・高速表示 |
| `firebase-config.js` / `firebase-database-rules.json` | Firebase の設定とデータベースのルール |
| `test/engine.test.mjs` | ルールの自動テスト |

## 更新するとき

1. ファイルを編集する
2. ルールに関わる変更をしたら `node test/engine.test.mjs` でテスト
3. **`node tools/bump-version.mjs` を実行**（CSS・JS の `?v=` をまとめて更新。これを忘れると、見る人の端末に古いファイルが残ることがあります）
4. コミットして push

## 画面

ホーム → 設定 → ドラフト → 結果 の順に画面が切り替わります（URL の `#/` 以降で管理）。
`#/history`（過去のドラフト）と `#/about`（サイト情報）は上部メニューから開けます。
