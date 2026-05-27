---
name: current-date
description: >
  Fornisce sempre la data odierna aggiornata (giorno della settimana, giorno, mese, anno in italiano)
  eseguendo uno script Python deterministico. Usa questa skill ogni volta che hai bisogno di sapere
  che giorno è oggi, prima di qualsiasi attività con Alex, o quando viene menzionata la data corrente,
  scadenze, pianificazioni, o calendari. Deve essere la prima cosa eseguita all'avvio di ogni sessione
  ClaudesBrain. Non fare mai affidamento alla tua data di training — esegui sempre lo script.
---

# Current Date Skill

## Scopo

Fornire a Claude la data odierna precisa e aggiornata in ogni sessione, in italiano,
senza dipendere dalla data di training del modello (che potrebbe essere obsoleta).

## Quando usarla

- **Sempre all'avvio sessione** (come prima operazione del ClaudesBrain Protocol)
- Ogni volta che Alex menziona scadenze, appuntamenti, pianificazioni
- Ogni volta che si fa riferimento a "oggi", "domani", "questa settimana"
- Prima di generare documenti, contratti o preventivi con date

## Come usarla

Esegui lo script con bash_tool:

```bash
python3 "/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/ClaudesBrain/current-date/scripts/get_date.py"
```

Output atteso: `Oggi è martedì 19 maggio 2026.`

Includi questa informazione nel contesto prima di procedere con qualsiasi attività.

## Script

Percorso: `current-date/scripts/get_date.py`

Lo script usa solo la libreria standard Python (`datetime`), nessuna dipendenza esterna.
Calcola giorno della settimana e mese in italiano senza dipendere dal locale di sistema.
