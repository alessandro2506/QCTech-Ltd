# CIVICALERT_APP.md — Sviluppo App Mobile CivicAlert
> Chat: CivicAlert — App mobile React Native, backend Node.js, deploy Railway
> Ultimo aggiornamento: Aprile 2026

---

## 1. STACK TECNICO

| Campo | Valore |
|---|---|
| Framework | React Native Expo SDK 55 |
| React / RN | 19.2.0 / 0.83.4 |
| Bundle ID | `co.uk.alvenco.civicalert` |
| Expo Account | `alfasolution-tech` |
| EAS Project ID | `e30d05fa-2de1-447e-86f5-6db61657a7e4` |
| Apple Team ID | `VSGJQX73LJ` |
| Backend URL | `https://civicalert-production-38c6.up.railway.app` |
| API base URL | `https://civicalert-production-38c6.up.railway.app/api` |
| GitHub | https://github.com/alessandro2506/civicalert |
| Percorso locale | `/Users/alessandrofiscella/Desktop/Progetti/civicalert/` |

### Servizi
| Servizio | Uso |
|---|---|
| Supabase PostgreSQL + PostGIS | Database |
| Redis (Railway) | Cache |
| Supabase Storage | Foto/video (bucket: civicalert-photos) |
| Firebase Auth | Google, Apple, Email/Password |
| FCM | Push notifications |
| OpenAI GPT-4o-mini | Classificazione segnalazioni |
| Google Cloud Vision | Analisi immagini |
| Google Maps | react-native-maps@1.27.2 |
| NewsAPI | News geolocalizzate |

---

## 2. CREDENZIALI CHIAVE

### Google OAuth
- **Web Client ID**: `677572114345-ne88jv3nsvhq19fc62gf9pauvh5djnpv.apps.googleusercontent.com`
- **Android Client ID**: `677572114345-em65h4tostr2s3re77t15q6t3h8dfeqp.apps.googleusercontent.com`
- **iOS Client ID**: da `GoogleService-Info.plist` → campo `CLIENT_ID`

### Android Keystore
- **SHA-1**: `D9:5F:59:E8:F2:3F:96:E1:06:B3:50:BB:55:00:BB:E0:65:8A:DE:2A`
- **SHA-256**: `B7:1A:B4:41:E0:14:A7:3F:7D:BD:25:D9:41:8F:34:C9:D0:70:94:CD:33:49:C0:16:41:0F:91:2C:32:AB:FC:7A`

---

## 3. BUILD STATUS

### iOS — Build mensili ESAURITE ⚠️
| Campo | Valore |
|---|---|
| Build development ID | `5d8d97e2-1880-4878-840d-e5c6484db988` |
| Problema | Mappa nera — Maps key aggiunta dopo build |
| Google / Apple OAuth | ✅ Funzionanti |

### Android — ~1-2 build rimaste ⚠️
| Campo | Valore |
|---|---|
| Build preview ID | `1c84f542-5ebe-46da-a992-994acc90afd7` |
| Problema 1 | Google OAuth errore 400 — fix OTA applicato, da verificare |
| Problema 2 | Splash screen piccola — richiede rebuild |
| Device test | Honor X7 |

### EAS Update — Regola FONDAMENTALE
```bash
eas update --branch development --environment development --platform ios --message "..."
eas update --branch development --environment development --platform android --message "..."
eas update --branch preview --environment preview --platform android --message "..."
# MAI --platform all (fallisce per web)
```

---

## 4. FUNZIONALITÀ IMPLEMENTATE ✅

- Mappa: geoloc al mount, zoom 0.01, bottone recentra (#00D4A8, 48x48, elevation 5)
- Report: 3 step (cat→subcat→media+confirm), media obbligatorio
- SOS Modal: sfondo opaco Android (rgba 0,0,0,0.95)
- Contacts: search, A-Z, delete, SMS/WhatsApp All
- Email verification al signup + blocco login se non verificata
- Google OAuth senza redirectUri custom
- Biometria implementata JS (richiede rebuild nativo)
- Backend punta a Railway

---

## 5. PROBLEMI APERTI 🔴

| # | Problema | Fix | Tipo |
|---|---|---|---|
| 1 | Mappa nera iOS | Rebuild con nuova Maps key | Rebuild |
| 2 | Google OAuth Android 400 | OTA già applicato — da testare | OTA/Rebuild |
| 3 | Splash screen Android | android.splash già in app.config.ts | Rebuild |
| 4 | Biometria | Plugin già in app.config.ts | Rebuild |
| 5 | Camera Roll | expo-media-library già in app.config.ts | Rebuild |

---

## 6. CHECKLIST PROSSIMO REBUILD

- [ ] Maps key iOS (EAS env + app.config.ts ✅)
- [ ] Splash screen Android (app.config.ts ✅)
- [ ] expo-local-authentication (app.config.ts ✅)
- [ ] expo-secure-store (app.config.ts ✅)
- [ ] expo-media-library (app.config.ts ✅)
- [ ] Test Google OAuth Android dopo rebuild
- [ ] Test completo su device fisico

---

## 7. BACKLOG

### Via OTA
- [ ] News tab: filtri sezione e temporali
- [ ] Rafforzare AI controllo contenuti

### Progetti lunghi
- [ ] Dashboard operatori comunali (React.js — SaaS B2G £8k-£45k/anno)
- [ ] CivicBrain AI predittivo (Innovate UK)
- [ ] Email enti locali (SMTP SendGrid + indirizzi Comuni UK)
