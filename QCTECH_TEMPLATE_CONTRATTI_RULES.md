# QCTECH_TEMPLATE_CONTRATTI_RULES.md
> Rinominato da ALVENCO_TEMPLATE_CONTRATTI_RULES.md — 4 Giugno 2026
> Parent: `CLAUDE.md`
> Versione: 2.4 — 4 Giugno 2026
> Riferimento obbligatorio per ogni contratto/preventivo emesso da QC Tech

---

## 1. STRUTTURA CONTRATTO — OBBLIGATORIA

> Riferimento: `Contratto_AlmaHotel_QCTech_2026.docx` — struttura valida.
> Qualsiasi contratto generato da Cursor o Claude DEVE seguire questa sequenza numerata.

| N° | Sezione | Contenuto |
|---|---|---|
| 1 | Parti del Contratto | Tabella affiancata Fornitore (sx) / Cliente (dx) — MAI due tabelle separate |
| 2 | Premesse e Oggetto | Descrizione progetto + elenco bullet funzionalità incluse |
| 3 | Condizioni Contrattuali | Articoli numerati (Durata, Corrispettivo, Manutenzione, Promozioni, Revisioni) |
| 4 | Riepilogo Economico Anno 1 | Tabella sintetica con totale annuo (sviluppo + manutenzione × 12) |
| 5 | Proprietà Intellettuale e Licenza d'Uso | Clausola IP + cancellazione GDPR |
| 6 | Riservatezza Tecnica | Hosting/infrastruttura riservata + trasferimento dominio al saldo |
| 7 | Penale per Rescissione Anticipata | Formula liquidated damages + riferimento Cavendish Square |
| 8 | Legge Applicabile e Foro Competente | Inghilterra e Galles, foro Hertfordshire |
| 9 | Firme e Accettazione | Tabella affiancata Fornitore/Cliente + dichiarazione finale |

**Regole di composizione contratto:**
- Sezioni: banner navy pieno con testo bianco
- Articoli interni alla Sezione 3: `Art. N — Titolo` con sottolineatura gold
- Parti: SEMPRE tabella affiancata 50%/50% — mai due tabelle verticali separate
- Riepilogo Anno 1: SEMPRE presente — mostra il costo totale reale del primo anno
- Firme: tabella affiancata + dichiarazione accettazione in fondo
- **CONTRASTO TESTO/SFONDO**: sfondo NAVY → testo BIANCO e bold. Regola: `darkBg = isH || s === NAVY`

---

## 1B. STRUTTURA PREVENTIVO — OBBLIGATORIA

> Ogni progetto QC Tech deve avere PRIMA un preventivo e POI un contratto. Sono documenti distinti e sequenziali.

| N° | Sezione | Contenuto |
|---|---|---|
| — | Intestazione | Titolo "PREVENTIVO", riferimento QCT-ANNO-NNN, data, cliente |
| 1 | Parti | Tabella affiancata Fornitore (sx) / Cliente (dx) — identica al contratto |
| 2 | Panoramica | Chi è il cliente, qual è il suo obiettivo, contesto del progetto |
| 3 | Cosa Realizzeremo | Funzionalità in linguaggio orientato al cliente — MAI termini tecnici o nomi vendor |
| 4 | Come Lavoriamo | Fasi del progetto in italiano chiaro e accessibile |
| 5 | Perché QC Tech | 3–4 punti di differenziazione e valore |
| 6 | Riepilogo Economico | Costi con milestone di pagamento (3 rate sopra £700) |
| 7 | Tempistiche | Tabella settimane/attività |
| 8 | Note e Condizioni | Validità 30gg, revisioni incluse, IP, GDPR, valuta GBP |

---

## 1C. LINGUAGGIO — REGOLA OBBLIGATORIA

> Il cliente non è un tecnico. Nessun termine tecnico o nome vendor nei documenti cliente.

### ❌ MAI usare
- Framework: Next.js, React, Tailwind, TypeScript, Node.js
- Provider: Supabase, Vercel, Railway, Cloudflare R2, PostgreSQL
- Termini tecnici: RLS, API, CDN, SSR, JWT, UUID, bucket, blob, webhook, CRUD

### ✅ Sostituzioni funzionali
| Termine tecnico | Sostituzione cliente |
|---|---|
| Next.js / React | Applicazione web professionale sviluppata con tecnologie moderne |
| Supabase PostgreSQL | Database cloud dedicato e sicuro |
| RLS (Row Level Security) | Sistema di sicurezza con accesso segregato per utente |
| Vercel CDN | Hosting su infrastruttura cloud globale con alta disponibilità |
| Cloudflare R2 | Archiviazione documentale su storage cloud scalabile |
| Signed URL | Collegamento temporaneo cifrato per download sicuro |

### Stack tecnologico nei preventivi
Se necessario citare lo stack:
> "Il progetto è realizzato con tecnologie web moderne, scalabili e certificate, nel rispetto degli standard di sicurezza internazionali e della normativa GDPR."

---

## 2. PROPRIETÀ INTELLETTUALE

**Il codice, l'architettura, i componenti e qualsiasi prodotto digitale realizzato da QC Tech restano di proprietà esclusiva e permanente di Quantum Code Technologies Ltd. Al cliente viene concessa una licenza d'uso per la durata del contratto attivo.**

### Clausola IP obbligatoria
> "Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi e qualsiasi altro materiale digitale sviluppato da Quantum Code Technologies Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Quantum Code Technologies Ltd."

### Nota IVA
> "Il corrispettivo è esente da IVA in quanto Quantum Code Technologies Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC)."

---

## 2.1 CANCELLAZIONE DATI A FINE CONTRATTO — OBBLIGO GDPR

