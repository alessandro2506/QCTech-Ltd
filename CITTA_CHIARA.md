# CITTA_CHIARA.md
> Chat: "Documentazione progetto Città Chiara per analisi"
> Ultimo aggiornamento: Aprile 2026

---

## Descrizione

App mobile italiana di segnalazione civica — gemella italiana di CivicAlert. Obiettivo: analizzarla, migliorarla e renderla completamente funzionante prendendo spunto da CivicAlert.

---

## Percorso locale

`/Users/alessandrofiscella/Desktop/Progetti/citta-chiara-github/`

---

## Errore critico backend (DA RISOLVERE)

```
require() of ES Module jose/dist/webapi/index.js not supported
```

**Fix** in `server/_core/context.ts`:
```typescript
// sostituire import statico con:
const { jwtVerify, createRemoteJWKSet } = await import('jose')
```

**Status**: ❌ DA APPLICARE

---

## Prompt per Cursor (genera documentazione)

```
Analyze the entire "città-chiara" project and generate CITTA_CHIARA_PROJECT_MAP.md with:
1. PROJECT OVERVIEW (stack, status)
2. FULL FOLDER STRUCTURE (ogni file: ✅/⚠️/❌)
3. ARCHITECTURE & DATA FLOW
4. ALL SCREENS & NAVIGATION
5. BACKEND API ENDPOINTS
6. DATABASE SCHEMA
7. AUTH FLOWS
8. KNOWN BUGS & INCOMPLETE FEATURES
9. COMPARISON WITH CIVICALERT
```

---

## Status generale

| Area | Stato |
|---|---|
| Documentazione codebase | ❌ DA FARE |
| Fix errore jose/ESM backend | ❌ DA FARE |
| Login email | ❌ DA VERIFICARE dopo fix |
| Login Google | ❌ DA VERIFICARE |
| Login Apple | ❌ Solo con build EAS nativa |
| Funzionalità complete | ❌ DA ANALIZZARE |
