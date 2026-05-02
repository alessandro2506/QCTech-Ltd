# CLAUDE.md — Master Index
> Ultimo aggiornamento: Aprile 2026 — Aggiunto ALVENCO_TEMPLATE_CONTRATTI_RULES.md + Statuto + Template Contratto
> Questo è il file master. Contiene il contesto aziendale di Alvenco Ltd e i collegamenti a tutti i file figli per ogni progetto/chat.
> **REGOLA**: Prima di ogni azione, leggere il file figlio corrispondente alla chat attiva. Aggiornarlo dopo ogni modifica significativa.

---

## STRUTTURA CLAUDE'S BRAIN

```
/Users/alessandrofiscella/Desktop/Progetti/ClaudesBrain/
├── CLAUDE.md                                  ← Questo file (master index)
├── ALVENCO_AZIENDA.md                         ← Strategia aziendale, finanziamenti, documenti
├── ALVENCO_MATERIALI_COMMERCIALI.md           ← Prezziario, FAQ, flyer, contrattazione
├── ALVENCO_LISTINO_PREZZI_2026.md             ← Listino ufficiale v2.0 £/€ — RIFERIMENTO UNICO
├── ALVENCO_TEMPLATE_CONTRATTI_RULES.md        ← Regole obbligatorie per tutti i contratti ← NUOVO
├── ALVENCO_AI_SOCIAL.md                       ← Sistema AI post/reel autonomi sui social
├── ALVENCO_AI_AGENTE.md                       ← Agente AI acquisizione clienti
├── CIVICALERT_APP.md                          ← App mobile CivicAlert (UK)
├── CITTA_CHIARA.md                            ← App mobile Città Chiara (Italia)
├── EWOOOW_DEMO.md                             ← Demo e-commerce Ewooow
├── CM_IMPIANTI.md                             ← Cliente CM-Impianti (impianti navali/industriali)
└── [FUTURO] ALVENCO_SITO_WEB.md              ← Da creare quando si inizia il sito web
```

---

## DATI AZIENDALI ALVENCO LTD

| Campo | Valore |
|---|---|
| Nome | Alvenco Ltd |
| Forma giuridica | Private Limited Company (Ltd) |
| Sede | Bishop's Stortford, Hertfordshire, UK |
| Settore | Sviluppo web, app mobili, servizi digitali |
| Email | hello@alvenco.co.uk |
| Telefono | +44 7895 907800 |
| Sito | alvenco.co.uk (da sviluppare) |

### Struttura societaria
- **Alessandro Fiscella** — 49% — Sviluppatore, CTO
- **Vincenzo (socio inglese)** — 49% — Acquisizione clienti
- **Commercialista** — 2%

---

## FILE FIGLI — INDICE

| File | Contenuto | Stato |
|---|---|---|
| `ALVENCO_AZIENDA.md` | Finanziamenti, documenti, listino, pitch | ✅ Attivo |
| `ALVENCO_MATERIALI_COMMERCIALI.md` | Prezziario, FAQ, flyer, contrattazione | ✅ Attivo |
| `ALVENCO_LISTINO_PREZZI_2026.md` | **Listino ufficiale v2.0 £/€ — benchmark UK+IT** | ✅ Attivo — RIFERIMENTO UNICO |
| `ALVENCO_TEMPLATE_CONTRATTI_RULES.md` | **Regole obbligatorie per ogni contratto** | ✅ Attivo — LEGGERE PRIMA DI OGNI CONTRATTO |
| `ALVENCO_AI_SOCIAL.md` | Post/reel automatici su tutti i social | ✅ Attivo |
| `ALVENCO_AI_AGENTE.md` | Agente vocale + WhatsApp + email outreach | ✅ Attivo |
| `CIVICALERT_APP.md` | App React Native, backend Railway, build EAS | ✅ Attivo |
| `CITTA_CHIARA.md` | App civica italiana, analisi e miglioramento | ✅ Attivo |
| `EWOOOW_DEMO.md` | Demo Next.js con design Amazon, deploy Vercel | ✅ Attivo |
| `CM_IMPIANTI.md` | Sito/app per cliente CM-Impianti (impianti navali) | 🟡 In sviluppo |
| `ALVENCO_SITO_WEB.md` | Da creare quando si inizia il sito web | ❌ Da creare |

