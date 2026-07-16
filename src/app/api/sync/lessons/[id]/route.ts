import { NextResponse } from "next/server";
import { publishLessonToCloud } from "@/lib/sync/published-lessons";
import { invalidateContentManifestCache } from "@/lib/offline/manifest-server";
import type { Lesson } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const decoded = decodeURIComponent(id);

  let lesson: Lesson;
  try {
    lesson = (await request.json()) as Lesson;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (!lesson?.id || lesson.id !== decoded) {
    return NextResponse.json(
      { ok: false, error: "Identifiant de leçon invalide" },
      { status: 400 },
    );
  }

  const result = await publishLessonToCloud(lesson);
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

  invalidateContentManifestCache();

  return NextResponse.json({
    ok: true,
    configured: true,
    revision: result.revision,
  });
}
