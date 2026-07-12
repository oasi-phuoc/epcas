import type { ReactNode } from "react";

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

export function MarkdownLite({ text }: { text: string }) {
  const lines = text.split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^---+$/.test(line.trim())) {
      nodes.push(
        <hr key={i} className="my-5 border-0 border-t border-border" />,
      );
      i += 1;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const { rows, nextIndex } = parseTableBlock(lines, i);
      if (rows.length > 0) {
        const [header, ...body] = rows;
        nodes.push(
          <div key={`t-${i}`} className="my-4 overflow-x-auto">
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
          key={i}
          className="my-3 border-l-4 border-primary/40 bg-primary-soft/40 px-4 py-2 text-justify text-ink-muted italic"
        >
          {formatInline(line.slice(2))}
        </blockquote>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("#### ")) {
      nodes.push(
        <h4 key={i} className="mt-4 text-base font-semibold text-ink">
          {formatInline(line.replace("#### ", ""))}
        </h4>,
      );
    } else if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={i} className="mt-5 font-display text-xl text-ink">
          {formatInline(line.replace("### ", ""))}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      nodes.push(
        <h2
          key={i}
          className="mt-6 font-display text-2xl text-ink first:mt-0"
        >
          {formatInline(line.replace("## ", ""))}
        </h2>,
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      nodes.push(
        <li key={i} className="ml-5 list-disc text-justify text-ink-muted">
          {formatInline(line.slice(2))}
        </li>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      nodes.push(
        <li key={i} className="ml-5 list-decimal text-justify text-ink-muted">
          {formatInline(line.replace(/^\d+\.\s/, ""))}
        </li>,
      );
    } else if (!line.trim()) {
      nodes.push(<div key={i} className="h-2" />);
    } else {
      nodes.push(
        <p key={i} className="text-justify text-ink-muted leading-relaxed">
          {formatInline(line)}
        </p>,
      );
    }
    i += 1;
  }

  return <div className="space-y-1">{nodes}</div>;
}