---

## DOCUMENTI PRODOTTI (output files)

| Documento | File | Stato |
|---|---|---|
| Listino Prezzi HTML | `alvenco-listino-prezzi.html` | ✅ v1.0 (superato da v2.0) |
| **Listino Prezzi v2.0** | `Alvenco_Listino_Prezzi_2026.docx` | ✅ v2.0 — CORRENTE |
| Business Plan | `alvenco_business_plan.docx` | ✅ |
| Pitch Innovate UK | `alvenco_innovateuk_pitch.docx` | ✅ |
| Prezziario + FAQ | `Alvenco_Prezziario_FAQ_Contrattazione_2026.docx` | ✅ |
| Flyer digitale | `Alvenco_Flyer_2026.html` | ✅ |
| Preventivo CM-Impianti v2 | `Preventivo_CM-Impianti_v2_Alvenco_2026.docx` | ✅ |
| **Statuto Aziendale** | `Alvenco_Statuto_ArticlesOfAssociation_2026.docx` | ✅ NUOVO |
| **Template Contratto v2.0** | `Alvenco_Template_Contratto_ServiceAgreement_2026.docx` | ✅ NUOVO |

---

## REGOLE OPERATIVE GLOBALI

1. **Prima di ogni contratto** → leggere `ALVENCO_TEMPLATE_CONTRATTI_RULES.md`
2. **Prima di ogni preventivo** → usare `ALVENCO_LISTINO_PREZZI_2026.md` come riferimento unico
3. **Prima di ogni azione** → leggere il file figlio della chat attiva
4. **Dopo ogni modifica** → aggiornare il file figlio con le novità
5. **Nuovo progetto/chat** → creare un nuovo file figlio e aggiungerlo all'indice sopra
6. **Doppia valuta** → listino in £ GBP primario, € EUR secondario (cambio £1=€1.17 Aprile 2026)
7. **MAI** committare chiavi API, password o credenziali su git
8. **Percorso locale**: `/Users/alessandrofiscella/Desktop/Progetti/ClaudesBrain/`
9. **GitHub backup**: https://github.com/alessandro2506/AlvencoLtd
10. **AGGIORNAMENTO FILE .md — REGOLA PERMANENTE E PRIORITARIA**: Ad ogni modifica significativa aggiornare IMMEDIATAMENTE e SEMPRE:
    - Il file `.md` corrispondente in `ClaudesBrain/`
    - Il `README.md` nella cartella del progetto in Cursor
    - Il `CLAUDE.md` master se la modifica impatta più progetti
    - Questo vale per TUTTI i progetti senza eccezioni: sito Alvenco, CivicAlert, Città Chiara, Ewooow, clienti, ecc.
    - **Non aspettare la fine della sessione** — aggiornare durante la sessione stessa
    - **Scopo**: evitare perdita di contesto, non ripetere errori già risolti, documentazione sempre allineata al codice reale

---

## COLLEGAMENTI RAPIDI

| Risorsa | URL |
|---|---|
| GitHub CivicAlert | https://github.com/alessandro2506/civicalert |
| GitHub AlvencoLtd (Brain) | https://github.com/alessandro2506/AlvencoLtd |
| Expo Dashboard | https://expo.dev/accounts/alfasolution-tech/projects/civicalert |
| Railway Backend | https://railway.app |
| Firebase Console | https://console.firebase.google.com — civicalert-871cb |
| Google Cloud Console | https://console.cloud.google.com |
| Supabase | https://supabase.com — progetto civicalert |
| Start Up Loans | www.startuploans.co.uk |
| Innovate UK | www.ukri.org/councils/innovate-uk |
| Hertfordshire Growth Hub | enquiries@hertsgrowthhub.com |
