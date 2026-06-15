# ALVENCO_TEMPLATE_CONTRATTO_BASE.md
> Template master per la generazione di contratti Alvenco Ltd
> Ultimo aggiornamento: Maggio 2026 — Estratto e validato dal contratto Sapori Perduti ALV-2026-SP01

---

## ISTRUZIONI PER L'USO

Questo file contiene tutte le clausole standard pronte per essere riutilizzate.
Le parti variabili sono indicate con `[PLACEHOLDER]`.
Prima di generare un nuovo contratto, compilare la sezione DATI VARIABILI qui sotto.

---

## DATI VARIABILI DA COMPILARE PER OGNI CONTRATTO

```
RIF_CONTRATTO:        es. ALV-2026-SP01
MESE_ANNO:            es. Maggio 2026
NOME_CLIENTE:         es. Sapori Perduti Ristorante
REFERENTE_CLIENTE:    es. Sig.ra Antonella La Monica
TITOLO_REFERENTE:     es. Titolare
CITTA_CLIENTE:        es. Palermo, Italia
SITO_CLIENTE:         es. saporiperduti.it
DESCRIZIONE_PROGETTO: es. Sviluppo Sito Web & Piano di Manutenzione Mensile
FUNZIONALITA:         [lista bullet specifica del progetto]
IMPORTO_SVILUPPO:     es. € 1.200,00 (milleduecento/00 Euro)
IMPORTO_RATA_1:       es. € 400,00
IMPORTO_RATA_2:       es. € 400,00
IMPORTO_RATA_3:       es. € 400,00
VALORE_MERCATO:       es. € 14.040 – € 32.760
PIANO_MANUTENZIONE:   es. Starter
CANONE_GBP:           es. £90/mese
CANONE_EUR:           es. €105/mese
DURATA_MESI:          es. 36
RINNOVO_MESI:         es. 36
CAMBIO_DATA:          es. Maggio 2026
CAMBIO_VALORE:        es. £1 = €1,17
VALORE_TOTALE_TRIENNIO: es. € 4.980,00
NOTA_CALCOLO_TRIENNIO: es. €1.200 sviluppo + (€105 × 36 mesi) = €4.980,00
CLIENTE_STORICO:      sì/no — se sì, include paragrafo rapporto storico
ANNO_INIZIO_RAPPORTO: es. 2022 — usato solo se CLIENTE_STORICO = sì
PIANO_PIONEER:        sì/no
```

---

## INTESTAZIONE

```
CONTRATTO DI SERVIZI DIGITALI
[DESCRIZIONE_PROGETTO]
Rif. [RIF_CONTRATTO]  │  [MESE_ANNO]  │  [NOME_CLIENTE]
```

---

## 1. PARTI DEL CONTRATTO

**FORNITORE**
Alvenco Ltd
Registered in England & Wales
Bishop's Stortford, Hertfordshire, England
hello@alvenco.co.uk  │  alvenco.co.uk
+44 7754 812247

**CLIENTE**
[NOME_CLIENTE]
[REFERENTE_CLIENTE]
[CITTA_CLIENTE]
[SITO_CLIENTE]

---

## 2. PREMESSE E OGGETTO DEL CONTRATTO

Il presente Contratto (di seguito "Contratto") è stipulato tra Alvenco Ltd, agenzia digitale full-stack con sede a Bishop's Stortford, Hertfordshire, Inghilterra (di seguito "Fornitore"), e [NOME_CLIENTE], rappresentato da [REFERENTE_CLIENTE] (di seguito "Cliente").

> **[SE CLIENTE_STORICO = sì]**
> [NOME_CLIENTE] è un cliente storico di Alvenco Ltd, con un rapporto di fiducia consolidato dal [ANNO_INIZIO_RAPPORTO]. Il presente Contratto formalizza il proseguimento e l'evoluzione di tale rapporto nell'ambito delle strutture operative di Alvenco Ltd, e riconosce la fiducia rinnovata dal Cliente nella qualità e nella professionalità del Fornitore.

