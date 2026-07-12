import type { LocalCatalog, LessonPackPayload } from "./types";
import { emptyCatalog } from "./types";

const DB_NAME = "epcas-offline";
const DB_VERSION = 2;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("meta")) {
        db.createObjectStore("meta");
      }
      if (!db.objectStoreNames.contains("lessons")) {
        db.createObjectStore("lessons", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("tracking_outbox")) {
        db.createObjectStore("tracking_outbox", { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB open failed"));
  });
}

function idbGet<T>(store: string, key: string): Promise<T | undefined> {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readonly");
        const req = tx.objectStore(store).get(key);
        req.onsuccess = () => resolve(req.result as T | undefined);
        req.onerror = () => reject(req.error);
      }),
  );
}

function idbPut(store: string, value: unknown, key?: string): Promise<void> {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const os = tx.objectStore(store);
        const req = key != null ? os.put(value, key) : os.put(value);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      }),
  );
}

function idbDelete(store: string, key: string): Promise<void> {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        const req = tx.objectStore(store).delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      }),
  );
}

export async function loadLocalCatalog(): Promise<LocalCatalog> {
  const catalog = await idbGet<LocalCatalog>("meta", "catalog");
  return catalog ?? emptyCatalog();
}

export async function saveLocalCatalog(catalog: LocalCatalog): Promise<void> {
  await idbPut("meta", catalog, "catalog");
}

export async function saveLessonPack(pack: LessonPackPayload): Promise<void> {
  await idbPut("lessons", pack);
}

export async function deleteLessonPack(id: string): Promise<void> {
  await idbDelete("lessons", id);
}

export async function getLessonPack(
  id: string,
): Promise<LessonPackPayload | undefined> {
  return idbGet<LessonPackPayload>("lessons", id);
}

export async function clearOfflineData(): Promise<void> {
  const db = await openDb();
  await Promise.all(
    ["meta", "lessons"].map(
      (store) =>
        new Promise<void>((resolve, reject) => {
          const tx = db.transaction(store, "readwrite");
          const req = tx.objectStore(store).clear();
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
        }),
    ),
  );
}

export async function estimateOfflineBytes(): Promise<number> {
  const catalog = await loadLocalCatalog();
  return Object.values(catalog.entries).reduce((s, e) => s + e.size, 0);
}
