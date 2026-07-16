/**
 * Découpe un markdown « livre » : le ## reste le titre de chapitre,
 * chaque ### devient une page (feuillet).
 */

export type MarkdownBookPage = {
  /** Titre issu du ### (affiché en H1 de page) */
  title: string;
  /** Corps markdown de la page (sans la ligne ###) */
  body: string;
};

export type MarkdownBook = {
  /** Titre issu du ## (constant pour tous les feuillets) */
  chapterTitle: string | null;
  pages: MarkdownBookPage[];
};

const H2_RE = /^## (?!#)\s*(.*)$/;
const H3_RE = /^### (?!#)\s*(.*)$/;

function isBlank(text: string): boolean {
  return !text.replace(/\s+/g, "").length;
}

/**
 * Mode complet : une page par ###.
 * S’il n’y a aucun ###, une seule page avec tout le corps (hors ##).
 */
export function splitMarkdownBook(markdown: string): MarkdownBook {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let chapterTitle: string | null = null;
  const preamble: string[] = [];
  const pages: MarkdownBookPage[] = [];
  let current: { title: string; lines: string[] } | null = null;

  for (const line of lines) {
    const h2 = line.match(H2_RE);
    if (h2) {
      if (!chapterTitle) {
        chapterTitle = h2[1].trim();
        continue;
      }
      // ## supplémentaire : traité comme nouvelle page
      if (current) {
        pages.push({
          title: current.title,
          body: current.lines.join("\n").trim(),
        });
      } else if (!isBlank(preamble.join("\n"))) {
        pages.push({
          title: "Introduction",
          body: preamble.join("\n").trim(),
        });
        preamble.length = 0;
      }
      current = { title: h2[1].trim(), lines: [] };
      continue;
    }

    const h3 = line.match(H3_RE);
    if (h3) {
      if (current) {
        pages.push({
          title: current.title,
          body: current.lines.join("\n").trim(),
        });
      } else if (!isBlank(preamble.join("\n"))) {
        pages.push({
          title: "Introduction",
          body: preamble.join("\n").trim(),
        });
        preamble.length = 0;
      }
      current = { title: h3[1].trim(), lines: [] };
      continue;
    }

    if (current) current.lines.push(line);
    else preamble.push(line);
  }

  if (current) {
    pages.push({
      title: current.title,
      body: current.lines.join("\n").trim(),
    });
  } else {
    const body = preamble.join("\n").trim();
    pages.push({
      title: chapterTitle ?? "Contenu",
      body,
    });
  }

  return {
    chapterTitle,
    pages: pages.filter((p) => p.title || !isBlank(p.body)),
  };
}

/** true s’il y a plusieurs feuillets à parcourir */
export function isMultiPageBook(book: MarkdownBook): boolean {
  return book.pages.length > 1;
}
