"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button, TextArea } from "@/components/ui";
import { useStudentAnnotationActions } from "@/components/theory/StudentAnnotationContext";

export function StudentEleveNoteBlock({ id, body }: { id: string; body: string }) {
  const { onDeleteComment, onUpdateComment } = useStudentAnnotationActions();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(body);

  useEffect(() => {
    if (!editing) setDraft(body);
  }, [body, editing]);

  function startEdit() {
    setDraft(body);
    setEditing(true);
  }

  function save() {
    const text = draft.trim();
    if (!text) return;
    onUpdateComment?.(id, text);
    setEditing(false);
  }

  function cancel() {
    setDraft(body);
    setEditing(false);
  }

  return (
    <aside className="my-1.5 rounded-[var(--radius-md)] border-2 border-dashed border-primary/35 bg-primary-soft/30 px-3 py-2">
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-strong">
          Votre commentaire
        </p>
        {onDeleteComment || onUpdateComment ? (
          <div className="flex shrink-0 gap-0.5">
            {onUpdateComment && !editing ? (
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 min-h-8 px-2"
                onClick={startEdit}
                title="Modifier ce commentaire"
              >
                <Pencil className="h-4 w-4" />
              </Button>
            ) : null}
            {onDeleteComment ? (
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 min-h-8 px-2"
                onClick={() => onDeleteComment(id)}
                title="Supprimer ce commentaire"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
      {editing ? (
        <div className="space-y-2">
          <TextArea
            aria-label="Modifier le commentaire"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="min-h-20 text-sm"
          />
          <div className="flex flex-wrap gap-2">
            <Button type="button" size="sm" onClick={save}>
              Enregistrer
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={cancel}>
              Annuler
            </Button>
          </div>
        </div>
      ) : (
        <div className="whitespace-pre-wrap text-sm leading-snug text-ink-muted">
          {body}
        </div>
      )}
    </aside>
  );
}
