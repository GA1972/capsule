"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Complete the OAuth flow and save the session in the browser
      const { error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
      if (error) {
        setErr(error.message);
        return;
      }
      router.replace("/"); // go home
    };
    run();
  }, [router]);

  return (
    <main style={{ padding: 32 }}>
      <h2>Finishing sign-in…</h2>
      {err && <p style={{ color: "crimson" }}>We couldn't complete sign-in: {err}</p>}
    </main>
  );
}
