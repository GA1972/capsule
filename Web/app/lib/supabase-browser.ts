"use client";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,      // safe, public
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // safe, public with RLS
);
