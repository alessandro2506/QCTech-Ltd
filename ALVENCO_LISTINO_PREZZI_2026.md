# ALVENCO_LISTINO_PREZZI_2026.md — Listino Prezzi & Piani Ufficiali
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: 25 Maggio 2026
> Tasso di cambio usato: £1 = €1.17 (Aprile 2026)
> Versione: 2.2 — Aggiunta Sezione 1B Web App & Portali Custom con benchmark UK 2025/2026. Aggiornato benchmark mercato. Aggiunte Sezioni 4B e 4C manutenzione Web App.

---

## NOTA STRATEGICA — PERCHÉ QUESTO DOCUMENTO ESISTE

Il listino precedente (v1.0 in `ALVENCO_AZIENDA.md`) presentava tre criticità strutturali:

1. **Disallineamento valuta**: preventivi italiani in €, listino in £ — necessaria doppia valuta su tutto.
2. **Confusione prodotti**: "Piano Basic £49/mese" era un abbonamento SaaS, non manutenzione sito — prodotti diversi con nomi identici.
3. **Assenza di benchmark competitivo**: prezzi non ancorati al mercato UK/IT — rischio di sotto/sovra-prezzare.

Questo documento risolve tutti e tre i problemi ed è il **riferimento unico** per tutti i preventivi futuri.

---

## ANALISI COMPETITIVA — BENCHMARK 2025/2026

### Mercato UK — Range di mercato osservati

| Categoria | Budget (freelance/low) | Mid-Market (agency) | Premium (senior agency) |
|---|---|---|---|
| Landing Page (1 pag) | £500–£1.200 | £1.200–£2.500 | £2.500–£5.000 |
| Sito Vetrina 5 pag | £1.200–£2.500 | £2.500–£5.000 | £5.000–£10.000 |
| Sito Corporate | £3.000–£8.000 | £8.000–£25.000 | £25.000–£100.000+ |
| E-Commerce (base) | £2.000–£5.000 | £5.000–£15.000 | £15.000–£50.000+ |
| **Web App / Portale Custom** | **£15.000–£30.000** | **£30.000–£75.000** | **£75.000–£150.000+** |
| **SaaS B2B Multi-tenant** | **£25.000–£50.000** | **£50.000–£120.000** | **£120.000–£300.000+** |
| App Mobile (cross-platform) | £8.000–£20.000 | £20.000–£60.000 | £60.000–£150.000+ |
| Tariffa oraria sviluppo | £25–£50 | £50–£100 | £100–£150 (London) |
| Tariffa giornaliera agenzia (blended) | — | £525–£700/giorno | £700–£1.200/giorno |
| Manutenzione sito web | £50–£150/mese | £150–£500/mese | £500+/mese |
| Manutenzione Web App | £200–£400/mese | £400–£800/mese | £800–£2.000+/mese |
| SEO mensile | £500–£750/mese | £750–£2.000/mese | £2.000–£5.000+/mese |
| Social Media Mgmt | £250–£500/mese | £600–£1.500/mese | £1.500–£3.000+/mese |

**Fonte**: ProfileTree, NumenTechnology, GoldenEggMarketing, Developers.dev, EliteITTeam, HelloSocial, YsobelleEdwards, RedEagle, Patternica, MakeItSimple, Akoode, Zao, Noloco — analisi Aprile–Maggio 2026.

### Mercato IT — Range di mercato osservati

| Categoria | Budget | Mid-Market | Premium/Corporate |
|---|---|---|---|
| Landing Page | €400–€1.000 | €1.000–€2.500 | €2.500–€5.000 |
| Sito Vetrina | €1.000–€2.500 | €2.500–€5.000 | €5.000–€12.000 |
| Sito Corporate | €3.000–€8.000 | €8.000–€20.000 | €20.000–€60.000 |
| E-Commerce | €2.000–€6.000 | €6.000–€18.000 | €18.000–€50.000+ |
| **Web App / Portale Custom** | **€12.000–€28.000** | **€28.000–€70.000** | **€70.000–€140.000+** |
| App Mobile (cross-platform) | €6.000–€15.000 | €15.000–€50.000 | €50.000–€120.000+ |
| Tariffa oraria sviluppo | €25–€50 | €50–€90 | €90–€150 |
| Manutenzione sito | €50–€120/mese | €120–€350/mese | €350+/mese |
| Manutenzione Web App | €180–€380/mese | €380–€750/mese | €750–€1.800+/mese |

