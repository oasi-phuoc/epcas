"use client";

import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  PageHeader,
  Panel,
  ProgressBar,
} from "@/components/ui";
import { OfflineDownloadPanel } from "@/components/OfflineDownloadPanel";
import { getUserDiplomaLevel, STUDY_YEAR_LABELS } from "@/lib/levels";
import { ROLE_LABELS, isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import { cn } from "@/lib/cn";

type Tab = "compte" | "sync" | "hors-ligne";

function formatSyncDate(value: string | null | undefined) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString("fr-CH", {
      dateStyle: "short",
      timeStyle: "short",
    });
  } catch {
    return value;
  }
}

export default function ParametresPage() {
  const {
    currentUser,
    logout,
    getUserProgress,
    getAttemptsForUser,
    state,
    userLevel,
    userStudyYear,
    syncCloudNow,
    cloudSyncConfigured,
    cloudSyncMeta,
  } = useAppStore();
  const [tab, setTab] = useState<Tab>("compte");
  const [syncBusy, setSyncBusy] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const tabs = [
    { id: "compte" as const, label: "Compte" },
    { id: "sync" as const, label: "Synchronisation" },
    { id: "hors-ligne" as const, label: "Hors-ligne" },
  ];

  if (!currentUser) return null;

  const progress = getUserProgress(currentUser.id);
  const attempts = getAttemptsForUser(currentUser.id);
  const classroom = state.classes.find((c) => c.id === currentUser.classId);
  const level = isStaffRole(currentUser.role)
    ? userLevel
    : getUserDiplomaLevel(currentUser, state.classes);
  const studyYear =
    classroom?.studyYear ??
    (currentUser.role === "apprentice" ? userStudyYear : 1);
  const lessonTotal = countLessonsForLevel(state, level, studyYear);
  const done = progress.filter((p) => p.status === "done").length;
  const pct = lessonTotal === 0 ? 0 : (done / lessonTotal) * 100;
  const avg =
    attempts.length === 0
      ? 0
      : (attempts.reduce((s, a) => s + a.score / a.maxScore, 0) /
          attempts.length) *
        100;

  async function handleSyncNow() {
    setSyncBusy(true);
    setSyncMessage(null);
    try {
      const result = await syncCloudNow();
      if (!result.configured) {
        setSyncMessage(
          "Supabase n’est pas configuré. Ajoutez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        );
        return;
      }
      if (!result.ok) {
        setSyncMessage(result.error ?? "Échec de la synchronisation.");
        return;
      }
      const labels = {
        pulled: "Données téléchargées depuis le cloud.",
        pushed: "Données envoyées vers le cloud.",
        synced: "Synchronisation à jour.",
        skipped: "Rien à synchroniser.",
      } as const;
      setSyncMessage(labels[result.action]);
    } finally {
      setSyncBusy(false);
    }
  }

  return (
    <div>
      <PageHeader
        title="Paramètres"
        description="Compte, synchronisation cloud et téléchargement hors-ligne."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition",
              tab === t.id
                ? "bg-primary-soft text-primary-strong"
                : "text-ink-muted hover:bg-surface-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "compte" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Panel>
            <p className="text-sm text-ink-muted">Nom</p>
            <p className="font-display text-2xl">{currentUser.displayName}</p>
            <p className="mt-2 text-sm text-ink-muted">{currentUser.email}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-subtle">
              {ROLE_LABELS[currentUser.role]}
            </p>
            {classroom ? (
              <p className="mt-3 text-sm text-ink-muted">
                {classroom.name} · {classroom.level} ·{" "}
                {STUDY_YEAR_LABELS[classroom.studyYear]}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="secondary" onClick={logout}>
                Déconnexion
              </Button>
            </div>
          </Panel>
          {currentUser.role === "apprentice" ? (
            <Panel>
              <ProgressBar
                value={pct}
                label={`Théorie ${level} · ${STUDY_YEAR_LABELS[studyYear]}`}
              />
              <div className="mt-4">
                <ProgressBar value={avg} label="Score moyen exercices" />
              </div>
              <Alert tone="info">
                Contenu filtré selon votre séquence {level}{" "}
                {STUDY_YEAR_LABELS[studyYear]}. Utilisez l’onglet Hors-ligne
                pour synchroniser uniquement les pages modifiées.
              </Alert>
            </Panel>
          ) : (
            <Panel>
              <Alert tone="info">
                Compte {ROLE_LABELS[currentUser.role].toLowerCase()} : gérez les
                comptes, séquences et contenus depuis le menu dédié. L’onglet
                Synchronisation partage classes, contenus et suivi entre
                navigateurs.
              </Alert>
            </Panel>
          )}
        </div>
      ) : null}

      {tab === "sync" ? (
        <div className="grid max-w-2xl gap-4">
          <Panel>
            <h2 className="font-display text-xl text-ink">Cloud Supabase</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Classes, comptes, leçons, évaluations, progression et tentatives
              sont partagés via un snapshot commun (plan Free).
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone={cloudSyncConfigured ? "success" : "warning"}>
                {cloudSyncConfigured ? "Configuré" : "Non configuré"}
              </Badge>
              <span className="text-sm text-ink-muted">
                Révision {cloudSyncMeta.revision}
              </span>
            </div>
            <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-ink-subtle">Dernier envoi</dt>
                <dd className="text-ink">
                  {formatSyncDate(cloudSyncMeta.lastPushedAt)}
                </dd>
              </div>
              <div>
                <dt className="text-ink-subtle">Dernier téléchargement</dt>
                <dd className="text-ink">
                  {formatSyncDate(cloudSyncMeta.lastPulledAt)}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-ink-subtle">Mise à jour cloud</dt>
                <dd className="text-ink">
                  {formatSyncDate(cloudSyncMeta.updatedAt)}
                </dd>
              </div>
            </dl>
            {cloudSyncMeta.lastError ? (
              <div className="mt-4">
                <Alert tone="danger">{cloudSyncMeta.lastError}</Alert>
              </div>
            ) : null}
            {syncMessage ? (
              <div className="mt-4">
                <Alert tone={cloudSyncConfigured ? "success" : "warning"}>
                  {syncMessage}
                </Alert>
              </div>
            ) : null}
            <div className="mt-5">
              <Button
                onClick={() => void handleSyncNow()}
                disabled={syncBusy || !cloudSyncConfigured}
              >
                {syncBusy ? "Synchronisation…" : "Synchroniser maintenant"}
              </Button>
            </div>
          </Panel>
          {!cloudSyncConfigured ? (
            <Alert tone="info">
              Créez un projet Supabase Free (région EU), exécutez les migrations
              dans <code className="text-xs">supabase/migrations/</code>, puis
              renseignez <code className="text-xs">.env.local</code> à partir de{" "}
              <code className="text-xs">.env.example</code>.
            </Alert>
          ) : (
            <Alert tone="info">
              Les modifications sont aussi poussées automatiquement après ~1 s
              d’inactivité, et au retour en ligne. Leçons, pratique Office,
              évaluations, classes et séquences sont rechargées depuis Supabase
              à l’ouverture du site.
            </Alert>
          )}
        </div>
      ) : null}

      {tab === "hors-ligne" ? <OfflineDownloadPanel /> : null}
    </div>
  );
}
