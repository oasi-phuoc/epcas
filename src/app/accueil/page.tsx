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
  const { currentUser, state, getUserProgress, getAttemptsForUser } =
    useAppStore();
  if (!currentUser) return null;

  const isTrainer = currentUser.role === "trainer";
  const progress = getUserProgress(currentUser.id);
  const attempts = getAttemptsForUser(currentUser.id);
  const lessonsDone = progress.filter((p) => p.status === "done").length;
  const lessonPct =
    state.lessons.length === 0
      ? 0
      : (lessonsDone / state.lessons.length) * 100;

  return (
    <div>
      <PageHeader
        title={`Bonjour, ${currentUser.displayName.split(" ")[0]}`}
        description={
          isTrainer
            ? "Gérez les comptes, le contenu et le suivi de la classe."
            : "Continuez votre formation CFC Logisticien·ne."
        }
      />

      {isTrainer ? (
        <div className="grid gap-4 sm:grid-cols-3">
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
            <p className="text-sm text-ink-muted">Leçons publiées</p>
            <p className="mt-2 font-display text-3xl">
              {state.lessons.filter((l) => l.published).length}
            </p>
            <Link href="/formateur/contenu" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Éditer le contenu
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
              {state.lessons[0]?.title ?? "Module en préparation"}
            </h2>
            <div className="mt-4">
              <ProgressBar value={lessonPct} label="Leçons terminées" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/theorie/lesson-1">
                <Button>Continuer la théorie</Button>
              </Link>
              <Link href="/exercices">
                <Button variant="secondary">S&apos;entraîner</Button>
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
                {state.classRoom.name}
              </p>
              <p className="text-xs text-ink-subtle">{state.classRoom.year}</p>
            </Panel>
          </div>
        </div>
      )}
    </div>
  );
}
