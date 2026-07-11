import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center text-ink-muted">
          Chargement…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
