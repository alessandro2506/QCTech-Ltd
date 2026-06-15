# CLAUDE.md — Master Index
> Ultimo aggiornamento: 15 Giugno 2026 — Sostituzione di tutti i path e riferimenti da "Alvenco Ltd" a "QC Tech Ltd" / "Quantum Code Technologies Ltd". Precedente: 01 Giugno 2026 — REBRANDING DEFINITIVO completato.

---

## 📅 DATA ODIERNA — AVVIO AUTOMATICO SESSIONE

> **REGOLA OBBLIGATORIA**: All'inizio di ogni sessione, Claude esegue questo script per ottenere la data aggiornata. Non fare mai affidamento alla data di training del modello.

```bash
python3 "/Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/ClaudesBrain/current-date/scripts/get_date.py"
```

Output atteso: `Oggi è <giorno_settimana> <giorno> <mese> <anno>.`  
Tenere questa informazione in contesto per tutta la sessione per date, scadenze e pianificazioni.

> Skill: `current-date` — `/Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/ClaudesBrain/current-date/SKILL.md`

---

## 🧠 SKILL EXPERT — INDICE

> **REGOLA**: Prima di ogni attività tecnica o strategica, leggere la skill pertinente. Se l'attività coinvolge più domini, usare le skill in parallelo.

| Skill | Path | Quando usarla |
|---|---|---|
| `expert-frontend` | `skills/expert-frontend/SKILL.md` | Next.js, React, Tailwind, animazioni, UI |
| `expert-backend` | `skills/expert-backend/SKILL.md` | API, server actions, auth, tRPC, Node.js |
| `expert-mobile` | `skills/expert-mobile/SKILL.md` | React Native, Expo, EAS, NativeWind |
| `expert-seo` | `skills/expert-seo/SKILL.md` | Metadata, sitemap, structured data, keyword |
| `expert-marketing` | `skills/expert-marketing/SKILL.md` | Copywriting, campagne, social, email marketing |
| `expert-automation` | `skills/expert-automation/SKILL.md` | Make, n8n, AI agents, webhook, flussi |
| `expert-database` | `skills/expert-database/SKILL.md` | Schema, migration, Firestore, Supabase RLS |
| `expert-devops` | `skills/expert-devops/SKILL.md` | Vercel, GitHub, deploy, DNS, EAS Build |
| `expert-ux-design` | `skills/expert-ux-design/SKILL.md` | Wireframe, design system, gerarchia visiva |
| `expert-legal-contracts` | `skills/expert-legal-contracts/SKILL.md` | Contratti, preventivi, clausole GDPR, 15 clausole UK |
| `expert-business-strategy` | `skills/expert-business-strategy/SKILL.md` | Pricing, finanziamenti, pipeline, go-to-market |
| `expert-prompt-cursor` | `skills/expert-prompt-cursor/SKILL.md` | Generazione prompt per Cursor IDE |
| `expert-app-development` | `skills/expert-app-development/SKILL.md` | **Architettura app, monorepo, pianificazione tecnica** |
| `expert-critical-thinking` | `skills/expert-critical-thinking/SKILL.md` | **SEMPRE — anti-errore, riflessione prima di rispondere** |

### Combinazioni Frequenti
| Attività | Skill da usare insieme |
|---|---|
| Sviluppo app mobile | `expert-critical-thinking` + `expert-app-development` + `expert-mobile` + `expert-backend` + `expert-database` |
| Sviluppo sito web completo | `expert-critical-thinking` + `expert-ux-design` → `expert-frontend` + `expert-seo` + `expert-devops` |
| Full-stack (web) | `expert-critical-thinking` + `expert-frontend` + `expert-backend` + `expert-database` |
| Landing page cliente | `expert-critical-thinking` + `expert-ux-design` + `expert-frontend` + `expert-seo` + `expert-marketing` |
| Generare prompt Cursor | `expert-critical-thinking` + `expert-prompt-cursor` + skill tecnica pertinente |
| Offerta/contratto cliente | `expert-critical-thinking` + `expert-business-strategy` + `expert-legal-contracts` + `expert-marketing` |
| Automazione acquisizione | `expert-automation` + `expert-marketing` + `expert-business-strategy` |

