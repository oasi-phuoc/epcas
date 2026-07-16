"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
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
import type { DiplomaLevel } from "@/lib/types";
import { ClipboardPlus, Pencil, Trash2 } from "lucide-react";

export default function EvaluationsListPage() {
  const {
    currentUser,
    state,
    upsertAssessment,
    deleteAssessment,
    setAssessmentPublished,
    getAssessmentQuestions,
  } = useAppStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [durationMin, setDurationMin] = useState("45");
  const [maxAttempts, setMaxAttempts] = useState("1");
  const [levels, setLevels] = useState<DiplomaLevel[]>(["AFP", "CFC"]);
  const [createdId, setCreatedId] = useState<string | null>(null);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  function onCreate(e: FormEvent) {
    e.preventDefault();
    const id = upsertAssessment({
      title: title.trim() || "Nouvelle évaluation",
      description: description.trim(),
      durationMin: Number(durationMin) || 45,
      maxAttempts: Number(maxAttempts) || 1,
      published: false,
      levels,
    });
    setTitle("");
    setDescription("");
    setDurationMin("45");
    setMaxAttempts("1");
    setLevels(["AFP", "CFC"]);
    setCreatedId(id);
  }

  const list = [...state.assessments].sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );

  return (
    <div>
      <PageHeader
        title="Évaluations"
        description="Créez des blancs / examens ciblés AFP, CFC ou les deux."
      />

      <Panel className="mb-4">
        <h2 className="mb-3 font-display text-xl">Nouvelle évaluation</h2>
        <form onSubmit={onCreate} className="space-y-3">
          <TextField
            label="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Blanc module 101 — Histoire"
            required
          />
          <TextArea
            label="Description (optionnel)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Consignes pour les apprentis…"
            className="min-h-20"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberField
              label="Durée (minutes)"
              value={durationMin}
              onChange={(e) => setDurationMin(e.target.value)}
              min={5}
            />
            <NumberField
              label="Tentatives max"
              value={maxAttempts}
              onChange={(e) => setMaxAttempts(e.target.value)}
              min={1}
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Public cible</p>
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
          <Button type="submit">
            <ClipboardPlus className="h-4 w-4" />
            Créer l&apos;évaluation
          </Button>
          {createdId ? (
            <Alert tone="success">
              Évaluation créée.{" "}
              <Link
                href={`/formateur/evaluations/${createdId}`}
                className="font-medium underline"
              >
                Ajouter des questions →
              </Link>
            </Alert>
          ) : null}
        </form>
      </Panel>

      <div className="space-y-3">
        {list.length === 0 ? (
          <EmptyState
            title="Aucune évaluation"
            description="Créez votre première évaluation ci-dessus, puis ajoutez des questions via les modèles."
          />
        ) : (
          list.map((a) => {
            const qCount = getAssessmentQuestions(a.id).length;
            const points = getAssessmentQuestions(a.id).reduce(
              (s, q) => s + q.points,
              0,
            );
            return (
              <Panel key={a.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl text-ink">{a.title}</h3>
                    <p className="mt-1 text-xs text-ink-subtle">
                      {a.published ? "Publiée" : "Brouillon"} · {levelsLabel(a.levels)}
                    </p>
                    {a.description ? (
                      <p className="mt-1 text-sm text-ink-muted">{a.description}</p>
                    ) : null}
                    <p className="mt-2 text-xs text-ink-subtle">
                      {a.durationMin} min · {a.maxAttempts} tentative
                      {a.maxAttempts > 1 ? "s" : ""} · {qCount} question
                      {qCount !== 1 ? "s" : ""} · {points} pt
                      {points !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/formateur/evaluations/${a.id}`}>
                      <Button size="sm" variant="secondary">
                        <Pencil className="h-4 w-4" />
                        Éditer
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant={a.published ? "ghost" : "primary"}
                      onClick={() =>
                        setAssessmentPublished(a.id, !a.published)
                      }
                    >
                      {a.published ? "Dépublier" : "Publier"}
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        if (
                          confirm(
                            `Supprimer « ${a.title} » et toutes ses questions ?`,
                          )
                        ) {
                          deleteAssessment(a.id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Panel>
            );
          })
        )}
      </div>
    </div>
  );
}
