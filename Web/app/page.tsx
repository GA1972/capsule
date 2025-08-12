"use client";

import { supabaseBrowser } from "./lib/supabase";

export default function AuthPage() {
  const go = async () => {
    const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
    await supabaseBrowser.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${base}/auth/callback` },
    });
  };

  return (
    <main style={{ padding: 32 }}>
      <h2>Sign in</h2>
      <button onClick={go} style={{ padding: "10px 14px", border: "1px solid #000" }}>
        Continue with Google
      </button>
    </main>
  );
}
