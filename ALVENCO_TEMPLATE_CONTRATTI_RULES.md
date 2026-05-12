# ALVENCO_TEMPLATE_CONTRATTI_RULES.md
> Parent: `CLAUDE.md`
> Versione: 2.0 — Aprile 2026
> Riferimento obbligatorio per ogni contratto/preventivo emesso da Alvenco Ltd

---

## ⚠️ REGOLE FONDAMENTALI — LEGGERE PRIMA DI OGNI CONTRATTO

Queste regole si applicano a TUTTI i contratti, preventivi e accordi emessi da Alvenco Ltd, senza eccezioni. Quando viene creato o revisionato un contratto, questo file va letto prima del listino prezzi.

---

## 1. PROPRIETÀ INTELLETTUALE — REGOLA NON NEGOZIABILE

**Il codice, l'architettura, i componenti, il design system e qualsiasi prodotto digitale realizzato da Alvenco restano di proprietà esclusiva e permanente di Alvenco Ltd. Al cliente viene concessa esclusivamente una licenza d'uso, valida per tutta la durata del contratto attivo. La licenza decade automaticamente alla rescissione o mancato rinnovo del contratto.**

### Modello corretto: LICENZA D'USO (non trasferimento proprietà)

Alvenco adotta il modello licenza d'uso standard delle agenzie digitali professionali:
- Il cliente paga per usufruire del prodotto, non per acquisirne la proprietà
- Alla cessazione del rapporto contrattuale, la licenza decade
- Alvenco si riserva il diritto di riutilizzare componenti tecnici generici (non i contenuti del cliente) per altri progetti

### Nota IVA — formulazione standard per contratti:

Non indicare mai la soglia specifica di £90.000 nel contratto. La motivazione dell'esenzione è sufficiente senza dettagliare la cifra, per evitare problemi se la soglia viene superata durante l'anno contrattuale.

Formulazione corretta da usare sempre:
> *"Il corrispettivo è esente da IVA in quanto Alvenco Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC)."*

Se la situazione fiscale cambia (superamento soglia, registrazione VAT), aggiornare le condizioni di fatturazione senza che la clausola contrattuale risulti contraddittoria.

---

### Clausola obbligatoria da includere in ogni contratto:

> "Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Alvenco Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Alvenco Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo. La licenza decade automaticamente e senza necessità di preavviso alla rescissione, alla scadenza senza rinnovo o al mancato pagamento dei canoni dovuti. Alvenco Ltd si riserva il diritto di riutilizzare componenti tecnici generici non specifici al Cliente per altri progetti propri o di terzi."

### Cosa rimane SEMPRE di Alvenco (senza eccezioni):
- Codice sorgente, architettura e componenti software
- Framework, librerie e componenti proprietari sviluppati da Alvenco
- Design system, UI/UX, grafica prodotta da Alvenco
- Strumenti interni e metodologie di sviluppo
- Diritti di portfolio e case study (salvo accordo scritto diverso)
- Qualsiasi codice riutilizzabile generico non specifico al cliente

### Diritti portfolio:
- Alvenco ha sempre il diritto di usare il lavoro svolto come portfolio, case study e dimostrazione di capacità
- Il cliente può richiedere riservatezza totale in forma scritta PRIMA della firma
- In caso di richiesta di riservatezza: applicare un supplemento del 20% sul totale del progetto

## 1.1 CANCELLAZIONE DATI E ASSET DEL CLIENTE A FINE CONTRATTO — OBBLIGO LEGALE

**Alla cessazione del contratto, Alvenco Ltd è obbligata a cancellare tutti i dati, i contenuti e gli asset forniti dal cliente (testi, immagini, loghi, video, dati personali) ai sensi delle seguenti normative:**

### Normativa applicabile (da citare sempre nel contratto):
- **Art. 17 GDPR (Regolamento UE 2016/679)** — Diritto alla cancellazione ("diritto all'oblio"): obbligo di cancellare i dati personali senza ingiustificato ritardo quando non sono più necessari rispetto alle finalità per cui erano stati raccolti.
- **Art. 5, par. 1, lett. e) GDPR** — Principio di limitazione della conservazione: i dati personali devono essere conservati per il tempo strettamente necessario al raggiungimento delle finalità del trattamento.

### Clausola obbligatoria da includere in ogni contratto:

> "Alla cessazione del presente Contratto, per qualsiasi causa, Alvenco Ltd procederà alla cancellazione definitiva e irreversibile di tutti i dati, contenuti e asset forniti dal Cliente (a titolo esemplificativo: testi, immagini, loghi, video, dati personali di terzi, credenziali) ai sensi dell'Art. 17 e dell'Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR). Alvenco Ltd fornirà al Cliente conferma scritta dell'avvenuta cancellazione entro 30 (trenta) giorni dalla data di cessazione del Contratto. Sono fatti salvi gli obblighi di conservazione imposti da normative fiscali o legali applicabili, per il solo periodo strettamente necessario."

### Tempistiche standard:
- Cancellazione dati: entro 30 giorni dalla cessazione del contratto
- Conferma scritta al cliente: entro 30 giorni dalla cessazione
- Eventuali backup residui: cancellati entro 60 giorni
- Eccezione: dati fiscali conservati per 10 anni (obbligo di legge IT/UK)

---

## 2. DOMINIO E HOSTING — REGOLA DI RISERVATEZZA

**Il dominio NON viene mai indicato nel contratto al cliente.**

### Motivazione:
Il provider hosting, il registrar del dominio, la configurazione server e l'infrastruttura tecnica sono informazioni operative proprietarie di Alvenco. Il cliente non ha necessità operativa di conoscere questi dettagli.

