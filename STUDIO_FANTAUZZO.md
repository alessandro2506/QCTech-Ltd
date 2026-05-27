# STUDIO_FANTAUZZO.md — Progetto Cliente
> Parent: `CLAUDE.md`
> Creato: 25 Maggio 2026 | Aggiornato: 26 Maggio 2026
> Stato: 🟢 FASE OPERATIVA — Contratto sito generato. Prossimo step: FANTAUZZO_WEBSITE.md per Cursor → sviluppo sito.

---

## 1. ANAGRAFICA CLIENTE

| Campo | Valore |
|---|---|
| **Nome studio** | Studio Consulenza - Rag. Fantauzzo (nome test/commerciale) |
| **Proprietario** | Rag. Fantauzzo Francesco |
| **Categoria** | Consulenza Commerciale e Finanziaria (lavoro + fiscale) |
| **Indirizzo** | Via Ercole Bernabei 19, 90145 Palermo (PA) |
| **Telefono** | 091 6823872 ✅ Confermato |
| **Email** | info@studiofantauzzo.it (placeholder) |
| **P.IVA** | Da acquisire prima della firma |
| **Sito attuale** | ❌ Nessuno — dominio da registrare |
| **Google Business** | ⚠️ Da verificare con il cliente |
| **Contratto sito** | ✅ Generato — ALV-2026-005 — Da firmare |
| **Contratto portale** | ⬜ Da generare dopo approvazione portale |
| **Acconto ricevuto** | No |

---

## 2. SCOPE PROGETTO — SEQUENZA OPERATIVA

### Fase 1 — Sito istituzionale ← ATTIVA ADESSO
- **Repo**: `fantauzzo-website` (GitHub org AlvencoLtd)
- **Percorso locale**: `/Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/fantauzzo-website/`
- **Deploy test**: `studiofantauzzo.vercel.app`
- **Deploy produzione**: `studiofantauzzo.it`
- **Documento Cursor**: `FANTAUZZO_WEBSITE.md` ← **DA CREARE ADESSO**
- **Contratto**: ALV-2026-005 ✅ Generato — da inviare a Fantauzzo

### Fase 2 — Contratto sito
- Inviare preventivo ALV-2026-004 v2 + contratto ALV-2026-005 a Fantauzzo
- Ricevere acconto £900 prima di iniziare sviluppo
- Acquisire P.IVA per compilare campo contratto

### Fase 3 — Sviluppo sito (dopo acconto)
- Cursor lavora su `FANTAUZZO_WEBSITE.md`
- Test su `studiofantauzzo.vercel.app`
- Presentazione a Fantauzzo per approvazione

### Fase 4 — Contratto portale + sviluppo piattaforma
- Solo dopo approvazione sito
- Contratto separato ALV-2026-006 (portale documentale)
- `FANTAUZZO_PORTAL.md` per Cursor

### Fase 5 — Go-live produzione
- Registrazione dominio `studiofantauzzo.it`
- Deploy sito su dominio definitivo
- Deploy portale su `portale.studiofantauzzo.it`

---

## 3. SITO ISTITUZIONALE — SPEC COMPLETE

### Sezioni
1. **Home** — hero, servizi in sintesi, CTA "Area Riservata", social proof
2. **Chi Siamo** — storia studio, profilo Rag. Fantauzzo, valori
3. **Servizi** — consulenza del lavoro + fiscale (vedi Sezione 8B)
4. **FAQ** — 10 domande con risposte (vedi Sezione 8C)
5. **Contatti** — form con notifica email, indirizzo, telefono, mappa

### Header
- Menu: Home / Chi Siamo / Servizi / FAQ / Contatti
- CTA button separato: **"Area Riservata"** → `portale.studiofantauzzo.it`

### Palette colori
| Ruolo | Hex |
|---|---|
| Background primario | `#FDF5F0` |
| Accent caldo | `#F5C49A` |
| Primario / CTA / bottoni | `#C8502D` |
| Dark / navbar / footer | `#5C1E10` |

### Stock photography
- Royalty-free mirata: consulenza del lavoro, fiscalità italiana, ufficio professionale
- Fonti: Unsplash, Pexels, Freepik
- Lingua: solo italiano
- Foto reali: non disponibili

### Stack sito
- Next.js 15 (App Router), Tailwind CSS 4, Framer Motion
- Form: Resend o Nodemailer (Aruba SMTP)
- SEO: next-sitemap, schema JSON-LD, Open Graph
- Analytics: GA4 + Google Search Console
- Deploy: Vercel

---

## 4. PIATTAFORMA DOCUMENTALE — SPEC

### Classificazione
**Web App custom mid-complexity** — multi-tenant, RLS, storage privato, log audit.

### Stack
Next.js 15 + Supabase Auth + PostgreSQL RLS + Cloudflare R2 + Vercel

