import { createClient } from "@supabase/supabase-js";

let _supabaseBrowser: any = null;
let _supabaseServer: any = null;

export const supabaseBrowser = (() => {
  if (!_supabaseBrowser && typeof window !== 'undefined') {
    _supabaseBrowser = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _supabaseBrowser;
})();

export const supabaseServer = (() => {
  if (!_supabaseServer && process.env.NEXT_PUBLIC_SUPABASE_URL) {
    _supabaseServer = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );
  }
  return _supabaseServer;
})();
