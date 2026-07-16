"use client";

import { useEffect } from "react";
import { AppStoreProvider } from "@/lib/store";
import { AuthGate } from "@/components/layout/AuthGate";
import { TrackingSyncHost } from "@/components/TrackingSyncHost";
import { registerServiceWorker } from "@/lib/offline/register-sw";
import { repairPwaCachesAfterDeploy } from "@/lib/offline/repair-pwa-caches";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void repairPwaCachesAfterDeploy();
    registerServiceWorker();
  }, []);

  return (
    <AppStoreProvider>
      <TrackingSyncHost />
      <AuthGate>{children}</AuthGate>
    </AppStoreProvider>
  );
}
