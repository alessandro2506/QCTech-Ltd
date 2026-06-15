# CIVIC_UNIFIED_REBOOT.md
**Quantum Code Technologies Ltd**
Ultimo aggiornamento: 07 June 2026 — Versione 2.4

---

## REGOLE OPERATIVE OBBLIGATORIE

Queste regole si applicano a ogni sessione di sviluppo senza eccezioni. Lo strumento di implementazione è **Claude Code** — non Cursor.

1. Leggi questo file per intero prima di qualsiasi attività sul progetto.
2. Leggi `ERRORI_TECNICI_RISOLTI.md` e identifica gli ERR-xxx pertinenti prima di scrivere codice.
3. Aggiorna `## STATO CORRENTE` e `## CHANGELOG` a fine di ogni sessione o prima di fermarti per soglia di utilizzo.
4. Non usare `eas build` per test. I test avvengono esclusivamente via Expo Go e `eas update --branch preview`. Le build EAS sono riservate a produzione/store e demo finali a cliente.
5. Non dichiarare una feature completata senza averla verificata su device fisico o Vercel preview.
6. Nessuna modifica allo schema DB senza un migration file Drizzle corrispondente.
7. Nessuna fetch raw tra frontend e backend — tRPC è il contratto API esclusivo.
8. Opera sempre per unità atomiche con checkpoint obbligatorio al completamento di ognuna (vedi protocollo Claude Code). Mai iniziare una nuova unità senza aver eseguito il checkpoint della precedente.

---

## PROTOCOLLO CLAUDE CODE

### Avvio sessione (obbligatorio)
All'avvio di ogni sessione Claude Code deve eseguire nell'ordine:
1. Leggere questo file (`CIVIC_UNIFIED_REBOOT.md`) per intero.
2. Leggere `ERRORI_TECNICI_RISOLTI.md` e identificare errori pertinenti al task corrente.
3. Leggere la sezione `## STATO CORRENTE` e identificare esattamente il prossimo step da eseguire.
4. Confermare la comprensione dello stato prima di scrivere codice.

### Dichiarazione unità atomiche (obbligatoria prima di scrivere codice)
All'avvio, dopo aver letto i file e confermato lo stato, Claude Code produce una lista numerata delle unità atomiche che intende completare nella sessione — prima di scrivere qualsiasi riga di codice. Ogni unità ha un criterio di accettazione verificabile. Questa lista viene confermata da Alex prima di procedere.

### Unità atomica di lavoro
Una unità atomica è un blocco di lavoro che:
- Ha un criterio di accettazione verificabile (es. "il login Google completa senza errori su device fisico").
- Termina con il codice compilabile e i test passanti.
- Termina con un checkpoint obbligatorio (vedi sotto).

Claude Code non inizia una nuova unità atomica se quella corrente non è completata o non è stata riportata a uno stato stabile con rollback.

### Checkpoint obbligatorio — dopo OGNI unità atomica
Il checkpoint non è legato alla soglia di contesto. Viene eseguito **ogni volta che una unità atomica è completata**, indipendentemente da quanto contesto rimane. Non è opzionale, non è posticipabile.

Sequenza checkpoint (3 operazioni, in questo ordine):
1. **Aggiorna `## STATO CORRENTE`** in questo file: marca l'unità come completata `[x]`, aggiorna il prossimo step, annota eventuali decisioni tecniche prese.
2. **Commit Git** con messaggio nel formato: `[CHECKPOINT] descrizione unità completata — prossimo: descrizione prossimo step`.
3. **Push** su `github.com/QCTech-Ltd/civic-unified`.

Solo dopo il push Claude Code inizia la prossima unità atomica.

### Protocollo di chiusura sicura (soglia di utilizzo o interruzione)
Se la sessione si esaurisce o viene interrotta prima del completamento di una unità atomica:
1. **Completa o stabilizza:** se completabile entro pochi scambi, completa. Altrimenti rollback all'ultimo commit stabile con `git stash` o `git revert`.
2. **Esegui il checkpoint** sulla base dello stato stabile raggiunto.
3. **Aggiorna `ERRORI_TECNICI_RISOLTI.md`** con errori incontrati o risolti nella sessione.

Grazie ai checkpoint per unità atomica, la perdita massima è sempre limitata all'unità corrente — mai all'intera sessione.

### Ripresa dopo interruzione
Claude Code legge `## STATO CORRENTE` e l'ultimo commit `[CHECKPOINT]`. Riprende dal prossimo step documentato. Non serve ricostruire nulla manualmente.

