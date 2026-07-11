"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Alert,
  Button,
  NumberField,
  PageHeader,
  Panel,
  TextArea,
} from "@/components/ui";
import { scoreOpenAnswer } from "@/lib/keywords";
import { useAppStore } from "@/lib/store";
import type { MathPayload, OpenPayload, QcmPayload } from "@/lib/types";

export default function ExerciseDetailPage() {
  const params = useParams<{ id: string }>();
  const { state, currentUser, addAttempt } = useAppStore();
  const exercise = state.exercises.find((e) => e.id === params.id);

  const [choice, setChoice] = useState<number | null>(null);
  const [mathValue, setMathValue] = useState("");
  const [openValue, setOpenValue] = useState("");
  const [feedback, setFeedback] = useState<{
    ok: boolean;
    partial?: boolean;
    message: string;
  } | null>(null);

  const history = useMemo(() => {
    if (!currentUser || !exercise) return [];
    return state.attempts.filter(
      (a) => a.userId === currentUser.id && a.exerciseId === exercise.id,
    );
  }, [state.attempts, currentUser, exercise]);

  if (!currentUser) return null;
  if (!exercise) {
    return <Alert tone="danger">Exercice introuvable.</Alert>;
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!exercise || !currentUser) return;

    let score = 0;
    let message = "";
    let ok = false;
    let partial = false;

    if (exercise.type === "qcm") {
      const payload = exercise.payload as QcmPayload;
      ok = choice === payload.correctIndex;
      score = ok ? 1 : 0;
      message = ok
        ? `Correct. ${payload.explanation}`
        : `Incorrect. ${payload.explanation}`;
    }

    if (exercise.type === "math") {
      const payload = exercise.payload as MathPayload;
      const num = Number(mathValue.replace(",", "."));
      const tol = payload.tolerance ?? 0.01;
      ok = Number.isFinite(num) && Math.abs(num - payload.answer) <= tol;
      score = ok ? 1 : 0;
      message = ok
        ? `Correct. ${payload.explanation}`
        : `Incorrect (attendu : ${payload.answer}${payload.unit ? ` ${payload.unit}` : ""}). ${payload.explanation}`;
    }

    if (exercise.type === "open") {
      const payload = exercise.payload as OpenPayload;
      const result = scoreOpenAnswer(
        openValue,
        payload.requiredKeywords,
        payload.optionalKeywords,
      );
      score = result.score;
      ok = score === 1;
      partial = score > 0 && score < 1;
      message = ok
        ? `Correct. ${payload.explanation}`
        : partial
          ? `Partiellement correct. Réponse modèle : ${payload.modelAnswer}`
          : `Incorrect. Réponse modèle : ${payload.modelAnswer}. ${payload.explanation}`;
    }

    addAttempt({
      exerciseId: exercise.id,
      userId: currentUser.id,
      score,
      maxScore: 1,
    });
    setFeedback({ ok, partial, message });
  }

  return (
    <div>
      <PageHeader
        title={exercise.title}
        description="Feedback immédiat après chaque tentative."
        actions={
          <Link href="/exercices">
            <Button variant="ghost" size="sm">
              ← Liste
            </Button>
          </Link>
        }
      />

      <Panel>
        <form onSubmit={submit} className="space-y-4">
          {exercise.type === "qcm" ? (
            <QcmForm
              payload={exercise.payload as QcmPayload}
              choice={choice}
              setChoice={setChoice}
            />
          ) : null}
          {exercise.type === "math" ? (
            <>
              <p className="text-ink">{(exercise.payload as MathPayload).question}</p>
              <NumberField
                label={`Réponse${(exercise.payload as MathPayload).unit ? ` (${(exercise.payload as MathPayload).unit})` : ""}`}
                value={mathValue}
                onChange={(e) => setMathValue(e.target.value)}
                required
              />
            </>
          ) : null}
          {exercise.type === "open" ? (
            <>
              <p className="text-ink">{(exercise.payload as OpenPayload).question}</p>
              <TextArea
                label="Votre réponse"
                value={openValue}
                onChange={(e) => setOpenValue(e.target.value)}
                required
              />
            </>
          ) : null}

          <Button type="submit">Valider</Button>
        </form>

        {feedback ? (
          <div className="mt-4">
            <Alert
              tone={
                feedback.ok ? "success" : feedback.partial ? "warning" : "danger"
              }
            >
              {feedback.message}
            </Alert>
          </div>
        ) : null}
      </Panel>

      {history.length > 0 ? (
        <Panel className="mt-4">
          <p className="text-sm font-medium text-ink">Historique</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-muted">
            {history.slice(0, 5).map((h) => (
              <li key={h.id}>
                {new Date(h.createdAt).toLocaleString("fr-CH")} —{" "}
                {Math.round(h.score * 100)} %
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}
    </div>
  );
}

function QcmForm({
  payload,
  choice,
  setChoice,
}: {
  payload: QcmPayload;
  choice: number | null;
  setChoice: (n: number) => void;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="mb-2 text-ink">{payload.question}</legend>
      {payload.choices.map((c, i) => (
        <label
          key={i}
          className="flex cursor-pointer items-start gap-3 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-3 transition hover:border-primary"
        >
          <input
            type="radio"
            name="qcm"
            className="mt-1"
            checked={choice === i}
            onChange={() => setChoice(i)}
            required
          />
          <span className="text-sm text-ink">{c}</span>
        </label>
      ))}
    </fieldset>
  );
}
