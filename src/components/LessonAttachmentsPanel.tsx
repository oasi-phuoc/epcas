"use client";

import { useRef, useState } from "react";
import { Download, FileText, Plus, Trash2 } from "lucide-react";
import { Button, TextField } from "@/components/ui";
import {
  LESSON_ATTACHMENT_MAX_BYTES,
  fileToLessonAttachment,
  newLessonAttachmentId,
} from "@/lib/lesson-attachments";
import type { LessonAttachment } from "@/lib/types";

type Props = {
  attachments: LessonAttachment[];
  editable?: boolean;
  onChange?: (next: LessonAttachment[]) => void;
};

export function LessonAttachmentsPanel({
  attachments,
  editable = false,
  onChange,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [urlName, setUrlName] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const downloadable = attachments.filter((a) => a.url.trim());

  if (!editable && downloadable.length === 0) {
    return null;
  }

  async function handleFile(file: File) {
    if (!onChange) return;
    setError(null);
    if (file.size > LESSON_ATTACHMENT_MAX_BYTES) {
      setError(
        `Fichier trop volumineux (max ${Math.round(LESSON_ATTACHMENT_MAX_BYTES / 1_000_000)} Mo). Utilisez un lien URL.`,
      );
      return;
    }
    try {
      const attachment = await fileToLessonAttachment(file);
      if (!attachment.url) {
        setError("Impossible d'intégrer ce fichier.");
        return;
      }
      onChange([...attachments, attachment]);
    } catch {
      setError("Impossible de lire ce fichier.");
    }
  }

  function handleAddUrl() {
    if (!onChange || !urlName.trim()) return;
    onChange([
      ...attachments,
      {
        id: newLessonAttachmentId(),
        name: urlName.trim(),
        url: urlValue.trim(),
      },
    ]);
    setUrlName("");
    setUrlValue("");
    setError(null);
  }

  return (
    <section className="space-y-3 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-4">
      <div>
        <h3 className="text-sm font-semibold text-ink">Fichiers d&apos;exercice</h3>
        <p className="mt-0.5 text-xs text-ink-subtle">
          Documents à télécharger par les élèves (Word, PDF, Excel…). Le bloc
          n&apos;apparaît pas s&apos;il n&apos;y a aucun fichier.
        </p>
      </div>

      {editable && attachments.length === 0 ? (
        <p className="rounded-[var(--radius-md)] border border-dashed border-border px-3 py-4 text-center text-sm text-ink-subtle">
          Aucun fichier pour le moment — ajoutez un document ou un lien ci-dessous.
        </p>
      ) : null}

      {!editable && downloadable.length === 0 ? null : (
        <ul className="space-y-2">
          {(editable ? attachments : downloadable).map((asset) => (
            <li
              key={asset.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2.5"
            >
              <span className="flex min-w-0 items-center gap-2 text-sm text-ink">
                <FileText className="h-4 w-4 shrink-0 text-primary-strong" />
                <span className="min-w-0 truncate font-medium">{asset.name}</span>
              </span>
              <span className="flex flex-wrap gap-2">
                {asset.url ? (
                  <a
                    href={asset.url}
                    download={asset.name}
                    className="inline-flex"
                    target={asset.url.startsWith("data:") ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    <Button type="button" size="sm" variant="secondary">
                      <Download className="h-4 w-4" />
                      Télécharger
                    </Button>
                  </a>
                ) : editable ? (
                  <span className="text-sm text-ink-muted">Lien manquant</span>
                ) : null}
                {editable && onChange ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    title="Supprimer"
                    onClick={() =>
                      onChange(attachments.filter((a) => a.id !== asset.id))
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      )}

      {editable && onChange ? (
        <div className="space-y-2 border-t border-border pt-3">
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,application/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (file) void handleFile(file);
            }}
          />
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={() => fileRef.current?.click()}
          >
            <Plus className="h-4 w-4" />
            Ajouter un fichier
          </Button>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <TextField
              label="Nom du fichier"
              value={urlName}
              onChange={(e) => setUrlName(e.target.value)}
              placeholder="exercice.docx"
              className="sm:max-w-[12rem]"
            />
            <TextField
              label="URL (lien ou /chemin)"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              placeholder="https://… ou /assets/…"
              className="min-w-0 flex-1"
            />
            <Button
              type="button"
              size="sm"
              variant="secondary"
              disabled={!urlName.trim()}
              onClick={handleAddUrl}
            >
              Ajouter le lien
            </Button>
          </div>
          <p className="text-xs text-ink-subtle">
            Fichiers légers intégrés automatiquement (max{" "}
            {Math.round(LESSON_ATTACHMENT_MAX_BYTES / 1_000_000)} Mo). Au-delà,
            hébergez le fichier et collez son URL.
          </p>
        </div>
      ) : null}

      {error ? (
        <p className="text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
