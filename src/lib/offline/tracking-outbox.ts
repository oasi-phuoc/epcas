import type { AttemptRecord, LessonProgress } from "@/lib/types";

export type TrackingOutboxItem =
  | {
      id: string;
      kind: "progress";
      userId: string;
      lessonId: string;
      progress: LessonProgress;
      updatedAt: string;
      synced: boolean;
    }
  | {
      id: string;
      kind: "attempt";
      userId: string;
      attempt: AttemptRecord;
      updatedAt: string;
      synced: boolean;
    };

const DB_NAME = "epcas-offline";
const DB_VERSION = 2;
const STORE = "tracking_outbox";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("meta")) db.createObjectStore("meta");
      if (!db.objectStoreNames.contains("lessons")) {
        db.createObjectStore("lessons", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("IDB open failed"));
  });
}

export async function enqueueProgress(
  userId: string,
  progress: LessonProgress,
): Promise<void> {
  const item: TrackingOutboxItem = {
    id: `progress:${userId}:${progress.lessonId}`,
    kind: "progress",
    userId,
    lessonId: progress.lessonId,
    progress,
    updatedAt: new Date().toISOString(),
    synced: false,
  };
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function enqueueAttempt(
  userId: string,
  attempt: AttemptRecord,
): Promise<void> {
  const item: TrackingOutboxItem = {
    id: `attempt:${attempt.id}`,
    kind: "attempt",
    userId,
    attempt,
    updatedAt: attempt.createdAt || new Date().toISOString(),
    synced: false,
  };
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function listOutbox(): Promise<TrackingOutboxItem[]> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve((req.result as TrackingOutboxItem[]) ?? []);
    req.onerror = () => reject(req.error);
  });
}

export async function listPendingOutbox(): Promise<TrackingOutboxItem[]> {
  const all = await listOutbox();
  return all.filter((i) => !i.synced);
}

export async function markOutboxSynced(ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    const store = tx.objectStore(STORE);
    for (const id of ids) {
      const getReq = store.get(id);
      getReq.onsuccess = () => {
        const row = getReq.result as TrackingOutboxItem | undefined;
        if (row) store.put({ ...row, synced: true });
      };
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function countPendingOutbox(): Promise<number> {
  return (await listPendingOutbox()).length;
}