Il Fornitore ha progettato, sviluppato e consegnato il sito web ufficiale del Cliente all'indirizzo [SITO_CLIENTE], realizzato con tecnologie di ultima generazione. Il sito include le seguenti funzionalità:

[FUNZIONALITA — lista bullet specifica del progetto]

---

## 3. CONDIZIONI CONTRATTUALI

### Art. 1 — Durata del Contratto

Il presente Contratto ha durata di [DURATA_MESI] (specificare in lettere) mesi a decorrere dalla data di firma. Alla scadenza, il Contratto si rinnova tacitamente per periodi successivi di [RINNOVO_MESI] mesi, salvo disdetta scritta inviata a legal@alvenco.co.uk con almeno 60 (sessanta) giorni di preavviso rispetto alla data di scadenza o rinnovo.

La disdetta tardiva non produce effetti per il periodo contrattuale in corso. Il Cliente è tenuto al pagamento del canone per l'intero periodo di rinnovo già avviato.

---

### Art. 2 — Corrispettivo per lo Sviluppo e Modalità di Pagamento

Il corrispettivo per la progettazione e lo sviluppo del sito web [SITO_CLIENTE], comprensivo di tutte le funzionalità descritte nelle Premesse, è stabilito in [IMPORTO_SVILUPPO], in riconoscimento del rapporto di fiducia con il Cliente e della scontistica speciale applicata rispetto al listino Alvenco 2026 (valore di mercato: [VALORE_MERCATO]).

Il corrispettivo è esente da IVA in quanto Alvenco Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC).

Il Cliente è invitato a verificare con il proprio consulente fiscale gli obblighi fiscali applicabili al presente rapporto contrattuale con una società avente sede nel Regno Unito.

Il pagamento avviene in 3 (tre) rate secondo il seguente piano:

| Rata | Scadenza | Importo | Note |
|---|---|---|---|
| 1ª | Alla firma del Contratto | [IMPORTO_RATA_1] | Avvio ufficiale rapporto Alvenco |
| 2ª | 30 giorni dalla firma | [IMPORTO_RATA_2] | Rata intermedia |
| 3ª | 60 giorni dalla firma (go-live confermato) | [IMPORTO_RATA_3] | Saldo finale a go-live |
| **TOTALE SVILUPPO** | | **[IMPORTO_SVILUPPO]** | |

Ogni rata è pagabile tramite bonifico bancario alle coordinate comunicate da Alvenco Ltd. Le fatture scadono entro 15 giorni dalla data di emissione. In caso di ritardo superiore a 30 giorni, Alvenco Ltd si riserva il diritto di sospendere i servizi fino alla regolarizzazione del pagamento.

---

### Art. 3 — Piano di Manutenzione Mensile

A decorrere dal mese successivo alla firma del presente Contratto, il Cliente attiva il Piano di Manutenzione Mensile [PIANO_MANUTENZIONE] alle seguenti condizioni:

| Piano | Prezzo Listino | Applicato |
|---|---|---|
| [PIANO_MANUTENZIONE] — Manutenzione Mensile | [CANONE_GBP] ([CANONE_EUR]) | [CANONE_GBP] ([CANONE_EUR]) |

Il Piano [PIANO_MANUTENZIONE] include:
- Backup settimanale automatico del sito e del database
- Monitoraggio uptime 24/7 con alerting automatico
- Aggiornamenti del CMS e delle dipendenze tecniche
- Supporto tecnico via email con risposta garantita entro 48 ore lavorative
- Monitoraggio certificato SSL e sicurezza base

Il canone mensile è fatturato anticipatamente il 1° di ogni mese, pagabile entro 15 giorni. La valuta di fatturazione è GBP (£); il controvalore in EUR è indicativo al cambio del giorno di firma.

Interventi non inclusi nel Piano [PIANO_MANUTENZIONE] (nuove funzionalità, modifiche design, nuove pagine) sono fatturati separatamente a £70/ora (frontend) o £90/ora (full-stack), previa approvazione scritta del Cliente.

