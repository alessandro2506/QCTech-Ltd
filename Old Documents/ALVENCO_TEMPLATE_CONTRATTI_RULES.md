# ALVENCO_TEMPLATE_CONTRATTI_RULES.md
> Parent: `CLAUDE.md`
> Versione: 2.3 — 27 Maggio 2026
> Riferimento obbligatorio per ogni contratto/preventivo emesso da Alvenco Ltd

---

## 1. STRUTTURA CONTRATTO — OBBLIGATORIA

> Riferimento: `Contratto_AlmaHotel_Alvenco_2026.docx` — unica struttura valida.
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
- Nessuna sezione aggiuntiva (force majeure, limitation of liability, ecc.) — struttura snella per design
- **CONTRASTO TESTO/SFONDO**: qualsiasi cella con sfondo NAVY deve avere testo BIANCO e bold. Regola codice: `darkBg = isH || s === NAVY` → `color: darkBg ? WHITE : DARK`

---

## 1B. STRUTTURA PREVENTIVO — OBBLIGATORIA

> Ogni progetto Alvenco deve avere PRIMA un preventivo e POI un contratto. Sono documenti distinti e sequenziali — mai sostitutivi.
> Il preventivo vende la professionalità e presenta il valore. Il contratto tutela le parti legalmente.

| N° | Sezione | Contenuto |
|---|---|---|
| — | Intestazione | Titolo "PREVENTIVO", riferimento ALV-ANNO-NNN, data, cliente |
| 1 | Parti | Tabella affiancata Fornitore (sx) / Cliente (dx) — identica al contratto |
| 2 | Panoramica | Chi è il cliente, qual è il suo obiettivo, contesto del progetto |
| 3 | Cosa Realizzeremo | Funzionalità in linguaggio orientato al cliente — MAI termini tecnici o nomi vendor |
| 4 | Come Lavoriamo | Fasi del progetto in italiano chiaro e accessibile |
| 5 | Perché Alvenco | 3–4 punti di differenziazione e valore |
| 6 | Riepilogo Economico | Costi con milestone di pagamento (3 rate sopra £700) |
| 7 | Tempistiche | Tabella settimane/attività |
| 8 | Note e Condizioni | Validità 30gg, revisioni incluse, IP, GDPR, valuta GBP |

**Regole di composizione preventivo:**
- Stesso header/footer del contratto — carta intestata Alvenco
- Parti: SEMPRE tabella affiancata 50%/50%
- Sezioni: banner navy con testo bianco (stesso stile contratto)
- Contrasto testo/sfondo: stessa regola del contratto
- Il preventivo NON include clausole legali (penali, recesso, foro) — quelle vanno solo nel contratto

---

## 1C. LINGUAGGIO — REGOLA OBBLIGATORIA PER PREVENTIVI E CONTRATTI

> Il cliente non è un tecnico. Qualsiasi termine tecnico o nome di vendor/provider che non sia comprensibile a un imprenditore medio va eliminato e sostituito con linguaggio funzionale.

### ❌ MAI usare nei documenti cliente (preventivi e contratti)
- Nomi framework/librerie: Next.js, React, Tailwind, TypeScript, Node.js
- Nomi provider: Supabase, Vercel, Railway, Cloudflare R2, PostgreSQL, MySQL
- Termini tecnici: RLS, API, CDN, SSR, JWT, UUID, bucket, blob, webhook
- Acronimi non spiegati: CRUD, ORM, CI/CD, DX

### ✅ Da usare invece — linguaggio funzionale
| Termine tecnico | Sostituzione cliente |
|---|---|
| Next.js / React | Applicazione web professionale sviluppata con tecnologie moderne |
| Supabase PostgreSQL | Database cloud dedicato e sicuro |
| RLS (Row Level Security) | Sistema di sicurezza con accesso segregato per utente |
| Vercel CDN | Hosting su infrastruttura cloud globale con alta disponibilità |
| Cloudflare R2 | Archiviazione documentale su storage cloud scalabile |
| API route | Processo server sicuro |
| Deploy automatico | Aggiornamenti pubblicati automaticamente |
| TypeScript strict | Codice sviluppato con standard di qualità elevati |
| Signed URL | Collegamento temporaneo cifrato per download sicuro |
| Bucket privato | Archivio riservato senza accesso pubblico |

### Stack tecnologico nei preventivi — come menzionarlo
Se si deve citare lo stack (es. per rassicurare un cliente più tecnico), usare:
> "Il progetto è realizzato con tecnologie web moderne, scalabili e certificate, nel rispetto degli standard di sicurezza internazionali e della normativa GDPR."

Non elencare mai i singoli strumenti nel documento cliente.

---

## 2. PROPRIETÀ INTELLETTUALE — REGOLA NON NEGOZIABILE

**Il codice, l'architettura, i componenti, il design system e qualsiasi prodotto digitale realizzato da Alvenco restano di proprietà esclusiva e permanente di Alvenco Ltd. Al cliente viene concessa esclusivamente una licenza d'uso, valida per tutta la durata del contratto attivo.**

