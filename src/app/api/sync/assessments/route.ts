import { NextResponse } from "next/server";
import { publishAssessmentsToCloud } from "@/lib/sync/shared-content";
import type { Assessment, AssessmentQuestion } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  let body: {
    assessments?: Assessment[];
    assessmentQuestions?: AssessmentQuestion[];
  };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (!Array.isArray(body.assessments) || !Array.isArray(body.assessmentQuestions)) {
    return NextResponse.json(
      { ok: false, error: "assessments et assessmentQuestions requis" },
      { status: 400 },
    );
  }

  const result = await publishAssessmentsToCloud(
    body.assessments,
    body.assessmentQuestions,
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