---

### Art. 4 — Licenza d'Uso e Proprietà Intellettuale

Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Alvenco Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Alvenco Ltd.

Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo. Il Cliente è autorizzato a utilizzare il sito web e la dashboard amministrativa per i propri scopi commerciali per tutta la durata del Contratto.

La licenza decade automaticamente e senza necessità di preavviso nei seguenti casi: rescissione del Contratto, scadenza senza rinnovo, mancato pagamento protratto oltre 60 giorni.

Alvenco Ltd si riserva il diritto di riutilizzare componenti tecnici generici non specifici al Cliente per altri progetti propri o di terzi. Il Cliente non acquisisce in nessun caso la proprietà del codice sorgente né di alcun componente tecnico sviluppato da Alvenco Ltd.

I contenuti forniti dal Cliente (testi, immagini, loghi, video) restano di esclusiva proprietà del Cliente. Alvenco Ltd detiene il diritto di citare il progetto come portfolio e case study, salvo richiesta scritta di riservatezza.

---

### Art. 5 — Cancellazione Dati e Asset del Cliente

Alla cessazione del presente Contratto, per qualsiasi causa, Alvenco Ltd procederà alla cancellazione definitiva e irreversibile di tutti i dati, contenuti e asset forniti dal Cliente (a titolo esemplificativo: testi, immagini, loghi, video, dati personali di utenti, credenziali di accesso) in conformità con:

- **Art. 17 GDPR (Regolamento UE 2016/679)** — Diritto alla cancellazione (diritto all'oblio): obbligo di cancellare i dati personali senza ingiustificato ritardo quando non sono più necessari rispetto alle finalità per cui erano stati raccolti o trattati.
- **Art. 5, par. 1, lett. e) GDPR** — Principio di limitazione della conservazione: i dati personali devono essere conservati per il tempo strettamente necessario al raggiungimento delle finalità del trattamento.

Alvenco Ltd fornirà al Cliente conferma scritta dell'avvenuta cancellazione entro 30 (trenta) giorni dalla data di cessazione del Contratto. Sono fatti salvi gli obblighi di conservazione imposti da normative fiscali o legali applicabili (es. dati fatturazione: 10 anni), per il solo periodo strettamente necessario.

---

### Art. 6 — Obblighi delle Parti

**Alvenco Ltd si impegna a:**
- Eseguire i servizi di manutenzione con professionalità e diligenza
- Garantire supporto email entro 48 ore lavorative
- Notificare tempestivamente criticità tecniche rilevanti
- Mantenere la riservatezza di tutti i dati e le informazioni del Cliente
- Eseguire backup settimanali e conservarli per almeno 30 giorni

**Il Cliente si impegna a:**
- Corrispondere i pagamenti nei termini stabiliti
- Comunicare tempestivamente anomalie o malfunzionamenti rilevati
- Non apportare modifiche tecniche al sito senza previa approvazione scritta di Alvenco Ltd
- Mantenere riservate le credenziali di accesso alla dashboard amministrativa
- Verificare con il proprio consulente fiscale gli obblighi fiscali applicabili al presente rapporto contrattuale con una società avente sede nel Regno Unito

---

### Art. 7 — Limitazione di Responsabilità

Alvenco Ltd non è responsabile per: interruzioni del servizio causate da terze parti (Vercel, Firebase, Google, provider di connettività); perdita di dati conseguente a eventi di forza maggiore, attacchi informatici di terzi o errori del Cliente; danni indiretti, perdita di profitto o di opportunità commerciale derivanti da malfunzionamenti.

La responsabilità complessiva di Alvenco Ltd per qualsiasi evento dannoso è limitata all'importo corrisposto dal Cliente nei 3 mesi precedenti l'evento.

---

### Art. 8 — Riservatezza e Privacy

