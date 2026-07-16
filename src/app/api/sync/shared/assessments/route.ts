import { NextResponse } from "next/server";
import { loadSharedAssessments } from "@/lib/sync/shared-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await loadSharedAssessments();
  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}
