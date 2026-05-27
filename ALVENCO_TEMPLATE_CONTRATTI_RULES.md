# ALVENCO_TEMPLATE_CONTRATTI_RULES.md
> Parent: `CLAUDE.md`
> Versione: 2.1 — 25 Maggio 2026
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
| 5 | Proprietà Intellettuale e Licenza d’Uso | Clausola IP + cancellazione GDPR |
| 6 | Riservatezza Tecnica | Hosting/infrastruttura riservata + trasferimento dominio al saldo |
| 7 | Penale per Rescissione Anticipata | Formula liquidated damages + riferimento Cavendish Square |
| 8 | Legge Applicabile e Foro Competente | Inghilterra e Galles, foro Hertfordshire |
| 9 | Firme e Accettazione | Tabella affiancata Fornitore/Cliente + dichiarazione finale |

**Regole di composizione:**
- Sezioni: banner navy pieno con testo bianco
- Articoli interni alla Sezione 3: `Art. N — Titolo` con sottolineatura gold
- Parti: SEMPRE tabella affiancata 50%/50% — mai due tabelle verticali separate
- Riepilogo Anno 1: SEMPRE presente — mostra il costo totale reale del primo anno
- Firme: tabella affiancata + dichiarazione accettazione in fondo
- Nessuna sezione aggiuntiva (force majeure, limitation of liability, ecc.) — la struttura è snella per design
- **CONTRASTO TESTO/SFONDO**: qualsiasi cella con sfondo scuro (NAVY o colore scuro) deve avere testo BIANCO e bold. MAI testo scuro su sfondo scuro. Regola nel codice: `darkBg = isH || s === NAVY` → `color: darkBg ? WHITE : DARK`.

---

Queste regole si applicano a TUTTI i contratti, preventivi e accordi emessi da Alvenco Ltd, senza eccezioni. Quando viene creato o revisionato un contratto, questo file va letto prima del listino prezzi.

---

## 1. PROPRIETÀ INTELLETTUALE — REGOLA NON NEGOZIABILE

**Il codice, l'architettura, i componenti, il design system e qualsiasi prodotto digitale realizzato da Alvenco restano di proprietà esclusiva e permanente di Alvenco Ltd. Al cliente viene concessa esclusivamente una licenza d'uso, valida per tutta la durata del contratto attivo. La licenza decade automaticamente alla rescissione o mancato rinnovo del contratto.**

### Modello corretto: LICENZA D'USO (non trasferimento proprietà)

- Il cliente paga per usufruire del prodotto, non per acquisirne la proprietà
- Alla cessazione del rapporto contrattuale, la licenza decade
- Alvenco si riserva il diritto di riutilizzare componenti tecnici generici (non i contenuti del cliente) per altri progetti

### Nota IVA — formulazione standard per contratti

Non indicare mai la soglia specifica di £90.000 nel contratto.

Formulazione corretta da usare sempre:
> *"Il corrispettivo è esente da IVA in quanto Alvenco Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC)."*

### Clausola obbligatoria da includere in ogni contratto

> "Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Alvenco Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Alvenco Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo. La licenza decade automaticamente e senza necessità di preavviso alla rescissione, alla scadenza senza rinnovo o al mancato pagamento dei canoni dovuti. Alvenco Ltd si riserva il diritto di riutilizzare componenti tecnici generici non specifici al Cliente per altri progetti propri o di terzi."

### Cosa rimane SEMPRE di Alvenco (senza eccezioni)
- Codice sorgente, architettura e componenti software
- Framework, librerie e componenti proprietari sviluppati da Alvenco
- Design system, UI/UX, grafica prodotta da Alvenco
- Strumenti interni e metodologie di sviluppo
- Diritti di portfolio e case study (salvo accordo scritto diverso)
- Qualsiasi codice riutilizzabile generico non specifico al cliente

### Diritti portfolio
- Alvenco ha sempre il diritto di usare il lavoro svolto come portfolio e case study
- Il cliente può richiedere riservatezza totale in forma scritta PRIMA della firma
- In caso di richiesta di riservatezza: supplemento del 20% sul totale del progetto

---

## 1.1 CANCELLAZIONE DATI E ASSET DEL CLIENTE A FINE CONTRATTO — OBBLIGO LEGALE

### Normativa applicabile
- **Art. 17 GDPR (Regolamento UE 2016/679)** — Diritto alla cancellazione
- **Art. 5, par. 1, lett. e) GDPR** — Principio di limitazione della conservazione

