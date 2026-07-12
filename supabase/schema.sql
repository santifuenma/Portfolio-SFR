-- Ejecuta esto en el SQL Editor de tu proyecto Supabase (Supabase Dashboard > SQL Editor).

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Cualquiera puede insertar un mensaje (es el formulario público de contacto).
-- Nadie puede leer, actualizar ni borrar desde el cliente: solo tú, desde el
-- dashboard de Supabase (que usa la service role y evita RLS).
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon
  with check (true);
