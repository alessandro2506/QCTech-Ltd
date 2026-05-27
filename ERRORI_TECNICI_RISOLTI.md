# ALVENCO – Errori Tecnici Risolti & Lezioni Apprese
> Knowledge base permanente. Aggiornare immediatamente dopo ogni bug risolto.
> Scopo: impedire che lo stesso errore si ripeta in sessioni future o in prompt Cursor.

---

## REGOLA GENERALE

Ogni errore documentato qui deve essere:
1. **Citato esplicitamente** nei prompt Cursor come "errore noto da evitare"
2. **Verificato preventivamente** da Claude prima di generare codice nella categoria interessata
3. **Aggiornato** con data e progetto di origine per tracciabilità

---

## CATEGORIA: Next.js / App Router

### ❌ ERR-001 — `generateMetadata` senza `params` in route dinamica
**Progetto**: almahotel-site | **Data**: 2026-05-13
**Errore**:
```
ReferenceError: locale is not defined
at Module.generateMetadata
```
**Causa**: `generateMetadata()` usava la variabile `locale` nel body senza riceverla come argomento. In Next.js 15 App Router, i `params` delle route dinamiche (`[locale]`, `[slug]`, ecc.) devono essere passati esplicitamente alla funzione e risolti con `await`.

**Errato**:
```ts
export async function generateMetadata(): Promise<Metadata> {
  return { alternates: { canonical: `https://example.com/${locale}` } } // locale undefined!
}
```
**Corretto**:
```ts
export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params  // Next.js 15: params è una Promise
  return { alternates: { canonical: `https://example.com/${locale}` } }
}
```
**Regola**: In Next.js 15, `params` in `generateMetadata`, `generateStaticParams` e nei Page component è sempre una `Promise` — usare sempre `await params`.

---

### ❌ ERR-002 — Versione Next.js inesistente installata da Cursor
**Progetto**: almahotel-site | **Data**: 2026-05-13
**Errore**:
```
Error: Cannot find module '../server/require-hook'
```
**Causa**: Cursor ha inserito `"next": "16.2.6"` nel `package.json`. Next.js 16 non esiste — l'ultima versione stabile è la 15.x. npm ha installato un pacchetto corrotto/inesistente.

**Fix**:
```bash
# 1. Correggere package.json manualmente
"next": "15.3.2"
"eslint-config-next": "15.3.2"

# 2. Reinstallare da zero
rm -rf node_modules package-lock.json && npm install
```
**Regola**: Prima di accettare qualsiasi `package.json` generato da Cursor, verificare che le versioni dei pacchetti esistano realmente su npmjs.com. Next.js latest stabile = 15.x (maggio 2026). React latest = 19.x.

---

### ❌ ERR-003 — `dangerouslyAllowSVG` mancante per immagini placeholder SVG
**Progetto**: almahotel-site | **Data**: 2026-05-13
**Errore**:
```
The requested resource "https://placehold.co/..." has type "image/svg+xml"
but dangerouslyAllowSVG is disabled
```
**Causa**: `placehold.co` restituisce SVG. Next.js blocca SVG remoti per default via `next/image`.

**Fix in `next.config.ts`**:
```ts
images: {
  remotePatterns: [{ protocol: 'https', hostname: 'placehold.co' }],
  dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
}
```
**Regola**: Ogni volta che si usano placeholder da `placehold.co` (o qualsiasi host che serve SVG), aggiungere sempre `dangerouslyAllowSVG: true` con la CSP restrittiva in `next.config.ts`.

---

## CATEGORIA: Librerie / Pacchetti

### ❌ ERR-004 — Icone inesistenti in `lucide-react` v1
**Progetto**: almahotel-site | **Data**: 2026-05-13
**Errore**:
```
Attempted import error: 'Facebook' is not exported from 'lucide-react'
Attempted import error: 'Instagram' is not exported from 'lucide-react'
```
**Causa**: `lucide-react` v1.x non include icone di brand (Facebook, Instagram, Twitter/X, TripAdvisor, LinkedIn, ecc.). Cursor le ha importate come se esistessero.

**Regola**: `lucide-react` contiene SOLO icone UI generiche — mai icone di brand social. Per icone social usare sempre **SVG inline** con i path ufficiali dei brand.

**Pattern corretto per social icons**:
```tsx
// Facebook
<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>