### Fonte di verità
- **Stato del codice:** ultimo commit Git su `main` o branch attivo.
- **Stato del progetto:** sezione `## STATO CORRENTE` di questo file.
- I due devono essere sempre allineati. In caso di conflitto, il commit Git prevale per il codice, questo file prevale per le decisioni di architettura e priorità.

---

## 1. IDENTITÀ PRODOTTO

Il progetto sviluppa due brand distinti che condividono un unico codebase (monorepo). La logica di business, i flussi e le feature sono identici. Cambiano lingua, palette, routing verso autorità locali e configurazione EAS.

| Campo | CivicAlert | Città Chiara |
|---|---|---|
| Mercato | UK — Public Sector | Italia — PA locale |
| Lingua app e dashboard | Inglese | Italiano |
| Priorità sviluppo | Prima | Seconda |
| Colore primario | TBD (istituzionale UK) | `#1A3F7F` |
| Colore dark | TBD | `#0D2240` |
| Colore SOS/emergenza | TBD | `#C8102E` |
| Bundle ID | TBD | `it.alfasolution-tech.cittachiara` |
| Deep link scheme | TBD | `cittachiara` |
| Data residency | DigitalOcean LON1 (UK GDPR) | Supabase EU |
| `COUNTRY_CODE` EAS | `UK` | `IT` |

**Azienda:** Quantum Code Technologies Ltd (QC Tech)
**Repo GitHub:** `github.com/QCTech-Ltd/civic-unified`
**Path locale:** `/Users/alessandrofiscella/Desktop/QC Tech/Progetti/civic-unified/`

---

## 2. ARCHITETTURA MONOREPO

```
civic-unified/
├── apps/
│   ├── mobile/          ← Expo SDK 54 · Expo Router 6 · NativeWind
│   └── dashboard/       ← Next.js 16 · Tailwind CSS 4 · tRPC client
├── packages/
│   ├── server/          ← tRPC router · Express su Vercel Serverless
│   ├── db/              ← Drizzle ORM · schema · migrations · Supabase PostgreSQL + PostGIS
│   └── shared/
│       └── i18n/        ← it.ts · en.ts
├── package.json         ← npm workspaces root
└── turbo.json           ← Turborepo pipeline
```

### Regole architetturali
- Il codice condiviso tra app risiede esclusivamente in `packages/`. Nessun import diretto cross-app.
- tRPC è l'unico contratto API tra `apps/` e `packages/server/`. Nessuna fetch raw.
- Lo schema Drizzle in `packages/db/` è la source of truth del database. Nessuna modifica al DB senza migration file.
- Il `COUNTRY_CODE` è hardcoded nel bundle a build time tramite profilo EAS. Non è runtime-configurable.

---

## 3. STACK TECNICO — VERSIONI BLOCCATE

| Componente | Versione | Note |
|---|---|---|
| Expo SDK | 54 | Non aggiornare senza sessione dedicata |
| React Native | 0.81 | |
| Expo Router | 6 | |
| NativeWind | compatibile SDK 54 | |
| Next.js | 16 App Router | |
| Tailwind CSS | 4 | |
| tRPC | latest stabile | |
| Drizzle ORM | latest stabile | |
| Supabase | `ljbrmoozwrqrbuldmbez` | PostgreSQL + PostGIS |
| Backend runtime | Express su Vercel Serverless | URL: `citta-chiara.vercel.app` |
| EAS | Piano gratuito | 15 build Android + 15 iOS al mese — reset mensile |

---

## 4. CANALI DI ACCESSO CITTADINO

I cittadini accedono alla piattaforma tramite due canali distinti ma funzionalmente equivalenti.

**App mobile (iOS e Android):** canale primario. Sviluppato con React Native + Expo. Accessibile su qualsiasi device. Gestisce fotocamera, geolocalizzazione, notifiche push e aggiornamenti di stato in real-time.

**Web portal cittadino:** canale secondario. Accessibile da browser desktop e mobile. Offre le stesse funzionalità di segnalazione dell'app ma senza accesso nativo alla fotocamera del device — l'utente carica media da file system. Non sostituisce l'app ma garantisce accesso universale senza installazione.

Entrambi i canali condividono lo stesso backend tRPC, lo stesso schema DB e la stessa pipeline AI.

---

## 5. FLUSSO SEGNALAZIONE — CITIZEN SIDE (app e web portal)

