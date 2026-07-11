"use client";

import Link from "next/link";
import {
  Badge,
  EmptyState,
  PageHeader,
  Panel,
  ProgressBar,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function FormateurSuiviPage() {
  const { currentUser, state, getUserProgress, getAttemptsForUser } =
    useAppStore();
  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  const apprentices = state.users.filter((u) => u.role === "apprentice");

  return (
    <div>
      <PageHeader
        title="Suivi de la classe"
        description={state.classRoom.name}
      />
      <div className="space-y-3">
        {apprentices.map((a) => {
          const progress = getUserProgress(a.id);
          const done = progress.filter((p) => p.status === "done").length;
          const pct =
            state.lessons.length === 0
              ? 0
              : (done / state.lessons.length) * 100;
          const attempts = getAttemptsForUser(a.id);
          const avg =
            attempts.length === 0
              ? 0
              : (attempts.reduce((s, x) => s + x.score / x.maxScore, 0) /
                  attempts.length) *
                100;

          return (
            <Panel key={a.id}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-display text-xl">{a.displayName}</p>
                  <p className="text-sm text-ink-muted">{a.email}</p>
                </div>
                <Badge tone={a.active ? "success" : "danger"}>
                  {a.active ? "Actif" : "Inactif"}
                </Badge>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ProgressBar value={pct} label="Théorie" />
                <ProgressBar value={avg} label="Exercices" />
              </div>
              <p className="mt-3 text-xs text-ink-subtle">
                {attempts.length} tentative(s) enregistrée(s)
              </p>
            </Panel>
          );
        })}
        {apprentices.length === 0 ? (
          <EmptyState
            title="Aucun apprenti"
            description="Créez des comptes dans l’onglet Comptes."
          />
        ) : null}
      </div>
      <p className="mt-4 text-sm text-ink-muted">
        <Link href="/formateur/comptes" className="text-primary-strong underline">
          Gérer les comptes
        </Link>
      </p>
    </div>
  );
}
