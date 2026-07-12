"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  useState,
  type ReactNode,
} from "react";
import { initialState, DEMO_PASSWORD } from "./demo-data";
import {
  assessmentVisibleForLevel,
  getUserDiplomaLevel,
  moduleVisibleForLevel,
  normalizeClassLevel,
  normalizeLevels,
} from "./levels";
import type {
  AppState,
  Assessment,
  AssessmentQuestion,
  AttemptRecord,
  ClassRoom,
  DiplomaLevel,
  Exercise,
  Lesson,
  LessonProgress,
  Module,
  UserAccount,
} from "./types";

const STORAGE_KEY = "epcas-logistique-v84";

type AppStore = {
  state: AppState;
  hydrated: boolean;
  currentUser: UserAccount | null;
  /** Niveau diplôme de l'utilisateur connecté (via sa classe) */
  userLevel: DiplomaLevel;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
  upsertUser: (user: Omit<UserAccount, "id"> & { id?: string }) => void;
  setUserActive: (userId: string, active: boolean) => void;
  setUsersActive: (userIds: string[], active: boolean) => void;
  setUserClass: (userId: string, classId: string) => void;
  upsertClass: (
    classroom: Omit<ClassRoom, "id"> & { id?: string },
  ) => string;
  deleteClass: (classId: string) => void;
  updateLesson: (lesson: Lesson) => void;
  updateModule: (module: Module) => void;
  setLessonProgress: (
    userId: string,
    lessonId: string,
    patch: Partial<LessonProgress>,
  ) => void;
  addAttempt: (attempt: Omit<AttemptRecord, "id" | "createdAt">) => void;
  getUserProgress: (userId: string) => LessonProgress[];
  getAttemptsForUser: (userId: string) => AttemptRecord[];
  upsertAssessment: (
    assessment: Omit<Assessment, "id" | "createdAt" | "updatedAt"> & {
      id?: string;
    },
  ) => string;
  deleteAssessment: (id: string) => void;
  setAssessmentPublished: (id: string, published: boolean) => void;
  upsertAssessmentQuestion: (question: AssessmentQuestion) => void;
  deleteAssessmentQuestion: (id: string) => void;
  getAssessmentQuestions: (assessmentId: string) => AssessmentQuestion[];
  resetDemo: () => void;
  demoPassword: string;
};

const AppStoreContext = createContext<AppStore | null>(null);

function normalizeClasses(
  classes: ClassRoom[] | undefined,
  legacy?: ClassRoom,
): ClassRoom[] {
  const source =
    Array.isArray(classes) && classes.length > 0
      ? classes
      : legacy
        ? [legacy]
        : initialState.classes;

  return source.map((c) => ({
    ...c,
    level: normalizeClassLevel(c),
  }));
}

function normalizeModules(
  parsedModules: Module[] | undefined,
): Module[] {
  const saved = new Map((parsedModules ?? []).map((m) => [m.id, m] as const));
  return initialState.modules.map((m) => {
    const prev = saved.get(m.id);
    if (!prev) return m;
    return {
      ...m,
      published: prev.published ?? m.published,
      levels: normalizeLevels(prev.levels ?? m.levels),
    };
  });
}

function normalizeAssessments(
  assessments: Assessment[] | undefined,
): Assessment[] {
  return (assessments ?? []).map((a) => ({
    ...a,
    levels: normalizeLevels(a.levels),
  }));
}

function normalizeState(parsed: Partial<AppState> | null): AppState {
  if (!parsed) return initialState;

  const legacy = parsed as Partial<AppState> & { classRoom?: ClassRoom };
  const classes = normalizeClasses(parsed.classes, legacy.classRoom);

  const hasCurriculum =
    Array.isArray(parsed.blocks) &&
    parsed.blocks.length === initialState.blocks.length &&
    Array.isArray(parsed.modules) &&
    parsed.modules.length === initialState.modules.length;

  if (!hasCurriculum) {
    return {
      ...initialState,
      classes,
      users: parsed.users ?? initialState.users,
      progress: parsed.progress ?? {},
      attempts: parsed.attempts ?? [],
      assessments: normalizeAssessments(parsed.assessments),
      assessmentQuestions: parsed.assessmentQuestions ?? [],
      currentUserId: parsed.currentUserId ?? null,
    };
  }

  const lessonMap = new Map(
    (parsed.lessons ?? []).map((l) => [l.id, l] as const),
  );
  const lessons = initialState.lessons.map((l) => lessonMap.get(l.id) ?? l);

  return {
    ...initialState,
    ...parsed,
    classes,
    blocks: initialState.blocks,
    modules: normalizeModules(parsed.modules),
    lessons,
    users: parsed.users ?? initialState.users,
    progress: parsed.progress ?? {},
    attempts: parsed.attempts ?? [],
    assessments: normalizeAssessments(parsed.assessments),
    assessmentQuestions: parsed.assessmentQuestions ?? [],
    currentUserId: parsed.currentUserId ?? null,
  };
}

