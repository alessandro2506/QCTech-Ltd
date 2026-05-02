# CM_IMPIANTI.md — Progetto Cliente CM-Impianti
> Parent: `CLAUDE.md`
> Chat: CM-Impianti — Restyling sito corporate B2B Industrial-Premium
> Ultimo aggiornamento: Aprile 2026
> Stato: 🟡 IN SVILUPPO — Analisi completata, asset mappati, preventivo v2 allineato al listino ufficiale

---

## 1. BRIEF

- **Tipo**: Sito Corporate B2B — Restyling completo Premium (Conversion-First)
- **Cliente**: CM Impianti S.r.l.
- **Referente**: [Nome cognome]
- **Email cliente**: sede@cmimpianti.info
- **Telefono**: +39 091 765 75 77
- **P.IVA**: 01912260856
- **Sede legale**: Via G.C. Siragusa 106, 93012 Gela (CL)
- **Sede operativa**: Via dei Cantieri 75, 90142 Palermo
- **Budget**: £5.100 / €5.967 (Sito Corporate — Listino Alvenco v2.0, sezione 1.1)
- **Scadenza**: [Data]
- **Acconto 50%**: [Sì/No — data ricezione]
- **Contratto firmato**: [Sì/No]

---

## 2. DESCRIZIONE BUSINESS CLIENTE

- **Settore**: Impiantistica e carpenteria navale/industriale, refitting navi
- **Zona operativa**: Palermo e Gela (Sicilia) — operatività nazionale e internazionale
- **Target clienti finali**: B2B — Cantieri navali (Fincantieri), armatori, società crocieristiche, committenti industria pesante
- **Punto di forza**: 30 anni esperienza, certificazioni Bureau Veritas + ISO + Welding, track record con MSC Crociere, Silversea, Cunard, FIAT, RFI
- **Competitor principali**: [da rilevare — altri contractor navali siciliani]

---

## 3. STACK TECNICO

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Hosting**: Vercel (free tier sufficiente per sito statico/ibrido)
- **CMS**: Sanity.io (free tier) — aggiornamento autonomo portfolio e news
- **Form contatti**: React Hook Form + Resend API (email transazionale)
- **Mappa**: Google Maps Embed API
- **Analytics**: Google Analytics 4 + Google Search Console
- **Dominio attuale**: cmimpianti.info (già registrato — aggiornare DNS su Vercel)
- **Performance target**: Lighthouse score ≥ 90 su tutte le metriche

---

## 4. SITEMAP — ARCHITETTURA PAGINE

```
cmimpianti.info/
├── /                            → Home (Hero + KPI + Servizi + Partner strip + CTA)
├── /chi-siamo                   → Storia, filosofia "cantiere flessibile", team, sedi
├── /servizi
│   ├── /impiantistica-navale    → Servizio + case study + certificazioni pertinenti + CTA
│   ├── /impiantistica-industriale → Servizio + case study + CTA
│   └── /refitting-navi          → Servizio + case study + CTA
├── /progetti                    → Portfolio filtrato per categoria
│   ├── /msc-crociere            → Case study: allungamento 251m→275m, 2006
│   ├── /silver-spirit           → Case study: allungamento + piping, 2018
│   ├── /queen-victoria          → Case study: restyling Fincantieri, 2017
│   ├── /noordam                 → Case study: refitting
│   └── /oleodotto-gela          → Case study: impiantistica industriale, 2008
├── /certificazioni              → Tutti i certificati con ente + anno
└── /contatti                    → Form qualificato + mappa doppia sede + recapiti
```

---

## 5. DESIGN & BRAND

- **Palette**: Dark industrial-premium — `#0A0F1E` navy + `#C9A84C` oro + `#E8EDF5` testo
- **Font**: Bebas Neue (headings) + Inter (body/UI)
- **Logo**: PNG 42KB — **richiedere SVG/AI al cliente** (bloccante)
- **Stile visivo**: Heavy industry meets maritime executive — fotografia autentica di cantiere

---

## 6. SEO & MARKETING

