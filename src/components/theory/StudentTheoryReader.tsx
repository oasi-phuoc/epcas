"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Highlighter, MessageSquarePlus } from "lucide-react";
import { Alert, Button, TextArea } from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import { HighlightColorPicker } from "@/components/HighlightColorPicker";
import { cn } from "@/lib/cn";
import {
  applyStudentAnnotations,
  loadStudentLessonAnnotations,
  newStudentAnnotationId,
  resolveQuoteInMarkdown,
  saveStudentLessonAnnotations,
  emptyStudentLessonAnnotations,
  type StudentLessonAnnotations,
} from "@/lib/lesson-annotations";
import { StudentAnnotationContext } from "@/components/theory/StudentAnnotationContext";
import {
  DEFAULT_HIGHLIGHT_COLOR,
  type HighlightColor,
} from "@/lib/highlight-colors";

type Props = {
  userId: string;
  lessonId: string;
  mode: "full" | "summary";
  chapterIndex: number;
  sourceMarkdown: string;
  answerMode?: "reveal" | "input";
  answerStorageKey?: string;
};

export function StudentTheoryReader({
  userId,
  lessonId,
  mode,
  chapterIndex,
  sourceMarkdown,
  answerMode = "reveal",
  answerStorageKey,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [annotations, setAnnotations] = useState<StudentLessonAnnotations>(
    () => emptyStudentLessonAnnotations(),
  );
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentDraft, setCommentDraft] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pendingAnchor, setPendingAnchor] = useState<string | undefined>();
  const [highlightColor, setHighlightColor] = useState<HighlightColor>(
    DEFAULT_HIGHLIGHT_COLOR,
  );

  const storageScope = `${userId}:${lessonId}:${mode}:${chapterIndex}`;

  useEffect(() => {
    setAnnotations(
      loadStudentLessonAnnotations(userId, lessonId, mode, chapterIndex),
    );
    setCommentOpen(false);
    setCommentDraft("");
    setFeedback(null);
  }, [storageScope, userId, lessonId, mode, chapterIndex]);

  const persist = useCallback(
    (next: StudentLessonAnnotations) => {
      setAnnotations(next);
      saveStudentLessonAnnotations(userId, lessonId, mode, chapterIndex, next);
    },
    [userId, lessonId, mode, chapterIndex],
  );

  const mergedMarkdown = useMemo(
    () => applyStudentAnnotations(sourceMarkdown, annotations),
    [sourceMarkdown, annotations],
  );

  function getSelectionQuote(): string | null {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    const root = contentRef.current;
    if (!root) return null;
    const range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) return null;
    const text = sel.toString().trim();
    if (text.length < 2) return null;
    return resolveQuoteInMarkdown(sourceMarkdown, text);
  }

  function handleHighlight() {
    setFeedback(null);
    const quote = getSelectionQuote();
    if (!quote) {
      setFeedback(
        "Sélectionnez un passage du cours (texte du formateur), puis touchez Surligner.",
      );
      return;
    }
    const existing = annotations.highlights.find((h) => h.quote === quote);
    if (existing) {
      persist({
        ...annotations,
        highlights: annotations.highlights.filter((h) => h.id !== existing.id),
      });
      window.getSelection()?.removeAllRanges();
      setFeedback("Surlignage retiré.");
      setTimeout(() => setFeedback(null), 2000);
      return;
    }
    persist({
      ...annotations,
      highlights: [
        ...annotations.highlights,
        { id: newStudentAnnotationId("hl"), quote, color: highlightColor },
      ],
    });
    window.getSelection()?.removeAllRanges();
    setFeedback("Passage surligné.");
    setTimeout(() => setFeedback(null), 2000);
  }

  function openCommentForm() {
    setFeedback(null);
    const quote = getSelectionQuote();
    if (quote) {
      setCommentDraft("");
      setCommentOpen(true);
      setPendingAnchor(quote);
    } else {
      setPendingAnchor(undefined);
      setCommentDraft("");
      setCommentOpen(true);
    }
  }

  function submitComment() {
    const text = commentDraft.trim();
    if (!text) return;
    persist({
      ...annotations,
      comments: [
        ...annotations.comments,
        {
          id: newStudentAnnotationId("note"),
          text,
          afterQuote: pendingAnchor,
        },
      ],
    });
    setCommentOpen(false);
    setCommentDraft("");
    setPendingAnchor(undefined);
    window.getSelection()?.removeAllRanges();
  }

  const deleteComment = useCallback(
    (id: string) => {
      setAnnotations((prev) => {
        const next = {
          ...prev,
          comments: prev.comments.filter((c) => c.id !== id),
        };
        saveStudentLessonAnnotations(
          userId,
          lessonId,
          mode,
          chapterIndex,
          next,
        );
        return next;
      });
    },
    [userId, lessonId, mode, chapterIndex],
  );

  const updateComment = useCallback(
    (id: string, text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setAnnotations((prev) => {
        const next = {
          ...prev,
          comments: prev.comments.map((c) =>
            c.id === id ? { ...c, text: trimmed } : c,
          ),
        };
        saveStudentLessonAnnotations(
          userId,
          lessonId,
          mode,
          chapterIndex,
          next,
        );
        return next;
      });
    },
    [userId, lessonId, mode, chapterIndex],
  );

  return (
    <StudentAnnotationContext.Provider
      value={{ onDeleteComment: deleteComment, onUpdateComment: updateComment }}
    >
      <div className="space-y-3">
        <div
          className={cn(
            "sticky z-10 -mx-1 flex flex-wrap items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface/95 px-2 py-2 shadow-[var(--shadow-sm)] backdrop-blur-sm",
            "top-0 lg:top-0",
          )}
          role="toolbar"
          aria-label="Outils de lecture"
        >
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="min-h-10 gap-2"
            onClick={handleHighlight}
          >
            <Highlighter className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Surligner</span>
          </Button>
          <HighlightColorPicker
            value={highlightColor}
            onChange={setHighlightColor}
            className="shrink-0"
          />
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="min-h-10 gap-2"
            onClick={openCommentForm}
          >
            <MessageSquarePlus className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Commentaire</span>
          </Button>
        </div>

        {feedback ? <Alert tone="info">{feedback}</Alert> : null}

        {commentOpen ? (
          <div className="rounded-[var(--radius-md)] border border-primary/30 bg-primary-soft/25 p-3">
            <p className="mb-2 text-sm font-medium text-ink">
              Votre commentaire
            </p>
            <p className="mb-2 text-xs text-ink-subtle">
              {pendingAnchor
                ? "Inséré après le passage sélectionné. Le texte du cours reste inchangé."
                : "Inséré à la fin de cette page. Le texte du cours reste inchangé."}
            </p>
            <TextArea
              aria-label="Texte du commentaire"
              value={commentDraft}
              onChange={(e) => setCommentDraft(e.target.value)}
              className="min-h-24 text-sm"
              placeholder="Note personnelle, rappel, question…"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              <Button type="button" size="sm" onClick={submitComment}>
                Ajouter
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => {
                  setCommentOpen(false);
                  setCommentDraft("");
                  setPendingAnchor(undefined);
                }}
              >
                Annuler
              </Button>
            </div>
          </div>
        ) : null}

        <div
          ref={contentRef}
          className="lesson-readable select-text"
        >
          <MarkdownLite
            text={mergedMarkdown}
            answerMode={answerMode}
            answerStorageKey={answerStorageKey}
          />
        </div>
      </div>
    </StudentAnnotationContext.Provider>
  );
}
