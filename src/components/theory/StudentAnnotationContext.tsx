"use client";

import { createContext, useContext } from "react";

type StudentAnnotationContextValue = {
  onDeleteComment?: (id: string) => void;
};

export const StudentAnnotationContext =
  createContext<StudentAnnotationContextValue>({});

export function useStudentAnnotationActions() {
  return useContext(StudentAnnotationContext);
}
