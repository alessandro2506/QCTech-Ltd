# QCTECH_SITO_WEB.md — Sito Web qc-tech.co.uk
> Rinominato da ALVENCO_SITO_WEB.md — 4 Giugno 2026
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: Giugno 2026
> Repository: https://github.com/AlvencoLtd/AlvencoLtd-site (da rinominare)

---

> ⚠️ STATO MIGRAZIONE: Il sito è attualmente live su alvencoltd.co.uk.
> La migrazione al nuovo dominio qc-tech.co.uk è in corso.
> Tutti i riferimenti futuri usano qc-tech.co.uk come dominio definitivo.

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
| Dominio attuale | alvencoltd.co.uk (da migrare) |
| Dominio definitivo | qc-tech.co.uk |
| URL produzione attuale | https://www.alvencoltd.co.uk |
| URL produzione definitivo | https://www.qc-tech.co.uk |

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

## 8. CHECKLIST MIGRAZIONE (da completare)

- [ ] Acquistare dominio qc-tech.co.uk
- [ ] Configurare DNS e email hello@qc-tech.co.uk
- [ ] Aggiornare variabili ambiente su Vercel
- [ ] Aggiornare riferimenti dominio nel codice
- [ ] Impostare 301 redirect da alvencoltd.co.uk → qc-tech.co.uk
- [ ] Aggiornare Google Search Console con nuovo dominio
- [ ] Aggiornare profili Bark.com e Clutch.co
- [ ] Rinominare repo GitHub con nuovo nome
- [ ] Aggiornare Google Business Profile
- [ ] Aggiornare WhatsApp Business con nuovo nome QC Tech

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | File creato come ALVENCO_SITO_WEB.md |
| Giugno 2026 | Rinominato in QCTECH_SITO_WEB.md — rebranding QC Tech. Aggiornati tutti i riferimenti. Aggiunta checklist migrazione dominio. |
