"use client";

import { Badge, Button, NumberField, Panel, TextField } from "@/components/ui";
import {
  FillBlankFields,
  MatchingFields,
  MathFields,
  MultiFields,
  OpenFields,
  OrderingFields,
  QcmFields,
  TrueFalseFields,
} from "@/components/formateur/QuestionFields";
import { QuestionTypePicker } from "@/components/formateur/QuestionTypePicker";
import {
  QUESTION_TYPE_META,
  retargetPayload,
} from "@/lib/question-templates";
import type {
  EditableQuestion,
  FillBlankPayload,
  MatchingPayload,
  MathPayload,
  MultiPayload,
  OpenPayload,
  OrderingPayload,
  QcmPayload,
  QuestionType,
  TrueFalsePayload,
} from "@/lib/types";
import { Trash2 } from "lucide-react";

type Props<T extends EditableQuestion> = {
  question: T;
  onChange: (q: T) => void;
  onDelete: () => void;
};

export function QuestionEditor<T extends EditableQuestion>({
  question,
  onChange,
  onDelete,
}: Props<T>) {
  const meta = QUESTION_TYPE_META[question.type];

  function patchPayload(partial: Record<string, unknown>) {
    onChange({
      ...question,
      payload: { ...question.payload, ...partial } as T["payload"],
    });
  }

  function changeType(type: QuestionType) {
    if (type === question.type) return;
    const nextMeta = QUESTION_TYPE_META[type];
    onChange({
      ...question,
      type,
      title: question.title.startsWith("Question ")
        ? `Question ${nextMeta.short}`
        : question.title,
      points:
        type === "open" || type === "matching"
          ? Math.max(question.points, 2)
          : question.points,
      payload: retargetPayload(question.payload, type),
    });
  }

  return (
    <Panel>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge>{meta.short}</Badge>
        <Badge tone="neutral">{question.points} pt</Badge>
        <Button
          type="button"
          size="sm"
          variant="danger"
          className="ml-auto"
          onClick={onDelete}
        >
          <Trash2 className="h-4 w-4" />
          Supprimer
        </Button>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-ink">Type de question</p>
        <QuestionTypePicker value={question.type} onChange={changeType} />
      </div>

      <div className="space-y-3">
        <TextField
          label="Titre interne"
          value={question.title}
          onChange={(e) => onChange({ ...question, title: e.target.value })}
        />
        <NumberField
          label="Points"
          value={String(question.points)}
          min={0.5}
          step={0.5}
          onChange={(e) =>
            onChange({
              ...question,
              points: Number(e.target.value) || 1,
            })
          }
        />

        {question.type === "qcm" ? (
          <QcmFields
            payload={question.payload as QcmPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "multi" ? (
          <MultiFields
            payload={question.payload as MultiPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "true_false" ? (
          <TrueFalseFields
            payload={question.payload as TrueFalsePayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "math" ? (
          <MathFields
            payload={question.payload as MathPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "open" ? (
          <OpenFields
            payload={question.payload as OpenPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "matching" ? (
          <MatchingFields
            payload={question.payload as MatchingPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "ordering" ? (
          <OrderingFields
            payload={question.payload as OrderingPayload}
            onChange={patchPayload}
          />
        ) : null}
        {question.type === "fill_blank" ? (
          <FillBlankFields
            payload={question.payload as FillBlankPayload}
            onChange={patchPayload}
          />
        ) : null}
      </div>
    </Panel>
  );
}
