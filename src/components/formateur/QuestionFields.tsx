"use client";

import { Button, NumberField, TextField } from "@/components/ui";
import { MarkdownField } from "@/components/formateur/MarkdownField";
import type {
  FillBlankPayload,
  MatchingPayload,
  MathPayload,
  MultiPayload,
  OpenPayload,
  OrderingPayload,
  QcmPayload,
  TrueFalsePayload,
} from "@/lib/types";

type Patch = (p: Record<string, unknown>) => void;

export function QcmFields({
  payload,
  onChange,
}: {
  payload: QcmPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
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
          onChange({
            choices: [...payload.choices, `Option ${payload.choices.length + 1}`],
          })
        }
      >
        + Choix
      </Button>
      <MarkdownField
        label="Explication (feedback)"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function MultiFields({
  payload,
  onChange,
}: {
  payload: MultiPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
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
            choices: [
              ...payload.choices,
              `Affirmation ${payload.choices.length + 1}`,
            ],
          })
        }
      >
        + Choix
      </Button>
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function TrueFalseFields({
  payload,
  onChange,
}: {
  payload: TrueFalsePayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Affirmation"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
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
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function MathFields({
  payload,
  onChange,
}: {
  payload: MathPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
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
      <MarkdownField
        label="Explication / calcul"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function OpenFields({
  payload,
  onChange,
}: {
  payload: OpenPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
      />
      <MarkdownField
        label="Réponse modèle"
        value={payload.modelAnswer}
        onChange={(modelAnswer) => onChange({ modelAnswer })}
        className="min-h-20 text-sm leading-relaxed"
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
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function MatchingFields({
  payload,
  onChange,
}: {
  payload: MatchingPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-20 text-justify text-sm leading-relaxed"
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
            pairs: [...payload.pairs, { left: "Terme", right: "Définition" }],
          })
        }
      >
        + Paire
      </Button>
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function OrderingFields({
  payload,
  onChange,
}: {
  payload: OrderingPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-20 text-justify text-sm leading-relaxed"
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
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}

export function FillBlankFields({
  payload,
  onChange,
}: {
  payload: FillBlankPayload;
  onChange: Patch;
}) {
  return (
    <>
      <MarkdownField
        label="Énoncé (utilisez ___ pour chaque trou)"
        value={payload.question}
        onChange={(question) => onChange({ question })}
        className="min-h-24 text-justify text-sm leading-relaxed"
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
      <MarkdownField
        label="Explication"
        value={payload.explanation}
        onChange={(explanation) => onChange({ explanation })}
        className="min-h-20 text-sm leading-relaxed"
      />
    </>
  );
}
