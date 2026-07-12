/* EPCAS Logistique — service worker hors-ligne */
const SHELL_CACHE = "epcas-shell-v1";
const CONTENT_CACHE = "epcas-content-v1";

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

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_URLS)).then(() => {
      return self.skipWaiting();
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== SHELL_CACHE && k !== CONTENT_CACHE)
          .map((k) => caches.delete(k)),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Manifeste : réseau d'abord
  if (url.pathname === "/api/content/manifest") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CONTENT_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || Response.error())),
    );
    return;
  }

  // Packs leçons : cache après réseau
  if (url.pathname.startsWith("/api/content/lessons/")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CONTENT_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || Response.error())),
    );
    return;
  }

  // Navigation / assets : cache-first avec fallback réseau
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res.ok && (url.pathname.startsWith("/_next/") || SHELL_URLS.includes(url.pathname))) {
            const copy = res.clone();
            caches.open(SHELL_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match("/accueil").then((c) => c || Response.error()));
    }),
  );
});