function readStorage(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    return normalizeState(JSON.parse(raw) as Partial<AppState>);
  } catch {
    return initialState;
  }
}

function writeStorage(state: AppState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("epcas-store"));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("epcas-store", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("epcas-store", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): string {
  return localStorage.getItem(STORAGE_KEY) ?? "";
}

function getServerSnapshot(): string {
  return "";
}

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const storedState = useMemo(() => {
    if (!raw) return initialState;
    try {
      return normalizeState(JSON.parse(raw) as Partial<AppState>);
    } catch {
      return initialState;
    }
  }, [raw]);

  const [memoryState, setMemoryState] = useState<AppState | null>(null);
  const state = memoryState ?? storedState;

  const commit = useCallback((updater: (s: AppState) => AppState) => {
    setMemoryState((prev) => {
      const base = prev ?? readStorage();
      const next = updater(base);
      writeStorage(next);
      return next;
    });
  }, []);

  const currentUser = useMemo(
    () => state.users.find((u) => u.id === state.currentUserId) ?? null,
    [state.users, state.currentUserId],
  );

  const userLevel = useMemo(
    () => getUserDiplomaLevel(currentUser, state.classes),
    [currentUser, state.classes],
  );

  const login = useCallback(
    (email: string, password: string) => {
      const base = memoryState ?? readStorage();
      const user = base.users.find(
        (u) =>
          u.email.toLowerCase() === email.trim().toLowerCase() &&
          u.password === password &&
          u.active,
      );
      if (!user) {
        return { ok: false, error: "Email ou mot de passe incorrect." };
      }
      commit((s) => ({ ...s, currentUserId: user.id }));
      return { ok: true };
    },
    [commit, memoryState],
  );

  const logout = useCallback(() => {
    commit((s) => ({ ...s, currentUserId: null }));
  }, [commit]);

  const upsertUser = useCallback(
    (user: Omit<UserAccount, "id"> & { id?: string }) => {
      commit((s) => {
        if (user.id) {
          return {
            ...s,
            users: s.users.map((u) =>
              u.id === user.id ? { ...u, ...user, id: user.id } : u,
            ),
          };
        }
        const id = `user-${crypto.randomUUID().slice(0, 8)}`;
        return {
          ...s,
          users: [...s.users, { ...user, id }],
          progress: { ...s.progress, [id]: [] },
        };
      });
    },
    [commit],
  );

  const setUserActive = useCallback(
    (userId: string, active: boolean) => {
      commit((s) => ({
        ...s,
        users: s.users.map((u) => (u.id === userId ? { ...u, active } : u)),
      }));
    },
    [commit],
  );

  const setUsersActive = useCallback(
    (userIds: string[], active: boolean) => {
      if (userIds.length === 0) return;
      const idSet = new Set(userIds);
      commit((s) => ({
        ...s,
        users: s.users.map((u) =>
          idSet.has(u.id) ? { ...u, active } : u,
        ),
      }));
    },
    [commit],
  );

  const setUserClass = useCallback(
    (userId: string, classId: string) => {
      commit((s) => ({
        ...s,
        users: s.users.map((u) =>
          u.id === userId ? { ...u, classId } : u,
        ),
      }));
    },
    [commit],
  );

  const upsertClass = useCallback(
    (classroom: Omit<ClassRoom, "id"> & { id?: string }) => {
      const id = classroom.id ?? `class-${crypto.randomUUID().slice(0, 8)}`;
      const level = normalizeClassLevel(classroom);
      commit((s) => {
        if (classroom.id) {
          return {
            ...s,
            classes: s.classes.map((c) =>
              c.id === classroom.id
                ? {
                    ...c,
                    name: classroom.name,
                    year: classroom.year,
                    level,
                  }
                : c,
            ),
          };
        }
        return {
          ...s,
          classes: [
            ...s.classes,
            { id, name: classroom.name, year: classroom.year, level },
          ],
        };
      });
      return id;
    },
    [commit],
  );

  const deleteClass = useCallback(
    (classId: string) => {
      commit((s) => {
        if (s.classes.length <= 1) return s;
        const fallback = s.classes.find((c) => c.id !== classId)?.id;
        if (!fallback) return s;
        return {
          ...s,
          classes: s.classes.filter((c) => c.id !== classId),
          users: s.users.map((u) =>
            u.classId === classId ? { ...u, classId: fallback } : u,
          ),
        };
      });
    },
    [commit],
  );

  const updateLesson = useCallback(
    (lesson: Lesson) => {
      commit((s) => ({
        ...s,
        lessons: s.lessons.map((l) => (l.id === lesson.id ? lesson : l)),
      }));
    },
    [commit],
  );

  const updateModule = useCallback(
    (module: Module) => {
      commit((s) => ({
        ...s,
        modules: s.modules.map((m) =>
          m.id === module.id
            ? { ...module, levels: normalizeLevels(module.levels) }
            : m,
        ),
      }));
    },
    [commit],
  );

  const setLessonProgress = useCallback(
    (userId: string, lessonId: string, patch: Partial<LessonProgress>) => {
      commit((s) => {
        const list = s.progress[userId] ?? [];
        const existing = list.find((p) => p.lessonId === lessonId);
        const next: LessonProgress = existing
          ? { ...existing, ...patch }
          : {
              lessonId,
              status: "unread",
              modePref: "full",
              ...patch,
            };
        return {
          ...s,
          progress: {
            ...s.progress,
            [userId]: existing
              ? list.map((p) => (p.lessonId === lessonId ? next : p))
              : [...list, next],
          },
        };
      });
    },
    [commit],
  );

  const addAttempt = useCallback(
    (attempt: Omit<AttemptRecord, "id" | "createdAt">) => {
      const record: AttemptRecord = {
        ...attempt,
        id: `att-${crypto.randomUUID().slice(0, 8)}`,
        createdAt: new Date().toISOString(),
      };
      commit((s) => ({ ...s, attempts: [record, ...s.attempts] }));
    },
    [commit],
  );

  const getUserProgress = useCallback(
    (userId: string) => state.progress[userId] ?? [],
    [state.progress],
  );

  const getAttemptsForUser = useCallback(
    (userId: string) => state.attempts.filter((a) => a.userId === userId),
    [state.attempts],
  );

  const upsertAssessment = useCallback(
    (
      assessment: Omit<Assessment, "id" | "createdAt" | "updatedAt"> & {
        id?: string;
      },
    ) => {
      const now = new Date().toISOString();
      const id = assessment.id ?? `asmt-${crypto.randomUUID().slice(0, 8)}`;
      const levels = normalizeLevels(assessment.levels);
      commit((s) => {
        if (assessment.id) {
          return {
            ...s,
            assessments: s.assessments.map((a) =>
              a.id === assessment.id
                ? {
                    ...a,
                    ...assessment,
                    id: assessment.id,
                    levels,
                    updatedAt: now,
                  }
                : a,
            ),
          };
        }
        const created: Assessment = {
          id,
          title: assessment.title,
          description: assessment.description,
          durationMin: assessment.durationMin,
          maxAttempts: assessment.maxAttempts,
          published: assessment.published,
          levels,
          createdAt: now,
          updatedAt: now,
        };
        return { ...s, assessments: [created, ...s.assessments] };
      });
      return id;
    },
    [commit],
  );

  const deleteAssessment = useCallback(
    (id: string) => {
      commit((s) => ({
        ...s,
        assessments: s.assessments.filter((a) => a.id !== id),
        assessmentQuestions: s.assessmentQuestions.filter(
          (q) => q.assessmentId !== id,
        ),
      }));
    },
    [commit],
  );

  const setAssessmentPublished = useCallback(
    (id: string, published: boolean) => {
      commit((s) => ({
        ...s,
        assessments: s.assessments.map((a) =>
          a.id === id
            ? { ...a, published, updatedAt: new Date().toISOString() }
            : a,
        ),
      }));
    },
    [commit],
  );

  const upsertAssessmentQuestion = useCallback(
    (question: AssessmentQuestion) => {
      commit((s) => {
        const exists = s.assessmentQuestions.some((q) => q.id === question.id);
        return {
          ...s,
          assessmentQuestions: exists
            ? s.assessmentQuestions.map((q) =>
                q.id === question.id ? question : q,
              )
            : [...s.assessmentQuestions, question],
          assessments: s.assessments.map((a) =>
            a.id === question.assessmentId
              ? { ...a, updatedAt: new Date().toISOString() }
              : a,
          ),
        };
      });
    },
    [commit],
  );

  const deleteAssessmentQuestion = useCallback(
    (id: string) => {
      commit((s) => ({
        ...s,
        assessmentQuestions: s.assessmentQuestions.filter((q) => q.id !== id),
      }));
    },
    [commit],
  );

  const getAssessmentQuestions = useCallback(
    (assessmentId: string) =>
      state.assessmentQuestions
        .filter((q) => q.assessmentId === assessmentId)
        .sort((a, b) => a.order - b.order),
    [state.assessmentQuestions],
  );

  const resetDemo = useCallback(() => {
    writeStorage(initialState);
    setMemoryState(initialState);
  }, []);

  const value: AppStore = {
    state,
    hydrated,
    currentUser,
    userLevel,
    login,
    logout,
    upsertUser,
    setUserActive,
    setUsersActive,
    setUserClass,
    upsertClass,
    deleteClass,
    updateLesson,
    updateModule,
    setLessonProgress,
    addAttempt,
    getUserProgress,
    getAttemptsForUser,
    upsertAssessment,
    deleteAssessment,
    setAssessmentPublished,
    upsertAssessmentQuestion,
    deleteAssessmentQuestion,
    getAssessmentQuestions,
    resetDemo,
    demoPassword: DEMO_PASSWORD,
  };

  return (
    <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>
  );
}

