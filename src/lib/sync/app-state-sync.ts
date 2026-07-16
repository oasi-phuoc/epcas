import type { AppState } from "@/lib/types";
import {
  isClientSupabaseConfigured,
  readSyncMeta,
  stripLocalSession,
  writeSyncMeta,
  type SyncMeta,
} from "@/lib/sync/types";

export type PullResult =
  | { ok: true; configured: false }
  | {
      ok: true;
      configured: true;
      empty: boolean;
      revision: number;
      updatedAt: string | null;
      payload: AppState | null;
    }
  | { ok: false; configured: boolean; error: string };

export type PushResult =
  | { ok: true; configured: false }
  | { ok: true; configured: true; revision: number; updatedAt: string }
  | { ok: false; configured: boolean; error: string };

export async function pullAppState(): Promise<PullResult> {
  if (!isClientSupabaseConfigured()) {
    return { ok: true, configured: false };
  }

  try {
    const res = await fetch("/api/sync/state", { method: "GET", cache: "no-store" });
    const json = (await res.json()) as {
      ok: boolean;
      configured?: boolean;
      empty?: boolean;
      revision?: number;
      updatedAt?: string | null;
      payload?: AppState | null;
      error?: string;
    };

    if (!res.ok || !json.ok) {
      return {
        ok: false,
        configured: Boolean(json.configured),
        error: json.error ?? `HTTP ${res.status}`,
      };
    }

    if (!json.configured) {
      return { ok: true, configured: false };
    }

    return {
      ok: true,
      configured: true,
      empty: Boolean(json.empty),
      revision: json.revision ?? 0,
      updatedAt: json.updatedAt ?? null,
      payload: json.payload ?? null,
    };
  } catch (e) {
    return {
      ok: false,
      configured: true,
      error: e instanceof Error ? e.message : "Erreur réseau",
    };
  }
}

export async function pushAppState(state: AppState): Promise<PushResult> {
  if (!isClientSupabaseConfigured()) {
    return { ok: true, configured: false };
  }

  const meta = readSyncMeta();
  try {
    const res = await fetch("/api/sync/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: stripLocalSession(state),
        baseRevision: meta.revision,
      }),
    });
    const json = (await res.json()) as {
      ok: boolean;
      configured?: boolean;
      revision?: number;
      updatedAt?: string;
      error?: string;
    };

    if (!res.ok || !json.ok) {
      return {
        ok: false,
        configured: Boolean(json.configured),
        error: json.error ?? `HTTP ${res.status}`,
      };
    }

    if (!json.configured) {
      return { ok: true, configured: false };
    }

    return {
      ok: true,
      configured: true,
      revision: json.revision ?? meta.revision + 1,
      updatedAt: json.updatedAt ?? new Date().toISOString(),
    };
  } catch (e) {
    return {
      ok: false,
      configured: true,
      error: e instanceof Error ? e.message : "Erreur réseau",
    };
  }
}

export function applyPullMeta(
  pull: Extract<PullResult, { ok: true; configured: true }>,
): SyncMeta {
  const prev = readSyncMeta();
  const next: SyncMeta = {
    ...prev,
    revision: pull.revision,
    updatedAt: pull.updatedAt,
    lastPulledAt: new Date().toISOString(),
    lastError: undefined,
  };
  writeSyncMeta(next);
  return next;
}

export function applyPushMeta(
  push: Extract<PushResult, { ok: true; configured: true }>,
): SyncMeta {
  const prev = readSyncMeta();
  const next: SyncMeta = {
    ...prev,
    revision: push.revision,
    updatedAt: push.updatedAt,
    lastPushedAt: new Date().toISOString(),
    lastError: undefined,
  };
  writeSyncMeta(next);
  return next;
}

export function applySyncError(error: string): SyncMeta {
  const prev = readSyncMeta();
  const next = { ...prev, lastError: error };
  writeSyncMeta(next);
  return next;
}
