# expert-database/SKILL.md
> Skill Alvenco — Firestore, Supabase PostgreSQL, Drizzle, R2
> Aggiornamento: 27 Maggio 2026

## Descrizione
Database engineering per progetti Alvenco: Firestore (Sapori Perduti), Supabase PostgreSQL + PostGIS (Città Chiara, CivicAlert, Fantauzzo), Drizzle ORM, Cloudflare R2. Basata su errori reali risolti.

## Quando usarla
- Schema design nuovo progetto
- Firestore security rules
- Supabase RLS policy
- Migration Drizzle
- Query con orderBy multi-campo (indici compositi)
- File storage R2

## Firestore — Regole Critiche

### Security Rules — Deploy immediato (ERR-006)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {  // TUTTO dentro questo match
    match /reservations/{id} {
      allow read, write: if request.auth != null;
    }
  }
}
```
Deploy: `firebase deploy --only firestore:rules`
MAI lasciare rules vuote o in `allow read, write: if true` in produzione.

### Indici Compositi — Creare Subito (ERR-012)
Ogni query con `orderBy` su più campi richiede un indice composito Firestore.
Creare in Firebase Console → Firestore → Indexes → Composite prima di qualsiasi deploy.
Mancanza: errore runtime silenzioso (query restituisce vuoto).

### Naming campi — Case-sensitive (ERR-009)
Usare SEMPRE valori capitalizzati: "Antipasti" non "antipasti".
In alternativa: normalizzare in fase di scrittura + confronto case-insensitive in lettura.

### Naming consistente tra repos diverse (Sapori Perduti)
Firestore salva: `message` e `messageTranslated`
Hook dashboard leggeva: `closureMessage` e `closureMessageTranslated` → stringa vuota
Regola: verificare che i nomi dei campi Firestore siano identici in TUTTE le repo che li leggono.

### Doppio salvataggio Sapori Perduti (ERR-010)
Salvare SEMPRE sia `translations` (dashboard) che `nameTranslated` (sito pubblico) ad ogni write.
Non salvare solo uno dei due.

### Root page.tsx sempre con redirect (ERR-011)
```ts
// src/app/page.tsx — SEMPRE presente
import { redirect } from 'next/navigation'
export default function RootPage() { redirect('/it') }
```

## Supabase — Architettura

### Setup client Next.js
```ts
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### Setup client React Native (Expo)
```ts
import AsyncStorage from '@react-native-async-storage/async-storage'
export const supabase = createClient(url, key, {
  auth: { storage: AsyncStorage, autoRefreshToken: true,
          persistSession: true, detectSessionInUrl: false }
})
```

### RLS Policy Pattern
```sql
-- Esempio: utente vede solo le proprie segnalazioni
CREATE POLICY "user_sees_own_reports"
ON reports FOR SELECT
USING (auth.uid() = user_id);

-- Entità vede solo le segnalazioni del proprio comune
CREATE POLICY "entity_sees_own_municipality"
ON reports FOR ALL
USING (municipality_id = (
  SELECT municipality_id FROM profiles WHERE id = auth.uid()
));
```

### Drizzle ORM — Errori Noti
`drizzle-kit push` con schemi Supabase: bug con vincoli CHECK su PostgreSQL.
Sintomo: `Cannot read properties of undefined (reading 'replace')`
Workaround: `drizzle-kit push --verbose` oppure verificare la versione di drizzle-kit.

### Schema Tabelle Città Chiara (PostGIS)
```sql
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  municipality_id UUID REFERENCES municipalities(id),
  location GEOGRAPHY(POINT, 4326),  -- PostGIS per pin mappa
  category VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pending_approval',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Schema Rubrica Enti (civic-unified)
```sql
CREATE TABLE entity_contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  category VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Cloudflare R2 — Regole

Token S3-compatibili: creare SOLO da R2 Overview → Manage → User API Tokens.
MAI token cfat_... (Account API Tokens) — danno 401 con @aws-sdk (ERR-023).

Variabili ambiente:
```
R2_ACCOUNT_ID=9d57c6c26a16fd371a9d326b55d85fe2
R2_ACCESS_KEY_ID=[da User API Token]
R2_SECRET_ACCESS_KEY=[da User API Token]
R2_BUCKET_NAME=fantauzzo-docs
R2_ENDPOINT=https://[account_id].r2.cloudflarestorage.com
```

Regola delete (ERR-024 — critica):
MAI eliminare file R2 senza verificare deleted_at IS NOT NULL a livello DB.
Doppio controllo obbligatorio: query con .not('deleted_at', 'is', null) + delete con stessa condizione.

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
