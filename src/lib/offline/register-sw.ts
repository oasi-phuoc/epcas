export function registerServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  void navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      reg.addEventListener("updatefound", () => {
        const worker = reg.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state !== "activated") return;
          if (!navigator.serviceWorker.controller) return;
          window.location.reload();
        });
      });
    })
    .catch((err) => {
      console.warn("[EPCAS] SW registration failed", err);
    });
}