Questo è il flusso completo dalla prospettiva del cittadino. Ogni step è obbligatorio — nessuno è saltabile.

**Step 1 — Apertura e selezione tipo**
L'utente apre l'app o il web portal e seleziona la categoria del problema tra: violazione civica, problema ambientale, danno infrastrutturale, incidente di sicurezza personale, molestia, violenza, comportamento antisociale.

**Step 2 — Descrizione**
L'utente inserisce una descrizione testuale dell'incidente. Campo obbligatorio.

**Step 3 — Acquisizione media (obbligatoria — gatekeeper)**
L'utente scatta una foto o registra un video direttamente dall'app, oppure carica un file dal web portal. L'invio della segnalazione è tecnicamente bloccato se non è presente almeno un media. Il pulsante di invio rimane disabilitato fino all'acquisizione.

Regole media:
- Foto: obbligatoria come minimo. Nessun limite di dimensione lato UX, gestita la compressione lato client prima dell'upload.
- Video: massimo 60 secondi. L'app tronca automaticamente la registrazione al raggiungimento del limite. Nessun video superiore a 60 secondi può essere caricato nemmeno da file system (web portal).
- Low-light (solo app mobile): il frame live della camera viene analizzato in JS per la luminosità media (~5ms, nessun overhead percepibile). Se la luminosità è sotto soglia, l'app attiva automaticamente `flashMode: 'on'` per le foto e `flashMode: 'torch'` per i video. Nessun post-processing AI lato client. Upgrade post-MVP: native module iOS (AVCapturePhotoSettings Night Mode) e Android (CameraX Night Mode).

**Step 4 — Geolocalizzazione**
La posizione GPS viene acquisita automaticamente al momento della segnalazione. È obbligatoria per il routing AI. L'utente può correggere manualmente la posizione su mappa prima dell'invio se il GPS non è preciso. La posizione dichiarata viene validata in fase di pre-screen AI tramite confronto con i metadati GPS del media (vedi Step 5).

**Step 5 — AI pre-screen (automatico, lato server)**
Prima del dispatch, il server esegue la pipeline AI di validazione nell'ordine seguente:
- Analisi qualità foto: rilevamento blur, sottoesposizione eccessiva, frame vuoto.
- Analisi qualità video: Gemini 1.5 Pro con video input nativo (max 60s) — coerenza semantica, contenuto esplicito, qualità minima.
- Validazione metadati GPS: i metadati EXIF della foto (o i metadati container del video MP4/MOV) vengono estratti e le coordinate GPS in essi contenute vengono confrontate con la posizione dichiarata dall'app. Se la distanza tra i due punti è entro 500 metri la posizione è marcata come **attendibile** e la segnalazione procede. Se la distanza supera la soglia la posizione è marcata come **sospetta** e la segnalazione viene flaggata per revisione manuale o rifiutata con motivazione specifica. Se i metadati GPS sono assenti (dispositivi con geolocalizzazione EXIF disattivata — caso comune e non fraudolento) la posizione app viene accettata senza penalizzazione e la segnalazione viene marcata come **posizione non verificata da metadati** — questa condizione non blocca il dispatch.
- Rilevamento duplicati: confronto con segnalazioni esistenti per stessa area geografica e stesso tipo nelle ultime 24 ore.
- Rilevamento falsificazione: verifica coerenza tra contenuto del media e tipo di segnalazione dichiarato.
- Content safety: rilevamento contenuto esplicito non pertinente.
- Se il pre-screen fallisce, la segnalazione viene respinta con motivazione specifica mostrata all'utente. L'utente può correggere e reinviare.

**Step 6 — AI routing (automatico, lato server)**
Se il pre-screen è superato, il motore di routing assegna la segnalazione all'autorità competente. Il routing combina tre input simultaneamente: tipo di incidente, coordinate GPS, e regole di policy configurate per territorio. Il layer primario è deterministico (mappatura nota tipo→autorità, zero latenza, zero costo AI). Il layer secondario usa Gemini 2.0 Flash solo per edge case ambigui (~10% dei casi).

La segnalazione viene inviata esclusivamente all'autorità competente. Contestualmente al dispatch, il pin della segnalazione diventa visibile sulla mappa pubblica in-app — sia nella lista personale dell'utente che ha segnalato, sia nella mappa consultabile da tutti gli utenti. Prima del superamento del pre-screen nessun pin è visibile a nessuno. L'utente che ha appena inviato vede il messaggio "segnalazione in verifica" senza pin fino al completamento del pre-screen.

