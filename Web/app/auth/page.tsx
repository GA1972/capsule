// Web/app/auth/page.tsx
"use client";

import { supabaseBrowser } from "../lib/supabase";

export default function AuthPage() {
  const go = async () => {
    // Where Google should send the user back after login
    const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;

    await supabaseBrowser.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${base}/auth/callback` },
    });
  };

  return (
    <main style={{ padding: 32, maxWidth: 720, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 16 }}>Sign in</h2>
      <button onClick={go} style={{ padding: "10px 14px", border: "1px solid #000" }}>
        Continue with Google
      </button>
    </main>
  );
}