### Ruoli
| Ruolo | Accesso |
|---|---|
| `studio_admin` | CRUD completo, tutti i clienti |
| `client_admin` | Tutti i doc propria azienda, anno corrente |
| `accountant` | Solo doc tag `ragioniere` |
| `external_pro` | Solo doc tag `esterno` |

### UI/UX spec (da screenshot approvato)
- Sidebar sinistra fissa + topbar
- Sfondo: `#FDF5F0` | Card: bianche, radius 16px
- Sidebar active: pill `#5C1E10` | CTA: `#C8502D` | Badge: `#F5C49A`

---

## 5. SCHEMA DB (Supabase)

```sql
clients (id, name, slug, created_at)
profiles (id → auth.users, client_id, role, full_name, email)
documents (id, client_id, year, filename, storage_path, visibility_tags[], uploaded_by, uploaded_at, file_size, mime_type)
download_logs (id, document_id, user_id, downloaded_at, ip_address)
```

Storage R2 path: `{client_slug}/{year}/{uuid}_{filename}`

---

## 6. PRICING

### Sito web (contratto ALV-2026-005)
| Voce | Importo |
|---|---|
| Sviluppo sito istituzionale (5 sezioni) | £1.800 |
| 50% acconto alla firma | £900 |
| 50% saldo al go-live | £900 |
| **Piano Manutenzione Basic** | **£160/mese** |

### Portale documentale (futuro ALV-2026-006)
| Voce | Importo |
|---|---|
| Sviluppo portale + onboarding + dominio | £5.025 |
| Infrastruttura e archiviazione sicura | £55/mese |
| Piano Manutenzione Web App Growth | £380/mese |
| **Totale mensile portale** | **£435/mese** |

> ⚠️ Prezzi portale = eccezione strategica di lancio. NON replicare su altri clienti.

### Partnership
- Fee 10/12/15% sul netto sviluppo (no manutenzione, mai citarla nel meccanismo fee)
- Documento: `Partnership_StudioFantauzzo_ALV-2026-004-P_v2.docx` ✅

---

## 7. DOCUMENTI GENERATI

| Documento | Rif. | Stato |
|---|---|---|
| Preventivo portale v2 | ALV-2026-004 | ✅ Generato |
| Proposta partnership v2 | ALV-2026-004-P | ✅ Generato |
| **Contratto sito web** | **ALV-2026-005** | **✅ Generato — da firmare** |
| Contratto portale | ALV-2026-006 | ⬜ Da generare |

---

## 8. POLICY VALUTA — REMINDER

- Importo vincolante: sempre in **£ GBP**
- EUR nei documenti: solo orientativo, mai vincolante
- Cliente paga: bonifico SEPA su IBAN Wise (€) → Alex converte in £ quando vuole
- Clausola nel contratto: presente all'Art. 2 ✅

---

## 8B. SERVIZI STUDIO — ELENCO COMPLETO