**Step 7 — Conferma e tracking**
L'utente riceve conferma immediata dell'invio con messaggio "segnalazione in verifica". Il pin compare sulla mappa personale e pubblica solo dopo il superamento del pre-screen AI (Step 5). Una volta visibile, il pin ha colore legato alla categoria della segnalazione.

Quando l'autorità aggiorna lo stato dalla dashboard, tre cose avvengono simultaneamente: l'utente che ha segnalato riceve una notifica push (app) o email (web portal), il pin sulla mappa pubblica aggiorna il proprio stato visivamente, e tutti gli utenti nelle vicinanze che hanno attivato le notifiche opt-in per quella categoria ricevono una notifica push (vedi sezione Notifiche pubbliche).

---

## 6. MAPPA PUBBLICA E NOTIFICHE CITTADINI

### Visibilità pin — regola unica

Il pin di una segnalazione compare sulla mappa pubblica — e sulla mappa personale dell'utente che ha segnalato — esclusivamente dopo che il pre-screen AI è superato e la segnalazione è stata dispatchiata alla dashboard dell'autorità. Prima di quel momento la segnalazione non esiste visivamente per nessuno.

| Stato segnalazione | Mappa personale | Mappa pubblica |
|---|---|---|
| Inviata — pre-screen in corso | Messaggio "in verifica", nessun pin | Non visibile |
| Pre-screen fallito | Messaggio di errore, nessun pin | Non visibile |
| Pre-screen superato — dispatchiata | Pin colorato per categoria — stato "segnalata" | Pin colorato per categoria — stato "segnalata" |
| Presa in carico dall'autorità | Pin aggiornato — stato "in gestione" | Pin aggiornato — stato "in gestione" |
| Risolta | Pin aggiornato — stato "risolta" (visibile per 30 giorni, poi archiviata) | Pin aggiornato — stato "risolta" (visibile per 30 giorni) |
| Respinta dall'autorità | Notifica rifiuto all'utente, pin rimosso | Non visibile |

La mappa pubblica è consultabile senza autenticazione — chiunque apra l'app può vedere le segnalazioni validate nella propria zona, anche senza aver mai effettuato una segnalazione.

### Notifiche pubbliche — Opzione B (opt-in per categoria e raggio)

Le notifiche push per segnalazioni altrui sono disattivate per default. L'utente le attiva manualmente nelle impostazioni scegliendo categoria e raggio di rilevanza.

Regole:
- Default: tutte le notifiche pubbliche disattivate.
- L'utente seleziona le categorie di interesse (es. solo "sicurezza personale" e "violenza").
- L'utente imposta il raggio geografico (es. 500 metri dalla posizione abituale o dalla posizione attuale).
- Solo le segnalazioni validate che matchano categoria + raggio generano una notifica push.
- Le categorie a bassa urgenza (litter, rumore, degrado urbano) non possono generare notifiche proattive — sono consultabili solo aprendo la mappa.
- Le categorie safety-critical (violenza, molestia, minaccia, sicurezza personale) possono generare notifiche se l'utente le ha attivate esplicitamente.
- Quando l'autorità aggiorna lo stato di una segnalazione, gli utenti che hanno ricevuto la notifica originale ricevono anche l'aggiornamento di stato.

---

## 7. ROUTING AI — MATRICE TIPO INCIDENTE → AUTORITÀ

### CivicAlert (UK)

| Tipo incidente | Autorità ricevente |
|---|---|
| Litter, rumore, danno urbano, ASB | Local Council |
| Danno infrastrutturale stradale, pericolo traffico | Transport Authority / Highways Agency |
| Inquinamento, discarica abusiva, violazione green-space | Environmental Agency |
| Violenza, molestia, minaccia personale, sicurezza pubblica | Police Force / Security Body |

### Città Chiara (IT)

| Tipo incidente | Autorità ricevente |
|---|---|
| Rifiuti, rumore, degrado urbano, ASB | Comune |
| Danno infrastrutturale, strade, trasporti | Provincia / Comune |
| Inquinamento, discarica abusiva, aree verdi | Comune / Provincia (per competenza) |
| Violenza, molestia, minaccia, sicurezza pubblica | Polizia di Stato |
| Violazione locale, ordine pubblico urbano | Polizia Locale |

