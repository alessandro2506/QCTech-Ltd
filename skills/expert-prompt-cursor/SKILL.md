# expert-prompt-cursor/SKILL.md
> Skill Alvenco — Generazione prompt chirurgici per Cursor IDE
> Aggiornamento: 27 Maggio 2026

## Descrizione
Generazione di prompt per Cursor (Claude Sonnet) ottimizzati per zero ambiguità, zero errori noti, massima velocità di implementazione. Regola fondamentale Alvenco: Claude pianifica, Cursor implementa — mai mescolare i ruoli.

## Quando usarla
- Devo dare un'istruzione a Cursor per sviluppare feature/fix
- Devo generare il prompt iniziale per un nuovo progetto
- Devo evitare errori noti (ERRORI_TECNICI_RISOLTI.md)
- Devo far scrivere/aggiornare file .md a Cursor

## Struttura Obbligatoria di ogni Prompt Cursor

```
## CONTESTO
Leggi questi file PRIMA di qualsiasi operazione:
- /Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/ClaudesBrain/ERRORI_TECNICI_RISOLTI.md
- /Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/[PROGETTO]/[NOME].md

## OBIETTIVO
[Una sola frase — cosa deve produrre Cursor]

## SPECIFICHE TECNICHE
[Stack, versioni, file da toccare — solo il necessario]

## IMPLEMENTAZIONE
[Step numerati, uno alla volta, con file path esatti]

## ERRORI DA EVITARE
[Riferimento esplicito agli errori noti pertinenti da ERRORI_TECNICI_RISOLTI.md]

## DEPLOY
[Sequenza git: add → commit → pull --rebase → push origin main && push alvenco main]

## AGGIORNAMENTO .md
Dopo l'implementazione, aggiorna:
- [file .md del progetto]: sezione TODO + Changelog
- CLAUDE.md: changelog in testa se impatta più progetti
```

## Regole per Prompt Cursor

1. SINTETICO MA SPECIFICO — nessun preambolo, nessuna spiegazione ovvia
2. VERSIONI ESATTE — specificare sempre next, react, tailwind, framer-motion (ERR-002, ERR-021)
3. FILE PATH ASSOLUTI — sempre `/Users/alessandrofiscella/Desktop/Alvenco Ltd/...`
4. STEP NUMERATI — Cursor lavora meglio con sequenze chiare
5. ERRORI NOTI CITATI — la sezione "Errori da evitare" è obbligatoria
6. UN OBIETTIVO PER PROMPT — non mixare feature diverse in un unico prompt
7. VERIFICHE INCLUSE — `npx tsc --noEmit` e `npm run build` a fine implementazione
8. AGGIORNAMENTO .md — sempre incluso come ultimo step

## Versioni di Riferimento da Includere Sempre

```
next:           ^16.0.0
react:          19.x
typescript:     5.x
tailwindcss:    4.x
framer-motion:  12.x
next-intl:      4.x
lucide-react:   0.x   (MAI v1)
```

## Errori da Includere Sempre nella Sezione "Errori da evitare"

- ERR-002/021: Next.js versione — usare 16, mai 15
- ERR-004: icone brand non esistono in lucide-react — SVG inline
- ERR-017: generateMetadata + use client nello stesso file — vietato
- ERR-018: eslint.config.mjs — import con .js esplicito
- ERR-020: immagini in public/ — git add esplicito

## Pattern Prompt — Fix Visuale (es. CM Impianti 10 fix)

```
Implementa questi 10 fix nell'ordine indicato. Dopo ogni fix: npm run build — se errori, risolvili prima di procedere.

Fix 1 — [file] — [cosa fare] — [perché]
Fix 2 — [file] — [cosa fare]
...

Dopo tutti i fix:
1. npx tsc --noEmit
2. npm run build
3. git add -A && git commit -m "fix: 10 visual regressions CM Impianti" && git pull --rebase origin main && git push origin main && git push alvenco main
4. Aggiorna CM_IMPIANTI.md: sezione 12 TODO + Changelog
```

## Pattern Prompt — Nuovo Progetto da Zero

```
Leggi:
- /Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/ClaudesBrain/ERRORI_TECNICI_RISOLTI.md
- /Users/alessandrofiscella/Desktop/Alvenco Ltd/Progetti/[NOME]/[NOME].md

Crea un sito Next.js 16 con queste specifiche:
[specifiche dal file .md del progetto]

Stack obbligatorio:
next@^16.0.0, react@19.x, typescript@5.x strict, tailwindcss@4.x, framer-motion@12.x

Script package.json:
"lint": "eslint ." (NON next lint — rimosso da Next 16)
"dev": "next dev" (no --turbopack — è default in Next 16)

Struttura pagine: [da sitemap nel file .md]

Design system: [palette + font dal file .md]

Errori da evitare:
- ERR-004: icone social/brand → SVG inline, mai lucide-react
- ERR-017: generateMetadata mai in file use client
- ERR-021: Next 16, mai 15

Deploy:
git init && git add . && git commit -m "feat: initial [nome]"
git remote add origin https://github.com/alessandro2506/[repo].git
git push -u origin main
git remote add alvenco https://github.com/AlvencoLtd/[repo].git
git push alvenco main

Dopo il deploy, aggiorna [NOME].md: struttura progetto reale + Changelog
```

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
