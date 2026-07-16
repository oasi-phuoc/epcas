"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  NumberField,
  PageHeader,
  Panel,
  TextField,
} from "@/components/ui";
import { QuestionsManager } from "@/components/formateur/QuestionsManager";
import { MarkdownField } from "@/components/formateur/MarkdownField";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import {
  DIPLOMA_LEVELS,
  levelsLabel,
  toggleLevel,
} from "@/lib/levels";
import { createTemplateQuestion } from "@/lib/question-templates";
import type { DiplomaLevel, QuestionType } from "@/lib/types";

export default function EvaluationEditPage() {
  const params = useParams<{ id: string }>();
  const {
    currentUser,
    state,
    upsertAssessment,
    upsertAssessmentQuestion,
    deleteAssessmentQuestion,
    getAssessmentQuestions,
    setAssessmentPublished,
  } = useAppStore();

  const assessment = state.assessments.find((a) => a.id === params.id);
  const questions = useMemo(
    () => (assessment ? getAssessmentQuestions(assessment.id) : []),
    [assessment, getAssessmentQuestions],
  );

  const [title, setTitle] = useState(assessment?.title ?? "");
  const [description, setDescription] = useState(assessment?.description ?? "");
  const [durationMin, setDurationMin] = useState(
    String(assessment?.durationMin ?? 45),
  );
  const [maxAttempts, setMaxAttempts] = useState(
    String(assessment?.maxAttempts ?? 1),
  );
  const [levels, setLevels] = useState<DiplomaLevel[]>(
    assessment?.levels ?? ["AFP", "CFC"],
  );
  const [saved, setSaved] = useState(false);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }
  if (!assessment) {
    return (
      <EmptyState
        title="Évaluation introuvable"
        description="Retournez à la liste des évaluations."
      />
    );
  }

  function onSaveMeta(e: FormEvent) {
    e.preventDefault();
    upsertAssessment({
      id: assessment!.id,
      title: title.trim() || assessment!.title,
      description: description.trim(),
      durationMin: Number(durationMin) || 45,
      maxAttempts: Number(maxAttempts) || 1,
      published: assessment!.published,
      levels,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function addQuestion(type: QuestionType) {
    upsertAssessmentQuestion(
      createTemplateQuestion(assessment!.id, type, questions.length + 1),
    );
  }

  return (
    <div>
      <PageHeader
        title={assessment.title}
        description="Paramètres + questions (mise en forme comme en théorie)."
        actions={
          <Link href="/formateur/evaluations">
            <Button variant="ghost" size="sm">
              ← Liste
            </Button>
          </Link>
        }
      />

      <Panel className="mb-4">
        <form onSubmit={onSaveMeta} className="space-y-3">
          <TextField
            label="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <MarkdownField
            label="Description / consignes"
            value={description}
            onChange={setDescription}
            className="min-h-20 text-sm leading-relaxed"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberField
              label="Durée (min)"
              value={durationMin}
              onChange={(e) => setDurationMin(e.target.value)}
            />
            <NumberField
              label="Tentatives max"
              value={maxAttempts}
              onChange={(e) => setMaxAttempts(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink">
              Public cible — {levelsLabel(levels)}
            </p>
            <div className="flex flex-wrap gap-2">
              {DIPLOMA_LEVELS.map((level) => {
                const active = levels.includes(level);
                return (
                  <Button
                    key={level}
                    type="button"
                    size="sm"
                    variant={active ? "primary" : "secondary"}
                    onClick={() => setLevels(toggleLevel(levels, level))}
                  >
                    {level}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="submit">Enregistrer les paramètres</Button>
            <Button
              type="button"
              variant={assessment.published ? "ghost" : "primary"}
              onClick={() =>
                setAssessmentPublished(assessment.id, !assessment.published)
              }
            >
              {assessment.published ? "Dépublier" : "Publier pour les apprentis"}
            </Button>
          </div>
          {saved ? <Alert tone="success">Paramètres enregistrés.</Alert> : null}
          <Badge tone={assessment.published ? "success" : "warning"}>
            {assessment.published ? "Publiée" : "Brouillon"}
          </Badge>
        </form>
      </Panel>

      <QuestionsManager
        questions={questions}
        onAdd={addQuestion}
        onChange={upsertAssessmentQuestion}
        onDelete={deleteAssessmentQuestion}
      />
    </div>
  );
}
