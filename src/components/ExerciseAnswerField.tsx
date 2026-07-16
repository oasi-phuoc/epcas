"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Alert, Button, TextArea } from "@/components/ui";
import {
  checkStudentAnswer,
  type AnswerCheckStatus,
} from "@/lib/answer-check";
import {
  loadLessonAnswers,
  saveLessonAnswer,
} from "@/lib/lesson-answers";

type ExerciseAnswerFieldProps = {
  questionId: string;
  lessonId: string;
  userId: string;
  teacherAnswer: string;
  kind: "solution" | "reponse";
  label: string;
  children: ReactNode;
};

function feedbackTone(status: AnswerCheckStatus) {
  if (status === "correct" || status === "individual") return "success" as const;
  if (status === "partial") return "warning" as const;
  if (status === "empty") return "info" as const;
  return "danger" as const;
}

export function ExerciseAnswerField({
  questionId,
  lessonId,
  userId,
  teacherAnswer,
  kind,
  label,
  children,
}: ExerciseAnswerFieldProps) {
  const [answer, setAnswer] = useState("");
  const [validated, setValidated] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [checkMessage, setCheckMessage] = useState<string | null>(null);
  const [checkStatus, setCheckStatus] = useState<AnswerCheckStatus | null>(
    null,
  );

  useEffect(() => {
    const saved = loadLessonAnswers(userId, lessonId)[questionId];
    if (saved?.answer) {
      setAnswer(saved.answer);
      setValidated(Boolean(saved.validatedAt));
      setShowCorrection(Boolean(saved.controlledAt));
    }
  }, [userId, lessonId, questionId]);

  function persist(patch: { validatedAt?: string; controlledAt?: string }) {
    saveLessonAnswer(userId, lessonId, questionId, {
      answer,
      ...patch,
    });
  }

  function handleValidate() {
    if (!answer.trim()) return;
    persist({ validatedAt: new Date().toISOString() });
    setValidated(true);
    setCheckMessage(null);
    setCheckStatus(null);
  }

  function handleControl() {
    const result = checkStudentAnswer(answer, teacherAnswer, kind);
    setCheckStatus(result.status);
    setCheckMessage(result.message);
    setShowCorrection(true);
    if (answer.trim()) {
      persist({
        validatedAt: validated ? undefined : new Date().toISOString(),
        controlledAt: new Date().toISOString(),
      });
      setValidated(true);
    }
  }

  return (
    <div className="my-4 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3 sm:p-4">
      <TextArea
        label="Votre réponse"
        hint="Rédigez votre réponse avant de la valider ou de la contrôler."
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          setValidated(false);
          setCheckMessage(null);
          setCheckStatus(null);
        }}
        className="min-h-24 bg-surface"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          onClick={handleValidate}
          disabled={!answer.trim()}
        >
          Valider
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={handleControl}
        >
          Contrôle
        </Button>
      </div>

      {validated && !checkMessage ? (
        <div className="mt-3">
          <Alert tone="success">Votre réponse a été enregistrée.</Alert>
        </div>
      ) : null}

      {checkMessage && checkStatus ? (
        <div className="mt-3">
          <Alert tone={feedbackTone(checkStatus)}>{checkMessage}</Alert>
        </div>
      ) : null}

      {showCorrection ? (
        <div
          className="mt-3 border-t border-border/70 pt-3"
          role="region"
          aria-label={`Correction — ${label}`}
        >
          <p className="mb-2 text-sm font-medium text-ink">
            Correction ({label})
          </p>
          {children}
        </div>
      ) : null}
    </div>
  );
}
