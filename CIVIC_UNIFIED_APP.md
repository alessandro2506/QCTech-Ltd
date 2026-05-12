# CIVIC_UNIFIED_APP.md — App Civica Unificata IT + UK
> Progetto: Nuovo sviluppo unificato (sostituisce CITTA_CHIARA.md + CIVICALERT_APP.md per la parte app)
> Creato: Maggio 2026
> Ultimo aggiornamento: Maggio 2026 — Fix P0 completato e verificato ✅

---

## ⚠️ REGOLA DI SESSIONE — LEGGERE PRIMA DI OGNI RISPOSTA
Questo file va letto all'inizio di ogni sessione su questo progetto.
Non procedere con alcun prompt Cursor o decisione tecnica senza aver verificato lo stato qui.

---

## 1. DECISIONI STRATEGICHE PRESE ✅ (non riaprire senza motivo)

### A) Repo: UNIFICATA su GitHub AlvencoLtd
- **Organizzazione GitHub**: `https://github.com/AlvencoLtd` (non più account personale `alessandro2506`)
- **Nome repo**: `civic-unified`
- **Cartella locale**: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified/`
- **Struttura**: monorepo npm workspaces — un'unica codebase, due brand (IT + UK)
- **App distribuite**: DUE app separate su App Store / Play Store (bundle ID diversi)
- **Routing dashboard**: basato su `country_code` del profilo ente — NON sulla geolocalizzazione
- **country_code**: hardcoded nel bundle di ogni app al momento della build EAS (non inferito runtime)

### B) Mercato prioritario: ITALIA ✅
- Demo da mostrare entro poche settimane
- Fase 1: solo mercato italiano, struttura enti IT
- UK (CivicAlert) in fase 2 — architettura già predisposta dalla fase 1

### C) Modello go-to-market ✅
- **Cliente finale app**: il CITTADINO (scarica l'app, fa segnalazioni — gratis)
- **Cliente pagante**: l'ENTE (comune, provincia, polizia) — abbonamento SaaS dashboard
- Modello B2G (Business to Government)

### D) Nome app ✅ CONFERMATO
- 🇮🇹 **Città Chiara** — mercato italiano
- 🇬🇧 **CivicAlert** — mercato UK
- Stessa codebase, stesso backend, stesso DB — nome/colori/stringhe cambiano via `COUNTRY_CODE`

### E) Invio squadra tecnica ✅ CONFERMATO
- Form precompilato con dati segnalazione
- Selezione dalla **rubrica enti/squadre** (da implementare da subito) o email manuale
- Email via Resend con PDF allegato generato server-side
- Rubrica isolata per `entity_id`, gestibile da Impostazioni dashboard
- Storico invii per ogni contatto nella rubrica

### F) Strategia Cursor ✅ CONFERMATA
- **Una sola finestra Cursor** sulla root `civic-unified/`
- Se necessario lavorare su due aree in parallelo: seconda finestra Cursor SOLO su sottocartella
- I prompt vengono indirizzati su path specifici nei messaggi a Cursor

---

## 2. ARCHITETTURA TECNICA

### Stack
| Layer | Tecnologia | Fonte |
|---|---|---|
| Mobile framework | Expo SDK 54 + RN 0.81 | Città Chiara (più stabile) |
| Routing app | Expo Router 6 (file-based) | Entrambi |
| Styling | NativeWind + Tailwind | Città Chiara |
| State / Data | tRPC + TanStack Query v5 | Città Chiara (type-safe) |
| ORM | Drizzle ORM | Città Chiara |
| Auth | Supabase Auth (JWT HS256) | Città Chiara |
| Database | Supabase PostgreSQL + PostGIS | Entrambi |
| Backend deploy | Vercel Serverless Functions | Città Chiara |
| Mappa | react-native-maps + InteractiveMap | Città Chiara (funziona iOS+Android) |
| Splash screen | expo-splash-screen contain + imageWidth:280 | Città Chiara (corretto Android) |
| Tab bar | Glassmorphism + BlurView | Città Chiara |
| ThemeContext | Dinamico da Supabase + COUNTRY_CODE | Città Chiara (esteso) |
| Push notifications | Expo Notifications + FCM | Entrambi |
| AI classification | GPT-4o-mini | CivicAlert spec |
| Media compression | Sharp (foto) + ffmpeg (video) | CivicAlert spec |
| Proof-of-work | Obbligatorio prima di "Risolto" | CivicAlert spec |
| PDF report | pdf-lib server-side | Nuovo |
| Email invio squadra | Resend | Città Chiara (già configurato) |

### Struttura monorepo
```
civic-unified/
├── apps/
│   ├── mobile/                       ← Expo React Native (unica codebase per IT+UK)
│   └── dashboard/                    ← Next.js web dashboard (unica per IT+UK)
├── packages/
│   ├── server/                       ← Backend tRPC + Express (condiviso)
│   ├── db/                           ← Drizzle schema + migrations (condiviso)
│   └── shared/                       ← Types, constants, i18n strings
├── package.json                      ← root workspace (npm workspaces)
└── turbo.json
```

### Bundle ID separati
| Market | Bundle ID | App name | EAS profile |
|---|---|---|---|
| Italia | `it.alfasolution-tech.cittachiara` | Città Chiara | `preview-it`, `production-it` |
| UK | `co.uk.alvenco.civicalert` | CivicAlert | `preview-uk`, `production-uk` |

---

## 3. FLUSSO SEGNALAZIONE — COMPORTAMENTO DEFINITIVO

### Sul lato cittadino (app mobile)
1. Cittadino apre app → vede mappa con pin delle segnalazioni esistenti
2. Tap FAB "+" → flusso 4-tap max:
   - Step 1: scelta categoria (grid icone grandi) — location acquisita silentemente in background
   - Step 2: scelta sottocategoria (chips)
   - Step 3: foto/video OBBLIGATORIO da fotocamera (non da galleria — real-time)
   - Step 4: conferma mappa (pin draggable) + nota opzionale 120 chars → INVIA
3. **Immediatamente dopo l'invio**:
   - Pin GRIGIO appare sulla mappa (stato `pending_approval`)
   - Banner "In stato di approvazione" al tap sul pin
   - Notifica push a tutti gli utenti nel raggio configurabile dall'ente
   - Notifica push all'ente competente sulla dashboard

### Sul lato ente (dashboard web)
- Nuova segnalazione → notifica in-dashboard + suono alert
- Se non aperta entro **5 minuti** con operatore inattivo → pop-up reminder + suono
- Operatore apre segnalazione → può: Approva / Rifiuta / Invia a squadra / Chiudi (Risolto)

### Pin colori sulla mappa
| Stato | Colore | Hex | Visibile al pubblico |
|---|---|---|---|
| In approvazione | Grigio | `#9CA3AF` | Sì (banner "in approvazione") |
| Approvata — Zona pericolosa | Rosso scuro | `#DC2626` | Sì |
| Approvata — Rifiuti | Rosso | `#EF4444` | Sì |
| Approvata — Illuminazione | Ambra | `#F59E0B` | Sì |
| Approvata — Strada | Indaco | `#6366F1` | Sì |
| Approvata — Degrado | Viola | `#8B5CF6` | Sì |
| Approvata — Rumori | Blu | `#3B82F6` | Sì |
| In lavorazione | Arancione | `#F97316` | Sì |
| Risolta | Verde | `#22C55E` | Sì (scompare dopo 24h) |
| Rifiutata | — | — | No |

