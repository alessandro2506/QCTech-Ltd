# CURSOR_RULES.md — P.F. Traslochi Website

> Questo file è la specifica tecnica vincolante per Cursor.
> Ogni decisione di implementazione deve rispettare quanto scritto qui.
> In caso di dubbio, segui questo file — non interpretare.

---

## 1. STACK E VERSIONI

- **Framework**: Next.js 16 (App Router, NON Pages Router)
- **Linguaggio**: TypeScript strict
- **Styling**: Tailwind CSS 4 — solo classi utility, zero `@apply` custom
- **Animazioni**: Framer Motion — importa solo da `"framer-motion"`
- **Icone**: Lucide React
- **Email**: Resend (`npm install resend`)
- **Font**: Inter via `next/font/google`
- **Deploy target**: Vercel

---

## 2. STRUTTURA CARTELLE — ESATTA, NON MODIFICARE

```
src/
├── app/
│   ├── layout.tsx                          ← layout globale con font, metadata base, WhatsAppButton
│   ├── page.tsx                            ← HOME (non redirect)
│   ├── chi-siamo/
│   │   └── page.tsx
│   ├── servizi/
│   │   ├── page.tsx                        ← overview tutti i servizi
│   │   ├── traslochi/page.tsx
│   │   ├── trasporti-nazionali/page.tsx
│   │   ├── facchinaggio/page.tsx
│   │   ├── deposito-merci/page.tsx
│   │   └── autoscala-noleggio/page.tsx
│   ├── contatti/
│   │   └── page.tsx
│   └── api/
│       └── preventivo/
│           └── route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiziCard.tsx
│   ├── ProcessoStep.tsx
│   ├── Testimonianze.tsx
│   ├── FormPreventivo.tsx
│   └── WhatsAppButton.tsx
└── lib/
    └── resend.ts
```

**REGOLA**: `src/app/page.tsx` è la Home reale. NON mettere redirect qui.

---

## 3. PALETTE — VALORI ESATTI

```
Primario:   #1B2A4A  (blu scuro — navbar, footer, overlay hero)
Accento:    #F97316  (arancio — CTA, hover, elementi interattivi)
Sfondo:     #F8FAFC  (grigio chiarissimo — background pagine)
Testo:      #0F172A  (quasi nero — body text)
Testo muted:#64748B  (grigio — sottotitoli, label)
Bianco:     #FFFFFF
```

Configura questi valori in `tailwind.config.ts` come `colors.brand.*` e usali sempre come classi Tailwind, non come stili inline.

---

## 4. TIPOGRAFIA

- Font: `Inter` via `next/font/google`, peso 400/600/700
- H1: `text-4xl md:text-6xl font-bold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- CTA label: `text-sm font-semibold uppercase tracking-wide`

---

## 5. COMPONENTI — SPECIFICHE

### Navbar
- Logo testuale "P.F. Traslochi" a sinistra, font-bold, colore primario
- Link: Chi Siamo, Servizi, Contatti
- CTA destra: "Preventivo Gratuito" — bottone arancio, rounded-full, px-5 py-2
- Sticky top-0, z-50
- Su scroll: `backdrop-blur-md bg-white/90 shadow-sm`
- Mobile: hamburger icon (Lucide `Menu`/`X`), menu dropdown con tutti i link

### HeroSection
- Background: `<Image>` Next.js con stock Unsplash (url: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600`)
- Overlay: `bg-[#1B2A4A]/70` absolute inset-0
- H1: "Il tuo trasloco in buone mani, da oltre 30 anni a Palermo"
- Sottotitolo: "Traslochi, facchinaggio, deposito e autoscala — professionisti con esperienza familiare"
- CTA primaria: "Richiedi Preventivo" → `/contatti` — sfondo arancio
- CTA secondaria: "Scopri i servizi" → `/servizi` — outline bianco
- Animazione: Framer Motion `fadeUp` con stagger su H1, sottotitolo, CTA

### ServiziCard (6 card)
| Servizio | Icona Lucide | Slug |
|---|---|---|
| Traslochi | `Home` | `/servizi/traslochi` |
| Trasporti Nazionali | `Truck` | `/servizi/trasporti-nazionali` |
| Facchinaggio | `Package` | `/servizi/facchinaggio` |
| Deposito Merci | `Warehouse` | `/servizi/deposito-merci` |
| Autoscala | `ArrowUp` | `/servizi/autoscala-noleggio` |
| Noleggio Mezzi | `Car` | `/servizi/autoscala-noleggio` |

Griglia: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
Card: bordo `border border-slate-200`, hover `shadow-md translate-y-[-2px]`, transizione 200ms

### ProcessoStep
3 step numerati in layout orizzontale (`flex` desktop, `flex-col` mobile):
1. "Richiedi il preventivo gratuito"
2. "Pianifichiamo ogni dettaglio insieme"
3. "Eseguiamo con cura e puntualità"
Separatori: linea tratteggiata arancio tra i numeri (solo desktop)

### Testimonianze
3 card con: nome (placeholder italiano), stelle ★★★★★, testo breve. Sfondo bianco, shadow-sm.

### FormPreventivo
Campi obbligatori:
- Nome (text)
- Telefono (tel)
- Email (email)
- Tipo servizio (select: Trasloco | Trasporto nazionale | Facchinaggio | Deposito | Autoscala | Altro)
- Data stimata (date, min: oggi)
- Città di partenza (text)
- Città di destinazione (text)
- Note (textarea, opzionale)

