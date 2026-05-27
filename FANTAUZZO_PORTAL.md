# FANTAUZZO_PORTAL.md
# Progetto: Studio Consulenza - Rag. Fantauzzo — Portale Documentale Digitale
> Creato: 26 Maggio 2026
> Repo: `fantauzzo-portal` (GitHub org AlvencoLtd)
> Percorso locale: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/fantauzzo-portal/`
> Deploy test: `fantauzzo-portal.vercel.app`
> Deploy produzione: `portale.studiofantauzzo.it`
> Contratto: ALV-2026-006 (da generare)
> Supabase progetto: `fantauzzo-portal`
> R2 bucket: `fantauzzo-docs`

---

## SEZIONE 1 — PROJECT CONTEXT

### Cos'è il prodotto
Web App custom mid-complexity per la gestione documentale digitale dello Studio Fantauzzo. Due aree funzionali segregate: Dashboard Studio (backoffice privato per i consulenti) e Portale Clienti (read-only per le aziende clienti e i loro collaboratori).

### Dati chiave
- ~100 aziende clienti
- ~300 utenti totali (mix di ruoli)
- Storage documenti: PDF da 3–12 MB, ~70 GB anno 1, ~210 GB anno 3
- Database: solo metadati — ~20–30 MB/anno (ampiamente nel tier Pro)

### Stack
| Layer | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Auth | Supabase Auth (email + password, reset via email) |
| Database | Supabase PostgreSQL con Row Level Security (RLS) |
| Storage file | Cloudflare R2 (pay-per-use, zero egress, `@aws-sdk/client-s3`) |
| Email inviti | Supabase Auth built-in + template custom |
| Styling | Tailwind CSS 4 |
| Icone | lucide-react |
| Upload | react-dropzone |
| Hosting | Vercel |
| Repository | GitHub org AlvencoLtd |

### Palette — OBBLIGATORIA
| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#FDF5F0` | Sfondo globale app |
| `--color-accent` | `#F5C49A` | Badge, highlight, tag |
| `--color-primary` | `#C8502D` | Bottoni CTA, link attivi |
| `--color-dark` | `#5C1E10` | Sidebar active pill, footer, testi bold |
| `--color-text` | `#2A1A10` | Testo corpo |
| `--color-muted` | `#9A7B6B` | Label, caption, testo secondario |
| `--color-white` | `#FFFFFF` | Card background |
| `--color-card-shadow` | `rgba(92,30,16,0.08)` | Shadow card |

### Layout UI (da screenshot approvato)
- Sidebar sinistra fissa (bianca, voce attiva con pill `#5C1E10`)
- Area contenuto principale con topbar
- Card: bianche, border-radius 16px, shadow leggera
- Bottone primario: pill `#C8502D`, testo bianco
- Badge visibilità: `#F5C49A`
- Spacing generoso, non compresso

---

## SEZIONE 2 — SISTEMA RUOLI E VISIBILITÀ

### Ruoli
| Ruolo | Chi è | Dashboard |
|---|---|---|
| `studio_admin` | Consulente dello studio | Studio (CRUD completo) |
| `client_admin` | Referente principale azienda | Portale (tutti i doc, anno corrente) |
| `accountant` | Ragioniere dell'azienda | Portale (solo doc tag `ragioniere`) |
| `external_pro` | Collaboratore esterno | Portale (solo doc tag `esterno`) |

### Tagging documenti
Ogni documento ha `visibility_tags text[]` in PostgreSQL:
- `["tutti"]` → visibile a tutti i ruoli del cliente
- `["ragioniere"]` → solo `accountant`
- `["esterno"]` → solo `external_pro`
- `["tutti", "ragioniere"]` → `client_admin` + `accountant`

Le RLS PostgreSQL filtrano a livello database — zero filtering client-side.

---

## SEZIONE 3 — SCHEMA DATABASE

```sql
-- Aziende clienti dello studio
CREATE TABLE clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Utenti con ruoli
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  client_id uuid REFERENCES clients,   -- NULL per studio_admin
  role text NOT NULL CHECK (role IN ('studio_admin','client_admin','accountant','external_pro')),
  full_name text,
  email text,
  created_at timestamptz DEFAULT now()
);

-- Documenti caricati
CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES clients ON DELETE CASCADE,
  year int NOT NULL,
  filename text NOT NULL,
  original_filename text NOT NULL,
  storage_path text NOT NULL,           -- path in R2: {slug}/{year}/{uuid}_{filename}
  visibility_tags text[] NOT NULL DEFAULT '{"tutti"}',
  file_size bigint,
  mime_type text,
  uploaded_by uuid REFERENCES profiles,
  uploaded_at timestamptz DEFAULT now()
);

-- Log ogni download
CREATE TABLE download_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid NOT NULL REFERENCES documents ON DELETE CASCADE,
  user_id uuid REFERENCES profiles,
  downloaded_at timestamptz DEFAULT now(),
  ip_address text
);

-- Indici
CREATE INDEX idx_documents_client_year ON documents(client_id, year);
CREATE INDEX idx_documents_tags ON documents USING GIN(visibility_tags);
CREATE INDEX idx_download_logs_doc ON download_logs(document_id);
```

