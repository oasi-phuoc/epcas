"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
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
import { moduleVisibleForLevel } from "@/lib/levels";
import { useAppStore } from "@/lib/store";

export default function LessonPage() {
  const params = useParams<{ lessonId: string }>();
  const { state, currentUser, getUserProgress, setLessonProgress, userLevel } =
    useAppStore();

  const lesson = state.lessons.find((l) => l.id === params.lessonId);
  const mod = lesson
    ? state.modules.find((m) => m.id === lesson.moduleId)
    : undefined;
  const progress = useMemo(() => {
    if (!currentUser) return null;
    return (
      getUserProgress(currentUser.id).find(
        (p) => p.lessonId === params.lessonId,
      ) ?? null
    );
  }, [currentUser, getUserProgress, params.lessonId]);

  if (!currentUser) return null;
  if (!lesson) {
    return <Alert tone="danger">Leçon introuvable.</Alert>;
  }

  const isTrainer = currentUser.role === "trainer";
  if (
    !isTrainer &&
    mod &&
    !moduleVisibleForLevel(mod, userLevel)
  ) {
    return (
      <Alert tone="danger">
        Cette page appartient à un module réservé au CFC. Votre classe est en{" "}
        {userLevel}.
      </Alert>
    );
  }

  const summaryMode = progress?.modePref === "summary";
  const isPlaceholder = lesson.contentFull.includes("Contenu à importer");

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
          <Link href={mod ? `/theorie/module/${mod.id}` : "/theorie"}>
            <Button variant="ghost" size="sm">
              ← Module
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
        <MarkdownLite
          text={summaryMode ? lesson.contentSummary : lesson.contentFull}
        />
        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-4">
          <Button onClick={markDone}>Marquer comme lu</Button>
          <Link href="/exercices">
            <Button variant="secondary">Passer aux exercices</Button>
          </Link>
        </div>
      </Panel>
    </div>
  );
}
