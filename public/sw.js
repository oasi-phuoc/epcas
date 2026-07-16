/* EPCAS Logistique — service worker hors-ligne */
const CACHE_VERSION = "v2";
const SHELL_CACHE = `epcas-shell-${CACHE_VERSION}`;
const CONTENT_CACHE = `epcas-content-${CACHE_VERSION}`;

const SHELL_URLS = [
  "/",
  "/connexion",
  "/accueil",
  "/theorie",
  "/exercices",
  "/blancs",
  "/parametres",
  "/manifest.webmanifest",
];

function isNextAsset(pathname) {
  return pathname.startsWith("/_next/");
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== SHELL_CACHE && k !== CONTENT_CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Chunks Next.js : toujours le réseau (évite pages cassées après déploiement).
  if (isNextAsset(url.pathname)) {
    event.respondWith(fetch(req));
    return;
  }

  if (url.pathname === "/api/content/manifest") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          void caches.open(CONTENT_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((c) => c ?? Response.error())),
    );
    return;
  }

  if (url.pathname.startsWith("/api/content/lessons/")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            void caches.open(CONTENT_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((c) => c ?? Response.error())),
    );
    return;
  }

  const isDocument =
    req.mode === "navigate" ||
    (req.headers.get("accept")?.includes("text/html") ?? false);

  if (isDocument) {
    event.respondWith(
      fetch(req)
        .then((res) => res)
        .catch(() =>
          caches.match(req).then((c) => c ?? caches.match("/accueil")),
        ),
    );
    return;
  }

  // Autres assets statiques : réseau d'abord, cache en secours.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok && SHELL_URLS.includes(url.pathname)) {
          const copy = res.clone();
          void caches.open(SHELL_CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((c) => c ?? Response.error())),
  );
});
