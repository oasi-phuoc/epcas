"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Alert, Button, Panel, TextField } from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function LoginForm() {
  const { login, currentUser, hydrated, demoPassword } = useAppStore();
  const router = useRouter();
  const search = useSearchParams();
  const demo = search.get("demo");
  const presetEmail =
    demo === "formateur"
      ? "formateur@epcas.ch"
      : demo === "admin"
        ? "admin@epcas.ch"
        : demo === "afp"
          ? "afp@epcas.ch"
          : "apprenti@epcas.ch";

  useEffect(() => {
    if (hydrated && currentUser) router.replace("/accueil");
  }, [hydrated, currentUser, router]);

  return (
    <LoginFields
      key={`${demo ?? "default"}-${demoPassword}`}
      presetEmail={presetEmail}
      demoPassword={demoPassword}
      onLogin={login}
      onSuccess={() => router.replace("/accueil")}
    />
  );
}

function LoginFields({
  presetEmail,
  demoPassword,
  onLogin,
  onSuccess,
}: {
  presetEmail: string;
  demoPassword: string;
  onLogin: (
    email: string,
    password: string,
  ) => { ok: boolean; error?: string };
  onSuccess: () => void;
}) {
  const [email, setEmail] = useState(presetEmail);
  const [password, setPassword] = useState(demoPassword);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = onLogin(email, password);
    if (!result.ok) {
      setError(result.error ?? "Connexion impossible");
      return;
    }
    onSuccess();
  }

  return (
    <div className="bg-mesh flex min-h-dvh items-center justify-center px-4 py-10">
      <Panel className="w-full max-w-md animate-fade-up">
        <Link href="/" className="font-display text-3xl text-ink">
          EPCAS Logistique
        </Link>
        <p className="mt-2 text-sm text-ink-muted">
          Connexion apprentis & formateurs — EPCA Sion
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <TextField
            label="Email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error ? <Alert tone="danger">{error}</Alert> : null}
          <Button type="submit" className="w-full" size="lg">
            Connexion
          </Button>
        </form>

        <div className="mt-6 space-y-2 rounded-[var(--radius-md)] bg-surface-muted p-3 text-xs text-ink-muted">
          <p className="font-medium text-ink">Comptes démo</p>
          <p>CFC : apprenti@epcas.ch / {demoPassword}</p>
          <p>AFP : afp@epcas.ch / {demoPassword}</p>
          <p>Formateur : formateur@epcas.ch / {demoPassword}</p>
          <p>Admin : admin@epcas.ch / {demoPassword}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Link href="/connexion?demo=apprenti">
              <Button size="sm" variant="secondary">
                Remplir CFC
              </Button>
            </Link>
            <Link href="/connexion?demo=afp">
              <Button size="sm" variant="secondary">
                Remplir AFP
              </Button>
            </Link>
            <Link href="/connexion?demo=formateur">
              <Button size="sm" variant="secondary">
                Remplir formateur
              </Button>
            </Link>
            <Link href="/connexion?demo=admin">
              <Button size="sm" variant="secondary">
                Remplir admin
              </Button>
            </Link>
          </div>
        </div>
      </Panel>
    </div>
  );
}
