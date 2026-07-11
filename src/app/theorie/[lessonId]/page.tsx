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
import { useAppStore } from "@/lib/store";

function renderMarkdownLite(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("#### ")) {
      return (
        <h4 key={i} className="mt-4 text-base font-semibold text-ink">
          {line.replace("#### ", "")}
        </h4>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-5 font-display text-xl text-ink">
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-6 font-display text-2xl text-ink first:mt-0">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-5 list-disc text-ink-muted">
          {formatInline(line.slice(2))}
        </li>
      );
    }
    if (/^\d+\.\s/.test(line)) {
      return (
        <li key={i} className="ml-5 list-decimal text-ink-muted">
          {formatInline(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    }
    if (!line.trim()) return <div key={i} className="h-2" />;
    return (
      <p key={i} className="text-ink-muted leading-relaxed">
        {formatInline(line)}
      </p>
    );
  });
}

function formatInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function LessonPage() {
  const params = useParams<{ lessonId: string }>();
  const { state, currentUser, getUserProgress, setLessonProgress } =
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
        <div className="space-y-1">
          {renderMarkdownLite(
            summaryMode ? lesson.contentSummary : lesson.contentFull,
          )}
        </div>
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