**Fonte**: MiraiAgency, LVDesign, InnovativeWebAgency, CssFounder — analisi Aprile 2026.

### Posizionamento Alvenco — Quadrante Strategico

```
PREMIUM  ████████████████████
         |                  |
HIGH     |   ← ALVENCO →   |  Target: Mid-Market PREMIUM
         |   (Hertfordshire)|  NON London premium
MID      |                  |  NON low-cost freelance
         |                  |
BUDGET   ████████████████████
          UK Regional    London
```

**Positioning**: Alvenco si posiziona nel quadrante **Mid-Market Premium UK Regional** — qualità da senior agency (Next.js, AI integration, UX conversion-focused) a prezzi da studio indipendente di fascia alta. Vantaggio competitivo: stack tecnico moderno + competenza AI + operatività bilingue UK/IT.

### Nota critica sul pricing Web App vs mercato

**I prezzi di sviluppo Web App nel mercato UK partono da £15.000 per un MVP semplice e raggiungono £75.000–£150.000 per portali mid-market con RLS, storage documentale e ruoli multipli.** Prodotti enterprise (finance, health, compliance) arrivano facilmente a £150.000–£300.000+. Vittorio Gragnaniello ha correttamente osservato che il mercato arriva a £100.000 — confermato dalla ricerca: è il range mid per portali custom complessi.

Il preventivo Studio Fantauzzo (£4.800 sviluppo) è deliberatamente sotto mercato come **scelta strategica di lancio**: primo cliente di questa tipologia per Alvenco, serve per costruire portfolio e referenza verificabile. Non è il prezzo standard — dai prossimi clienti applicare il range corretto (Sezione 1B).

**Regola**: non replicare mai un prezzo di lancio su un secondo cliente dello stesso tipo senza autorizzazione esplicita di Alex.

---

## SEZIONE 1B — WEB APP & PORTALI CUSTOM

> Prodotti con autenticazione, ruoli utente, database, logica custom, storage o integrazioni API.
> SEMPRE distinti dai siti web (Sezione 1) — non applicare mai i prezzi siti web a prodotti di questa categoria.
> **Benchmark basato su ricerca di mercato UK 2025/2026** — fonti: RedEagle, MakeItSimple, Patternica, Akoode, Zao, Noloco, NumenTechnology (Aprile–Maggio 2026).

### 1B.1 — Classificazione per Complessità e Prezzi

| Livello | Caratteristiche | Range UK mercato | Prezzo Alvenco £ | Prezzo Alvenco € |
|---|---|---|---|---|
| **MVP / Tool Interno** | Auth base, 1 ruolo, CRUD semplice, nessuna integrazione. Es: admin panel, form avanzato con DB | £15.000–£30.000 | **£8.000–£15.000** | **€9.360–€17.550** |
| **Portale Mid** | Multi-ruolo, RLS, storage documentale, inviti email, log audit. Es: portale clienti, document management | £25.000–£75.000 | **£15.000–£35.000** | **€17.550–€40.950** |
| **Web App Complessa** | Integrazioni terze parti, notifiche real-time, dashboard analytics, workflow automatizzati, pagamenti | £40.000–£120.000 | **£28.000–£65.000** | **€32.760–€76.050** |
| **SaaS B2B** | Multi-tenant completo, subscription billing, API pubblica, white-label, onboarding automatizzato | £50.000–£150.000 | **£40.000–£90.000** | **€46.800–€105.300** |
| **Enterprise / Regolamentato** | Compliance settoriale (finance, legal, health), SLA, HA, audit trail certificato, team dedicato | £80.000–£300.000+ | **Da preventivare** | **Da preventivare** |

> **Posizionamento Alvenco Web App**: 40–60% sotto i competitor mid-market UK a parità di stack tecnico. Il differenziale non è il prezzo basso — è la value proposition: Next.js 15 + Supabase RLS + Cloudflare R2 + AI integration optionale + delivery veloce tramite Cursor/Claude.

