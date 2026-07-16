"use client";

import { useRef, useState, type ReactNode, type RefObject } from "react";
import {
  Bold,
  Eye,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Quote,
  RemoveFormatting,
  Shapes,
  Table2,
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  MARKDOWN_IMAGE_MAX_BYTES,
  buildImageMarkdown,
  fileToDataUrl,
  isImageFile,
} from "@/lib/markdown-assets";
import { MARKDOWN_FIGURE_TEMPLATES } from "@/lib/markdown-figures";

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

function insertBlock(
  value: string,
  start: number,
  end: number,
  block: string,
  selectStart?: number,
  selectEnd?: number,
) {
  const before = start > 0 && value[start - 1] !== "\n" ? "\n\n" : "";
  const after = "\n\n";
  const insert = before + block + after;
  const next = value.slice(0, start) + insert + value.slice(end);
  const base = start + before.length;
  const selStart = selectStart ?? base + block.length;
  const selEnd = selectEnd ?? selStart;
  return { next, selStart, selEnd };
}

export function MarkdownToolbar({ textareaRef, value, onChange }: Props) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [figuresOpen, setFiguresOpen] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
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

  async function handleImageFile(file: File) {
    setImageError(null);
    if (!isImageFile(file)) {
      setImageError("Choisissez une image (PNG, JPG, GIF, WebP ou SVG).");
      return;
    }
    if (file.size > MARKDOWN_IMAGE_MAX_BYTES) {
      setImageError(
        `Image trop volumineuse (max ${Math.round(MARKDOWN_IMAGE_MAX_BYTES / 1_000_000)} Mo).`,
      );
      return;
    }
    try {
      const dataUrl = await fileToDataUrl(file);
      const alt = file.name.replace(/\.[^.]+$/, "") || "Illustration";
      const markdown = buildImageMarkdown(alt, dataUrl);
      withSelection((v, s, e) => insertBlock(v, s, e, markdown));
    } catch {
      setImageError("Impossible de lire ce fichier image.");
    }
  }

  function insertFigureTemplate(markdown: string) {
    withSelection((v, s, e) => {
      const before = s > 0 && v[s - 1] !== "\n" ? "\n\n" : "";
      const after = "\n\n";
      const insert = before + markdown + after;
      const next = v.slice(0, s) + insert + v.slice(e);
      const base = s + before.length;
      const bodyStart = markdown.indexOf("\n") + 1;
      const bodyEnd = markdown.lastIndexOf("\n:::");
      if (bodyStart > 0 && bodyEnd > bodyStart) {
        return {
          next,
          selStart: base + bodyStart,
          selEnd: base + bodyEnd,
        };
      }
      return { next, selStart: base + markdown.length, selEnd: base + markdown.length };
    });
    setFiguresOpen(false);
  }

  return (
    <div className="space-y-2">
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
        label="Image"
        title="Insérer une image depuis un fichier"
        onClick={() => imageInputRef.current?.click()}
      >
        <ImagePlus className="h-4 w-4" />
      </ToolBtn>
      <ToolBtn
        label="Image URL"
        title="Insérer une image par lien"
        onClick={() =>
          withSelection((v, s, e) => {
            const selected = v.slice(s, e) || "Légende";
            const insert = `![${selected}](https://)`;
            const before = s > 0 && v[s - 1] !== "\n" ? "\n\n" : "";
            const after = "\n\n";
            const block = before + insert + after;
            const next = v.slice(0, s) + block + v.slice(e);
            const urlStart = s + before.length + selected.length + 4;
            return { next, selStart: urlStart, selEnd: urlStart + 8 };
          })
        }
      >
        <ImagePlus className="h-4 w-4 opacity-70" />
      </ToolBtn>
      <div className="relative">
        <ToolBtn
          label="Formes"
          title="Illustrations, encadrés et graphiques"
          onClick={() => setFiguresOpen((open) => !open)}
        >
          <Shapes className="h-4 w-4" />
        </ToolBtn>
        {figuresOpen ? (
          <div className="absolute left-0 top-full z-20 mt-1 w-[min(20rem,calc(100vw-2rem))] rounded-[var(--radius-md)] border border-border bg-surface p-2 shadow-[var(--shadow-md)]">
            <p className="mb-2 px-1 text-xs text-ink-subtle">
              Encadrés éditables et formes graphiques
            </p>
            <div className="grid gap-1">
              {MARKDOWN_FIGURE_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  className="rounded-[var(--radius-sm)] px-2 py-2 text-left text-sm transition hover:bg-primary-soft"
                  onClick={() => insertFigureTemplate(tpl.markdown)}
                >
                  <span className="font-medium text-ink">{tpl.label}</span>
                  <span className="mt-0.5 block text-xs text-ink-subtle">
                    {tpl.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

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
        label="Réponse"
        title="Bloc réponse masquable (Afficher / Masquer)"
        onClick={() =>
          withSelection((v, s, e) => {
            const selected = v.slice(s, e) || "Texte de la réponse…";
            const before = s > 0 && v[s - 1] !== "\n" ? "\n\n" : "";
            const block = `:::reponse\n${selected}\n:::`;
            const insert = before + block + "\n\n";
            const next = v.slice(0, s) + insert + v.slice(e);
            const selStart = s + before.length + ":::reponse\n".length;
            return {
              next,
              selStart,
              selEnd: selStart + selected.length,
            };
          })
        }
      >
        <Eye className="h-4 w-4" />
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
    <input
      ref={imageInputRef}
      type="file"
      accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml,.svg"
      className="sr-only"
      onChange={(e) => {
        const file = e.target.files?.[0];
        e.target.value = "";
        if (file) void handleImageFile(file);
      }}
    />
    {imageError ? (
      <p className="text-xs text-danger" role="alert">
        {imageError}
      </p>
    ) : null}
    </div>
  );
}
