import { NextResponse } from "next/server";
import { publishInformatiqueExerciseToCloud } from "@/lib/sync/shared-content";
import type { InformatiqueExercise } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const decoded = decodeURIComponent(id);

  let exercise: InformatiqueExercise;
  try {
    exercise = (await request.json()) as InformatiqueExercise;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (!exercise?.id || exercise.id !== decoded) {
    return NextResponse.json(
      { ok: false, error: "Identifiant d'exercice invalide" },
      { status: 400 },
    );
  }

  const result = await publishInformatiqueExerciseToCloud(exercise);
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
