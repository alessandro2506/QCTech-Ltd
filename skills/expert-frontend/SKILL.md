# expert-frontend/SKILL.md
> Skill Alvenco — Frontend Next.js/React premium con design conversion-first
> Ultimo aggiornamento: 27 Maggio 2026

---

## Descrizione
Frontend engineering per siti e dashboard Next.js 16 App Router, React 19, Tailwind CSS 4, Framer Motion 12. Design system Alvenco, pattern animation, componenti premium B2B. Basata su: alvencoltd.co.uk, cm-impianti-web, sapori-perduti, almahotel-site, fantauzzo-website.

---

## Quando usarla
- Nuovo sito o componente frontend
- Design system / token CSS / palette
- Animazioni con Framer Motion
- Navbar, Hero, Footer, Form, Modal
- Problema di responsive (mobile-first)

---

## Stack Standard Alvenco (Maggio 2026)

```
next:           ^16.0.0   (MAI 15 — ERR-021)
react:          19.x
typescript:     5.x strict
tailwindcss:    4.x
framer-motion:  12.x
next-intl:      4.x       (per siti multilingue)
lucide-react:   0.x       (MAI v1 — icone brand non esistono — ERR-004)
react-hook-form + zod
clsx + tailwind-merge
```

**Script package.json per Next 16:**
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint ."   // NON "next lint" — rimosso da Next 16
}
```

---

## Design System Alvenco

### Palette — siti corporate B2B (CM Impianti, Alvenco)
```css
--navy:      #0A0F1E;
--gold:      #C9A84C;
--gold-soft: #E8C870;
--text:      #E8EDF5;
--white:     #FFFFFF;
```

### Palette — ristorante premium (Sapori Perduti)
```css
--bg:        #0a0a0a;  /* nero profondo */
--gold:      #c9a84c;
--font-heading: 'Cormorant Garamond';
--font-body:    'Jost';
```

### Palette — dashboard operativa (Sapori Perduti Dashboard)
```css
--db-bg:      #0f1117;
--db-sidebar: #13161e;
--db-card:    #1a1d27;
--db-border:  #252836;
--db-oro:     #c9a84c;
--db-testo:   #e8e8e8;
--db-muted:   #8892a4;
```

---

## Componenti Standard Alvenco

### Navbar — Pattern obbligatorio
```tsx
// Desktop: wordmark HTML + CTA gold outline
// Mobile: hamburger 2px visibile (ERR visuale: usare border-2 non divide)
// Sticky: pt-20 lg:pt-24 nel layout.tsx per compensare — MAI padding inline

// Mobile menu: nav header + logo + link + WhatsApp button
// Hamburger: sempre almeno 2px — se invisibile su sfondi scuri, usare gold (#C9A84C)
```

### CtaButton — Dimensioni Alvenco-equivalent
```tsx
<button className="px-8 py-3.5 text-[15px] font-semibold tracking-wide">
  {label}
</button>
// NON px-4 py-2 — troppo piccolo. Riferimento: alvenco-demo.vercel.app
```

### ScrollToTop con effetto ring — OBBLIGATORIO in tutti i siti Alvenco
```tsx
// Componente scroll-to-top con ring animato al click
// Regola globale CLAUDE.md: includere in ogni nuovo sito/prompt Cursor
```

### InfiniteMarquee — Partner strip (CM Impianti)
```tsx
// Loghi partner: SVG inline monochromatic — MAI img/png per loghi partner
// Classe: fill="currentColor" — colore gestito da Tailwind
// ERR-004 applicato: icone brand sempre SVG inline, mai lucide-react
```

### KpiCounter con IntersectionObserver
```tsx
// threshold: 0, rootMargin: '-100px'   ← fix per observer che non scatta (ERR CM Impianti)
// Animazione count-up: partire da 0 quando il div entra nel viewport
const observer = new IntersectionObserver(
  ([entry]) => { if (entry.isIntersecting) startCount() },
  { threshold: 0, rootMargin: '-100px' }
)
```

### Partner Logos SVG Inline (pattern obbligatorio)
```tsx
// MAI: <img src="logo.png" /> per partner nella marquee
// SÌ: SVG typed const con fill="currentColor"
const PARTNER_LOGOS: { name: string; svg: string }[] = [
  { name: 'Fincantieri', svg: '<svg ...><path fill="currentColor" .../></svg>' },
]
```

### Social Icons — SVG Inline (non lucide-react)
```tsx
// Facebook:
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>
// Instagram, LinkedIn, WhatsApp: sempre SVG inline — mai lucide brand icons
```

---

## Hero Pattern — 2-col asimmetrico (CM Impianti B2B)
```
Layout: 55% testo / 45% immagine (desktop)
Mobile: 1-col, immagine sotto con aspect-video
Gradient overlay: from-navy/90 via-navy/60 to-transparent
CTA: primary gold + secondary outline ghost
KPI: integrati inline nel hero (non sezione separata) → +engagement
```

## Animazioni Framer Motion — Pattern Alvenco

### Reveal on scroll (stagger children)
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
```

### Accordion FAQ (Alvenco site)
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    />
  )}
</AnimatePresence>
```

---

## Regole Critiche

| Regola | Dettaglio |
|---|---|
| Next.js 16 obbligatorio | MAI 15 nei nuovi progetti — ERR-021 |
| `eslint.config.mjs` su Next 16 | NON usare FlatCompat — import diretto da `eslint-config-next/core-web-vitals.js` con `.js` esplicito — ERR-018 |
| `generateMetadata` + `'use client'` | VIETATO nello stesso file — ERR-017 |
| `dangerouslyAllowSVG` | Obbligatorio se usi `placehold.co` — ERR-003 |
| Logo counter-forms | `fill="none"` non `fill="#ffffff"` — ERR-014 |
| Immagini in public/ | Sempre `git add` esplicito prima del push — ERR-020 |
| `allowFullScreen` in JSX | CamelCase — non `allowfullscreen` — ERR-022 |
| Testo su sfondo scuro | Sempre bianco+bold — MAI testo scuro su sfondo navy (regola contrasto CLAUDE.md) |

---

## Benchmark Design
`alvenco-demo.vercel.app` — riferimento qualità assoluto per ogni componente consegnato a cliente.

---

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