### Clausola obbligatoria da includere in ogni contratto

> "Alla cessazione del presente Contratto, per qualsiasi causa, Alvenco Ltd procederà alla cancellazione definitiva e irreversibile di tutti i dati, contenuti e asset forniti dal Cliente (a titolo esemplificativo: testi, immagini, loghi, video, dati personali di terzi, credenziali) ai sensi dell'Art. 17 e dell'Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR). Alvenco Ltd fornirà al Cliente conferma scritta dell'avvenuta cancellazione entro 30 (trenta) giorni dalla data di cessazione del Contratto. Sono fatti salvi gli obblighi di conservazione imposti da normative fiscali o legali applicabili, per il solo periodo strettamente necessario."

### Tempistiche standard
- Cancellazione dati: entro 30 giorni dalla cessazione
- Conferma scritta al cliente: entro 30 giorni dalla cessazione
- Backup residui: cancellati entro 60 giorni
- Eccezione: dati fiscali conservati 10 anni (obbligo di legge IT/UK)

---

## 2. DOMINIO E HOSTING — REGOLA DI RISERVATEZZA

**Il dominio NON viene mai indicato nel contratto al cliente.**

### Cosa indicare nel contratto
- ✅ "Hosting e registrazione dominio inclusi nel progetto" — sì
- ✅ "Il dominio sarà registrato a nome del cliente" — sì
- ✅ "Il dominio sarà trasferito al cliente al saldo completo" — sì
- ❌ "Il sito sarà ospitato su Vercel / Railway / [provider]" — NO
- ❌ "Il dominio sarà registrato su Namecheap / GoDaddy" — NO
- ❌ Qualsiasi riferimento al provider, configurazione server, stack tecnico specifico — NO

### Hosting standard Alvenco (uso interno — non divulgare)
- Frontend / Next.js: Vercel
- Backend Node.js: Railway
- Database: Supabase PostgreSQL
- Storage documentale: Cloudflare R2
- CDN: Cloudflare

---

## 3. HOSTING SCELTO DAL CLIENTE — DIRETTIVE TECNICHE OBBLIGATORIE

Se non soddisfatte, Alvenco può rifiutare il deploy o applicare un supplemento fino al 15%.

| Requisito | Specifica Minima |
|---|---|
| Tipo server | VPS o Dedicato (NO shared hosting in produzione) |
| Sistema operativo | Linux — Ubuntu 22.04 LTS o Debian 12 |
| Node.js | v20 LTS o superiore |
| PHP | 8.2 o superiore (per WordPress) |
| SSL | Certificato SSL valido — HTTPS obbligatorio |
| Storage | Min. 20 GB SSD (50 GB per e-commerce) |
| RAM | Min. 2 GB (4 GB raccomandati per Next.js SSR) |
| Banda | Illimitata o min. 1 TB/mese |
| Database | MySQL 8.0+ o PostgreSQL 14+ |
| Accesso SSH/SFTP | Obbligatorio per il deploy |
| CI/CD | Supporto Git-based o webhook |
| Gestione DNS | Accesso al pannello DNS richiesto |
| Email | Separata dal web hosting (G-Suite / M365) |
| Backup | Automatici giornalieri, 30 giorni di retention |
| Uptime SLA | Min. 99.9% garantito dal provider |
| Data Centre | EU o UK (GDPR compliance) |

---

## 4. VALUTA, CAMBIO E PAGAMENTI CLIENTI ITALIANI/EU — POLICY OBBLIGATORIA

### Il problema che questa sezione risolve
Fatturare in € con cambio indicativo al giorno del preventivo espone Alvenco a perdite di tesoreria: se il cambio si muove tra preventivo e pagamento, il cliente versa sempre lo stesso importo in € ma Alvenco riceve meno £ del dovuto. Su progetti da €3.000–€5.000 con pagamenti dilazionati, il delta può essere €150–€400.

### Regola valuta — NON derogabile
**L'importo vincolante e legalmente esigibile è SEMPRE in GBP (£).** L'equivalente in EUR nei preventivi e contratti è puramente indicativo e non costituisce obbligazione contrattuale.

### Clausola obbligatoria in ogni preventivo/contratto verso clienti IT/EU

> *"Il corrispettivo è espresso in GBP (£). L'equivalente in EUR indicato è puramente orientativo al tasso di cambio del giorno di emissione del documento e non costituisce importo contrattualmente vincolante. L'importo dovuto è quello espresso in GBP."*

