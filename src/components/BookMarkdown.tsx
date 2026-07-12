"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import {
  isMultiPageBook,
  splitMarkdownBook,
} from "@/lib/markdown-book";

type BookMarkdownProps = {
  /** Markdown source (complet ou résumé) */
  text: string;
  /**
   * true = mode livre (une page par ###).
   * false = tout le texte d’un coup (résumé).
   */
  paginate: boolean;
  /** Remise à zéro du feuillet quand la leçon change */
  resetKey?: string;
};

export function BookMarkdown({ text, paginate, resetKey }: BookMarkdownProps) {
  const book = useMemo(
    () => (paginate ? splitMarkdownBook(text) : null),
    [paginate, text],
  );
  const multi = book ? isMultiPageBook(book) : false;
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [resetKey, paginate, text]);

  useEffect(() => {
    if (!book) return;
    if (pageIndex >= book.pages.length) {
      setPageIndex(Math.max(0, book.pages.length - 1));
    }
  }, [book, pageIndex]);

  if (!paginate || !book) {
    return <MarkdownLite text={text} />;
  }

  const page = book.pages[pageIndex] ?? book.pages[0];
  if (!page) return <MarkdownLite text={text} />;

  const total = book.pages.length;
  const atStart = pageIndex <= 0;
  const atEnd = pageIndex >= total - 1;

  /** Une seule section : pas de chrome livre, titre déjà dans le header */
  if (!multi) {
    return (
      <article>
        {page.body ? <MarkdownLite text={page.body} /> : <MarkdownLite text={text} />}
      </article>
    );
  }

  function go(delta: number) {
    setPageIndex((i) => {
      const next = Math.min(total - 1, Math.max(0, i + delta));
      return next;
    });
    requestAnimationFrame(() => {
      document
        .getElementById("epcas-book-top")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div id="epcas-book-top">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          disabled={atStart}
          onClick={() => go(-1)}
          aria-label="Page précédente"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge tone="primary">
            Feuillet {pageIndex + 1} / {total}
          </Badge>
          {book.chapterTitle ? (
            <span className="max-w-[16rem] truncate text-xs text-ink-subtle sm:max-w-none">
              {book.chapterTitle}
            </span>
          ) : null}
        </div>
        <Button
          type="button"
          size="sm"
          variant="secondary"
          disabled={atEnd}
          onClick={() => go(1)}
          aria-label="Page suivante"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <article>
        {book.chapterTitle ? (
          <p className="mb-1 text-sm font-medium text-primary-strong">
            {book.chapterTitle}
          </p>
        ) : null}
        <h1 className="mb-4 font-display text-2xl text-ink sm:text-3xl">
          {page.title}
        </h1>
        {page.body ? <MarkdownLite text={page.body} /> : null}
      </article>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
        <Button
          type="button"
          size="sm"
          variant="secondary"
          disabled={atStart}
          onClick={() => go(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>
        <span className="text-sm text-ink-muted">
          {pageIndex + 1} / {total}
        </span>
        <Button
          type="button"
          size="sm"
          variant={atEnd ? "secondary" : "primary"}
          disabled={atEnd}
          onClick={() => go(1)}
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
