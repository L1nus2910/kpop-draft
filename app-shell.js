/* KDraft app shell
 * サイトの使い勝手を支える仕組みをまとめたファイル（app.js の後に読み込み）。
 * - Service Worker の登録（オフライン起動・高速表示）
 * - ホーム画面への追加（「サイト情報」の中だけに表示）
 * - 上部ナビの現在地表示
 * - 選択肢が少ない設定をボタン切り替え（セグメント）にする
 * - オフライン/オンラインの通知、ショートカットからの起動
 */
(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  document.documentElement.classList.toggle("is-standalone", isStandalone());

  /* ---------- Service Worker ---------- */
  const canUseServiceWorker = "serviceWorker" in navigator &&
    (location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname));
  if (canUseServiceWorker) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(error => {
        console.warn("Service Worker を登録できませんでした", error);
      });
    });
  }

  /* ---------- トースト ---------- */
  const toast = $("appToast");
  let toastTimer = 0;
  function showToast(message, duration = 4200) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => { toast.hidden = true; }, 260);
    }, duration);
  }

  window.addEventListener("offline", () => {
    showToast("オフラインになりました。AIドラフトと「友達と1つの端末で」はこのまま遊べます。", 6000);
  });
  window.addEventListener("online", () => showToast("オンラインに戻りました。"));

  /* ---------- ホーム画面に追加 ---------- */
  let deferredInstallPrompt = null;
  const panel = $("appInstallPanel");
  const panelButton = $("appInstallPanelButton");
  const panelText = $("appInstallText");
  const iosDialog = $("iosInstallDialog");

  function refreshInstallUI() {
    const installed = isStandalone();
    const available = Boolean(deferredInstallPrompt) || (isIOS && !installed);
    if (!panel) return;
    if (installed) {
      panelText.textContent = "ホーム画面のアイコンから開いています。";
      panelButton.hidden = true;
    } else if (available) {
      panelText.textContent = "ホーム画面にアイコンを置くと、すぐに開けます。通信が切れてもAIドラフトで遊べます。";
      panelButton.hidden = false;
    } else {
      panelText.textContent = "ブラウザーのメニューにある「ホーム画面に追加」または「アプリをインストール」から追加できます。";
      panelButton.hidden = true;
    }
  }

  async function requestInstall() {
    if (deferredInstallPrompt) {
      const promptEvent = deferredInstallPrompt;
      deferredInstallPrompt = null;
      promptEvent.prompt();
      const choice = await promptEvent.userChoice.catch(() => null);
      if (choice?.outcome === "accepted") showToast("ホーム画面に追加しました。");
      refreshInstallUI();
      return;
    }
    if (isIOS && iosDialog) {
      $("siteInfoDialog")?.close?.();
      iosDialog.showModal();
    }
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    refreshInstallUI();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    refreshInstallUI();
  });
  panelButton?.addEventListener("click", requestInstall);
  $("iosInstallClose")?.addEventListener("click", () => iosDialog.close());
  iosDialog?.addEventListener("click", event => { if (event.target === iosDialog) iosDialog.close(); });
  refreshInstallUI();

  /* ---------- 上部ナビの現在地 ---------- */
  const topLinks = [...document.querySelectorAll(".topbar nav a[href^='#']")];
  const sections = [
    ["#playSettings", document.getElementById("modePanel")],
    ["#draft", document.getElementById("draft")],
    ["#pool", document.getElementById("pool")]
  ].filter(([, element]) => element);
  function updateCurrentFromScroll() {
    const probe = window.innerHeight * 0.38;
    let current = "";
    for (const [href, element] of sections) {
      if (element.getBoundingClientRect().top <= probe) current = href;
    }
    topLinks.forEach(link => {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  let scrollFrame = 0;
  window.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      updateCurrentFromScroll();
    });
  }, { passive: true });
  updateCurrentFromScroll();

  /* ---------- 少ない選択肢はボタンで切り替え ---------- */
  function segmentize(select) {
    if (!select || select.dataset.segmented) return;
    select.dataset.segmented = "true";
    const field = select.closest("label");
    const labelText = field?.querySelector(".mode-field-label")?.textContent.trim() || "";
    const group = document.createElement("div");
    group.className = "segmented";
    group.setAttribute("role", "radiogroup");
    if (labelText) group.setAttribute("aria-label", labelText);
    const buttons = [...select.options].map(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("role", "radio");
      button.dataset.value = option.value;
      button.textContent = option.textContent.replace(/（.*?）/g, "").trim();
      button.title = option.textContent;
      button.addEventListener("click", () => {
        if (select.value === option.value || select.disabled) return;
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        sync();
      });
      group.append(button);
      return button;
    });
    function sync() {
      buttons.forEach(button => {
        const checked = button.dataset.value === select.value;
        button.setAttribute("aria-checked", String(checked));
        button.tabIndex = checked ? 0 : -1;
        button.disabled = select.disabled;
      });
    }
    group.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const index = buttons.findIndex(button => button.dataset.value === select.value);
      const step = ["ArrowLeft", "ArrowUp"].includes(event.key) ? -1 : 1;
      const next = buttons[(index + step + buttons.length) % buttons.length];
      next.click();
      next.focus();
    });
    select.addEventListener("change", sync);
    // app.js が値や有効/無効を直接変えた場合にも追従する
    new MutationObserver(sync).observe(select, { attributes: true, attributeFilter: ["disabled"] });
    window.setInterval(sync, 1500);
    select.classList.add("is-segmented-source");
    select.setAttribute("aria-hidden", "true");
    select.tabIndex = -1;
    select.after(group);
    if (field) {
      // label の中のボタンを押したとき、select にフォーカスが移らないようにする
      field.addEventListener("click", event => {
        if (event.target.closest(".segmented")) event.preventDefault();
      });
    }
    sync();
  }
  ["playMode", "startOrderMode", "orderMode"].forEach(id => segmentize($(id)));

  /* ---------- ショートカット・URL からの起動 ---------- */
  const params = new URLSearchParams(location.search);
  if (params.get("open") === "history") {
    window.setTimeout(() => document.querySelector(".open-draft-history")?.click(), 200);
  }
  if (params.has("source") || params.has("open")) {
    // 見た目のURLから起動用の印を消す（ルーム招待 ?room= は残す）
    params.delete("source");
    params.delete("open");
    const query = params.toString();
    history.replaceState(null, "", `${location.pathname}${query ? `?${query}` : ""}${location.hash}`);
  }
})();
