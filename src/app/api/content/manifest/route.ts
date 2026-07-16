import { NextResponse } from "next/server";
import { buildContentManifestAsync } from "@/lib/offline/manifest-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const manifest = await buildContentManifestAsync();
  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
