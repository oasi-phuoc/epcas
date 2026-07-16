import JSZip from "jszip";
import { informatiqueAppLabel } from "./informatique-exercises";
import type { InformatiqueExercise } from "./types";

function sanitizePathSegment(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

/** Chemin dossier dans le ZIP : Application / Thème / Exercice */
export function exerciseDocumentsFolderPath(
  exercise: InformatiqueExercise,
): string {
  const theme = exercise.description.includes("·")
    ? exercise.description.split("·").slice(1).join("·").trim()
    : exercise.description.trim();
  const segments = [
    sanitizePathSegment(informatiqueAppLabel(exercise.app)),
    sanitizePathSegment(theme || "Exercices"),
    sanitizePathSegment(exercise.title || "Sans titre"),
  ];
  return segments.join("/");
}

async function fetchAssetBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Impossible de récupérer le fichier (${response.status}).`);
  }
  return response.blob();
}

function triggerBlobDownload(blob: Blob, fileName: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(objectUrl);
}

export type BulkDownloadResult = {
  exerciseCount: number;
  fileCount: number;
};

/**
 * Télécharge un ZIP contenant tous les documents à utiliser,
 * répartis dans un dossier par exercice.
 */
export async function downloadExercisesDocumentsZip(
  exercises: InformatiqueExercise[],
  archiveBaseName: string,
): Promise<BulkDownloadResult> {
  const zip = new JSZip();
  let fileCount = 0;
  let exerciseCount = 0;

  const sorted = [...exercises].sort(
    (a, b) =>
      a.app.localeCompare(b.app) ||
      a.order - b.order ||
      a.title.localeCompare(b.title, "fr"),
  );

  for (const exercise of sorted) {
    const docs = exercise.documents.filter((d) => d.url);
    if (docs.length === 0) continue;

    exerciseCount += 1;
    const folder = exerciseDocumentsFolderPath(exercise);

    for (const doc of docs) {
      const blob = await fetchAssetBlob(doc.url);
      zip.file(`${folder}/${doc.name}`, blob);
      fileCount += 1;
    }
  }

  if (fileCount === 0) {
    throw new Error("Aucun document disponible pour le téléchargement.");
  }

  const archive = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  triggerBlobDownload(archive, `${sanitizePathSegment(archiveBaseName)}.zip`);

  return { exerciseCount, fileCount };
}

/**
 * Télécharge les documents d'un seul exercice dans un ZIP (un dossier).
 */
export async function downloadSingleExerciseDocumentsZip(
  exercise: InformatiqueExercise,
): Promise<BulkDownloadResult> {
  const folderName = exerciseDocumentsFolderPath(exercise).split("/").pop() ?? "exercice";
  return downloadExercisesDocumentsZip(
    [exercise],
    `Informatique-${folderName}`,
  );
}