---
> Questo è il file master. Contiene il contesto aziendale di Quantum Code Technologies Ltd (QC Tech) e i collegamenti a tutti i file figli per ogni progetto/chat.
> **REGOLA**: Prima di ogni azione, leggere il file figlio corrispondente alla chat attiva. Aggiornarlo dopo ogni modifica significativa.

---

## STRUTTURA CLAUDE'S BRAIN

```
/Users/alessandrofiscella/Desktop/Progetti/ClaudesBrain/
├── CLAUDE.md                                  ← Questo file (master index)
├── ERRORI_TECNICI_RISOLTI.md                  ← ✅ NUOVO — Knowledge base bug risolti (leggere prima di ogni prompt Cursor)
├── ALVENCO_AZIENDA.md                         ← Strategia aziendale, finanziamenti, documenti
├── ALVENCO_MATERIALI_COMMERCIALI.md           ← Prezziario, FAQ, flyer, contrattazione
├── ALVENCO_LISTINO_PREZZI_2026.md             ← Listino ufficiale v2.0 £/€ — RIFERIMENTO UNICO
├── ALVENCO_TEMPLATE_CONTRATTI_RULES.md        ← Regole obbligatorie per tutti i contratti ← NUOVO
├── ALVENCO_AI_SOCIAL.md                       ← Sistema AI post/reel autonomi sui social
├── ALVENCO_AI_AGENTE.md                       ← Agente AI acquisizione clienti
├── CIVICALERT_APP.md                          ← ⚠️ ARCHIVIATO — vedi CIVIC_UNIFIED_APP.md
├── CITTA_CHIARA.md                            ← ⚠️ ARCHIVIATO — vedi CIVIC_UNIFIED_APP.md
├── CIVIC_UNIFIED_APP.md                       ← ✅ ATTIVO — App civica unificata IT+UK (AlvencoLtd repo)
├── EWOOOW_DEMO.md                             ← Demo e-commerce Ewooow
├── CM_IMPIANTI.md                             ← Cliente CM-Impianti (impianti navali/industriali)
├── STUDIO_CONSULENZE_AZIENDALI_INTEGRATE.md   ← Cliente Palermo — Studio fiscale/tributario (prospecting)
├── [FUTURO] ALVENCO_SITO_WEB.md              ← Da creare quando si inizia il sito web
├── FASCICOLO_ALESSANDRO_FISCELLA.md           ← Profilo personale e professionale del CTO/founder
└── FASCICOLO_QCTECH_LTD.md                  ← QC Tech come persona giuridica + clienti target
```

---

## DATI AZIENDALI — QUANTUM CODE TECHNOLOGIES LTD

| Campo | Valore |
|---|---|
| Nome | **Quantum Code Technologies Ltd** |
| Nome breve | **QC Tech** (NON QCT) |
| ~~Vecchio nome~~ | ~~Alvenco Ltd~~ — OBSOLETO |
| Forma giuridica | Private Limited Company (Ltd) |
| Sede | Bishop's Stortford, Hertfordshire, UK |
| Sede legale | Flat 3, Jackson Wharf, Adderley Road, Bishop's Stortford, CM23 3AX |
| Settore | Sviluppo web, app mobili, servizi digitali |
| Email | hello@qc-tech.co.uk |
| Telefono | +44 7754 812247 |
| Sito | qc-tech.co.uk |

### Struttura societaria
- **Alessandro Fiscella** — 33% — CTO, sviluppo, architettura, strategia prodotto
- **Vittorio Gragnaniello** — 33% — Operazioni, esecuzione tecnica
- **Vincenzo Sedita** — 33% — Commerciale, UK operations — **Firmatario ufficiale** — *Co-Founder & Commercial Director*
- **Martino G.A. Cartella** — 1% — Consulente esterno, tie-breaker deadlock

