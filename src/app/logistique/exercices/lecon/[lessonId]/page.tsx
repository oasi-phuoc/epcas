"use client";

import { useParams } from "next/navigation";
import { LessonViewer } from "@/components/LessonViewer";

export default function LogistiqueExerciceLessonPage() {
  const params = useParams<{ lessonId: string }>();
  return <LessonViewer lessonId={params.lessonId} />;
}
