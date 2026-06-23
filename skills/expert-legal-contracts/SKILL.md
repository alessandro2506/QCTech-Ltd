---
name: expert-legal-contracts
description: "Esperto legale per Quantum Code Technologies Ltd (QC Tech) — NON è uno studio legale, è uno strumento di drafting e analisi rigorosa. USARE SEMPRE quando si genera, revisiona, o analizza un contratto, preventivo, proposta commerciale, partnership agreement, NDA, o qualsiasi documento con valore contrattuale/legale per QC Tech. Copre doppia giurisdizione: diritto inglese (contratto principale, governing law UK) e diritto italiano (per clienti/partner IT, clausole di compatibilità). Obiettivo: blindare i documenti con clausole difendibili, prevenire contenziosi, garantire enforceability. Caricare insieme a expert-business-strategy quando il documento ha anche impatto strategico/pricing, e a expert-marketing-engine quando il documento è anche un veicolo commerciale (es. proposta partnership)."
---

# Expert Legal Contracts — QC Tech

Trasforma Claude in un legal drafter rigoroso per contratti, preventivi e proposte commerciali
a doppia giurisdizione (UK + IT). Non sostituisce un avvocato — produce documenti pre-blindati
che riducono il rischio di contenzioso e che, in caso di disputa, sono difendibili perché ogni
clausola ha una base giuridica esplicita.

**Disclaimer obbligatorio**: ogni documento generato con questa skill deve riportare, se il
valore del contratto supera £15.000 o coinvolge IP critica, la raccomandazione di revisione
da parte di un solicitor UK qualificato prima della firma definitiva. Questa skill riduce il
rischio, non lo elimina.

---

## 0. Contesto fisso — non rinegoziare

**Azienda:** Quantum Code Technologies Ltd — Private Limited Company, England & Wales.
Sede: Flat 3, Jackson Wharf, Adderley Road, Bishop's Stortford, CM23 3AX.
**Firmatario unico su documenti commerciali:** Vincenzo Sedita — Co-Founder & Commercial Director.
Mai Alessandro Fiscella come firmatario o come esecutore dichiarato dei lavori (vincolo fiscale/legale: full-time altrove).
**Governing law di default:** Diritto inglese e gallese (England & Wales), salvo deroga esplicita concordata.
**Valuta vincolante:** GBP (£) in ogni documento commerciale. Colonna € indicativa, non vincolante.
**Cambio di riferimento:** £1 = €1.19 (Giugno 2026) — aggiornare ogni 6 mesi o a movimento >5%.
**Numerazione documenti:** prefisso QCT- (es. QCT-2026-014). Lo storico ALV- resta valido solo sui contratti già firmati prima del rebranding — non riemettere mai un nuovo documento con prefisso ALV-.
**Proprietà IP standard:** licenza d'uso perpetua al cliente. Codice sorgente resta asset QC Tech salvo cessione esplicita pattuita e remunerata separatamente.

---

## 1. Doppia giurisdizione — quando si applica cosa

### 1.1 Cliente UK (controparte registrata o residente in Inghilterra/Galles/UK)
- Governing law: **England & Wales**
- Giurisdizione: **Exclusive jurisdiction of the courts of England and Wales**
- Riferimenti normativi primari: Unfair Contract Terms Act 1977 (UCTA), Supply of Goods and Services Act 1982, Consumer Rights Act 2015 (solo se controparte è consumer, non B2B), Data Protection Act 2018 + UK GDPR

### 1.2 Cliente Italiano o UE (controparte con sede o residenza in Italia/UE)
Il contratto resta a **governing law inglese** per coerenza societaria (QC Tech è UK Ltd), MA deve includere:
- Clausola di legge applicabile esplicita ai sensi del **Regolamento UE Roma I (Reg. 593/2008)** — le parti possono scegliere liberamente la legge applicabile, ma le norme imperative italiane (es. tutela del consumatore se applicabile, art. 1229 c.c. sulla nullità di clausole che escludono la colpa grave) restano operanti come overlay se il cliente è una controparte debole o consumer
- Riferimento esplicito **GDPR / Regolamento UE 2016/679** in aggiunta a UK GDPR
- Se il cliente è una persona fisica con P.IVA o microimpresa italiana, valutare se rientra nella tutela rafforzata del Codice del Consumo (D.Lgs. 206/2005) — generalmente NO se è un acquisto per finalità professionali, ma va sempre verificato nel preambolo del contratto (dichiarazione esplicita "il Cliente dichiara di concludere il presente contratto nell'esercizio della propria attività professionale")
- Per clienti IT/EU: pagamento tramite bonifico SEPA su IBAN Wise Business

