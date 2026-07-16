import { NextResponse } from "next/server";
import { publishInformatiqueExercisesListToCloud } from "@/lib/sync/shared-content";
import type { InformatiqueExercise } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  let body: { exercises?: InformatiqueExercise[] };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (!Array.isArray(body.exercises)) {
    return NextResponse.json(
      { ok: false, error: "exercises requis" },
      { status: 400 },
    );
  }

  const result = await publishInformatiqueExercisesListToCloud(body.exercises);
  if (!result.configured) {
    return NextResponse.json(
      { ok: false, configured: false, error: result.error },
      { status: 503 },
    );
  }
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, configured: true, error: result.error },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    revision: result.revision,
  });
}
