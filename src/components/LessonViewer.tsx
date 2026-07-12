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
import { AnnotatedMarkdown } from "@/components/AnnotatedMarkdown";
import { MarkdownLite } from "@/components/MarkdownLite";
import {
  getLessonBody,
  isExercisePageSlug,
} from "@/lib/lesson-content";
import { moduleVisibleForLevel } from "@/lib/levels";
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
    getLessonAnnotations,
    addTextAnnotation,
    deleteTextAnnotations,
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
  const displayMode = summaryMode ? "summary" : "full";
  const body = getLessonBody(
    lesson,
    isTrainer ? "CFC" : userLevel,
    displayMode,
  );
  const isPlaceholder = body.includes("Contenu à importer");

  /** Annotations personnelles : apprentis sur la théorie uniquement */
  const canAnnotate =
    !isTrainer && !exercisePage && currentUser.role === "apprentice";
  const annotations = canAnnotate
    ? getLessonAnnotations(currentUser.id, lessonId, displayMode)
    : [];

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
        {canAnnotate ? (
          <AnnotatedMarkdown
            text={body}
            annotations={annotations}
            canAnnotate
            userId={currentUser.id}
            lessonId={lessonId}
            mode={displayMode}
            onAdd={addTextAnnotation}
            onDelete={deleteTextAnnotations}
          />
        ) : (
          <MarkdownLite text={body} />
        )}
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