// Instagram
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
</svg>
```

---

## CATEGORIA: Firebase / Supabase (esistenti — non rimuovere)

### ❌ ERR-005 — Firebase Anonymous Auth non abilitato
Firebase Anonymous Auth deve essere abilitato in Console + `browserLocalPersistence` impostato prima di `signInAnonymously`.

### ❌ ERR-006 — Firestore Security Rules deploy mancante
Deploy immediato dopo creazione progetto. Tutte le regole dentro `match /databases/{database}/documents {}`.

### ❌ ERR-007 — `FIREBASE_ADMIN_PRIVATE_KEY` su Vercel
Incollare con virgolette. Strip nel codice: `.replace(/^"|"$/g, '').replace(/\\n/g, '\n')`.

### ❌ ERR-008 — DeepL API auth deprecata
Da novembre 2025: solo header-based auth. Header: `Authorization: DeepL-Auth-Key ${key}`. Mai query param.

### ❌ ERR-009 — Firestore category fields case-sensitive
Valori capitalizzati (`"Antipasti"` non `"antipasti"`). Usare confronto case-insensitive o normalizzare in fase di scrittura.

### ❌ ERR-010 — Sapori Perduti: doppio salvataggio translations
Salvare sempre sia `translations` che `nameTranslated` ad ogni write. Il sito pubblico legge `nameTranslated`.

### ❌ ERR-011 — Root `src/app/page.tsx` mancante
Creare sempre con redirect al locale default. Senza questo, `/` restituisce 404.

### ❌ ERR-012 — Firestore: indici compositi mancanti
Creare immediatamente per ogni `orderBy` su campi multipli. Mancanza causa errore runtime silenzioso.

---

## CATEGORIA: EAS / Expo

### ❌ ERR-013 — `eas.json` preview senza channel
`preview` profile deve includere `"channel": "preview"` altrimenti gli OTA update non raggiungono mai i build installati.

---

## CATEGORIA: SVG / Design

### ❌ ERR-014 — Logo counter-forms bianchi su sfondi scuri
Percorsi interni delle lettere (interno di A, e, o, d) con `fill="#ffffff"` appaiono come blob bianchi su sfondi scuri. Usare `fill="none"` per i counter-forms.

### ❌ ERR-015 — Logo placeholder SVG inline vs file reale
Quando Cursor genera un componente logo SVG testuale inline (es. `AlmaLogo.tsx` con testo hardcoded), va sostituito con `next/image` puntando ai file reali in `public/logo/` non appena disponibili. Il componente deve accettare `variant: 'light' | 'dark'` e caricare il file corrispondente.

---

## CATEGORIA: Next.js — SSR / Client Components

### ❌ ERR-017 — `generateMetadata` in pagina con `'use client'`
**Progetto**: almahotel-site | **Data**: 2026-05-14
**Errore** (Vercel build):
```
Error: You are attempting to export "generateMetadata" from a component marked
with "use client", which is disallowed.
```
**Causa**: Cursor ha aggiunto sia `'use client'` che `export async function generateMetadata()` nello stesso file pagina. In Next.js App Router sono mutualmente esclusive — Server Component per metadata, Client Component per interattività.

**Pattern obbligatorio**:
```tsx
// page.tsx → SERVER COMPONENT (niente 'use client')
export async function generateMetadata(): Promise<Metadata> { ... }
export default function Page() {
  return <MyClientForm />  // il form è 'use client' in file separato
}
```
**Regola**: MAI `'use client'` e `generateMetadata` nello stesso file. Le pagine con metadata devono essere Server Components. I form/componenti interattivi vanno in file Client Component separati e importati nella pagina.

---

### ❌ ERR-018 — ESLint flat config: import `eslint-config-next` senza estensione `.js`
**Progetto**: almahotel-site | **Data**: 2026-05-14
**Errore** (Vercel build):
```
ESLint: Cannot find module 'eslint-config-next/core-web-vitals'
Did you mean to import "eslint-config-next/core-web-vitals.js"?
```
**Causa**: In `eslint.config.mjs` (ESLint 9 flat config) il resolver ESM su Vercel richiede l'estensione `.js` esplicita negli import.

**Fix in `eslint.config.mjs`**:
```js
// Errato
import nextConfig from 'eslint-config-next/core-web-vitals'
// Corretto
import nextConfig from 'eslint-config-next/core-web-vitals.js'
```
**Regola**: In `eslint.config.mjs` usare sempre l'estensione `.js` completa per gli import di `eslint-config-next`. Eseguire `npm run lint` localmente prima di ogni push su GitHub/Vercel.

---

### ❌ ERR-019 — TypeScript: tipo incompatibile con `renderToBuffer` di `@react-pdf/renderer`
**Progetto**: almahotel-site | **Data**: 2026-05-14
**Errore** (Vercel build):
```
Type error: Argument of type 'FunctionComponentElement<CheckInPdfProps>' is not assignable
to parameter of type 'ReactElement<DocumentProps, ...>'.
Type 'CheckInPdfProps' has no properties in common with type 'DocumentProps'.
```
**Causa**: `renderToBuffer()` si aspetta un `ReactElement<DocumentProps>`. Il componente PDF aveva props custom non compatibili. Inoltre il componente mancava di `<Document>` come nodo radice.

**Fix — due parti obbligatorie**:

1. Il componente PDF DEVE avere `<Document>` come nodo radice:
```tsx
import { Document, Page, View, Text } from '@react-pdf/renderer'
export function CheckInPdf(props: CheckInPdfProps) {
  return (
    <Document>  {/* ← OBBLIGATORIO come nodo radice */}
      <Page size="A4">
        <View><Text>...</Text></View>
      </Page>
    </Document>
  )
}
```

2. Cast esplicito in `renderToBuffer`:
```ts
import { renderToBuffer, Document } from '@react-pdf/renderer'
const pdfBuffer = await renderToBuffer(
  createElement(CheckInPdf, { ...data }) as ReactElement<React.ComponentProps<typeof Document>>
)
```
**Regola**: Componenti PDF per `@react-pdf/renderer` DEVONO avere `<Document>` come nodo radice. Usare sempre il cast esplicito in `renderToBuffer`.

---

## CATEGORIA: Cursor Prompt Engineering

### ❌ ERR-016 — Cursor inventa versioni pacchetti inesistenti
Cursor tende ad allucinare versioni di pacchetti (es. `next: 16.2.6`, `lucide-react: 1.x` con icone brand). **Regola per tutti i CURSOR_PROMPT**: specificare sempre le versioni esatte dei pacchetti critici e aggiungere la sezione "Errori da evitare" con riferimento a questo file.

**Versioni di riferimento (maggio 2026)**:
```
next:                15.3.2
react:               19.x
typescript:          5.x
tailwindcss:         4.x
framer-motion:       11.x
next-intl:           3.x
lucide-react:        0.x  (NON v1 — v1 ha breaking changes sulle icone)
```

---

## CATEGORIA: Git — Pattern Repo Alvenco

### ✅ PATTERN-002 — Doppio remote: origin (personale) + alvenco (org)
**Regola PERMANENTE per tutti i nuovi progetti Alvenco.**

Ogni nuovo sito/progetto client usa SEMPRE questa struttura:
- **`origin`** → `github.com/alessandro2506/[repo-name]` — account personale, **repo primaria**, collegata a Vercel
- **`alvenco`** → `github.com/AlvencoLtd/[repo-name]` — org, archivio/mirror
- **Vercel** → collegato SOLO a `origin` (account personale) — Hobby plan compatibile
- **Push standard** → `git push origin main && git push alvenco main`

**Sequenza obbligatoria nei prompt Cursor:**
```bash
# STEP 1 — crea repo su github.com/new (account: alessandro2506)
git init && git add . && git commit -m "feat: initial [project]"
git remote add origin https://github.com/alessandro2506/[repo-name].git
git push -u origin main

