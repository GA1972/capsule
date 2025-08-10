// Web/app/auth/page.tsx
"use client";

import { createClient } from "@supabase/supabase-js";

export default function AuthPage() {
  const go = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const base = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;

    // Get the Google OAuth URL *without* auto-redirect, then navigate manually:
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${base}/auth/callback`,
        skipBrowserRedirect: true,       // important
        queryParams: { prompt: "select_account" }, // helpful when multiple accounts
      },
    });

    if (error) {
      alert(`Sign-in failed: ${error.message}`);
      return;
    }
    if (data?.url) window.location.href = data.url; // manual redirect
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
