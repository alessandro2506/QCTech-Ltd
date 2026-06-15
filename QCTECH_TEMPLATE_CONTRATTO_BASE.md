# QCTECH_TEMPLATE_CONTRATTO_BASE.md
> Rinominato da ALVENCO_TEMPLATE_CONTRATTO_BASE.md — 4 Giugno 2026
> Template master per la generazione di contratti Quantum Code Technologies Ltd
> Ultimo aggiornamento: Giugno 2026

---

## ISTRUZIONI PER L'USO

Questo file contiene tutte le clausole standard pronte per essere riutilizzate.
Le parti variabili sono indicate con `[PLACEHOLDER]`.
Prima di generare un nuovo contratto, compilare la sezione DATI VARIABILI qui sotto.

---

## DATI VARIABILI DA COMPILARE PER OGNI CONTRATTO

```
RIF_CONTRATTO:        es. QCT-2026-001
MESE_ANNO:            es. Giugno 2026
NOME_CLIENTE:         es. Studio Fantauzzo
REFERENTE_CLIENTE:    es. Rag. Fantauzzo Francesco
TITOLO_REFERENTE:     es. Titolare
CITTA_CLIENTE:        es. Palermo, Italia
SITO_CLIENTE:         es. studiofantauzzo.it
DESCRIZIONE_PROGETTO: es. Sviluppo Sito Web & Piano di Manutenzione Mensile
FUNZIONALITA:         [lista bullet specifica del progetto]
IMPORTO_SVILUPPO:     es. £1.800 (milleottocento sterline)
IMPORTO_RATA_1:       es. £900
IMPORTO_RATA_2:       es. £450
IMPORTO_RATA_3:       es. £450
PIANO_MANUTENZIONE:   es. Starter
CANONE_GBP:           es. £90/mese
CANONE_EUR:           es. €105/mese
DURATA_MESI:          es. 36
RINNOVO_MESI:         es. 36
CAMBIO_DATA:          es. Giugno 2026
CAMBIO_VALORE:        es. £1 = €1,17
VALORE_TOTALE_TRIENNIO: es. £4.880
NOTA_CALCOLO_TRIENNIO: es. £1.800 sviluppo + (£90 × 36 mesi) = £5.040
CLIENTE_STORICO:      sì/no
ANNO_INIZIO_RAPPORTO: es. 2025
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
Quantum Code Technologies Ltd
Registered in England & Wales
Flat 3, Jackson Wharf, Adderley Road, Bishop's Stortford, CM23 3AX
hello@qc-tech.co.uk  │  qc-tech.co.uk
+44 7754 812247 (WhatsApp)

**CLIENTE**
[NOME_CLIENTE]
[REFERENTE_CLIENTE]
[CITTA_CLIENTE]
[SITO_CLIENTE]

---

## 2. PREMESSE E OGGETTO DEL CONTRATTO

Il presente Contratto è stipulato tra Quantum Code Technologies Ltd (di seguito "QC Tech" o "Fornitore") e [NOME_CLIENTE], rappresentato da [REFERENTE_CLIENTE] (di seguito "Cliente").

Il Fornitore si impegna a progettare e sviluppare [DESCRIZIONE_PROGETTO] per il Cliente, comprensivo delle seguenti funzionalità:

[FUNZIONALITA — lista bullet specifica del progetto]

---

## 3. CONDIZIONI CONTRATTUALI

### Art. 1 — Durata del Contratto

Il presente Contratto ha durata di [DURATA_MESI] ([durata in lettere]) mesi a decorrere dalla data di go-live. Alla scadenza, il Contratto si rinnova tacitamente per periodi successivi di [RINNOVO_MESI] mesi, salvo disdetta scritta inviata a hello@qc-tech.co.uk con almeno 60 (sessanta) giorni di preavviso.

---

### Art. 2 — Corrispettivo per lo Sviluppo

Il corrispettivo per la progettazione e lo sviluppo del progetto è stabilito in [IMPORTO_SVILUPPO].

Il corrispettivo è esente da IVA in quanto Quantum Code Technologies Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold — HMRC).

Piano pagamenti:

| Rata | Milestone | Importo |
|---|---|---|
| 1ª — 50% | Firma del Contratto | [IMPORTO_RATA_1] |
| 2ª — 25% | Milestone intermedia | [IMPORTO_RATA_2] |
| 3ª — 25% | Go-live confermato | [IMPORTO_RATA_3] |
| **TOTALE** | | **[IMPORTO_SVILUPPO]** |

---

### Art. 3 — Piano di Manutenzione Mensile

| Piano | Canone mensile |
|---|---|
| [PIANO_MANUTENZIONE] | [CANONE_GBP] ([CANONE_EUR]) |

Il canone mensile è fatturato anticipatamente il 1° di ogni mese, pagabile entro 14 giorni.

---

### Art. 4 — Licenza d'Uso e Proprietà Intellettuale

Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Quantum Code Technologies Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Quantum Code Technologies Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo.

---

### Art. 5 — Cancellazione Dati a Fine Contratto

Alla cessazione del presente Contratto, Quantum Code Technologies Ltd procederà alla cancellazione definitiva di tutti i dati, contenuti e asset forniti dal Cliente ai sensi dell'Art. 17 e dell'Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR), entro 30 giorni dalla cessazione, con conferma scritta.

---

### Art. 6 — Riservatezza Tecnica

Il provider di hosting, il registrar del dominio, la configurazione server e l'infrastruttura tecnica adottata da Quantum Code Technologies Ltd sono informazioni operative riservate. Il dominio sarà registrato a nome del Cliente e trasferito al suo controllo al saldo completo di tutti i corrispettivi dovuti.

---

### Art. 7 — Penale per Rescissione Anticipata

Il Cliente può recedere con preavviso scritto di 60 giorni a hello@qc-tech.co.uk. In caso di rescissione nel periodo minimo, il Cliente sarà tenuto a corrispondere a Quantum Code Technologies Ltd, a titolo di liquidated damages, i canoni mensili residui per i mesi rimanenti del Periodo Minimo (Cavendish Square Holdings BV v El Makdessi [2015] UKSC 67).

---

### Art. 8 — Legge Applicabile e Foro Competente

Il presente Contratto è regolato dalla legge di Inghilterra e Galles. Il foro esclusivamente competente è quello di Hertfordshire (England and Wales).

---

## 4. RIEPILOGO ECONOMICO ANNO 1

| Voce | Importo |
|---|---|
| Sviluppo — [IMPORTO_RATA_1] + [IMPORTO_RATA_2] + [IMPORTO_RATA_3] | [IMPORTO_SVILUPPO] |
| Piano [PIANO_MANUTENZIONE] × 12 mesi | [CANONE_GBP] × 12 |
| **TOTALE ANNO 1** | **[VALORE_TOTALE_TRIENNIO]** |

*[NOTA_CALCOLO_TRIENNIO]*

---

## 5. PROGRAMMA PIONEER
> Includere solo se PIANO_PIONEER = sì

[NOME_CLIENTE] è qualificato come Cliente Pioneer di Quantum Code Technologies Ltd. Per ogni cliente presentato che stipuli un contratto valido con piano di manutenzione attivo, il Cliente riceve uno sconto cumulativo del 10% sul proprio canone mensile, fino al 100%.

---

## 6. FIRME E ACCETTAZIONE

Le Parti dichiarano di aver letto, compreso e accettato integralmente tutte le condizioni del presente Contratto.

| Per Quantum Code Technologies Ltd | Per [NOME_CLIENTE] |
|---|---|
| Vincenzo Sedita | [REFERENTE_CLIENTE] |
| Co-Founder & Commercial Director | [TITOLO_REFERENTE] |
| Firma: ___________________________ | Firma: ___________________________ |
| Data: ___________________________ | Data: ___________________________ |

---

## Changelog

| Data | Modifica |
|---|---|
| Maggio 2026 | File creato come ALVENCO_TEMPLATE_CONTRATTO_BASE.md |
| 4 Giugno 2026 | Rinominato QCTECH_TEMPLATE_CONTRATTO_BASE.md. Aggiornati tutti i riferimenti: Alvenco Ltd → Quantum Code Technologies Ltd, email → hello@qc-tech.co.uk, firmatario → Vincenzo Sedita, numerazione QCT- |