### 1B.2 — Add-on tipici Web App

| Add-on | Prezzo £ | Prezzo € |
|---|---|---|
| Integrazione AI (chatbot, classificazione, suggerimenti) | £3.000–£12.000 | €3.510–€14.040 |
| Notifiche real-time (WebSocket / SSE) | £1.500–£4.000 | €1.755–€4.680 |
| Export PDF / report automatizzati | £800–£2.500 | €936–€2.925 |
| Integrazione pagamenti (Stripe) | £1.200–£3.000 | €1.404–€3.510 |
| Autenticazione social (Google, Microsoft SSO) | £600–£1.500 | €702–€1.755 |
| Dashboard analytics custom | £2.000–£6.000 | €2.340–€7.020 |
| Onboarding dati (migrazione / inserimento bulk) | £200–£1.500 | €234–€1.755 |
| App mobile companion (React Native) | vedi Sezione 2 | vedi Sezione 2 |

### 1B.3 — Struttura pagamenti Web App

| Valore progetto | Struttura |
|---|---|
| £8.000–£20.000 | 50% firma + 50% go-live |
| £20.000–£50.000 | 40% firma + 30% mid-milestone + 30% go-live |
| £50.000+ | 35% firma + 25% mid-milestone 1 + 25% mid-milestone 2 + 15% go-live |

### 1B.4 — Nota su Studio Fantauzzo (riferimento interno)

Il preventivo Studio Fantauzzo (£4.800 sviluppo) è classificato come **eccezione strategica di lancio** — si tratta di un Portale Mid che nel listino standard vale £15.000–£35.000. Il delta è giustificato da:
- Primo cliente di questa tipologia per Alvenco — valore portfolio/referenza
- Scope ridotto rispetto a un portale mid pieno (nessuna integrazione esterna, UI lineare, ~300 utenti)
- Onboarding manuale Alvenco incluso (costo assorbito nel progetto)

**Non replicare questo pricing su altri clienti senza autorizzazione esplicita di Alex.**

---

## SEZIONE 1 — SVILUPPO SITI WEB

> Tutti i prezzi in GBP (£) con equivalente EUR (€) a cambio £1 = €1.17.
> IVA non inclusa. Pagamento standard: 50% alla firma, 50% al go-live.
> Per Web App e portali gestionali → vedere **Sezione 1B**.

### 1.1 — Sviluppo Web: Prezzi Base

| Prodotto | Descrizione | Da £ | A £ | Da € | A € |
|---|---|---|---|---|---|
| **Landing Page** | 1 pagina, hero + sezioni + form + CTA. Responsive, SEO base. | £700 | £1.800 | €820 | €2.100 |
| **Sito Vetrina** | 3–5 pagine, design custom, form contatti, SEO on-page, GA4. | £1.400 | £3.500 | €1.640 | €4.100 |
| **Sito Vetrina Pro** | 6–10 pagine, CMS incluso, blog, mappa, multi-sezione. | £2.800 | £5.500 | €3.280 | €6.440 |
| **Sito Corporate** | 10–20 pagine, architettura scalabile, UI/UX premium, CMS avanzato, SEO strutturato. | £5.000 | £15.000 | €5.850 | €17.550 |
| **Sito Corporate Premium** | 20+ pagine, design system, integrazioni CRM/ERP, multilingua, performance Lighthouse ≥ 90. | £12.000 | £28.000 | €14.040 | €32.760 |
| **E-Commerce Base** | Fino a 100 prodotti, Shopify/WooCommerce, pagamenti, spedizioni. | £3.200 | £7.000 | €3.745 | €8.190 |
| **E-Commerce Advanced** | 100–1.000 prodotti, custom design, filtri avanzati, gestione ordini, CRM. | £6.500 | £14.000 | €7.605 | €16.380 |
| **E-Commerce Enterprise** | 1.000+ prodotti, integrazioni complesse, ERP/PIM, performance ottimizzata. | £13.000 | £35.000 | €15.210 | €40.950 |
| **Web App / Portale** | → Vedi **Sezione 1B** — pricing e classificazione dedicati | — | — | — | — |

### 1.2 — Stack Tecnico per Fascia