Il routing non è statico. Ogni autorità configura in fase di onboarding le proprie regole di competenza per area geografica e tipo di incidente. Il motore AI rispetta queste regole come layer prioritario rispetto alla matrice default.

---

## 8. DASHBOARD — AUTHORITY SIDE

### 7.1 Accesso e ruoli (RBAC multi-tier)

Ogni autorità accede a una dashboard dedicata con credenziali proprie. I ruoli sono configurati per mercato.

Città Chiara (IT): Comune, Provincia, Polizia Locale, Polizia di Stato.
CivicAlert (UK): Local Council, Transport Authority, Environmental Agency, Police Force, Security Body.

Ogni ruolo vede esclusivamente le segnalazioni di propria competenza. Non c'è visibilità cross-autorità tranne nelle funzionalità di analytics fase 2.

### 7.2 Feature dashboard — Fase 1 (MVP)

**Lista segnalazioni in real-time**
Vista principale con tutte le segnalazioni ricevute, ordinate per data. Filtri per stato, categoria, area geografica. Ogni segnalazione mostra: tipo, descrizione, foto/video allegati, posizione GPS su mappa, stato corrente, timestamp.

**Mappa incidenti**
Vista mappa con pin colorati per categoria. Pin grigio = pending approvazione. Pin per colore categoria = approvata e in gestione. Clic sul pin apre il dettaglio della segnalazione.

**Dettaglio segnalazione**
Scheda completa: media allegati (foto/video visualizzabili inline), descrizione cittadino, posizione GPS, cronologia stati, note interne operatore.

**Gestione stati**
L'operatore può aggiornare lo stato della segnalazione: ricevuta → in gestione → risolta → archiviata → respinta (con motivazione). Ogni cambio stato genera automaticamente una notifica push al cittadino che ha inviato la segnalazione.

**Alert inattività operatore**
Se un operatore autenticato non interagisce con la dashboard per 5 minuti consecutivi, compare un popup di avviso. Se non risponde entro 1 minuto ulteriore, la sessione viene sospesa e viene generato un log di inattività.

**Rubrica enti (directory tecnica)**
Presente dal day one. Contiene i contatti delle squadre tecniche e degli enti correlati per ogni autorità. Consultabile direttamente dalla scheda segnalazione. È la base per il sistema di invio squadra.

**Invio squadra tecnica**
Dalla scheda segnalazione, l'operatore può inviare un'email pre-compilata a un destinatario selezionato dalla rubrica. L'email include automaticamente: tipo segnalazione, descrizione, posizione GPS (link mappa), link ai media allegati, e un PDF riepilogativo generato on-demand. L'operatore può aggiungere note prima dell'invio.

### 7.3 Feature dashboard — Fase 2 (post-MVP)

- Analytics cross-council e benchmarking territoriale.
- Export KPI per planning e policy pubblici.
- Report periodici automatici (settimanali, mensili) in formato PDF ed Excel.
- REST API layer per integrazione con sistemi autorità esistenti: ticketing platforms, GIS, CRM, case management.
- White-label per autorità che richiedono branding personalizzato.

---

## 9. FLUSSI DI INTERAZIONE APP ↔ DASHBOARD

### App → Dashboard (direzione primaria)

Il cittadino invia la segnalazione tramite app o web portal. Il server esegue pre-screen AI e routing. La segnalazione appare nella dashboard dell'autorità competente in real-time tramite WebSocket o polling a breve intervallo. L'autorità non deve fare nulla per ricevere la segnalazione — arriva automaticamente.

### Dashboard → App (direzione inversa)

Ogni cambio di stato effettuato dall'operatore in dashboard genera un evento server-side che:
1. Aggiorna lo stato della segnalazione nel DB.
2. Invia una notifica push al device del cittadino che ha segnalato tramite Expo Notifications (app mobile) o email (web portal).
3. Aggiorna il pin sulla mappa personale del cittadino e sulla mappa pubblica in real-time.
4. Invia notifica push agli utenti che hanno attivato opt-in per quella categoria e si trovano nel raggio configurato.

Il cittadino non può rispondere o interagire con l'autorità tramite l'app oltre all'invio iniziale. La comunicazione è unidirezionale: cittadino invia, autorità gestisce e aggiorna stato.

### Dashboard → Squadra tecnica (dispatch)

L'operatore seleziona un destinatario dalla rubrica enti e invia l'email con PDF allegato direttamente dalla dashboard. Questo flusso è interno all'autorità e non coinvolge il cittadino.

---

