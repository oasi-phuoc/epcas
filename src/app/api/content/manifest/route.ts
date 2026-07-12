import { NextResponse } from "next/server";
import { buildContentManifest } from "@/lib/offline/manifest-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const manifest = buildContentManifest();
  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