### Come pagano i clienti italiani — strumento operativo

**Alvenco utilizza Wise Business come conto operativo principale per incassi IT/EU.**

- Wise Business fornisce un IBAN europeo (€) dedicato
- Il cliente italiano effettua un **bonifico SEPA ordinario in €** — zero complessità, zero commissioni aggiuntive per lui
- Wise accredita in € sul conto Alvenco; Alex converte in £ quando ritiene opportuno al tasso interbancario reale (~0.4% spread vs 2–3% banche tradizionali)
- Il cliente non percepisce nulla di "straniero" — vede coordinate bancarie europee standard

### Testo da inserire nei preventivi IT per le coordinate di pagamento

> *"Pagamento tramite bonifico bancario SEPA. Coordinate bancarie comunicate a seguito di firma del contratto. Il corrispettivo vincolante è espresso in GBP (£); l'importo in EUR indicato è orientativo al cambio del giorno di emissione."*

### Quando il cliente insiste nel pagare esattamente in €

Inserire nel contratto la seguente clausola di adeguamento cambio:

> *"Il corrispettivo in EUR indicato è calcolato al tasso di cambio GBP/EUR del giorno di emissione del preventivo. In caso di variazione del tasso superiore al 3% alla data di fatturazione, l'importo in EUR sarà automaticamente adeguato al tasso vigente alla data della fattura."*

### Riepilogo per tipo di cliente

| Tipo cliente | Valuta preventivo | Metodo pagamento | Rischio cambio su Alvenco |
|---|---|---|---|
| Cliente UK | £ | Bonifico BACS/Faster Payments in £ | Nessuno |
| Cliente IT/EU (standard) | £ con nota € orientativa | Bonifico SEPA su IBAN Wise (€) | Gestito — Alex converte quando vuole |
| Cliente IT/EU (vuole pagare in €) | £ con nota € orientativa | Bonifico SEPA in € | Coperto da clausola adeguamento +3% |

---

## 5. PAGAMENTI — STRUTTURA STANDARD

| Valore progetto | Struttura pagamenti |
|---|---|
| < £700 | 50% firma + 50% go-live (2 rate — unico caso accettabile) |
| £700–£5.000 | 50% firma + 25% milestone intermedia + 25% go-live (**3 rate obbligatorie**) |
| £5.000–£15.000 | 50% firma + 25% mid-milestone + 25% go-live |
| > £15.000 | 40% firma + 30% mid-milestone + 20% UAT + 10% go-live |
| Web App £20.000–£50.000 | 40% firma + 30% mid-milestone + 30% go-live |
| Web App £50.000+ | 35% firma + 25% mid-1 + 25% mid-2 + 15% go-live |
| Retainer mensile | Fatturazione anticipata il 1° del mese |

> **Regola milestone intermedia — OBBLIGATORIA sopra £700**: Siti web = “Design approvato / consegna staging”. Web App = “Architettura e autenticazione completate”. App mobile = “Prototipo funzionante approvato”. Due rate (50/50) sono ammesse SOLO sotto £700 o con autorizzazione esplicita di Alex.

### Regole pagamento
- Nessun lavoro inizia prima del ricevimento del deposito
- Fatture scadono entro 14 giorni dalla data di emissione
- Interessi di mora: 8% p.a. sopra il tasso base Bank of England (Late Payment Act 1998)
- Sospensione servizi dopo 21 giorni di ritardo
- **Valuta vincolante: sempre GBP (£)** — vedi Sezione 4 per gestione clienti IT/EU

---

## 6. REVISIONI — NUMERO INCLUSO PER TIER

| Valore progetto | Revisioni incluse |
|---|---|
| Fino a £3.500 | 2 round |
| £3.500–£10.000 | 3 round |
| > £10.000 / Web App / App | 4 round + sessione UAT |
| Extra | £85/ora (junior) — £130/ora (senior) |

---

## 6B. PROMO PIONEER — REGOLA DI ATTIVAZIONE

> La Pioneer si applica **dalla data di go-live** se nel contratto non è stata applicata una manutenzione scalata (es. Promo Special 10). Se la manutenzione parte agevolata, la Pioneer aspetta che sia a listino pieno.

