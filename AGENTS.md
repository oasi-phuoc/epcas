<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

EPCAS Logistique is a single Next.js 16 / React 19 PWA (App Router, TypeScript, Tailwind v4). Node 20+ is required; the VM's default Node 22 works.

- Run the app (dev): `npm run dev` → http://localhost:3000. Lint: `npm run lint`. Build/serve: `npm run build` / `npm run start`. See `package.json` scripts.
- The app runs fully in a self-contained **demo mode** using browser `localStorage` when no Supabase env vars are set (`src/lib/supabase/client.ts`/`server.ts` return `null` if the URL/key are absent). No external service is required to run or test end-to-end. Supabase (hosted, EU region) is optional; copy `.env.example` → `.env.local` only to enable real persistence/auth.
- Demo accounts (localStorage mode, listed on `/connexion`): `apprenti@epcas.ch`, `afp@epcas.ch`, `formateur@epcas.ch`, `admin@epcas.ch` — all password `epcas2026`. The login page has "Remplir …" buttons to auto-fill.
- Content note: exercise/lesson bodies are placeholders ("contenu OneNote à importer"), but progress tracking is live — e.g. clicking "Marquer comme lu" on a lesson increments the completion counters shown on `/theorie` and `/accueil`.

### Service worker gotcha (important)
`public/sw.js` is a **cache-first** PWA service worker for `/_next/` assets and the app shell, and its `activate` handler does not purge the shell cache. In development this means: after a `.next` rebuild or dev-server restart, the SW serves a stale shell whose chunks/build-ID no longer match the server, and the app hangs on a `Chargement…` screen (`AuthGate`/login `Suspense` fallback). This is NOT an app-logic bug.
- Do not `rm -rf .next` while the dev server is running.
- If the browser is stuck on `Chargement…`: open DevTools → Application → Service Workers, check **"Bypass for network"** (keep DevTools open) and click **Unregister**, then clear Cache Storage (or use "Clear site data") and reload. Clearing only `localStorage` is not enough — you must also unregister the SW and clear Cache Storage.
