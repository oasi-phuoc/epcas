"use client";

import { useState } from "react";
import {
  Button,
  EmptyState,
  Panel,
} from "@/components/ui";
import { QuestionEditor } from "@/components/formateur/QuestionEditor";
import { QuestionTypePicker } from "@/components/formateur/QuestionTypePicker";
import { QUESTION_TYPE_META } from "@/lib/question-templates";
import type { EditableQuestion, QuestionType } from "@/lib/types";
import { Plus } from "lucide-react";

type Props<T extends EditableQuestion> = {
  questions: T[];
  onAdd: (type: QuestionType) => void;
  onChange: (q: T) => void;
  onDelete: (id: string) => void;
  addLabel?: string;
};

/** Bloc « ajouter + liste » partagé évaluations / exercices. */
export function QuestionsManager<T extends EditableQuestion>({
  questions,
  onAdd,
  onChange,
  onDelete,
  addLabel = "Ajouter",
}: Props<T>) {
  const [templateType, setTemplateType] = useState<QuestionType>("qcm");

  return (
    <div className="space-y-4">
      <Panel>
        <h2 className="mb-2 font-display text-xl">Ajouter une question</h2>
        <p className="mb-3 text-sm text-ink-muted">
          Choisissez un type sur la ligne, le détail s’affiche en dessous.
        </p>
        <QuestionTypePicker
          value={templateType}
          onChange={setTemplateType}
        />
        <div className="mt-3">
          <Button type="button" onClick={() => onAdd(templateType)}>
            <Plus className="h-4 w-4" />
            {addLabel} — {QUESTION_TYPE_META[templateType].label}
          </Button>
        </div>
      </Panel>

      <div className="space-y-4">
        <h2 className="font-display text-xl">
          Questions ({questions.length})
        </h2>
        {questions.length === 0 ? (
          <EmptyState
            title="Aucune question"
            description="Ajoutez un type ci-dessus (QCM, Match, Ouverte…)."
          />
        ) : (
          questions.map((q) => (
            <QuestionEditor
              key={q.id}
              question={q}
              onChange={onChange}
              onDelete={() => {
                if (confirm("Supprimer cette question ?")) {
                  onDelete(q.id);
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
