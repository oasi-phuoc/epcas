"use client";

import Link from "next/link";
import {
  Badge,
  PageHeader,
  Panel,
  ProgressBar,
  Button,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function AccueilPage() {
  const { currentUser, state, getUserProgress, getAttemptsForUser, userLevel } =
    useAppStore();
  if (!currentUser) return null;

  const isTrainer = currentUser.role === "trainer";
  const progress = getUserProgress(currentUser.id);
  const attempts = getAttemptsForUser(currentUser.id);
  const focusLessons = state.lessons.filter((l) => l.moduleId === "mod-101");
  const lessonsDone = focusLessons.filter((l) =>
    progress.some((p) => p.lessonId === l.id && p.status === "done"),
  ).length;
  const lessonPct =
    focusLessons.length === 0
      ? 0
      : (lessonsDone / focusLessons.length) * 100;
  const classroom = state.classes.find((c) => c.id === currentUser.classId);

  return (
    <div>
      <PageHeader
        title={`Bonjour, ${currentUser.displayName.split(" ")[0]}`}
        description={
          isTrainer
            ? "Gérez les comptes, le contenu, les évaluations et le suivi de la classe."
            : `Continuez votre formation ${userLevel} Logisticien·ne.`
        }
      />

      {isTrainer ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Panel>
            <p className="text-sm text-ink-muted">Apprentis actifs</p>
            <p className="mt-2 font-display text-3xl">
              {
                state.users.filter((u) => u.role === "apprentice" && u.active)
                  .length
              }
            </p>
            <Link href="/formateur/comptes" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Gérer les comptes
              </Button>
            </Link>
          </Panel>
          <Panel>
            <p className="text-sm text-ink-muted">Modules EnterSite</p>
            <p className="mt-2 font-display text-3xl">{state.modules.length}</p>
            <Link href="/formateur/contenu" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Éditer le contenu
              </Button>
            </Link>
          </Panel>
          <Panel>
            <p className="text-sm text-ink-muted">Évaluations</p>
            <p className="mt-2 font-display text-3xl">
              {state.assessments.length}
            </p>
            <Link href="/formateur/evaluations" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Créer / éditer
              </Button>
            </Link>
          </Panel>
          <Panel>
            <p className="text-sm text-ink-muted">Suivi classe</p>
            <p className="mt-2 font-display text-3xl">Vue</p>
            <Link href="/formateur" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Ouvrir le suivi
              </Button>
            </Link>
          </Panel>
        </div>
      ) : (
        <div className="space-y-4">
          <Panel className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Théorie</Badge>
              <Badge tone="accent">Exercices</Badge>
            </div>
            <h2 className="mt-3 font-display text-2xl">
              Module 101 — Histoire de la logistique
            </h2>
            <div className="mt-4">
              <ProgressBar value={lessonPct} label="Module 101 — pages lues" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/theorie/lesson-101-theorie">
                <Button>Continuer la théorie</Button>
              </Link>
              <Link href="/theorie">
                <Button variant="secondary">Tous les modules</Button>
              </Link>
              <Link href="/exercices">
                <Button variant="ghost">S&apos;entraîner</Button>
              </Link>
            </div>
          </Panel>

          <div className="grid gap-4 sm:grid-cols-2">
            <Panel>
              <p className="text-sm text-ink-muted">Tentatives d&apos;exercices</p>
              <p className="mt-2 font-display text-3xl">{attempts.length}</p>
            </Panel>
            <Panel>
              <p className="text-sm text-ink-muted">Classe</p>
              <p className="mt-2 text-sm font-medium text-ink">
                {classroom?.name ?? "Non assignée"}
              </p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-subtle">
                <span>{classroom?.year}</span>
                {classroom ? (
                  <Badge tone="primary">Niveau {classroom.level}</Badge>
                ) : null}
              </p>
            </Panel>
          </div>
        </div>
      )}
    </div>
  );
}
