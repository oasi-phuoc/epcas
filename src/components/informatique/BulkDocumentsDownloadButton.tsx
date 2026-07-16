"use client";

import { useMemo, useState } from "react";
import { Alert, Button } from "@/components/ui";
import { downloadExercisesDocumentsZip } from "@/lib/informatique-download";
import type { InformatiqueExercise } from "@/lib/types";
import { Download } from "lucide-react";

type BulkDocumentsDownloadButtonProps = {
  exercises: InformatiqueExercise[];
  archiveName: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

export function BulkDocumentsDownloadButton({
  exercises,
  archiveName,
  label = "Télécharger tous les documents",
  size = "sm",
  variant = "secondary",
}: BulkDocumentsDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    tone: "success" | "danger";
    message: string;
  } | null>(null);

  const stats = useMemo(() => {
    let exercisesWithDocs = 0;
    let fileCount = 0;
    for (const exercise of exercises) {
      const docs = exercise.documents.filter((d) => d.url);
      if (docs.length === 0) continue;
      exercisesWithDocs += 1;
      fileCount += docs.length;
    }
    return { exercisesWithDocs, fileCount };
  }, [exercises]);

  async function handleDownload() {
    setLoading(true);
    setFeedback(null);
    try {
      const result = await downloadExercisesDocumentsZip(exercises, archiveName);
      setFeedback({
        tone: "success",
        message: `${result.fileCount} fichier(s) réparti(s) dans ${result.exerciseCount} dossier(s).`,
      });
    } catch (error) {
      setFeedback({
        tone: "danger",
        message:
          error instanceof Error
            ? error.message
            : "Le téléchargement groupé a échoué.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button
        type="button"
        size={size}
        variant={variant}
        disabled={loading || stats.fileCount === 0}
        onClick={() => void handleDownload()}
      >
        <Download className="h-4 w-4" />
        {loading ? "Préparation du ZIP…" : label}
      </Button>
      <p className="text-xs text-ink-subtle">
        {stats.fileCount > 0
          ? `${stats.fileCount} fichier(s) — un dossier par exercice dans l'archive.`
          : "Aucun document disponible pour le moment."}
      </p>
      {feedback ? <Alert tone={feedback.tone}>{feedback.message}</Alert> : null}
    </div>
  );
}
