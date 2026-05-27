# FANTAUZZO_WEBSITE.md
# Progetto: Studio Consulenza - Rag. Fantauzzo — Sito Istituzionale
> Creato: 26 Maggio 2026
> Repo: `fantauzzo-website` (GitHub org AlvencoLtd)
> Percorso locale: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/fantauzzo-website/`
> Deploy test: `studiofantauzzo.vercel.app`
> Deploy produzione: `studiofantauzzo.it`
> Contratto: ALV-2026-005

---

## SEZIONE 1 — PROJECT CONTEXT

### Chi è il cliente
Studio di consulenza del lavoro e fiscale con sede a Palermo. Titolare: Rag. Fantauzzo Francesco. Nessuna presenza digitale attuale — solo directory online. Il sito è il primo prodotto digitale dello studio.

### Obiettivo del sito
Creare una presenza digitale professionale e autorevole che rappresenti i servizi dello studio, trasmetta fiducia ai clienti potenziali e faciliti il primo contatto. Il sito è anche il portale di accesso alla piattaforma documentale (via CTA "Area Riservata" in header).

### Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animazioni**: Framer Motion (solo dove aggiunge valore — no animazioni gratuite)
- **Form**: Resend (o Aruba SMTP fallback: `smtps.aruba.it:465`)
- **SEO**: next-sitemap, schema JSON-LD LocalBusiness + LegalService, Open Graph
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel
- **Font**: Inter (corpo), Playfair Display (titoli hero)
- **Immagini**: Stock royalty-free da Unsplash/Pexels (già selezionate prima dello sviluppo)
- **Lingua**: Solo italiano

### Palette colori — OBBLIGATORIA, non deviare
| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#FDF5F0` | Background primario pagine |
| `--color-accent-light` | `#F5C49A` | Accent caldo, separatori, hover |
| `--color-primary` | `#C8502D` | CTA, bottoni, link attivi, highlight |
| `--color-dark` | `#5C1E10` | Navbar, footer, testi bold, sidebar active |
| `--color-text` | `#2A1A10` | Testo corpo |
| `--color-muted` | `#9A7B6B` | Testo secondario, label, caption |
| `--color-white` | `#FFFFFF` | Card background, sezioni alternate |

---

## SEZIONE 2 — ARCHITETTURA E STRUTTURA

### Sitemap
```
/                → Home
/chi-siamo       → Chi Siamo
/servizi         → Servizi
/faq             → FAQ
/contatti        → Contatti
```

### Struttura repository
```
fantauzzo-website/
├── app/
│   ├── layout.tsx                ← Root layout: font, metadata globale, GA4
│   ├── page.tsx                  ← Home
│   ├── chi-siamo/page.tsx
│   ├── servizi/page.tsx
│   ├── faq/page.tsx
│   ├── contatti/page.tsx
│   └── api/
│       └── contact/route.ts      ← API form contatto → Resend
├── components/
│   ├── layout/
│   │   ├── Header.tsx            ← Sticky, logo, nav, CTA "Area Riservata"
│   │   └── Footer.tsx            ← Colonne: studio, servizi, contatti, legal
│   ├── home/
│   │   ├── Hero.tsx              ← Hero con overlay, titolo Playfair, CTA
│   │   ├── ServicesPreview.tsx   ← 3 servizi in sintesi con icone
│   │   ├── WhyUs.tsx             ← 4 punti di forza dello studio
│   │   └── CtaBanner.tsx         ← Banner CTA "Prenota una consulenza"
│   ├── servizi/
│   │   └── ServiceCard.tsx       ← Card servizio con titolo, descrizione, lista
│   ├── faq/
│   │   └── FaqItem.tsx           ← Accordion accessibile (aria-expanded)
│   ├── contatti/
│   │   └── ContactForm.tsx       ← Form con validazione + notifica email
│   └── shared/
│       ├── SectionTitle.tsx      ← Titolo sezione riusabile
│       ├── ScrollToTop.tsx       ← Scroll-to-top con effetto ring (OBBLIGATORIO)
│       └── StructuredData.tsx    ← JSON-LD LocalBusiness + LegalService
├── lib/
│   ├── content.ts                ← Tutti i testi centralizzati (copy)
│   └── metadata.ts               ← Metadata SEO per pagina
├── public/
│   ├── favicon.ico
│   └── images/                   ← Stock photo ottimizzate (WebP)
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## SEZIONE 3 — CONTENUTI PER SEZIONE

### Header
- Logo testuale: "Studio Fantauzzo" (fino a disponibilità logo grafico)
- Menu: Home · Chi Siamo · Servizi · FAQ · Contatti
- CTA button separato: **"Area Riservata"** → `https://portale.studiofantauzzo.it` (placeholder fino al go-live portale — nel frattempo link disabilitato o con modal "In arrivo")
- Sticky su scroll, hamburger su mobile