- **Keyword primarie**: "impiantistica navale Palermo", "refitting navi Sicilia", "carpenteria industriale Palermo"
- **Keyword long-tail**: "allungamento navi crociera Palermo", "tubazioni acciaio inox navali", "impianti piping navale Bureau Veritas"
- **Schema markup**: Organization + LocalBusiness + WebPage per ogni servizio
- **GA4**: sì — eventi conversione su form submit

---

## 7. FUNZIONALITÀ SPECIFICHE

- [ ] Hero con counter animato (30 anni, N progetti, N certificazioni, N partner)
- [ ] Form preventivo qualificato (nome, email, tipo progetto, paese, messaggio)
- [ ] Portfolio case study con galleria immagini autentiche
- [ ] Sezione partner con loghi (Fincantieri, MSC, FIAT, RFI, Silversea, Cunard, V.Ships)
- [ ] Certificazioni con nome ente + anno
- [ ] CTA sticky navbar (desktop) + bottone fisso bottom (mobile)
- [ ] Google Maps embed doppia sede (Palermo + Gela)
- [ ] WhatsApp click-to-chat
- [ ] Cookie banner GDPR compliant
- [ ] Sitemap XML + robots.txt
- [ ] Responsive mobile-first rigoroso

---

## 8. ASSET FOTOGRAFICI — MAPPA COMPLETA

> Analisi Aprile 2026. ✅ HQ (>100KB) | 🟡 MQ (30-100KB) | 🔶 LQ (<30KB) | ❌ Non accessibile

### Hero / Slide

| Status | Dim. | Label | URL |
|---|---|---|---|
| ✅ HQ | 480 KB | SLIDE-Refitting | https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-refitting-cm-impianti.jpg |
| ✅ HQ | 508 KB | SLIDE-Navale | https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-impianti-navale-cm-impianti.jpg |
| ✅ HQ | 390 KB | SLIDE-Industriale | https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-impianti-industriali-cm-impianti.jpg |
| ✅ HQ | 419 KB | **GALLERY-cantiere2 ⭐ HERO** | https://www.cmimpianti.info/wp-content/uploads/2021/03/Senza-titolo-2-1.jpg |
| ✅ HQ | 286 KB | GALLERY-cantiere1 | https://www.cmimpianti.info/wp-content/uploads/2021/03/Senza-titolo-3.jpg |

### Progetti Case Study

| Status | Dim. | Label | URL |
|---|---|---|---|
| ✅ HQ | 150 KB | PROJ-MSC-cover | https://www.cmimpianti.info/wp-content/uploads/2020/10/msc-seaside.jpg |
| ✅ HQ | 142 KB | PROJ-SilverSpirit-cover | https://www.cmimpianti.info/wp-content/uploads/2021/02/Silver-Spirit.jpg |
| ✅ HQ | 194 KB | PROJ-QueenVictoria-cover | https://www.cmimpianti.info/wp-content/uploads/2021/02/Queen-victoria.jpg |
| 🟡 MQ | 46 KB | PROJ-Noordam ⚠️ | https://www.cmimpianti.info/wp-content/uploads/2021/03/Noordam1.jpg |
| 🟡 MQ | 77 KB | PROJ-Oleodotto-cover | https://www.cmimpianti.info/wp-content/uploads/2021/02/Oleodotto-Gela2.jpg |

### Servizi e Logo

| Status | Dim. | Label | URL |
|---|---|---|---|
| ✅ HQ | 103 KB | SRV-tubazioni-nave | https://www.cmimpianti.info/wp-content/uploads/2021/02/tubi-nave-cmimpianti1.jpg |
| ✅ HQ | 101 KB | SRV-refitting | https://www.cmimpianti.info/wp-content/uploads/2021/02/refitting1.jpg |
| 🟡 MQ | 42 KB | LOGO PNG ⚠️ richiedere SVG | https://www.cmimpianti.info/wp-content/uploads/2021/02/logo-definitivo.png |

---

## 9. ANALISI SITO ATTUALE & STRATEGIA

> vedi analisi completa nelle versioni precedenti del file — sintetizzata qui

**11 criticità identificate**: design datato WP 2021, CTA sepolta, hero slider pesante, certificazioni JPEG anonime, portfolio minimale, mobile UX mediocre, SEO zero, social rotti, copyright 2021, velocità Core Web Vitals bassa.

