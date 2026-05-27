# PF_TRASLOCHI.md — P.F. Traslochi di Francesco Perrone

> Creato: Maggio 2026
> Stato: 🟡 Prospecting — contratto non ancora firmato

---

## 1. BRIEF

- **Tipo**: Sito Vetrina + Form Preventivo
- **Cliente**: P.F. Traslochi di Francesco Perrone
- **Settore**: Traslochi, trasporti, facchinaggio, deposito merci — Palermo e provincia
- **Budget**: Da definire (contratto non firmato)
- **Acconto 50%**: Da incassare prima di consegnare credenziali e andare live
- **Stato commerciale**: Prospecting
- **Repo GitHub**: https://github.com/AlvencoLtd/pf-traslochi-web (private)
- **Stato sviluppo**: ✅ Completo — in attesa di contratto + deploy Vercel

---

## 2. STACK

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animazioni**: Framer Motion
- **Form/Email**: API Route Next.js + Resend (invio email preventivo)
- **Hosting**: Vercel
- **Dominio**: Non ancora deciso (il cliente non ha un dominio confermato)
- **Foto**: Stock images (foto reali non disponibili — sostituire quando il cliente le fornisce)

---

## 3. PAGINE

| Pagina | Descrizione | Stato |
|---|---|---|
| `/` | Home: hero, perché sceglierci, servizi card, step processo, testimonianze, CTA | ❌ |
| `/chi-siamo` | Storia familiare (Francesco figlio di Benedetto), valori, team | ❌ |
| `/servizi` | Overview tutti i servizi con link alle sotto-pagine | ❌ |
| `/servizi/traslochi` | Traslochi privati e aziendali | ❌ |
| `/servizi/trasporti-nazionali` | Trasporti su scala nazionale | ❌ |
| `/servizi/facchinaggio` | Facchinaggio professionale | ❌ |
| `/servizi/deposito-merci` | Deposito e stoccaggio | ❌ |
| `/servizi/autoscala-noleggio` | Autoscala e noleggio mezzi | ❌ |
| `/contatti` | Mappa, telefono cliccabile, WhatsApp, form preventivo strutturato | ❌ |

---

## 4. FUNZIONALITÀ

- [x] Form preventivo strutturato (tipo servizio, data, partenza, destinazione, note)
- [x] Invio email via Resend a indirizzo cliente
- [x] Bottone WhatsApp cliccabile (fisso mobile)
- [x] Numero telefono cliccabile
- [x] SEO base (metadata, OG tags, sitemap)
- [x] Mobile-first responsive
- [ ] Google Maps embed area servita (opzionale fase 2)
- [ ] Galleria foto reali (da aggiungere quando il cliente le fornisce)

---

## 5. IDENTITÀ VISIVA