### Home
**Hero**: immagine stock ufficio/consulenza professionale italiana, overlay scuro `#5C1E10` al 60%, titolo bianco Playfair Display, sottotitolo Inter, due CTA: "Scopri i servizi" (primario `#C8502D`) + "Contattaci" (outline bianco)

**Servizi preview**: 3 card con icona, titolo, breve descrizione
- Consulenza del Lavoro
- Consulenza Fiscale
- Assistenza a Imprese e Professionisti

**Perché sceglierci** (4 punti):
- Esperienza pluriennale nel settore
- Assistenza personalizzata e continuativa
- Aggiornamento costante su normative e adempimenti
- Approccio trasparente e diretto

**CTA Banner**: "Hai bisogno di una consulenza? Contattaci oggi." → bottone "Prenota ora" → `/contatti`

### Chi Siamo
- Paragrafo di presentazione dello studio
- Valori: professionalità, trasparenza, aggiornamento continuo, approccio umano
- Profilo: Rag. Fantauzzo Francesco — Consulente del Lavoro e Fiscale, Palermo

### Servizi
**Consulenza del Lavoro** (elenco):
Elaborazione buste paga · Assunzioni e cessazioni · Gestione contratti (dipendenti, apprendisti, part-time, co.co.co.) · Comunicazioni obbligatorie UNILAV · CIG/CIGS e ammortizzatori · Pratiche INPS e INAIL · Gestione TFR · Contenzioso del lavoro · Licenziamenti e sanzioni disciplinari · Trasferte e rimborsi · CCNL applicabili · Orario lavoro, ferie, permessi · CUD / Certificazione Unica

**Consulenza Fiscale e Tributaria** (elenco):
730 e Modello Redditi PF · Dichiarazioni redditi persone giuridiche · Apertura e chiusura Partita IVA · Regime forfettario · Liquidazioni IVA periodiche · Dichiarazione IVA annuale · Modello 770 · ISA · Ravvedimento operoso · Contenzioso tributario (CTP, CTR) · Assistenza verifiche fiscali (AdE, GdF) · Agevolazioni fiscali e crediti d'imposta · Successioni e donazioni · IMU/TASI/TARI · Visure catastali

### FAQ (10 domande)
1. Quanto costa aprire una Partita IVA?
2. Qual è la differenza tra regime forfettario e regime ordinario?
3. Entro quando va presentata la dichiarazione dei redditi?
4. Come funziona il TFR e quando spetta al dipendente?
5. Cosa succede se non pago le tasse in tempo?
6. Posso assumere un dipendente senza avere una società?
7. Cos'è la Certificazione Unica (CU) e quando viene rilasciata?
8. Ho ricevuto un avviso dall'Agenzia delle Entrate: cosa devo fare?
9. Quali documenti servono per elaborare le buste paga?
10. Come funziona il regime forfettario per i nuovi professionisti?

### Contatti
- Form: Nome, Email, Telefono (opzionale), Oggetto (select: Consulenza del Lavoro / Consulenza Fiscale / Altro), Messaggio, Privacy checkbox
- Sidebar: indirizzo (Via Ercole Bernabei 19, 90145 Palermo), telefono (091 6823872), email (info@studiofantauzzo.it)
- Mappa: Google Maps embed (coordinate Palermo — placeholder fino a verifica)
- Click-to-call su mobile

### Footer
- Colonna 1: Nome studio, breve tagline
- Colonna 2: Link pagine
- Colonna 3: Contatti rapidi
- Colonna 4: Note legali (P.IVA, privacy policy, cookie policy)
- Copyright Alvenco Ltd (piccolo, discreto)

