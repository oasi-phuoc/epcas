"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ContenuPageEditor } from "@/components/formateur/ContenuPageEditor";
import {
  FORMATEUR_CONTENT_PAGES,
  isFormateurContentSlug,
} from "@/lib/lesson-content";
import { EmptyState } from "@/components/ui";

export default function ContenuSlugPage() {
  const params = useParams<{ pageSlug: string }>();
  const router = useRouter();
  const slug = params.pageSlug;

  useEffect(() => {
    if (slug && !isFormateurContentSlug(slug)) {
      router.replace("/formateur/contenu");
    }
  }, [slug, router]);

  if (!slug || !isFormateurContentSlug(slug)) {
    return (
      <EmptyState
        title="Page inconnue"
        description="Redirection vers le menu Contenu…"
      />
    );
  }

  const meta = FORMATEUR_CONTENT_PAGES.find((p) => p.slug === slug);
  if (!meta) return null;

  return <ContenuPageEditor pageSlug={slug} />;
}
