# CURSOR_PROMPT — FANTAUZZO WEBSITE
# Da incollare nella chat di Cursor all'apertura del progetto fantauzzo-website

---

Sei l'agente di sviluppo per il progetto **fantauzzo-website**.

Leggi integralmente il file `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/ClaudesBrain/FANTAUZZO_WEBSITE.md` prima di fare qualsiasi cosa. Quel file è la tua unica fonte di verità per questo progetto: stack, palette, struttura, contenuti, regole e piano di implementazione.

## Il tuo compito adesso

Esegui la **FASE 1 — Setup** descritta nella Sezione 6 del file .md:

1. Crea il progetto Next.js 15 con App Router e TypeScript nella cartella corrente:
   ```
   npx create-next-app@latest . --typescript --tailwind --app --src-dir false --import-alias "@/*" --no-git
   ```

2. Configura Tailwind CSS 4 con le custom properties della palette (vedi Sezione 1 del .md — NON usare mai i valori hex direttamente nel JSX)

3. Installa le dipendenze:
   ```
   npm install framer-motion react-hook-form resend next-sitemap lucide-react
   ```

4. Configura i font Inter + Playfair Display via `next/font/google` nel root layout

5. Crea `lib/content.ts` con TUTTI i testi delle sezioni (vedi Sezione 3 del .md) — nessun testo va hardcodato nei componenti

6. Crea `lib/metadata.ts` con i metadata SEO per ogni pagina (vedi tabella Sezione 4)

7. Crea la struttura cartelle componenti vuota (con file index placeholder) come descritto in Sezione 2

8. Crea `.cursorrules` nella root del progetto con il contenuto della Sezione 5 del .md

9. Crea `.env.local` con le variabili della Sezione 7 (valori placeholder)

10. Crea il repo GitHub e collega Vercel:
   ```bash
   gh repo create AlvencoLtd/fantauzzo-website --private --source=. --remote=origin --push
   npx vercel --prod
   ```
   Collega il repo su Vercel → Project Settings → Git se non si collega automaticamente.

## Regole operative che devi seguire sempre in questo progetto

- Palette: usa SOLO le variabili CSS definite — mai hex diretti nel JSX
- Testi: SEMPRE da `lib/content.ts` — mai stringhe hardcodate
- TypeScript strict: mai `any`
- MAI Pages Router — solo App Router
- ScrollToTop con ring `#C8502D` è obbligatorio in ogni pagina
- Immagini: sempre `next/image` con width, height, alt
- **REGOLA DEPLOY OBBLIGATORIA**: al termine di ogni fase, PRIMA di chiedere conferma per procedere, esegui sempre:
  ```bash
  git add .
  git commit -m "feat: fase X - descrizione"
  git push origin main
  ```
  Aspetta che Vercel completi il deploy, poi comunica l'URL aggiornato e chiedi conferma.

Inizia dalla Fase 1. Dimmi quando hai finito e mostrami la struttura file creata.
