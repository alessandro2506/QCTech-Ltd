# ALVENCO_AI_SOCIAL.md
> Chat: "AI come social media autonomi"
> Ultimo aggiornamento: Aprile 2026

---

## Obiettivo

Sistema AI autonomo che pubblica post e reel giornalieri su tutti i social per:
- **Alvenco Ltd** (Instagram, Facebook, TikTok, LinkedIn, X)
- **Sedita Autoservizi** (Instagram, Facebook, TikTok)

---

## Stack AI necessario (~€115/mese totale)

| Ruolo | Strumento | Costo |
|---|---|---|
| Testi / Copywriting | Claude API o ChatGPT API | ~€25 |
| Grafiche per post | Canva AI o Adobe Firefly | ~€20 |
| Video / Reel | Runway ML o Kling AI | ~€25 |
| Pubblicazione | Metricool o Buffer | ~€30 |
| Automazione flusso | Make o n8n | ~€15 |

---

## Flusso giornaliero automatico

```
Ogni giorno alle 08:00 → Make si attiva
Claude genera 2 post per ogni brand
Canva AI crea le grafiche
Runway crea 1 reel breve (3-4x/settimana)
Metricool pubblica agli orari ottimali
Report settimanale performance
```

---

## Piattaforme per brand

| Piattaforma | Alvenco | Sedita Autoservizi |
|---|---|---|
| Instagram | ✅ | ✅ |
| Facebook | ✅ | ✅ |
| TikTok | ✅ | ✅ |
| LinkedIn | ✅ | ❌ |
| X (Twitter) | ✅ | ❌ |

---

## Status implementazione

| Step | Stato |
|---|---|
| Definizione stack AI | ✅ Discusso |
| Prompt master per contenuti | ❌ DA CREARE |
| Flusso Make/n8n configurato | ❌ DA FARE |
| Account social collegati | ❌ DA FARE |
| Test pubblicazione automatica | ❌ DA FARE |
