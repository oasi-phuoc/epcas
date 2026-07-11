"use client";

import { EmptyState, PageHeader, Panel, Badge } from "@/components/ui";

export default function BlancsPage() {
  return (
    <div>
      <PageHeader
        title="Évaluations à blanc"
        description="Conditions d’examen : timer, score, questions mixtes. Disponible en Phase 2."
      />
      <Panel>
        <div className="mb-3">
          <Badge tone="accent">Bientôt</Badge>
        </div>
        <EmptyState
          title="Aucun blanc publié pour le moment"
          description="Le formateur pourra composer des blancs avec QCM, maths et questions ouvertes (mots-clés)."
        />
      </Panel>
    </div>
  );
}
