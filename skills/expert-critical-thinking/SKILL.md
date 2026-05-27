# expert-critical-thinking/SKILL.md
> Skill Alvenco — Anti-errore, pensiero critico prima di rispondere
> Aggiornamento: 27 Maggio 2026

## Descrizione
Protocollo mentale obbligatorio prima di ogni risposta tecnica o strategica. Identifica i 3 buchi principali, i punti deboli, cosa potrebbe andare storto. Da usare SEMPRE, specialmente prima di generare codice o contratti.

## Quando usarla
SEMPRE — è la prima skill da applicare, in combinazione con tutte le altre.

## Protocollo Anti-Errore — 5 domande obbligatorie

Prima di qualsiasi implementazione, rispondere mentalmente a:

1. **Ho letto ERRORI_TECNICI_RISOLTI.md?** — se no, leggerlo prima di procedere
2. **Questa soluzione ha già causato problemi in passato?** — cercare in ClaudesBrain
3. **Quali sono i 3 punti deboli di questa soluzione?** — nominarli esplicitamente
4. **Cosa potrebbe andare storto in produzione (Vercel/EAS)?** — build error, env vars, CORS
5. **C'è una soluzione più semplice che non inventano nuovi pattern?** — default alla semplicità

## Protocollo Nuovo Progetto — 5 domande minime ad Alex

Prima di qualsiasi soluzione su un nuovo progetto, porre almeno 5 domande chiave:

1. Qual è il business goal principale? (non il feature goal)
2. Chi è l'utente finale e il suo livello tecnico?
3. Ci sono vincoli di budget, timeline o tecnologia imposti dal cliente?
4. Il progetto scala o è un MVP one-shot?
5. Ci sono integrazioni esistenti (API, DB, auth) da rispettare?

## Auto-analisi Critica — Prima di Creare Qualsiasi Cosa

```
□ Identificare i 3 buchi principali della soluzione proposta
□ Identificare i punti deboli (scalabilità, manutenibilità, UX)
□ Identificare cosa potrebbe andare storto (deployment, versioni, GDPR)
□ Verificare che non esista un errore già documentato in ERRORI_TECNICI_RISOLTI.md
□ Verificare che le versioni dei pacchetti siano reali su npmjs.com
```

## Errori Ricorrenti da Controllare Sempre

| Check | Errore |
|---|---|
| Versione Next.js | MAI 15 nei nuovi progetti — ERR-021 |
| lucide-react icone brand | Non esistono — SVG inline obbligatorio — ERR-004 |
| generateMetadata + use client | Vietato nello stesso file — ERR-017 |
| FIREBASE_ADMIN_PRIVATE_KEY | Virgolette + replace su Vercel — ERR-005/007 |
| eas.json preview channel | "channel": "preview" obbligatorio — ERR-013 |
| Logo counter-forms | fill="none" non fill="#ffffff" — ERR-014 |
| delete R2 senza deleted_at check | Critico — ERR-024 |
| jose import statico CommonJS | Dynamic import — vedi expert-backend |

## Principio di Parsimonia Tecnica

"La soluzione giusta è la più semplice che risolve il problema reale — non la più elegante tecnicamente."

- Se un OTA update risolve il problema, non sprecare un EAS build
- Se un Server Action funziona, non creare un'API Route separata
- Se un componente CSS nativo basta, non aggiungere Framer Motion
- Se il deploy Vercel funziona, non configurare un CI/CD custom

## Regola "No Workaround"

Alex rifiuta soluzioni approssimative o hacky. Prima di proporre:
- CSS filter per invertire colori → NO (ERR-014)
- `any` TypeScript → NO (usare tipo corretto)
- `eslint-disable` → solo se spiegato
- `.gitignore` su file necessari in prod → NO

## Regola Separazione Claude/Cursor

Claude: pianifica, rivede, genera prompt, produce file .md
Cursor: implementa codice, scrive file sorgente, fa commit

MAI usare Claude per implementare direttamente (genera codice da incollare manualmente → errori)
MAI usare Cursor per decisioni architetturali senza supervisione Claude

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
