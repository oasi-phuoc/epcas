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
import type { Lesson } from "@/lib/types";

function LessonEditor({
  lesson,
  onSave,
}: {
  lesson: Lesson;
  onSave: (next: Lesson) => void;
}) {
  const [title, setTitle] = useState(lesson.title);
  const [full, setFull] = useState(lesson.contentFull);
  const [summary, setSummary] = useState(lesson.contentSummary);
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSave({
      ...lesson,
      title,
      contentFull: full,
      contentSummary: summary,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <Alert tone="success">Page enregistrée (stockage local démo).</Alert>
      ) : null}
    </form>
  );
}

export default function ContenuPage() {
  const { currentUser, state, updateLesson } = useAppStore();

  const blocks = useMemo(
    () => [...state.blocks].sort((a, b) => a.order - b.order),
    [state.blocks],
  );

  const modulesSorted = useMemo(
    () => [...state.modules].sort((a, b) => a.code.localeCompare(b.code)),
    [state.modules],
  );

  const defaultLesson = state.lessons.find((l) => l.id === "lesson-101-theorie");
  const defaultModule =
    modulesSorted.find((m) => m.id === defaultLesson?.moduleId) ??
    modulesSorted[0];
  const defaultBlock =
    blocks.find((b) => b.id === defaultModule?.blockId) ?? blocks[0];

  const [blockId, setBlockId] = useState(defaultBlock?.id ?? "");
  const [moduleId, setModuleId] = useState(defaultModule?.id ?? "");
  const [lessonId, setLessonId] = useState(
    defaultLesson?.id ?? state.lessons[0]?.id ?? "",
  );

  const effectiveBlockId = blocks.some((b) => b.id === blockId)
    ? blockId
    : (blocks[0]?.id ?? "");

  const modulesInBlock = useMemo(
    () => modulesSorted.filter((m) => m.blockId === effectiveBlockId),
    [modulesSorted, effectiveBlockId],
  );

  const effectiveModuleId = modulesInBlock.some((m) => m.id === moduleId)
    ? moduleId
    : (modulesInBlock[0]?.id ?? "");

  const lessonsInModule = useMemo(
    () =>
      state.lessons
        .filter((l) => l.moduleId === effectiveModuleId)
        .sort((a, b) => a.order - b.order),
    [state.lessons, effectiveModuleId],
  );

  const effectiveLessonId = lessonsInModule.some((l) => l.id === lessonId)
    ? lessonId
    : (lessonsInModule[0]?.id ?? "");

  const lesson = state.lessons.find((l) => l.id === effectiveLessonId);

  const blockOptions = useMemo(
    () =>
      blocks.map((b) => ({
        value: b.id,
        label: `${b.code} — ${b.title}`,
      })),
    [blocks],
  );

  const moduleOptions = useMemo(
    () =>
      modulesInBlock.map((m) => ({
        value: m.id,
        label: `${m.code} — ${m.title}`,
      })),
    [modulesInBlock],
  );

  const lessonOptions = useMemo(
    () => lessonsInModule.map((l) => ({ value: l.id, label: l.title })),
    [lessonsInModule],
  );

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }
  if (!lesson || modulesSorted.length === 0) {
    return (
      <EmptyState
        title="Aucune leçon à éditer"
        description="Profil → Reset démo pour recharger le curriculum."
      />
    );
  }

  function onBlockChange(id: string) {
    setBlockId(id);
    const firstMod = modulesSorted.filter((m) => m.blockId === id)[0];
    if (!firstMod) return;
    setModuleId(firstMod.id);
    const firstPage = state.lessons
      .filter((l) => l.moduleId === firstMod.id)
      .sort((a, b) => a.order - b.order)[0];
    if (firstPage) setLessonId(firstPage.id);
  }

  function onModuleChange(id: string) {
    setModuleId(id);
    const first = state.lessons
      .filter((l) => l.moduleId === id)
      .sort((a, b) => a.order - b.order)[0];
    if (first) setLessonId(first.id);
  }

  return (
    <div>
      <PageHeader
        title="Contenu théorique"
        description={`Sélectionnez un bloc EnterSite, puis un module (${modulesSorted.length} modules) et éditez Complet / Résumé.`}
      />
      <Panel>
        <div className="mb-4">
          <Alert tone="info">
            Choisissez d&apos;abord le <strong>Bloc</strong> (100, 200…), puis le{" "}
            <strong>Module</strong>. Si la liste est incomplète : Profil → Reset
            démo.
          </Alert>
        </div>
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          <Select
            label="Bloc"
            options={blockOptions}
            value={effectiveBlockId}
            onChange={(e) => onBlockChange(e.target.value)}
          />
          <Select
            label={`Module (${moduleOptions.length})`}
            options={moduleOptions}
            value={effectiveModuleId}
            onChange={(e) => onModuleChange(e.target.value)}
          />
          <Select
            label="Page"
            options={lessonOptions}
            value={effectiveLessonId}
            onChange={(e) => setLessonId(e.target.value)}
          />
        </div>
        <LessonEditor
          key={lesson.id}
          lesson={lesson}
          onSave={updateLesson}
        />
      </Panel>
    </div>
  );
}
