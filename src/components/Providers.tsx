"use client";

import { AppStoreProvider } from "@/lib/store";
import { AuthGate } from "@/components/layout/AuthGate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppStoreProvider>
      <AuthGate>{children}</AuthGate>
    </AppStoreProvider>
  );
}