> Shareholders' Agreement in bozza, non firmato.

---

## FILE FIGLI — INDICE

| File | Contenuto | Stato |
|---|---|---|
| `ERRORI_TECNICI_RISOLTI.md` | **Knowledge base bug risolti — leggere prima di ogni prompt Cursor** | ✅ Attivo — AGGIORNARE AD OGNI BUG RISOLTO |
| `ALVENCO_AZIENDA.md` | Finanziamenti, documenti, listino, pitch | ✅ Attivo |
| `ALVENCO_MATERIALI_COMMERCIALI.md` | Prezziario, FAQ, flyer, contrattazione | ✅ Attivo |
| `ALVENCO_LISTINO_PREZZI_2026.md` | **Listino ufficiale v2.0 £/€ — benchmark UK+IT** | ✅ Attivo — RIFERIMENTO UNICO |
| `ALVENCO_TEMPLATE_CONTRATTO_BASE.md` | Template master con clausole standard e placeholder per nuovi contratti | ✅ Attivo |
| `ALVENCO_TEMPLATE_CONTRATTI_RULES.md` | **Regole obbligatorie per ogni contratto** | ✅ Attivo — LEGGERE PRIMA DI OGNI CONTRATTO |
| `ALVENCO_AI_SOCIAL.md` | Post/reel automatici su tutti i social | ✅ Attivo |
| `ALVENCO_AI_AGENTE.md` | Agente vocale + WhatsApp + email outreach | ✅ Attivo |
| `CIVICALERT_APP.md` | App React Native CivicAlert — ⚠️ ARCHIVIATO | ⚠️ Vedi CIVIC_UNIFIED_APP.md |
| `CITTA_CHIARA.md` | App civica italiana — ⚠️ ARCHIVIATO | ⚠️ Vedi CIVIC_UNIFIED_APP.md |
| `CIVIC_UNIFIED_APP.md` | **App civica unificata IT+UK — monorepo AlvencoLtd — LEGGERE PRIMA** | ✅ ATTIVO |
| `EWOOOW_DEMO.md` | Demo Next.js con design Amazon, deploy Vercel | ✅ Attivo |
| `SAPORI_PERDUTI.md` | Sito pubblico Next.js + dashboard admin ristorante Palermo | ✅ Attivo |
| `CM_IMPIANTI.md` | Sito/app per cliente CM-Impianti (impianti navali) | 🟡 In sviluppo |
| `STUDIO_CONSULENZE_AZIENDALI_INTEGRATE.md` | Sito istituzionale statico per studio fiscale/tributario Palermo | 🟡 In prospecting |
| `STUDIO_FANTAUZZO.md` | Dashboard documentale doppia (studio+portale) — Rag. Fantauzzo Francesco, Palermo | 🟢 Operativo |
| `FANTAUZZO_WEBSITE.md` | Spec complete sito istituzionale Fantauzzo per Cursor | 🟢 Pronto |
| `FANTAUZZO_PORTAL.md` | Spec complete portale documentale Fantauzzo per Cursor | 🟢 Pronto |
| `CURSOR_PROMPT_FANTAUZZO_WEBSITE.md` | Prompt iniziale da dare a Cursor per il sito | 🟢 Pronto |
| `CURSOR_PROMPT_FANTAUZZO_PORTAL.md` | Prompt iniziale da dare a Cursor per il portale | 🟢 Pronto |
| `tuzzolino-web/TUZZOLINO.md` | Sito vetrina pro + blog auto Instagram per educatore cinofilo Palermo | 🟡 Proposta |
| `handyman-stortford/HANDYMAN_STORTFORD.md` | Sito Next.js 15 per handyman Pasquale Rocchida — Bishop's Stortford UK | 🟡 In sviluppo |
| `PF_TRASLOCHI.md` | Sito vetrina + form preventivo per P.F. Traslochi — Palermo | 🟡 In prospecting |
| `QCTECH_SITO_WEB.md` | Da creare quando si inizia il sito web | ❌ Da creare |
| `FASCICOLO_ALESSANDRO_FISCELLA.md` | Profilo personale e professionale del CTO | ✅ Attivo |
| `FASCICOLO_QCTECH_LTD.md` | QC Tech come persona giuridica + clienti target | ✅ Attivo |
| `ALFA_SRLS.md` | **Alfa S.r.l.s. — SRLS italiana di Alessandro** — struttura, costi, fiscalità, relazione con QC Tech Ltd, strategia visto UK | ✅ Attivo — Da aggiornare ad ogni step costituzione |

