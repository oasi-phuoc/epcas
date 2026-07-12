"use client";

import {
  Alert,
  Badge,
  Button,
  PageHeader,
  Panel,
  ProgressBar,
} from "@/components/ui";
import { getUserDiplomaLevel, STUDY_YEAR_LABELS } from "@/lib/levels";
import { ROLE_LABELS, isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";

export default function ProfilPage() {
  const {
    currentUser,
    logout,
    resetDemo,
    getUserProgress,
    getAttemptsForUser,
    state,
    userLevel,
    userStudyYear,
  } = useAppStore();
  if (!currentUser) return null;

  const progress = getUserProgress(currentUser.id);
  const attempts = getAttemptsForUser(currentUser.id);
  const classroom = state.classes.find((c) => c.id === currentUser.classId);
  const level =
    isStaffRole(currentUser.role)
      ? userLevel
      : getUserDiplomaLevel(currentUser, state.classes);
  const studyYear =
    classroom?.studyYear ??
    (currentUser.role === "apprentice" ? userStudyYear : 1);
  const lessonTotal = countLessonsForLevel(state, level, studyYear);
  const done = progress.filter((p) => p.status === "done").length;
  const pct = lessonTotal === 0 ? 0 : (done / lessonTotal) * 100;
  const avg =
    attempts.length === 0
      ? 0
      : (attempts.reduce((s, a) => s + a.score / a.maxScore, 0) /
          attempts.length) *
        100;

  return (
    <div>
      <PageHeader
        title="Profil"
        description="Vos informations et votre progression."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel>
          <p className="text-sm text-ink-muted">Nom</p>
          <p className="font-display text-2xl">{currentUser.displayName}</p>
          <p className="mt-2 text-sm text-ink-muted">{currentUser.email}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-ink-subtle">
            {ROLE_LABELS[currentUser.role]}
          </p>
          {classroom ? (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-sm text-ink-muted">{classroom.name}</span>
              <Badge tone="primary">{classroom.level}</Badge>
              <Badge tone="accent">
                {STUDY_YEAR_LABELS[classroom.studyYear]}
              </Badge>
            </div>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={logout}>
              Déconnexion
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                if (confirm("Réinitialiser les données démo locales ?")) {
                  resetDemo();
                }
              }}
            >
              Reset démo
            </Button>
          </div>
        </Panel>
        {currentUser.role === "apprentice" ? (
          <Panel>
            <ProgressBar
              value={pct}
              label={`Théorie ${level} · ${STUDY_YEAR_LABELS[studyYear]}`}
            />
            <div className="mt-4">
              <ProgressBar value={avg} label="Score moyen exercices" />
            </div>
            <Alert tone="info">
              Contenu filtré selon votre séquence {level}{" "}
              {STUDY_YEAR_LABELS[studyYear]}. Après une mise à jour, utilisez
              Reset démo si besoin.
            </Alert>
          </Panel>
        ) : (
          <Panel>
            <Alert tone="info">
              Compte {ROLE_LABELS[currentUser.role].toLowerCase()} : gérez les
              comptes, séquences et contenus depuis le menu dédié.
            </Alert>
          </Panel>
        )}
      </div>
    </div>
  );
}
