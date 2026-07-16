const REPAIR_VERSION = "v3";

/**
 * Après un déploiement, d'anciens chunks `/_next/` en cache PWA
 * provoquent l'échec de presque toutes les pages. Purge côté page
 * (fonctionne même tant que l'ancien service worker est actif).
 */
export async function repairPwaCachesAfterDeploy(): Promise<void> {
  if (typeof window === "undefined") return;

  const flag = `epcas-pwa-repair-${REPAIR_VERSION}`;
  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith("epcas-"))
          .map((k) => caches.delete(k)),
      );
    }

    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      await reg?.update();
    }

    if (!sessionStorage.getItem(flag)) {
      sessionStorage.setItem(flag, "1");
    }
  } catch {
    /* réparation best-effort */
  }
}
