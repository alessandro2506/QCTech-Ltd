# CIVIC_UNIFIED_APP.md — App Civica Unificata IT + UK
> Progetto: Nuovo sviluppo unificato (sostituisce CITTA_CHIARA.md + CIVICALERT_APP.md per la parte app)
> Creato: Maggio 2026
> Ultimo aggiornamento: Maggio 2026 — Monorepo su GitHub, migrazione mobile completata ✅

---

## ⚠️ REGOLA DI SESSIONE — LEGGERE PRIMA DI OGNI RISPOSTA
Questo file va letto all'inizio di ogni sessione su questo progetto.
Non procedere con alcun prompt Cursor o decisione tecnica senza aver verificato lo stato qui.

---

## 1. DECISIONI STRATEGICHE PRESE ✅

### A) Repo: UNIFICATA su GitHub AlvencoLtd ✅
- **Organizzazione GitHub**: `https://github.com/AlvencoLtd`
- **Nome repo**: `civic-unified`
- **URL**: `https://github.com/AlvencoLtd/civic-unified`
- **Cartella locale**: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/civic-unified/`
- **Struttura**: monorepo npm workspaces + Turborepo
- **App distribuite**: DUE app separate su App Store / Play Store (bundle ID diversi)
- **Routing dashboard**: basato su `country_code` del profilo ente — NON geolocalizzazione
- **country_code**: hardcoded nel bundle via EAS env per build

### B) Mercato prioritario: ITALIA ✅
- Demo da mostrare entro poche settimane
- Fase 1: solo mercato italiano, struttura enti IT
- UK (CivicAlert) in fase 2

### C) Modello go-to-market ✅
- **Cliente finale app**: CITTADINO (scarica, segnala — gratis)
- **Cliente pagante**: ENTE (abbonamento SaaS dashboard)
- Modello B2G

### D) Nome app ✅
- 🇮🇹 **Città Chiara** — mercato italiano
- 🇬🇧 **CivicAlert** — mercato UK

### E) Invio squadra tecnica ✅
- Form precompilato + rubrica enti da subito + email Resend + PDF server-side

### F) Strategia Cursor ✅
- Una sola finestra Cursor sulla root `civic-unified/`
- Seconda finestra solo su sottocartella se necessario

---

## 2. ARCHITETTURA TECNICA

### Stack
| Layer | Tecnologia |
|---|---|
| Mobile framework | Expo SDK 54 + RN 0.81 |
| Routing app | Expo Router 6 |
| Styling | NativeWind + Tailwind |
| State / Data | tRPC + TanStack Query v5 |
| ORM | Drizzle ORM |
| Auth | Supabase Auth (JWT HS256) |
| Database | Supabase PostgreSQL + PostGIS |
| Backend deploy | Vercel Serverless Functions |
| Mappa | react-native-maps + InteractiveMap |
| Push notifications | Expo Notifications |
| AI classification | GPT-4o-mini |
| PDF report | pdf-lib server-side |
| Email | Resend |

### Struttura monorepo attuale
```
civic-unified/
├── apps/
│   ├── mobile/          ✅ popolato (164 file, migrazione da citta-chiara-github)
│   └── dashboard/       ⏳ da costruire (solo .gitkeep)
├── packages/
│   ├── server/          ⏳ da costruire (solo .gitkeep)
│   ├── db/              ⏳ da costruire (solo .gitkeep)
│   └── shared/
│       └── i18n/        ✅ it.ts, en.ts, index.ts
├── package.json         ✅ workspaces root
├── turbo.json           ✅
└── tsconfig.json        ✅
```

### Bundle ID separati
| Market | Bundle ID | App name | EAS profile |
|---|---|---|---|
| Italia | `it.alfasolution-tech.cittachiara` | Città Chiara | `preview-it`, `production-it` |
| UK | `co.uk.alvenco.civicalert` | CivicAlert | `preview-uk`, `production-uk` |

### Supabase
- **Progetto**: `citta-chiara` (ID: `ljbrmoozwrqrbuldmbez`)
- **URL**: `https://ljbrmoozwrqrbuldmbez.supabase.co`
- **Vercel backend**: `https://citta-chiara.vercel.app`
- **Tabelle esistenti**: users, profiles, reports, sos_logs, news, factchecks, factcheck_requests, access_logs, app_theme
- **Nota drizzle-kit**: bug con schemi Supabase — usare `drizzle-kit push` solo dopo fix bug upstream