**Strategia nuovo sito**: posizionamento B2B Industrial-Executive, lead gen above the fold, case study con dati tecnici reali, trust architecture certificazioni, stack Next.js 15 performante, SEO strutturato per keyword navali.

---

## 10. PREVENTIVO — LISTINO ALVENCO v2.0

> ⚠️ Questo è il preventivo **v2** allineato al listino ufficiale £/€.
> Il preventivo v1 (€5.350, solo EUR) è da considerarsi **sostituito**.
> File documento: `Preventivo_CM-Impianti_v2_Alvenco_2026.docx`

### Valuta

| | GBP (£) primario | EUR (€) indicativo |
|---|---|---|
| **Totale progetto** | £5.100 | €5.967 |
| **Acconto alla firma (50%)** | £2.550 | €2.984 |
| **2ª rata — design approvato (25%)** | £1.275 | €1.492 |
| **3ª rata — go-live (25%)** | £1.275 | €1.491 |

> Tasso di cambio: £1 = €1.17 (Aprile 2026). Fatturazione in EUR al cambio del giorno della firma.

### Voci di progetto

| Voce | £ GBP | € EUR |
|---|---|---|
| Discovery & Strategy | £510 | €597 |
| UI Design Figma | £700 | €819 |
| Sviluppo Next.js 15 (8 pag + 5 case study) | £2.040 | €2.387 |
| CMS Sanity.io + training | £340 | €398 |
| SEO On-Page + GA4 | £260 | €304 |
| Asset Migration + stock navale | £170 | €199 |
| Case Study 5 progetti | £420 | €491 |
| Deploy & DNS Vercel | £130 | €152 |
| **TOTALE** | **£5.100** | **€5.967** |

### Opzionali

| Voce | £ | € |
|---|---|---|
| Traduzione sito in inglese | £510 | €597 |
| Blog SEO + 3 articoli | £385 | €451 |
| Google Ads setup | £300 | €351 |
| Fotografia professionale in cantiere | Su richiesta | Su richiesta |

### Manutenzione (Listino v2.0 — Piano Basic ⭐ consigliato)

| Piano | £/mese | €/mese | Include |
|---|---|---|---|
| Starter | £90 | €105 | Backup, uptime, CMS updates, email 48h |
| **Basic ⭐** | **£160** | **€187** | Starter + 1h modifiche/mese + report mensile |
| Growth | £280 | €328 | Basic + 3h/mese + SEO report + supporto 24h |
| Agency | £500 | €585 | Growth + 6h/mese + feature + consulenza + SLA 4h |

---

## 11. RISORSE

- **Repository GitHub**: `alessandro2506/cm-impianti-web` (creato)
- **Dominio**: cmimpianti.info (DNS da aggiornare al go-live)
- **Credenziali**: NON in questo file — usare 1Password

---

## 12. PROBLEMI / BLOCCHI 🔴

| # | Problema | Fix | Priorità |
|---|---|---|---|
| 1 | Logo solo PNG 42KB | Richiedere SVG/AI al cliente | 🔴 BLOCCANTE |
| 2 | Foto GALLERY copyright non confermato | Conferma proprietà al cliente | 🔴 BLOCCANTE |
| 3 | Noordam: cover 46KB | Richiedere hi-res o stock navale | 🟡 Media |
| 4 | Oleodotto: solo thumbnail 380x255 | Richiedere originali | 🟡 Media |
| 5 | Social media link rotti sul vecchio sito | Verificare profili attivi | 🟡 Media |

---

## 13. TODO — PROSSIMI PASSI

### Commerciale
- [ ] Inviare preventivo **v2** al cliente (`Preventivo_CM-Impianti_v2_Alvenco_2026.docx`)
- [ ] Raccogliere firma contratto + acconto £2.550 (€2.984)

### Asset da richiedere al cliente 🔴
- [ ] **Logo SVG/AI** — bloccante
- [ ] Conferma copyright foto GALLERY
- [ ] Testi definitivi "Chi Siamo"
- [ ] URL profili social attivi
- [ ] Foto Oleodotto Gela originali hi-res
- [ ] Foto Noordam hi-res

