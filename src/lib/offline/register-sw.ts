import { repairPwaCachesAfterDeploy } from "@/lib/offline/repair-pwa-caches";

export function registerServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  void (async () => {
    await repairPwaCachesAfterDeploy();

    try {
      const reg = await navigator.serviceWorker.register("/sw.js", {
        updateViaCache: "none",
      });

      reg.addEventListener("updatefound", () => {
        const worker = reg.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state !== "activated") return;
          if (!navigator.serviceWorker.controller) return;
          void repairPwaCachesAfterDeploy().then(() => window.location.reload());
        });
      });

      await reg.update();
    } catch (err) {
      console.warn("[EPCAS] SW registration failed", err);
    }
  })();
}
