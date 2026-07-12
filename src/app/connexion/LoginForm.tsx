"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Alert, Button, Panel, TextField } from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function LoginForm() {
  const { login, currentUser, hydrated } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (hydrated && currentUser) router.replace("/accueil");
  }, [hydrated, currentUser, router]);

  return (
    <LoginFields
      onLogin={login}
      onSuccess={() => router.replace("/accueil")}
    />
  );
}

function LoginFields({
  onLogin,
  onSuccess,
}: {
  onLogin: (
    email: string,
    password: string,
  ) => { ok: boolean; error?: string };
  onSuccess: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      </Panel>
    </div>
  );
}