### Sviluppo — completato ✅
- [x] Repository GitHub `alessandro2506/cm-impianti-web`
- [x] Next.js 15 + Tailwind v4 + TypeScript
- [x] 8 pagine + 5 case study, build 0 errori
- [x] Navbar sticky, Footer, CookieBanner GDPR, KpiCounter animato
- [x] Form contatti React Hook Form + Zod + Resend API route
- [x] ScrollToTop SVG wave, InfiniteMarquee partner, enterprise design reset
- [x] **Design System v2** — navy/gold token CSS, useInView hook, Navbar wordmark + gold outline CTA + 2-line hamburger, Hero 2-col asimmetrico, KPI integrati hero, magazine grid servizi, masonry 2+3 progetti, CTA 2-col con immagine + noise texture, InfiniteMarquee pill gold, Footer gold/navy, CtaButton gold, SectionTitle gold — build 0 errori, pushato su main
- [x] **Design fix v2.1** — navbar overlap fix (layout.tsx pt-20 lg:pt-24), logo glyph gold, hero readability mobile, CtaButton px-8/py-3.5/text-15px Alvenco-level, hamburger 2px visibile, footer grid-cols-2 mobile, mobile menu redesign con nav header + WA button, partner logos SVG inline monocromatici (10 partner), KpiCounter observer threshold:0 rootMargin:-100px, pt-32→pt-12/16 su 6 pagine interne

### Sviluppo — da completare
- [ ] Setup Sanity.io CMS
- [ ] `app/robots.ts` + `app/sitemap.ts`
- [ ] JSON-LD schema markup in `layout.tsx`
- [ ] GA4 script (post consenso cookie)
- [ ] Configurare `RESEND_API_KEY` su Vercel
- [ ] Logo SVG definitivo
- [ ] Immagini hi-res in `/public/images/`

### Go-live
- [ ] Test cross-browser + mobile
- [ ] Lighthouse ≥ 90
- [ ] Deploy Vercel + DNS update
- [ ] Redirect 301 WP → Next.js
- [ ] Handover credenziali

---

## 14. CONSEGNA

- **Data go-live**: [Data]
- **Saldo ricevuto**: [Sì/No]
- **Manutenzione**: [Sì — piano Basic £160/mese (€187) / No]
- **Handover completato**: [Sì/No]

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | File creato — struttura iniziale da template. |
| Aprile 2026 | Analisi completa www.cmimpianti.info — Gap Analysis 11 criticità, asset, strategia. |
| Aprile 2026 | Refactoring completo — brief con dati reali, stack confermato, sitemap, asset 30 URL verificati, preventivo v1 €5.350. |
| Aprile 2026 | Scaffold sito completato — Next.js 15, 17 route, 0 errori build, enterprise design reset. |
| Aprile 2026 | **Preventivo v2** — allineato a Listino Alvenco v2.0 (£/€ doppia valuta). Totale £5.100 / €5.967. Manutenzione Piano Basic £160/€187 al mese. Sostituisce il preventivo v1 (€5.350, solo EUR, sotto floor Corporate). File: `Preventivo_CM-Impianti_v2_Alvenco_2026.docx`. |
| Aprile 2026 | **Design System v2** — Restyling completo premium B2B industrial. Palette gold/navy CSS tokens, useInView reveal hook, Navbar wordmark HTML, Hero 2-col asimmetrico (55/45%), KPI gold integrati, magazine grid servizi, masonry 2+3 progetti, InfiniteMarquee pill, CTA 2-col + noise texture, Footer/CtaButton/SectionTitle gold. Build 0 errori, push `feccee7` su main. |
| Aprile 2026 | **Design fix v2.1** — 10 fix/upgrade chirurgici: navbar overlap (layout.tsx), gold glyph logo Navbar+Footer, hero readability mobile, CtaButton Alvenco-level, hamburger 2px, footer 2-col mobile, mobile menu redesign, partner logos SVG inline monocromatici (10 partner typed), KpiCounter observer fix, pt-32→pt-12/16 su 6 pagine interne. Build 0 errori, commit `a947af7` su main. |
