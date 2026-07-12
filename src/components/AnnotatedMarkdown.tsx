"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { HighlightColorPicker } from "@/components/HighlightColorPicker";
import { MarkdownLite } from "@/components/MarkdownLite";
import {
  applyAnnotationsToContainer,
  overlappingAnnotationIds,
  selectionOffsetsIn,
} from "@/lib/annotation-dom";
import {
  DEFAULT_HIGHLIGHT_COLOR,
  type HighlightColor,
} from "@/lib/highlight-colors";
import type { AnnotationStyle, TextAnnotation } from "@/lib/types";

type ToolbarPos = { top: number; left: number };

type Props = {
  text: string;
  annotations: TextAnnotation[];
  /** Apprenti : peut annoter ; formateur : lecture seule des overlays */
  canAnnotate: boolean;
  userId: string;
  lessonId: string;
  mode: "full" | "summary";
  onAdd: (input: Omit<TextAnnotation, "id" | "createdAt">) => void;
  onDelete: (ids: string[]) => void;
};

const STYLE_BUTTONS: {
  style: Exclude<AnnotationStyle, "highlight" | "note">;
  label: string;
  title: string;
}[] = [
  { style: "underline", label: "Soulign.", title: "Souligner" },
  { style: "italic", label: "Italique", title: "Italique" },
  { style: "bold", label: "Gras", title: "Gras" },
];