| Fascia | Frontend | Backend | Hosting | CMS |
|---|---|---|---|---|
| Vetrina / Landing | Next.js / HTML+Tailwind | — / Node.js | Vercel | Sanity.io (free) |
| Corporate | Next.js 15 App Router | Node.js + Supabase | Vercel / Railway | Sanity.io / Contentful |
| E-Commerce | Next.js + Shopify Storefront API | Node.js + Stripe | Vercel | Shopify / WooCommerce |
| Web App / Portale | Next.js 15 App Router | Node.js + Supabase RLS + R2 | Vercel | Custom admin panel |
| App Mobile | React Native Expo | Node.js + Supabase/Firebase | Railway | Admin dashboard custom |

---

## SEZIONE 2 — SVILUPPO APP MOBILE

| Prodotto | Descrizione | Da £ | A £ | Da € | A € |
|---|---|---|---|---|---|
| **App MVP** | Cross-platform (React Native), 3–5 schermate core, backend base, deploy TestFlight/Play. | £6.500 | £12.000 | €7.605 | €14.040 |
| **App Standard** | Cross-platform, 8–15 schermate, auth (email + social), notifiche push, geoloc, API backend. | £12.000 | £22.000 | €14.040 | €25.740 |
| **App Advanced** | Cross-platform, 15–30 schermate, AI integration, pagamenti in-app, dashboard admin web. | £20.000 | £45.000 | €23.400 | €52.650 |
| **App Enterprise** | Multi-piattaforma, compliance, integrazioni enterprise, SLA, team dedicato. | £40.000 | £120.000+ | €46.800 | €140.400+ |

> App mobile: manutenzione annuale standard = **15–20% del costo di sviluppo**.

---

## SEZIONE 3 — SERVIZI AGGIUNTIVI (ADD-ON)

| Servizio | Descrizione | Prezzo £ | Prezzo € |
|---|---|---|---|
| **UI/UX Design** | Wireframe + mockup Figma completo (fino a 10 schermate/pagine) | £800–£2.000 | €936–€2.340 |
| **Brand Identity Base** | Logo + palette + tipografia + brand guide PDF | £600–£1.200 | €702–€1.404 |
| **Brand Identity Full** | Tutto il base + declinazioni (biglietti, carta intestata, social template) | £1.400–£3.000 | €1.638–€3.510 |
| **SEO On-Page** | Audit + ottimizzazione meta/schema/sitemap + GA4 + Search Console (one-time) | £400–£900 | €468–€1.053 |
| **Copywriting Web** | Testi professionali per sito (per pagina) | £80–£200 | €94–€234 |
| **Traduzione EN↔IT** | Traduzione + localizzazione (per pagina) | £60–£150 | €70–€176 |
| **Integrazione AI** | Chatbot, classificazione contenuti, personalizzazione, analisi predittiva (custom) | £1.200–£8.000+ | €1.404–€9.360+ |
| **Performance Audit** | Lighthouse + Core Web Vitals + ottimizzazione immagini + caching | £300–£600 | €351–€702 |
| **Setup Google Ads** | Struttura campagna + copy annunci + targeting + configurazione iniziale | £400–£700 | €468–€819 |
| **Fotografia prodotto/cantiere** | Post-produzione base inclusa. Trasferta esclusa (da preventivare). | £150–£500/giorno | €176–€585/giorno |
| **Video Aziendale** | Regia + montaggio video istituzionale o prodotto (1–3 min) | £800–£3.000 | €936–€3.510 |
| **Migrazione sito** | Migrazione da vecchio CMS a nuovo stack, redirect, test | £400–£1.200 | €468–€1.404 |

---

## SEZIONE 4 — PIANI DI MANUTENZIONE SITO WEB

> Questi piani si applicano ai **siti web** consegnati da Alvenco (Landing, Vetrina, Corporate, E-Commerce).
> Per Web App e portali → vedere **Sezione 4B**.

