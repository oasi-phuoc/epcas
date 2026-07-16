/* EPCAS — cache limité au contenu leçons (ne pas intercepter Next.js / navigation). */
const CACHE_VERSION = "v3";
const CONTENT_CACHE = `epcas-content-${CACHE_VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CONTENT_CACHE)
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

  const isContentApi =
    url.pathname === "/api/content/manifest" ||
    url.pathname.startsWith("/api/content/lessons/");

  if (!isContentApi) return;

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
});
