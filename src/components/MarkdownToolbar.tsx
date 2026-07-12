"use client";

import type { ReactNode, RefObject } from "react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Quote,
  RemoveFormatting,
  Table2,
} from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (next: string) => void;
};

function ToolBtn({
  label,
  title,
  onClick,
  children,
}: {
  label: string;
  title: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-[var(--radius-sm)] border border-border bg-surface px-2 text-xs font-medium text-ink",
        "transition hover:bg-primary-soft hover:border-primary/40 active:scale-[0.97]",
      )}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function applyInline(
  value: string,
  start: number,
  end: number,
  before: string,
  after: string,
  placeholder = "texte",
) {
  const selected = value.slice(start, end);
  const inner = selected || placeholder;
  const next = value.slice(0, start) + before + inner + after + value.slice(end);
  const selStart = start + before.length;
  const selEnd = selStart + inner.length;
  return { next, selStart, selEnd };
}

function applyLinePrefix(
  value: string,
  start: number,
  end: number,
  prefixFor: (line: string, index: number) => string,
) {
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  let lineEnd = value.indexOf("\n", end);
  if (lineEnd === -1) lineEnd = value.length;
  const block = value.slice(lineStart, lineEnd);
  const lines = block.split("\n");
  const rewritten = lines
    .map((line, i) => {
      const stripped = line
        .replace(/^#{1,6}\s+/, "")
        .replace(/^>\s+/, "")
        .replace(/^[-*]\s+/, "")
        .replace(/^\d+\.\s+/, "");
      return prefixFor(stripped, i);
    })
    .join("\n");
  const next = value.slice(0, lineStart) + rewritten + value.slice(lineEnd);
  return {
    next,
    selStart: lineStart,
    selEnd: lineStart + rewritten.length,
  };
}

export function MarkdownToolbar({ textareaRef, value, onChange }: Props) {
  function focusAndSelect(selStart: number, selEnd: number) {
    requestAnimationFrame(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(selStart, selEnd);
    });
  }

  function withSelection(
    transform: (
      value: string,
      start: number,
      end: number,
    ) => { next: string; selStart: number; selEnd: number },
  ) {
    const el = textareaRef.current;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? value.length;
    const { next, selStart, selEnd } = transform(value, start, end);
    onChange(next);
    focusAndSelect(selStart, selEnd);
  }

  return (
    <div className="flex flex-wrap gap-1.5 rounded-[var(--radius-md)] border border-border bg-surface-muted/50 p-2">
      <ToolBtn
        label="Titre"
        title="Titre (##)"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `## ${line || "Titre"}`),
          )
        }
      >
        <Heading1 className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Sous-titre"
        title="Sous-titre (###)"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `### ${line || "Sous-titre"}`),
          )
        }
      >
        <Heading2 className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Petit titre"
        title="Petit titre (####)"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `#### ${line || "Petit titre"}`),
          )
        }
      >
        <Heading3 className="h-4 w-4" />
      </ToolBtn>

      <span className="mx-0.5 hidden h-9 w-px bg-border sm:block" />

      <ToolBtn
        label="Gras"
        title="Mise en évidence / gras"
        onClick={() =>
          withSelection((v, s, e) => applyInline(v, s, e, "**", "**", "texte"))
        }
      >
        <Bold className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Italique"
        title="Italique"
        onClick={() =>
          withSelection((v, s, e) => applyInline(v, s, e, "*", "*", "texte"))
        }
      >
        <Italic className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Surligner"
        title="Surlignage (mise en évidence)"
        onClick={() =>
          withSelection((v, s, e) =>
            applyInline(v, s, e, "==", "==", "texte important"),
          )
        }
      >
        <Highlighter className="h-4 w-4" />
      </ToolBtn>

      <span className="mx-0.5 hidden h-9 w-px bg-border sm:block" />

      <ToolBtn
        label="Puces"
        title="Liste à puces"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `- ${line || "Élément"}`),
          )
        }
      >
        <List className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Numéros"
        title="Liste numérotée"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(
              v,
              s,
              e,
              (line, i) => `${i + 1}. ${line || "Élément"}`,
            ),
          )
        }
      >
        <ListOrdered className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Citation"
        title="Citation / remarque"
        onClick={() =>
          withSelection((v, s, e) =>
            applyLinePrefix(v, s, e, (line) => `> ${line || "Remarque"}`),
          )
        }
      >
        <Quote className="h-4 w-4" />
      </ToolBtn>

      <span className="mx-0.5 hidden h-9 w-px bg-border sm:block" />

      <ToolBtn
        label="Lien"
        title="Insérer un lien"
        onClick={() =>
          withSelection((v, s, e) => {
            const selected = v.slice(s, e) || "texte du lien";
            const insert = `[${selected}](https://)`;
            const next = v.slice(0, s) + insert + v.slice(e);
            // sélectionner l'URL
            const urlStart = s + selected.length + 3;
            return { next, selStart: urlStart, selEnd: urlStart + 8 };
          })
        }
      >
        <Link2 className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Tableau"
        title="Insérer un tableau"
        onClick={() =>
          withSelection((v, s, e) => {
            const table =
              "| Colonne 1 | Colonne 2 |\n| --- | --- |\n| Valeur | Valeur |";
            const before = s > 0 && v[s - 1] !== "\n" ? "\n\n" : "";
            const after = "\n\n";
            const insert = before + table + after;
            const next = v.slice(0, s) + insert + v.slice(e);
            const selStart = s + before.length;
            return { next, selStart, selEnd: selStart + table.length };
          })
        }
      >
        <Table2 className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Ligne"
        title="Ligne de séparation"
        onClick={() =>
          withSelection((v, s) => {
            const before = s > 0 && v[s - 1] !== "\n" ? "\n\n" : "\n";
            const insert = `${before}---\n\n`;
            const next = v.slice(0, s) + insert + v.slice(s);
            const pos = s + insert.length;
            return { next, selStart: pos, selEnd: pos };
          })
        }
      >
        <Minus className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Nettoyer"
        title="Retirer le formatage de la sélection"
        onClick={() =>
          withSelection((v, s, e) => {
            const selected = v.slice(s, e);
            const cleaned = selected
              .replace(/\*\*/g, "")
              .replace(/==/g, "")
              .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1$2")
              .replace(/^#{1,6}\s+/gm, "")
              .replace(/^>\s+/gm, "")
              .replace(/^[-*]\s+/gm, "")
              .replace(/^\d+\.\s+/gm, "")
              .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
            const next = v.slice(0, s) + cleaned + v.slice(e);
            return { next, selStart: s, selEnd: s + cleaned.length };
          })
        }
      >
        <RemoveFormatting className="h-4 w-4" />
      </ToolBtn>
    </div>
  );
}
