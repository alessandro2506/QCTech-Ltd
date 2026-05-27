# expert-devops/SKILL.md
> Skill Alvenco — Vercel, GitHub, Git, DNS, EAS
> Aggiornamento: 27 Maggio 2026

## Descrizione
DevOps Alvenco: Vercel Hobby, doppio remote GitHub (account personale + org AlvencoLtd), DNS Aruba, EAS Build management. Da sessioni reali: handyman-stortford, tuzzolino, AlvencoLtd-site, cm-impianti, fantauzzo.

## Quando usarla
- Setup repo + Vercel per nuovo progetto
- Push doppio remote
- Problema deploy/build Vercel
- Rollback commit
- EAS Build planning

## Pattern Doppio Remote — STANDARD ALVENCO (REGOLA PERMANENTE)

origin  = github.com/alessandro2506/[repo]   (personale, Vercel Hobby compatibile)
alvenco = github.com/AlvencoLtd/[repo]       (org, archivio/mirror)

Sequenza obbligatoria in ogni prompt Cursor:

    git init && git add . && git commit -m "feat: initial [project]"
    git remote add origin https://github.com/alessandro2506/[repo].git
    git push -u origin main
    git remote add alvenco https://github.com/AlvencoLtd/[repo].git
    git push alvenco main

Push standard: git push origin main && git push alvenco main

REGOLE ASSOLUTE:
- MAI org AlvencoLtd come primaria (Vercel Hobby non funziona con repo org private)
- MAI GitHub Actions/PAT per il mirror — è manuale
- MAI collegare Vercel alla repo org — SOLO alla repo personale

## Push Sito Alvenco — Flusso Obbligatorio (CLAUDE.md regola 14)

    git add -A
    git commit -m "feat/fix/chore: descrizione"
    git pull --rebase origin main   ← OBBLIGATORIO prima del push
    git push origin main && git push alvenco main

## Vercel — Configurazione Standard

1. vercel.com/new → importa da `alessandro2506/[repo]` (NON org)
2. Framework: Next.js, Root directory: vuota
3. Env vars: inserire prima del primo deploy
4. Push su main = auto-deploy in 1-2 minuti

DNS Aruba (alvencoltd.co.uk):

    A      @    76.76.21.21
    CNAME  www  cname.vercel-dns.com
    TXT    @    google-site-verification=...

## Git Rollback Sicuro (PATTERN-001)

    git revert HEAD && git push origin main
    # MAI reset --hard su branch condivisi — riscrive storia

## ERR-020 — Immagini non committate (diagnosi prima del codice)

Sintomo: immagine visibile locale, 404 su Vercel.
Fix: git status → git add public/images/file.jpg → commit → push

## EAS Build Budget

- Free tier: 1-2 build Android/mese
- OTA updates: eas update --branch preview (illimitate — PREFERIRLE ai build)
- Regola: esaurire OTA prima di schedulare un build EAS

## ESLint Next.js 16 — eslint.config.mjs

    import nextPlugin from 'eslint-config-next/core-web-vitals.js'  // .js obbligatorio
    export default [nextPlugin]
    # Non usare FlatCompat — causa errore Vercel (ERR-018)

## Railway (CivicAlert backend)
URL: https://civicalert-production-38c6.up.railway.app/api
Deploy: automatico su push GitHub

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