- **Palette**: Blu scuro (#1B2A4A) primario, Arancio (#F97316) accento/CTA, Bianco/Grigio chiaro per sfondi
- **Tipografia**: Inter (Google Fonts) — bold per titoli, regular per corpo
- **Tono**: Professionale ma umano, familiare, locale
- **Immagini**: Stock Unsplash/Pexels contestualizzate (camion, traslochi, appartamenti italiani) con overlay brand per coerenza visiva fino ad arrivo foto reali

---

## 6. STRUTTURA PROGETTO

```
pf-traslochi-web/
├── src/
│   ├── app/
│   │   ├── page.tsx                    ← Home
│   │   ├── chi-siamo/page.tsx
│   │   ├── servizi/
│   │   │   ├── page.tsx
│   │   │   ├── traslochi/page.tsx
│   │   │   ├── trasporti-nazionali/page.tsx
│   │   │   ├── facchinaggio/page.tsx
│   │   │   ├── deposito-merci/page.tsx
│   │   │   └── autoscala-noleggio/page.tsx
│   │   ├── contatti/page.tsx
│   │   └── api/
│   │       └── preventivo/route.ts     ← API Route Resend
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServiziCard.tsx
│   │   ├── ProcessoStep.tsx
│   │   ├── Testimonianze.tsx
│   │   ├── FormPreventivo.tsx
│   │   └── WhatsAppButton.tsx
│   └── lib/
│       └── resend.ts
├── public/
│   └── images/
├── .env.local                          ← RESEND_API_KEY, EMAIL_TO
└── ...
```

---

## 7. VARIABILI AMBIENTE

```
RESEND_API_KEY=
EMAIL_TO=                               ← email Francesco Perrone (da raccogliere)
```

---

## 8. CONTENUTI CHIAVE

**Hero claim**: "Il tuo trasloco in buone mani, da oltre 30 anni a Palermo"
**Perché sceglierci (3 punti)**:
1. Esperienza familiare — Francesco figlio di Benedetto, continuità e fiducia
2. Cura totale — Dai mobili di pregio ai pianoforti, trattiamo ogni bene come fosse nostro
3. Copertura completa — Palermo, provincia e trasporti nazionali

**Step processo (3 step)**:
1. Richiedi il preventivo gratuito
2. Pianifichiamo insieme ogni dettaglio
3. Eseguiamo con cura e puntualità

---

## 9. SEO KEYWORDS TARGET

- traslochi Palermo
- facchinaggio Palermo
- deposito merci Palermo
- autoscala Palermo
- traslochi economici Palermo
- trasporti nazionali Sicilia
- P.F. Traslochi Francesco Perrone

---

## 10. RISORSE

- **Repository**: Da creare in `https://github.com/orgs/AlvencoLtd/repositories`
- **Deploy**: Vercel — da collegare dopo creazione repo
- **Dominio**: Da decidere con cliente (suggerito: pftraslochi.it o pftraslochi.com)
- **Benchmark design**: alvenco-demo.vercel.app

---

## 11. PROBLEMI / RISCHI

| Problema | Mitigazione | Priorità |
|---|---|---|
| Stock photos poco credibili | Overlay colore brand + composizioni curate | 🟡 Media |
| Form senza backend | API Route Next.js + Resend già nello stack | 🔴 Alta |
| SEO migrazione da sito vecchio | Implementare redirects 301 se si usa stesso dominio | 🟡 Media |
| Dominio non deciso | Blocker per deploy finale — sollecitare decisione | 🔴 Alta |
| Nessun contratto firmato | NON iniziare sviluppo prima di acconto 50% | 🔴 Alta |

---

## 12. TODO

- [x] Raccogliere email cliente per Resend
- [ ] Decidere dominio (hanno già perronefrancescopftraslochi.it — chiarire se mantenerlo o cambiarlo)
- [ ] Firmare contratto + incassare acconto
- [x] Creare repo GitHub `pf-traslochi-web` tramite Cursor (con descrizione progetto) e pushare tutto
- [ ] Alex collega repo su Vercel per deploy pubblico
- [ ] Impostare variabili Vercel: RESEND_API_KEY + EMAIL_TO=hello@alvencoltd.co.uk (demo) → sostituire con email reale cliente dopo firma contratto
- [ ] Testare form /contatti dopo primo deploy
- [x] Generare prompt Cursor e avviare sviluppo
- [ ] Sostituire stock con foto reali quando disponibili

---

## 13. DATI REALI CLIENTE (verificati dal sito)

- **Telefono**: +39 349 1900900
- **P.IVA**: 05678130823
- **Indirizzo**: Via Guglielmo Il Buono SNC, 90138 Palermo (PA)
- **Dominio esistente**: perronefrancescopftraslochi.it (da chiarire se mantenerlo o cambiarlo)
- **Esperienza**: oltre 60 anni (fondati da Benedetto nel 1950) — NON 30 anni
- **Organico**: 10 persone
- **Autoscala**: fino a 42 metri
- **Servizio mancante nel sito costruito**: Montaggio Mobili — da aggiungere come pagina e card

---

## Changelog

| Data | Modifica |
|---|---|
| Maggio 2026 | File creato — brief iniziale, stack, struttura progetto, analisi rischi |
| Maggio 2026 | Aggiunti dati reali cliente verificati da sito — telefono, P.IVA, indirizzo, esperienza corretta (60 anni), servizio Montaggio Mobili mancante |
| Maggio 2026 | Sviluppo completato — repo pushata su GitHub, todo aggiornati, in attesa contratto + deploy Vercel |
| Maggio 2026 | Aggiunto remote personal (alessandro2506) — origin=org archivio, personal=account personale per Vercel |