### RLS Policies (da creare su Supabase dopo le tabelle)

```sql
-- Abilita RLS su tutte le tabelle
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE download_logs ENABLE ROW LEVEL SECURITY;

-- Helper function per ruolo corrente
CREATE OR REPLACE FUNCTION current_role_fn()
RETURNS text AS $$
  SELECT role FROM profiles WHERE id = auth.uid()
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Helper function per client_id corrente
CREATE OR REPLACE FUNCTION current_client_id_fn()
RETURNS uuid AS $$
  SELECT client_id FROM profiles WHERE id = auth.uid()
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- CLIENTS: studio_admin vede tutto, clienti vedono solo la propria
CREATE POLICY "clients_select" ON clients FOR SELECT USING (
  current_role_fn() = 'studio_admin'
  OR id = current_client_id_fn()
);
CREATE POLICY "clients_insert" ON clients FOR INSERT WITH CHECK (current_role_fn() = 'studio_admin');
CREATE POLICY "clients_update" ON clients FOR UPDATE USING (current_role_fn() = 'studio_admin');

-- PROFILES: studio_admin vede tutto, utenti vedono solo il proprio profilo
CREATE POLICY "profiles_select" ON profiles FOR SELECT USING (
  current_role_fn() = 'studio_admin' OR id = auth.uid()
);
CREATE POLICY "profiles_insert" ON profiles FOR INSERT WITH CHECK (current_role_fn() = 'studio_admin');
CREATE POLICY "profiles_update" ON profiles FOR UPDATE USING (current_role_fn() = 'studio_admin' OR id = auth.uid());

-- DOCUMENTS: logica ruoli + visibilità tag + solo anno corrente per clienti
CREATE POLICY "documents_select" ON documents FOR SELECT USING (
  current_role_fn() = 'studio_admin'
  OR (
    client_id = current_client_id_fn()
    AND year = EXTRACT(YEAR FROM NOW())::int
    AND (
      current_role_fn() = 'client_admin'
      OR visibility_tags @> ARRAY[current_role_fn()]
      OR visibility_tags @> ARRAY['tutti']
    )
  )
);
CREATE POLICY "documents_insert" ON documents FOR INSERT WITH CHECK (current_role_fn() = 'studio_admin');
CREATE POLICY "documents_update" ON documents FOR UPDATE USING (current_role_fn() = 'studio_admin');
CREATE POLICY "documents_delete" ON documents FOR DELETE USING (current_role_fn() = 'studio_admin');

-- DOWNLOAD LOGS: studio_admin vede tutto, utenti vedono solo i propri
CREATE POLICY "logs_select" ON download_logs FOR SELECT USING (
  current_role_fn() = 'studio_admin' OR user_id = auth.uid()
);
CREATE POLICY "logs_insert" ON download_logs FOR INSERT WITH CHECK (user_id = auth.uid());
```

---

## SEZIONE 4 — STRUTTURA APP

