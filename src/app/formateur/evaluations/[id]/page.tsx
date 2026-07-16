"use client";

import { FormEvent, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  Alert,
  Button,
  EmptyState,
  NumberField,
  PageHeader,
  Panel,
  TextArea,
  TextField,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import {
  DIPLOMA_LEVELS,
  levelsLabel,
  toggleLevel,
} from "@/lib/levels";
import {
  createTemplateQuestion,
  QUESTION_TYPE_META,
} from "@/lib/question-templates";
import type {
  AssessmentQuestion,
  DiplomaLevel,
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
import {
  AlignLeft,
  ArrowLeftRight,
  Calculator,
  CheckSquare,
  CircleDot,
  ListOrdered,
  Plus,
  TextCursorInput,
  ToggleLeft,
  Trash2,
  type LucideIcon,
} from "lucide-react";

const QUESTION_TYPE_ICONS: Record<QuestionType, LucideIcon> = {
  qcm: CircleDot,
  multi: CheckSquare,
  true_false: ToggleLeft,
  math: Calculator,
  open: AlignLeft,
  matching: ArrowLeftRight,
  ordering: ListOrdered,
  fill_blank: TextCursorInput,
};

function QuestionEditor({
  question,
  onChange,
  onDelete,
}: {
  question: AssessmentQuestion;
  onChange: (q: AssessmentQuestion) => void;
  onDelete: () => void;
}) {
  const meta = QUESTION_TYPE_META[question.type];

  function patchPayload(partial: Record<string, unknown>) {
    onChange({
      ...question,
      payload: { ...question.payload, ...partial } as AssessmentQuestion["payload"],
    });
  }

  return (
    <Panel>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-sm text-ink-muted">
          {meta.short} · {question.points} pt
        </span>
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

function QcmFields({
  payload,
  onChange,
}: {
  payload: QcmPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
      />
      {payload.choices.map((c, i) => (
        <div key={i} className="flex items-end gap-2">
          <TextField
            label={`Choix ${i + 1}${payload.correctIndex === i ? " ★" : ""}`}
            value={c}
            className="flex-1"
            onChange={(e) => {
              const choices = [...payload.choices];
              choices[i] = e.target.value;
              onChange({ choices });
            }}
          />
          <Button
            type="button"
            size="sm"
            variant={payload.correctIndex === i ? "primary" : "ghost"}
            onClick={() => onChange({ correctIndex: i })}
          >
            Bonne
          </Button>
        </div>
      ))}
      <Button
        type="button"
        size="sm"
        variant="secondary"
        onClick={() =>
          onChange({ choices: [...payload.choices, `Option ${payload.choices.length + 1}`] })
        }
      >
        + Choix
      </Button>
      <TextArea
        label="Explication (feedback)"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function MultiFields({
  payload,
  onChange,
}: {
  payload: MultiPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
      />
      {payload.choices.map((c, i) => {
        const checked = payload.correctIndexes.includes(i);
        return (
          <div key={i} className="flex items-end gap-2">
            <TextField
              label={`Choix ${i + 1}${checked ? " ★" : ""}`}
              value={c}
              className="flex-1"
              onChange={(e) => {
                const choices = [...payload.choices];
                choices[i] = e.target.value;
                onChange({ choices });
              }}
            />
            <Button
              type="button"
              size="sm"
              variant={checked ? "primary" : "ghost"}
              onClick={() => {
                const set = new Set(payload.correctIndexes);
                if (set.has(i)) set.delete(i);
                else set.add(i);
                onChange({ correctIndexes: [...set].sort((a, b) => a - b) });
              }}
            >
              {checked ? "OK" : "Marquer"}
            </Button>
          </div>
        );
      })}
      <Button
        type="button"
        size="sm"
        variant="secondary"
        onClick={() =>
          onChange({
            choices: [...payload.choices, `Affirmation ${payload.choices.length + 1}`],
          })
        }
      >
        + Choix
      </Button>
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function TrueFalseFields({
  payload,
  onChange,
}: {
  payload: TrueFalsePayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Affirmation"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
      />
      <div className="flex gap-2">
        <Button
          type="button"
          size="sm"
          variant={payload.correct ? "primary" : "secondary"}
          onClick={() => onChange({ correct: true })}
        >
          Vrai
        </Button>
        <Button
          type="button"
          size="sm"
          variant={!payload.correct ? "primary" : "secondary"}
          onClick={() => onChange({ correct: false })}
        >
          Faux
        </Button>
      </div>
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function MathFields({
  payload,
  onChange,
}: {
  payload: MathPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
      />
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField
          label="Réponse"
          value={String(payload.answer)}
          onChange={(e) => onChange({ answer: Number(e.target.value) })}
        />
        <TextField
          label="Unité"
          value={payload.unit ?? ""}
          onChange={(e) => onChange({ unit: e.target.value })}
          placeholder="%, CHF, pièces…"
        />
        <NumberField
          label="Tolérance"
          value={String(payload.tolerance ?? 0.1)}
          step={0.01}
          onChange={(e) => onChange({ tolerance: Number(e.target.value) })}
        />
      </div>
      <TextArea
        label="Explication / calcul"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function OpenFields({
  payload,
  onChange,
}: {
  payload: OpenPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
      />
      <TextArea
        label="Réponse modèle"
        value={payload.modelAnswer}
        onChange={(e) => onChange({ modelAnswer: e.target.value })}
        className="min-h-20"
      />
      <TextField
        label="Mots-clés obligatoires (séparés par ;  ·  groupe OR avec | )"
        value={payload.requiredKeywords.join(" ; ")}
        onChange={(e) =>
          onChange({
            requiredKeywords: e.target.value
              .split(";")
              .map((s) => s.trim())
              .filter(Boolean),
          })
        }
        hint="Ex. stock|inventaire ; rotation"
      />
      <TextField
        label="Mots-clés bonus (optionnels)"
        value={(payload.optionalKeywords ?? []).join(" ; ")}
        onChange={(e) =>
          onChange({
            optionalKeywords: e.target.value
              .split(";")
              .map((s) => s.trim())
              .filter(Boolean),
          })
        }
      />
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function MatchingFields({
  payload,
  onChange,
}: {
  payload: MatchingPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-20 text-justify"
      />
      {payload.pairs.map((pair, i) => (
        <div key={i} className="grid gap-2 sm:grid-cols-2">
          <TextField
            label={`Gauche ${i + 1}`}
            value={pair.left}
            onChange={(e) => {
              const pairs = payload.pairs.map((p, idx) =>
                idx === i ? { ...p, left: e.target.value } : p,
              );
              onChange({ pairs });
            }}
          />
          <TextField
            label={`Droite ${i + 1}`}
            value={pair.right}
            onChange={(e) => {
              const pairs = payload.pairs.map((p, idx) =>
                idx === i ? { ...p, right: e.target.value } : p,
              );
              onChange({ pairs });
            }}
          />
        </div>
      ))}
      <Button
        type="button"
        size="sm"
        variant="secondary"
        onClick={() =>
          onChange({
            pairs: [
              ...payload.pairs,
              { left: "Terme", right: "Définition" },
            ],
          })
        }
      >
        + Paire
      </Button>
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function OrderingFields({
  payload,
  onChange,
}: {
  payload: OrderingPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-20 text-justify"
      />
      <p className="text-xs text-ink-subtle">
        Saisissez les étapes dans le <strong>bon ordre</strong> (1 → 2 → 3…).
      </p>
      {payload.items.map((item, i) => (
        <TextField
          key={i}
          label={`Étape ${i + 1}`}
          value={item}
          onChange={(e) => {
            const items = [...payload.items];
            items[i] = e.target.value;
            onChange({ items });
          }}
        />
      ))}
      <Button
        type="button"
        size="sm"
        variant="secondary"
        onClick={() =>
          onChange({
            items: [...payload.items, `Étape ${payload.items.length + 1}`],
          })
        }
      >
        + Étape
      </Button>
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

function FillBlankFields({
  payload,
  onChange,
}: {
  payload: FillBlankPayload;
  onChange: (p: Record<string, unknown>) => void;
}) {
  return (
    <>
      <TextArea
        label="Énoncé (utilisez ___ pour chaque trou)"
        value={payload.question}
        onChange={(e) => onChange({ question: e.target.value })}
        className="min-h-24 text-justify"
        hint="Exemple : Le SSCC sert à identifier une ___."
      />
      <TextField
        label="Réponses (dans l'ordre des trous, séparées par ; )"
        value={payload.answers.join(" ; ")}
        onChange={(e) =>
          onChange({
            answers: e.target.value
              .split(";")
              .map((s) => s.trim())
              .filter(Boolean),
          })
        }
      />
      <TextArea
        label="Explication"
        value={payload.explanation}
        onChange={(e) => onChange({ explanation: e.target.value })}
        className="min-h-20"
      />
    </>
  );
}

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
  const [templateType, setTemplateType] = useState<QuestionType>("qcm");
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

  function addFromTemplate() {
    const q = createTemplateQuestion(
      assessment!.id,
      templateType,
      questions.length + 1,
    );
    upsertAssessmentQuestion(q);
  }

  return (
    <div>
      <PageHeader
        title={assessment.title}
        backHref="/formateur/evaluations"
        backLabel="Retour à la liste"
        description="Paramètres + questions (modèles prêts à personnaliser)."
      />

      <Panel className="mb-4">
        <form onSubmit={onSaveMeta} className="space-y-3">
          <TextField
            label="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextArea
            label="Description / consignes"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-20"
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
          <p className="text-sm text-ink-muted">
            {assessment.published ? "Publiée" : "Brouillon"}
          </p>
        </form>
      </Panel>

      <Panel className="mb-4">
        <h2 className="mb-2 font-display text-xl">Ajouter une question</h2>
        <p className="mb-4 text-sm text-ink-muted">
          Choisissez un modèle : le formulaire se préremplit, vous n&apos;avez
          plus qu&apos;à adapter le texte.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(Object.keys(QUESTION_TYPE_META) as QuestionType[]).map((type) => {
            const meta = QUESTION_TYPE_META[type];
            const Icon = QUESTION_TYPE_ICONS[type];
            const selected = templateType === type;
            return (
              <div key={type} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => setTemplateType(type)}
                  title={meta.label}
                  aria-label={meta.label}
                  aria-pressed={selected}
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border transition ${
                    selected
                      ? "border-primary bg-primary-soft text-primary-strong shadow-[var(--shadow-sm)]"
                      : "border-border bg-surface text-ink-muted hover:border-primary/50 hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </button>
                <p className="mt-2 text-xs font-medium text-ink">{meta.short}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-subtle">
                  {meta.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button type="button" onClick={addFromTemplate}>
            <Plus className="h-4 w-4" />
            Ajouter — {QUESTION_TYPE_META[templateType].label}
          </Button>
          <p className="text-xs text-ink-subtle">
            Modèle sélectionné : {QUESTION_TYPE_META[templateType].description}
          </p>
        </div>
      </Panel>

      <div className="space-y-4">
        <h2 className="font-display text-xl">
          Questions ({questions.length})
        </h2>
        {questions.length === 0 ? (
          <EmptyState
            title="Aucune question"
            description="Ajoutez un modèle ci-dessus (QCM, Match, Ouverte…)."
          />
        ) : (
          questions.map((q) => (
            <QuestionEditor
              key={q.id}
              question={q}
              onChange={upsertAssessmentQuestion}
              onDelete={() => {
                if (confirm("Supprimer cette question ?")) {
                  deleteAssessmentQuestion(q.id);
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
