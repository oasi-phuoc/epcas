export type ContentManifestEntry = {
  id: string;
  moduleId: string;
  moduleCode: string;
  blockCode: string;
  pageSlug: string;
  title: string;
  hash: string;
  size: number;
  url: string;
};

export type ContentManifest = {
  version: string;
  generatedAt: string;
  totalEntries: number;
  totalBytes: number;
  entries: ContentManifestEntry[];
};

export type LocalCatalogEntry = {
  id: string;
  hash: string;
  size: number;
  title: string;
  moduleCode: string;
  blockCode: string;
  pageSlug: string;
  updatedAt: string;
};

export type LocalCatalog = {
  packageVersion: string | null;
  lastSyncAt: string | null;
  entries: Record<string, LocalCatalogEntry>;
};

export type DiffKind = "new" | "updated" | "removed" | "unchanged";

export type DiffItem = {
  id: string;
  kind: DiffKind;
  title: string;
  moduleCode: string;
  blockCode: string;
  remoteHash?: string;
  localHash?: string;
  size: number;
};

export type LessonPackPayload = {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  pageSlug: string;
  published: boolean;
  contentFull: string;
  contentSummary: string;
  contentFullAfp?: string;
  contentSummaryAfp?: string;
  hash: string;
  size: number;
};

export type DownloadProgress = {
  phase: "idle" | "checking" | "downloading" | "writing" | "done" | "error";
  current: number;
  total: number;
  bytesDone: number;
  bytesTotal: number;
  currentLabel: string;
  error?: string;
};

export function emptyCatalog(): LocalCatalog {
  return {
    packageVersion: null,
    lastSyncAt: null,
    entries: {},
  };
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} Mo`;
}

export function computeDiff(
  remote: ContentManifest,
  local: LocalCatalog,
  allowedIds?: Set<string>,
): DiffItem[] {
  const items: DiffItem[] = [];
  const remoteIds = new Set<string>();

  for (const entry of remote.entries) {
    if (allowedIds && !allowedIds.has(entry.id)) continue;
    remoteIds.add(entry.id);
    const prev = local.entries[entry.id];
    if (!prev) {
      items.push({
        id: entry.id,
        kind: "new",
        title: entry.title,
        moduleCode: entry.moduleCode,
        blockCode: entry.blockCode,
        remoteHash: entry.hash,
        size: entry.size,
      });
    } else if (prev.hash !== entry.hash) {
      items.push({
        id: entry.id,
        kind: "updated",
        title: entry.title,
        moduleCode: entry.moduleCode,
        blockCode: entry.blockCode,
        remoteHash: entry.hash,
        localHash: prev.hash,
        size: entry.size,
      });
    } else {
      items.push({
        id: entry.id,
        kind: "unchanged",
        title: entry.title,
        moduleCode: entry.moduleCode,
        blockCode: entry.blockCode,
        remoteHash: entry.hash,
        localHash: prev.hash,
        size: entry.size,
      });
    }
  }

  for (const [id, prev] of Object.entries(local.entries)) {
    if (allowedIds && !allowedIds.has(id)) continue;
    if (remoteIds.has(id)) continue;
    items.push({
      id,
      kind: "removed",
      title: prev.title,
      moduleCode: prev.moduleCode,
      blockCode: prev.blockCode,
      localHash: prev.hash,
      size: prev.size,
    });
  }

  const order: Record<DiffKind, number> = {
    updated: 0,
    new: 1,
    removed: 2,
    unchanged: 3,
  };
  return items.sort(
    (a, b) =>
      order[a.kind] - order[b.kind] ||
      a.moduleCode.localeCompare(b.moduleCode) ||
      a.id.localeCompare(b.id),
  );
}