---

## SEZIONE 4 — SEO

### Metadata per pagina
| Pagina | Title | Description |
|---|---|---|
| Home | Studio Fantauzzo - Consulenza del Lavoro e Fiscale \| Palermo | Consulente del lavoro e fiscale a Palermo. Buste paga, dichiarazioni redditi, apertura P.IVA, contenzioso. Contattaci. |
| Chi Siamo | Chi Siamo \| Studio Fantauzzo Palermo | Lo studio del Rag. Fantauzzo Francesco offre consulenza del lavoro e fiscale a Palermo con professionalità e trasparenza. |
| Servizi | Servizi di Consulenza del Lavoro e Fiscale \| Studio Fantauzzo | Buste paga, contratti, dichiarazioni, P.IVA, contenzioso. Tutti i servizi dello Studio Fantauzzo a Palermo. |
| FAQ | Domande Frequenti \| Studio Fantauzzo Palermo | Risposte alle domande più frequenti su fisco, lavoro, P.IVA e adempimenti fiscali. |
| Contatti | Contatti \| Studio Fantauzzo Palermo | Contatta lo Studio Fantauzzo a Palermo. Via Ercole Bernabei 19. Tel. 091 6823872. |

### JSON-LD (StructuredData.tsx — da inserire in root layout)
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService"],
  "name": "Studio Consulenza - Rag. Fantauzzo",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Ercole Bernabei 19",
    "addressLocality": "Palermo",
    "postalCode": "90145",
    "addressCountry": "IT"
  },
  "telephone": "+390916823872",
  "email": "info@studiofantauzzo.it",
  "url": "https://studiofantauzzo.it"
}
```

---

## SEZIONE 5 — CURSOR RULES

```
# .cursorrules — fantauzzo-website

## STACK E VERSIONI
- Next.js 15 con App Router — MAI usare Pages Router
- React 19
- Tailwind CSS 4 — usare CSS custom properties, MAI hardcodare colori hex nel JSX
- TypeScript strict — MAI usare `any`
- Framer Motion solo dove aggiunge valore percepibile — no animazioni decorative inutili

## STRUTTURA
- Tutti i testi in `lib/content.ts` — MAI stringhe hardcodate nei componenti
- Tutti i metadata SEO in `lib/metadata.ts`
- Un componente = un file = una responsabilità
- Nessun componente oltre 150 righe — splittare se necessario

## PALETTE — NON DEVIARE MAI
- bg: #FDF5F0
- accent-light: #F5C49A
- primary: #C8502D
- dark: #5C1E10
- text: #2A1A10
- muted: #9A7B6B
- white: #FFFFFF
Usare SEMPRE le variabili CSS — mai i valori hex diretti nel JSX/TSX

## COMPONENTI
- Ogni componente ha props tipizzate con TypeScript interface
- MAI prop drilling oltre 2 livelli — usare composizione
- Responsive-first: mobile → tablet → desktop
- ScrollToTop con effetto ring `#C8502D` — OBBLIGATORIO in ogni pagina

## FORM CONTATTO
- Validazione lato client con react-hook-form
- API route: `app/api/contact/route.ts` → Resend
- In caso di fallback: Aruba SMTP smtps.aruba.it:465
- Mostrare stato loading, success, error — MAI submit silenzioso

## SEO
- Ogni pagina ha metadata esplicito in `lib/metadata.ts`
- JSON-LD LocalBusiness + LegalService nel root layout
- next-sitemap configurato con tutte le pagine
- Immagini: attributo alt sempre presente e descrittivo
- Open Graph: og:title, og:description, og:image per ogni pagina

## IMMAGINI
- Formato WebP obbligatorio
- next/image con width, height e alt sempre specificati
- Placeholder blur per le immagini hero
- MAI <img> nativo — sempre next/image

## PERFORMANCE
- Target Lighthouse: 90+ su tutte le metriche
- Font: next/font/google per Inter e Playfair Display
- Nessun import CSS globale non necessario
- Lazy loading per componenti below the fold