```
fantauzzo-portal/
├── app/
│   ├── layout.tsx                          ← Root layout (font, metadata)
│   ├── page.tsx                            ← Redirect a /login
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx                    ← Login unica per tutti i ruoli
│   ├── (studio)/                           ← Route group — solo studio_admin
│   │   ├── layout.tsx                      ← Middleware check ruolo + sidebar
│   │   ├── dashboard/
│   │   │   └── page.tsx                    ← Lista clienti con card
│   │   ├── clienti/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                ← Folder tree anni del cliente
│   │   │       └── [year]/
│   │   │           └── page.tsx            ← Lista documenti + upload
│   │   └── impostazioni/
│   │       └── page.tsx                    ← Gestione utenti clienti
│   ├── (portal)/                           ← Route group — clienti (tutti i ruoli non-studio)
│   │   ├── layout.tsx                      ← Middleware check ruolo + sidebar portale
│   │   └── documenti/
│   │       └── page.tsx                    ← Doc anno corrente filtrati per ruolo
│   └── api/
│       ├── upload/
│       │   └── route.ts                    ← Upload multipart → R2
│       └── download/
│           └── [id]/
│               └── route.ts                ← Genera signed URL R2 (5 min) + log
├── components/
│   ├── studio/
│   │   ├── StudioSidebar.tsx               ← Sidebar dashboard studio
│   │   ├── ClientCard.tsx                  ← Card cliente con ultimo upload
│   │   ├── FolderTree.tsx                  ← Anni del cliente come cartelle
│   │   ├── UploadZone.tsx                  ← Drag & drop con react-dropzone + progress
│   │   ├── DocumentRow.tsx                 ← Riga documento con tag, size, data, azioni
│   │   └── UserManager.tsx                 ← CRUD utenti clienti con invito email
│   ├── portal/
│   │   ├── PortalSidebar.tsx               ← Sidebar portale clienti
│   │   ├── DocumentList.tsx                ← Lista documenti filtrata per ruolo
│   │   └── DownloadButton.tsx              ← Bottone download con signed URL
│   └── shared/
│       ├── TagBadge.tsx                    ← Badge visibilità (tutti/ragioniere/esterno)
│       ├── EmptyState.tsx                  ← Stato vuoto riusabile
│       └── LoadingSpinner.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts                       ← createBrowserClient
│   │   ├── server.ts                       ← createServerClient (cookie)
│   │   └── middleware.ts                   ← Auth check + redirect
│   ├── r2.ts                               ← S3Client R2 + getSignedUrl
│   └── utils.ts
├── middleware.ts                           ← Supabase Auth middleware globale
└── .env.local
```

---

## SEZIONE 5 — FLUSSI UX DETTAGLIATI

### Login (tutti i ruoli)
1. `/login` → form email + password
2. Supabase Auth verifica credenziali
3. Query `profiles` per ruolo utente
4. Redirect: `studio_admin` → `/dashboard` | altri → `/documenti`

### Studio Admin — Gestione clienti
1. `/dashboard` → grid card clienti (nome, slug, ultimo upload, num documenti)
2. Click "Nuovo cliente" → modal: nome + slug (auto-generato)
3. Click cliente → `/clienti/[slug]` → folder tree anni (2024, 2025, 2026...)
4. Click anno → `/clienti/[slug]/[year]` → tabella documenti + zona upload

### Studio Admin — Upload documento
1. Drag & drop file su UploadZone (max 50MB per file, solo PDF/DOC/XLS/ZIP)
2. Mostrare preview filename + size
3. Selezione `visibility_tags`: checkbox multipli (Tutti / Ragioniere / Esterno)
4. Conferma upload → API route `/api/upload` → R2 → record in `documents`
5. Progress bar durante upload
6. Feedback success/error

### Studio Admin — Gestione utenti
1. `/impostazioni` → lista utenti per cliente
2. "Nuovo utente" → form: email, nome, cliente (select), ruolo (select)
3. Supabase Auth `admin.inviteUserByEmail()` → email automatica con link
4. Visualizza utenti attivi con possibilità di disabilitare accesso

### Cliente — Visualizzazione documenti
1. Login → redirect `/documenti`
2. Lista documenti anno corrente, filtrata automaticamente da RLS per ruolo
3. Colonne: nome file, data caricamento, dimensione, tag visibilità, azione download
4. Click "Scarica" → fetch `/api/download/[id]` → signed URL R2 (5 min)
5. Browser apre URL → download diretto (no URL pubblico permanente)

---

## SEZIONE 6 — API ROUTES

### POST /api/upload
```typescript
// Input: FormData con file + client_id + year + visibility_tags[]
// 1. Verifica auth + ruolo studio_admin (server-side)
// 2. Genera uuid per filename
// 3. Upload a R2: PutObjectCommand
// 4. Insert record in documents (Supabase)
// 5. Return: { success: true, document_id }
```

### GET /api/download/[id]
```typescript
// Input: document id (UUID)
// 1. Verifica auth (server-side)
// 2. Fetch documento da Supabase (RLS filtra automaticamente)
// 3. Genera R2 signed URL: GetObjectCommand + getSignedUrl (expiry 300s)
// 4. Insert record in download_logs
// 5. Return: { url: signedUrl }
// Il client fa redirect al signed URL
```

---

## SEZIONE 7 — VARIABILI AMBIENTE

```env
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project-ref].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # Solo server-side — MAI esporre al client

# Cloudflare R2
R2_ACCOUNT_ID=xxxxxxxxxxxx
R2_ACCESS_KEY_ID=xxxxxxxxxxxx
R2_SECRET_ACCESS_KEY=xxxxxxxxxxxx
R2_BUCKET_NAME=fantauzzo-docs
R2_ENDPOINT=https://[account-id].r2.cloudflarestorage.com

# App
NEXT_PUBLIC_SITE_URL=https://portale.studiofantauzzo.it
```

