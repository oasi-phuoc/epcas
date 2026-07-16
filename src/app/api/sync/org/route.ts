import { NextResponse } from "next/server";
import { publishOrgToCloud } from "@/lib/sync/shared-content";
import type { ClassRoom, LearningSequence, UserAccount } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  let body: {
    classes?: ClassRoom[];
    users?: UserAccount[];
    sequences?: LearningSequence[];
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (
    !Array.isArray(body.classes) ||
    !Array.isArray(body.users) ||
    !Array.isArray(body.sequences)
  ) {
    return NextResponse.json(
      { ok: false, error: "classes, users et sequences requis" },
      { status: 400 },
    );
  }

  const result = await publishOrgToCloud(
    body.classes,
    body.users,
    body.sequences,
  );
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
