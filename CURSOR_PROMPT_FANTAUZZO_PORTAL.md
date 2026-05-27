# CURSOR_PROMPT — FANTAUZZO PORTAL
# Da incollare nella chat di Cursor all'apertura del progetto fantauzzo-portal

---

Sei l'agente di sviluppo per il progetto **fantauzzo-portal**.

Leggi integralmente il file `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/ClaudesBrain/FANTAUZZO_PORTAL.md` prima di fare qualsiasi cosa. Quel file è la tua unica fonte di verità per questo progetto: stack, schema DB, RLS policies, struttura app, flussi UX, API routes, regole e piano di implementazione.

## Il tuo compito adesso

Esegui la **FASE 1 — Setup infrastruttura** descritta nella Sezione 9 del file .md:

1. Crea il progetto Next.js 15 con App Router e TypeScript nella cartella corrente:
   ```
   npx create-next-app@latest . --typescript --tailwind --app --src-dir false --import-alias "@/*" --no-git
   ```

2. Installa tutte le dipendenze:
   ```
   npm install @supabase/supabase-js @supabase/ssr @aws-sdk/client-s3 @aws-sdk/s3-request-presigner react-dropzone lucide-react
   ```

3. Configura Tailwind CSS 4 con le custom properties della palette (vedi Sezione 1 del .md — MAI valori hex diretti nel JSX)

4. Crea `lib/supabase/client.ts` con `createBrowserClient` da `@supabase/ssr`

5. Crea `lib/supabase/server.ts` con `createServerClient` da `@supabase/ssr` (con gestione cookie per Server Components e Route Handlers)

6. Crea `lib/r2.ts` con:
   - `S3Client` configurato per Cloudflare R2
   - Helper `getSignedDownloadUrl(storagePath: string): Promise<string>` che genera signed URL con scadenza 300 secondi

7. Crea `middleware.ts` nella root con Supabase Auth middleware per proteggere tutte le route sotto `(studio)` e `(portal)`

8. Crea `.env.local` con tutte le variabili della Sezione 7 (valori placeholder — da compilare con i dati reali prima di testare)

9. Crea `.cursorrules` nella root con il contenuto della Sezione 8 del .md

10. Crea la struttura cartelle vuota (con file placeholder) come descritto nella Sezione 4

## Regole operative che devi seguire sempre in questo progetto

- Sicurezza: verifica ruolo server-side in OGNI API route — mai fidarsi del client
- R2: upload e download SOLO via API routes server-side — MAI credenziali R2 al browser
- Signed URL: scadenza SEMPRE 300 secondi — MAI permanenti
- Signed URL: dopo ogni download → inserire record in `download_logs`
- Supabase service_role key: SOLO in variabili server, MAI in `NEXT_PUBLIC_*`
- RLS: non bypassare mai con service_role nel frontend
- Palette: variabili CSS obbligatorie — mai hex diretti nel JSX
- TypeScript strict: mai `any`
- Route groups `(studio)` e `(portal)`: separazione netta — mai mescolare logica
- **REGOLA DEPLOY OBBLIGATORIA**: al termine di ogni fase, PRIMA di chiedere conferma per procedere, esegui sempre:
  ```bash
  git add .
  git commit -m "feat: fase X - descrizione"
  git push origin main
  ```
  Aspetta che Vercel completi il deploy automatico, poi comunica l'URL aggiornato e chiedi conferma per procedere alla fase successiva.

## Nota importante sulla sequenza

Questo progetto si sviluppa DOPO il sito (fantauzzo-website). Il portale viene avviato solo dopo che il sito è stato approvato da Fantauzzo e il contratto ALV-2026-006 è stato firmato.

Inizia dalla Fase 1. Quando hai finito mostrami la struttura file creata e il contenuto dei file lib/supabase/client.ts, lib/supabase/server.ts e lib/r2.ts.
