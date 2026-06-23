# QUIPALERMO — Documento di Progetto Tecnico-Operativo
**Quantum Code Technologies Ltd (QC Tech)**
Versione 1.0 — Giugno 2026
Stato: Pianificazione → Pronto per build Fase 1

---

## 0. ISTRUZIONI PER CURSOR (leggere prima di ogni sessione)

1. Leggi questo file per intero prima di scrivere codice.
2. Leggi `ERRORI_TECNICI_RISOLTI.md` e identifica gli ERR-xxx pertinenti.
3. Lavora per unità atomiche con checkpoint: a fine di ogni unità completata → commit Git → push.
4. Mai dichiarare una feature completata senza verifica su Vercel preview.
5. Nessuna modifica allo schema DB senza migration file corrispondente.
6. Il database è CONDIVISO con Città Chiara (stesso Supabase). Ogni modifica allo schema va valutata per non rompere l'app Città Chiara esistente.
7. Aggiorna la sezione STATO CORRENTE di questo file a fine sessione.

---

## 1. COS'È QUIPALERMO

### 1.1 Definizione
QuiPalermo è un portale civico-urbano in tempo reale per la città di Palermo. Non è un giornale online: è un aggregatore intelligente che mostra "la città adesso" — segnalazioni civiche live, eventi, notizie locali aggregate, meteo, traffico, e una directory delle attività locali.

È la prima istanza di un brand-ombrello scalabile ("Qui[Città]") progettato per essere replicato su altre città italiane con costo marginale minimo.

### 1.2 Relazione con gli altri prodotti QC Tech
- **Città Chiara** (app mobile sicurezza/segnalazioni): prodotto distinto ma COLLEGATO. Condivide il database. Quando l'app sarà attiva, le sue segnalazioni alimentano automaticamente la mappa civica di QuiPalermo.
- **CivicAlert** (UK): equivalente UK di Città Chiara, non collegato a QuiPalermo (mercato diverso).
- QuiPalermo è il livello "pubblico e cittadino" che rende visibili e fruibili i dati civici a tutti, anche senza app installata.

### 1.3 Posizionamento competitivo
Competitor di riferimento: MondoPalermo (portale editoriale locale, forte sui social, tecnologicamente arretrato, inscalabile perché legato a una sola città).
Differenza chiave: MondoPalermo racconta ciò che è successo (editoriale, top-down). QuiPalermo mostra ciò che succede adesso (dati real-time, bottom-up). MondoPalermo non ha infrastruttura dati civica e non può replicarla facilmente.

---

## 2. IL DIFFERENZIATORE: LA MAPPA CIVICA VIVA

Una singola mappa interattiva della città dove convergono in tempo reale più livelli di dati. È il fulcro del prodotto e la prima cosa che l'utente vede.

### 2.1 Fonti dati della mappa (in ordine di attivazione temporale)

**Fase 1 — disponibili da subito (senza app Città Chiara):**
1. **Segnalazioni Filiis** (via partnership): import delle segnalazioni dell'associazione Filiis Palermo. Cuore iniziale della mappa.
2. **Form web di segnalazione QuiPalermo**: chiunque dal sito può segnalare un disservizio in <2 minuti (geolocalizzazione + foto + categoria), con moderazione.
3. **Traffico**: dati pubblici (Google Maps API o OpenStreetMap/Overpass).
4. **Meteo**: API meteo (OpenWeatherMap o equivalente) con allerte.
5. **Eventi in corso oggi**: dal livello eventi (vedi §3).

**Fase 2 — quando l'app Città Chiara sarà attiva:**
6. **Segnalazioni Città Chiara**: flusso automatico, verificato da AI, geolocalizzato. Diventa la fonte più ricca. Nessun lavoro di integrazione necessario perché il database è già condiviso.

### 2.2 Comportamento mappa
- Pin colorati per categoria (rifiuti, buche, sicurezza, eventi, traffico, ecc.)
- Filtri per categoria e per quartiere/circoscrizione
- Click su pin → scheda dettaglio (descrizione, foto, stato, data, fonte)
- Stato segnalazione: segnalata → presa in carico → risolta
- Ogni schermata deve essere screenshot-abile e condivisibile (vedi §7 distribuzione virale)

---

## 3. ARCHITETTURA A 4 LIVELLI DI CONTENUTO

