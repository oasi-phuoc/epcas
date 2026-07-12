import type { AppState } from "@/lib/types";

export const SYNC_META_KEY = "epcas-sync-meta-v1";
export const APP_STATE_SYNC_ID = "default";

export type SyncMeta = {
  revision: number;
  updatedAt: string | null;
  lastPulledAt: string | null;
  lastPushedAt: string | null;
  lastError?: string;
};

export type RemoteAppStateRow = {
  id: string;
  payload: AppState;
  revision: number;
  updated_at: string;
};

/** État synchronisable : sans session locale. */
export function stripLocalSession(state: AppState): AppState {
  return { ...state, currentUserId: null };
}

export function readSyncMeta(): SyncMeta {
  if (typeof window === "undefined") {
    return {
      revision: 0,
      updatedAt: null,
      lastPulledAt: null,
      lastPushedAt: null,
    };
  }
  try {
    const raw = localStorage.getItem(SYNC_META_KEY);
    if (!raw) {
      return {
        revision: 0,
        updatedAt: null,
        lastPulledAt: null,
        lastPushedAt: null,
      };
    }
    return JSON.parse(raw) as SyncMeta;
  } catch {
    return {
      revision: 0,
      updatedAt: null,
      lastPulledAt: null,
      lastPushedAt: null,
    };
  }
}

export function writeSyncMeta(meta: SyncMeta) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SYNC_META_KEY, JSON.stringify(meta));
  window.dispatchEvent(new Event("epcas-sync-meta"));
}

export function isClientSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
