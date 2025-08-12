"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      // Complete the OAuth flow - modern Supabase handles this automatically
      const { data, error } = await supabaseBrowser.auth.getSession();
      if (error) {
        setErr(error.message);
        return;
      }
      
      if (data.session) {
        router.replace("/"); // go home
      } else {
        setErr("No session found after OAuth callback");
      }
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
