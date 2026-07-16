"use client";

import Link from "next/link";
import {
  PageHeader,
  Panel,
  ProgressBar,
  Button,
} from "@/components/ui";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore, useVisibleModules } from "@/lib/store";

export default function AccueilPage() {
  const {
    currentUser,
    state,
    getUserProgress,
    getAttemptsForUser,
    userLevel,
    userStudyYear,
  } = useAppStore();
  const visibleModules = useVisibleModules();
  if (!currentUser) return null;

  const isStaff = isStaffRole(currentUser.role);
  const progress = getUserProgress(currentUser.id);
  const attempts = getAttemptsForUser(currentUser.id);
  const firstModule = visibleModules[0];
  const focusLessons = firstModule
    ? state.lessons.filter((l) => l.moduleId === firstModule.id)
    : [];
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
          isStaff
            ? "Gérez les comptes, les séquences, le contenu et le suivi."
            : `Continuez votre formation ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]}.`
        }
      />

      {isStaff ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Panel>
            <p className="text-sm text-ink-muted">Apprentis actifs</p>
            <p className="mt-2 font-display text-3xl">
              {
                state.users.filter((u) => u.role === "apprentice" && u.active)
                  .length
              }
            </p>
            <Link href="/formateur/classes" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Gérer les classes
              </Button>
            </Link>
          </Panel>
          <Panel>
            <p className="text-sm text-ink-muted">Séquences</p>
            <p className="mt-2 font-display text-3xl">
              {state.sequences.filter((s) => s.moduleIds.length > 0).length}
            </p>
            <Link href="/formateur/sequences" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Configurer l&apos;ordre
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
            <p className="text-sm text-ink-muted">Suivi & tâches</p>
            <p className="mt-2 font-display text-3xl">
              {state.classTasks.filter((t) => t.status !== "done").length}
            </p>
            <Link href="/formateur/classes" className="mt-4 inline-block">
              <Button size="sm" variant="secondary">
                Ouvrir les classes
              </Button>
            </Link>
          </Panel>
        </div>
      ) : (
        <div className="space-y-4">
          <Panel className="animate-fade-up">
            <h2 className="font-display text-2xl">
              {firstModule
                ? `Module ${firstModule.code} — ${firstModule.title}`
                : "Aucun module dans votre séquence"}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              {visibleModules.length} modules au programme de votre année
            </p>
            {firstModule ? (
              <div className="mt-4">
                <ProgressBar
                  value={lessonPct}
                  label={`Module ${firstModule.code} — pages lues`}
                />
              </div>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/logistique/theorie">
                <Button>Voir mon parcours</Button>
              </Link>
              <Link href="/logistique/exercices">
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
              <p className="mt-1 text-xs text-ink-subtle">
                {classroom?.year}
                {classroom
                  ? ` · ${classroom.level} · ${STUDY_YEAR_LABELS[classroom.studyYear]}`
                  : null}
              </p>
            </Panel>
          </div>
        </div>
      )}
    </div>
  );
}
