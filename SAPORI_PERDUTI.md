# SAPORI_PERDUTI.md — Progetto Sapori Perduti (Full-Stack)
> Parent: `CLAUDE.md`
> Chat attiva: "Archivio - Sapori Perduti Fullstack Dev"
> Ultimo aggiornamento: 04 Maggio 2026 — File creato + fix banner pre-avviso completato

---

## 1. PANORAMICA PROGETTO

Sapori Perduti è un ristorante a Palermo specializzato in cucina celiaca/gluten-free.
Due applicazioni Next.js separate che condividono lo stesso progetto Firebase.

| App | URL prod | Percorso locale |
|---|---|---|
| **Sito pubblico** | `sapori-perduti-web.vercel.app` | `/Users/alessandrofiscella/Desktop/Progetti/saporiperduti-web/sapori-perduti-site` |
| **Dashboard admin** | `sapori-perduti-dashboard.vercel.app` | `/Users/alessandrofiscella/Desktop/Progetti/sapori-perduti-dashboard` |

**Firebase project:** `saporiperduti-web`

---

## 2. STACK TECNOLOGICO

```
Layer                    Tecnologia              Versione
-----------------------------------------------------------
Frontend (entrambe)      Next.js                 16.2.4
React                                            19
TypeScript               strict: true
Styling                  Tailwind CSS             4
Animazioni               Framer Motion
Database                 Firebase Firestore       12
Auth sito pubblico       Firebase Anonymous Auth  + browserLocalPersistence
Auth dashboard owner     Firebase Auth            Session cookie httpOnly
Auth dashboard dev       bcryptjs + jose JWT
Storage                  Firebase Storage
Push                     Firebase FCM
Email                    Resend
Traduzioni               DeepL API               header-based (nov 2025+)
i18n sito                next-intl                4 — lingue: IT, EN, FR, DE, ES
Mappe                    Google Maps JS API
Form                     react-hook-form + zod
Hosting                  Vercel                  entrambe le app
```

---

## 3. AUTENTICAZIONE DASHBOARD — DUE LIVELLI

```
/login                    → Proprietario (Firebase Auth email/password)
                            Accesso: Prenotazioni + Chiusura Locale

/{DEV_PORTAL_PATH}/login  → Developer (credenziali custom bcrypt + jose JWT)
                            Accesso: Prenotazioni + Menu + Drinks + Chiusura Locale
```

**Credenziali dev (sviluppo):**
- `DEV_PORTAL_PATH=admin-secure-2026`
- `DEV_USERNAME=Developer`

**Regola critica:** L'owner NON deve mai sapere che esiste la sezione dev. Zero riferimenti nell'UI owner.

---

## 4. STRUTTURA FIRESTORE

| Collection | Descrizione |
|---|---|
| `reservations` | Prenotazioni — status: pending/confirmed/cancelled |
| `menu_items` | Voci menu con traduzioni DeepL |
| `drinks` | Drinks con traduzioni DeepL |
| `site_config/main` | Config globale (chiusura immediata, orari) |
| `site_config/main/scheduled_closures` | Sotto-collection chiusure programmate |
| `gallery_config` | Config gallery con tab Desktop/Mobile separati |
| `fcm_tokens/{userId}` | Token FCM per push notifications |

---

## 5. DESIGN SYSTEM

### Sito pubblico
- Palette: nero profondo + oro `#c9a84c`
- Font: Cormorant Garamond (titoli), Jost (corpo)
- Principi: silenzio prima della parola, animazioni lente, mobile-first

### Dashboard — palette operativa
```css
--db-bg:        #0f1117;
--db-sidebar:   #13161e;
--db-card:      #1a1d27;
--db-border:    #252836;
--db-oro:       #c9a84c;
--db-oro-soft:  #e8c870;
--db-testo:     #e8e8e8;
--db-muted:     #8892a4;
```

---

## 6. FUNZIONALITÀ IMPLEMENTATE

### Sito pubblico
- [x] SEO: schema.org JSON-LD, sitemap, robots.txt, hreflang canonicals, OG image
- [x] i18n con next-intl (5 lingue)
- [x] Hook `useClosureStatus()` — onSnapshot su `site_config/main` + `scheduled_closures`
- [x] `ClosureBanner.tsx` nel layout — presente su tutte le pagine
- [x] Banner chiusura immediata con messaggio tradotto in 5 lingue
- [x] Banner pre-avviso chiusura programmata (dalla settimana precedente) — **FIX COMPLETATO 04/05/2026**
- [x] Allineamento naming `message/messageTranslated` tra Firestore e hook — **FIX COMPLETATO 04/05/2026**
- [x] CTA prenotazione bloccati ovunque quando chiuso (`useClosureStatus`)
- [x] Pop-up con messaggio chiusura su click sui CTA bloccati (`ClosurePopup.tsx`)
- [x] Date chiusura programmate indisponibili nel calendario prenotazioni
- [x] Privacy policy checkbox con testo completo

