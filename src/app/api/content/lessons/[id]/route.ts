import { NextResponse } from "next/server";
import { buildLessonPack } from "@/lib/offline/manifest-server";
import { getMergedLessonById } from "@/lib/sync/published-lessons";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const decoded = decodeURIComponent(id);
  const lesson = await getMergedLessonById(decoded);
  if (!lesson) {
    return NextResponse.json({ error: "Leçon introuvable" }, { status: 404 });
  }
  const pack = buildLessonPack(lesson);
  return NextResponse.json(pack, {
    headers: {
      "Cache-Control": "no-store",
      ETag: `"${pack.hash}"`,
    },
  });
}