# STEP 2 — crea repo su github.com/orgs/AlvencoLtd/repositories
git remote add alvenco https://github.com/AlvencoLtd/[repo-name].git
git push alvenco main
```

**MAI:**
- MAI creare solo la repo sull'org AlvencoLtd come origine primaria
- MAI usare GitHub Actions / PAT / secrets per il mirror — è manuale e basta
- MAI collegare Vercel alla repo org — solo alla repo personale `alessandro2506`

> Pattern consolidato su: Tuzzolino, handyman-stortford. Applicare a TUTTI i progetti futuri senza eccezioni.

---

## Changelog

| Data | Errore | Progetto |
|---|---|---|
| 2026-05-13 | ERR-001: generateMetadata senza params | almahotel-site |
| 2026-05-13 | ERR-002: Next.js versione inesistente (16.2.6) | almahotel-site |
| 2026-05-13 | ERR-003: dangerouslyAllowSVG mancante | almahotel-site |
| 2026-05-13 | ERR-004: icone brand in lucide-react v1 | almahotel-site |
| 2026-05-13 | ERR-015: logo SVG inline placeholder vs file reale | almahotel-site |
| 2026-05-13 | ERR-016: Cursor allucinazioni versioni pacchetti | almahotel-site |
| 2026-05-14 | ERR-017: `generateMetadata` + `use client` nello stesso file | almahotel-site |
| 2026-05-14 | ERR-018: ESLint flat config import senza `.js` su Vercel | almahotel-site |
| 2026-05-16 | PATTERN-002: doppio remote origin+alvenco, Vercel su repo personale | handyman-stortford |
| 2026-05-16 | ERR-022: `allowFullscreen` lowercase causa build error in JSX/TSX — usare `allowFullScreen` | handyman-stortford |

---

## CATEGORIA: Git

### ✅ PATTERN-001 — Rollback dell'ultimo commit
Per annullare l'ultimo commit pushato su GitHub usare sempre `git revert` — crea un nuovo commit di annullamento senza riscrivere la storia (sicuro con remote condivisi e Vercel):

```bash
git revert HEAD && git push origin main
```

Non usare `git reset --hard HEAD~1` + force push su branch condivisi — riscrive la storia e causa problemi a chi ha già pullato.

**Regola**: per qualsiasi rollback dell'ultimo cambiamento, il comando da dare a Cursor è sempre `git revert HEAD && git push origin main` — non serve riscrivere il codice a mano.

---

### ❌ ERR-020 — File immagini non committati su Git — invisibili su Vercel
**Progetto**: almahotel-site | **Data**: 2026-05-14
**Sintomo**: immagine visibile in locale ma non su Vercel — `<Image>` mostra solo il gradiente overlay su sfondo vuoto.
**Causa**: il file esiste in `public/images/` localmente ma non è mai stato aggiunto a Git (`git status` mostra "Untracked files"). Vercel fa il deploy dal repo — se il file non è nel repo, non esiste su Vercel.
**Diagnosi rapida**: `git status` — se il file appare come "Untracked" o "Changes not staged", non è nel repo.
**Fix**:
```bash
git add public/images/nomefile.jpg
git commit -m "chore: add missing image assets"
git push origin main
```
**Regola**: ogni volta che si aggiunge un file in `public/` bisogna committarlo esplicitamente. I file binari (immagini, font, SVG) non vengono inclusi automaticamente — vanno sempre aggiunti con `git add` prima del push. Prima di diagnosticare problemi di codice su immagini non visibili in produzione, verificare sempre con `git status` che il file sia tracciato.

---

### ❌ ERR-021 — Next.js versione errata — usare Next.js 16, non 15
**Progetto**: tutti i siti Alvenco | **Data**: Maggio 2026
**Sintomo**: Cursor ha inizializzato il progetto con Next.js 15.x invece di Next.js 16.
**Causa**: Cursor usa Next.js 15 come default se non specificato esplicitamente nel prompt.
**Fix**: nel prompt Cursor specificare SEMPRE la versione esatta:
```bash
npx create-next-app@latest --use-npm
# oppure in package.json:
"next": "^16.0.0"
```
**Regola GLOBALE ALVENCO**: tutti i nuovi progetti usano **Next.js 16** come versione minima. Mai usare Next.js 15. Includere questa istruzione in ogni prompt Cursor per nuovi siti o upgrade.
**Adattamenti obbligatori per Next 16 (verificati su tuzzolino-web, Maggio 2026)**:
- `package.json`: `"next": "^16.0.0"`, `"eslint-config-next": "^16.0.0"` (stessa major, obbligatorio)
- Script `lint`: usare `eslint .` invece di `next lint` (rimosso da Next 16)
- Script `dev`: `next dev` senza `--turbopack` (Turbopack è default in Next 16)
- `eslint.config.mjs`: NON usare `FlatCompat` + `compat.extends("next/core-web-vitals")` — causa errori. Usare array flat da `eslint-config-next/core-web-vitals` direttamente. Rimuovere `@eslint/eslintrc`.
- `tsconfig.json`: Next 16 lo aggiorna automaticamente al primo build (`jsx: "react-jsx"`, include `.next/dev/types/**/*.ts`) — non toccare manualmente.
- `generateMetadata` con `await params`: già compatibile, nessuna modifica.
- Warning ESLint `import/no-anonymous-default-export` su `tailwind.config.mjs`: non bloccante, ignorabile.

### ❌ ERR-024 — Cestino: svuota elimina file R2 di clienti NON nel cestino
**Progetto**: fantauzzo-portal | **Data**: 2026-05-26 | **Gravità**: CRITICA

**Causa**: In `permanentlyDeleteTrashItems`, quando il batch conteneva almeno un cliente:
1. Recuperava TUTTI i documenti del cliente senza filtro `deleted_at`
2. Eliminava da R2 anche documenti attivi (non soft-deleted)
3. Voci orfane nel cestino (documento già ripristinato) causavano delete indesiderate

**Fix obbligatorio — tripla verifica su ogni delete permanente**:
```typescript
// MAI eliminare senza verificare deleted_at IS NOT NULL
const { data: docsToDelete } = await supabase
  .from('documents')
  .select('storage_path')
  .in('id', documentIds)
  .not('deleted_at', 'is', null); // doppia verifica OBBLIGATORIA

