import type { ReactNode } from "react";
import { AnswerReveal } from "@/components/AnswerReveal";
import { ExerciseAnswerField } from "@/components/ExerciseAnswerField";
import { cn } from "@/lib/cn";
import {
  glossaryTableColumnIndexes,
  isGlossaryTableHeader,
} from "@/lib/glossary-markdown";
import {
  imageBlockFigureClass,
  imageBlockImgClass,
  parseMarkdownImageBlock,
} from "@/lib/markdown-image-blocks";

export type MarkdownLiteProps = {
  text: string;
  /** "reveal" = formateur / éditeur ; "input" = saisie élève avec Valider / Contrôle */
  answerMode?: "reveal" | "input";
  /** Clé de persistance : `${userId}:${lessonId}` */
  answerStorageKey?: string;
};

function formatInline(text: string): ReactNode[] {
  // Gras · surlignage · italique · code · liens
  const parts = text.split(
    /(\*\*[^*]+\*\*|==[^=]+==|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,
  );
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <mark
          key={i}
          className="rounded bg-warning-soft px-0.5 text-ink"
        >
          {part.slice(2, -2)}
        </mark>
      );
    }
    if (
      part.startsWith("*") &&
      part.endsWith("*") &&
      !part.startsWith("**")
    ) {
      return (
        <em key={i} className="italic text-ink-muted">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-surface-muted px-1 py-0.5 text-[0.85em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          className="text-primary-strong underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function parseTableBlock(lines: string[], start: number) {
  const rows: string[][] = [];
  let i = start;
  while (i < lines.length && lines[i].trim().startsWith("|")) {
    const cells = lines[i]
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (!cells.every((c) => /^:?-+:?$/.test(c))) {
      rows.push(cells);
    }
    i += 1;
  }
  return { rows, nextIndex: i };
}

const REVEAL_OPEN = /^:::(reponse|réponse|solution)(?:\s+(.*))?$/i;
const REVEAL_CLOSE = /^:::\s*$/;
const FIGURE_OPEN = /^:::figure\s+(\w+)/i;

function parseFigureBlock(lines: string[], start: number) {
  const open = lines[start].trim().match(FIGURE_OPEN);
  if (!open) return null;
  const kind = open[1].toLowerCase();

  const body: string[] = [];
  let i = start + 1;
  while (i < lines.length && !REVEAL_CLOSE.test(lines[i].trim())) {
    body.push(lines[i]);
    i += 1;
  }
  if (i < lines.length) i += 1;
  return { kind, body: body.join("\n"), nextIndex: i };
}

function GlossaryTableList({ body }: { body: string[][] }) {
  const { termIdx, linkIdx, defIdx } = glossaryTableColumnIndexes();

  return (
    <div className="my-4">
      {body.map((row, index) => {
        const term = row[termIdx] ?? "";
        const link = row[linkIdx] ?? "";
        const definition = row[defIdx] ?? "";
        const hasLink = link.trim().length > 0;

        return (
          <div key={index}>
            <p className="text-justify leading-relaxed">
              <span className="font-semibold text-ink">{index + 1}. </span>
              <span className="font-semibold text-ink">{formatInline(term)}</span>
            </p>
            {definition.trim() ? (
              <p className="mt-1.5 text-justify text-sm leading-relaxed text-ink-muted">
                {formatInline(definition)}
              </p>
            ) : null}
            {hasLink ? (
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">Lien : </span>
                {formatInline(link)}
              </p>
            ) : null}
            {index < body.length - 1 ? (
              <hr className="my-4 border-0 border-t border-border" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function FigureBlock({ kind, body }: { kind: string; body: string }) {
  if (kind === "etapes") {
    const steps = body
      .split("\n")
      .map((line) => line.replace(/^\d+\.\s*/, "").trim())
      .filter(Boolean);
    return (
      <div className="my-4 flex flex-wrap items-stretch gap-2">
        {steps.map((step, index) => (
          <div key={index} className="flex min-w-[8rem] flex-1 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-sm text-ink-muted">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <span className="hidden text-primary-strong sm:inline" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  const styles: Record<string, string> = {
    encadre:
      "rounded-[var(--radius-md)] border-2 border-border bg-surface px-4 py-3",
    remarque:
      "rounded-[var(--radius-md)] border-2 border-warning/50 bg-warning-soft/60 px-4 py-3",
  };

  return (
    <div
      className={cn(
        "my-4 text-sm leading-relaxed text-ink-muted",
        styles[kind] ?? styles.encadre,
      )}
    >
      <MarkdownLite text={body} />
    </div>
  );
}

function parseRevealBlock(lines: string[], start: number) {
  const open = lines[start].trim().match(REVEAL_OPEN);
  if (!open) return null;
  const kind = open[1].toLowerCase();
  const hint = (open[2] ?? "").trim().toLowerCase();
  const label =
    kind.startsWith("solution") ||
    hint === "solution" ||
    hint === "solutions" ||
    hint.includes("solution")
      ? "la solution"
      : "les réponses";

  const body: string[] = [];
  let i = start + 1;
  while (i < lines.length && !REVEAL_CLOSE.test(lines[i].trim())) {
    body.push(lines[i]);
    i += 1;
  }
  if (i < lines.length) i += 1; // skip closing :::
  return {
    body: body.join("\n"),
    nextIndex: i,
    label,
    kind: kind.startsWith("solution") ? ("solution" as const) : ("reponse" as const),
  };
}

type RenderOptions = {
  answerMode: "reveal" | "input";
  answerStorageKey?: string;
  questionCounter: { value: number };
};

function renderBlock(
  lines: string[],
  startKey: number,
  options: RenderOptions,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `${startKey}-${i}`;

    if (/^---+$/.test(line.trim())) {
      nodes.push(
        <hr key={key} className="my-5 border-0 border-t border-border" />,
      );
      i += 1;
      continue;
    }

    const reveal = parseRevealBlock(lines, i);
    if (reveal) {
      const questionIndex = options.questionCounter.value;
      options.questionCounter.value += 1;

      if (options.answerMode === "input" && options.answerStorageKey) {
        const [userId, lessonId] = options.answerStorageKey.split(":");
        nodes.push(
          <ExerciseAnswerField
            key={`q-${key}`}
            questionId={`q-${questionIndex}`}
            lessonId={lessonId}
            userId={userId}
            teacherAnswer={reveal.body}
            kind={reveal.kind}
            label={reveal.label}
          >
            <MarkdownLite text={reveal.body} answerMode="reveal" />
          </ExerciseAnswerField>,
        );
      } else {
        nodes.push(
          <AnswerReveal key={`r-${key}`} label={reveal.label}>
            <MarkdownLite text={reveal.body} answerMode="reveal" />
          </AnswerReveal>,
        );
      }
      i = reveal.nextIndex;
      continue;
    }

    const figure = parseFigureBlock(lines, i);
    if (figure) {
      nodes.push(
        <FigureBlock key={`f-${key}`} kind={figure.kind} body={figure.body} />,
      );
      i = figure.nextIndex;
      continue;
    }

    const embeddedImage = parseMarkdownImageBlock(lines, i);
    if (embeddedImage) {
      nodes.push(
        <figure
          key={key}
          className={cn("my-4 flex flex-col", imageBlockFigureClass(embeddedImage.align))}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={embeddedImage.src}
            alt={embeddedImage.label}
            className={imageBlockImgClass(embeddedImage.align)}
          />
          {embeddedImage.label ? (
            <figcaption
              className={cn(
                "mt-2 text-sm text-ink-muted",
                embeddedImage.align === "right"
                  ? "text-right"
                  : embeddedImage.align === "left"
                    ? "text-left"
                    : "text-center",
              )}
            >
              {embeddedImage.label}
            </figcaption>
          ) : null}
        </figure>,
      );
      i = embeddedImage.nextIndex;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const { rows, nextIndex } = parseTableBlock(lines, i);
      if (rows.length > 0) {
        const [header, ...body] = rows;
        if (isGlossaryTableHeader(header)) {
          nodes.push(
            <GlossaryTableList key={`g-${key}`} body={body} />,
          );
        } else {
          nodes.push(
            <div key={`t-${key}`} className="my-4 overflow-x-auto">
              <table className="w-full min-w-[20rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-muted/70">
                    {header.map((cell, ci) => (
                      <th
                        key={ci}
                        className="px-3 py-2 text-left font-semibold text-ink"
                      >
                        {formatInline(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, ri) => (
                    <tr key={ri} className="border-b border-border/70">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-3 py-2 text-justify text-ink-muted"
                        >
                          {formatInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
          );
        }
      }
      i = nextIndex;
      continue;
    }

    if (line.startsWith("> ")) {
      nodes.push(
        <blockquote
          key={key}
          className="my-3 border-l-4 border-primary/40 bg-primary-soft/40 px-4 py-2 text-justify text-ink-muted italic"
        >
          {formatInline(line.slice(2))}
        </blockquote>,
      );
      i += 1;
      continue;
    }

    const image = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      nodes.push(
        <figure key={key} className="my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image[2]}
            alt={image[1]}
            className="mx-auto max-h-[28rem] w-auto max-w-full rounded-lg border border-border object-contain shadow-sm"
          />
          {image[1] ? (
            <figcaption className="mt-2 text-center text-sm text-ink-muted">
              {image[1]}
            </figcaption>
          ) : null}
        </figure>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("#### ")) {
      nodes.push(
        <h4 key={key} className="mt-4 text-base font-semibold text-ink">
          {formatInline(line.replace("#### ", ""))}
        </h4>,
      );
    } else if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={key} className="mt-5 font-display text-xl text-ink">
          {formatInline(line.replace("### ", ""))}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      nodes.push(
        <h2
          key={key}
          className="mt-6 font-display text-2xl text-ink first:mt-0"
        >
          {formatInline(line.replace("## ", ""))}
        </h2>,
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      nodes.push(
        <li key={key} className="ml-5 list-disc text-justify text-ink-muted">
          {formatInline(line.slice(2))}
        </li>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      nodes.push(
        <li key={key} className="ml-5 list-decimal text-justify text-ink-muted">
          {formatInline(line.replace(/^\d+\.\s/, ""))}
        </li>,
      );
    } else if (!line.trim()) {
      nodes.push(<div key={key} className="h-2" />);
    } else {
      nodes.push(
        <p key={key} className="text-justify text-ink-muted leading-relaxed">
          {formatInline(line)}
        </p>,
      );
    }
    i += 1;
  }

  return nodes;
}

export function MarkdownLite({
  text,
  answerMode = "reveal",
  answerStorageKey,
}: MarkdownLiteProps) {
  const lines = text.split("\n");
  const questionCounter = { value: 0 };
  return (
    <div className="space-y-1">
      {renderBlock(lines, 0, {
        answerMode,
        answerStorageKey,
        questionCounter,
      })}
    </div>
  );
}
