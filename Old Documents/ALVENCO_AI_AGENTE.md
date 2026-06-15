# ALVENCO_AI_AGENTE.md
> Chat: "Agente AI per acquisizione clienti Alvenco"
> Ultimo aggiornamento: Aprile 2026

---

## Obiettivo

Creare un **AI Sales Agent** che:
- Risponda ai messaggi di potenziali clienti (WhatsApp, email)
- Chiami attivamente nuovi potenziali clienti per acquisirli
- Proponga servizi Alvenco in base ai bisogni del cliente
- Gestisca la prima fase della trattativa in modo autonomo

---

## Stack consigliato (budget minimo, no-code)

| Componente | Strumento | Note |
|---|---|---|
| AI conversazionale | Claude API o GPT-4 | Cervello dell'agente |
| Chatbot WhatsApp | Typebot (open source, gratuito) | Interfaccia conversazione |
| Automazione flusso | n8n (self-hosted gratuito) o Make | Connette tutto |
| Email personalizzate | Claude API + Gmail/SMTP | Outreach email |
| Agente vocale (futuro) | ElevenLabs + Bland.ai o Vapi | Telefonate autonome |

---

## Agente: "Alex" — Profilo e comportamento

**Nome**: Alex
**Tono**: professionale ma conversazionale, mai robotico
**Lingua**: italiano e inglese

### Regole comportamentali
- Mai iniziare con "Come posso aiutarti?"
- Mai usare "certamente" o "assolutamente"
- Fare UNA domanda alla volta, aspettare risposta
- NON proporre prezzi al primo messaggio
- Su WhatsApp: rispondere dopo 30-90 secondi (non istantaneo)

### Flusso conversazione
1. Apertura curiosa — non vendita, interesse genuino
2. Ascolto problema — capire il bisogno reale
3. Qualificazione — settore, dimensioni, sito esistente, budget
4. Proposta mirata — solo dopo aver capito il contesto
5. Invito a chiamata o meeting con persona reale

---

## Email outreach — Struttura che converte

- **Oggetto**: curioso ma non clickbait
- **Apertura**: riferimento specifico al loro business (non template)
- **Corpo**: un solo problema sollevato, una sola domanda finale
- **Nessuna lista di servizi**, nessun prezzo
- **Firma**: nome persona reale (Vincenzo o Alessandro)

---

## Status implementazione

| Step | Stato |
|---|---|
| Definizione concept e stack | ✅ Discusso |
| System prompt "Alex" completo | ❌ DA CREARE |
| Setup Typebot + n8n | ❌ DA FARE |
| Collegamento WhatsApp Business | ❌ DA FARE |
| Template email outreach | ❌ DA CREARE |
| Agente vocale (Bland.ai/Vapi) | ❌ FASE FUTURA |
