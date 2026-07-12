import type { Role } from "./types";

export const ROLES: Role[] = ["admin", "trainer", "apprentice"];

export const ROLE_LABELS: Record<Role, string> = {
  admin: "Admin",
  trainer: "Formateur",
  apprentice: "Apprenti",
};

/** Accès espace formateur / gestion (admin + formateur). */
export function isStaffRole(role: Role | null | undefined): boolean {
  return role === "admin" || role === "trainer";
}
