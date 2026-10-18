/* KDraft Service Worker
 * - ページ本体はネット優先（つながらない・遅いときは保存済みを表示）
 * - ?v= 付きの CSS/JS や画像は保存済みを優先して高速表示
 * - Firebase の通信（オンラインドラフト）には手を出さない
 * ふだんの更新ではこのファイルを書き換える必要はありません。
 * キャッシュの作り方そのものを変えたときだけ SW_VERSION を上げてください。
 */
const SW_VERSION = "kdraft-sw-1";
const PAGE_CACHE = `${SW_VERSION}-pages`;
const ASSET_CACHE = `${SW_VERSION}-assets`;
const SDK_CACHE = `${SW_VERSION}-sdk`;
const SCOPE = new URL(self.registration.scope);
const INDEX_URL = new URL("./", SCOPE).href;
const NETWORK_TIMEOUT_MS = 3500;

const CORE_ASSETS = [
  "manifest.webmanifest",
  "firebase-config.js",
  "app-shell.js",
  "assets/kdraft-48.png",
  "assets/kdraft-192-v3.png",
  "assets/kdraft-512-v4.png",
  "assets/kdraft-maskable-192.png",
  "assets/kdraft-maskable-512.png",
  "assets/kdraft-apple-touch-icon-v3.png"
].map(path => new URL(path, SCOPE).href);

function localReferences(html) {
  const refs = new Set();
  const pattern = /(?:src|href|srcset)="([^"]+)"/g;
  let match;
  while ((match = pattern.exec(html))) {
    match[1].split(",").forEach(part => {
      const raw = part.trim().split(/\s+/)[0];
      if (!raw || raw.startsWith("#") || raw.startsWith("data:") || raw.startsWith("mailto:")) return;
      const url = new URL(raw, SCOPE);
      if (url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return;
      if (url.pathname === SCOPE.pathname || url.pathname.endsWith(".html")) return;
      refs.add(url.href);
    });
  }
  return [...refs];
}

async function pruneOutdatedVersions(currentRefs) {
  // 同じファイルの古い ?v= 版を消して、容量が増え続けないようにする
  const current = new Map(currentRefs.map(href => {
    const url = new URL(href);
    return [url.pathname, url.search];
  }));
  const cache = await caches.open(ASSET_CACHE);
  for (const request of await cache.keys()) {
    const url = new URL(request.url);
    if (current.has(url.pathname) && current.get(url.pathname) !== url.search) {
      await cache.delete(request);
    }
  }
}

async function precacheFromPage(response) {
  const html = await response.clone().text();
  const refs = localReferences(html);
  const cache = await caches.open(ASSET_CACHE);
  await Promise.all([...new Set([...refs, ...CORE_ASSETS])].map(async href => {
    if (await cache.match(href)) return;
    try {
      const res = await fetch(href, { cache: "no-cache" });
      if (res.ok) await cache.put(href, res);
    } catch {
      // 一部が取れなくてもインストールは続ける
    }
  }));
  await pruneOutdatedVersions(refs);
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const response = await fetch(INDEX_URL, { cache: "no-cache" });
    if (response.ok) {
      const pages = await caches.open(PAGE_CACHE);
      await pages.put(INDEX_URL, response.clone());
      await precacheFromPage(response);
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keep = new Set([PAGE_CACHE, ASSET_CACHE, SDK_CACHE]);
    for (const key of await caches.keys()) {
      if (key.startsWith("kdraft-") && !keep.has(key)) await caches.delete(key);
    }
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable().catch(() => {});
    }
    await self.clients.claim();
  })());
});

function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));
}

async function handleNavigation(event) {
  const pages = await caches.open(PAGE_CACHE);
  const network = (async () => {
    const preloaded = await event.preloadResponse;
    const response = preloaded || await fetch(event.request);
    if (response.ok && response.type === "basic") {
      // クエリ（?room= など）が違っても同じページとして保存する
      await pages.put(INDEX_URL, response.clone());
      event.waitUntil(precacheFromPage(response.clone()));
    }
    return response;
  })();
  try {
    return await Promise.race([network, timeout(NETWORK_TIMEOUT_MS)]);
  } catch {
    const cached = await pages.match(INDEX_URL);
    if (cached) return cached;
    return network;
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) await cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(event, cacheName = ASSET_CACHE) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);
  const refresh = fetch(event.request).then(async response => {
    if (response.ok) await cache.put(event.request, response.clone());
    return response;
  });
  if (cached) {
    event.waitUntil(refresh.catch(() => {}));
    return cached;
  }
  return refresh;
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  if (request.mode === "navigate" && url.origin === SCOPE.origin && url.pathname.startsWith(SCOPE.pathname)) {
    event.respondWith(handleNavigation(event));
    return;
  }

  // Firebase SDK はバージョン付きURLなので保存済みを使う（認証・DB通信は対象外）
  if (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) {
    event.respondWith(cacheFirst(request, SDK_CACHE));
    return;
  }

  // Google Fonts：CSS はこまめに更新、フォント本体は保存済みを使う
  if (url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(request, SDK_CACHE));
    return;
  }
  if (url.hostname === "fonts.googleapis.com") {
    event.respondWith(staleWhileRevalidate(event, SDK_CACHE));
    return;
  }

  if (url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return;
  if (url.pathname.endsWith("/sw.js")) return;

  if (url.search.includes("v=")) {
    event.respondWith(cacheFirst(request, ASSET_CACHE));
  } else {
    event.respondWith(staleWhileRevalidate(event));
  }
});

self.addEventListener("message", event => {
  if (event.data === "kdraft:skip-waiting") self.skipWaiting();
});
