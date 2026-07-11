"use client";

import { FormEvent, useState } from "react";
import {
  Alert,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  TextArea,
  TextField,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function ContenuPage() {
  const { currentUser, state, updateLesson } = useAppStore();
  const lesson = state.lessons[0];
  const [title, setTitle] = useState(lesson?.title ?? "");
  const [full, setFull] = useState(lesson?.contentFull ?? "");
  const [summary, setSummary] = useState(lesson?.contentSummary ?? "");
  const [saved, setSaved] = useState(false);

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }
  if (!lesson) {
    return <EmptyState title="Aucune leçon à éditer" />;
  }

  function onSave(e: FormEvent) {
    e.preventDefault();
    updateLesson({
      ...lesson!,
      title,
      contentFull: full,
      contentSummary: summary,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <PageHeader
        title="Contenu théorique"
        description="Éditez la version complète et le résumé de la leçon démo."
      />
      <Panel>
        <form onSubmit={onSave} className="space-y-4">
          <TextField
            label="Titre de la leçon"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextArea
            label="Contenu complet"
            className="min-h-48"
            value={full}
            onChange={(e) => setFull(e.target.value)}
            hint="Markdown simple : ## titres, - listes, **gras**"
            required
          />
          <TextArea
            label="Contenu résumé"
            className="min-h-32"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            hint="Points clés uniquement"
            required
          />
          <Button type="submit">Enregistrer</Button>
          {saved ? (
            <Alert tone="success">Leçon enregistrée (stockage local démo).</Alert>
          ) : null}
        </form>
      </Panel>
    </div>
  );
}
