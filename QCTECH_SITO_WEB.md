# QCTECH_SITO_WEB.md — Sito Web qc-tech.co.uk
> Rinominato da ALVENCO_SITO_WEB.md — 4 Giugno 2026
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: 15 Giugno 2026
> Repository: https://github.com/alessandro2506/QCTech-Ltd-site (origin Vercel) | https://github.com/QCTech-Ltd/QCTech-Ltd-site (org)

---

> ✅ SITO LIVE su qc-tech.co.uk — migrazione completata.

---

## 1. STACK TECNICO

| Campo | Valore |
|---|---|
| Framework | Next.js 16 (App Router) |
| React | 19 |
| i18n | next-intl 4.x — routing `app/[locale]/...` |
| Styling | Tailwind CSS 4 |
| Animazioni | Framer Motion 12 |
| Email | Nodemailer + SMTP |
| Deploy | Vercel — auto-deploy su push main |
| Dominio | qc-tech.co.uk ✅ Live |
| URL produzione | https://www.qc-tech.co.uk |

---

## 2. STRUTTURA PAGINE

| Pagina | Path | Stato |
|---|---|---|
| Home | `app/[locale]/page.tsx` | ✅ |
| Servizi | `app/[locale]/servizi/page.tsx` | ✅ |
| Vision/About | `app/[locale]/vision/page.tsx` | ✅ |
| Contatti | `app/[locale]/contatti/page.tsx` | ✅ |
| FAQ | `app/[locale]/faq/page.tsx` | ✅ |

---

## 3. VARIABILI AMBIENTE (Vercel + .env.local)

```
SMTP_USER=hello@qc-tech.co.uk
SMTP_PASS=[password casella hello — NON committare]
SMTP_NOREPLY_USER=no-reply@qc-tech.co.uk
SMTP_NOREPLY_PASS=[password casella no-reply — NON committare]
CONTACT_TO_EMAIL=hello@qc-tech.co.uk
```

---

## 4. EMAIL — CONFIGURAZIONE

| Tipo | Mittente | Destinatario | Trigger |
|---|---|---|---|
| Notifica interna | hello@qc-tech.co.uk | hello@qc-tech.co.uk | Invio form |
| Auto-reply cliente | no-reply@qc-tech.co.uk | Email del cliente | Invio form |

---

## 5. POSIZIONAMENTO BRAND

**Tagline**: "UK-based studio, worldwide reach"
**CTA principale**: "Get a free site audit" (EN) / "Audit gratuito del sito" (IT)
**Tono**: Professionale, diretto, orientato ai risultati. Target B2B.

---

## 6. SEO — CONFIGURAZIONE

| File | Percorso | Contenuto |
|---|---|---|
| Sitemap | `app/sitemap.ts` | IT/EN con hreflang |
| Robots | `app/robots.ts` | Punta a sitemap |
| OG Image | `app/opengraph-image.tsx` | 1200x630 dinamico |
| Schema.org | `components/schema-org.tsx` | LocalBusiness + FAQPage + WebSite |

**Keyword targets**:
- UK: web agency Hertfordshire, app development UK, web developer Bishop's Stortford
- IT: agenzia web UK italiani, sviluppo sito web UK
- Global: web agency UK worldwide, digital studio UK

---

## 7. CONTATTI

| Campo | Valore |
|---|---|
| Email | hello@qc-tech.co.uk |
| WhatsApp | +44 7754 812247 (solo messaggi, NO chiamate) |

**Orari apertura**:
- Lun–Gio: 09:00–17:30 | Ven: 09:00–14:30 | Sab–Dom: Chiuso

---

## 8. SEZIONE CLIENTI — LOGICA AGGIORNATA

### Clienti attivi (visibili sul sito come referenze attive)
Solo clienti con contratto attivo e sito/prodotto in produzione.

### Ex clienti (sezione "Settori in cui abbiamo operato")
Clienti il cui rapporto commerciale è terminato ma di cui si può citare il settore come prova di credibilità, senza nominare il cliente specifico. Obiettivo: dimostrare esperienza verticale in quei settori anche se il cliente non è più attivo.

**Ex clienti da includere in questa sezione (solo settore, non nome):**
- Ristorazione / Food & Beverage (Sapori Perduti)
- Hospitality (AlmaHotel)
- B&B & Accommodation (struttura chiusa)
- Sport & Football Academy — multilingua IT/FR/EN, stage internazionali, ancora live
- Fine Dining — ristorante Italo-Belga alta classe (struttura chiusa)
- Food Delivery — piattaforma ordinazione online pre-aggregatori (struttura chiusa)

**Sezione esistente da modificare:**
`"Esperienza sul campo — Settori in cui collaboriamo"` → rinominare in `"Settori in cui operiamo"` e separare in due blocchi:
1. **Collaborazioni attive** — clienti e settori con rapporto in corso
2. **Settori in cui abbiamo operato** — ex clienti, citati per settore

---

## 9. GOOGLE SEARCH CONSOLE — STATO

| Voce | Stato |
|---|---|
| Dominio verificato | alvencoltd.co.uk (redirect a qc-tech.co.uk) |
| Nuovo dominio da aggiungere | qc-tech.co.uk |
| Sitemap | Da risubmittare per nuovo dominio |
| Nome azienda / schema.org | Da aggiornare a Quantum Code Technologies Ltd |

---

## 10. CHECKLIST MIGRAZIONE

- [x] Acquistare dominio qc-tech.co.uk ✅
- [x] Configurare DNS e email hello/no-reply/postmaster@qc-tech.co.uk ✅
- [x] Aggiornare variabili ambiente su Vercel ✅
- [x] Impostare 301 redirect da alvencoltd.co.uk → qc-tech.co.uk ✅ (next.config.ts — richiede che alvencoltd.co.uk punti allo stesso deployment Vercel)
- [ ] Aggiungere dominio alvencoltd.co.uk al progetto Vercel come alias per attivare il redirect
- [x] Aggiornare Google Search Console (aggiungere qc-tech.co.uk, verificato con meta tag, sitemap risubmessa) ✅
- [x] GA4 attivo con nuovo Measurement ID G-EK5XQ10BZP — verificato in tempo reale (16/06/2026) ✅
- [ ] Aggiornare profili Bark.com e Clutch.co a QC Tech
- [ ] Aggiornare Google Business Profile (dopo apertura Companies House)
- [x] WhatsApp Business aggiornato a QC Tech (nome + logo) ✅
- [x] alvenco-demo.vercel.app rimosso da Vercel ✅
- [x] Aggiornare sezione clienti/settori sul sito ✅ (Blocco A: collaborazioni attive, Blocco B: settori in cui abbiamo operato)

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | File creato come ALVENCO_SITO_WEB.md |
| Giugno 2026 | Rinominato in QCTECH_SITO_WEB.md — rebranding QC Tech. Aggiornati tutti i riferimenti. Aggiunta checklist migrazione dominio. |
| 15/06/2026 | Sito live confermato. Repo corretti. Aggiunta logica sezione clienti/ex-clienti (Sezione 8). Aggiunto stato Google Search Console (Sezione 9). Checklist migrazione aggiornata. |
| 19/06/2026 | GA4 generate_lead event su form contatti. CTA Banner su tutte le pagine interne. Social proof + WhatsApp su pagina contatti. Env vars Vercel aggiornate da alvencoltd.co.uk a qc-tech.co.uk (CONTACT_TO_EMAIL, SMTP_USER, SMTP_NOREPLY_USER). Prezzi aggiornati a listino v3.0: Landing Page £900, Corporate £8k-£25k, sezione Gestione Presenza Digitale, Video Aziendale add-on. |
