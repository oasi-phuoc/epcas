import { redirect } from "next/navigation";

/** Ancienne route Profil → Paramètres (onglet Compte). */
export default function ProfilRedirectPage() {
  redirect("/parametres");
}
