# TEMPLATE_NUOVO_PROGETTO.md
> Copia questo file e rinominalo: `[NOME_PROGETTO].md`
> Questo template è obbligatorio per ogni nuovo progetto client.

---

## 1. BRIEF

- **Tipo**: [Landing Page / Sito Vetrina / Corporate / E-Commerce / App Mobile]
- **Cliente**: [Nome]
- **Budget**: [£XXX]
- **Scadenza**: [Data]
- **Acconto 50%**: [Sì/No]

---

## 2. STACK

- **Framework**: Next.js 16 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animazioni**: Framer Motion 11
- **Font**: Inter via next/font/google
- **Hosting**: Vercel
- **Dominio**: [da definire / dominio.co.uk]

---

## 3. PAGINE

| Pagina | Descrizione | Stato |
|---|---|---|
| Home | | ❌ |

---

## 4. FEATURE SET

- [ ] Da popolare

---

## 5. FUNZIONALITÀ ✅

- [ ] Da popolare

---

## 6. VARIABILI AMBIENTE

| Variabile | Valore | Note |
|---|---|---|
| | | |

> Aggiungere su Vercel → Project Settings → Environment Variables prima del deploy.

---

## 7. GIT & DEPLOY

### Struttura remote (REGOLA FISSA — PATTERN-002)
- **`origin`** → `github.com/alessandro2506/[repo-name]` — account personale, repo primaria, collegata a Vercel
- **`alvenco`** → `github.com/AlvencoLtd/[repo-name]` — org, archivio sincronizzato
- **Vercel** → collegato SOLO a `origin` (account personale)
- **Push standard** → `git push origin main && git push alvenco main`

> **🟡 NOTA OPERATIVA (testata 26/05/2026 su fantauzzo-website)**:
> Cursor ha creato autonomamente la repo su `AlvencoLtd` org e Vercel ha collegato quella repo invece dell'account personale. Il deploy automatico ha comunque funzionato senza piano a pagamento. Da replicare come pattern alternativo su progetti futuri: lasciare che Cursor crei la repo direttamente su `AlvencoLtd` e colleghi Vercel — verificare sempre che il deploy automatico funzioni prima di spostare su account personale. Se funziona, non spostare.

### STEP 1 — Repo personale (Cursor)
```bash
# Prima crea repo su https://github.com/new
# Account: alessandro2506 | Nome: [repo-name] | Visibilità: public | senza README
git init
git add .
git commit -m "feat: initial [project-name]"
git remote add origin https://github.com/alessandro2506/[repo-name].git
git push -u origin main
```

### STEP 2 — Mirror org AlvencoLtd (Cursor)
```bash
# Prima crea repo su https://github.com/orgs/AlvencoLtd/repositories
# Nome: [repo-name] | Visibilità: public | senza README
git remote add alvenco https://github.com/AlvencoLtd/[repo-name].git
git push alvenco main
```

### STEP 3 — Vercel (Alex)
- Vai su https://vercel.com/new
- Importa `alessandro2506/[repo-name]` (account personale — NON l'org)
- Framework: Next.js — Root directory: vuota
- Configura le env variabili dalla sezione 6
- Project name: `[repo-name]`
- Avvia il deploy e verifica 200 su homepage

> **REGOLA DEPLOY OBBLIGATORIA PER CURSOR**: al termine di ogni fase di sviluppo, PRIMA di chiedere conferma per procedere, Cursor deve sempre eseguire:
> ```bash
> git add .
> git commit -m "feat: fase X - descrizione"
> git push origin main
> ```
> Aspettare che Vercel completi il deploy automatico, poi comunicare l'URL aggiornato e chiedere conferma. MAI chiedere conferma senza aver prima pushato e verificato il deploy.

### STEP 4 — Aggiorna questo file (Cursor)
- Sezione 7 GIT & DEPLOY: aggiorna URL Vercel confermato + URL repo origin e alvenco
- Changelog: voce con data odierna

---

## 8. STATO AVANZAMENTO

- [ ] Brief analizzato
- [ ] File .md creato
- [ ] CLAUDE.md aggiornato
- [ ] Prompt Cursor generato
- [ ] Repo personale `alessandro2506/[repo-name]` creata e pushata
- [ ] Repo org `AlvencoLtd/[repo-name]` creata e pushata
- [ ] Sviluppo avviato
- [ ] Deploy Vercel (collegato a repo personale)
- [ ] Revisione con cliente
- [ ] Contratto e preventivo

---

## 9. PROBLEMI 🔴

| Problema | Fix | Priorità |
|---|---|---|

---

## 10. CONSEGNA

- **Data**: [Data]
- **Saldo ricevuto**: [Sì/No]
- **Manutenzione**: [Sì/No — £XXX/mese]

---

## Changelog

| Data | Modifica |
|---|---|
| | File creato |
