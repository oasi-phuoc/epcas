import type { ReactNode } from "react";
import { AnswerReveal } from "@/components/AnswerReveal";

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
  return { body: body.join("\n"), nextIndex: i, label };
}

function renderBlock(lines: string[], startKey: number): ReactNode[] {
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
      nodes.push(
        <AnswerReveal key={`r-${key}`} label={reveal.label}>
          <MarkdownLite text={reveal.body} />
        </AnswerReveal>,
      );
      i = reveal.nextIndex;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const { rows, nextIndex } = parseTableBlock(lines, i);
      if (rows.length > 0) {
        const [header, ...body] = rows;
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

export function MarkdownLite({ text }: { text: string }) {
  const lines = text.split("\n");
  return <div className="space-y-1">{renderBlock(lines, 0)}</div>;
}