### Livello 1 — Il vivo della città (real-time, automatico)
Mappa civica viva (§2) + widget meteo con notifiche + stato traffico. Zero redazione.

### Livello 2 — Eventi (ibrido auto + UGC)
- **Aggregazione automatica**: scraping/feed da fonti pubbliche (siti comunali, pagine eventi pubbliche, Eventbrite, teatri, locali).
- **UGC moderato**: form dove attività e organizzatori inseriscono i propri eventi. Coda di moderazione prima della pubblicazione.
- **Notifiche**: push/email su nuovi eventi per categoria e zona di interesse.
- **Curatori**: influencer di eventi locali possono curare sezioni (vedi `QUIPALERMO_MARKETING.md`).

### Livello 3 — Notizie locali (aggregazione automatica + AI)
- Feed RSS dei giornali locali palermitani esistenti.
- AI (Claude API) riassume, categorizza, deduplica, e linka SEMPRE alla fonte originale.
- Nessun plagio: QuiPalermo è un aggregatore intelligente (modello Google News locale), non un editore che copia.
- Zero redazione interna.
- IMPORTANTE LEGALE: mostrare solo titolo + riassunto breve (1-2 frasi) + link alla fonte. Mai ripubblicare l'articolo integrale.

### Livello 4 — Directory attività locali (UGC + monetizzazione)
- Le attività si registrano e creano la propria scheda.
- Scheda base: gratuita (genera contenuto + SEO).
- Scheda premium: a pagamento (vedi §5 monetizzazione).

---

## 4. STACK TECNICO

Coerente con lo stack QC Tech standard e con Città Chiara (per compatibilità DB).

| Componente | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animazioni | Framer Motion |
| i18n | Inizialmente solo IT (predisporre struttura per EN futuro) |
| Database | Supabase PostgreSQL + PostGIS (CONDIVISO con Città Chiara, project `ljbrmoozwrqrbuldmbez`) |
| Auth | Supabase Auth (per attività che gestiscono scheda + moderatori) |
| Mappa | MapLibre GL / Leaflet + OpenStreetMap (no costi licenza) o Google Maps se budget |
| Hosting | Vercel |
| AI (riassunti notizie) | Claude API |
| Notifiche | Email (Resend) + Web Push (futuro) |
| Storage media | Supabase Storage |

Note:
- Usare PostGIS per query geospaziali (segnalazioni/eventi entro raggio X da un punto).
- Il database condiviso richiede attenzione: le tabelle QuiPalermo vanno prefissate (es. `qp_`) per non collidere con quelle Città Chiara. Le segnalazioni Città Chiara sono in tabelle esistenti — QuiPalermo le LEGGE, non le modifica.

---

## 5. MONETIZZAZIONE (gerarchia confermata)

### Priorità 1 — Directory premium attività locali (cashflow ricorrente)
- Scheda base: gratuita.
- Scheda premium: posizione in alto nei risultati, foto multiple, link diretti (sito/social/WhatsApp), badge "consigliato", statistiche visite.
- Prezzo target: €15–29/mese o €150–290/anno.

### Priorità 2 — Lead generation per QC Tech (asset strategico)
- Ogni attività nella directory senza sito web è un lead caldo per QC Tech.
- Una attività con scheda premium ma senza sito → contatto commerciale per sito web.
- QuiPalermo diventa canale di acquisizione clienti a costo zero (colma il gap vs CutiaWeb).

### Priorità 3 — Eventi sponsorizzati / in evidenza
- Organizzatore paga per evento in cima o come notifica push agli utenti della zona.
- Prezzo target: €20–50 per evento.

### Priorità 4 (futuro) — Vetrine/banner sponsorizzati
- Solo dopo aver raggiunto traffico reale. Prima del traffico non vale nulla.

---

## 6. SCHEMA DATABASE (tabelle QuiPalermo, prefisso qp_)

NOTA: schema iniziale, da raffinare con migration Drizzle/SQL. Le segnalazioni Città Chiara restano nelle loro tabelle esistenti; QuiPalermo le legge in sola lettura.