### Clausola obbligatoria
> "Alla cessazione del presente Contratto, Quantum Code Technologies Ltd procederà alla cancellazione definitiva di tutti i dati, contenuti e asset forniti dal Cliente ai sensi dell'Art. 17 e dell'Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR), entro 30 giorni dalla cessazione, con conferma scritta."

---

## 3. DOMINIO E HOSTING — RISERVATEZZA

**Mai nominare provider, registrar o stack tecnico nei documenti cliente.**

✅ Usare: "Hosting e registrazione dominio inclusi" / "Il dominio sarà registrato a nome del Cliente"
❌ Mai usare nomi provider

### Hosting standard QC Tech (uso interno — non divulgare)
Frontend: Vercel | Backend: Railway | DB: Supabase | Storage: Cloudflare R2

---

## 4. VALUTA — POLICY OBBLIGATORIA

**L'importo vincolante è SEMPRE in GBP (£).** EUR = solo orientativo, mai vincolante.

### Clausola obbligatoria
> "Il corrispettivo è espresso in GBP (£). L'equivalente in EUR è puramente orientativo al tasso di cambio del giorno di emissione e non costituisce importo contrattualmente vincolante."

### Strumento operativo
Wise Business: IBAN EU dedicato → cliente paga in € con bonifico SEPA.

---

## 5. PAGAMENTI — STRUTTURA STANDARD

| Valore progetto | Struttura |
|---|---|
| < £700 | 50% firma + 50% go-live (unico caso 2 rate accettabile) |
| £700–£5.000 | 50% firma + 25% milestone intermedia + 25% go-live (**3 rate obbligatorie**) |
| £5.000–£15.000 | 50% firma + 25% mid-milestone + 25% go-live |
| > £15.000 | 40% firma + 30% mid-milestone + 20% UAT + 10% go-live |
| Web App £20k–£50k | 40% firma + 30% mid-milestone + 30% go-live |
| Web App £50k+ | 35% firma + 25% mid-1 + 25% mid-2 + 15% go-live |
| Retainer mensile | Fatturazione anticipata il 1° del mese |

> Milestone: siti = "Design approvato/staging" | Web App = "Autenticazione e struttura completate" | App = "Prototipo approvato"

---

## 6. REVISIONI

| Valore | Revisioni incluse |
|---|---|
| Fino a £3.500 | 2 round |
| £3.500–£10.000 | 3 round |
| > £10.000 / Web App / App | 4 round + UAT |
| Extra | £85/ora junior — £130/ora senior |

---

## 6B. PROMO PIONEER — ATTIVAZIONE

| Scenario | Decorrenza Pioneer |
|---|---|
| Nessuna promo (manutenzione listino pieno da subito) | Dal go-live |
| Promo Primavera (solo sconto sviluppo) | Dal go-live |
| Promo Special 10 (manutenzione scalata anno 1) | Dal mese 13 |

---

## 7. VALIDITÀ PREVENTIVI

30 giorni dalla data di emissione.

---

## 8. CHECKLIST PRE-EMISSIONE

- [ ] **FIRMATARIO QC TECH: Vincenzo Sedita — Co-Founder & Commercial Director** (MAI Alessandro Fiscella — né in tabella firme né nella sezione finale dei preventivi)
- [ ] Struttura preventivo/contratto corretta (Sezione 1 o 1B)
- [ ] Parti: tabella affiancata 50/50 presente
- [ ] Nessun termine tecnico o nome vendor nei testi cliente (Sezione 1C)
- [ ] Proprietà IP: clausola con nome "Quantum Code Technologies Ltd" presente
- [ ] Nessun riferimento a provider hosting/registrar/stack
- [ ] Struttura pagamenti corretta (3 rate sopra £700)
- [ ] Revisioni incluse specificate
- [ ] Clausola valuta GBP + nota EUR orientativa se cliente IT/EU
- [ ] VAT treatment corretto
- [ ] Numero documento: QCT-[ANNO]-[NNN]
- [ ] Preventivo: validità 30gg in Note e Condizioni
- [ ] Contratto: clausola GDPR cancellazione dati presente
- [ ] Contrasto testo/sfondo verificato (NAVY → testo bianco)
- [ ] Nessun riferimento a "Alvenco" in tutto il documento

---

## 9. NUMERAZIONE DOCUMENTI

> Da QCT-2026-001 in avanti. Il prefisso ALV- è OBSOLETO.

### Documenti Fantauzzo (già emessi con vecchio prefisso ALV — da aggiornare fisicamente)
| Documento | Vecchio rif. | Nuovo rif. | Stato |
|---|---|---|---|
| Preventivo portale documentale | ALV-2026-004 | QCT-2026-004 | ✅ Emesso — aggiornare |
| Contratto sito web | ALV-2026-005 | QCT-2026-005 | ✅ Emesso — aggiornare |
| Contratto portale documentale | ALV-2026-006 | QCT-2026-006 | ✅ Emesso — aggiornare |
| Preventivo sito web | ALV-2026-007 | QCT-2026-007 | ✅ Emesso — aggiornare |

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | v2.0 — File creato come ALVENCO_TEMPLATE_CONTRATTI_RULES.md |
| 26 Maggio 2026 | v2.2 — 3 rate obbligatorie sopra £700. Sezione 6B Pioneer. |
| 27 Maggio 2026 | v2.3 — Struttura preventivo obbligatoria (1B). Regola linguaggio (1C). |
| 4 Giugno 2026 | v2.4 — Rinominato QCTECH_TEMPLATE_CONTRATTI_RULES.md. Tutti i riferimenti Alvenco → QC Tech / Quantum Code Technologies. Numerazione QCT- invece di ALV-. Sezione 9 aggiornata con mapping vecchi/nuovi numeri documento. |
