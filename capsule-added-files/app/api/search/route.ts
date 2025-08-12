import { NextResponse } from "next/server";
import { supabaseServer } from "../../../Web/app/lib/supabase";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") || "").trim();
  if (!q) return NextResponse.json({ results: [] });

  const [meetings, transcripts, actions] = await Promise.all([
    supabaseServer.from("meetings").select("id, title, created_at").textSearch("search_tsv", q, { type: "plain" }).order("created_at", { ascending: false }).limit(10),
    supabaseServer.from("transcripts").select("meeting_id, content, created_at").textSearch("search_tsv", q, { type: "plain" }).order("created_at", { ascending: false }).limit(10),
    supabaseServer.from("actions").select("meeting_id, text, owner, created_at").textSearch("search_tsv", q, { type: "plain" }).order("created_at", { ascending: false }).limit(10)
  ]);

  const results = [
    ...(meetings.data || []).map(m => ({ type: "meeting", id: m.id, text: m.title })),
    ...(transcripts.data || []).map(t => ({ type: "transcript", id: t.meeting_id, text: (t as any).content?.slice(0, 160) })),
    ...(actions.data || []).map(a => ({ type: "action", id: a.meeting_id, text: a.text, owner: a.owner }))
  ];

  return NextResponse.json({ results, error: meetings.error || transcripts.error || actions.error });
}