## 10. ARCHITETTURA AI — SPECIFICHE COMPLETE

### Layer 1 — Routing deterministico
Mappatura statica tipo incidente → autorità, configurata per ogni territorio in fase di onboarding. Copre ~90% dei casi. Zero latenza, zero costo API. Eseguito prima di qualsiasi chiamata a LLM.

### Layer 2 — Routing AI (edge case)
Gemini 2.0 Flash. Attivato solo quando il layer deterministico non produce un match certo. Riceve: tipo dichiarato, descrizione testuale, coordinate GPS. Restituisce: autorità target + confidence score. Se il confidence score è sotto soglia, la segnalazione viene flaggata per revisione manuale.

### Layer 3 — Pre-screen foto
Gemini 2.0 Flash Vision. Eseguito su ogni foto prima del dispatch. Controlla: qualità (blur, sottoesposizione), duplicati rispetto a segnalazioni recenti nella stessa area, falsificazione evidente (foto da internet, screenshot), coerenza tra contenuto visivo e tipo di segnalazione dichiarato, content safety (contenuto esplicito non pertinente). Include estrazione e validazione metadati EXIF GPS (vedi Layer 5).

### Layer 4 — Pre-screen video
Gemini 1.5 Pro con video input nativo. Eseguito su ogni video (max 60 secondi). Controlla gli stessi parametri del pre-screen foto più: coerenza semantica del video con la segnalazione dichiarata, rilevamento contenuto esplicito frame-by-frame. Include estrazione metadati GPS dal container MP4/MOV (vedi Layer 5). Upgrade futuro a scala: Google Video Intelligence API per volumi elevati.

### Layer 5 — Validazione metadati GPS
Eseguito su ogni media (foto e video) in parallelo ai layer 3 e 4. Estrae le coordinate GPS dai metadati EXIF (foto) o dal container MP4/MOV (video) e le confronta con la posizione dichiarata dall'app al momento della segnalazione.

- Distanza ≤ 500 metri → posizione **attendibile** → procede al routing.
- Distanza > 500 metri → posizione **sospetta** → segnalazione flaggata per revisione manuale o rifiutata con motivazione specifica all'utente.
- Metadati GPS assenti → posizione **non verificata da metadati** → accettata senza penalizzazione, dispatch consentito. La mancanza di metadati GPS è comune (dispositivi con EXIF location disattivato) e non costituisce segnale di frode.

### Regola generale AI
Nessuna segnalazione raggiunge la dashboard dell'autorità senza aver superato il pre-screen AI. L'AI è il gatekeeper obbligatorio tra cittadino e autorità.

---

## 11. INFRASTRUTTURA E DEPLOYMENT

| Componente | Città Chiara (IT) | CivicAlert (UK) |
|---|---|---|
| Backend API | Vercel Serverless | Vercel Serverless |
| URL backend | `citta-chiara.vercel.app` | TBD |
| Database | Supabase `ljbrmoozwrqrbuldmbez` | DigitalOcean LON1 (UK GDPR) |
| Auth | Supabase Auth + Google OAuth | Supabase Auth + Google OAuth |
| Storage media | Supabase Storage | DigitalOcean Spaces LON1 |
| Dashboard | Vercel (Next.js 16) | Vercel (Next.js 16) |
| App mobile | EAS preview → Expo Go | EAS preview → Expo Go |
| Notifiche push | Expo Notifications | Expo Notifications |

### Google OAuth — configurazione attuale (Città Chiara)
- Google Cloud project: "Citta Chiara App"
- Web Client: "Citta chiara login"
- Redirect URI Supabase: `https://ljbrmoozwrqrbuldmbez.supabase.co/auth/v1/callback`
- Redirect URLs configurati su Supabase: `cittachiara://oauth/callback` · `exp-cittachiara://oauth/callback` · `it.alfasolution-tech.cittachiara://google-auth`

---

## 12. BUSINESS MODEL

| Tier | Target | Prezzo |
|---|---|---|
| Tier 1 | Small Councils — feature base, volume limitato | £500/mese · £6.000/anno |
| Tier 2 | Medium Councils & Agencies — analytics, integrazioni, API | £1.200/mese · £14.400/anno |
| Tier 3 | Large Cities / National Bodies — multi-territory, white-label, full API | £2.500–4.000/mese (bespoke) |
| Setup fee | Per authority — onboarding, config AI, integrazione | £1.500 una tantum |
| Analytics add-on | Dashboard custom, cross-council benchmarking | £300–500/mese |
| Agency buffer | Sviluppo web/mobile per clienti terzi QC Tech | £2.000–5.000/progetto |