Entrambe le Parti si impegnano a mantenere la massima riservatezza su tutte le informazioni confidenziali acquisite nell'ambito del presente Contratto. Il trattamento dei dati personali avviene nel rispetto del Regolamento UE 2016/679 (GDPR). Alvenco Ltd agisce in qualità di Responsabile del Trattamento per i dati personali gestiti attraverso il sito web del Cliente.

---

### Art. 9 — Recesso Anticipato

Il Cliente ha facoltà di recedere dal presente Contratto con preavviso scritto di 60 (sessanta) giorni inviato a legal@alvenco.co.uk. In caso di recesso anticipato: il corrispettivo di sviluppo già corrisposto non è rimborsabile; i canoni mensili maturati fino alla scadenza del preavviso sono integralmente esigibili; non sono dovute penali aggiuntive.

Alvenco Ltd ha facoltà di risolvere il Contratto con preavviso scritto di 30 giorni in caso di inadempimento grave non sanato entro 15 giorni dalla contestazione scritta.

---

### Art. 10 — Legge Applicabile e Foro Competente

Il presente Contratto è regolato dalla legge inglese (England & Wales). Le Parti si impegnano preliminarmente a tentare una risoluzione amichevole entro 30 giorni dalla contestazione scritta. In mancanza di accordo, il foro competente è quello di Bishop's Stortford (England & Wales), fatti salvi i diritti inderogabili del consumatore previsti dalla normativa italiana applicabile.

---

## 4. RIEPILOGO ECONOMICO

| Voce | Frequenza | Importo |
|---|---|---|
| Sviluppo sito web [SITO_CLIENTE] — 3 rate ([IMPORTO_RATA_1] + [IMPORTO_RATA_2] + [IMPORTO_RATA_3]) | Una tantum | [IMPORTO_SVILUPPO] |
| Piano Manutenzione [PIANO_MANUTENZIONE] | Mensile anticipato | [CANONE_GBP] / [CANONE_EUR] |
| IVA | — | Esente |
| **VALORE TOTALE TRIENNIO (sviluppo + [DURATA_MESI] mesi manutenzione)** | **[DURATA_MESI] mesi** | **[VALORE_TOTALE_TRIENNIO]** |

*[NOTA_CALCOLO_TRIENNIO]*

---

## 5. PROGRAMMA PIONEER — BENEFICI PER IL CLIENTE
> **Includere solo se PIANO_PIONEER = sì**

[NOME_CLIENTE] è qualificato come Cliente Pioneer Alvenco — tra i primi 200 clienti ad aderire al programma di loyalty referral esclusivo di Alvenco Ltd.

In virtù dell'adesione automatica al Programma Pioneer, il Cliente beneficia del seguente programma di loyalty referral applicabile al canone mensile del Piano [PIANO_MANUTENZIONE]:

**Meccanismo dello Sconto Referral**

Per ogni nuovo cliente presentato ad Alvenco Ltd che stipuli un contratto valido con piano di manutenzione attivo, il Cliente ottiene uno sconto cumulativo del 10% sul proprio canone mensile, fino a un massimo del 100% (manutenzione completamente gratuita).

| Clienti portati | Sconto cumulativo | Paghi al mese | Risparmio mensile |
|---|---|---|---|
| 1 | 10% | £81 (€95) | £9 (€11) |
| 2 | 20% | £72 (€84) | £18 (€21) |
| 3 | 30% | £63 (€74) | £27 (€32) |
| 5 | 50% | £45 (€53) | £45 (€53) |
| 10 | 100% | GRATIS | Risparmio £90/mese |

> ⚠️ La tabella sopra è riferita al Piano Starter. Aggiornare i valori per altri piani.

