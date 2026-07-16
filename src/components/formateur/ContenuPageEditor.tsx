"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  Alert,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  TextArea,
  TextField,
} from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import { MarkdownToolbar } from "@/components/MarkdownToolbar";
import {
  FORMATEUR_EXERCISE_PAGES,
  FORMATEUR_THEORY_PAGES,
  applyLevelContent,
  getLessonBody,
  isAfpIdenticalToCfc,
} from "@/lib/lesson-content";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import { useEditorHistory } from "@/lib/use-editor-history";
import type { DiplomaLevel, Lesson, LessonPageSlug } from "@/lib/types";
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
  const [mode, setMode] = useState<"edit" | "preview">("preview");
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
          variant={mode === "preview" ? "primary" : "secondary"}
          onClick={() => setMode("preview")}
        >
          <Eye className="h-4 w-4" />
          Preview
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "edit" ? "primary" : "secondary"}
          onClick={() => setMode("edit")}
        >
          <Pencil className="h-4 w-4" />
          Édition
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
          <p className="mb-2 text-xs text-ink-subtle">
            {which === "summary" ? "Résumé" : "Complet"} · {editLevel}
          </p>
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
        <Alert tone="success">Page enregistrée.</Alert>
      ) : null}
    </form>
  );
}

export function ContenuPageEditor({
  pageSlug,
  section = "theorie",
}: {
  pageSlug: LessonPageSlug;
  section?: "theorie" | "exercices";
}) {
  const { currentUser, state, updateLesson } = useAppStore();
  const sectionPages =
    section === "exercices" ? FORMATEUR_EXERCISE_PAGES : FORMATEUR_THEORY_PAGES;
  const hubHref =
    section === "exercices" ? "/formateur/exercices" : "/formateur/contenu";
  const pageMeta = sectionPages.find((p) => p.slug === pageSlug);

  const modulesSorted = useMemo(
    () =>
      [...state.modules]
        .filter((m) => m.published)
        .sort((a, b) => a.code.localeCompare(b.code)),
    [state.modules],
  );

  const mainBlocks = useMemo(
    () => [...state.blocks].sort((a, b) => a.order - b.order),
    [state.blocks],
  );

  const [moduleQuery, setModuleQuery] = useState("");
  const [moduleId, setModuleId] = useState(modulesSorted[0]?.id ?? "");
  const [selectedBlockId, setSelectedBlockId] = useState(
    () => modulesSorted[0]?.blockId ?? mainBlocks[0]?.id ?? "block-100",
  );
  const [editLevel, setEditLevel] = useState<DiplomaLevel>("CFC");

  const filteredModules = useMemo(() => {
    const inBlock = modulesSorted.filter((m) => m.blockId === selectedBlockId);
    const q = moduleQuery.trim().toLowerCase();
    if (!q) return inBlock;
    return inBlock.filter(
      (m) =>
        m.code.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q),
    );
  }, [modulesSorted, moduleQuery, selectedBlockId]);

  const effectiveModuleId = useMemo(() => {
    if (filteredModules.some((m) => m.id === moduleId)) return moduleId;
    return filteredModules[0]?.id ?? "";
  }, [filteredModules, moduleId]);

  const lesson = useMemo(() => {
    if (!effectiveModuleId) return undefined;
    return state.lessons.find(
      (l) => l.moduleId === effectiveModuleId && l.pageSlug === pageSlug,
    );
  }, [state.lessons, effectiveModuleId, pageSlug]);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  return (
    <div>
      <PageHeader
        title={pageMeta?.title ?? "Contenu"}
        backHref={hubHref}
        backLabel={section === "exercices" ? "Retour aux exercices" : "Retour au contenu"}
        description={
          pageMeta?.description ??
          "Éditez la page pour le module et le niveau choisis."
        }
      />

      <nav className="mb-4 flex flex-wrap gap-3">
        {sectionPages.map((p) => (
          <Link
            key={p.slug}
            href={p.href}
            className={cn(
              "text-sm font-medium transition",
              p.slug === pageSlug
                ? "text-primary-strong"
                : "text-ink-muted hover:text-ink",
            )}
          >
            {p.title}
          </Link>
        ))}
      </nav>

      <Panel className="mb-4">
        <div className="flex flex-wrap items-end gap-2 sm:gap-3">
          <div className="min-w-0 flex-1 basis-[12rem]">
            <TextField
              label="Rechercher un module"
              value={moduleQuery}
              onChange={(e) => setModuleQuery(e.target.value)}
              placeholder="Ex. 101, histoire, stockage…"
            />
          </div>
          <div
            className="flex shrink-0 flex-wrap gap-2"
            role="group"
            aria-label="Module principal"
          >
            {mainBlocks.map((block) => (
              <Button
                key={block.id}
                type="button"
                size="sm"
                variant={
                  selectedBlockId === block.id ? "primary" : "secondary"
                }
                onClick={() => {
                  setSelectedBlockId(block.id);
                  const firstInBlock = modulesSorted.find(
                    (m) => m.blockId === block.id,
                  );
                  if (firstInBlock) setModuleId(firstInBlock.id);
                }}
              >
                {block.code}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="mb-2 text-sm font-medium text-ink">
            Choisir un module ({filteredModules.length})
          </p>
          {filteredModules.length === 0 ? (
            <p className="rounded-[var(--radius-md)] border border-dashed border-border px-3 py-4 text-center text-sm text-ink-subtle">
              {moduleQuery.trim()
                ? `Aucun module pour « ${moduleQuery} »`
                : "Aucun module dans ce module principal"}
            </p>
          ) : (
            <ul
              className="max-h-56 touch-pan-y space-y-1.5 overflow-y-auto overscroll-contain rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-2 sm:max-h-72"
              role="listbox"
              aria-label="Modules"
            >
              {filteredModules.map((m) => {
                const selected = m.id === effectiveModuleId;
                return (
                  <li key={m.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        setModuleId(m.id);
                        setModuleQuery("");
                      }}
                      className={`flex min-h-12 w-full items-start gap-2 rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition active:scale-[0.99] ${
                        selected
                          ? "border-primary bg-primary-soft text-ink shadow-[var(--shadow-sm)]"
                          : "border-transparent bg-surface text-ink hover:border-border hover:bg-surface"
                      }`}
                    >
                      <span className="shrink-0 text-xs font-semibold text-primary-strong">
                        {m.code}
                      </span>
                      <span className="min-w-0 flex-1 text-sm leading-snug">
                        {m.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="mt-2 text-xs text-ink-subtle">
            Tapez pour filtrer, puis touchez un module dans la liste.
          </p>
        </div>

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
          description="Choisissez un autre module."
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