// R2: elimina SOLO i file con storage_path verificato
await Promise.all(
  (docsToDelete ?? []).map(doc =>
    s3.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: doc.storage_path }))
  )
);

// DB: doppio filtro anche sulla delete
await supabase.from('documents').delete()
  .in('id', documentIds)
  .not('deleted_at', 'is', null); // salvaguardia finale
```

**Regola assoluta**: in NESSUN punto del codice si deve eliminare un file R2 o un record DB senza verificare esplicitamente `deleted_at IS NOT NULL`. Questa verifica va come doppio controllo in TUTTE le operazioni di delete.

**Conseguenza del bug**: file R2 eliminati irrecuperabilmente. I file persi devono essere ricaricati manualmente.

---


### ✅ ERR-023 — Cloudflare R2: procedura corretta per token S3-compatibili
**Progetto**: fantauzzo-portal | **Data**: 2026-05-26

**Problema**: token `cfat_...` generati da Account API Tokens delle impostazioni generali NON sono compatibili con `@aws-sdk/client-s3`. Danno 401 Unauthorized.

**Dove creare il token S3-compatibile (unica procedura valida)**:
1. Cloudflare Dashboard → **R2 Object Storage → Overview**
2. Sezione **Account Details** in basso a destra → clicca **Manage** accanto ad "API Tokens"
3. Nella pagina che si apre: usare **User API Tokens** (NON Account API Tokens)
4. Clicca **Create User API Token**
5. Seleziona bucket specifico (es. `fantauzzo-docs`)
6. Permessi: **Object Read & Write** ✓
7. Token expiration: **No expiration**
8. Clicca **Create** → copia subito **Access Key ID** e **Secret Access Key** (mostrati una sola volta)

**Configurazione S3Client (`lib/r2.ts`)**:
```typescript
import { S3Client } from '@aws-sdk/client-s3';
const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});
```

**Variabili ambiente**:
```env
R2_ACCOUNT_ID=9d57c6c26a16fd371a9d326b55d85fe2
R2_ACCESS_KEY_ID=[da User API Token — NON Account ID]
R2_SECRET_ACCESS_KEY=[da User API Token]
R2_BUCKET_NAME=fantauzzo-docs
R2_ENDPOINT=https://9d57c6c26a16fd371a9d326b55d85fe2.r2.cloudflarestorage.com
```

**Errori da NON ripetere**:
- ❌ Token `cfat_...` (Account API Tokens generali) con `@aws-sdk` → 401
- ❌ API REST v4 `api.cloudflare.com/client/v4/accounts/.../r2/...` con cfat_ → non funziona
- ❌ `R2_ACCESS_KEY_ID = Account ID` → sbagliato, sono valori diversi
- ✅ SEMPRE User API Tokens dalla sezione Manage in R2 Overview
