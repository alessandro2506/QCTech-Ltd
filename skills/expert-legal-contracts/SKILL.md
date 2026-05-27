# expert-legal-contracts/SKILL.md
> Skill Alvenco — Contratti, preventivi, clausole IP, GDPR, pricing
> Aggiornamento: 27 Maggio 2026

## Descrizione
Legal e contrattualistica Alvenco Ltd (UK private limited company). Copre struttura contratti, clausole IP, GDPR, pricing GBP, struttura pagamenti, promo. Basata su: Sapori Perduti (firmato), Autoservizi Sedita, CM Impianti, QuickFix Handyman, Studio Fantauzzo, Template v3.1.

## Quando usarla
- Generare un contratto o preventivo
- Verificare clausole IP prima dell'invio
- Strutturare pagamenti per valore progetto
- Applicare promo (Pioneer, Primavera, Special 10)
- Rispondere a obiezioni cliente su pricing o IP

## Struttura Contratto Obbligatoria (9 sezioni)

| N° | Sezione |
|---|---|
| 1 | Parti — tabella affiancata 50%/50% Fornitore/Cliente |
| 2 | Premesse e Oggetto — bullet funzionalità |
| 3 | Condizioni Contrattuali — articoli numerati |
| 4 | Riepilogo Economico Anno 1 — tabella sintetica |
| 5 | Proprietà Intellettuale e Licenza d'Uso |
| 6 | Riservatezza Tecnica — hosting e dominio non citati |
| 7 | Penale per Rescissione Anticipata |
| 8 | Legge Applicabile — Inghilterra e Galles |
| 9 | Firme e Accettazione — tabella affiancata |

Banner sezioni: navy pieno + testo bianco. MAI testo scuro su sfondo navy.

## Clausola IP — Obbligatoria in ogni contratto

"Tutto il codice sorgente, l'architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Alvenco Ltd nell'ambito del presente Contratto restano di proprietà esclusiva e permanente di Alvenco Ltd. Al Cliente è concessa una licenza d'uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo."

## Clausola GDPR Art. 17 — Obbligatoria

"Alla cessazione del Contratto, Alvenco Ltd procederà alla cancellazione definitiva di tutti i dati forniti dal Cliente ai sensi dell'Art. 17 GDPR. Conferma scritta entro 30 giorni dalla cessazione."

## Valuta — Regola Non Negoziabile

- Importo vincolante: SEMPRE GBP (£)
- EUR nei preventivi: solo nota orientativa al cambio del giorno
- Per clienti IT/EU: pagamento tramite bonifico SEPA su IBAN Wise Business
- Nota obbligatoria: "Il corrispettivo vincolante è espresso in GBP (£); l'equivalente EUR è orientativo."
- Cambio riferimento: £1 = €1.17 (Maggio 2026)

## Struttura Pagamenti per Valore Progetto

| Valore | Struttura |
|---|---|
| < £700 | 50% firma + 50% go-live (unico caso 2 rate) |
| £700–£5.000 | 50% firma + 25% milestone + 25% go-live |
| £5.000–£15.000 | 50% firma + 25% mid + 25% go-live |
| > £15.000 | 40% firma + 30% mid + 20% UAT + 10% go-live |

Milestone intermedia: design approvato (siti) / architettura+auth (web app) / prototipo approvato (mobile)

## Revisioni Incluse per Tier

| Valore | Revisioni |
|---|---|
| Fino a £3.500 | 2 round |
| £3.500–£10.000 | 3 round |
| > £10.000 | 4 round + UAT |
| Extra | £85/h junior, £130/h senior |

## Piani Manutenzione (Listino v2.1)

| Piano | £/mese | Include |
|---|---|---|
| Starter | £90 | Backup, uptime, CMS, email 48h |
| Basic ⭐ | £160 | Starter + 1h/mese + report |
| Growth | £280 | Basic + 3h/mese + SEO report |
| Agency | £500 | Growth + 6h/mese + SLA 4h |

## Promo Pioneer — Regola Attivazione

- Manutenzione già a listino pieno dal go-live → Pioneer attiva subito
- Promo Special 10 applicata (scalatura anno 1) → Pioneer parte dal mese 13

## Hosting — Riservatezza (non citare mai nel contratto)

- Citare: "Hosting e registrazione dominio inclusi"
- NON citare: Vercel, Railway, Supabase, Cloudflare, Namecheap
- Il dominio è sempre trasferito al cliente al saldo completo

## Checklist Pre-Invio Contratto

- [ ] Clausola IP presente
- [ ] Nessun riferimento a provider hosting/stack
- [ ] Struttura pagamenti corretta per valore progetto
- [ ] Numero revisioni specificato
- [ ] Campi [___] tutti compilati
- [ ] Box gialle interne rimosse
- [ ] Clausola GBP + nota EUR se cliente IT/EU
- [ ] VAT treatment corretto
- [ ] Numero contratto: ALV-[ANNO]-[N]
- [ ] Template IT o EN? (chiedere sempre ad Alex)

## Numerazione Contratti

ALV-[ANNO]-[NUMERO] — es: ALV-2026-005

## Contratti Esistenti — Stato

| Contratto | Versione | Stato |
|---|---|---|
| Sapori Perduti | v1 | Firmato ✅ IT, 36 mesi |
| CM-Impianti | v2 | Da inviare 🟡 |
| Autoservizi Sedita | v1 | In corso 🟡 |
| QuickFix Handyman | v1 | Da firmare 🟡 |
| Studio Fantauzzo | — | Da generare ⬜ |

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
