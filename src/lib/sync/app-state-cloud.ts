import { initialState } from "@/lib/demo-data";
import { createServiceClient, isSupabaseConfigured } from "@/lib/supabase/service";
import { APP_STATE_SYNC_ID } from "@/lib/sync/types";
import type { AppState } from "@/lib/types";

export type PublishResult = {
  ok: boolean;
  configured: boolean;
  error?: string;
  revision?: number;
};

export async function loadRemoteAppStateRow(): Promise<{
  payload: AppState;
  revision: number;
} | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = createServiceClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("sync_app_state")
    .select("payload, revision")
    .eq("id", APP_STATE_SYNC_ID)
    .maybeSingle();

  if (error || !data?.payload) return null;
  return {
    payload: data.payload as AppState,
    revision: data.revision ?? 0,
  };
}

export function baseAppStatePayload(): AppState {
  return { ...initialState, currentUserId: null };
}

export async function patchRemoteAppState(
  mutator: (current: AppState) => AppState,
): Promise<PublishResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, configured: false, error: "Supabase non configuré" };
  }
  const supabase = createServiceClient();
  if (!supabase) {
    return { ok: false, configured: false, error: "Client Supabase indisponible" };
  }

  const row = await loadRemoteAppStateRow();
  const current = row?.payload ?? baseAppStatePayload();
  const payload = mutator({ ...current, currentUserId: null });
  const nextRevision = (row?.revision ?? 0) + 1;
  const updatedAt = new Date().toISOString();

  const { data, error } = await supabase
    .from("sync_app_state")
    .upsert(
      {
        id: APP_STATE_SYNC_ID,
        payload: { ...payload, currentUserId: null },
        revision: nextRevision,
        updated_at: updatedAt,
      },
      { onConflict: "id" },
    )
    .select("revision")
    .single();

  if (error) {
    return { ok: false, configured: true, error: error.message };
  }

  return { ok: true, configured: true, revision: data.revision };
}

export async function publishRemotePatch(
  mutator: (current: AppState) => AppState,
): Promise<void> {
  try {
    const result = await patchRemoteAppState(mutator);
    if (!result.ok || typeof result.revision !== "number") return;
    const { readSyncMeta, writeSyncMeta } = await import("@/lib/sync/types");
    const meta = readSyncMeta();
    writeSyncMeta({
      ...meta,
      revision: Math.max(meta.revision, result.revision),
      lastPushedAt: new Date().toISOString(),
    });
  } catch {
    /* publication best-effort */
  }
}
