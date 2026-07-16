import { NextResponse } from "next/server";
import { loadMergedInformatiqueExercises } from "@/lib/sync/shared-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const exercises = await loadMergedInformatiqueExercises();
  return NextResponse.json(
    { exercises },
    { headers: { "Cache-Control": "no-store" } },
  );
}
