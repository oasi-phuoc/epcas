import { NextResponse } from "next/server";
import { getLessonPackById } from "@/lib/offline/manifest-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const decoded = decodeURIComponent(id);
  const pack = getLessonPackById(decoded);
  if (!pack) {
    return NextResponse.json({ error: "Leçon introuvable" }, { status: 404 });
  }
  return NextResponse.json(pack, {
    headers: {
      "Cache-Control": "public, max-age=60",
      ETag: `"${pack.hash}"`,
    },
  });
}
