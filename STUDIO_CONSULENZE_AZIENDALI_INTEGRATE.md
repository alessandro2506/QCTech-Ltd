# STUDIO_CONSULENZE_AZIENDALI_INTEGRATE.md — Progetto Cliente
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: Maggio 2026
> Stato: 🟠 PRESENTAZIONE PRONTA — Demo live, presentazione PDF 4 pagine completata. Prossimo step: contattare il cliente.

---

## 1. BRIEF

- **Tipo**: Sito istituzionale statico — Studio di consulenza fiscale/tributaria
- **Cliente**: Studio Associato Consulenze Aziendali Integrate
- **Referente**: [Nome cognome — TODO: da acquisire]
- **Telefono**: 091 303025 / 091 220679 / 329 7465395
- **Fax**: 091 8165709
- **Sede**: Viale Villa Heloise 21, 90143 Palermo (PA)
- **Email cliente**: [TODO: da acquisire]
- **Sito attuale**: ❌ Nessuno
- **Budget stimato**: [TODO: da definire dopo accettazione — vedi Listino Alvenco v2.1]
- **Contratto firmato**: No
- **Acconto ricevuto**: No

---

## 2. DESCRIZIONE BUSINESS CLIENTE

- **Settore**: Consulenza amministrativa, fiscale e tributaria
- **Target clienti finali**: Imprese, professionisti, partite IVA — area Palermo
- **Presenza online attuale**: Solo directory (Pagine Gialle, Pagine Bianche, Opendi, Overplace)
- **Punti deboli identificati**: Nessun sito, servizi non dettagliati, team non visibile, zero social proof, posizionamento digitale inesistente

---

## 3. DECISIONI TECNICHE

| Scelta | Decisione | Motivazione |
|---|---|---|
| **Framework** | Astro (statico) | No backend necessario, performance massima |
| **Styling** | Tailwind CSS | Standard Alvenco |
| **Hosting** | Vercel | Standard Alvenco |
| **Repository** | GitHub (nuovo repo) | Standard Alvenco |
| **Lingua** | Italiano — i18n-ready | Struttura pronta per IT/EN senza refactoring |
| **Form contatti** | Formspree (no backend) | Semplicità, zero infrastruttura |
| **CMS** | Nessuno | Sito statico, aggiornamenti via Cursor |

---

## 4. ARCHITETTURA SITO

### Sitemap

```
/               → Home (Hero + 3 servizi preview + CTA + "perché noi")
/chi-siamo      → Storia, valori, approccio dello studio
/servizi        → Grid 6 card servizi dettagliate
/team           → Placeholder 3 professionisti (struttura pronta, dati TODO)
/contatti       → Form Formspree + iframe mappa + click-to-call
/faq            → Accordion 6 domande frequenti fiscali/tributarie
```

### Struttura Repository

```
studio-consulenze-web/
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── chi-siamo.astro
│   │   ├── servizi.astro
│   │   ├── team.astro
│   │   ├── contatti.astro
│   │   └── faq.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── ContactForm.astro
│   │   ├── TeamMember.astro
│   │   └── FaqItem.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── content/
│   │   └── it.ts          ← tutti i copy centralizzati (i18n-ready)
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 5. DESIGN SYSTEM

### Palette

| Ruolo | Hex | Uso |
|---|---|---|
| Primary | `#1B3A5C` | Blu navy — autorevolezza istituzionale |
| Accent | `#C9A84C` | Oro — premium, fiducia |
| BG Alt | `#F5F7FA` | Sezioni alternate |
| Text | `#1A1A2E` | Body |
| Muted | `#6B7280` | Secondario |

### Tipografia
- **Heading**: Playfair Display (Google Fonts)
- **Body**: Inter
- **Accent/claim**: Cormorant Garamond

### Tono
Istituzionale premium — stile studio notarile/legale moderno. Bianco/navy/oro. Zero colori vivaci. Massimo rigore tipografico.

---

## 6. SERVIZI DA PRESENTARE (da confermare col cliente)

1. Consulenza fiscale e tributaria
2. Consulenza amministrativa
3. Gestione contabile
4. Dichiarazioni fiscali e adempimenti
5. Assistenza a imprese e professionisti
6. [Sesto servizio — TODO: da acquisire]

---

## 7. SEO

- Sitemap automatica via `@astrojs/sitemap`
- Meta title/description unici per pagina
- Schema.org `LocalBusiness` + `LegalService` in JSON-LD (BaseLayout)
- Open Graph tag
- Target Lighthouse: 95+

---

## 8. PIPELINE COMMERCIALE

| Step | Stato | Note |
|---|---|---|
| Ricerca e fascicolo cliente | ✅ Completato | Via Perplexity |
| File .md ClaudesBrain | ✅ Creato | Questo file |
| Sviluppo sito (demo) | ✅ Completato | Build Astro senza errori — vedi struttura sotto |
| **Proposta commerciale (email)** | 🟡 **PRONTA DA INVIARE** | Template approvato — inviare da Aruba con PDF allegato |
| Accettazione proposta | ⬜ In attesa | — |
| Preventivo .docx | ⬜ Da generare | Solo dopo accettazione — usare carta intestata Alvenco |
| Contratto | ⬜ Da generare | Template Alvenco v2 |
| Kick-off — raccolta info | ⬜ — | Team, servizi reali, foto, anno fondazione |
| Personalizzazione TODO: | ⬜ — | Vedi checklist go-live sotto |
| Deploy Vercel demo | ✅ Online | https://studio-consulenze-web.vercel.app/ |
| Presentazione PDF (4 pagine) | ✅ Completata | Salvata in Contratti/Clienti/Sicilia/Studio ACAI/Presentazione/ |

