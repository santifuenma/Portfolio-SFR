import { createClient } from "@supabase/supabase-js";

export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Faltan las variables de entorno de Supabase.");
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