| Piano | Prezzo £/mese | Prezzo €/mese | Include |
|---|---|---|---|
| **Starter** | £90/mese | €105/mese | Backup settimanale, uptime monitoring, aggiornamenti CMS/plugin, supporto email 48h |
| **Basic** | £160/mese | €187/mese | Tutto Starter + 1h modifiche/mese, report mensile, SSL check, ottimizzazione base |
| **Growth** | £280/mese | €328/mese | Tutto Basic + 3h modifiche/mese, SEO report, A/B testing minore, priorità supporto 24h |
| **Agency** | £500/mese | €585/mese | Tutto Growth + 6h modifiche/mese, sviluppo nuove feature minori, consulenza strategica mensile, SLA 4h |

> **Nota**: revisioni extra fuori piano — £85/ora (junior), £130/ora (senior).

---

## SEZIONE 4B — PIANI DI MANUTENZIONE WEB APP / PORTALI DIGITALI

> Questi piani si applicano esclusivamente a **Web App custom, portali gestionali, dashboard multi-utente** sviluppati da Alvenco.
> **MAI** applicare i piani Sezione 4 (siti web) a prodotti con autenticazione, RLS, storage documentale, ruoli multipli o dati sensibili di terzi.
>
> **Benchmark mercato UK 2025/2026**: manutenzione Web App da agenzie UK parte da £200–£400/mese per prodotti mid, £800–£2.000+/mese per enterprise. Alvenco si posiziona nella fascia competitiva mid con qualità senior.

| Piano | Prezzo £/mese | Prezzo €/mese | Include |
|---|---|---|---|
| **Web App Starter** | £220/mese | €257/mese | Monitoring 24/7, backup giornaliero DB+storage, security patches dipendenze npm, supporto email 24h, 1h fix/mese |
| **Web App Growth** | £380/mese | €445/mese | Tutto Starter + 3h fix/mese, log audit mensile, GDPR compliance check, priorità risposta 4h per critical, report mensile |
| **Web App Agency** | £650/mese | €761/mese | Tutto Growth + 6h fix/mese, SLA 2h critical, report sicurezza mensile, account manager dedicato |

> **Nota**: interventi extra fuori piano — £85/ora (junior), £130/ora (senior).

---

## SEZIONE 4C — PRICING INFRASTRUTTURA WEB APP (USO INTERNO — NON DIVULGARE)

> Costi reali Alvenco per Web App multi-tenant con storage documentale.
> Al cliente si espone SOLO la voce aggregata: **"Gestione infrastruttura e archiviazione digitale sicura"** senza dettaglio provider, nomi tecnici o breakdown interno.

| Voce | Costo reale/mese | Prezzo cliente/mese | Margine |
|---|---|---|---|
| DB + Auth hosted (fino a 1.000 utenti) | £20 | £40 | 100% |
| Storage documentale scalabile (pay-per-use, zero egress) | £4 worst-case | £15 | ~275% |
| Hosting applicazione (CDN globale) | £0 | — incluso in manutenzione | — |
| **Totale infrastruttura** | **£24/mese** | **£55/mese** | **~130%** |

**Regola pricing storage**: applicare sempre il doppio del costo al picco del piano superiore prevedibile, non del costo attuale. Lo storage è infinitamente scalabile pay-per-use — nessun tier fisso, nessuna migrazione necessaria.

**Scenario storage documentale (100 clienti, PDF 3–12 MB):**
- Anno 1 realistico: ~70 GB → ~£1/mese costo reale
- Anno 2: ~140 GB → ~£2/mese
- Anno 3 / worst-case: ~210 GB → ~£4/mese
- Il prezzo £15/mese al cliente copre ampiamente qualsiasi scenario fino agli anni futuri

---

## SEZIONE 5 — PIANI ABBONAMENTO SAAS / PRODOTTI DIGITALI PROPRIETARI

> Questi piani si applicano a **prodotti SaaS Alvenco** (es. CivicAlert dashboard B2G, futuri prodotti proprietari).
> Distinti dalla manutenzione siti (Sezione 4) e dalla manutenzione Web App (Sezione 4B).

| Piano | Prezzo £/mese | Prezzo €/mese | Target | Include |
|---|---|---|---|---|
| **Free** | £0 | €0 | Developer / test | Accesso base, rate limiting, branding Alvenco |
| **Starter** | £49/mese | €57/mese | Freelance / microimprese | 1 progetto, supporto email, feature core |
| **Growth** | £99/mese | €116/mese | PMI / startup | 5 progetti, API access, priority support, analytics base |
| **Business** | £199/mese | €233/mese | Aziende in crescita | Progetti illimitati, white-label light, integrazioni, dashboard avanzata |
| **Agency / Enterprise** | £349/mese | €408/mese | Agenzie / enti | White-label completo, multi-tenant, SLA, account manager dedicato |

