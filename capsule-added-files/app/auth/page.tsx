"use client";
import { createClient } from "@supabase/supabase-js";

export default function AuthPage() {
  const go = async () => {
    const s = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
    await s.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${base}/auth/callback` }
    });
  };
  return (
    <main style={{ padding: 32 }}>
      <button onClick={go} style={{ padding: "10px 14px", border: "1px solid #000" }}>
        Continue with Google
      </button>
    </main>
  );
}