### Dashboard
- [x] Auth doppio livello (owner Firebase session cookie, dev bcrypt + jose JWT)
- [x] Middleware protezione route
- [x] Prenotazioni real-time con filtri, conferma, cancellazione
- [x] Email conferma/cancellazione via Resend
- [x] Note cancellazione tradotte con DeepL (IT → EN/FR/DE/ES)
- [x] FCM push notifications a ogni nuova prenotazione
- [x] Deep-link email → dashboard (`?id=reservationId`)
- [x] Menu CRUD con traduzioni DeepL (solo dev)
- [x] Drinks CRUD con traduzioni DeepL (solo dev)
- [x] Chiusura immediata con messaggio tradotto
- [x] Chiusure programmate CRUD con date/orari
- [x] Gallery: tab Desktop/Mobile separati (ordine, visibilità, layout, colonne, gap, radius, ombra)

---

## 7. FIX COMPLETATI IN QUESTA SESSIONE

### Fix 1 — Banner pre-avviso chiusura programmata — 04/05/2026
**Problema:** Mostrava solo `"Chiuderemo il [data inizio]."`
**Soluzione:** Testo completo con data inizio, data fine e keyword estratta dal messaggio.
**Output:** `"Dal 14 agosto al 22 agosto saremo chiusi per ferie"` (localizzato in 5 lingue)

**File modificati:**
- `src/lib/utils.ts` — aggiunta `extractClosureKeyword(message)` con lista `KNOWN_KEYWORDS` + regex fallback su "per/causa/durante"
- `src/components/home/ClosureBanner.tsx` — sostituito blocco `showUpcomingBanner`, aggiunto import

**Edge cases gestiti:**
- Keyword non trovata → frase senza "per ..."
- Stesso giorno inizio/fine → `"Il [data] saremo chiusi per [keyword]"`
- Messaggio vuoto → fallback al testo di default

**Verifica:** `npx tsc --noEmit` OK, nessun errore TypeScript.

### Fix 2 — Disallineamento naming Firestore vs hook — 04/05/2026
**Problema:** `useClosureStatus.ts` leggeva `closureMessage`/`closureMessageTranslated` da `ScheduledClosure`, ma Firestore salva `message`/`messageTranslated`. `extractClosureKeyword` riceveva sempre stringa vuota.
**Soluzione:** Aggiornato `ScheduledClosure` con i nomi reali Firestore + alias retrocompatibili interni al hook per non rompere altri componenti.

**File modificato:**
- `src/lib/hooks/useClosureStatus.ts` — tipo `ScheduledClosure` aggiornato, letture interne allineate, alias retrocompatibili per componenti esistenti

**Verifica:** `npx tsc --noEmit` OK, nessun altro file toccato.

**Nota per futuri progetti:** quando dashboard e sito pubblico usano repos separate, verificare sempre che i nomi dei campi Firestore siano identici su entrambi i lati prima del primo deploy.

---

## 8. BUG CRITICI RISOLTI (documentati per futuri progetti)

1. **Firebase Anonymous Auth**: Abilitare nella Console PRIMA di chiamare `signInAnonymously`. Impostare `browserLocalPersistence` prima della chiamata.
2. **Firestore Security Rules**: Deployare subito. Tutte le regole dentro `match /databases/{database}/documents {}`.
3. **FIREBASE_ADMIN_PRIVATE_KEY su Vercel**: Incollare con virgolette. Nel codice: `.replace(/^"|"$/g, '').replace(/\\n/g, '\n')`.
4. **DeepL API (nov 2025+)**: Solo header-based: `Authorization: DeepL-Auth-Key <key>`.
5. **Categorie Firestore con maiuscola**: `"Antipasti"` non `"antipasti"`. Usare confronto case-insensitive.
6. **Dashboard salva ENTRAMBI i campi**: `translations` (dashboard) E `nameTranslated` (sito). Sempre insieme.
7. **Root page.tsx**: Sempre creare con redirect immediato.
8. **Indici compositi Firestore**: Creare subito per ogni query con `orderBy` su più campi.
9. **jose vs jsonwebtoken**: Usare `jose` per JWT edge-compatible in Next.js.

---

## 9. FIX PENDENTI

Nessuno al momento. Verificare in produzione che il banner pre-avviso mostri il testo corretto dopo il prossimo deploy Vercel.

---

## 10. WORKFLOW OPERATIVO

- **Pianificazione/architettura** → questa chat con Claude
- **Implementazione** → Cursor con Claude Sonnet
- Strict step-by-step: un componente alla volta, approvazione prima del successivo
- Prompt Cursor: minimi, chirurgici, referenziano il CLAUDE.md del progetto

### Regola deploy — CRITICA
Vercel non deploya automaticamente al salvataggio locale. Il ciclo corretto è sempre:
1. Modifiche in locale con Cursor
2. `git add` + `git commit` + `git push` su GitHub
3. Vercel rileva il push e deploya in automatico (1-2 minuti)
4. Solo dopo il deploy verificare il comportamento sul sito

**Non dichiarare mai una verifica completata prima che il push sia avvenuto.**
**Non assumere mai che il sito rifletta modifiche locali non ancora pushate.**

---

## Changelog

| Data | Modifica |
|---|---|
| 04-05-2026 | File creato. Sincronizzazione completa da chat archivio + fix banner pre-avviso completato e documentato. |
| 04-05-2026 | Fix disallineamento naming Firestore (`message` vs `closureMessage`) in `useClosureStatus.ts`. Aggiunto a bug critici per futuri progetti. |