---

## SEZIONE 6 — PIANI MARKETING DIGITALE (RETAINER MENSILE)

| Piano | Prezzo £/mese | Prezzo €/mese | Include |
|---|---|---|---|
| **Social Basic** | £300/mese | €351/mese | 2 piattaforme, 8 post/mese, grafiche base, report mensile |
| **Social Pro** | £650/mese | €761/mese | 3 piattaforme, 16 post/mese, grafiche custom, stories/reel, community management base |
| **Social Full** | £1.200/mese | €1.404/mese | 4 piattaforme, 24 post/mese, video/reels, strategia contenuti, community management full, report KPI |
| **SEO Base** | £500/mese | €585/mese | Audit iniziale, 4 keyword target, ottimizzazione on-page mensile, report ranking |
| **SEO Pro** | £900/mese | €1.053/mese | 10+ keyword, link building, content SEO (2 articoli/mese), technical SEO continuativo |
| **Growth Marketing** | £1.500/mese | €1.755/mese | SEO Pro + Social Pro + Google Ads management + report integrato |

---

## SEZIONE 7 — TARIFFE ORARIE & CONSULENZA

| Servizio | £/ora | €/ora | Note |
|---|---|---|---|
| **Sviluppo Frontend** | £70 | €82 | Next.js, React, Tailwind, mobile |
| **Sviluppo Backend** | £80 | €94 | Node.js, API, database, integrazioni |
| **Sviluppo Full-Stack** | £90 | €105 | End-to-end |
| **AI / LLM Integration** | £110 | €129 | Prompt engineering, fine-tuning, RAG, agenti |
| **UI/UX Design** | £65 | €76 | Figma, prototyping, design system |
| **Consulenza Strategica** | £120 | €140 | Business strategy, digital roadmap, C-level advisory |
| **Project Management** | £60 | €70 | Coordinamento, milestone tracking, client reporting |

> Pacchetti ore prepagati (sconto progressivo):
> - 10 ore: prezzo pieno
> - 20 ore: **5% sconto**
> - 40 ore: **10% sconto**
> - 80+ ore: **15% sconto** (da concordare)

---

## SEZIONE 8 — CONDIZIONI GENERALI STANDARD

### Modalità di Pagamento — Siti Web
- **Progetti < £5.000**: 50% firma + 50% go-live
- **Progetti £5.000–£15.000**: 50% firma + 25% mid-milestone + 25% go-live
- **Progetti > £15.000**: 40% firma + 30% mid-milestone + 20% UAT + 10% go-live
- **Retainer mensili**: fatturazione anticipata il 1° del mese

### Modalità di Pagamento — Web App (vedi anche Sezione 1B.3)
- **£8.000–£20.000**: 50% firma + 50% go-live
- **£20.000–£50.000**: 40% firma + 30% mid-milestone + 30% go-live
- **£50.000+**: 35% firma + 25% mid-milestone 1 + 25% mid-milestone 2 + 15% go-live

### Revisioni Incluse
- Siti fino a £3.500: 2 round
- Siti £3.500–£10.000: 3 round
- Siti > £10.000 / Web App / App: 4 round + UAT session
- Extra: £85/ora (junior) — £130/ora (senior)

### Validità Preventivi
- **30 giorni** dalla data di emissione

### Proprietà Intellettuale
- Il codice e gli asset rimangono di proprietà Alvenco Ltd — al cliente è concessa **licenza d'uso** per tutta la durata del contratto attivo. La licenza decade alla cessazione o mancato rinnovo.

### Valuta & Tasse
- Listino primario: **GBP (£)** — mercato UK
- **Importo vincolante SEMPRE in £** — vedi ALVENCO_TEMPLATE_CONTRATTI_RULES.md Sezione 4 per la policy completa
- Clienti italiani/UE: bonifico SEPA su IBAN Wise (€) — il cliente paga in €, Alvenco converte in £ quando vuole al tasso interbancario reale
- L'equivalente € nei preventivi è sempre orientativo, **mai vincolante contrattualmente**
- IVA UK (VAT): esenzione HMRC threshold — vedi clausola standard contratti
- IVA IT: il cliente gestisce autofattura / reverse charge se applicabile

