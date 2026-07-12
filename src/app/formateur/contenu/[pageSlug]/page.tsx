"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ContenuPageEditor } from "@/components/formateur/ContenuPageEditor";
import {
  FORMATEUR_EXERCISE_PAGES,
  FORMATEUR_THEORY_PAGES,
  isFormateurExerciseSlug,
} from "@/lib/lesson-content";
import { EmptyState } from "@/components/ui";
import type { LessonPageSlug } from "@/lib/types";

function isTheorySlug(slug: string): slug is LessonPageSlug {
  return FORMATEUR_THEORY_PAGES.some((p) => p.slug === slug);
}

export default function ContenuSlugPage() {
  const params = useParams<{ pageSlug: string }>();
  const router = useRouter();
  const slug = params.pageSlug;

  useEffect(() => {
    if (!slug) return;
    if (isFormateurExerciseSlug(slug)) {
      const href =
        FORMATEUR_EXERCISE_PAGES.find((p) => p.slug === slug)?.href ??
        "/formateur/exercices";
      router.replace(href);
      return;
    }
    if (!isTheorySlug(slug)) {
      router.replace("/formateur/contenu");
    }
  }, [slug, router]);

  if (!slug || !isTheorySlug(slug)) {
    return (
      <EmptyState
        title="Page inconnue"
        description="Redirection vers le menu Contenu…"
      />
    );
  }

  return <ContenuPageEditor pageSlug={slug} section="theorie" />;
}