### Roadmap commerciale
- Q2–Q3 2026: MVP live — app mobile + web portal + AI routing engine
- Q4 2026: 2–3 pilot councils UK (free o low-cost) per referenze
- Anno 2: 5–10 autorità UK pagate, G-Cloud registration, primi pilot EU
- Anno 3: 15+ UK authorities, 20–30% copertura UK locale, espansione internazionale

---

## 13. COMPETITOR LANDSCAPE

| Competitor | Limite critico | Vantaggio QC Tech |
|---|---|---|
| FixMyStreet (mySociety) | Esclude safety e ASB. No AI. No evidence obbligatoria. Post pubblici. | AI routing + evidence obbligatoria + safety scope completo + privato |
| SeeClickFix (CivicPlus, USA) | Non presente UK. Non UK GDPR. Sistema 311 USA. | UK-native. UK GDPR by design. Strutturato per PA locale UK e IT. |
| StreetSafe (Police.uk) | Solo polizia. Anonimo. No dashboard. No AI. No scope civico. | Spectrum completo civic + safety. Named user. Dashboard. AI. |
| Tool bespoke council | Frammentati. No cross-council data. Alto costo manutenzione. No AI. | Singola piattaforma SaaS. Cross-council analytics. Managed service. |
| NewhamStaySafe App | Dismessa — rimossa dagli store. | Conferma il gap di mercato che Civic Alert colma. |

---

## 14. STATO CORRENTE (07 June 2026)

### Completato
- Monorepo `civic-unified` creato con Turborepo e npm workspaces
- 164 file migrati da `citta-chiara-github` a `apps/mobile/`
- Fix P0 HTTP 500 su tRPC/Vercel: conflitto ESM/CommonJS con `jose` risolto via dynamic import in `api/index.ts` e `"type":"module"` in `package.json`
- Palette istituzionale IT applicata
- Colonne Supabase mancanti aggiunte (`splash_skyline_color` e altri)
- EAS environment variables configurate
- Build Android preview completata e installata su device fisico
- Google OAuth risolto — redirectTo corretto per EAS e Expo Go
- EAS OTA update pubblicato (update group 90e58003) — login Google funzionante su device
- Dashboard UK live: `civicalert-dashboard.vercel.app`
- Dashboard IT live: `citta-chiara-dashboard.vercel.app`
- Fix mobile: riga report completamente cliccabile per tutti gli stati
- Fix entrambe le dashboard: location fallback "GPS: lat, lng" quando indirizzo null
- Fix entrambe le dashboard: ora accanto alla data nei report ✅ verificato
- Git remote aggiornato: origin → `github.com/QCTech-Ltd/civic-unified`

### Bloccanti aperti

**Unico blocco aperto — Step 8**
EAS build Android demo da eseguire quando tutte le feature sono verificate su device.