## ERRORI COMUNI DA EVITARE
- MAI `export default function Page()` senza metadata nella stessa pagina
- MAI useState in Server Components
- MAI fetch senza error handling
- MAI colori hardcodati — sempre variabili CSS
- MAI testi hardcodati — sempre da lib/content.ts
- MAI chiedere conferma per la fase successiva senza aver prima fatto push su GitHub e verificato il deploy su Vercel
```

---

## SEZIONE 6 — PIANO DI IMPLEMENTAZIONE

### FASE 1 — Setup (Giorno 1)
- [ ] `npx create-next-app@latest fantauzzo-website --typescript --tailwind --app --src-dir --import-alias "@/*"`
- [ ] Configurare Tailwind CSS 4 con custom properties palette
- [ ] Installare dipendenze: `framer-motion`, `react-hook-form`, `resend`, `next-sitemap`, `lucide-react`
- [ ] Configurare font: Inter + Playfair Display via `next/font/google`
- [ ] Creare `lib/content.ts` con tutti i testi
- [ ] Creare `lib/metadata.ts` con metadata per ogni pagina
- [ ] Struttura cartelle componenti
- [ ] Push repo su GitHub `AlvencoLtd/fantauzzo-website`
- [ ] Collegare Vercel → deploy automatico

### FASE 2 — Layout base (Giorno 1-2)
- [ ] `components/layout/Header.tsx` — sticky, nav, CTA "Area Riservata" disabilitato con tooltip "In arrivo"
- [ ] `components/layout/Footer.tsx` — 4 colonne
- [ ] `components/shared/ScrollToTop.tsx` — con ring `#C8502D`
- [ ] `components/shared/StructuredData.tsx` — JSON-LD
- [ ] `app/layout.tsx` — root layout con font, metadata globale, GA4, StructuredData

### FASE 3 — Home (Giorno 2)
- [ ] `components/home/Hero.tsx` — stock photo, overlay, titolo Playfair, due CTA
- [ ] `components/home/ServicesPreview.tsx` — 3 card preview
- [ ] `components/home/WhyUs.tsx` — 4 punti di forza
- [ ] `components/home/CtaBanner.tsx` — banner con CTA contatti
- [ ] `app/page.tsx` — assembla i componenti Home

### FASE 4 — Pagine interne (Giorno 3)
- [ ] `app/chi-siamo/page.tsx`
- [ ] `components/servizi/ServiceCard.tsx`
- [ ] `app/servizi/page.tsx` — due sezioni: Lavoro + Fiscale
- [ ] `components/faq/FaqItem.tsx` — accordion accessibile
- [ ] `app/faq/page.tsx` — 10 domande

### FASE 5 — Contatti + API (Giorno 4)
- [ ] `app/api/contact/route.ts` — API Resend
- [ ] `components/contatti/ContactForm.tsx` — form con stati loading/success/error
- [ ] `app/contatti/page.tsx` — form + sidebar + mappa
- [ ] Test invio email

### FASE 6 — SEO, performance, revisioni (Giorno 5-6)
- [ ] `next-sitemap.config.js` configurato
- [ ] Metadata completo per ogni pagina
- [ ] Ottimizzazione immagini WebP
- [ ] Test Lighthouse (target 90+)
- [ ] Test mobile (iPhone 14, Galaxy S24)
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Revisione copy e testi
- [ ] Deploy su `studiofantauzzo.vercel.app`
- [ ] Presentazione a Fantauzzo

---

## SEZIONE 7 — VARIABILI AMBIENTE

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@studiofantauzzo.it
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://studiofantauzzo.it
```

---

## SEZIONE 8 — NOTE OPERATIVE

- Il CTA "Area Riservata" in header punta a `portale.studiofantauzzo.it` — fino al go-live del portale mostrare tooltip "Disponibile a breve" o disabilitarlo
- La P.IVA dello studio va inserita in footer e JSON-LD appena disponibile
- La mappa Google Maps va configurata con le coordinate reali di Via Ercole Bernabei 19 Palermo
- Scroll-to-top con ring `#C8502D` è regola globale Alvenco — non omettere
- Stock photo: selezionare su Unsplash/Pexels termini: "accountant office italy", "professional consultant palermo", "tax advisor desk", "business professional italy"

---

## SEZIONE 9 — CHANGELOG

| Data | Aggiornamento |
|---|---|
| 2026-05-26 | File creato. Context, stack, architettura, contenuti, Cursor Rules, piano implementazione completi. |