---

## 4. DASHBOARD — ARCHITETTURA MULTI-ENTE

### Accesso role-based
```
SuperAdmin (Alvenco)          → vede tutto, gestisce enti e abbonamenti
CountryAdmin (IT o UK)        → vede tutti gli enti del suo paese
EntityAdmin (es. Comune PA)   → gestisce operatori e impostazioni del suo ente
Operator                      → gestisce segnalazioni assegnate al suo ente
(TechTeam esterno)            → riceve solo email con link — no accesso dashboard
```

### Rubrica enti/squadre — schema DB
```sql
CREATE TABLE entity_contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  category VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE contact_dispatch_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contact_id UUID REFERENCES entity_contacts(id),
  report_id UUID REFERENCES reports(id),
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  sent_by UUID REFERENCES council_users(id),
  notes TEXT
);
```

---

## 5. IDENTITÀ VISIVA — PALETTE DEFINITIVA

### 🇮🇹 Città Chiara
| Ruolo | Hex |
|---|---|
| Blu primario | `#1A3F7F` |
| Blu scuro sfondo/header | `#0D2240` |
| Rosso urgenza/SOS | `#C8102E` |
| Bianco istituzionale | `#F5F5F5` |
| Testo su scuro | `#EEF2F7` |
| Accent gold (tab active) | `#E8C204` |
| Success | `#22C55E` |