export function AnnotatedMarkdown({
  text,
  annotations,
  canAnnotate,
  userId,
  lessonId,
  mode,
  onAdd,
  onDelete,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [toolbar, setToolbar] = useState<ToolbarPos | null>(null);
  const [pending, setPending] = useState<{ start: number; end: number } | null>(
    null,
  );
  const [noteDraft, setNoteDraft] = useState<string | null>(null);
  const [highlightColor, setHighlightColor] = useState<HighlightColor>(
    DEFAULT_HIGHLIGHT_COLOR,
  );
  const [openNote, setOpenNote] = useState<{
    id: string;
    note: string;
    top: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    applyAnnotationsToContainer(root, annotations);
  }, [text, annotations]);

  const hideToolbar = useCallback(() => {
    setToolbar(null);
    setPending(null);
    setNoteDraft(null);
  }, []);

  const captureSelection = useCallback(() => {
    if (!canAnnotate) return;
    const root = contentRef.current;
    const wrap = wrapRef.current;
    if (!root || !wrap) return;
    const sel = window.getSelection();
    if (!sel) {
      hideToolbar();
      return;
    }
    const offsets = selectionOffsetsIn(root, sel);
    if (!offsets) {
      hideToolbar();
      return;
    }
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    setPending(offsets);
    setNoteDraft(null);
    setOpenNote(null);
    setToolbar({
      top: rect.top - wrapRect.top - 52,
      left: Math.max(
        8,
        Math.min(
          rect.left - wrapRect.left + rect.width / 2,
          wrapRect.width - 8,
        ),
      ),
    });
  }, [canAnnotate, hideToolbar]);

  useEffect(() => {
    if (!canAnnotate) return;
    const onSel = () => {
      requestAnimationFrame(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed) return;
        captureSelection();
      });
    };
    document.addEventListener("mouseup", onSel);
    document.addEventListener("keyup", onSel);
    return () => {
      document.removeEventListener("mouseup", onSel);
      document.removeEventListener("keyup", onSel);
    };
  }, [canAnnotate, captureSelection]);

  function applyStyle(
    style: AnnotationStyle,
    opts?: { note?: string; color?: HighlightColor },
  ) {
    if (!pending || pending.end <= pending.start) return;
    onAdd({
      userId,
      lessonId,
      mode,
      start: pending.start,
      end: pending.end,
      style,
      color:
        style === "highlight"
          ? opts?.color ?? highlightColor
          : undefined,
      note: opts?.note?.trim() || undefined,
    });
    window.getSelection()?.removeAllRanges();
    hideToolbar();
  }

  function eraseOverlapping() {
    if (!pending) return;
    const ids = overlappingAnnotationIds(
      annotations,
      pending.start,
      pending.end,
    );
    if (ids.length) onDelete(ids);
    window.getSelection()?.removeAllRanges();
    hideToolbar();
  }

  function onContentClick(e: MouseEvent) {
    const target = e.target as HTMLElement | null;
    const mark = target?.closest?.("mark.epcas-anno") as HTMLElement | null;
    if (!mark?.dataset.annotationId) {
      setOpenNote(null);
      return;
    }
    const ann = annotations.find((a) => a.id === mark.dataset.annotationId);
    if (!ann?.note?.trim()) {
      setOpenNote(null);
      return;
    }
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = mark.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    setOpenNote({
      id: ann.id,
      note: ann.note,
      top: rect.bottom - wrapRect.top + 6,
      left: rect.left - wrapRect.left,
    });
    hideToolbar();
  }

  return (
    <div ref={wrapRef} className="relative">
      {canAnnotate ? (
        <p className="mb-3 text-sm text-ink-muted">
          Sélectionnez un passage pour surligner (couleurs), souligner, gras /
          italique ou ajouter une note. Le texte d’origine ne peut pas être
          modifié.
        </p>
      ) : null}

      <div
        ref={contentRef}
        className="epcas-annotated-content select-text"
        onClick={onContentClick}
      >
        <MarkdownLite text={text} />
      </div>

      {toolbar && pending && canAnnotate ? (
        <div
          className="absolute z-20 -translate-x-1/2 rounded-lg border border-border bg-surface px-1.5 py-1.5 shadow-md"
          style={{ top: Math.max(0, toolbar.top), left: toolbar.left }}
          onMouseDown={(e) => e.preventDefault()}
          role="toolbar"
          aria-label="Annotations"
        >
          {noteDraft !== null ? (
            <div className="flex min-w-[220px] flex-col gap-1.5 p-1">
              <textarea
                className="min-h-[64px] w-full rounded border border-border bg-surface-muted px-2 py-1 text-sm text-ink"
                placeholder="Votre annotation…"
                value={noteDraft}
                autoFocus
                onChange={(e) => setNoteDraft(e.target.value)}
              />
              <div className="flex gap-1">
                <button
                  type="button"
                  className="rounded bg-primary px-2 py-1 text-xs font-medium text-white"
                  onClick={() => applyStyle("note", { note: noteDraft })}
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  className="rounded px-2 py-1 text-xs text-ink-muted"
                  onClick={() => setNoteDraft(null)}
                >
                  Annuler
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-1 px-0.5">
                <span className="text-[10px] font-medium text-ink-subtle">
                  Surlig.
                </span>
                <HighlightColorPicker
                  value={highlightColor}
                  onChange={setHighlightColor}
                  onPick={(color) => {
                    setHighlightColor(color);
                    applyStyle("highlight", { color });
                  }}
                />
              </div>
              <div className="flex flex-wrap items-center gap-0.5">
                {STYLE_BUTTONS.map((b) => (
                  <button
                    key={b.style}
                    type="button"
                    title={b.title}
                    className="rounded px-2 py-1 text-xs font-medium text-ink hover:bg-surface-muted"
                    onClick={() => applyStyle(b.style)}
                  >
                    {b.label}
                  </button>
                ))}
                <button
                  type="button"
                  title="Ajouter une annotation"
                  className="rounded px-2 py-1 text-xs font-medium text-ink hover:bg-surface-muted"
                  onClick={() => setNoteDraft("")}
                >
                  Note
                </button>
                <span className="mx-0.5 h-4 w-px bg-border" aria-hidden />
                <button
                  type="button"
                  title="Effacer les annotations sur la sélection"
                  className="rounded px-2 py-1 text-xs font-medium text-danger hover:bg-danger-soft"
                  onClick={eraseOverlapping}
                >
                  Effacer
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {openNote ? (
        <div
          className="absolute z-20 max-w-xs rounded-lg border border-border bg-surface p-3 text-sm text-ink shadow-md"
          style={{ top: openNote.top, left: openNote.left }}
          role="dialog"
          aria-label="Annotation"
        >
          <p className="mb-2 whitespace-pre-wrap text-ink-muted">
            {openNote.note}
          </p>
          {canAnnotate ? (
            <button
              type="button"
              className="text-xs font-medium text-danger"
              onClick={() => {
                onDelete([openNote.id]);
                setOpenNote(null);
              }}
            >
              Supprimer l’annotation
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