---

## DOCUMENTI PRODOTTI (output files)

| Documento | File | Stato |
|---|---|---|
| Listino Prezzi HTML | `alvenco-listino-prezzi.html` | ✅ v1.0 (superato da v2.0) |
| **Listino Prezzi v2.1** | `QCTech_Listino_Prezzi_2026_v2.1.docx` | ✅ v2.1 — CORRENTE (aggiunta Sezione 5: Gestione Presenza Digitale) |
| Business Plan | `qctech_business_plan.docx` | ✅ |
| Pitch Innovate UK | `qctech_innovateuk_pitch.docx` | ✅ |
| Prezziario + FAQ | `QCTech_Prezziario_FAQ_Contrattazione_2026.docx` | ✅ |
| Flyer digitale | `QCTech_Flyer_2026.html` | ✅ |
| Preventivo CM-Impianti v2 | `Preventivo_CM-Impianti_v2_QCTech_2026.docx` | ✅ |
| **Statuto Aziendale** | `QCTech_Statuto_ArticlesOfAssociation_2026.docx` | ✅ NUOVO |
| **Template Contratto v2.0** | `QCTech_Template_Contratto_ServiceAgreement_2026.docx` | ✅ NUOVO |

---

## REGOLE OPERATIVE GLOBALI

1. **Prima di ogni contratto** → leggere `QCTECH_TEMPLATE_CONTRATTI_RULES.md`
2. **Prima di ogni preventivo** → usare `QCTECH_LISTINO_PREZZI_2026.md` come riferimento unico
3. **Prima di ogni azione** → leggere il file figlio della chat attiva
4. **SOLO GBP (£) — REGOLA VALUTA UNICA**: tutti i contratti e preventivi usano esclusivamente £ GBP. Per clienti IT/EU: aggiungere solo una nota a piè di pagina "importo indicativo in EUR al cambio del giorno di firma" — MAI importi EUR nelle tabelle o nel corpo del documento.
5. **Dopo ogni modifica** → aggiornare il file figlio con le novità
6. **Nuovo progetto/chat** → creare un nuovo file figlio e aggiungerlo all'indice sopra
7. **MAI** committare chiavi API, password o credenziali su git
8. **Percorso locale**: `/Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/ClaudesBrain/`
9. **GitHub backup**: https://github.com/alessandro2506/QCTech-Ltd
10. **⚠️ AVVIO SESSIONE NUOVO PROGETTO — OBBLIGATORIO**: Prima di ogni soluzione su un nuovo progetto → porre almeno 5 domande chiave ad Alex. Contestare insieme finché la risposta è davvero la migliore. Dare sempre la soluzione più smart, elegante e semplice — zero preamboli, zero papiri. Prima di creare qualsiasi cosa → autoanalisi critica: identificare i 3 buchi principali, i punti deboli, cosa potrebbe andare storto.
11. **SCROLL-TO-TOP EFFETTO RING — REGOLA GLOBALE**: componente scroll-to-top con effetto ring al click OBBLIGATORIO in tutti i siti futuri QC Tech. Da includere in ogni prompt Cursor per nuovi siti.
12. **AGGIORNAMENTO FILE .md + REPO — REGOLA PERMANENTE E PRIORITARIA**:
    - Il file `.md` corrispondente in `ClaudesBrain/` va aggiornato ad ogni modifica significativa
    - Il `README.md` nella cartella del progetto in Cursor va aggiornato ad ogni modifica significativa
    - Il `CLAUDE.md` master va aggiornato se la modifica impatta più progetti
    - **FLUSSO OBBLIGATORIO PER NUOVI PROGETTI CLIENT**: (1) crea file `.md` + aggiorna `CLAUDE.md` → (2) genera prompt Cursor → (3) Cursor sviluppa → (4) aggiorna file `.md` con struttura progetto reale → (5) **UN SOLO push GitHub** che include tutto. MAI pushare dopo il passo 1 e poi di nuovo dopo il passo 4 — è doppio lavoro inutile.
    - **GitHub ClaudesBrain**: `https://github.com/alessandro2506/QCTech-Ltd` — push unico a fine ciclo completo
    - **GitHub progetti client**: creare repo in `https://github.com/orgs/QCTech-Ltd/repositories` (org QC Tech), poi collegare su Vercel
    - **Non aspettare la fine della sessione** — aggiornare durante la sessione stessa
    - **Scopo**: evitare perdita di contesto, non ripetere errori già risolti, zero doppio lavoro