**Condizioni del Programma Pioneer**
- Lo sconto si applica esclusivamente al canone mensile di manutenzione — non sul corrispettivo di sviluppo
- Ogni cliente referral deve firmare un contratto Alvenco valido con piano di manutenzione attivo
- Lo sconto è valido per l'intera durata del presente Contratto ([DURATA_MESI] mesi) e non si rinnova automaticamente
- In caso di rinnovo contrattuale, le condizioni Pioneer vengono ridefinite al momento della firma
- Lo sconto massimo cumulativo è del 100%, corrispondente a 10 clienti referral
- In caso di mancato rinnovo del Contratto, il beneficio Pioneer decade automaticamente
- Non cumulabile con altri sconti sulla manutenzione, salvo accordi scritti specifici
- Alvenco Ltd si riserva il diritto di modificare o terminare il programma con preavviso scritto di 30 giorni

---

## 6. FIRME E ACCETTAZIONE

Le Parti dichiarano di aver letto, compreso e accettato integralmente tutte le condizioni del presente Contratto, con specifica approvazione delle clausole relative a: licenza d'uso e proprietà intellettuale (Art. 4), cancellazione dati a fine contratto (Art. 5), limitazione di responsabilità (Art. 7), recesso anticipato (Art. 9) e legge applicabile (Art. 10).

| Per Alvenco Ltd | Per [NOME_CLIENTE] |
|---|---|
| Alessandro Fiscella | [REFERENTE_CLIENTE] |
| Founder & CEO | [TITOLO_REFERENTE] |
| Firma: ___________________________ | Firma: ___________________________ |
| Data: ___________________________ | Data: ___________________________ |

Luogo e data di stipula: ________________________________________________

---

## 7. NOTE E AVVERTENZE
> *Testo in corpo più piccolo (8-9pt), colore grigio — sono note informative, non clausole vincolanti*

**Valuta:** I prezzi del piano di manutenzione sono espressi in Sterline britanniche (GBP £). Il controvalore in Euro (€) è indicativo, calcolato al tasso di cambio [CAMBIO_VALORE] ([CAMBIO_DATA]), e potrà variare in funzione del cambio vigente al momento di ciascuna fatturazione.

**Proprietà intellettuale e licenza d'uso:** Si richiama espressamente l'attenzione del Cliente sull'Art. 4 del presente Contratto. Il sito web e tutti i suoi componenti tecnici restano di proprietà esclusiva di Alvenco Ltd. Il Cliente usufruisce del sito in forza di una licenza d'uso che decade alla cessazione del rapporto contrattuale.

**Cancellazione dati:** Si richiama l'attenzione del Cliente sull'Art. 5. Alla cessazione del Contratto, Alvenco Ltd procederà alla cancellazione di tutti i dati e asset del Cliente ai sensi degli Artt. 17 e 5 par. 1 lett. e) GDPR, con conferma scritta entro 30 giorni.

**Documento riservato:** Il presente Contratto è strettamente riservato e confidenziale. È vietata la riproduzione, diffusione o comunicazione a terzi senza il consenso scritto di entrambe le Parti.

> **[SE PIANO_PIONEER = sì]**
> **Programma Pioneer:** Il Programma Pioneer è riservato ai primi 200 clienti Alvenco. L'adesione è automatica alla firma del contratto se i posti Pioneer sono ancora disponibili.

> **[SE CLIENTE_STORICO = sì]**
> **Cliente storico:** [NOME_CLIENTE] è qualificato d'ufficio al Programma Pioneer in virtù del rapporto continuativo con Alvenco dal [ANNO_INIZIO_RAPPORTO].

---

## REFUSI DA NON RIPETERE (rilevati su ALV-2026-SP01)

- Art. 1: "36 (mesi) mesi" → scrivere correttamente "36 (trentasei) mesi"
- Nota a piè riepilogo economico: verificare sempre che il calcolo riportato corrisponda agli importi effettivi del contratto
- "commercialista" → usare sempre "consulente fiscale" (termine neutro internazionale)

---

## Changelog

| Data | Modifica |
|---|---|
| Maggio 2026 | File creato. Template estratto e validato dal contratto Sapori Perduti ALV-2026-SP01. Recepite tutte le modifiche apportate manualmente da Alex. |
