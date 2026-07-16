"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { isClientSupabaseConfigured } from "@/lib/sync/types";

/** Recharge pratique Office, évaluations et org depuis Supabase (sans ré-envoyer). */
export function SharedContentSyncHost() {
  const { hydrated, refreshSharedContentFromServer } = useAppStore();

  useEffect(() => {
    if (!hydrated || !isClientSupabaseConfigured()) return;

    void refreshSharedContentFromServer();

    const onFocus = () => void refreshSharedContentFromServer();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [hydrated, refreshSharedContentFromServer]);

  return null;
}