---

## SEZIONE 9 — CONFRONTO VS COMPETITOR DIRETTI

| Categoria | Competitor UK (mid-market) | Competitor IT (mid-market) | **Alvenco** | Vantaggio |
|---|---|---|---|---|
| Sito Vetrina 5 pag | £2.500–£5.000 | €2.000–€5.000 | £1.400–£3.500 | Prezzo competitivo, stack superiore |
| Sito Corporate | £8.000–£25.000 | €6.000–€20.000 | £5.000–£15.000 | 20–30% sotto mid-market con qualità senior |
| Web App Portale Mid | £25.000–£75.000 | €25.000–€70.000 | £15.000–£35.000 | 40–55% sotto mid-market con stack moderno |
| SaaS B2B | £50.000–£150.000 | €45.000–€140.000 | £40.000–£90.000 | ~35% sotto, vantaggio delivery AI-assisted |
| App Mobile MVP | £15.000–£30.000 | €12.000–€25.000 | £6.500–£12.000 | Fino al 50% più economico, React Native cross-platform |
| Tariffa oraria | £70–£120 | €60–€100 | £70–£110 | Allineato — differenziale su AI e stack moderno |
| Manutenzione sito base | £100–£200/mese | €80–€180/mese | £90–£160/mese | Competitivo + trasparenza ore incluse |
| Manutenzione Web App | £400–£800/mese | €380–€750/mese | £220–£380/mese | 40–50% sotto mercato — entry point strategico |
| SEO mensile | £750–£1.500/mese | €600–€1.200/mese | £500–£900/mese | Entry point più basso, scalabile |

---

## SEZIONE 10 — NOTE SUI PREVENTIVI ESISTENTI

### CM-Impianti (Aprile 2026 — €5.350)
- Equivalente ~£4.573 — leggermente sotto il floor Corporate £5.000
- Accettabile: cliente di lancio, portfolio building, compensato da manutenzione €120/mese
- Da allineare al listino v2.x nei prossimi preventivi italiani

### Piano Manutenzione CM-Impianti (€120/mese)
- Equivalente ~£103/mese — tra Starter £90 e Basic £160
- Corretto per il prodotto (sito vetrina), ma nei prossimi preventivi usare tier nominali espliciti

### Studio Fantauzzo (Maggio 2026 — £4.800 sviluppo)
- Portale Mid che vale £15.000–£35.000 nel listino standard
- **Eccezione strategica di lancio** documentata — NON replicare su altri clienti (vedi Sezione 1B.4)
- Manutenzione Web App Growth £380/mese + infrastruttura £55/mese = £435/mese totale ricorrente

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | v2.0 — Listino completo basato su analisi competitiva UK + IT. Sostituisce listino v1.0 in ALVENCO_AZIENDA.md. Doppia valuta £/€, separazione manutenzione siti vs SaaS, tariffe orarie, piani marketing, benchmark. |
| 25 Maggio 2026 | v2.1 — Aggiunta Sezione 4B Piani Manutenzione Web App (Starter £220, Growth £380, Agency £650). Aggiunta Sezione 4C pricing infrastruttura Web App uso interno. |
| 25 Maggio 2026 | v2.2 — Ricerca di mercato UK 2025/2026 su Web App custom (fonti: RedEagle, MakeItSimple, Patternica, Akoode, Zao, Noloco, NumenTechnology). Aggiunta Sezione 1B completa: 5 livelli complessità Web App, prezzi Alvenco, add-on, struttura pagamenti, nota Fantauzzo. Benchmark aggiornato con righe Web App e SaaS. Tariffa giornaliera agenzia aggiunta. Nota critica positioning Web App vs mercato (Vittorio aveva ragione: £100k è mid-market confirmed). Sezione confronto competitor aggiornata con righe Web App. Sezione 8 aggiornata con struttura pagamenti Web App. Sezione 10 aggiornata con nota Fantauzzo. |
