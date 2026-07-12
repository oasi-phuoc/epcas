"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type EditorSnapshot = {
  title: string;
  full: string;
  summary: string;
};

const HISTORY_LIMIT = 40;
const TYPING_DEBOUNCE_MS = 450;

function eq(a: EditorSnapshot, b: EditorSnapshot) {
  return a.title === b.title && a.full === b.full && a.summary === b.summary;
}

/**
 * Historique d'édition (Annuler / Rétablir) pour le contenu formateur.
 * - Frappe : une entrée toutes les ~450 ms
 * - Actions barre d'outils : entrée immédiate
 * - Capacité : 40 modifications
 */
export function useEditorHistory(initial: EditorSnapshot) {
  const [present, setPresentState] = useState(initial);
  const presentRef = useRef(present);
  presentRef.current = present;

  const pastRef = useRef<EditorSnapshot[]>([]);
  const futureRef = useRef<EditorSnapshot[]>([]);
  const typingBaseRef = useRef<EditorSnapshot | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [meta, setMeta] = useState({ canUndo: false, canRedo: false, depth: 0 });

  const syncMeta = useCallback(() => {
    setMeta({
      canUndo:
        pastRef.current.length > 0 || typingBaseRef.current != null,
      canRedo: futureRef.current.length > 0,
      depth: pastRef.current.length + (typingBaseRef.current ? 1 : 0),
    });
  }, []);

  const clearDebounce = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
  }, []);

  const pushPast = useCallback((snapshot: EditorSnapshot) => {
    const last = pastRef.current[pastRef.current.length - 1];
    if (last && eq(last, snapshot)) return;
    pastRef.current = [...pastRef.current, snapshot].slice(-HISTORY_LIMIT);
  }, []);

  const flushTyping = useCallback(() => {
    clearDebounce();
    const base = typingBaseRef.current;
    typingBaseRef.current = null;
    if (!base) return;
    if (eq(base, presentRef.current)) {
      syncMeta();
      return;
    }
    pushPast(base);
    futureRef.current = [];
    syncMeta();
  }, [clearDebounce, pushPast, syncMeta]);

  const setPresent = useCallback(
    (
      updater: EditorSnapshot | ((prev: EditorSnapshot) => EditorSnapshot),
      options?: { history?: "debounce" | "immediate" | "none" },
    ) => {
      const history = options?.history ?? "debounce";
      const prev = presentRef.current;
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (eq(prev, next)) return;

      if (history === "none") {
        presentRef.current = next;
        setPresentState(next);
        return;
      }

      if (history === "immediate") {
        flushTyping();
        pushPast(presentRef.current);
        futureRef.current = [];
        presentRef.current = next;
        setPresentState(next);
        syncMeta();
        return;
      }

      if (!typingBaseRef.current) {
        typingBaseRef.current = prev;
        syncMeta();
      }
      presentRef.current = next;
      setPresentState(next);
      clearDebounce();
      debounceRef.current = setTimeout(() => {
        debounceRef.current = null;
        const base = typingBaseRef.current;
        typingBaseRef.current = null;
        if (!base) return;
        if (eq(base, presentRef.current)) {
          syncMeta();
          return;
        }
        pushPast(base);
        futureRef.current = [];
        syncMeta();
      }, TYPING_DEBOUNCE_MS);
    },
    [clearDebounce, flushTyping, pushPast, syncMeta],
  );

  const undo = useCallback(() => {
    flushTyping();
    const past = pastRef.current;
    if (past.length === 0) return;
    const previous = past[past.length - 1]!;
    pastRef.current = past.slice(0, -1);
    futureRef.current = [presentRef.current, ...futureRef.current].slice(
      0,
      HISTORY_LIMIT,
    );
    presentRef.current = previous;
    setPresentState(previous);
    syncMeta();
  }, [flushTyping, syncMeta]);

  const redo = useCallback(() => {
    flushTyping();
    const future = futureRef.current;
    if (future.length === 0) return;
    const next = future[0]!;
    futureRef.current = future.slice(1);
    pushPast(presentRef.current);
    presentRef.current = next;
    setPresentState(next);
    syncMeta();
  }, [flushTyping, pushPast, syncMeta]);

  useEffect(() => () => clearDebounce(), [clearDebounce]);

  return {
    present,
    setPresent,
    undo,
    redo,
    canUndo: meta.canUndo,
    canRedo: meta.canRedo,
    historyDepth: meta.depth,
    historyLimit: HISTORY_LIMIT,
  };
}