### Consulenza del Lavoro
- Elaborazione buste paga (cedolini mensili)
- Assunzioni e cessazioni rapporto di lavoro
- Gestione contratti di lavoro (dipendenti, apprendisti, part-time, co.co.co.)
- Comunicazioni obbligatorie (UNILAV, Centro per l'Impiego)
- Gestione CIG, CIGS e ammortizzatori sociali
- Pratiche INPS e INAIL
- Gestione TFR (Trattamento di Fine Rapporto)
- Contenzioso del lavoro e assistenza in sede ispettiva
- Consulenza su licenziamenti e sanzioni disciplinari
- Gestione trasferte, rimborsi spese, note spese
- Redazione e verifica CCNL applicabili
- Consulenza su orario di lavoro, ferie, permessi
- CUD / Certificazione Unica dipendenti e autonomi

### Consulenza Fiscale e Tributaria
- Dichiarazione dei redditi PF (730, Modello Redditi PF)
- Dichiarazione dei redditi PG (Modello Redditi SC/SP)
- Apertura e chiusura Partita IVA
- Regime forfettario: consulenza, apertura, gestione
- Liquidazioni IVA periodiche (mensili/trimestrali)
- Dichiarazione IVA annuale
- Modello 770 (sostituti d'imposta)
- ISA (Indici Sintetici di Affidabilità)
- Ravvedimento operoso e gestione irregolarità fiscali
- Contenzioso tributario: ricorsi CTP, CTR
- Assistenza a controlli e verifiche fiscali (AdE, GdF)
- Consulenza su agevolazioni fiscali (bonus, crediti d'imposta)
- Successioni e donazioni
- IMU, TASI, TARI e tributi locali
- Visure catastali e pratiche catastali

---

## 8C. FAQ SITO — 10 DOMANDE CON RISPOSTE

1. **Quanto costa aprire una Partita IVA?** — Apertura gratuita. I costi dipendono dal regime fiscale scelto. Lo studio valuta con te la soluzione più vantaggiosa prima di procedere.

2. **Qual è la differenza tra regime forfettario e regime ordinario?** — Il forfettario prevede un'imposta sostitutiva agevolata (15% o 5% per le nuove attività) su base imponibile forfettaria, indicato sotto una certa soglia di ricavi. Il regime ordinario si applica a chi supera i limiti o ha costi elevati da portare in detrazione.

3. **Entro quando devo presentare la dichiarazione dei redditi?** — Il 730 va presentato entro il 30 settembre; il Modello Redditi PF entro il 15 ottobre. Lo studio gestisce l'intero iter e ti avvisa per tempo.

4. **Come funziona il TFR e quando spetta al dipendente?** — Il TFR matura per ogni anno lavorato ed è corrisposto alla cessazione del rapporto, indipendentemente dalla causa. Lo studio gestisce calcolo e comunicazioni obbligatorie.

5. **Cosa succede se non pago le tasse in tempo?** — Scattano sanzioni e interessi di mora. Con il ravvedimento operoso è possibile regolarizzare spontaneamente. Prima si interviene, minore è il costo.

6. **Posso assumere un dipendente senza avere una società?** — Sì. Anche professionisti con P.IVA individuale e imprenditori individuali possono assumere. Lo studio gestisce contratti, comunicazioni e buste paga.

7. **Cos'è la Certificazione Unica (CU) e quando viene rilasciata?** — Certifica i redditi da lavoro percepiti nell'anno precedente. Rilasciata dal sostituto d'imposta entro il 16 marzo di ogni anno.

8. **Ho ricevuto un avviso dall'Agenzia delle Entrate: cosa devo fare?** — Non ignorarlo. Tempi e modalità di risposta variano. Contattaci immediatamente: in molti casi si risolve con costi contenuti se si interviene entro i termini.

9. **Quali documenti servono per elaborare le buste paga?** — Contratto di lavoro, dati anagrafici, codice fiscale, ore lavorate, straordinari, assenze, malattie e permessi. Lo studio fornisce una checklist all'avvio del servizio.

10. **Come funziona il regime forfettario per i nuovi professionisti?** — Chi inizia una nuova attività può accedere al regime con imposta al 5% per i primi 5 anni, poi al 15%. Requisiti e limitazioni vanno valutati caso per caso.

---

## 9. PIPELINE COMMERCIALE

| Step | Stato | Note |
|---|---|---|
| Intelligence online | ✅ | Via, tel. confermati |
| ClaudesBrain | ✅ | Questo file |
| Architettura tecnica | ✅ | Stack, DB, RLS, struttura app, UI spec |
| Piani manutenzione Web App | ✅ | Listino v2.2 |
| Policy valuta/cambio | ✅ | Contratti Rules v2.1 |
| Preventivo portale v2 | ✅ | ALV-2026-004 |
| Partnership v2 | ✅ | ALV-2026-004-P |
| **Contratto sito** | **✅** | **ALV-2026-005 — da firmare** |
| Acquisire P.IVA cliente | ⬜ | Compilare contratto prima della firma |
| Invio documenti a Fantauzzo | ⬜ | Preventivo + contratto sito + partnership |
| Ricezione acconto £900 | ⬜ | Prima di iniziare sviluppo |
| **FANTAUZZO_WEBSITE.md** | ⬜ | **DA CREARE ADESSO** |
| Setup repo fantauzzo-website | ⬜ | Dopo .md |
| Sviluppo sito (Cursor) | ⬜ | — |
| Deploy test Vercel sito | ⬜ | studiofantauzzo.vercel.app |
| Approvazione sito da Fantauzzo | ⬜ | — |
| Contratto portale ALV-2026-006 | ⬜ | Dopo approvazione sito |
| FANTAUZZO_PORTAL.md | ⬜ | Dopo approvazione sito |
| Sviluppo portale (Cursor) | ⬜ | — |
| Deploy test portale | ⬜ | fantauzzo-portal.vercel.app |
| Registrazione dominio | ⬜ | Dopo approvazione prodotto |
| Go-live produzione | ⬜ | studiofantauzzo.it + portale.studiofantauzzo.it |

---

## 10. CHANGELOG

| Data | Aggiornamento |
|---|---|
| 2026-05-25 | File creato. Intelligence, anagrafica, architettura completa definita. |
| 2026-05-25 | Stack, prezzi, UI spec, piani manutenzione, policy valuta aggiornati. |
| 2026-05-25 | Spec sito confermate: sezioni, CTA, stock photo, palette, servizi (8B), FAQ (8C). |
| 2026-05-26 | Contratto sito ALV-2026-005 generato e validato. Pipeline aggiornata: 7 step (+ contratto prima del portale). P.IVA da acquisire. Prossimo step: FANTAUZZO_WEBSITE.md. |
