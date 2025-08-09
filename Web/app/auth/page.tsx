"use client";
import { supabase } from "../lib/supabase-browser";

export default function AuthPage() {
  const signIn = async () => {
    const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${base}/auth/callback` },
    });
  };

  return (
    <main style={{ padding: 32 }}>
      <h2>Sign in</h2>
      <button onClick={signIn} style={{ padding: "10px 14px", border: "1px solid #000" }}>
        Continue with Google
      </button>
    </main>
  );
}
