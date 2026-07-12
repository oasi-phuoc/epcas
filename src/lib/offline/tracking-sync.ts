import { createClient } from "@/lib/supabase/client";
import type { AttemptRecord, LessonProgress } from "@/lib/types";
import {
  countPendingOutbox,
  listPendingOutbox,
  markOutboxSynced,
  type TrackingOutboxItem,
} from "./tracking-outbox";

const HUB_KEY = "epcas-tracking-hub-v1";

export type TrackingHub = {
  updatedAt: string;
  progress: Record<string, LessonProgress[]>;
  attempts: AttemptRecord[];
};

export type TrackingSyncResult = {
  ok: boolean;
  pendingBefore: number;
  flushed: number;
  mode: "offline" | "hub" | "supabase" | "hub+supabase";
  error?: string;
};

function readHub(): TrackingHub {
  try {
    const raw = localStorage.getItem(HUB_KEY);
    if (!raw) {
      return { updatedAt: new Date(0).toISOString(), progress: {}, attempts: [] };
    }
    return JSON.parse(raw) as TrackingHub;
  } catch {
    return { updatedAt: new Date(0).toISOString(), progress: {}, attempts: [] };
  }
}

function writeHub(hub: TrackingHub) {
  localStorage.setItem(HUB_KEY, JSON.stringify(hub));
  window.dispatchEvent(new Event("epcas-tracking-hub"));
}

function applyOutboxToHub(
  hub: TrackingHub,
  items: TrackingOutboxItem[],
): TrackingHub {
  const progress: Record<string, LessonProgress[]> = { ...hub.progress };
  const attempts = [...hub.attempts];
  const attemptIds = new Set(attempts.map((a) => a.id));

  for (const item of items) {
    if (item.kind === "progress") {
      const list = [...(progress[item.userId] ?? [])];
      const idx = list.findIndex((p) => p.lessonId === item.lessonId);
      if (idx >= 0) list[idx] = item.progress;
      else list.push(item.progress);
      progress[item.userId] = list;
    } else if (!attemptIds.has(item.attempt.id)) {
      attempts.unshift(item.attempt);
      attemptIds.add(item.attempt.id);
    }
  }

  return {
    updatedAt: new Date().toISOString(),
    progress,
    attempts,
  };
}

async function pushToSupabase(items: TrackingOutboxItem[]): Promise<boolean> {
  const supabase = createClient();
  if (!supabase || items.length === 0) return false;

  const progressRows = items
    .filter((i): i is Extract<TrackingOutboxItem, { kind: "progress" }> => i.kind === "progress")
    .map((i) => ({
      user_key: i.userId,
      lesson_id: i.lessonId,
      status: i.progress.status,
      mode_pref: i.progress.modePref,
      updated_at: i.updatedAt,
    }));

  const attemptRows = items
    .filter((i): i is Extract<TrackingOutboxItem, { kind: "attempt" }> => i.kind === "attempt")
    .map((i) => ({
      id: i.attempt.id,
      user_key: i.userId,
      exercise_id: i.attempt.exerciseId,
      score: i.attempt.score,
      max_score: i.attempt.maxScore,
      created_at: i.attempt.createdAt,
    }));

  if (progressRows.length > 0) {
    const { error } = await supabase
      .from("sync_lesson_progress")
      .upsert(progressRows, { onConflict: "user_key,lesson_id" });
    if (error) throw error;
  }

  if (attemptRows.length > 0) {
    const { error } = await supabase
      .from("sync_attempts")
      .upsert(attemptRows, { onConflict: "id" });
    if (error) throw error;
  }

  return true;
}

export async function pullTrackingFromSupabase(): Promise<TrackingHub | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const [{ data: progressRows, error: pErr }, { data: attemptRows, error: aErr }] =
    await Promise.all([
      supabase.from("sync_lesson_progress").select("*"),
      supabase.from("sync_attempts").select("*").order("created_at", {
        ascending: false,
      }),
    ]);

  if (pErr || aErr) {
    console.warn("[EPCAS] pull tracking", pErr ?? aErr);
    return null;
  }

  const progress: Record<string, LessonProgress[]> = {};
  for (const row of progressRows ?? []) {
    const userKey = String(row.user_key);
    const list = progress[userKey] ?? [];
    list.push({
      lessonId: String(row.lesson_id),
      status: row.status as LessonProgress["status"],
      modePref: row.mode_pref as LessonProgress["modePref"],
    });
    progress[userKey] = list;
  }

  const attempts: AttemptRecord[] = (attemptRows ?? []).map((row) => ({
    id: String(row.id),
    userId: String(row.user_key),
    exerciseId: String(row.exercise_id),
    score: Number(row.score),
    maxScore: Number(row.max_score),
    createdAt: String(row.created_at),
  }));

  const hub: TrackingHub = {
    updatedAt: new Date().toISOString(),
    progress,
    attempts,
  };
  writeHub(hub);
  return hub;
}

export function readTrackingHub(): TrackingHub {
  return readHub();
}

/** Pousse la file d'attente locale dès qu'il y a du réseau. */
export async function flushTrackingOutbox(): Promise<TrackingSyncResult> {
  if (typeof window === "undefined") {
    return { ok: false, pendingBefore: 0, flushed: 0, mode: "offline" };
  }
  if (!navigator.onLine) {
    const pendingBefore = await countPendingOutbox();
    return {
      ok: false,
      pendingBefore,
      flushed: 0,
      mode: "offline",
      error: "Hors-ligne — le suivi sera envoyé à la reconnexion.",
    };
  }

  const pending = await listPendingOutbox();
  if (pending.length === 0) {
    return { ok: true, pendingBefore: 0, flushed: 0, mode: "hub" };
  }

  try {
    const hub = applyOutboxToHub(readHub(), pending);
    writeHub(hub);

    let supabaseOk = false;
    try {
      supabaseOk = await pushToSupabase(pending);
    } catch (err) {
      console.warn("[EPCAS] sync suivi Supabase", err);
    }

    await markOutboxSynced(pending.map((p) => p.id));

    return {
      ok: true,
      pendingBefore: pending.length,
      flushed: pending.length,
      mode: supabaseOk ? "hub+supabase" : "hub",
    };
  } catch (err) {
    return {
      ok: false,
      pendingBefore: pending.length,
      flushed: 0,
      mode: "hub",
      error: err instanceof Error ? err.message : "Échec sync suivi",
    };
  }
}

export function mergeHubIntoState(args: {
  progress: Record<string, LessonProgress[]>;
  attempts: AttemptRecord[];
  hub: TrackingHub;
}): { progress: Record<string, LessonProgress[]>; attempts: AttemptRecord[] } {
  const progress: Record<string, LessonProgress[]> = { ...args.progress };
  for (const [userId, list] of Object.entries(args.hub.progress)) {
    const current = [...(progress[userId] ?? [])];
    for (const item of list) {
      const idx = current.findIndex((p) => p.lessonId === item.lessonId);
      if (idx >= 0) current[idx] = item;
      else current.push(item);
    }
    progress[userId] = current;
  }

  const attemptIds = new Set(args.attempts.map((a) => a.id));
  const attempts = [...args.attempts];
  for (const att of args.hub.attempts) {
    if (!attemptIds.has(att.id)) {
      attempts.push(att);
      attemptIds.add(att.id);
    }
  }
  attempts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return { progress, attempts };
}
