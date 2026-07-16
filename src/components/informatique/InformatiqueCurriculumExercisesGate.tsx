"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Alert } from "@/components/ui";
import {
  INFORMATIQUE_CURRICULUM_EXERCISES_FOR_APPRENTICES,
  INFORMATIQUE_PRATIQUE_OFFICE_HREF,
} from "@/lib/informatique-curriculum";
import { isStaffRole } from "@/lib/roles";
import { useAppStore } from "@/lib/store";

/** Bloque l’accès aux exercices curriculum ICT (804–808) pour les apprentis. */
export function InformatiqueCurriculumExercisesGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAppStore();
  const router = useRouter();
  const staff = Boolean(currentUser && isStaffRole(currentUser.role));
  const allowed =
    INFORMATIQUE_CURRICULUM_EXERCISES_FOR_APPRENTICES || staff;

  useEffect(() => {
    if (currentUser && !allowed) {
      router.replace(INFORMATIQUE_PRATIQUE_OFFICE_HREF);
    }
  }, [currentUser, allowed, router]);

  if (!currentUser) return null;
  if (!allowed) {
    return (
      <Alert tone="info">
        Les exercices des modules ICT ne sont pas encore disponibles pour les
        apprentis. Redirection vers la pratique Office…
      </Alert>
    );
  }
  return <>{children}</>;
}