---

## SEZIONE 8 — CURSOR RULES

```
# .cursorrules — fantauzzo-portal

## STACK E VERSIONI
- Next.js 15 App Router — MAI Pages Router
- React 19, TypeScript strict — MAI `any`
- Tailwind CSS 4 con CSS custom properties
- Supabase Auth + PostgreSQL RLS
- Cloudflare R2 via @aws-sdk/client-s3

## ARCHITETTURA
- Route groups: (auth) / (studio) / (portal) — separazione netta per ruolo
- MAI mescolare logica studio e portale nello stesso componente
- Middleware globale in middleware.ts per auth check
- Ogni route group ha il suo layout.tsx con check ruolo server-side

## SUPABASE
- Client browser: lib/supabase/client.ts → createBrowserClient
- Client server: lib/supabase/server.ts → createServerClient con cookie
- MAI usare service_role key nel browser — SOLO in API routes server-side
- RLS è attiva su tutte le tabelle — non bypassare mai con service_role nel frontend
- Ogni query deve avere error handling esplicito

## R2 STORAGE
- Upload e download: SOLO via API routes server-side
- MAI esporre credenziali R2 al browser
- Signed URL: scadenza SEMPRE 300 secondi (5 minuti)
- Path documenti: {client_slug}/{year}/{uuid}_{original_filename}
- Dopo ogni download: inserire record in download_logs

## SICUREZZA — REGOLE ASSOLUTE
- Verifica ruolo server-side in OGNI API route — non fidarsi mai del client
- NESSUN URL pubblico permanente per i documenti
- Service role key: solo in variabili server, mai in NEXT_PUBLIC_*
- Validazione input: ogni API route valida tutti i parametri in ingresso

## UI / PALETTE — NON DEVIARE
- bg: #FDF5F0 | accent: #F5C49A | primary: #C8502D | dark: #5C1E10
- Sidebar active: pill background #5C1E10, testo bianco
- Card: bg white, border-radius 16px, shadow rgba(92,30,16,0.08)
- Bottone primario: #C8502D pill, testo bianco
- Usare SEMPRE variabili CSS — mai hex diretti nel JSX
- Layout: sidebar fissa sinistra + contenuto con topbar — NON modificare

## UPLOAD
- Usare react-dropzone per drag & drop
- Formati accettati: PDF, DOC, DOCX, XLS, XLSX, ZIP
- Dimensione massima: 50MB per file
- Progress bar obbligatoria durante upload
- Feedback states: idle → uploading (progress%) → success → error

## TAGGING DOCUMENTI
- visibility_tags: array PostgreSQL — valori validi: "tutti", "ragioniere", "esterno"
- UI: checkbox multipli nel pannello upload — almeno uno obbligatorio
- TagBadge: colori distinti per tag — "tutti" verde, "ragioniere" blu, "esterno" arancio

## ERRORI COMUNI DA EVITARE
- MAI fetch R2 diretto dal browser
- MAI hardcodare client_id o ruoli nel codice
- MAI signed URL senza expiry
- MAI skip del log download
- MAI testo hardcodato — usare costanti in lib/utils.ts
- MAI chiedere conferma per la fase successiva senza aver prima fatto push su GitHub e verificato il deploy su Vercel
```

---

## SEZIONE 9 — PIANO DI IMPLEMENTAZIONE

### FASE 1 — Setup infrastruttura (Settimana 1, Giorno 1-2)
- [ ] `npx create-next-app@latest fantauzzo-portal --typescript --tailwind --app`
- [ ] Installare: `@supabase/supabase-js @supabase/ssr @aws-sdk/client-s3 @aws-sdk/s3-request-presigner react-dropzone lucide-react`
- [ ] Configurare Tailwind CSS 4 con palette custom properties
- [ ] Creare progetto Supabase `fantauzzo-portal`
- [ ] Creare bucket R2 `fantauzzo-docs` (private, zero public access)
- [ ] Configurare `.env.local` con tutte le variabili
- [ ] `lib/supabase/client.ts` + `lib/supabase/server.ts`
- [ ] `lib/r2.ts` con S3Client + helper getSignedDownloadUrl
- [ ] `middleware.ts` con Supabase Auth redirect