| Scenario | Quando parte la Pioneer |
|---|---|
| Nessuna promo (listino pieno da subito) | Dal go-live — subito |
| Promo Primavera applicata (solo sconto sviluppo, manutenzione piena da subito) | Dal go-live — subito |
| Promo Special 10 (manutenzione scalata anno 1: mesi 1–6 £0, mesi 7–12 50%) | Dal mese 13 (primo mese a listino pieno) |

**Regola sintetica**: Pioneer scala insieme alla manutenzione. Manutenzione a listino pieno dal giorno 1 = Pioneer attiva dal giorno 1.

---

## 7. VALIDITÀ PREVENTIVI

**30 giorni dalla data di emissione.** Dopo tale termine, Alvenco si riserva il diritto di rivedere i prezzi.

---

## 8. CHECKLIST PRE-EMISSIONE CONTRATTO

- [ ] Proprietà IP: clausola obbligatoria presente
- [ ] Nessun riferimento a provider hosting / registrar / stack tecnico
- [ ] Se hosting cliente: tabella direttive tecniche inclusa
- [ ] Struttura pagamenti corretta per il valore del progetto
- [ ] Numero revisioni incluse specificato
- [ ] Tutti i campi [___] compilati prima dell'invio
- [ ] Box note interni (gold) rimossi dalla versione finale cliente
- [ ] Clausola valuta GBP presente — se cliente IT/EU: clausola SEPA/Wise + nota EUR orientativa
- [ ] VAT treatment indicato correttamente (UK VAT threshold / reverse charge EU)
- [ ] Numero contratto assegnato: ALV-[ANNO]-[NUMERO]
- [ ] Schedule A (Scope of Work) compilato
- [ ] Revisione finale contro ALVENCO_LISTINO_PREZZI_2026.md per correttezza prezzi
- [ ] Template usato: IT o EN? (chiedere sempre ad Alex prima di procedere)

---

## 9. CONTRATTI ESISTENTI — STATO REVISIONI

| Contratto | Versione | Stato | Note |
|---|---|---|---|
| CM-Impianti | v2 | 🟡 Da inviare | Revisionare contro questo file prima dell'invio |
| Sapori Perduti | v1 | ✅ Firmato | IT, 36 mesi, €1.200, 3 rate, Starter £90/mese |
| Autoservizi Sedita | v1 | 🟡 In corso | IT/EN bilingue, 24 mesi, £2.500, Promo Primavera 50% |
| QuickFix Handyman | v1 | 🟡 Da firmare | EN UK, 36 mesi, £500 Special 10 |
| Studio Fantauzzo | — | ⬜ Da generare | Web App, IT, £5.025 + £435/mese — dopo approvazione preventivo |

---

## 10. PROTOCOLLO CREAZIONE NUOVO CONTRATTO — SEQUENZA OBBLIGATORIA

1. Leggere questo file integralmente
2. Leggere `ALVENCO_LISTINO_PREZZI_2026.md` — verificare pricing e classificazione prodotto
3. Se Web App → verificare anche Sezione 1B listino + Sezione 4B piani manutenzione
4. Se promo → leggere `PROMO_SPECIAL_10.md` e/o `Alvenco Promo Pioneer.docx`
5. Chiedere ad Alex: template IT o EN?
6. Identificare contratto esistente più simile come riferimento
7. Usare `Alvenco Template Contratto v3.1 IT/EN.docx` come base
8. Compilare tutti i campi [___] — rimuovere box gialle prima dell'invio
9. Verificare checklist Sezione 8

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | v2.0 — File creato. Regole: proprietà IP, riservatezza dominio/hosting, direttive tecniche hosting cliente, struttura pagamenti, checklist pre-emissione. |
| Maggio 2026 | Sezione 1 aggiornata: modello licenza d'uso permanente. Aggiunta 1.1: obbligo cancellazione dati GDPR Art. 17 + Art. 5. |
| Maggio 2026 | Regola valuta: tutti i contratti in GBP (£) come importo vincolante. |
| Maggio 2026 | Template bilingue: v3.1 IT e EN. Il template v2 e v3 sono deprecati. |
| 26 Maggio 2026 | v2.2 — Sezione 5 aggiornata: 3 rate obbligatorie per qualsiasi progetto sopra £700 (non solo sopra £5.000). 2 rate ammesse SOLO sotto £700 o con autorizzazione Alex. Aggiunta Sezione 6B: regola attivazione Pioneer — parte dal go-live se manutenzione è già a listino pieno; parte dal mese 13 solo se applicata Promo Special 10 con scalatura manutenzione anno 1. |
