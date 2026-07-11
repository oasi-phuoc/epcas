"use client";

import { FormEvent, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  TextField,
} from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function ComptesPage() {
  const {
    currentUser,
    state,
    upsertUser,
    setUserActive,
    demoPassword,
  } = useAppStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(demoPassword);
  const [message, setMessage] = useState<string | null>(null);

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  const apprentices = state.users.filter((u) => u.role === "apprentice");

  function onCreate(e: FormEvent) {
    e.preventDefault();
    if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      setMessage("Cet email existe déjà.");
      return;
    }
    upsertUser({
      email,
      password,
      displayName: name,
      role: "apprentice",
      classId: state.classRoom.id,
      active: true,
    });
    setName("");
    setEmail("");
    setPassword(demoPassword);
    setMessage("Compte apprenti créé.");
  }

  return (
    <div>
      <PageHeader
        title="Comptes apprentis"
        description="Créez et activez/désactivez les comptes de votre classe."
      />

      <Panel className="mb-4">
        <h2 className="font-display text-xl">Nouvel apprenti</h2>
        <form onSubmit={onCreate} className="mt-4 grid gap-3 sm:grid-cols-2">
          <TextField
            label="Nom affiché"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Mot de passe initial"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-end">
            <Button type="submit" className="w-full sm:w-auto">
              Créer le compte
            </Button>
          </div>
        </form>
        {message ? (
          <div className="mt-3">
            <Alert tone="success">{message}</Alert>
          </div>
        ) : null}
      </Panel>

      <div className="space-y-3">
        {apprentices.map((a) => (
          <Panel key={a.id} className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-medium text-ink">{a.displayName}</p>
              <p className="text-sm text-ink-muted">{a.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge tone={a.active ? "success" : "danger"}>
                {a.active ? "Actif" : "Inactif"}
              </Badge>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setUserActive(a.id, !a.active)}
              >
                {a.active ? "Désactiver" : "Réactiver"}
              </Button>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