export function useAppStore() {
  const ctx = useContext(AppStoreContext);
  if (!ctx) throw new Error("useAppStore must be used within AppStoreProvider");
  return ctx;
}

/** Modules publiés visibles pour le niveau de l'utilisateur (formateur = tout). */
export function useVisibleModules(): Module[] {
  const { state, currentUser, userLevel } = useAppStore();
  return useMemo(() => {
    const published = state.modules.filter((m) => m.published);
    if (!currentUser || currentUser.role === "trainer") return published;
    return published.filter((m) => moduleVisibleForLevel(m, userLevel));
  }, [state.modules, currentUser, userLevel]);
}

/** Exercices publiés dont le module est accessible au niveau de l'apprenti. */
export function useExercises(): Exercise[] {
  const { state, currentUser, userLevel } = useAppStore();
  return useMemo(() => {
    const published = state.exercises.filter((e) => e.published);
    if (!currentUser || currentUser.role === "trainer") return published;

    const visibleModuleIds = new Set(
      state.modules
        .filter((m) => m.published && moduleVisibleForLevel(m, userLevel))
        .map((m) => m.id),
    );
    const lessonModule = new Map(
      state.lessons.map((l) => [l.id, l.moduleId] as const),
    );

    return published.filter((e) => {
      if (!e.lessonId) return true;
      const moduleId = lessonModule.get(e.lessonId);
      if (!moduleId) return true;
      return visibleModuleIds.has(moduleId);
    });
  }, [state.exercises, state.modules, state.lessons, currentUser, userLevel]);
}

/** Blancs publiés pour le niveau de l'apprenti. */
export function useVisibleAssessments(): Assessment[] {
  const { state, currentUser, userLevel } = useAppStore();
  return useMemo(() => {
    const published = state.assessments.filter((a) => a.published);
    if (!currentUser || currentUser.role === "trainer") return published;
    return published.filter((a) => assessmentVisibleForLevel(a, userLevel));
  }, [state.assessments, currentUser, userLevel]);
}

export function countLessonsForLevel(
  state: AppState,
  level: DiplomaLevel,
): number {
  const visibleIds = new Set(
    state.modules
      .filter((m) => m.published && moduleVisibleForLevel(m, level))
      .map((m) => m.id),
  );
  return state.lessons.filter(
    (l) => l.published && visibleIds.has(l.moduleId),
  ).length;
}
