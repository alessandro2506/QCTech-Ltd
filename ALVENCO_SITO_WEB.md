# ALVENCO_SITO_WEB.md — Sito Web alvencoltd.co.uk
> Parent: `CLAUDE.md`
> Ultimo aggiornamento: Maggio 2026
> Repository: https://github.com/alessandro2506/alvenco-demo

---

## 1. STACK TECNICO

| Campo | Valore |
|---|---|
| Framework | Next.js 16 (App Router) |
| React | 19 |
| i18n | next-intl 4.x — routing `app/[locale]/...` |
| Styling | Tailwind CSS 4 |
| Animazioni | Framer Motion 12 |
| Email | Nodemailer + SMTP Aruba |
| Deploy | Vercel — auto-deploy su push main |
| Dominio | alvencoltd.co.uk (registrato su Aruba) |
| URL produzione | https://www.alvencoltd.co.uk |

---

## 2. STRUTTURA PAGINE

| Pagina | Path | Stato |
|---|---|---|
| Home | `app/[locale]/page.tsx` | ✅ |
| Servizi | `app/[locale]/servizi/page.tsx` | ✅ |
| Vision/About | `app/[locale]/vision/page.tsx` | ✅ Riscritta con contenuto reale |
| Contatti | `app/[locale]/contatti/page.tsx` | ✅ |
| FAQ | `app/[locale]/faq/page.tsx` | ✅ Pagina dedicata con 15 domande |

---

## 3. VARIABILI AMBIENTE (Vercel + .env.local)

```
SMTP_USER=hello@alvencoltd.co.uk
SMTP_PASS=[password casella hello — NON committare]
SMTP_NOREPLY_USER=no-reply@alvencoltd.co.uk
SMTP_NOREPLY_PASS=[password casella no-reply — NON committare]
CONTACT_TO_EMAIL=hello@alvencoltd.co.uk
DEEPL_AUTH_KEY=[solo locale per script traduzioni]
```

**SMTP Aruba**: `smtps.aruba.it:465` SSL

---

## 4. EMAIL — CONFIGURAZIONE

| Tipo | Mittente | Destinatario | Trigger |
|---|---|---|---|
| Notifica interna | hello@alvencoltd.co.uk | hello@alvencoltd.co.uk | Invio form |
| Auto-reply cliente | no-reply@alvencoltd.co.uk | Email del cliente | Invio form |

**Auto-reply contiene**: nome cliente, topic, testo messaggio, risposta entro 48h, WhatsApp link

**NOTA**: Resend è stato rimosso. Non usare più Resend per questo progetto.

---

## 5. POSIZIONAMENTO BRAND

**Tagline**: "The UK–Italy Digital Studio" → aggiornato a "UK-based studio, worldwide reach"

**Differenziatore**: Studio digitale con sede UK, team distribuito tra Inghilterra e Italia, clienti worldwide — non limitato a IT+UK.

**CTA principale**: "Get a free site audit" (EN) / "Audit gratuito del sito" (IT)

**Tono**: Professionale, diretto, orientato ai risultati. Target B2B — mai consumer.

---

## 6. SEO — CONFIGURAZIONE ATTUALE

| File | Percorso | Contenuto |
|---|---|---|
| Sitemap | `app/sitemap.ts` | IT/EN con hreflang |
| Robots | `app/robots.ts` | Punta a sitemap |
| OG Image | `app/opengraph-image.tsx` | 1200x630 dinamico |
| Schema.org | `components/schema-org.tsx` | LocalBusiness + FAQPage + WebSite |

**Google Search Console**: verificata con record TXT su Aruba ✅
**Google Business Profile**: da completare

**Keyword targets**:
- UK: web agency Hertfordshire, app development UK, web developer Bishop's Stortford
- IT: agenzia web UK italiani, sviluppo sito web UK
- Global: web agency UK worldwide, digital studio UK Italy, MVP development UK
- AI Search: how much does a website cost UK, web agency UK Italy

---

## 7. CONTATTI — CONFIGURAZIONE

| Campo | Valore |
|---|---|
| Email | hello@alvencoltd.co.uk |
| WhatsApp | +44 7754 812247 (solo messaggi, NO chiamate) |
| WhatsApp link EN | `https://wa.me/447754812247?text=Good day, I visited alvencoltd.co.uk...` |
| WhatsApp link IT | `https://wa.me/447754812247?text=Buongiorno, ho visitato alvencoltd.co.uk...` |
| Helper | `lib/get-whatsapp-href.ts` |

