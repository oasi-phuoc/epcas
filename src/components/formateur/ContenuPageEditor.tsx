"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
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
  FORMATEUR_CONTENT_PAGES,
  applyLevelContent,
  getLessonBody,
  isAfpIdenticalToCfc,
} from "@/lib/lesson-content";
import { useAppStore } from "@/lib/store";
import { useEditorHistory } from "@/lib/use-editor-history";
import type { DiplomaLevel, Lesson, LessonPageSlug, Module } from "@/lib/types";
import { Eye, Pencil, Redo2, Undo2 } from "lucide-react";

function LessonEditor({
  lesson,
  editLevel,
  onSave,
}: {
  lesson: Lesson;
  editLevel: DiplomaLevel;
  onSave: (next: Lesson) => void;
}) {
  const initialFull = getLessonBody(lesson, editLevel, "full");
  const initialSummary = getLessonBody(lesson, editLevel, "summary");

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
    full: initialFull,
    summary: initialSummary,
  });

  const { title, full, summary } = present;
  const [saved, setSaved] = useState(false);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [which, setWhich] = useState<"full" | "summary">("full");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activeValue = which === "full" ? full : summary;
  const identical = isAfpIdenticalToCfc(lesson);

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
    onSave(applyLevelContent(lesson, editLevel, title, full, summary));
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

      {editLevel === "AFP" && identical ? (
        <Alert tone="info">
          Contenu AFP actuellement <strong>identique au CFC</strong>. Toute
          modification enregistrée créera une variante AFP.
        </Alert>
      ) : null}
      {editLevel === "AFP" && !identical ? (
        <Alert tone="warning">
          Variante AFP distincte du CFC. Vous pouvez la réaligner via le bouton
          ci-dessous.
        </Alert>
      ) : null}

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
                ? `Contenu complet (${editLevel})`
                : `Contenu résumé (${editLevel})`
            }
            className="min-h-72 text-justify text-sm leading-relaxed"
            value={activeValue}
            onChange={(e) => setActiveValue(e.target.value, "debounce")}
            hint="Précédent / Suivant (Ctrl+Z / Ctrl+Y). Jusqu'à 40 étapes."
            required
          />
        </>
      ) : (
        <div className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone={which === "summary" ? "accent" : "primary"}>
              {which === "summary" ? "Résumé" : "Complet"}
            </Badge>
            <Badge tone="neutral">{editLevel}</Badge>
          </div>
          <h2 className="mb-4 font-display text-2xl text-ink sm:text-3xl">
            {title || "Sans titre"}
          </h2>
          <MarkdownLite text={activeValue} />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <Button type="submit">Enregistrer ({editLevel})</Button>
        {editLevel === "AFP" && !identical ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              if (
                confirm(
                  "Réaligner l'AFP sur le CFC ? La variante AFP sera effacée.",
                )
              ) {
                const next = { ...lesson };
                delete next.contentFullAfp;
                delete next.contentSummaryAfp;
                onSave(next);
                setPresent(
                  {
                    title: lesson.title,
                    full: lesson.contentFull,
                    summary: lesson.contentSummary,
                  },
                  { history: "none" },
                );
                setSaved(true);
                setTimeout(() => setSaved(false), 2500);
              }
            }}
          >
            Réaligner AFP = CFC
          </Button>
        ) : null}
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

export function ContenuPageEditor({ pageSlug }: { pageSlug: LessonPageSlug }) {
  const { currentUser, state, updateLesson } = useAppStore();
  const pageMeta = FORMATEUR_CONTENT_PAGES.find((p) => p.slug === pageSlug);

  const modulesSorted = useMemo(
    () =>
      [...state.modules]
        .filter((m) => m.published)
        .sort((a, b) => a.code.localeCompare(b.code)),
    [state.modules],
  );

  const [moduleQuery, setModuleQuery] = useState("");
  const [moduleId, setModuleId] = useState(modulesSorted[0]?.id ?? "");
  const [editLevel, setEditLevel] = useState<DiplomaLevel>("CFC");

  const filteredModules = useMemo(() => {
    const q = moduleQuery.trim().toLowerCase();
    if (!q) return modulesSorted;
    return modulesSorted.filter(
      (m) =>
        m.code.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q),
    );
  }, [modulesSorted, moduleQuery]);

  const effectiveModuleId = useMemo(() => {
    if (filteredModules.some((m) => m.id === moduleId)) return moduleId;
    return filteredModules[0]?.id ?? "";
  }, [filteredModules, moduleId]);

  const currentModule: Module | undefined = state.modules.find(
    (m) => m.id === effectiveModuleId,
  );

  const lesson = useMemo(() => {
    if (!effectiveModuleId) return undefined;
    return state.lessons.find(
      (l) => l.moduleId === effectiveModuleId && l.pageSlug === pageSlug,
    );
  }, [state.lessons, effectiveModuleId, pageSlug]);

  const moduleOptions = useMemo(
    () =>
      filteredModules.map((m) => ({
        value: m.id,
        label: `${m.code} — ${m.title}`,
      })),
    [filteredModules],
  );

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  return (
    <div>
      <PageHeader
        title={pageMeta?.title ?? "Contenu"}
        description={
          pageMeta?.description ??
          "Éditez la page pour le module et le niveau choisis."
        }
        actions={
          <Link href="/formateur/contenu">
            <Button variant="ghost" size="sm">
              ← Contenu
            </Button>
          </Link>
        }
      />

      <nav className="mb-4 flex flex-wrap gap-2">
        {FORMATEUR_CONTENT_PAGES.map((p) => (
          <Link key={p.slug} href={p.href}>
            <Badge tone={p.slug === pageSlug ? "primary" : "neutral"}>
              {p.title}
            </Badge>
          </Link>
        ))}
      </nav>

      <Panel className="mb-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_minmax(14rem,1fr)]">
          <TextField
            label="Rechercher un module"
            value={moduleQuery}
            onChange={(e) => setModuleQuery(e.target.value)}
            placeholder="Ex. 101, histoire, stockage…"
          />
          <Select
            label={`Module (${moduleOptions.length})`}
            options={
              moduleOptions.length > 0
                ? moduleOptions
                : [{ value: "", label: "Aucun module trouvé" }]
            }
            value={effectiveModuleId}
            onChange={(e) => setModuleId(e.target.value)}
          />
        </div>

        {currentModule ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge>Module {currentModule.code}</Badge>
            <span className="text-sm text-ink-muted">{currentModule.title}</span>
            <Badge tone="accent">
              {currentModule.levels.join(" + ")}
            </Badge>
          </div>
        ) : null}

        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-ink">
            Niveau édité
          </p>
          <div className="flex flex-wrap gap-2">
            {(["CFC", "AFP"] as DiplomaLevel[]).map((level) => (
              <Button
                key={level}
                type="button"
                size="sm"
                variant={editLevel === level ? "primary" : "secondary"}
                onClick={() => setEditLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-subtle">
            Par défaut, AFP = CFC. Passez sur AFP pour créer une variante
            spécifique.
          </p>
        </div>
      </Panel>

      {!lesson ? (
        <EmptyState
          title="Page introuvable pour ce module"
          description="Choisissez un autre module ou réinitialisez la démo."
        />
      ) : (
        <Panel>
          <LessonEditor
            key={`${lesson.id}-${editLevel}`}
            lesson={lesson}
            editLevel={editLevel}
            onSave={updateLesson}
          />
        </Panel>
      )}
    </div>
  );
}
