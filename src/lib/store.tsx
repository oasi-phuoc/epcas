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
import type {
  AppState,
  AttemptRecord,
  Exercise,
  Lesson,
  LessonProgress,
  UserAccount,
} from "./types";

const STORAGE_KEY = "epcas-logistique-v35";

type AppStore = {
  state: AppState;
  hydrated: boolean;
  currentUser: UserAccount | null;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
  upsertUser: (user: Omit<UserAccount, "id"> & { id?: string }) => void;
  setUserActive: (userId: string, active: boolean) => void;
  updateLesson: (lesson: Lesson) => void;
  setLessonProgress: (
    userId: string,
    lessonId: string,
    patch: Partial<LessonProgress>,
  ) => void;
  addAttempt: (attempt: Omit<AttemptRecord, "id" | "createdAt">) => void;
  getUserProgress: (userId: string) => LessonProgress[];
  getAttemptsForUser: (userId: string) => AttemptRecord[];
  resetDemo: () => void;
  demoPassword: string;
};

const AppStoreContext = createContext<AppStore | null>(null);

function normalizeState(parsed: Partial<AppState> | null): AppState {
  if (!parsed) return initialState;

  const hasCurriculum =
    Array.isArray(parsed.blocks) &&
    parsed.blocks.length === initialState.blocks.length &&
    Array.isArray(parsed.modules) &&
    parsed.modules.length === initialState.modules.length;

  if (!hasCurriculum) {
    return {
      ...initialState,
      users: parsed.users ?? initialState.users,
      progress: parsed.progress ?? {},
      attempts: parsed.attempts ?? [],
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
    blocks: initialState.blocks,
    modules: initialState.modules,
    lessons,
    users: parsed.users ?? initialState.users,
    progress: parsed.progress ?? {},
    attempts: parsed.attempts ?? [],
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

  const login = useCallback((email: string, password: string) => {
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
  }, [commit, memoryState]);

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

  const updateLesson = useCallback(
    (lesson: Lesson) => {
      commit((s) => ({
        ...s,
        lessons: s.lessons.map((l) => (l.id === lesson.id ? lesson : l)),
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

  const resetDemo = useCallback(() => {
    writeStorage(initialState);
    setMemoryState(initialState);
  }, []);

  const value: AppStore = {
    state,
    hydrated,
    currentUser,
    login,
    logout,
    upsertUser,
    setUserActive,
    updateLesson,
    setLessonProgress,
    addAttempt,
    getUserProgress,
    getAttemptsForUser,
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

export function useExercises(): Exercise[] {
  return useAppStore().state.exercises.filter((e) => e.published);
}
