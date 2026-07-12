"use client";

import { useEffect, useRef } from "react";
import { useAppStore } from "@/lib/store";
import { flushTrackingOutbox } from "@/lib/offline/tracking-sync";
import { isStaffRole } from "@/lib/roles";

/**
 * Dès que le réseau revient (ou à la connexion), pousse le suivi en attente
 * et rafraîchit le hub côté formateur.
 */
export function TrackingSyncHost() {
  const { currentUser, hydrated, syncTrackingNow, refreshTrackingFromHub } =
    useAppStore();
  const syncing = useRef(false);

  useEffect(() => {
    if (!hydrated || !currentUser) return;

    async function run(reason: string) {
      if (syncing.current) return;
      if (!navigator.onLine) return;
      syncing.current = true;
      try {
        await syncTrackingNow();
        if (currentUser && isStaffRole(currentUser.role)) {
          await refreshTrackingFromHub();
        }
        if (process.env.NODE_ENV === "development") {
          console.info("[EPCAS] tracking sync", reason);
        }
      } finally {
        syncing.current = false;
      }
    }

    void run("mount");

    const onOnline = () => void run("online");
    const onFocus = () => void run("focus");
    const onVis = () => {
      if (document.visibilityState === "visible") void run("visible");
    };
    const onHub = () => {
      if (currentUser && isStaffRole(currentUser.role)) {
        void refreshTrackingFromHub();
      }
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("epcas-tracking-hub", onHub);

    // Flush périodique léger si online
    const timer = window.setInterval(() => {
      if (navigator.onLine) void flushTrackingOutbox();
    }, 60_000);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("epcas-tracking-hub", onHub);
      window.clearInterval(timer);
    };
  }, [
    hydrated,
    currentUser,
    syncTrackingNow,
    refreshTrackingFromHub,
  ]);

  return null;
}
