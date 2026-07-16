"use client";

import { useEffect, useMemo, useState } from "react";
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
import { TheoryChapterNav } from "@/components/TheoryChapterNav";
import {
  getLessonBody,
  isExercisePageSlug,
  isTheoryPageSlug,
  MODULE_EXERCISE_PAGE_SLUGS,
} from "@/lib/lesson-content";
import { moduleVisibleForLevel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore } from "@/lib/store";
import {
  loadTheoryChapterIndex,
  saveTheoryChapterIndex,
  splitTheoryChapters,
} from "@/lib/theory-chapters";

type LessonViewerProps = {
  lessonId: string;
};

export function LessonViewer({ lessonId }: LessonViewerProps) {
  const { state, currentUser, getUserProgress, setLessonProgress, userLevel } =
    useAppStore();

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

  const isTrainer = Boolean(currentUser && isStaffRole(currentUser.role));
  const isTheoryPage = lesson ? isTheoryPageSlug(lesson.pageSlug) : false;
  const isInteractiveExercisePage = lesson
    ? MODULE_EXERCISE_PAGE_SLUGS.includes(lesson.pageSlug)
    : false;
  const summaryMode = isTheoryPage && progress?.modePref === "summary";
  const isTheoryBody = lesson?.pageSlug === "theorie";

  const body = useMemo(() => {
    if (!lesson) return "";
    return getLessonBody(
      lesson,
      isTrainer ? "CFC" : userLevel,
      summaryMode ? "summary" : "full",
    );
  }, [lesson, isTrainer, userLevel, summaryMode]);

  const chapters = useMemo(
    () => (isTheoryBody ? splitTheoryChapters(body) : null),
    [isTheoryBody, body],
  );

  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    if (!isTheoryBody) {
      setChapterIndex(0);
      return;
    }
    const saved = loadTheoryChapterIndex(lessonId);
    setChapterIndex(saved ?? 0);
  }, [lessonId, isTheoryBody]);

  useEffect(() => {
    if (!chapters || chapters.length <= 1) return;
    if (chapterIndex > chapters.length - 1) {
      setChapterIndex(chapters.length - 1);
    }
  }, [chapters, chapterIndex]);

  if (!currentUser) return null;
  if (!lesson) {
    return <Alert tone="danger">Leçon introuvable.</Alert>;
  }

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

  const isPlaceholder = body.includes("Contenu à importer");
  const paginated = Boolean(chapters && chapters.length > 1);
  const safeIndex = paginated
    ? Math.min(Math.max(chapterIndex, 0), chapters!.length - 1)
    : 0;
  const displayBody =
    paginated && chapters ? chapters[safeIndex]?.markdown ?? body : body;

  function goToChapter(index: number) {
    if (!chapters) return;
    const next = Math.min(Math.max(index, 0), chapters.length - 1);
    setChapterIndex(next);
    saveTheoryChapterIndex(lessonId, next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

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
            : isTheoryPage
              ? "Basculez en mode résumé pour réviser."
              : undefined
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

      {isTheoryPage ? (
        <div className="mb-4 animate-soft-pop">
          <Switch
            checked={summaryMode}
            onChange={toggleMode}
            label="Mode résumé"
            description="Affiche uniquement les points clés à retenir"
          />
        </div>
      ) : null}

      <Panel className="animate-fade-up">
        <div className="mb-4 flex flex-wrap gap-2">
          {isTheoryPage ? (
            <Badge tone={summaryMode ? "accent" : "primary"}>
              {summaryMode ? "Résumé" : "Complet"}
            </Badge>
          ) : null}
          {mod ? <Badge tone="neutral">{mod.code}</Badge> : null}
          {progress?.status === "done" ? (
            <Badge tone="success">Lu</Badge>
          ) : null}
          {paginated ? (
            <Badge tone="neutral">
              Chapitre {safeIndex + 1}/{chapters!.length}
            </Badge>
          ) : null}
        </div>

        {paginated && chapters ? (
          <TheoryChapterNav
            chapters={chapters}
            pageIndex={safeIndex}
            onPageChange={goToChapter}
            placement="top"
          />
        ) : null}

        <MarkdownLite
          text={displayBody}
          answerMode={
            isInteractiveExercisePage && !isTrainer ? "input" : "reveal"
          }
          answerStorageKey={
            isInteractiveExercisePage && !isTrainer && currentUser
              ? `${currentUser.id}:${lessonId}`
              : undefined
          }
        />

        {paginated && chapters ? (
          <TheoryChapterNav
            chapters={chapters}
            pageIndex={safeIndex}
            onPageChange={goToChapter}
            placement="bottom"
          />
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
