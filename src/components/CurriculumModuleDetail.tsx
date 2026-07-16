"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Alert,
  Button,
  PageHeader,
  Panel,
} from "@/components/ui";
import { getLessonBody } from "@/lib/lesson-content";
import { moduleVisibleForLevel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore, useExercises } from "@/lib/store";
import { isInformatiqueCurriculumModuleCode } from "@/lib/informatique-curriculum";
import type { LessonPageSlug } from "@/lib/types";

const interactiveTypeLabel = {
  qcm: "QCM",
  math: "Maths",
  open: "Ouverte",
} as const;

type CurriculumModuleDetailProps = {
  pageSlugs: LessonPageSlug[];
  sectionHref: string;
  lessonHrefBase: string;
  /** Affiche aussi les exercices interactifs (QCM…) rattachés au module */
  includeInteractiveExercises?: boolean;
  /** Inclure les exercices interactifs même hors séquence année (modules informatique). */
  allowInformatiqueExerciseAccess?: boolean;
};

export function CurriculumModuleDetail({
  pageSlugs,
  sectionHref,
  lessonHrefBase,
  includeInteractiveExercises = false,
  allowInformatiqueExerciseAccess = false,
}: CurriculumModuleDetailProps) {
  const params = useParams<{ moduleId: string }>();
  const { state, currentUser, getUserProgress, userLevel } = useAppStore();
  const sequenceExercises = useExercises();

  if (!currentUser) return null;

  const mod = state.modules.find((m) => m.id === params.moduleId);
  if (!mod) {
    return <Alert tone="danger">Module introuvable.</Alert>;
  }

  const isTrainer = isStaffRole(currentUser.role);
  if (!isTrainer && !moduleVisibleForLevel(mod, userLevel)) {
    return (
      <Alert tone="danger">
        Ce module est réservé au niveau CFC. Votre classe est en {userLevel}.
      </Alert>
    );
  }

  const progress = getUserProgress(currentUser.id);
  const slugSet = new Set(pageSlugs);
  const lessons = state.lessons
    .filter(
      (l) =>
        l.moduleId === mod.id && l.published && slugSet.has(l.pageSlug),
    )
    .sort((a, b) => a.order - b.order);

  const moduleLessonIds = new Set(
    state.lessons.filter((l) => l.moduleId === mod.id).map((l) => l.id),
  );
  const allPublishedExercises = state.exercises.filter((e) => e.published);
  const exercises =
    allowInformatiqueExerciseAccess && isInformatiqueCurriculumModuleCode(mod.code)
      ? allPublishedExercises
      : sequenceExercises;
  const interactive = includeInteractiveExercises
    ? exercises.filter(
        (ex) => ex.lessonId && moduleLessonIds.has(ex.lessonId),
      )
    : [];

  return (
    <div>
      <PageHeader
        title={`Module ${mod.code}`}
        description={mod.title}
        backHref={sectionHref}
        backLabel="Retour aux blocs"
      />

      <Panel>
        <ul className="space-y-2">
          {lessons.map((lesson) => {
            const p = progress.find((x) => x.lessonId === lesson.id);
            const body = getLessonBody(
              lesson,
              isTrainer ? "CFC" : userLevel,
              "full",
            );
            const isPlaceholder = body.includes("Contenu à importer");
            return (
              <li key={lesson.id}>
                <Link
                  href={`${lessonHrefBase}/${lesson.id}`}
                  className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
                >
                  <span>
                    <span className="font-medium text-ink">{lesson.title}</span>
                    {isPlaceholder ? (
                      <span className="mt-0.5 block text-xs text-ink-subtle">
                        Placeholder — à remplir depuis OneNote
                      </span>
                    ) : (
                      <span className="mt-0.5 block text-xs text-primary-strong">
                        Contenu disponible
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 text-xs text-ink-muted">
                    {p?.status === "done"
                      ? "Lu"
                      : p?.status === "reading"
                        ? "En cours"
                        : "À lire"}
                  </span>
                </Link>
              </li>
            );
          })}

          {interactive.map((ex) => (
            <li key={ex.id}>
              <Link
                href={`/exercices/${ex.id}`}
                className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
              >
                <span>
                  <span className="font-medium text-ink">{ex.title}</span>
                  <span className="mt-0.5 block text-xs text-ink-subtle">
                    {interactiveTypeLabel[ex.type]} · {ex.difficulty}
                  </span>
                </span>
                <span className="shrink-0 text-xs text-ink-muted">Interactif</span>
              </Link>
            </li>
          ))}
        </ul>

        {lessons.length === 0 && interactive.length === 0 ? (
          <p className="text-sm text-ink-muted">
            Aucune page dans cette section pour ce module.
          </p>
        ) : null}
      </Panel>
    </div>
  );
}
