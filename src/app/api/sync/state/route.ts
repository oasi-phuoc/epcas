import { NextResponse } from "next/server";
import { createServiceClient, isSupabaseConfigured } from "@/lib/supabase/service";
import { APP_STATE_SYNC_ID } from "@/lib/sync/types";
import type { AppState } from "@/lib/types";

export const runtime = "nodejs";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { ok: false, configured: false, error: "Supabase non configuré" },
      { status: 503 },
    );
  }

  const supabase = createServiceClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, configured: false, error: "Client Supabase indisponible" },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("sync_app_state")
    .select("id, payload, revision, updated_at")
    .eq("id", APP_STATE_SYNC_ID)
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { ok: false, configured: true, error: error.message },
      { status: 500 },
    );
  }

  if (!data || !data.payload || Object.keys(data.payload as object).length === 0) {
    return NextResponse.json({
      ok: true,
      configured: true,
      empty: true,
      revision: data?.revision ?? 0,
      updatedAt: data?.updated_at ?? null,
      payload: null,
    });
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    empty: false,
    revision: data.revision,
    updatedAt: data.updated_at,
    payload: data.payload as AppState,
  });
}

export async function PUT(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { ok: false, configured: false, error: "Supabase non configuré" },
      { status: 503 },
    );
  }

  const supabase = createServiceClient();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, configured: false, error: "Client Supabase indisponible" },
      { status: 503 },
    );
  }

  let body: { payload?: AppState; baseRevision?: number };
  try {
    body = (await request.json()) as { payload?: AppState; baseRevision?: number };
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide" }, { status: 400 });
  }

  if (!body.payload || typeof body.payload !== "object") {
    return NextResponse.json({ ok: false, error: "payload manquant" }, { status: 400 });
  }

  const payload: AppState = {
    ...body.payload,
    currentUserId: null,
  };

  const { data: current } = await supabase
    .from("sync_app_state")
    .select("revision")
    .eq("id", APP_STATE_SYNC_ID)
    .maybeSingle();

  const nextRevision = (current?.revision ?? 0) + 1;
  const updatedAt = new Date().toISOString();

  const { data, error } = await supabase
    .from("sync_app_state")
    .upsert(
      {
        id: APP_STATE_SYNC_ID,
        payload,
        revision: nextRevision,
        updated_at: updatedAt,
      },
      { onConflict: "id" },
    )
    .select("revision, updated_at")
    .single();

  if (error) {
    return NextResponse.json(
      { ok: false, configured: true, error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    revision: data.revision,
    updatedAt: data.updated_at,
  });
}
