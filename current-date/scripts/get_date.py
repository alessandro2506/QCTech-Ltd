#!/usr/bin/env python3
"""
get_date.py — Stampa la data odierna in italiano con giorno della settimana.
Usato dalla skill current-date e dal ClaudesBrain Protocol all'avvio sessione.
"""

from datetime import datetime

GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"]
MESI = [
    "", "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"
]

oggi = datetime.today()
giorno_settimana = GIORNI[oggi.weekday()]
giorno = oggi.day
mese = MESI[oggi.month]
anno = oggi.year

print(f"Oggi è {giorno_settimana} {giorno} {mese} {anno}.")