**Orari apertura**:
- Lun–Gio: 09:00–17:30
- Venerdì: 09:00–14:30
- Sab–Dom: Chiuso
- (37.5h/settimana — standard UK)

---

## 8. FAQ — 15 DOMANDE

Namespace `FAQ` in `messages/en.json` e `messages/it.json`, chiavi `q1..q15` / `a1..a15`.

Cluster tematici coperti:
- Pricing e preventivi
- Processo di lavoro e timeline
- Tecnologie (stack amplio: Next.js, RN, Flutter, Supabase, Firebase, AI, ecc.)
- Internazionale e multilingual
- GDPR e compliance
- Manutenzione post-lancio
- AI integration
- MVP
- Differenziatori Alvenco

Schema.org FAQPage implementato su homepage e pagina FAQ.

---

## 9. FIX IMPORTANTI APPLICATI

| Fix | File | Dettaglio |
|---|---|---|
| Reset form contatti | `app/[locale]/contatti/page.tsx` | Rimossa `key` dinamica che causava remount e perdita dati al cambio topic |
| Footer duplicato copyright | `components/site-footer.tsx` | Rimossa stringa hardcoded, resta solo `tf("legal")` |
| "Demo marketing" rimosso | `messages/*.json` | `footer.legal` pulito |
| "is leaded" → "is led" | `messages/en.json` | Fix grammaticale pagina Vision |
| Email placeholder | `app.config.ts` | `hello@alvenco.example` → `hello@alvencoltd.co.uk` |

---

## 10. WHATSAPP BUSINESS

**Profilo configurato**:
- Nome: Alvenco Ltd
- Numero: +44 7754 812247
- Descrizione: "UK-based digital studio. We build websites, e-commerce and mobile apps for businesses that want to grow — worldwide."
- Indirizzo: Bishop's Stortford CM23, UK
- Orari: Lun–Gio 09:00–17:30, Ven 09:00–14:30, Sab–Dom chiuso
- Categoria: Servizi per le aziende

**Messaggi automatici configurati**:
- Messaggio di benvenuto attivo
- Messaggio di assenza attivo (fuori orario)
- Risposte rapide: `/preventivo`, `/audit`, `/prezzi`

---

## 11. COSE DA FARE (Backlog)

| Task | Priorità | Note |
|---|---|---|
| Google Business Profile | 🔴 Alta | Aumenta visibilità locale UK |
| Registrazione Clutch.co | 🔴 Alta | Citata da ChatGPT/Gemini per "best web agency UK" |
| Registrazione Bark.com | 🟡 Media | Piattaforma UK clienti cercano agenzie |
| Primo articolo blog | 🟡 Media | "How much does a website cost UK 2026" — 1500+ parole |
| Immagini pagine | 🟡 Media | Illustrazioni o stock Unsplash per Vision e Home |
| Lighthouse audit | 🟡 Media | Verificare LCP < 2.5s, CLS < 0.1, score > 90 |
| Pagina portfolio/case study | 🟢 Bassa | Quando ci sono progetti completati da mostrare |

---

## 12. CHANGELOG

| Data | Modifica |
|---|---|
| Maggio 2026 | WhatsApp deep link con messaggio precompilato IT/EN professionale |
| Maggio 2026 | Icona WhatsApp SVG (#25D366) sostituisce icona telefono |
| Maggio 2026 | Orari apertura UK (37.5h) in pagina contatti |
| Maggio 2026 | Auto-reply cliente da no-reply@alvencoltd.co.uk — 48h, messaggio incluso |
| Maggio 2026 | Migrazione da Resend a Nodemailer SMTP Aruba |
| Maggio 2026 | Fix reset form contatti al cambio topic |
| Maggio 2026 | Contatti reali: hello@alvencoltd.co.uk, +44 7754 812247 |
| Aprile 2026 | Pagina FAQ dedicata con 15 domande, accordion Framer Motion |
| Aprile 2026 | Pagina Vision/About riscritta con contenuto reale |
| Aprile 2026 | SEO tecnica: sitemap, robots, Schema.org, OG image, security headers |
| Aprile 2026 | Google Search Console verificata |
| Aprile 2026 | Posizionamento aggiornato: UK-based, worldwide reach |
| Aprile 2026 | Title tag, copy hero e footer aggiornati IT/EN |
| Aprile 2026 | "Demo marketing" rimosso dal footer |
