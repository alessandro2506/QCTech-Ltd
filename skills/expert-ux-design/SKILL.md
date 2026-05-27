# expert-ux-design/SKILL.md
> Skill Alvenco — UX, design system, gerarchia visiva, conversion design
> Aggiornamento: 27 Maggio 2026

## Descrizione
UX/UI design per siti e dashboard Alvenco. Principi di gerarchia visiva, design system, conversion-first, mobile-first. Basata su: cm-impianti-web (B2B industrial), sapori-perduti (ristorante premium), alvencoltd.co.uk (agency), alvenco-demo.vercel.app (benchmark qualità).

## Quando usarla
- Progettare layout di una nuova pagina
- Strutturare un Hero, un form, una sezione portfolio
- Scegliere palette, font, spaziature
- Revisionare screenshot di un sito cliente
- Generare il design system per un prompt Cursor

## Benchmark Qualità
alvenco-demo.vercel.app — riferimento assoluto per ogni componente consegnato.
Prima di approvare qualsiasi UI: confrontarla con alvenco-demo.

## Principi UX Alvenco

### Siti corporate B2B (CM Impianti, Alvenco)
- Above the fold: chi siamo + cosa facciamo + CTA in < 3 secondi
- KPI integrati nel hero (non sezione separata) — engagement +30%
- Trust architecture: certificazioni, partner loghi, anni esperienza, clienti noti
- CTA gold prominente: `px-8 py-3.5 text-[15px]` — MAI bottoni piccoli
- Mobile-first rigoroso: hero 1-col, immagine sotto, font leggibile su 375px

### Siti ristorante premium (Sapori Perduti)
- Silenzio prima della parola: spazi negativi scuri prima di ogni testo
- Tipografia come architettura: titoli monumentali (Cormorant Garamond 60px+)
- Il cibo è protagonista: immagini cinematografiche full-bleed
- Oro su nero: gold come accento raro, mai protagonista
- Animazioni lente e deliberate: nulla scatta, tutto scivola (Framer Motion)

### Dashboard operative (Sapori Perduti Dashboard, Fantauzzo Portal)
- Sidebar scura + cards leggermente più chiare della bg
- Azioni pericolose: sempre confirm dialog — mai delete diretto
- Real-time: skeleton → dati (mai spinner vuoti > 500ms)
- Mobile: sidebar collassabile, tabelle → card list su < 768px

## Gerarchia Visiva — Regole

1. Un solo CTA primario per sezione/pagina
2. Contrasto testo/sfondo: MAI testo scuro su sfondo navy — sempre bianco+bold
3. Heading scale: H1 48-64px / H2 32-40px / H3 24-28px / Body 16px / Caption 14px
4. Spaziatura sezioni: pt-24 pb-24 (96px) desktop / pt-16 pb-16 mobile
5. Max width content: max-w-6xl mx-auto (1152px) — mai full-width su desktop

## Layout Pattern Testati

### Hero 2-col asimmetrico (CM Impianti B2B)
- 55% testo / 45% immagine
- Gradient overlay: from-navy/90 via-navy/60 to-transparent sull'immagine
- Titolo: 3 righe max, colore bianco, font bold
- Sotto-titolo: muted, max 2 righe
- CTA: primario gold + secondario ghost outline

### Magazine grid servizi (CM Impianti)
- Desktop: 3 colonne con card hover gold border
- Mobile: 1 colonna stacked
- Ogni card: icona SVG gold + titolo + descrizione 2 righe + link

### Masonry progetti (CM Impianti portfolio)
- Desktop: 2+3 layout (prima riga 2 card grandi, seconda 3 card medie)
- Mobile: 1 colonna
- Overlay hover: titolo + categoria + freccia

### CTA 2-col con noise texture (CM Impianti)
- Left: testo + titolo + CTA button gold
- Right: immagine cantiere con noise texture overlay
- Background: navy scuro con pattern noise SVG

## Font System

| Progetto | Heading | Body |
|---|---|---|
| Alvenco agency | Inter / Geist | Inter |
| CM Impianti B2B | Bebas Neue | Inter |
| Sapori Perduti | Cormorant Garamond | Jost |
| Dashboard | Inter | Inter |

## Icone
Sempre lucide-react per icone UI generiche.
MAI lucide-react per icone brand (Facebook, Instagram, WhatsApp, LinkedIn) — SVG inline.

## Mobile-First Checklist

- [ ] Navbar: hamburger visibile (2px, colore contrastante)
- [ ] Hero: testo leggibile senza zoom su 375px
- [ ] CTA: target area minima 44x44px
- [ ] Footer: grid-cols-2 (non 4 su mobile)
- [ ] Immagini: aspect-video o aspect-square fisso (non height auto)
- [ ] Form: input font-size 16px (evita zoom iOS)
- [ ] Scroll: no overflow-x body

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