### 🇬🇧 CivicAlert
| Ruolo | Hex |
|---|---|
| GDS Navy primario | `#003078` |
| GDS Dark | `#0B0C0C` |
| GDS Red urgenza/SOS | `#D4351C` |
| GDS Light Grey | `#F3F2F1` |
| GDS Blue link/CTA | `#1D70B8` |
| Success | `#00703C` |

---

## 6. PROBLEMI TECNICI — STATO AGGIORNATO

### ✅ RISOLTI
- **P0 — HTTP 500 tRPC su Vercel**: RISOLTO
  - Fix applicato: `api/index.ts` con dynamic import, `vercel.json` espanso, `"type":"module"` in package.json
  - Verificato: `curl /api/health` → `{"ok":true}` ✅
  - Verificato: `curl /api/trpc/report.getAll` → risposta tRPC strutturata 404 (procedura non trovata) ✅
  - Nota DB: tabelle già esistenti nel DB Supabase `citta-chiara` (ljbrmoozwrqrbuldmbez)
  - Nota drizzle-kit: bug noto con schemi Supabase — `db:push` non necessario (tabelle già presenti)

### 🔴 P1 — Prossimo step immediato
- [ ] Crea repo `civic-unified` su `github.com/AlvencoLtd`
- [ ] Init locale in `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified/`
- [ ] Setup npm workspaces + Turborepo
- [ ] Migrazione codice mobile da Città Chiara
- [ ] Pin grigio `pending_approval` su mappa
- [ ] Dashboard fase 1 IT

### 🟡 P2 — Fase 1 completamento
- [ ] AI classification GPT-4o-mini
- [ ] Proof-of-work obbligatorio
- [ ] PDF generazione server-side (pdf-lib)
- [ ] Rubrica enti con storico invii
- [ ] Token temporaneo per link segnalazione a squadra esterna

---

## 7. REPO E GITHUB

### Target
- **App unificata**: `https://github.com/AlvencoLtd/civic-unified`
- **Locale**: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified/`

### Esistente (tenere come riferimento, non cancellare)
- Città Chiara: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/citta-chiara-github/`
  - Supabase project: `citta-chiara` (ID: ljbrmoozwrqrbuldmbez)
  - Vercel: `https://citta-chiara.vercel.app`
  - DB: tabelle già presenti, drizzle-kit ha bug con schemi Supabase
- CivicAlert: `https://github.com/alessandro2506/civicalert`

---

## 8. PROSSIMI STEP — SEQUENZA OPERATIVA

### ✅ Completati
1. Fix P0 HTTP 500 tRPC su Vercel ✅
2. Verifica deploy Vercel ✅

### 🔴 Da fare ora (in ordine)
**Step 1** — Crea repo su GitHub AlvencoLtd
- Vai su `github.com/AlvencoLtd` → New repository → `civic-unified` → Private

**Step 2** — Init locale monorepo
```bash
mkdir "/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified"
cd "/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified"
git init
git remote add origin https://github.com/AlvencoLtd/civic-unified.git
```

**Step 3** — Setup monorepo (prompt Cursor pronto)

**Step 4** — Migrazione mobile + nuove funzionalità

**Step 5** — Dashboard fase 1 IT

**Step 6** — EAS build demo

---

## 9. CHANGELOG

| Data | Modifica |
|---|---|
| Maggio 2026 | Creazione file — sessione fondativa, decisioni strategiche core |
| Maggio 2026 | Confermate: nomi Città Chiara/CivicAlert, rubrica enti da subito, strategia Cursor monorepo |
| Maggio 2026 | Fix P0 completato e verificato — tRPC funzionante su Vercel ✅ |
