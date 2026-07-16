"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Alert,
  Badge,
  Button,
  PageHeader,
  Panel,
} from "@/components/ui";
import { getLessonBody } from "@/lib/lesson-content";
import { levelsLabel, moduleVisibleForLevel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore, useExercises } from "@/lib/store";
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
};

export function CurriculumModuleDetail({
  pageSlugs,
  sectionHref,
  lessonHrefBase,
  includeInteractiveExercises = false,
}: CurriculumModuleDetailProps) {
  const params = useParams<{ moduleId: string }>();
  const { state, currentUser, getUserProgress, userLevel } = useAppStore();
  const exercises = useExercises();

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

  const block = state.blocks.find((b) => b.id === mod.blockId);
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

      <div className="mb-4 flex flex-wrap gap-2">
        {block ? (
          <Badge>
            {block.code} · {block.title}
          </Badge>
        ) : null}
        <Badge tone="neutral">
          {lessons.length + interactive.length} pages
        </Badge>
        <Badge tone="accent">{levelsLabel(mod.levels)}</Badge>
      </div>

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
                  <Badge
                    tone={
                      p?.status === "done"
                        ? "success"
                        : p?.status === "reading"
                          ? "accent"
                          : "neutral"
                    }
                  >
                    {p?.status === "done"
                      ? "Lu"
                      : p?.status === "reading"
                        ? "En cours"
                        : "À lire"}
                  </Badge>
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
                <Badge tone="accent">Interactif</Badge>
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