13. **FLUSSO OBBLIGATORIO NUOVO PROGETTO CLIENT — SEQUENZA FISSA**:
    1. Crea cartella progetto in `/Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/[nome-progetto]/`
    2. Scrivi file `[NOME].md` nella cartella appena creata (usa TEMPLATE_NUOVO_PROGETTO.md come base)
    3. Aggiorna `CLAUDE.md`: riga changelog in testa + riga nella tabella FILE FIGLI
    4. Il prompt Cursor DEVE iniziare con: `Leggi il file: /Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/[nome-progetto]/[NOME].md` + `Leggi il file: /Users/alessandrofiscella/Desktop/QC Tech Ltd/Progetti/ClaudesBrain/ERRORI_TECNICI_RISOLTI.md`
    5. Cursor sviluppa → aggiorna il `.md` con struttura reale e avanzamento
    6. **GitHub — DOPPIO REMOTE OBBLIGATORIO**:
       - Remote `origin` → `https://github.com/alessandro2506/[nome-progetto]` (account personale, privato) — remote principale per Vercel Hobby
       - Remote `qctech` → `https://github.com/QCTech-Ltd/[nome-progetto]` (org QC Tech, privato) — archivio sincronizzato
       - **QCTech-Ltd-site**: doppio remote configurato. Remote rinominato da `alvenco` a `qctech` il 01/06/2026 ✅
       - Ogni push: `git push origin main && git push qctech main`
       - Vercel: importare SEMPRE da `alessandro2506/[nome-progetto]` — Vercel Hobby non supporta repo privati di org GitHub
    7. Push GitHub unico a fine ciclo completo
    - **Questa sequenza è automatica — Alex non deve richiederla ad ogni nuovo progetto**
14. **PUSH SITO QC TECH — REGOLA PERMANENTE**: Prima di ogni `git push` sul repo QCTech-Ltd-site, eseguire sempre `git pull --rebase origin main`. Flusso corretto: `git add -A` → `git commit` → `git pull --rebase origin main` → `git push origin main && git push qctech main`.

---

## COLLEGAMENTI RAPIDI

| Risorsa | URL |
|---|---|
| GitHub CivicAlert / Civic Unified | https://github.com/QCTech-Ltd/civic-unified |
| GitHub QC Tech (Brain) | https://github.com/alessandro2506/QCTech-Ltd |
| Expo Dashboard | https://expo.dev/accounts/alfasolution-tech/projects/civicalert |
| Railway Backend | https://railway.app |
| Firebase Console | https://console.firebase.google.com — civicalert-871cb |
| Google Cloud Console | https://console.cloud.google.com |
| Supabase | https://supabase.com — progetto civicalert |
| Start Up Loans | www.startuploans.co.uk |
| Innovate UK | www.ukri.org/councils/innovate-uk |
| Hertfordshire Growth Hub | enquiries@hertsgrowthhub.com |
