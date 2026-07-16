import {
  deleteLessonPack,
  loadLocalCatalog,
  saveLessonPack,
  saveLocalCatalog,
} from "./idb";
import {
  loadDirectoryHandle,
  supportsDirectoryPicker,
  writeOfflinePackToDirectory,
} from "./filesystem";
import type {
  ContentManifest,
  ContentManifestEntry,
  DiffItem,
  DownloadProgress,
  LessonPackPayload,
  LocalCatalog,
} from "./types";
import { computeDiff, emptyCatalog } from "./types";

export async function fetchManifest(): Promise<ContentManifest> {
  const res = await fetch("/api/content/manifest", { cache: "no-store" });
  if (!res.ok) throw new Error("Impossible de charger le manifeste.");
  return res.json() as Promise<ContentManifest>;
}

async function fetchLessonPack(entry: ContentManifestEntry): Promise<LessonPackPayload> {
  const res = await fetch(entry.url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Échec téléchargement ${entry.id}`);
  return res.json() as Promise<LessonPackPayload>;
}

export type SyncOptions = {
  /** Limite aux leçons du parcours (ids). Si omis = tout le manifeste. */
  allowedIds?: Set<string>;
  /** Écrire aussi sur disque (Bureau / dossier choisi) si disponible */
  writeToDisk?: boolean;
  /** Dossier déjà choisi (évite showDirectoryPicker hors geste utilisateur). */
  diskHandle?: FileSystemDirectoryHandle | null;
  onProgress?: (p: DownloadProgress) => void;
  onDiff?: (diff: DiffItem[]) => void;
};

export async function syncOfflineContent(
  options: SyncOptions = {},
): Promise<{
  catalog: LocalCatalog;
  diff: DiffItem[];
  downloaded: number;
  skipped: number;
}> {
  const report = (p: Partial<DownloadProgress> & Pick<DownloadProgress, "phase">) => {
    options.onProgress?.({
      current: 0,
      total: 0,
      bytesDone: 0,
      bytesTotal: 0,
      currentLabel: "",
      ...p,
    });
  };

  try {
    report({ phase: "checking", currentLabel: "Lecture du manifeste…" });
    const remote = await fetchManifest();
    const local = await loadLocalCatalog();
    const diff = computeDiff(remote, local, options.allowedIds);
    options.onDiff?.(diff);

    const toDownload = diff.filter(
      (d) => d.kind === "new" || d.kind === "updated",
    );
    const toRemove = diff.filter((d) => d.kind === "removed");
    const skipped = diff.filter((d) => d.kind === "unchanged").length;

    const entryById = new Map(remote.entries.map((e) => [e.id, e] as const));
    const bytesTotal = toDownload.reduce((s, d) => s + d.size, 0);

    report({
      phase: "downloading",
      current: 0,
      total: toDownload.length,
      bytesDone: 0,
      bytesTotal,
      currentLabel:
        toDownload.length === 0
          ? "Déjà à jour"
          : `${toDownload.length} fichier(s) à télécharger`,
    });

    const next: LocalCatalog = {
      packageVersion: remote.version,
      lastSyncAt: new Date().toISOString(),
      entries: { ...local.entries },
    };

    const writtenLessons: { id: string; json: string }[] = [];
    let bytesDone = 0;

    for (let i = 0; i < toDownload.length; i++) {
      const item = toDownload[i]!;
      const entry = entryById.get(item.id);
      if (!entry) continue;

      report({
        phase: "downloading",
        current: i + 1,
        total: toDownload.length,
        bytesDone,
        bytesTotal,
        currentLabel: `${entry.moduleCode} · ${entry.title}`,
      });

      const pack = await fetchLessonPack(entry);
      await saveLessonPack(pack);
      next.entries[entry.id] = {
        id: entry.id,
        hash: pack.hash,
        size: pack.size,
        title: entry.title,
        moduleCode: entry.moduleCode,
        blockCode: entry.blockCode,
        pageSlug: entry.pageSlug,
        updatedAt: new Date().toISOString(),
      };
      writtenLessons.push({ id: pack.id, json: JSON.stringify(pack, null, 2) });
      bytesDone += pack.size;

      report({
        phase: "downloading",
        current: i + 1,
        total: toDownload.length,
        bytesDone,
        bytesTotal,
        currentLabel: `${entry.moduleCode} · ${entry.title}`,
      });
    }

    for (const rem of toRemove) {
      await deleteLessonPack(rem.id);
      delete next.entries[rem.id];
    }

    await saveLocalCatalog(next);

    if (options.writeToDisk && supportsDirectoryPicker()) {
      report({
        phase: "writing",
        current: toDownload.length,
        total: toDownload.length,
        bytesDone,
        bytesTotal,
        currentLabel: "Écriture sur le disque…",
      });

      const handle =
        options.diskHandle ?? (await loadDirectoryHandle());
      if (handle) {
        const allWritten = [...writtenLessons];
        await writeOfflinePackToDirectory({
          handle,
          manifestJson: JSON.stringify(remote, null, 2),
          catalogJson: JSON.stringify(next, null, 2),
          lessons: allWritten,
        });
      }
    }

    report({
      phase: "done",
      current: toDownload.length,
      total: toDownload.length,
      bytesDone,
      bytesTotal,
      currentLabel:
        toDownload.length === 0
          ? "Contenu déjà à jour"
          : `${toDownload.length} fichier(s) synchronisé(s)`,
    });

    return {
      catalog: next,
      diff,
      downloaded: toDownload.length,
      skipped,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    report({
      phase: "error",
      currentLabel: message,
      error: message,
    });
    throw err;
  }
}

export async function getOfflineStatus(): Promise<{
  catalog: LocalCatalog;
  remote: ContentManifest | null;
  diff: DiffItem[];
}> {
  const catalog = await loadLocalCatalog();
  try {
    const remote = await fetchManifest();
    const diff = computeDiff(remote, catalog);
    return { catalog, remote, diff };
  } catch {
    return { catalog, remote: null, diff: [] };
  }
}

export {
  supportsDirectoryPicker,
  pickOfflineDirectory,
  loadDirectoryHandle,
} from "./filesystem";
export { emptyCatalog } from "./types";
