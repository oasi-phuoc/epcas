"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  Select,
  TextArea,
  TextField,
} from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import { MarkdownToolbar } from "@/components/MarkdownToolbar";
import {
  DIPLOMA_LEVELS,
  levelsLabel,
  toggleLevel,
} from "@/lib/levels";
import { useAppStore } from "@/lib/store";
import { useEditorHistory } from "@/lib/use-editor-history";
import type { DiplomaLevel, Lesson } from "@/lib/types";
import { Eye, Pencil, Redo2, Undo2 } from "lucide-react";

function LessonEditor({
  lesson,
  onSave,
}: {
  lesson: Lesson;
  onSave: (next: Lesson) => void;
}) {
  const {
    present,
    setPresent,
    undo,
    redo,
    canUndo,
    canRedo,
    historyDepth,
    historyLimit,
  } = useEditorHistory({
    title: lesson.title,
    full: lesson.contentFull,
    summary: lesson.contentSummary,
  });

  const { title, full, summary } = present;
  const [saved, setSaved] = useState(false);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [which, setWhich] = useState<"full" | "summary">("full");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activeValue = which === "full" ? full : summary;

  function setActiveValue(
    next: string,
    history: "debounce" | "immediate" = "debounce",
  ) {
    setPresent(
      (prev) =>
        which === "full"
          ? { ...prev, full: next }
          : { ...prev, summary: next },
      { history },
    );
  }

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

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      } else if (key === "y" || (key === "z" && e.shiftKey)) {
        e.preventDefault();
        redo();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo, redo]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant={mode === "edit" ? "primary" : "secondary"}
          onClick={() => setMode("edit")}
        >
          <Pencil className="h-4 w-4" />
          Édition
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "preview" ? "primary" : "secondary"}
          onClick={() => setMode("preview")}
        >
          <Eye className="h-4 w-4" />
          Preview
        </Button>

        <div className="flex flex-wrap items-center gap-1 border-l border-border pl-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            disabled={!canUndo}
            onClick={undo}
            title="Annuler (Ctrl+Z)"
          >
            <Undo2 className="h-4 w-4" />
            Précédent
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            disabled={!canRedo}
            onClick={redo}
            title="Rétablir (Ctrl+Y)"
          >
            <Redo2 className="h-4 w-4" />
            Suivant
          </Button>
          <span className="px-1 text-xs text-ink-subtle">
            {historyDepth}/{historyLimit}
          </span>
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={which === "full" ? "primary" : "ghost"}
            onClick={() => setWhich("full")}
          >
            Complet
          </Button>
          <Button
            type="button"
            size="sm"
            variant={which === "summary" ? "primary" : "ghost"}
            onClick={() => setWhich("summary")}
          >
            Résumé
          </Button>
        </div>
      </div>

      <TextField
        label="Titre de la page"
        value={title}
        onChange={(e) =>
          setPresent((prev) => ({ ...prev, title: e.target.value }), {
            history: "debounce",
          })
        }
        required
      />

      {mode === "edit" ? (
        <>
          <MarkdownToolbar
            textareaRef={textareaRef}
            value={activeValue}
            onChange={(next) => setActiveValue(next, "immediate")}
          />
          <TextArea
            ref={textareaRef}
            label={
              which === "full"
                ? "Contenu complet"
                : "Contenu résumé"
            }
            className="min-h-72 text-justify text-sm leading-relaxed"
            value={activeValue}
            onChange={(e) => setActiveValue(e.target.value, "debounce")}
            hint="Précédent / Suivant pour annuler ou rétablir (Ctrl+Z / Ctrl+Y). Jusqu'à 40 étapes."
            required
          />
        </>
      ) : (
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone={which === "summary" ? "accent" : "primary"}>
              {which === "summary" ? "Résumé" : "Complet"}
            </Badge>
            <Badge tone="neutral">Preview formateur</Badge>
          </div>
          <h2 className="mb-4 font-display text-2xl text-ink sm:text-3xl">
            {title || "Sans titre"}
          </h2>
          <MarkdownLite text={activeValue} />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Button type="submit">Enregistrer</Button>
        {mode === "edit" ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setMode("preview")}
          >
            Voir le Preview
          </Button>
        ) : (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setMode("edit")}
          >
            Revenir à l&apos;édition
          </Button>
        )}
      </div>
      {saved ? (
        <Alert tone="success">Page enregistrée (stockage local démo).</Alert>
      ) : null}
    </form>
  );
}

export default function ContenuPage() {
  const { currentUser, state, updateLesson, updateModule } = useAppStore();
  const [levelFilter, setLevelFilter] = useState<"all" | DiplomaLevel>("all");

  const blocks = useMemo(
    () => [...state.blocks].sort((a, b) => a.order - b.order),
    [state.blocks],
  );

  const modulesSorted = useMemo(() => {
    const list = [...state.modules].sort((a, b) =>
      a.code.localeCompare(b.code),
    );
    if (levelFilter === "all") return list;
    return list.filter((m) => m.levels.includes(levelFilter));
  }, [state.modules, levelFilter]);

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

  const blockOptions = useMemo(() => {
    const withModules = new Set(modulesSorted.map((m) => m.blockId));
    return blocks
      .filter((b) => withModules.has(b.id))
      .map((b) => ({
        value: b.id,
        label: `${b.code} — ${b.title}`,
      }));
  }, [blocks, modulesSorted]);

  const effectiveBlockId = blockOptions.some((b) => b.value === blockId)
    ? blockId
    : (blockOptions[0]?.value ?? "");

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
  const currentModule = state.modules.find((m) => m.id === effectiveModuleId);

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
        description={`Éditez avec la barre de formatage (style Word), puis Preview. ${state.modules.length} modules · filtre niveau.`}
      />
      <Panel>
        <div className="mb-4">
          <Alert tone="info">
            Sélectionnez du texte, puis cliquez sur un bouton (Titre, Gras,
            Puces…). Utilisez Précédent / Suivant (Ctrl+Z / Ctrl+Y) pour annuler
            jusqu&apos;à 40 modifications. Assignez chaque module à AFP, CFC ou
            les deux.
          </Alert>
        </div>
        <div className="mb-4">
          <Select
            label="Filtrer les modules par niveau"
            options={[
              { value: "all", label: "Tous les modules" },
              { value: "AFP", label: "AFP seulement" },
              { value: "CFC", label: "CFC seulement" },
            ]}
            value={levelFilter}
            onChange={(e) =>
              setLevelFilter(e.target.value as "all" | DiplomaLevel)
            }
          />
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

        {currentModule ? (
          <div className="mb-4 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3">
            <p className="mb-2 text-sm font-medium text-ink">
              Niveaux du module {currentModule.code} —{" "}
              {levelsLabel(currentModule.levels)}
            </p>
            <div className="flex flex-wrap gap-2">
              {DIPLOMA_LEVELS.map((level) => {
                const active = currentModule.levels.includes(level);
                return (
                  <Button
                    key={level}
                    type="button"
                    size="sm"
                    variant={active ? "primary" : "secondary"}
                    onClick={() =>
                      updateModule({
                        ...currentModule,
                        levels: toggleLevel(currentModule.levels, level),
                      })
                    }
                  >
                    {level}
                  </Button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-ink-subtle">
              Les apprentis ne voient que les modules de leur niveau de classe.
            </p>
          </div>
        ) : null}

        <LessonEditor
          key={lesson.id}
          lesson={lesson}
          onSave={updateLesson}
        />
      </Panel>
    </div>
  );
}