---

## 3. STATO TECNICO ATTUALE

### ✅ Completati
- Fix P0 HTTP 500 tRPC su Vercel
- Monorepo `civic-unified` creato su `github.com/AlvencoLtd`
- Struttura monorepo (workspaces, turbo, i18n)
- Migrazione codice mobile da `citta-chiara-github` → `apps/mobile/`
- EAS profiles separati IT/UK in `apps/mobile/eas.json`
- `"type": "module"` in `apps/mobile/package.json`
- Push su GitHub: commit `0803184`

### 🔴 Prossimo step immediato — Adattamento app mobile
Il codice mobile è stato copiato 1:1 da citta-chiara-github.
Va ora adattato per il monorepo e aggiornato con le nuove funzionalità:

1. **Palette istituzionale IT** — aggiornare `constants/theme.ts` con colori `#1A3F7F`, `#0D2240`, `#C8102E`
2. **COUNTRY_CODE** — aggiungere supporto `process.env.COUNTRY_CODE` in `app.config.ts`
3. **Pin grigio `pending_approval`** — implementare stato grigio sulla mappa
4. **Flusso segnalazione 4-tap** — ottimizzare `app/(tabs)/segnala.tsx`
5. **Notifica push al submit** — trigger immediato dopo invio segnalazione

### 🟡 Step successivo — Dashboard fase 1 IT
- Setup Next.js in `apps/dashboard/`
- Login ente, lista segnalazioni, rubrica enti
- Alert inattività operatore (5 min)
- Invio squadra tecnica con email + PDF

### 🟢 Step futuro — EAS build demo
- Preview build Android per demo IT
- Test su device fisico

---

## 4. FLUSSO SEGNALAZIONE — COMPORTAMENTO DEFINITIVO

### Cittadino (app mobile)
1. Tap FAB "+" → flusso 4-tap:
   - Step 1: categoria (grid icone grandi) — location in background
   - Step 2: sottocategoria (chips)
   - Step 3: foto/video OBBLIGATORIO da fotocamera real-time
   - Step 4: conferma mappa (pin draggable) + nota 120 chars → INVIA
2. Dopo invio: pin GRIGIO + banner "In stato di approvazione" + notifica push a utenti vicini + notifica ente

### Ente (dashboard web)
- Nuova segnalazione → alert + suono
- 5 min inattività con segnalazione non aperta → pop-up reminder (no se sta leggendo altra segnalazione)
- Azioni: Approva / Rifiuta / Invia a squadra / Risolto (con proof-of-work)

### Pin colori mappa
| Stato | Colore | Hex |
|---|---|---|
| In approvazione | Grigio | `#9CA3AF` |
| Zona pericolosa | Rosso scuro | `#DC2626` |
| Rifiuti | Rosso | `#EF4444` |
| Illuminazione | Ambra | `#F59E0B` |
| Strada | Indaco | `#6366F1` |
| Degrado | Viola | `#8B5CF6` |
| Rumori | Blu | `#3B82F6` |
| In lavorazione | Arancione | `#F97316` |
| Risolta | Verde | `#22C55E` |
| Rifiutata | Invisibile | — |

---

## 5. IDENTITÀ VISIVA

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
| GDS Red urgenza/SOS | `#D4351C` |
| GDS Light Grey | `#F3F2F1` |
| GDS Blue link/CTA | `#1D70B8` |
| Success | `#00703C` |

---

## 6. DASHBOARD — ARCHITETTURA MULTI-ENTE

### Role-based access
```
SuperAdmin (Alvenco)     → tutto
CountryAdmin (IT/UK)     → tutti gli enti del paese
EntityAdmin              → il suo ente
Operator                 → segnalazioni del suo ente
TechTeam esterno         → solo email con link (no dashboard)
```

### Rubrica enti — schema DB
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

## 7. CHANGELOG

| Data | Modifica |
|---|---|
| Maggio 2026 | Creazione file — sessione fondativa |
| Maggio 2026 | Confermate: nomi, rubrica enti, strategia Cursor |
| Maggio 2026 | Fix P0 tRPC Vercel completato ✅ |
| Maggio 2026 | Monorepo civic-unified creato su AlvencoLtd ✅ |
| Maggio 2026 | Migrazione mobile completata (164 file, commit 0803184) ✅ |
