"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ContenuPageEditor } from "@/components/formateur/ContenuPageEditor";
import { InformatiqueExercicesWorkspace } from "@/components/informatique/InformatiqueExercicesWorkspace";
import {
  FORMATEUR_EXERCISE_PAGES,
  isFormateurExerciseSlug,
} from "@/lib/lesson-content";
import { EmptyState } from "@/components/ui";

export default function FormateurExerciceSlugPage() {
  const params = useParams<{ pageSlug: string }>();
  const router = useRouter();
  const slug = params.pageSlug;

  useEffect(() => {
    if (slug && !isFormateurExerciseSlug(slug)) {
      router.replace("/formateur/exercices");
    }
  }, [slug, router]);

  if (!slug || !isFormateurExerciseSlug(slug)) {
    return (
      <EmptyState
        title="Page inconnue"
        description="Redirection vers le menu Exercices…"
      />
    );
  }

  const meta = FORMATEUR_EXERCISE_PAGES.find((p) => p.slug === slug);
  if (!meta) return null;

  if (slug === "informatique") {
    return <InformatiqueExercicesWorkspace mode="edit" />;
  }

  return <ContenuPageEditor pageSlug={slug} section="exercices" />;
}
