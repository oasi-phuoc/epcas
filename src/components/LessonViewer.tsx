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
import { BookMarkdown } from "@/components/BookMarkdown";
import {
  getLessonBody,
  isExercisePageSlug,
} from "@/lib/lesson-content";
import { moduleVisibleForLevel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { splitMarkdownBook } from "@/lib/markdown-book";
import { useAppStore } from "@/lib/store";

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

  /** Mode complet : feuilleter par ### ; résumé = tout regroupé */
  const book = !summaryMode ? splitMarkdownBook(body) : null;
  const headerTitle =
    !summaryMode && book?.chapterTitle ? book.chapterTitle : lesson.title;

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
        title={headerTitle}
        description={
          mod
            ? summaryMode
              ? `Module ${mod.code} — ${mod.title} · Résumé regroupé`
              : `Module ${mod.code} — ${mod.title} · ${lesson.title}`
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
          description="Regroupe tous les points clés sur une seule page"
        />
      </div>

      <Panel className="animate-fade-up">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge tone={summaryMode ? "accent" : "primary"}>
            {summaryMode ? "Résumé" : "Complet"}
          </Badge>
          {mod ? <Badge tone="neutral">{mod.code}</Badge> : null}
          {!summaryMode && book && book.pages.length > 1 ? (
            <Badge tone="neutral">{book.pages.length} feuillets</Badge>
          ) : null}
          {progress?.status === "done" ? (
            <Badge tone="success">Lu</Badge>
          ) : null}
        </div>
        <BookMarkdown
          text={body}
          paginate={!summaryMode}
          resetKey={`${lessonId}-${summaryMode ? "sum" : "full"}`}
        />
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
