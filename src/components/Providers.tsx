"use client";

import { useEffect } from "react";
import { AppStoreProvider } from "@/lib/store";
import { AuthGate } from "@/components/layout/AuthGate";
import { registerServiceWorker } from "@/lib/offline/register-sw";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <AppStoreProvider>
      <AuthGate>{children}</AuthGate>
    </AppStoreProvider>
  );
}
