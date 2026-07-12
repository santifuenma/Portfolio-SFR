import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Cuerpo de la petición inválido." }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, unknown>;

  // Campo honeypot: si un bot lo rellena, respondemos como si hubiera ido bien
  // y no escribimos nada en la base de datos.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    message.trim().length < 10 ||
    !EMAIL_RE.test(email.trim())
  ) {
    return NextResponse.json({ error: "Revisa los datos del formulario." }, { status: 422 });
  }

  if (name.length > 200 || email.length > 200 || message.length > 4000) {
    return NextResponse.json({ error: "El contenido es demasiado largo." }, { status: 422 });
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });

  if (error) {
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