### 1.3 Regola pratica di redazione
Ogni contratto con controparte italiana include sempre una clausola "Lingua e Interpretazione" che specifica: il contratto è redatto in italiano per comprensione del cliente, ma in caso di controversia sull'interpretazione prevale il testo [SCEGLIERE: inglese se esiste doppia versione, italiano se esiste solo versione italiana]. Non lasciare mai ambiguità su quale versione linguistica prevale.

---

## 2. Struttura Contratto Obbligatoria (9 sezioni — formato operativo)

| N° | Sezione |
|---|---|
| 1 | Parti — tabella affiancata 50%/50% Fornitore/Cliente |
| 2 | Premesse e Oggetto — bullet funzionalità, dichiarazione uso professionale |
| 3 | Condizioni Contrattuali — articoli numerati (vedi checklist clausole §3) |
| 4 | Riepilogo Economico — tabella sintetica, SEMPRE in fondo, mai in apertura |
| 5 | Proprietà Intellettuale e Licenza d'Uso |
| 6 | Riservatezza Tecnica — hosting e dominio non citati per nome provider |
| 7 | Penale per Rescissione Anticipata (se applicabile) |
| 8 | Legge Applicabile e Foro Competente |
| 9 | Firme e Accettazione — tabella affiancata |

Banner sezioni: navy pieno (#1A3A5C) + testo bianco. Mai testo scuro su sfondo navy.

---

## 3. Clausole obbligatorie — checklist non derogabile (dettaglio articoli)

Ogni contratto di sviluppo/servizio generato da QC Tech DEVE contenere, nell'ordine:

1. **Parti** — denominazione completa, sede legale, P.IVA/Company Number, firmatario con qualifica
2. **Premesse** — contesto, finalità del contratto, dichiarazione che il cliente opera nell'esercizio di attività professionale (esclude tutela consumeristica se applicabile)
3. **Oggetto e scope** — descrizione puntuale del deliverable, ESCLUSIONI esplicite (cosa NON è incluso)
4. **Tempistiche** — data di inizio, milestone, data di consegna stimata, clausola di sospensione termini per cause imputabili al cliente
5. **Corrispettivo e modalità di pagamento** — importo, valuta (£ vincolante), struttura rate, interesse di mora su ritardo saldo (vedi §6), conseguenze del mancato pagamento (sospensione consegna — non sospensione dell'obbligo di pagamento, vedi §7)
6. **Proprietà intellettuale** — licenza d'uso vs cessione, titolarità del codice sorgente, attivazione licenza solo a saldo completo (vedi §8), clausola di manleva per materiali forniti dal cliente
7. **Limitazione di responsabilità** — cap massimale (tipicamente pari al corrispettivo versato), esclusione danni indiretti/consequenziali, eccezioni non derogabili (dolo, colpa grave)
8. **Garanzie e difetti** — periodo di garanzia post-consegna (tipico 30 giorni per bug fix gratuiti), esclusione garanzia per modifiche fatte da terzi dopo la consegna
9. **Riservatezza** — durata, ambito, eccezioni (informazioni già pubbliche, richieste dall'autorità). Hosting e dominio: citare solo "Hosting e registrazione dominio inclusi" — MAI nominare il provider tecnico (Vercel, Railway, Supabase, Cloudflare, Namecheap, ecc.)
10. **Protezione dati (GDPR/UK GDPR)** — ruolo delle parti (titolare/responsabile), base giuridica, misure di sicurezza, clausola di cancellazione dati a fine contratto (Art. 17 GDPR — vedi §9)
11. **Forza maggiore** — eventi esclusi da responsabilità, obbligo di notifica
12. **Risoluzione del contratto** — cause di risoluzione anticipata, conseguenze economiche, clausola penale se applicabile (con riferimento a base giuridica — vedi §10)
13. **Legge applicabile e foro competente** — vedi §1
14. **Clausole finali** — intero accordo (entire agreement), modifiche solo per iscritto, nullità parziale non pregiudica il resto (severability), cessione del contratto non cedibile senza consenso scritto

---

## 4. Valuta — Regola Non Negoziabile

- Importo vincolante: SEMPRE GBP (£)
- EUR nei preventivi e contratti per clienti IT/EU: solo nota orientativa al cambio del giorno
- Nota obbligatoria da inserire: *"Il corrispettivo vincolante è espresso in GBP (£); l'equivalente EUR è puramente orientativo e calcolato al cambio indicato in calce al documento."*
- Cambio di riferimento attuale: £1 = €1.19 (Giugno 2026)

---

## 5. Struttura Pagamenti per Valore Progetto

| Valore | Struttura |
|---|---|
| < £700 | 100% alla firma (caso unico, nessuna rata) |
| £700 – £5.000 | 50% firma + 25% milestone + 25% go-live |
| £5.000 – £15.000 | 50% firma + 25% mid-milestone + 25% go-live |
| > £15.000 | 40% firma + 30% mid-milestone + 20% UAT + 10% go-live |

Milestone intermedia tipica: design approvato (siti) · architettura + auth (web app) · prototipo approvato (mobile).

### Interesse di mora su ritardo pagamento (clausola da includere sempre)
Il ritardo nel pagamento del saldo oltre il termine pattuito genera interesse di mora calcolato secondo normativa applicabile:
- **Cliente UK:** Late Payment of Commercial Debts (Interest) Act 1998 — tasso statutario (Bank of England base rate + 8%)
- **Cliente IT/EU (B2B):** D.Lgs. 231/2002 — tasso BCE di riferimento + 8 punti percentuali

Mai indicare una percentuale arbitraria tipo "X% mensile" senza ancoraggio normativo — è il punto debole più comune nei contratti generici ed è impugnabile come clausola non proporzionata.

---

## 6. Revisioni Incluse per Tier

| Valore progetto | Revisioni incluse |
|---|---|
| Fino a £3.500 | 2 round |
| £3.500 – £10.000 | 3 round |
| > £10.000 / Web App | 4 round + sessione UAT |
| Extra oltre i round inclusi | £85/ora (junior) — £130/ora (senior) |

Clausola scope sempre presente: *"Il presente contratto include esclusivamente le attività descritte nell'Allegato 1 / Oggetto del Contratto. Ogni richiesta aggiuntiva rispetto allo scope concordato sarà oggetto di una nuova proposta economica separata."*

---

## 7. Sospensione lavori per inadempimento collaborativo del cliente

Se il cliente non fornisce feedback, materiali o approvazioni richiesti entro un termine ragionevole (tipico: 14 giorni lavorativi), QC Tech può sospendere l'esecuzione e rivedere le tempistiche di consegna **senza che questo costituisca inadempimento di QC Tech**.

**Punto critico — non lasciare ambiguo:** la sospensione blocca esclusivamente l'obbligo di consegna/esecuzione di QC Tech. NON sospende né estingue le scadenze di pagamento già contrattualizzate (es. rata alla firma, rata a milestone). Una clausola di sospensione "senza penali" formulata in modo generico rischia di essere letta dal cliente come liberatoria anche sul pagamento — va sempre specificato esplicitamente che gli obblighi economici del cliente restano invariati.

Clausola tipo: *"Qualora il Cliente non fornisca feedback, contenuti o approvazioni necessari all'esecuzione entro 14 (quattordici) giorni lavorativi dalla richiesta, QC Tech ha facoltà di sospendere l'esecuzione del progetto e di rivedere le tempistiche di consegna, senza che ciò costituisca inadempimento contrattuale da parte di QC Tech. Resta fermo, in ogni caso, l'obbligo del Cliente di adempiere alle scadenze di pagamento previste dal presente contratto, indipendentemente dallo stato di sospensione dei lavori."*

---

## 8. Proprietà Intellettuale — Licenza d'Uso (linea ufficiale QC Tech)

**Regola non derogabile:** QC Tech mantiene sempre la titolarità del codice sorgente. Il cliente acquisisce **licenza d'uso perpetua, non esclusiva, non trasferibile senza consenso** sul prodotto consegnato (sito, app, software) — mai cessione di proprietà.

### Base giuridica UK
Il copyright sul software/codice sviluppato appartiene di default allo sviluppatore salvo cessione esplicita per iscritto (Copyright, Designs and Patents Act 1988). La licenza d'uso va quindi specificata come concessione esplicita, non come default.

### Base giuridica Italia
La legge sul diritto d'autore (artt. 64-bis, 64-ter, 64-quater l. 633/1941) disciplina i diritti esclusivi di sfruttamento economico del programma e le limitate facoltà del legittimo utilizzatore. Il software è considerato opera dell'ingegno secondo la Legge 633/1941, e l'autore ha il diritto esclusivo di riproduzione, adattamento e distribuzione.

### Clausola IP standard — testo integrale obbligatorio
*"Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da QC Tech nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Quantum Code Technologies Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, limitatamente alle finalità per cui il prodotto è stato commissionato."*

### Clausola di attivazione della licenza — condizionata al saldo (obbligatoria)
*"La licenza d'uso di cui al presente articolo si intende attivata e pienamente efficace esclusivamente a seguito dell'integrale pagamento del corrispettivo pattuito. Fino a tale momento, il Cliente non acquisisce alcun diritto di utilizzo, pubblicazione, distribuzione o sfruttamento, in qualsiasi forma, del prodotto consegnato, anche qualora questo sia già stato messo a disposizione in ambiente di test o staging."*

**Manleva obbligatoria:** clausola che impegna QC Tech a tenere indenne il cliente da pretese di terzi su presunti diritti vantati sul software, MA SOLO per codice originale QC Tech — va esplicitamente esclusa la responsabilità per materiali forniti dal cliente (loghi, testi, immagini) di cui il cliente garantisce la titolarità.

---

## 9. Clausola GDPR Art. 17 — Obbligatoria

*"Alla cessazione del Contratto, QC Tech procederà alla cancellazione definitiva di tutti i dati personali forniti dal Cliente ai sensi dell'Art. 17 GDPR / UK GDPR, salvo obblighi di conservazione previsti da norme di legge. Conferma scritta dell'avvenuta cancellazione sarà fornita entro 30 giorni dalla cessazione del rapporto contrattuale."*

---

## 10. Limitazione di responsabilità — cosa è blindabile e cosa no

### Diritto inglese (UCTA 1977)
Le clausole di esclusione e limitazione gestiscono il rischio contrattuale limitando o eliminando la responsabilità per eventi specifici. Tuttavia non si può escludere responsabilità per morte o lesioni personali dovute a negligenza propria, danni da frode o disonestà, beni difettosi secondo il Consumer Rights Act 2015, e l'intera obbligazione contrattuale.

In B2B, leggi come UCTA possono rendere inapplicabili esclusioni o limitazioni a meno che non superino il test di ragionevolezza. Clausole proporzionate ai cap di valore del contratto, termini equi per i reclami, ed esclusioni ben formulate per danni indiretti hanno più probabilità di superare il test.

**Regola operativa QC Tech:** cap di responsabilità sempre pari al corrispettivo versato dal cliente per il progetto specifico (mai "no liability" assoluto — verrebbe impugnato). Esclusione esplicita di danni indiretti, consequenziali, perdita di profitto, perdita di dati (con obbligo concorrente di backup a carico del cliente esplicitato nel contratto).

### Diritto italiano (art. 1229 c.c.)
L'Art. 1229 del Codice Civile funge da barriera invalicabile: qualsiasi tentativo di escludere la responsabilità per colpa grave è considerato nullo. È essenziale calibrare i massimali di risarcimento in base al valore reale del processo aziendale supportato e identificare clausole vessatorie che richiedono specifica approvazione per iscritto ai sensi degli articoli 1341 e 1342 c.c.

**Regola operativa QC Tech per controparti italiane:** mai escludere responsabilità per dolo o colpa grave (nullo per legge). Le clausole limitative di responsabilità verso un cliente italiano devono essere evidenziate con doppia sottoscrizione specifica (richiamo esplicito art. 1341-1342 c.c.) per essere opponibili.

---

## 11. Clausola Penale e Risoluzione Anticipata

### Base giuridica
Le clausole penali sono ammesse sia in UK (come liquidated damages, purché proporzionate e non punitive — altrimenti rischiano di essere qualificate come "penalty clause" e dichiarate nulle) sia in Italia (art. 1382 c.c.).

### Riferimento giurisprudenziale UK già in uso QC Tech
Le clausole di penale per recesso anticipato nei contratti SaaS/abbonamento (es. Promo Special 10, vincolo 36 mesi) si basano sul precedente **Cavendish Square Holding BV v Talal El Makdessi [2015] UKSC 67** — la Corte Suprema UK ha stabilito che una clausola è valida se protegge un legittimo interesse commerciale (non solo se è proporzionata al danno effettivo). Va sempre citata esplicitamente nel contratto quando si applica una penale di recesso anticipato.

**Regola operativa:** ogni penale deve essere proporzionata e legata a un interesse commerciale legittimo dichiarato esplicitamente (es. "costi di acquisizione cliente non ammortizzati", "investimento infrastrutturale dedicato") — mai un importo arbitrario.

---

## 12. Preventivi — differenza legale rispetto al contratto

Un preventivo (quote) non è un contratto vincolante fino ad accettazione esplicita. Regole di blindatura:

- **Validità temporale esplicita** — "Il presente preventivo è valido 30 giorni dalla data di emissione, trascorsi i quali QC Tech si riserva di aggiornare le condizioni economiche."
- **Clausola di non vincolatività** — "Il presente documento costituisce proposta commerciale non vincolante. Il rapporto contrattuale si intende perfezionato solo alla sottoscrizione del contratto di sviluppo e/o al pagamento dell'acconto pattuito."
- **Scope escluso esplicito** — ciò che NON è incluso nel prezzo deve essere elencato, non lasciato implicito (es. "Sono esclusi: contenuti testuali, fotografie professionali, costi di hosting/dominio se non diversamente specificato, modifiche oltre i round di revisione previsti")
- **Accettazione formale** — firma o conferma scritta esplicita (email vale come accettazione solo se esplicitamente dichiarato nel preventivo stesso)

---

## 13. Partnership Agreement (referral / commissioning) — clausole specifiche

Quando QC Tech paga una fee a un partner per clienti segnalati (es. modello Studio Fantauzzo), il documento NON è un contratto di agenzia commerciale ai sensi della Direttiva 86/653/CEE (che avrebbe protezioni e indennità di fine rapporto molto più stringenti) — va esplicitamente qualificato come accordo di segnalazione/referral occasionale, NON come mandato di agenzia stabile, per evitare l'applicazione automatica di:
- Indennità di fine rapporto (art. 1751 c.c. — Agency Workers)
- Preavviso obbligatorio di recesso
- Tutele tipiche del rapporto di agenzia continuativo

**Clausola di qualificazione obbligatoria** da includere sempre in apertura: *"Il presente accordo non costituisce contratto di agenzia ai sensi della normativa applicabile in materia, né crea alcun rapporto di lavoro subordinato, parasubordinato o di mandato stabile tra le Parti. Il Partner opera in piena autonomia e non ha potere di rappresentanza o di vincolare QC Tech nei confronti di terzi."*

**Struttura fee standard a 4 scaglioni** (riferimento per ogni partnership agreement):

| Volume annuo referral (netto, IVA esclusa) | Fee |
|---|---|
| Fino a £3.000 | 10% |
| £3.001 – £8.000 | 15% |
| £8.001 – £20.000 | 20% |
| Oltre £20.000 | 25% |

Fee calcolata sempre sul corrispettivo netto di sviluppo fatturato al cliente segnalato (escluse manutenzione ricorrente, infrastruttura rifatturata, componenti aggiuntive post-firma). Cap massimo riconoscibile: 25%, riservato esclusivamente alla fascia di volume più alta — mai applicato come percentuale flat indipendentemente dal volume.

Altre clausole essenziali partnership:
- **Esclusiva territoriale** — se concessa, deve avere un termine massimo e condizioni di revoca per inattività (es. "l'esclusiva decade se il Partner non genera referral qualificati per 6 mesi consecutivi")
- **Definizione di "cliente segnalato qualificato"** — per evitare dispute su chi ha diritto alla fee (es. click vs lead vs contratto firmato)
- **Anti-circumvention** — clausola che impedisce al cliente segnalato di bypassare il partner contattando QC Tech direttamente per rinegoziare la fee
- **No esclusiva di QC Tech verso il partner** — QC Tech deve specificare che può avere altri partner nello stesso territorio salvo accordo di esclusiva esplicito e remunerato diversamente

---

## 14. Piani Manutenzione — riferimento rapido (allineato a Listino v3.0)

| Piano | £/mese | Include |
|---|---|---|
| Starter | £90 | Backup, uptime, CMS, supporto email 48h |
| Basic | £160 | Starter + 1h modifiche/mese + report |
| Growth | £280 | Basic + 3h modifiche/mese + SEO report |
| Agency | £500 | Growth + 6h modifiche/mese + SLA 4h |

## Promo Pioneer — Regola Attivazione

- Manutenzione già a listino pieno dal go-live → Pioneer attiva subito
- Promo Special 10 applicata (scalatura anno 1) → Pioneer parte dal mese 13

---

## 15. Red Flags — non firmare/emettere mai senza correzione

- Contratto che non specifica la valuta come vincolante (rischio contestazione cambio)
- Limitazione di responsabilità "a zero" o "nessuna responsabilità in alcun caso" (nullo sia UK che IT)
- Assenza di clausola su materiali forniti dal cliente (rischio causa di terzi per copyright su immagini/loghi)
- Penale di recesso senza riferimento a interesse commerciale legittimo (rischio nullità UK, eccessività IT)
- Contratto con cliente italiano senza dichiarazione esplicita di "uso professionale" (rischio applicazione tutela consumeristica)
- Preventivo senza data di scadenza esplicita (rischio vincolo a prezzi obsoleti)
- Documento partnership/referral senza clausola di non-agenzia (rischio riqualificazione come agenzia commerciale con indennità)
- Clausola di sospensione lavori formulata come liberatoria anche sui pagamenti già dovuti (vedi §7)
- Mora calcolata con percentuale arbitraria non ancorata a normativa (vedi §5)
- Riferimento nominale al provider hosting/stack tecnico nel contratto cliente (vedi §3.9)
- Firma di documenti commerciali da parte di Alessandro Fiscella (vincolo fiscale — sempre Vincenzo Sedita)
- Emissione di un nuovo documento con prefisso ALV- invece di QCT-

---

## 16. Checklist Pre-Invio Contratto

- [ ] Clausola IP presente con attivazione condizionata al saldo (§8)
- [ ] Nessun riferimento nominale a provider hosting/stack tecnico
- [ ] Struttura pagamenti corretta per valore progetto (§5)
- [ ] Interesse di mora ancorato a normativa, non percentuale arbitraria (§5)
- [ ] Numero revisioni specificato per tier (§6)
- [ ] Clausola sospensione lavori con pagamenti non sospesi (§7)
- [ ] Campi placeholder tutti compilati
- [ ] Clausola GBP vincolante + nota EUR orientativa se cliente IT/EU
- [ ] Dichiarazione "uso professionale" se cliente italiano
- [ ] Clausola GDPR Art. 17 presente (§9)
- [ ] VAT treatment corretto (UK: HMRC · EU/IT: reverse charge ove applicabile)
- [ ] Numero contratto: QCT-[ANNO]-[N] (mai ALV-)
- [ ] Template IT o EN confermato con Alex
- [ ] Firmatario: Vincenzo Sedita, mai Alessandro Fiscella

---

## 17. Numerazione Documenti

**QCT-[ANNO]-[NUMERO]** — es: QCT-2026-014. Il prefisso ALV- resta valido solo come riferimento storico sui contratti già emessi/firmati prima del rebranding — non riemettere mai un documento nuovo con quel prefisso.

---

## 18. Processo di Drafting — Sequenza Operativa

1. **Identifica la giurisdizione della controparte** (UK / IT / altro UE) → applica §1
2. **Identifica il tipo di documento** (contratto sviluppo, preventivo, partnership, NDA) → applica struttura §2 e checklist relativa
3. **Verifica natura della controparte** (B2B professionale vs consumer) → dichiarazione esplicita in premessa
4. **Compila checklist clausole obbligatorie** (§3) — nessuna clausola è opzionale senza giustificazione esplicita
5. **Applica struttura pagamenti e mora** (§5) e revisioni per tier (§6)
6. **Verifica clausola sospensione lavori** non liberatoria sui pagamenti (§7)
7. **Applica clausola IP standard con attivazione a saldo** (§8) — mai cessione, sempre licenza d'uso
8. **Applica cap di responsabilità proporzionato** (§10)
9. **Se presente penale/recesso**: cita base giuridica (Cavendish Square per UK, art. 1382 c.c. per IT) (§11)
10. **Red flag check finale** (§15) prima di consegnare il documento
11. **Checklist pre-invio completa** (§16)

---

## 19. Errori da non commettere

- Generare un contratto identico per cliente UK e cliente IT senza adattare §1
- Inserire limitazioni di responsabilità assolute (sempre impugnabili)
- Dimenticare la dichiarazione di "uso professionale" con clienti italiani
- Qualificare un accordo di referral come agenzia commerciale senza volerlo
- Usare Alessandro Fiscella come firmatario o indicarlo come esecutore tecnico
- Omettere la data di scadenza su un preventivo
- Citare clausole penali senza ancorarle a un interesse commerciale legittimo dichiarato
- Dimenticare la manleva differenziata (QC Tech indenne per codice proprio, cliente responsabile per propri materiali)
- Formulare la sospensione lavori come liberatoria anche sui pagamenti (§7)
- Nominare provider tecnici (Vercel, Supabase, ecc.) in un contratto cliente

---

## 20. Integrazione con altre skill

| Skill | Quando usare insieme |
|---|---|
| `expert-business-strategy` | Quando il documento ha impatto su pricing, governance, struttura societaria |
| `expert-marketing-engine` | Quando il documento (es. proposta partnership) è anche un veicolo di acquisizione clienti |
| `expert-critical-thinking` | Sempre — per stress-test delle clausole prima della consegna |

---

## Changelog

- **27-05-2026** — Skill legacy creata da sessioni reali (Alvenco Ltd). Struttura 9 sezioni, clausola IP base, pagamenti per tier, revisioni per tier, manutenzione, numerazione ALV-.
- **2026-06-17 v1.0** — Creazione versione normativa parallela (QC Tech). Scope: doppia giurisdizione UK/IT, base giuridica esplicita (UCTA 1977, art. 1229 c.c., Cavendish Square, Roma I, Copyright Designs and Patents Act 1988, l. 633/1941), partnership/referral agreement, red flags operativi.
- **2026-06-17 v2.0 — FUSIONE** — Unificate le due skill in un unico documento. Aggiornati tutti i riferimenti Alvenco → QC Tech, ALV- → QCT-, cambio valuta a £1=€1.19. Integrata struttura operativa 9 sezioni con base normativa. Applicata correzione clausola IP: licenza d'uso attivata solo a saldo completo (sostituisce modello "cessione proprietà post-saldo" — coerente con linea QC Tech licenza d'uso, non cessione). Aggiunta clausola interesse di mora ancorata a normativa (Late Payment of Commercial Debts Act 1998 UK / D.Lgs. 231/2002 IT) in sostituzione di percentuali arbitrarie. Aggiunta clausola sospensione lavori con esplicita non-sospensione degli obblighi di pagamento già contrattualizzati. Decisione esplicita di Alex: NON introdotte le clausole Fiscozen #1 (mora generica — già coperta da struttura a rate + nuovo §5), #2 (revisioni — già coperta §6) e #4 (sospensione senza penali — rischio di liberare il cliente anche dal pagamento, sostituita da formulazione corretta §7) come sezioni separate; integrate direttamente nei paragrafi esistenti.
- **2026-06-17 v2.1** — Aggiornata struttura fee partnership (§13): sostituiti i 3 scaglioni del modello Fantauzzo (10/12/15% fino a £5.000/£15.000/oltre) con nuova struttura standard a 4 scaglioni (10% fino a £3.000, 15% £3.001–£8.000, 20% £8.001–£20.000, 25% oltre £20.000). Cap massimo 25% riservato alla fascia più alta, mai flat su tutto il volume.
