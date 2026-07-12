/** Accès dossier local (Chromium) — typiquement Bureau / EPCAS-Logistique */

const HANDLE_KEY = "epcas-dir-handle";

type FsHandle = FileSystemDirectoryHandle;

function openMetaDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("epcas-offline", 2);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("meta")) db.createObjectStore("meta");
      if (!db.objectStoreNames.contains("lessons")) {
        db.createObjectStore("lessons", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("tracking_outbox")) {
        db.createObjectStore("tracking_outbox", { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export function supportsDirectoryPicker(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof (window as Window & { showDirectoryPicker?: unknown })
      .showDirectoryPicker === "function"
  );
}

export async function loadDirectoryHandle(): Promise<FsHandle | null> {
  try {
    const db = await openMetaDb();
    const handle = await new Promise<FsHandle | undefined>((resolve, reject) => {
      const tx = db.transaction("meta", "readonly");
      const req = tx.objectStore("meta").get(HANDLE_KEY);
      req.onsuccess = () => resolve(req.result as FsHandle | undefined);
      req.onerror = () => reject(req.error);
    });
    return handle ?? null;
  } catch {
    return null;
  }
}

export async function saveDirectoryHandle(handle: FsHandle): Promise<void> {
  const db = await openMetaDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction("meta", "readwrite");
    const req = tx.objectStore("meta").put(handle, HANDLE_KEY);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function pickOfflineDirectory(): Promise<FsHandle | null> {
  if (!supportsDirectoryPicker()) return null;
  const handle = await (
    window as unknown as {
      showDirectoryPicker: (opts?: {
        id?: string;
        mode?: "read" | "readwrite";
        startIn?: string;
      }) => Promise<FsHandle>;
    }
  ).showDirectoryPicker({
    id: "epcas-offline-content",
    mode: "readwrite",
    startIn: "desktop",
  });
  await saveDirectoryHandle(handle);
  return handle;
}

async function ensurePermission(handle: FsHandle): Promise<boolean> {
  const withPerm = handle as FsHandle & {
    queryPermission?: (o: { mode: string }) => Promise<PermissionState>;
    requestPermission?: (o: { mode: string }) => Promise<PermissionState>;
  };
  if (!withPerm.queryPermission) return true;
  const opts = { mode: "readwrite" };
  let state = await withPerm.queryPermission(opts);
  if (state === "granted") return true;
  if (withPerm.requestPermission) {
    state = await withPerm.requestPermission(opts);
  }
  return state === "granted";
}

async function getOrCreateSubdir(
  parent: FsHandle,
  name: string,
): Promise<FsHandle> {
  return parent.getDirectoryHandle(name, { create: true });
}

async function writeTextFile(
  dir: FsHandle,
  name: string,
  contents: string,
): Promise<void> {
  const file = await dir.getFileHandle(name, { create: true });
  const writable = await file.createWritable();
  await writable.write(contents);
  await writable.close();
}

export async function writeOfflinePackToDirectory(args: {
  handle: FsHandle;
  manifestJson: string;
  catalogJson: string;
  lessons: { id: string; json: string }[];
}): Promise<void> {
  const ok = await ensurePermission(args.handle);
  if (!ok) throw new Error("Permission refusée pour le dossier choisi.");

  const root = await getOrCreateSubdir(args.handle, "EPCAS-Logistique");
  await writeTextFile(root, "manifest.json", args.manifestJson);
  await writeTextFile(root, "catalog.json", args.catalogJson);
  const lessonsDir = await getOrCreateSubdir(root, "lessons");
  for (const lesson of args.lessons) {
    const safe = lesson.id.replace(/[^a-zA-Z0-9._-]/g, "_");
    await writeTextFile(lessonsDir, `${safe}.json`, lesson.json);
  }
}
