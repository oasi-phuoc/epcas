"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Alert,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  Select,
  TextArea,
  TextField,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function ContenuPage() {
  const { currentUser, state, updateLesson } = useAppStore();
  const defaultLessonId = "lesson-101-theorie";
  const [lessonId, setLessonId] = useState(defaultLessonId);

  const lesson = state.lessons.find((l) => l.id === lessonId);
  const [title, setTitle] = useState(lesson?.title ?? "");
  const [full, setFull] = useState(lesson?.contentFull ?? "");
  const [summary, setSummary] = useState(lesson?.contentSummary ?? "");
  const [saved, setSaved] = useState(false);

  const moduleOptions = useMemo(
    () =>
      [...state.modules]
        .sort((a, b) => a.code.localeCompare(b.code))
        .map((m) => ({
          value: m.id,
          label: `${m.code} — ${m.title}`,
        })),
    [state.modules],
  );

  const currentModuleId = lesson?.moduleId ?? state.modules[0]?.id ?? "";
  const [moduleId, setModuleId] = useState(currentModuleId);

  const lessonOptions = useMemo(() => {
    return state.lessons
      .filter((l) => l.moduleId === moduleId)
      .sort((a, b) => a.order - b.order)
      .map((l) => ({ value: l.id, label: l.title }));
  }, [state.lessons, moduleId]);

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }
  if (!lesson) {
    return <EmptyState title="Aucune leçon à éditer" />;
  }

  function loadLesson(id: string) {
    const next = state.lessons.find((l) => l.id === id);
    if (!next) return;
    setLessonId(id);
    setTitle(next.title);
    setFull(next.contentFull);
    setSummary(next.contentSummary);
    setSaved(false);
  }

  function onModuleChange(id: string) {
    setModuleId(id);
    const first = state.lessons
      .filter((l) => l.moduleId === id)
      .sort((a, b) => a.order - b.order)[0];
    if (first) loadLesson(first.id);
  }

  function onSave(e: FormEvent) {
    e.preventDefault();
    updateLesson({
      ...lesson!,
      title,
      contentFull: full,
      contentSummary: summary,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <PageHeader
        title="Contenu théorique"
        description="Sélectionnez un module EnterSite, puis éditez Complet / Résumé."
      />
      <Panel>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <Select
            label="Module"
            options={moduleOptions}
            value={moduleId}
            onChange={(e) => onModuleChange(e.target.value)}
          />
          <Select
            label="Page"
            options={lessonOptions}
            value={lessonId}
            onChange={(e) => loadLesson(e.target.value)}
          />
        </div>
        <form onSubmit={onSave} className="space-y-4">
          <TextField
            label="Titre de la page"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextArea
            label="Contenu complet"
            className="min-h-48"
            value={full}
            onChange={(e) => setFull(e.target.value)}
            hint="Markdown simple : ## titres, - listes, **gras**"
            required
          />
          <TextArea
            label="Contenu résumé"
            className="min-h-32"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            hint="Points clés uniquement"
            required
          />
          <Button type="submit">Enregistrer</Button>
          {saved ? (
            <Alert tone="success">
              Page enregistrée (stockage local démo).
            </Alert>
          ) : null}
        </form>
      </Panel>
    </div>
  );
}
