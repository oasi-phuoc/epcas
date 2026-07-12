"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Panel,
  ProgressBar,
} from "@/components/ui";
import {
  clearOfflineData,
  estimateOfflineBytes,
} from "@/lib/offline/idb";
import {
  getOfflineStatus,
  pickOfflineDirectory,
  supportsDirectoryPicker,
  syncOfflineContent,
} from "@/lib/offline/sync";
import { countPendingOutbox } from "@/lib/offline/tracking-outbox";
import type {
  ContentManifest,
  DiffItem,
  DownloadProgress,
  LocalCatalog,
} from "@/lib/offline/types";
import { formatBytes } from "@/lib/offline/types";
import { useAppStore, useVisibleModules } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import { HardDrive, RefreshCw, Trash2, UploadCloud } from "lucide-react";

const kindLabel: Record<DiffItem["kind"], string> = {
  new: "Nouveau",
  updated: "Mis à jour",
  removed: "Supprimé",
  unchanged: "À jour",
};

const kindTone: Record<
  DiffItem["kind"],
  "success" | "accent" | "warning" | "neutral"
> = {
  new: "success",
  updated: "accent",
  removed: "warning",
  unchanged: "neutral",
};

export function OfflineDownloadPanel() {
  const { currentUser, state, syncTrackingNow } = useAppStore();
  const visibleModules = useVisibleModules();
  const isStaff = currentUser ? isStaffRole(currentUser.role) : false;

  const [catalog, setCatalog] = useState<LocalCatalog | null>(null);
  const [remote, setRemote] = useState<ContentManifest | null>(null);
  const [diff, setDiff] = useState<DiffItem[]>([]);
  const [progress, setProgress] = useState<DownloadProgress>({
    phase: "idle",
    current: 0,
    total: 0,
    bytesDone: 0,
    bytesTotal: 0,
    currentLabel: "",
  });
  const [localBytes, setLocalBytes] = useState(0);
  const [scope, setScope] = useState<"parcours" | "all">("parcours");
  const [writeDisk, setWriteDisk] = useState(supportsDirectoryPicker());
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [pendingTracking, setPendingTracking] = useState(0);
  const [trackingMsg, setTrackingMsg] = useState<string | null>(null);
  const [online, setOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );

  const allowedIds = useMemo(() => {
    if (scope === "all" || isStaff) return undefined;
    const moduleIds = new Set(visibleModules.map((m) => m.id));
    return new Set(
      state.lessons
        .filter((l) => l.published && moduleIds.has(l.moduleId))
        .map((l) => l.id),
    );
  }, [scope, isStaff, visibleModules, state.lessons]);

  const refresh = useCallback(async () => {
    setBusy(true);
    setMessage(null);
    try {
      const status = await getOfflineStatus();
      setCatalog(status.catalog);
      setRemote(status.remote);
      if (status.remote) {
        const { computeDiff } = await import("@/lib/offline/types");
        setDiff(computeDiff(status.remote, status.catalog, allowedIds));
      } else {
        setDiff([]);
      }
      setLocalBytes(await estimateOfflineBytes());
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Erreur de lecture");
    } finally {
      setBusy(false);
    }
  }, [allowedIds]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    const refreshPending = () => {
      void countPendingOutbox().then(setPendingTracking);
    };
    refreshPending();
    const onOnline = () => {
      setOnline(true);
      void syncTrackingNow().then((r) => {
        setTrackingMsg(
          r.flushed > 0
            ? `Suivi envoyé : ${r.flushed} mise(s) à jour.`
            : "Suivi déjà à jour.",
        );
        refreshPending();
      });
    };
    const onOffline = () => {
      setOnline(false);
      setTrackingMsg("Hors-ligne — le suivi sera envoyé à la reconnexion.");
    };
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    const t = window.setInterval(refreshPending, 5000);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      window.clearInterval(t);
    };
  }, [syncTrackingNow]);

  const changes = useMemo(
    () => diff.filter((d) => d.kind !== "unchanged"),
    [diff],
  );
  const pendingBytes = useMemo(
    () =>
      changes
        .filter((d) => d.kind === "new" || d.kind === "updated")
        .reduce((s, d) => s + d.size, 0),
    [changes],
  );

  async function runSync() {
    setBusy(true);
    setMessage(null);
    try {
      const result = await syncOfflineContent({
        allowedIds,
        writeToDisk: writeDisk && supportsDirectoryPicker(),
        onProgress: setProgress,
        onDiff: setDiff,
      });
      setCatalog(result.catalog);
      setLocalBytes(await estimateOfflineBytes());
      setMessage(
        result.downloaded === 0
          ? "Tout est déjà à jour — aucun fichier téléchargé."
          : `${result.downloaded} fichier(s) téléchargé(s), ${result.skipped} inchangé(s).`,
      );
      await refresh();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Échec de synchronisation");
    } finally {
      setBusy(false);
    }
  }

  async function chooseFolder() {
    try {
      const handle = await pickOfflineDirectory();
      setMessage(
        handle
          ? "Dossier choisi. Les prochaines sync écriront dans EPCAS-Logistique/ (idéalement sur le Bureau)."
          : "Sélection de dossier non disponible sur cet appareil.",
      );
    } catch {
      setMessage("Sélection de dossier annulée.");
    }
  }

  async function clearAll() {
    if (!confirm("Supprimer le contenu hors-ligne stocké sur cet appareil ?")) {
      return;
    }
    await clearOfflineData();
    setCatalog(null);
    setDiff([]);
    setLocalBytes(0);
    setProgress({
      phase: "idle",
      current: 0,
      total: 0,
      bytesDone: 0,
      bytesTotal: 0,
      currentLabel: "",
    });
    setMessage("Contenu hors-ligne effacé.");
    await refresh();
  }

  const pct =
    progress.bytesTotal === 0
      ? progress.phase === "done"
        ? 100
        : 0
      : (progress.bytesDone / progress.bytesTotal) * 100;

  const desktopFs = supportsDirectoryPicker();

  return (
    <div className="space-y-4">
      <Panel>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-muted text-primary-strong">
            <UploadCloud className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-xl text-ink">Suivi des élèves</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Progression et tentatives sont mises en file hors-ligne, puis
              envoyées automatiquement dès qu&apos;Internet revient — le
              formateur voit alors le suivi à jour.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone={online ? "success" : "warning"}>
            {online ? "En ligne" : "Hors-ligne"}
          </Badge>
          <Badge tone={pendingTracking > 0 ? "accent" : "neutral"}>
            {pendingTracking > 0
              ? `${pendingTracking} en attente`
              : "Rien en attente"}
          </Badge>
        </div>
        <div className="mt-4">
          <Button
            size="sm"
            variant="secondary"
            disabled={!online || busy}
            onClick={() => {
              void syncTrackingNow().then((r) => {
                setTrackingMsg(
                  r.error ??
                    (r.flushed > 0
                      ? `Suivi envoyé : ${r.flushed} élément(s).`
                      : "Suivi déjà synchronisé."),
                );
                void countPendingOutbox().then(setPendingTracking);
              });
            }}
          >
            <UploadCloud className="h-4 w-4" />
            Envoyer le suivi maintenant
          </Button>
        </div>
        {trackingMsg ? (
          <div className="mt-3">
            <Alert tone={online ? "info" : "warning"}>{trackingMsg}</Alert>
          </div>
        ) : null}
      </Panel>

      <Panel>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-muted text-primary-strong">
            <HardDrive className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-xl text-ink">Hors-ligne</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Téléchargez uniquement les pages modifiées (comme une mise à jour
              logicielle). Un catalogue local mémorise version (hash) et taille
              de chaque fichier.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {remote ? (
            <Badge tone="primary">Serveur {remote.version.slice(0, 8)}</Badge>
          ) : (
            <Badge tone="warning">Manifeste indisponible</Badge>
          )}
          {catalog?.packageVersion ? (
            <Badge tone="accent">
              Installé {catalog.packageVersion.slice(0, 8)}
            </Badge>
          ) : (
            <Badge tone="neutral">Pas encore installé</Badge>
          )}
          <Badge tone="neutral">{formatBytes(localBytes)} en local</Badge>
          {remote ? (
            <Badge tone="neutral">
              {remote.totalEntries} fichiers · {formatBytes(remote.totalBytes)}
            </Badge>
          ) : null}
        </div>

        {!isStaff ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={scope === "parcours" ? "primary" : "secondary"}
              onClick={() => setScope("parcours")}
            >
              Mon parcours
            </Button>
            <Button
              size="sm"
              variant={scope === "all" ? "primary" : "secondary"}
              onClick={() => setScope("all")}
            >
              Tout le contenu
            </Button>
          </div>
        ) : null}

        {desktopFs ? (
          <label className="mt-4 flex items-start gap-2 text-sm text-ink-muted">
            <input
              type="checkbox"
              className="mt-1"
              checked={writeDisk}
              onChange={(e) => setWriteDisk(e.target.checked)}
            />
            <span>
              Écrire aussi sur le disque (dossier{" "}
              <strong className="text-ink">EPCAS-Logistique</strong> — choisissez
              le Bureau). Sur mobile, le contenu reste dans le navigateur
              (IndexedDB / cache).
            </span>
          </label>
        ) : (
          <Alert tone="info">
            Sur cet appareil, le hors-ligne est stocké dans le navigateur (idéal
            mobile). Aucune écriture Bureau.
          </Alert>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <Button onClick={() => void runSync()} disabled={busy}>
            <RefreshCw className="h-4 w-4" />
            {catalog?.packageVersion ? "Mettre à jour" : "Télécharger"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => void refresh()}
            disabled={busy}
          >
            Vérifier
          </Button>
          {desktopFs ? (
            <Button
              variant="secondary"
              onClick={() => void chooseFolder()}
              disabled={busy}
            >
              Choisir le dossier
            </Button>
          ) : null}
          <Button
            variant="ghost"
            onClick={() => void clearAll()}
            disabled={busy}
          >
            <Trash2 className="h-4 w-4" />
            Effacer
          </Button>
        </div>

        {progress.phase !== "idle" ? (
          <div className="mt-5">
            <ProgressBar
              value={pct}
              label={
                progress.phase === "downloading"
                  ? `${progress.current}/${progress.total} · ${formatBytes(progress.bytesDone)} / ${formatBytes(progress.bytesTotal)}`
                  : progress.currentLabel
              }
            />
            {progress.phase === "downloading" && progress.currentLabel ? (
              <p className="mt-2 text-xs text-ink-subtle">
                {progress.currentLabel}
              </p>
            ) : null}
          </div>
        ) : null}

        {message ? (
          <div className="mt-4">
            <Alert
              tone={
                progress.phase === "error" ? "danger" : "success"
              }
            >
              {message}
            </Alert>
          </div>
        ) : null}
      </Panel>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg text-ink">
            Changements détectés
          </h3>
          <Badge tone={changes.length ? "accent" : "success"}>
            {changes.length === 0
              ? "Aucun"
              : `${changes.length} · ${formatBytes(pendingBytes)}`}
          </Badge>
        </div>
        <p className="mt-1 text-sm text-ink-muted">
          Seuls les fichiers nouveaux ou modifiés (hash différent) seront
          téléchargés.
        </p>

        {changes.length === 0 ? (
          <p className="mt-4 text-sm text-ink-subtle">
            {remote
              ? "Votre catalogue local correspond au serveur."
              : "Connectez-vous pour comparer avec le manifeste."}
          </p>
        ) : (
          <ul className="mt-4 max-h-80 space-y-2 overflow-y-auto">
            {changes.map((item) => (
              <li
                key={`${item.kind}-${item.id}`}
                className="flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-border px-3 py-2"
              >
                <span className="min-w-0">
                  <span className="text-xs font-medium text-primary-strong">
                    {item.blockCode} · Module {item.moduleCode}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-ink">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-subtle">
                    {formatBytes(item.size)}
                    {item.remoteHash ? ` · ${item.remoteHash.slice(0, 8)}` : ""}
                  </span>
                </span>
                <Badge tone={kindTone[item.kind]}>{kindLabel[item.kind]}</Badge>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
