# Portfolio — Santiago Fuenmayor Ruiz

Portfolio personal construido con Next.js 16 (App Router), React 19, TypeScript
y Tailwind CSS v4. El formulario de contacto guarda los mensajes en Supabase.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Sin las variables de entorno de Supabase, el sitio funciona con normalidad
pero el formulario de contacto mostrará un error al enviarse. Configúralas
como se explica abajo para activarlo.

## Configurar Supabase (formulario de contacto)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En el **SQL Editor** del proyecto, ejecuta el contenido de
   [`supabase/schema.sql`](./supabase/schema.sql). Esto crea la tabla
   `contact_messages` con RLS activado y una política que solo permite
   insertar (nunca leer) mensajes desde el cliente.
3. En **Project Settings → API**, copia la `Project URL` y la clave
   `anon public`.
4. Copia `.env.example` a `.env.local` y rellena:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```

5. Reinicia `npm run dev`. Los mensajes enviados desde el formulario
   aparecerán en **Table Editor → contact_messages** dentro de Supabase.

## Desplegar en Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. En **Environment Variables**, añade `NEXT_PUBLIC_SUPABASE_URL` y
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` con los mismos valores que en
   `.env.local`.
4. Despliega. Cada push a la rama principal vuelve a desplegar
   automáticamente.

## Añadir el build jugable de un videojuego

Los juegos se listan en [`src/data/games.ts`](./src/data/games.ts). Para que
un juego se muestre jugable dentro del sitio (en vez de la tarjeta "próximamente"):

1. Sube el build WebGL a un host que permita incrustarlo en un `iframe`
   (por ejemplo, un juego publicado en itch.io con la opción
   "This file will be played in the browser" y embed habilitado).
2. Añade `embedUrl` (la URL del iframe) y opcionalmente `playUrl` (enlace a
   la página del juego) a la entrada correspondiente en `games.ts`.

## Actualizar proyectos

Los proyectos mostrados viven en [`src/data/projects.ts`](./src/data/projects.ts)
como datos estáticos — añade o edita entradas ahí y vuelve a desplegar.
