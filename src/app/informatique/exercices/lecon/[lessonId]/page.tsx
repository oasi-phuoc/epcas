"use client";

import { useParams } from "next/navigation";
import { InformatiqueCurriculumExercisesGate } from "@/components/informatique/InformatiqueCurriculumExercisesGate";
import { LessonViewer } from "@/components/LessonViewer";

export default function InformatiqueExerciceLessonPage() {
  const params = useParams<{ lessonId: string }>();
  return (
    <InformatiqueCurriculumExercisesGate>
      <LessonViewer lessonId={params.lessonId} />
    </InformatiqueCurriculumExercisesGate>
  );
}
