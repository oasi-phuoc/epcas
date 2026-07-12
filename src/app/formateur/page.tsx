import { redirect } from "next/navigation";

/** Suivi global → hub Classes (suivi par classe dans le détail) */
export default function FormateurRedirectPage() {
  redirect("/formateur/classes");
}