### qp_segnalazioni (segnalazioni native QuiPalermo: form web + import Filiis)
- id (uuid, pk)
- fonte (enum: 'web_form', 'filiis', 'citta_chiara') — citta_chiara sarà una view/join sulle tabelle app
- categoria (enum: rifiuti, buche, sicurezza, illuminazione, verde, traffico, altro)
- descrizione (text)
- foto_url (text, nullable)
- lat (double), lng (double) — indice PostGIS
- quartiere / circoscrizione (text)
- stato (enum: segnalata, presa_in_carico, risolta)
- created_at, updated_at

### qp_eventi
- id (uuid, pk)
- titolo, descrizione (text)
- fonte (enum: 'auto', 'ugc')
- categoria (enum: musica, cultura, sport, food, mercatini, altro)
- luogo, lat, lng
- data_inizio, data_fine (timestamp)
- immagine_url
- link_fonte (text)
- sponsorizzato (bool, default false)
- stato_moderazione (enum: in_attesa, approvato, rifiutato)
- created_at

### qp_notizie
- id (uuid, pk)
- titolo (text)
- riassunto_ai (text) — generato da Claude API, breve
- fonte_nome (text), fonte_url (text)
- categoria (text)
- pubblicata_at (timestamp)
- created_at

### qp_attivita (directory)
- id (uuid, pk)
- nome, descrizione (text)
- categoria (enum: ristorazione, servizi, retail, professionisti, ecc.)
- indirizzo, lat, lng
- telefono, email, sito_web (nullable), social (jsonb)
- foto (jsonb array)
- piano (enum: base, premium)
- premium_scadenza (timestamp, nullable)
- ha_sito_web (bool) — FLAG per lead generation QC Tech
- owner_user_id (fk auth, nullable)
- created_at

### qp_curatori (influencer/blogger partner)
- id (uuid, pk)
- nome, bio (text)
- social_links (jsonb)
- sezione_curata (text, nullable)
- verificato (bool)
- created_at

---

## 7. STRATEGIA DI DISTRIBUZIONE (riepilogo — dettaglio in `QUIPALERMO_MARKETING.md`)

1. **Mappa virale**: ogni schermata condivisibile (screenshot + link). "Guarda Palermo adesso" come oggetto condivisibile nei gruppi WhatsApp di quartiere.
2. **SEO locale aggressiva**: pagine sempre fresche su keyword ad alto volume ("eventi Palermo weekend", "cosa fare a Palermo oggi", "traffico Palermo"). L'aggregazione automatica genera contenuto fresco continuo.
3. **Attività come distributori**: ogni attività in directory linka "siamo su QuiPalermo" sui propri canali.
4. **Partnership Filiis**: la loro community (150+ tesserati, migliaia di follower) come base utenti iniziale.
5. **Influencer/food blogger**: pagina autore verificata + ruolo curatore, in cambio di menzione. Amplificatore, non competitor.

---

## 8. PARTNERSHIP FILIIS PALERMO

### 8.1 Cosa porta Filiis
- Community reale: ~150 tesserati, migliaia di follower social, 1.200+ segnalazioni storiche.
- Credibilità civica e radicamento nei quartieri.
- Flusso continuo di segnalazioni reali.
- Filo diretto già attivo con l'amministrazione comunale (RAP, ufficio ambiente).

### 8.2 Cosa porta QuiPalermo a Filiis
- Piattaforma tecnologicamente superiore alla loro attuale (Lovable no-code).
- Mappa, geolocalizzazione, categorizzazione, dashboard.
- Visibilità su un portale cittadino completo, non solo segnalazioni.
- Quando arriva l'app Città Chiara: verifica AI e automazione del flusso.

### 8.3 Struttura partnership (formalizzata con expert-legal-contracts)
- Accordo di collaborazione civica gratuita / co-branding, NON cessione, NON agenzia.
- Filiis mantiene identità e autonomia; QuiPalermo è la piattaforma tecnologica.
- Co-visibilità: "Segnalazioni civiche in collaborazione con Filiis Palermo".
- Documento generato: `QCTech_Accordo_Filiis_Palermo.docx` (legge inglese + overlay Roma I; valutare variante a legge italiana per mettere a suo agio il partner no-profit).
- Referente: Domenico Camilleri (presidente e fondatore), IG @domenico_camilleri / @filiis_palermo.

---

## 9. FASI DI BUILD