---

## 9. STRUTTURA PROGETTO SVILUPPATO

```
src/
├── content/
│   └── it.ts               ← tutti i testi centralizzati con marcatori TODO:
├── layouts/
│   └── BaseLayout.astro    ← HTML shell, SEO, JSON-LD LocalBusiness, slot head
├── components/
│   ├── Header.astro        ← sticky, logo testuale, nav active, hamburger mobile
│   ├── Footer.astro        ← 4 colonne, indirizzo, tel, copyright
│   ├── Hero.astro          ← overlay scuro, Playfair bianco, CTA gold, stats strip
│   ├── ServiceCard.astro   ← varianti compact/default con checklist
│   ├── TeamMember.astro    ← foto placeholder grigia, struttura pronta
│   ├── ContactForm.astro   ← Formspree-ready, select argomento, privacy checkbox
│   └── FaqItem.astro       ← accordion accessibile (aria-expanded)
├── pages/
│   ├── index.astro         ← Hero + 3 servizi preview + "perché noi" + CTA banner
│   ├── chi-siamo.astro     ← storia, valori numerati, approccio
│   ├── servizi.astro       ← grid 6 card con checklist dettaglio
│   ├── team.astro          ← 3 placeholder professionisti + sezione recruiting
│   ├── contatti.astro      ← form + sidebar info + iframe mappa + click-to-call
│   └── faq.astro           ← 6 accordion + FAQPage JSON-LD (rich snippets Google)
└── styles/
    └── global.css          ← @theme Tailwind v4, custom properties, componenti
```

---

## 10. CHECKLIST GO-LIVE

| File | Cosa fare |
|---|---|
| `src/content/it.ts` | Nome studio, anno fondazione, tel/email reali, nomi team, bio |
| `astro.config.mjs` | Sostituire `https://TODO-studio-url.it` con dominio reale |
| `src/components/ContactForm.astro` | Inserire endpoint Formspree reale (`https://formspree.io/f/XXXXXXXX`) |
| `src/pages/contatti.astro` | Sostituire iframe Google Maps con coordinate reali |
| `src/components/TeamMember.astro` | Caricare foto professionisti in `public/` |
| `public/favicon.svg` | Sostituire con logo reale dello studio |

---

## 11. NOTE OPERATIVE

- Tutti i testi reali marcati con `TODO:` nel codice per facilitare sostituzione post kick-off
- Form contatti: sostituire `action="#"` con endpoint Formspree reale dopo contratto firmato
- Se il cliente vuole versione EN: aggiungere `src/content/en.ts` e routing `[lang]/` — struttura già pronta
- Analytics: proporre Plausible (privacy-first) o Google Analytics — chiedere al cliente
- Se interessato a blog/news: aggiungere `@astrojs/content` collections senza toccare la struttura base

---

## 12. EMAIL PROPOSTA COMMERCIALE — TEMPLATE APPROVATO

> Fac-simile riutilizzabile per futuri clienti senza presenza digitale.
> Inviare sempre da `hello@alvencoltd.co.uk` via Aruba — mai da Gmail personale.

**Oggetto:** Proposta di presenza digitale per [Nome Studio] — Alvenco Ltd

---

Spettabile [Nome Studio],
la contattiamo da Alvenco Ltd, studio specializzato nello sviluppo di siti web e soluzioni digitali per aziende e professionisti.

Uno studio con oltre [X] anni di attività sul territorio [città] merita una presenza digitale all’altezza della propria storia. Ad oggi, la vostra visibilità online si limita alla sola scheda Google Business — un gap che, nel contesto attuale, rischia di penalizzare la percezione del vostro studio rispetto a realtà più recenti ma più presenti sul web.

La nostra proposta è semplice: un sito istituzionale professionale, collegato alla vostra scheda Google Business, che trasformi la vostra continuità e reputazione in un asset digitale ancor più concreto e duraturo.

Troverà tutto il dettaglio nel documento allegato.

Restiamo a disposizione per un primo contatto, senza impegno, per rispondere a qualsiasi domanda e illustrare i prossimi passi, qualora fosse di vostro interesse.

In attesa di un Vostro gentile riscontro.

Cordiali saluti,

Alessandro Fiscella
CTO — Alvenco Ltd
hello@alvencoltd.co.uk
+44 7754 812247
alvenco.co.uk

---

> **Variabili da sostituire:** `[Nome Studio]` — `[X]` anni attività — `[città]`
> **Allegato:** Presentazione PDF Alvenco dedicata al cliente

---

## 13. CHANGELOG

| Data | Aggiornamento |
|---|---|
| 2026-05-12 | File creato. Anagrafica, stack, architettura, design system, pipeline commerciale definiti. Stato: IN PROSPECTING. |
| 2026-05-12 | Build Astro completata senza errori. Struttura progetto, checklist go-live aggiunte. Pipeline aggiornata. |
| 2026-05-12 | Deploy Vercel attivo: https://studio-consulenze-web.vercel.app/ — Fix nome studio: TODO → Studio A.C.A.I. su tutti i meta e copy. |
| 2026-05-12 | Template email proposta commerciale approvato e salvato. Pipeline aggiornata. |