Submit: POST `/api/preventivo`
Stati UI: idle → loading (spinner) → success (messaggio verde) → error (messaggio rosso)
Validazione client-side prima del submit (campi obbligatori non vuoti).

### WhatsAppButton
- Fixed, bottom-6 right-6, z-50
- Visibile solo mobile (`md:hidden`)
- Link: `https://wa.me/39XXXXXXXXXX` (placeholder — sostituire con numero reale)
- Icona: SVG WhatsApp verde #25D366, cerchio bianco con shadow
- Tooltip: "Scrivici su WhatsApp"

### Footer
- Sfondo `#1B2A4A`, testo bianco
- 3 colonne: Servizi (links), Contatti (tel + email + indirizzo), Info (P.IVA, copyright)
- Copyright: "© 2026 P.F. Traslochi di Francesco Perrone — P.IVA XXXXXXXXXXX"
- Mobile: colonne in stack verticale

---

## 6. API ROUTE — /api/preventivo/route.ts

```typescript
// Logica attesa:
// 1. Riceve POST con body JSON (tutti i campi form)
// 2. Valida che i campi obbligatori siano presenti
// 3. Invia email via Resend a process.env.EMAIL_TO
// 4. Template email HTML con tutti i campi formattati in tabella
// 5. Risponde { success: true, message: "..." } o { success: false, message: "..." }
// 6. Usa NextResponse.json() — NON Response diretta
```

---

## 7. VARIABILI AMBIENTE

Crea `.env.local` con:
```
RESEND_API_KEY=your_key_here
EMAIL_TO=email@pftraslochi.it
```

Aggiungi `.env.local` al `.gitignore`.

---

## 8. SEO — METADATA PER OGNI PAGINA

Ogni `page.tsx` deve esportare `export const metadata: Metadata = { title, description }`.

| Pagina | Title | Description |
|---|---|---|
| Home | "P.F. Traslochi Palermo — Traslochi e Facchinaggio Professionale" | "Traslochi a Palermo e provincia dal 1990. Facchinaggio, deposito merci, autoscala e trasporti nazionali. Richiedi un preventivo gratuito." |
| Chi Siamo | "Chi Siamo — P.F. Traslochi Palermo" | "La storia familiare di P.F. Traslochi: Francesco Perrone, figlio del fondatore Benedetto, porta avanti tre generazioni di esperienza." |
| Servizi | "Servizi — Traslochi, Facchinaggio, Autoscala Palermo" | "Scopri tutti i servizi di P.F. Traslochi: traslochi privati e aziendali, facchinaggio, deposito merci, autoscala e noleggio mezzi a Palermo." |
| Contatti | "Contatti e Preventivo Gratuito — P.F. Traslochi Palermo" | "Richiedi un preventivo gratuito per il tuo trasloco a Palermo. Contattaci per telefono, WhatsApp o tramite il modulo online." |

---

## 9. REGOLE TECNICHE — ERRORI VIETATI

1. **NON usare Pages Router** — solo App Router (`src/app/`)
2. **NON mettere redirect in `src/app/page.tsx`** — è la Home reale
3. **NON usare `@apply`** con classi Tailwind non definite nel config
4. **NON importare Framer Motion da sottopercorsi** — solo `from "framer-motion"`
5. **NON usare `Response.json()`** nelle API routes — usa `NextResponse.json()`
6. **NON committare `.env.local`**
7. **Ogni `<Image>` Next.js** deve avere `alt` descrittivo e dimensioni `width`/`height` o `fill` con parent `relative`
8. **Tailwind 4**: configura i colori custom in `tailwind.config.ts` — non usare valori hex inline nelle classi (`bg-[#1B2A4A]` solo se non disponibile come token)

---

## 10. DEPLOY — WORKFLOW FINALE

**NON serve testare in locale.** Il flusso finale è:

1. Sviluppo completo in Cursor
2. Cursor crea la repo GitHub (con nome e descrizione del progetto) e pusha tutto
3. Alex collega la repo su Vercel per il deploy pubblico

**Cursor deve:**
- Creare repo in `https://github.com/orgs/AlvencoLtd` (o account personale se non ha accesso org)
- Nome repo: `pf-traslochi-web`
- Descrizione: "Sito web P.F. Traslochi di Francesco Perrone — traslochi, facchinaggio e deposito merci a Palermo"
- Push di tutti i file incluso `CURSOR_RULES.md`
- `.env.local` NON deve essere incluso nel push (verificare `.gitignore`)

---

## 11. ORDINE DI IMPLEMENTAZIONE

1. `tailwind.config.ts` — palette e font
2. `src/app/layout.tsx` — font Inter, metadata base, WhatsAppButton
3. `src/components/Navbar.tsx`
4. `src/components/Footer.tsx`
5. `src/app/page.tsx` — Home completa con tutti i componenti
6. `src/app/api/preventivo/route.ts` + `src/lib/resend.ts`
7. `src/components/FormPreventivo.tsx`
8. `src/app/contatti/page.tsx`
9. `src/app/chi-siamo/page.tsx`
10. `src/app/servizi/page.tsx` + tutte le sotto-pagine servizi

**Non procedere al punto successivo senza che il precedente funzioni correttamente.**
