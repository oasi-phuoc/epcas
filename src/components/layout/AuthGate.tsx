"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { AppShell } from "@/components/layout/AppShell";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { currentUser, hydrated } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!hydrated) return;
    if (!currentUser && pathname !== "/connexion" && pathname !== "/") {
      router.replace("/connexion");
    }
  }, [currentUser, hydrated, pathname, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-ink-muted">
        Chargement…
      </div>
    );
  }

  if (!currentUser) {
    return <>{children}</>;
  }

  if (pathname === "/" || pathname === "/connexion") {
    return <>{children}</>;
  }

  return <AppShell>{children}</AppShell>;
}
