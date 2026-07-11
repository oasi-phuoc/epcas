"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ClipboardCheck,
  Home,
  LogOut,
  PencilLine,
  UserRound,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui";

const apprenticeLinks = [
  { href: "/accueil", label: "Accueil", icon: Home },
  { href: "/theorie", label: "Théorie", icon: BookOpen },
  { href: "/exercices", label: "Exercices", icon: PencilLine },
  { href: "/blancs", label: "Blancs", icon: ClipboardCheck },
  { href: "/profil", label: "Profil", icon: UserRound },
];

const trainerLinks = [
  { href: "/accueil", label: "Accueil", icon: Home },
  { href: "/formateur", label: "Suivi", icon: Users },
  { href: "/formateur/contenu", label: "Contenu", icon: BookOpen },
  { href: "/formateur/comptes", label: "Comptes", icon: UserRound },
  { href: "/profil", label: "Profil", icon: UserRound },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentUser, logout, state } = useAppStore();
  const links =
    currentUser?.role === "trainer" ? trainerLinks : apprenticeLinks;

  return (
    <div className="min-h-dvh lg:flex">
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[var(--sidebar-w)] lg:flex-col lg:border-r lg:border-border lg:bg-surface/80 lg:backdrop-blur-md">
        <div className="border-b border-border px-5 py-5">
          <p className="font-display text-2xl text-ink">EPCAS</p>
          <p className="text-sm text-ink-muted">Logistique</p>
          <p className="mt-3 text-xs text-ink-subtle">{state.classRoom.name}</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-3">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/accueil" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "bg-primary-soft text-primary-strong"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-4">
          <p className="mb-2 truncate text-sm font-medium text-ink">
            {currentUser?.displayName}
          </p>
          <Button variant="ghost" size="sm" className="w-full" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </aside>

      <div className="flex min-h-dvh flex-1 flex-col lg:pl-[var(--sidebar-w)]">
        <header className="sticky top-0 z-20 flex h-[var(--header-h)] items-center justify-between border-b border-border bg-surface/75 px-4 backdrop-blur-md lg:hidden">
          <div>
            <p className="font-display text-xl leading-none">EPCAS</p>
            <p className="text-xs text-ink-muted">Logistique</p>
          </div>
          <p className="max-w-[45%] truncate text-xs text-ink-subtle">
            {currentUser?.displayName}
          </p>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 pb-[calc(var(--bottom-nav-h)+1.5rem)] lg:px-8 lg:pb-10">
          {children}
        </main>

        <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/90 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid max-w-lg grid-cols-5 gap-1 px-2 py-2">
            {links.slice(0, 5).map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href ||
                (href !== "/accueil" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-[var(--radius-sm)] px-1 text-[10px] font-medium",
                      active ? "text-primary-strong" : "text-ink-subtle",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