### Step operativi da completare (sequenza)
- [x] Fix P0 tRPC
- [x] Repo civic-unified creato
- [x] Migrazione mobile
- [x] Step 4: Fix Google OAuth — redirectTo corretto (cittachiara:// EAS, exp-cittachiara:// Expo Go)
- [x] Step 5: EAS update preview pubblicato (update group 90e58003) — login Google testato e funzionante su device
- [x] Step 6: Dashboard UK live — `civicalert-dashboard.vercel.app` — Next.js 16, RBAC, lista segnalazioni, mappa, dettaglio, gestione stati, riga report cliccabile, location fallback GPS, ora accanto alla data
- [x] Step 7: Dashboard IT live — `citta-chiara-dashboard.vercel.app` — italiano, palette #1A3F7F/#0D2240/#C8102E, Supabase `ljbrmoozwrqrbuldmbez`, stesse feature UK localizzate. Fix mobile: riga report completamente cliccabile per tutti gli stati
- [ ] Step 8: EAS build Android demo (consuma 1 delle 15 build mensili disponibili)

### URL produzione
| Prodotto | URL |
|---|---|
| Dashboard UK | `civicalert-dashboard.vercel.app` |
| Dashboard IT | `citta-chiara-dashboard.vercel.app` |
| Backend API | `citta-chiara.vercel.app` |

### Credenziali test dashboard
- Login: `alessandro.f1983@gmail.com` / `CivicDash@2026!`
- Supabase project: `ljbrmoozwrqrbuldmbez`
- Git remote origin: `github.com/QCTech-Ltd/civic-unified`

---

## 15. ERRORI TECNICI NOTI

| ID | Problema | Stato | Fix applicato |
|---|---|---|---|
| ERR-P0 | tRPC HTTP 500 su Vercel — ESM/CJS conflict `jose` | RISOLTO | Dynamic import in `api/index.ts` + `"type":"module"` in `package.json` |
| ERR-AUTH-01 | Google OAuth: `redirectTo` sbagliato → browser mostra bundle JS Vercel | RISOLTO | redirectTo: cittachiara://oauth/callback (EAS) / exp-cittachiara://oauth/callback (Expo Go) |
| ERR-DB-01 | Drizzle push fallisce con `TypeError: Cannot read properties of undefined (reading 'replace')` | RISOLTO | DROP CHECK constraints via PL/pgSQL DO block su Supabase |

---

## 16. EAS BUILD — CONTATORI

Reset automatico ogni primo del mese (piano gratuito Expo).

| Platform | Disponibili | Uso consentito |
|---|---|---|
| Android | 15 | Produzione, store, demo finale a cliente |
| iOS | 15 | Produzione, store, demo finale a cliente |

I test avvengono esclusivamente tramite Expo Go e `eas update --branch preview`. Nessuna build EAS per sviluppo o debugging.

---

## 17. ANTI-PATTERN — NON RIPETERE

- Scrivere codice senza schema DB approvato.
- Dichiarare "funziona in locale" senza test su device fisico o Vercel preview.
- Usare `eas build` per test o debugging.
- Avviare una sessione Claude Code senza aver letto questo file e `ERRORI_TECNICI_RISOLTI.md`.
- Modificare lo stack a sessione iniziata senza aggiornare questo file.
- Chiudere una sessione senza aggiornare `## STATO CORRENTE` e `## CHANGELOG`.
- Import diretti tra `apps/mobile/` e `apps/dashboard/` senza passare per `packages/`.
- Fetch raw tra frontend e backend — usare sempre tRPC.

---

## 18. CHANGELOG

| Data | Natura aggiornamento |
|---|---|
| Maggio 2026 | Sessione fondativa: creazione monorepo, decisioni strategiche core, fix P0 tRPC, build Android preview, Google OAuth identificato come blocco aperto |
| 07 June 2026 v2.4 | Protocollo checkpoint reso automatico e obbligatorio per frequenza (dopo ogni unità atomica) — non più legato alla soglia di contesto. Aggiunta dichiarazione unità atomiche obbligatoria a inizio sessione. Perdita massima per interruzione limitata all'unità corrente. |
| 07 June 2026 v2.3 | Aggiornato stato corrente post-sessione Claude Code: Step 4/5/6/7 completati. Dashboard UK e IT live. Fix OAuth, fix riga cliccabile mobile, fix location fallback, fix ora nei report (verificare deployment). ERR-AUTH-01 marcato RISOLTO. Step 8 unico step rimanente. |
| 06 June 2026 v2.2 | Rimossi tutti i riferimenti a Cursor — strumento di implementazione è Claude Code. Aggiunto protocollo Claude Code completo: avvio sessione, unità atomiche, chiusura sicura per soglia di utilizzo, ripresa post-soglia, fonte di verità Git + MD. Aggiornate regole operative di conseguenza. |
| 06 June 2026 v2.1 | Aggiunti: validazione metadati GPS (Layer 5 pre-screen), mappa pubblica con logica stati pin, notifiche opt-in Opzione B (categoria + raggio, default disattivate, solo safety-critical attivabili). Aggiornati flussi Step 4/5/6/7 e flusso dashboard→app con propagazione mappa pubblica. |
| 06 June 2026 | Versione 2.0 — riscrittura completa. Allineamento a Business Plan V4 e Pitch Deck V3. Aggiunti: web portal citizen-side, flussi app↔dashboard dettagliati, matrice routing AI per tipo incidente e autorità (IT e UK), specifiche complete dashboard authority-side fase 1 e fase 2, architettura AI a 4 layer, spec media (60s video, low-light camera), infrastruttura separata IT/UK, rebrand Quantum Code Technologies. Correzioni: repo → github.com/QCTech-Ltd/civic-unified, path locale → /Users/alessandrofiscella/Desktop/QC Tech/Progetti/civic-unified/, priorità sviluppo invertita (UK prima, IT seconda) |
