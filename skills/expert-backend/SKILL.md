# expert-backend/SKILL.md
> Skill Alvenco — Backend Node.js, API Routes, Auth, Email, Integrazioni
> Ultimo aggiornamento: 27 Maggio 2026

---

## Descrizione
Backend engineering per progetti Alvenco: Next.js Server Actions/API Routes, autenticazione multi-livello, email transazionale, integrazioni Firebase/Supabase, tRPC. Basata su: Sapori Perduti dashboard, Fantauzzo portal, Città Chiara backend Vercel, CivicAlert Railway.

---

## Quando usarla
- API Routes o Server Actions Next.js
- Sistema di autenticazione (Firebase, Supabase, JWT custom)
- Email transazionale (Nodemailer/Resend)
- Integrazione Firebase Admin SDK
- Backend tRPC su Vercel Serverless
- Middleware di protezione route

---

## Auth — Pattern Implementati

### Pattern A — Firebase Auth + Session Cookie (Dashboard Owner)
```ts
// Lato server — /api/auth/login
import { adminAuth } from '@/lib/firebase-admin'
const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: 60 * 60 * 24 * 5 * 1000 })
res.setHeader('Set-Cookie', serialize('session', sessionCookie, { httpOnly: true, secure: true, path: '/' }))

// Middleware — protezione route
const decodedToken = await adminAuth.verifySessionCookie(sessionCookie, true)
```

### Pattern B — JWT Custom (Developer bcrypt + jose)
```ts
// Login: verifica bcrypt → genera JWT con jose
import * as jose from 'jose'
const secret = new TextEncoder().encode(process.env.JWT_SECRET)
const token = await new jose.SignJWT({ username, role: 'dev' })
  .setProtectedHeader({ alg: 'HS256' })
  .setExpirationTime('8h')
  .sign(secret)

// Verifica in middleware:
const { payload } = await jose.jwtVerify(token, secret)
```
**NOTA CRITICA**: `jose` è ESM-only. In backend CommonJS (tRPC Vercel) usare dynamic import:
```ts
// ❌ Causa HTTP 500 su Vercel
import { jwtVerify } from 'jose'
// ✅ Fix Città Chiara (context.ts)
const { jwtVerify } = await import('jose')
```

### Pattern C — Firebase Anonymous Auth (Sito pubblico con Firestore)
```ts
// OBBLIGATORIO: abilitare Anonymous Auth in Firebase Console PRIMA
import { setPersistence, browserLocalPersistence, signInAnonymously } from 'firebase/auth'
await setPersistence(auth, browserLocalPersistence)
await signInAnonymously(auth)
// Senza browserLocalPersistence: auth si perde al refresh
```

---

## Firebase Admin SDK — Configurazione Vercel

### Variabile `FIREBASE_ADMIN_PRIVATE_KEY`
```env
# Su Vercel: incollare CON le virgolette doppie esterne
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
```
```ts
// Nel codice: strippare virgolette e normalizzare \n
privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!
  .replace(/^"|"$/g, '')
  .replace(/\\n/g, '\n')
```

---

## Email — Stack e Pattern

### Nodemailer SMTP Aruba (Alvenco site — preferito)
```ts
const transporter = nodemailer.createTransport({
  host: 'smtps.aruba.it',
  port: 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})
```
**Schema 2 caselle Alvenco:**
- Notifica interna: da `hello@alvencoltd.co.uk` a `hello@alvencoltd.co.uk`
- Auto-reply cliente: da `no-reply@alvencoltd.co.uk` a `email-cliente`
- Auto-reply include: nome, topic, testo messaggio, "risposta entro 48h", link WhatsApp

### Resend (Sapori Perduti — preferito per template HTML branded)
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({ from: 'noreply@saporiperduti.it', to, subject, html })
```

---

## DeepL API — Regola Auth (da Novembre 2025)
```ts
// ❌ Query param — deprecato
fetch(`https://api-free.deepl.com/v2/translate?auth_key=${key}`)
// ✅ Header-based — UNICO metodo valido
fetch('https://api-free.deepl.com/v2/translate', {
  headers: { 'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}` }
})
```

---

## tRPC su Vercel Serverless — Fix Critici

### HTTP 500 da import jose ESM in CommonJS (Città Chiara)
**Causa**: `jose` non può essere importato staticamente in CommonJS.
**Fix** in `server/_core/context.ts`:
```ts
// Prima: import { jwtVerify } from 'jose'  → crash
// Dopo:
export async function createContext({ req, res }: { req: Request; res: Response }) {
  const { jwtVerify } = await import('jose')  // dynamic import → OK in Vercel serverless
  // ...
}
```

### tRPC router su Vercel — struttura
```ts
// api/trpc/[trpc].ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
export const runtime = 'edge' // oppure 'nodejs'
export default (req: Request) => fetchRequestHandler({ endpoint: '/api/trpc', req, router, createContext })
```

---

## Middleware Next.js — Protezione Route
```ts
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get('session')?.value

  if (pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/admin/:path*'] }
```

---

## Server Actions vs API Routes — Quando usare cosa

| Scenario | Usa |
|---|---|
| Form mutation semplice, no streaming | Server Action |
| Webhook esterno (Stripe, Firebase FCM) | API Route |
| Autenticazione con session cookie | API Route (più controllo headers) |
| Operazioni database nel corpo pagina | Server Action |
| tRPC endpoint | API Route con adapter tRPC |

---

## Cloudflare R2 — S3 Client (Fantauzzo Portal)

**Token S3-compatibili**: creare SOLO da R2 Overview → Manage → User API Tokens.
MAI usare token `cfat_...` (Account API Tokens) — danno 401 con `@aws-sdk/client-s3`.

```ts
import { S3Client } from '@aws-sdk/client-s3'
const s3 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  }
})
```

**Regola delete permanente** (ERR-024 — critico):
```ts
// SEMPRE doppio controllo deleted_at prima di eliminare da R2
const docs = await supabase.from('documents').select('storage_path')
  .in('id', ids).not('deleted_at', 'is', null)  // doppia verifica obbligatoria
```

---

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