### Nota IVA — formulazione standard
> *"Il corrispettivo è esente da IVA in quanto Alvenco Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC)."*

### Clausola IP obbligatoria in ogni contratto
> "Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Alvenco Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Alvenco Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo. La licenza decade automaticamente alla rescissione, alla scadenza senza rinnovo o al mancato pagamento dei canoni dovuti."

### Diritti portfolio
- Alvenco ha sempre il diritto di usare il lavoro svolto come portfolio e case study
- Riservatezza totale richiesta dal cliente prima della firma: supplemento 20% sul totale

---

## 2.1 CANCELLAZIONE DATI A FINE CONTRATTO — OBBLIGO GDPR

### Clausola obbligatoria in ogni contratto
> "Alla cessazione del presente Contratto, Alvenco Ltd procederà alla cancellazione definitiva di tutti i dati, contenuti e asset forniti dal Cliente ai sensi dell'Art. 17 e dell'Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR), entro 30 giorni dalla cessazione, con conferma scritta. Sono fatti salvi gli obblighi di conservazione fiscale per il periodo strettamente necessario."

---

## 3. DOMINIO E HOSTING — REGOLA DI RISERVATEZZA

**Mai nominare provider, registrar o stack tecnico nei documenti cliente.**

✅ Usare: "Hosting e registrazione dominio inclusi" / "Il dominio sarà registrato a nome del Cliente"
❌ Mai usare: Vercel, Railway, Supabase, Cloudflare, Namecheap, GoDaddy, Next.js

### Hosting standard Alvenco (uso interno — non divulgare)
Frontend: Vercel | Backend: Railway | DB: Supabase | Storage: Cloudflare R2

---

## 4. VALUTA — POLICY OBBLIGATORIA

**L'importo vincolante è SEMPRE in GBP (£).** EUR = solo orientativo, mai vincolante.

### Clausola obbligatoria preventivi/contratti IT/EU
> *"Il corrispettivo è espresso in GBP (£). L'equivalente in EUR è puramente orientativo al tasso di cambio del giorno di emissione e non costituisce importo contrattualmente vincolante."*

### Strumento operativo
Wise Business: IBAN EU dedicato → cliente paga in € con bonifico SEPA → Alex converte in £ quando vuole (~0.4% spread).

### Riepilogo per tipo cliente
| Cliente | Valuta doc | Pagamento | Rischio cambio |
|---|---|---|---|
| UK | £ | Bonifico BACS/Faster Payments | Nessuno |
| IT/EU standard | £ + nota € orientativa | Bonifico SEPA su IBAN Wise | Gestito da Alex |
| IT/EU vuole € | £ + nota € orientativa | Bonifico SEPA | Clausola adeguamento +3% |

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

> Milestone intermedia: siti = "Design approvato/staging consegnato" | Web App = "Architettura e autenticazione completate" | App = "Prototipo approvato"

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

- [ ] **FIRMATARIO ALVENCO: Vincenzo Sedita — Co-Founder & Commercial Director** (MAI Alessandro Fiscella — né in tabella firme né nella sezione finale dei preventivi)
- [ ] Struttura preventivo/contratto corretta (Sezione 1 o 1B)
- [ ] Parti: tabella affiancata 50/50 presente
- [ ] Nessun termine tecnico o nome vendor nei testi cliente (Sezione 1C)
- [ ] Proprietà IP: clausola presente
- [ ] Nessun riferimento a provider hosting/registrar/stack
- [ ] Struttura pagamenti corretta per il valore (3 rate sopra £700)
- [ ] Revisioni incluse specificate
- [ ] Clausola valuta GBP + nota EUR orientativa se cliente IT/EU
- [ ] VAT treatment corretto
- [ ] Numero documento: ALV-[ANNO]-[NNN]
- [ ] Preventivo: validità 30gg in Note e Condizioni
- [ ] Contratto: clausola GDPR cancellazione dati presente
- [ ] Contrasto testo/sfondo verificato (NAVY → testo bianco)

---

## 9. NUMERAZIONE DOCUMENTI FANTAUZZO

| Documento | Numero | Stato |
|---|---|---|
| Preventivo portale documentale | ALV-2026-004 | ✅ Generato v5 |
| Contratto sito web | ALV-2026-005 | ✅ Generato v5 |
| Preventivo sito web | ALV-2026-007 | ⬜ Da generare |
| Contratto portale documentale | ALV-2026-006 | ⬜ Da generare |

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | v2.0 — File creato. |
| Maggio 2026 | v2.1 — Policy valuta, Wise Business, clausole SEPA. |
| 26 Maggio 2026 | v2.2 — 3 rate obbligatorie sopra £700. Sezione 6B Pioneer. |
| 27 Maggio 2026 | v2.3 — Aggiunta Sezione 1B struttura preventivo obbligatoria. Aggiunta Sezione 1C regola linguaggio: MAI termini tecnici/vendor nei documenti cliente, tabella sostituzioni funzionali. Aggiunta Sezione 9 numerazione documenti Fantauzzo. Struttura contratto e preventivo ora entrambe documentate e obbligatorie. |
