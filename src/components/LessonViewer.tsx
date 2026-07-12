"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Alert,
  Badge,
  Button,
  PageHeader,
  Panel,
  Switch,
} from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import {
  getLessonBody,
  isExercisePageSlug,
} from "@/lib/lesson-content";
import { moduleVisibleForLevel } from "@/lib/levels";
import { QUESTION_TYPE_META } from "@/lib/question-templates";
import { isStaffRole } from "@/lib/roles";
import { useAppStore } from "@/lib/store";

type LessonViewerProps = {
  lessonId: string;
};

export function LessonViewer({ lessonId }: LessonViewerProps) {
  const {
    state,
    currentUser,
    getUserProgress,
    setLessonProgress,
    userLevel,
    getLessonQuestions,
  } = useAppStore();

  const lesson = state.lessons.find((l) => l.id === lessonId);
  const mod = lesson
    ? state.modules.find((m) => m.id === lesson.moduleId)
    : undefined;
  const progress = useMemo(() => {
    if (!currentUser) return null;
    return (
      getUserProgress(currentUser.id).find((p) => p.lessonId === lessonId) ??
      null
    );
  }, [currentUser, getUserProgress, lessonId]);

  const lessonQuestions = useMemo(
    () => getLessonQuestions(lessonId),
    [getLessonQuestions, lessonId],
  );

  if (!currentUser) return null;
  if (!lesson) {
    return <Alert tone="danger">Leçon introuvable.</Alert>;
  }

  const isTrainer = isStaffRole(currentUser.role);
  if (!isTrainer && mod && !moduleVisibleForLevel(mod, userLevel)) {
    return (
      <Alert tone="danger">
        Cette page appartient à un module réservé au CFC. Votre classe est en{" "}
        {userLevel}.
      </Alert>
    );
  }

  const exercisePage = isExercisePageSlug(lesson.pageSlug);
  const backHref = exercisePage
    ? mod
      ? `/exercices/module/${mod.id}`
      : "/exercices"
    : mod
      ? `/theorie/module/${mod.id}`
      : "/theorie";
  const backLabel = "← Module";

  const summaryMode = progress?.modePref === "summary";
  const body = getLessonBody(
    lesson,
    isTrainer ? "CFC" : userLevel,
    summaryMode ? "summary" : "full",
  );
  const isPlaceholder = body.includes("Contenu à importer");

  function toggleMode(checked: boolean) {
    setLessonProgress(currentUser!.id, lesson!.id, {
      modePref: checked ? "summary" : "full",
      status: progress?.status === "done" ? "done" : "reading",
    });
  }

  function markDone() {
    setLessonProgress(currentUser!.id, lesson!.id, { status: "done" });
  }

  return (
    <div>
      <PageHeader
        title={lesson.title}
        description={
          mod
            ? `Module ${mod.code} — ${mod.title}`
            : "Basculez en mode résumé pour réviser."
        }
        actions={
          <Link href={backHref}>
            <Button variant="ghost" size="sm">
              {backLabel}
            </Button>
          </Link>
        }
      />

      {isPlaceholder ? (
        <div className="mb-4">
          <Alert tone="info">
            Placeholder EnterSite — contenu OneNote à importer. Le formateur
            peut déjà éditer cette page.
          </Alert>
        </div>
      ) : null}

      <div className="mb-4 animate-soft-pop">
        <Switch
          checked={summaryMode}
          onChange={toggleMode}
          label="Mode résumé"
          description="Affiche uniquement les points clés à retenir"
        />
      </div>

      <Panel className="animate-fade-up">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge tone={summaryMode ? "accent" : "primary"}>
            {summaryMode ? "Résumé" : "Complet"}
          </Badge>
          {mod ? <Badge tone="neutral">{mod.code}</Badge> : null}
          {progress?.status === "done" ? (
            <Badge tone="success">Lu</Badge>
          ) : null}
        </div>
        <MarkdownLite text={body} />
        {exercisePage && lessonQuestions.length > 0 ? (
          <div className="mt-8 space-y-4 border-t border-border pt-6">
            <h2 className="font-display text-xl text-ink">
              Questions ({lessonQuestions.length})
            </h2>
            {lessonQuestions.map((q, index) => {
              const payload = q.payload as { question?: string };
              return (
                <div
                  key={q.id}
                  className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-4"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge tone="neutral">
                      {index + 1}. {QUESTION_TYPE_META[q.type].short}
                    </Badge>
                    <Badge tone="accent">{q.points} pt</Badge>
                  </div>
                  <p className="mb-2 text-sm font-medium text-ink">{q.title}</p>
                  {payload.question ? (
                    <MarkdownLite text={payload.question} />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-4">
          <Button onClick={markDone}>Marquer comme lu</Button>
          {!exercisePage ? (
            <Link href="/exercices">
              <Button variant="secondary">Passer aux exercices</Button>
            </Link>
          ) : null}
        </div>
      </Panel>
    </div>
  );
}