### Fase 0 — Setup (sessione 1)
- Dominio quipalermo.it (disponibile e confermato libero, da acquistare).
- Repo GitHub: `quipalermo` (org QCTech-Ltd o personale alessandro2506 per Vercel).
- Progetto Next.js 16 + Tailwind 4 + connessione Supabase condiviso.
- Deploy Vercel iniziale (landing "coming soon" o scheletro).
- Migration: creare tabelle qp_* sul Supabase condiviso (attenzione a non toccare tabelle Città Chiara).

### Fase 1 — MVP Mappa + Segnalazioni (sessioni 2-4)
- Mappa civica viva con MapLibre + PostGIS.
- Form web segnalazione (geoloc + foto + categoria).
- Import segnalazioni Filiis (da definire formato: CSV, API, o scraping concordato).
- Widget meteo + traffico.
- Moderazione segnalazioni (dashboard interna minima).

### Fase 2 — Eventi (sessioni 5-6)
- Aggregazione automatica eventi da fonti pubbliche.
- Form UGC inserimento eventi + coda moderazione.
- Notifiche email su nuovi eventi per zona/categoria.

### Fase 3 — Notizie aggregate (sessione 7)
- Feed RSS giornali locali.
- Riassunto AI (Claude API) + categorizzazione.
- Pagina notizie con link a fonte.

### Fase 4 — Directory attività (sessioni 8-10)
- Registrazione attività + scheda base.
- Scheda premium + sistema pagamento (Stripe).
- Flag ha_sito_web per lead generation QC Tech.

### Fase 5 — SEO + distribuzione (sessione 11)
- Pagine SEO dinamiche (eventi per data, quartiere, categoria).
- Sitemap dinamica, schema.org LocalBusiness/Event.
- Ottimizzazione condivisione social (OG image dinamiche).

### Fase 6 — Scalabilità multi-città (futuro)
- Astrazione del modello città: `qui[citta].it` o sottodomini.
- Onboarding nuova città = configurazione, non sviluppo.

---

## 10. SCALABILITÀ MULTI-CITTÀ (architettura da prevedere fin da subito)

Anche se si parte solo da Palermo, il codice deve essere progettato per la replica:
- Tutte le query e i contenuti filtrati per un parametro `city` (default: palermo).
- Tabelle con colonna `city` (o `city_id`) fin dall'inizio.
- Branding configurabile (nome città, palette, fonti dati locali) via config, non hardcoded.
- Obiettivo: aprire QuiCatania, QuiBari, ecc. con sola configurazione + fonti dati locali, zero riscrittura.

---

## 11. CONSIDERAZIONI LEGALI (verificare con expert-legal-contracts)

- **Notizie aggregate**: solo titolo + riassunto breve + link fonte. Mai testo integrale (copyright).
- **Dati Filiis**: accordo scritto su uso e attribuzione (generato — vedi §8.3).
- **GDPR**: form segnalazione raccoglie foto e geolocalizzazione → privacy policy, base giuridica, gestione dati. Le foto possono contenere volti/targhe → moderazione e blur se necessario.
- **UGC eventi/recensioni**: termini d'uso che scaricano responsabilità contenuti su chi li carica.
- **Directory attività**: consenso al trattamento dati attività, condizioni scheda premium.
- **Foto segnalazioni**: attenzione a contenuti che ritraggono persone identificabili (privacy).

---

## 12. STATO CORRENTE

| Voce | Stato |
|---|---|
| Dominio quipalermo.it | Disponibile (confermato libero) — da acquistare |
| Database | Condiviso con Città Chiara (Supabase ljbrmoozwrqrbuldmbez) — confermato |
| Partnership Filiis | Accordo redatto (`QCTech_Accordo_Filiis_Palermo.docx`) — da inviare a Domenico Camilleri |
| Repo | Da creare |
| Fase attuale | Fase 0 — Setup, non ancora avviata |

---

## 13. CHANGELOG

| Data | Aggiornamento |
|---|---|
| Giugno 2026 v1.0 | Creazione documento. Strategia completa: portale civico-urbano scalabile, brand Qui[Città], differenziatore mappa civica viva, bridge Filiis per dati pre-app, monetizzazione 4 livelli, database condiviso con Città Chiara, fasi build, scalabilità multi-città. Pilota: Palermo. Dominio confermato libero. Accordo Filiis redatto. |
