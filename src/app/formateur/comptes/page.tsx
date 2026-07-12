import { redirect } from "next/navigation";

/** Ancien menu Comptes → hub Classes & élèves */
export default function ComptesRedirectPage() {
  redirect("/formateur/classes");
}
