# STUDIO_CONSULENZE_AZIENDALI_INTEGRATE.md — Progetto Cliente
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: Maggio 2026
> Stato: 🟡 IN PROSPECTING — Fascicolo completato, file .md creato, prompt Cursor pronto. In attesa di inviare proposta commerciale.

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
| Prompt Cursor pronto | ✅ Pronto | Generato in chat |
| **Proposta commerciale (email)** | 🔴 **DA INVIARE** | Bozza nel fascicolo Perplexity |
| Accettazione proposta | ⬜ In attesa | — |
| Preventivo .docx | ⬜ Da generare | Solo dopo accettazione — usare carta intestata Alvenco |
| Contratto | ⬜ Da generare | Template Alvenco v2 |
| Kick-off — raccolta info | ⬜ — | Team, servizi reali, foto, anno fondazione |
| Sviluppo sito | ⬜ — | Cursor + Vercel |
| Deploy e consegna | ⬜ — | — |

---

## 9. NOTE OPERATIVE

- Tutti i testi reali marcati con `TODO:` nel codice per facilitare sostituzione post kick-off
- Form contatti: sostituire `action="#"` con endpoint Formspree reale dopo contratto firmato
- Se il cliente vuole versione EN: aggiungere `src/content/en.ts` e routing `[lang]/` — struttura già pronta
- Analytics: proporre Plausible (privacy-first) o Google Analytics — chiedere al cliente
- Se interessato a blog/news: aggiungere `@astrojs/content` collections senza toccare la struttura base

---

## 10. CHANGELOG

| Data | Aggiornamento |
|---|---|
| 2026-05-12 | File creato. Anagrafica, stack, architettura, design system, pipeline commerciale definiti. Stato: IN PROSPECTING. |