### Cosa indicare nel contratto:
- ✅ "Hosting e registrazione dominio inclusi nel progetto" — sì
- ✅ "Il dominio sarà registrato a nome del cliente" — sì
- ✅ "Il dominio sarà trasferito al cliente al saldo completo" — sì
- ❌ "Il sito sarà ospitato su Vercel / Railway / [provider]" — NO
- ❌ "Il dominio sarà registrato su Namecheap / GoDaddy" — NO
- ❌ Qualsiasi riferimento al provider, configurazione server, stack tecnico specifico — NO

### Hosting standard Alvenco (uso interno — non divulgare):
- Frontend statico / Next.js: Vercel (free/pro tier)
- Backend Node.js: Railway
- Domini: Namecheap o registrar scelto da Alvenco
- Database: Supabase PostgreSQL
- CDN: Cloudflare (dove applicabile)

---

## 3. HOSTING SCELTO DAL CLIENTE — DIRETTIVE TECNICHE OBBLIGATORIE

Quando il cliente sceglie di gestire il proprio hosting, deve soddisfare TUTTE le seguenti specifiche tecniche. Se non soddisfatte, Alvenco può rifiutare il deploy o applicare un supplemento fino al 15%.

| Requisito | Specifica Minima |
|---|---|
| Tipo server | VPS o Dedicato (NO shared hosting in produzione) |
| Sistema operativo | Linux — Ubuntu 22.04 LTS o Debian 12 |
| Node.js | v20 LTS o superiore (per Next.js / Node.js) |
| PHP | 8.2 o superiore (per WordPress) |
| SSL | Certificato SSL valido — HTTPS obbligatorio |
| Storage | Min. 20 GB SSD (50 GB per e-commerce) |
| RAM | Min. 2 GB (4 GB raccomandati per Next.js SSR) |
| Banda | Illimitata o min. 1 TB/mese |
| Database | MySQL 8.0+ o PostgreSQL 14+ |
| Accesso SSH/SFTP | Obbligatorio per il deploy |
| CI/CD | Supporto Git-based o webhook Vercel/Railway |
| Gestione DNS | Accesso al pannello DNS richiesto |
| Email | Separata dal web hosting (G-Suite / M365) |
| Backup | Automatici giornalieri, 30 giorni di retention |
| Uptime SLA | Min. 99.9% garantito dal provider |
| Data Centre | EU o UK (GDPR compliance) |

---

## 4. PAGAMENTI — STRUTTURA STANDARD

| Valore progetto | Struttura pagamenti |
|---|---|
| < £5.000 | 50% firma + 50% go-live |
| £5.000 – £15.000 | 50% firma + 25% mid-milestone + 25% go-live |
| > £15.000 | 40% firma + 30% mid-milestone + 20% UAT + 10% go-live |
| Retainer mensile | Fatturazione anticipata il 1° del mese |

### Regole pagamento:
- Nessun lavoro inizia prima del ricevimento del deposito
- Fatture scadono entro 14 giorni dalla data di emissione
- Interessi di mora: 8% p.a. sopra il tasso base Bank of England (Late Payment Act 1998)
- Sospensione servizi dopo 21 giorni di ritardo
- Valuta primaria: GBP (£) — clienti IT/EU: EUR (€) al cambio del giorno fattura

---

## 5. REVISIONI — NUMERO INCLUSO PER TIER

| Valore progetto | Revisioni incluse |
|---|---|
| Fino a £3.500 | 2 round |
| £3.500 – £10.000 | 3 round |
| > £10.000 / App | 4 round + sessione UAT |
| Extra | £85/ora (junior) — £130/ora (senior) |

---

## 6. VALIDITÀ PREVENTIVI

**30 giorni dalla data di emissione.** Dopo tale termine, Alvenco si riserva il diritto di rivedere i prezzi.

---

## 7. CHECKLIST PRE-EMISSIONE CONTRATTO

Prima di inviare qualsiasi contratto al cliente, verificare:

- [ ] Proprietà IP: clausola obbligatoria presente (Sezione 4, Clausola 9)
- [ ] Nessun riferimento a provider hosting / registrar / stack tecnico
- [ ] Se hosting cliente: Tabella direttive tecniche inclusa (Clausola 8.2)
- [ ] Struttura pagamenti corretta per il valore del progetto
- [ ] Numero revisioni incluse specificato
- [ ] Tutti i campi [___] compilati prima dell'invio
- [ ] Tutti i box note interni (gold) rimossi dalla versione finale cliente
- [ ] VAT treatment indicato correttamente (UK VAT / reverse charge EU)
- [ ] Numero contratto assegnato: ALV-[ANNO]-[NUMERO]
- [ ] Schedule A (Scope of Work) compilato
- [ ] Valuta corretta (GBP per UK, EUR per IT/EU)
- [ ] Revisione finale contro ALVENCO_LISTINO_PREZZI_2026.md per correttezza prezzi

---

## 8. CONTRATTI ESISTENTI — STATO REVISIONI

| Contratto | Versione | Stato | Note |
|---|---|---|---|
| CM-Impianti | v2 | 🟡 Da inviare | Revisionare contro questo file prima dell'invio. Vedi CM_IMPIANTI.md |

---

## Changelog

| Data | Modifica |
|---|---|
| Aprile 2026 | File creato. Regole definite: proprietà IP, riservatezza dominio/hosting, direttive tecniche hosting cliente, struttura pagamenti, checklist pre-emissione. |
| Maggio 2026 | Sezione 1 aggiornata: modello licenza d'uso permanente (non trasferimento proprietà). Aggiunta sezione 1.1: obbligo cancellazione dati cliente a fine contratto (Art. 17 e Art. 5 par. 1 lett. e) GDPR) con clausola obbligatoria e tempistiche standard. Entrambe le regole si applicano a tutti i futuri contratti senza eccezioni. |
