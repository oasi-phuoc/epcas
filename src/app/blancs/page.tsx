"use client";

import Link from "next/link";
import {
  Badge,
  EmptyState,
  PageHeader,
  Panel,
  Button,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { QUESTION_TYPE_META } from "@/lib/question-templates";

export default function BlancsPage() {
  const { currentUser, state, getAssessmentQuestions } = useAppStore();
  if (!currentUser) return null;

  const published = state.assessments
    .filter((a) => a.published)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  return (
    <div>
      <PageHeader
        title="Évaluations à blanc"
        description="Examens composés par le formateur : timer, score, questions mixtes."
      />

      {published.length === 0 ? (
        <Panel>
          <div className="mb-3">
            <Badge tone="accent">En attente</Badge>
          </div>
          <EmptyState
            title="Aucun blanc publié pour le moment"
            description={
              currentUser.role === "trainer"
                ? "Publiez une évaluation depuis Formateur → Évaluations."
                : "Votre formateur publiera bientôt des évaluations ici."
            }
          />
          {currentUser.role === "trainer" ? (
            <div className="mt-4 text-center">
              <Link href="/formateur/evaluations">
                <Button size="sm">Créer une évaluation</Button>
              </Link>
            </div>
          ) : null}
        </Panel>
      ) : (
        <div className="space-y-3">
          {published.map((a) => {
            const questions = getAssessmentQuestions(a.id);
            const types = [...new Set(questions.map((q) => q.type))];
            const points = questions.reduce((s, q) => s + q.points, 0);
            return (
              <Panel key={a.id}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="success">Publié</Badge>
                  {types.slice(0, 4).map((t) => (
                    <Badge key={t} tone="neutral">
                      {QUESTION_TYPE_META[t].short}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-2 font-display text-2xl text-ink">{a.title}</h2>
                {a.description ? (
                  <p className="mt-1 text-sm text-ink-muted">{a.description}</p>
                ) : null}
                <p className="mt-2 text-xs text-ink-subtle">
                  {a.durationMin} min · {questions.length} question
                  {questions.length !== 1 ? "s" : ""} · {points} pt
                  {points !== 1 ? "s" : ""} · {a.maxAttempts} tentative
                  {a.maxAttempts > 1 ? "s" : ""}
                </p>
                <p className="mt-4 text-sm text-ink-muted">
                  Passage chronométré : bientôt disponible. Les questions sont
                  déjà composées par le formateur.
                </p>
              </Panel>
            );
          })}
        </div>
      )}
    </div>
  );
}