### FASE 2 — Database e RLS (Settimana 1, Giorno 2-3)
- [ ] Eseguire SQL schema: clients + profiles + documents + download_logs
- [ ] Creare indici
- [ ] Creare helper functions `current_role_fn()` e `current_client_id_fn()`
- [ ] Applicare tutte le RLS policies
- [ ] Test RLS: verificare che ogni ruolo veda solo ciò che deve
- [ ] Creare utente studio_admin iniziale su Supabase Auth Console

### FASE 3 — Autenticazione (Settimana 1, Giorno 3)
- [ ] `app/(auth)/login/page.tsx` — form email/password
- [ ] Login handler con Supabase Auth + query ruolo
- [ ] Redirect post-login basato su ruolo
- [ ] Logout handler
- [ ] Middleware protezione route (studio) e (portal)
- [ ] Test: login con studio_admin → /dashboard; login con client_admin → /documenti

### FASE 4 — Dashboard Studio (Settimana 2, Giorno 1-2)
- [ ] `components/studio/StudioSidebar.tsx`
- [ ] `app/(studio)/layout.tsx` con sidebar
- [ ] `app/(studio)/dashboard/page.tsx` — lista clienti card
- [ ] `components/studio/ClientCard.tsx`
- [ ] `app/(studio)/clienti/[slug]/page.tsx` — folder tree anni
- [ ] `components/studio/FolderTree.tsx`

### FASE 5 — Upload e gestione documenti (Settimana 2, Giorno 3-4)
- [ ] `app/api/upload/route.ts` — multipart → R2 → Supabase
- [ ] `components/studio/UploadZone.tsx` — drag & drop + tag selector + progress
- [ ] `components/studio/DocumentRow.tsx` — riga con azioni
- [ ] `app/(studio)/clienti/[slug]/[year]/page.tsx` — lista + upload
- [ ] Test upload: PDF → R2 → record DB → visible in lista

### FASE 6 — Portale clienti e download (Settimana 2-3, Giorno 4-5)
- [ ] `app/api/download/[id]/route.ts` — signed URL + log
- [ ] `components/portal/PortalSidebar.tsx`
- [ ] `app/(portal)/layout.tsx`
- [ ] `components/portal/DocumentList.tsx` — filtrata per RLS
- [ ] `components/portal/DownloadButton.tsx`
- [ ] `app/(portal)/documenti/page.tsx`
- [ ] Test: ogni ruolo vede solo i documenti corretti; download genera signed URL e log

### FASE 7 — Gestione utenti (Settimana 3, Giorno 1)
- [ ] `components/studio/UserManager.tsx` — CRUD utenti con invito email
- [ ] `app/(studio)/impostazioni/page.tsx`
- [ ] Test invito: creare utente → email con link → login → redirect corretto

### FASE 8 — Test, sicurezza e deploy (Settimana 3, Giorno 2-3)
- [ ] Test penetration base: tentare accesso cross-client → verificare blocco RLS
- [ ] Test signed URL scaduto: verificare errore 403 dopo 5 min
- [ ] Test upload file non ammessi (es. .exe) → verificare rifiuto
- [ ] Test mobile responsive
- [ ] Deploy su `fantauzzo-portal.vercel.app`
- [ ] Variabili ambiente su Vercel
- [ ] Test end-to-end completo con utenti reali

### FASE 9 — Onboarding dati (Settimana 4)
- [ ] Script di inserimento bulk ~100 clienti da lista fornita da Fantauzzo
- [ ] Creazione utenti cliente (client_admin) + invio credenziali
- [ ] Verifica accessi con Fantauzzo
- [ ] Go-live su `portale.studiofantauzzo.it` dopo configurazione DNS

---

## SEZIONE 10 — SICUREZZA E GDPR

| Requisito | Implementazione |
|---|---|
| Zero URL pubblici permanenti | R2 bucket private, solo signed URL |
| Signed URL scadenza | 300 secondi (5 minuti), non riusabili |
| Segregazione dati multi-tenant | RLS PostgreSQL a livello database |
| Log accessi | `download_logs` con user_id, timestamp, IP |
| Cifratura at-rest | Cloudflare R2 (AES-256) |
| Cifratura in-transit | HTTPS obbligatorio (Vercel + R2) |
| GDPR Art. 32 | Cifratura + RLS + log audit |
| GDPR Art. 17 | Cancellazione dati a fine contratto entro 30 giorni |
| Cookie | Solo tecnici (Supabase Auth session) — nessun tracker |

---

## SEZIONE 11 — CHANGELOG

| Data | Aggiornamento |
|---|---|
| 2026-05-26 | File creato. Context, stack, schema DB completo, RLS policies, struttura app, flussi UX, API routes, variabili ambiente, Cursor Rules, piano implementazione 9 fasi, sicurezza GDPR. |
