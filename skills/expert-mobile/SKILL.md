# expert-mobile/SKILL.md
> Skill Alvenco — React Native Expo, EAS, NativeWind, tRPC mobile
> Ultimo aggiornamento: 27 Maggio 2026

---

## Descrizione
Mobile engineering per app Alvenco: Expo SDK 54, React Native 0.81, Expo Router 6, NativeWind, tRPC, Supabase Auth. Basata su: Città Chiara (civic-unified/apps/mobile), CivicAlert (EAS builds), monorepo civic-unified.

---

## Quando usarla
- Sviluppo feature mobile (schermata, navigazione, componente)
- Configurazione EAS Build / OTA update
- Debug Google OAuth / Apple Login
- Monorepo mobile (npm workspaces + Turborepo)
- Push notifications Expo

---

## Stack Standard App Mobile Alvenco

```
expo:               ~54.0.33
react-native:       0.81.5
expo-router:        ~6.0.23
nativewind:         ^4.2.1
@trpc/client:       11.7.2
@trpc/react-query:  11.7.2
@tanstack/react-query: ^5.x
@supabase/supabase-js: ^2.x
expo-auth-session:  ^7.x     (OAuth)
expo-notifications: ~0.32.x
expo-location:      ^19.x
expo-image-picker:  ^17.x
jose:               6.1.0    (JWT — usare dynamic import su CommonJS!)
```

---

## eas.json — Configurazione Obbligatoria

### Errore CRITICO — preview senza channel (ERR-013)
```json
// ❌ SBAGLIATO — gli OTA update non arrivano mai al device
{
  "preview": {
    "distribution": "internal",
    "android": { "buildType": "apk" }
  }
}

// ✅ CORRETTO
{
  "preview": {
    "channel": "preview",       // ← OBBLIGATORIO
    "distribution": "internal",
    "android": { "buildType": "apk" }
  }
}
```

### Profili separati IT/UK (civic-unified)
```json
{
  "build": {
    "preview-it": {
      "channel": "preview-it",
      "distribution": "internal",
      "env": { "EXPO_PUBLIC_COUNTRY_CODE": "IT" },
      "android": { "buildType": "apk" }
    },
    "preview-uk": {
      "channel": "preview-uk",
      "distribution": "internal",
      "env": { "EXPO_PUBLIC_COUNTRY_CODE": "UK" },
      "android": { "buildType": "apk" }
    }
  }
}
```

---

## OTA Updates — Flusso Standard
```bash
eas update --branch preview --message "fix: descrizione"
# Il build installato riceve l'update al prossimo avvio (se channel è corretto)
```
**MAI** sprecare un EAS build per un fix risolvibile con OTA. Il Free tier ha 1-2 build Android al mese.

---

## Google OAuth Android — Fix PKCE
```tsx
// expo-auth-session con PKCE (Città Chiara)
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession() // nel route di callback — OBBLIGATORIO

const [request, response, promptAsync] = Google.useAuthRequest({
  clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  redirectUri: makeRedirectUri({ scheme: 'cittachiara', path: 'oauth/callback' })
})
```
**Redirect URI registrate su Supabase e Google Cloud** per Città Chiara:
- `cittachiara://oauth/callback`
- `exp+cittachiara://oauth/callback`
- `it.alfasolution-tech.cittachiara://google-auth`

---

## Supabase Auth in Expo
```ts
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabase = createClient(url, key, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,  // OBBLIGATORIO su React Native
  }
})
```

---

## tRPC Client in Expo (monorepo)
```ts
// apps/mobile/lib/trpc.ts
import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../../packages/server/src/router'

export const trpc = createTRPCReact<AppRouter>()

export const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: `${process.env.EXPO_PUBLIC_API_URL}/api/trpc` })]
})
```
**Fix backend HTTP 500**: `jose` su Vercel Serverless CommonJS richiede dynamic import (vedi expert-backend).

---

## NativeWind — Setup Corretto (Expo SDK 54)
```js
// babel.config.js
module.exports = function(api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }]],
    plugins: ['nativewind/babel'],
  }
}
```
```ts
// metro.config.js
const { withNativeWind } = require('nativewind/metro')
module.exports = withNativeWind(config, { input: './global.css' })
```

---

## Monorepo — Struttura civic-unified

```
civic-unified/
├── apps/
│   ├── mobile/     → Expo app (package: @civic/mobile)
│   └── dashboard/  → Next.js web (package: @civic/dashboard)
├── packages/
│   ├── server/     → tRPC router + express
│   ├── db/         → Drizzle ORM + schema Supabase
│   └── shared/
│       └── i18n/   → it.ts, en.ts, index.ts
├── turbo.json
└── package.json    → workspaces: ["apps/*", "packages/*"]
```

**Regola critica monorepo**: NON aggiungere `"type": "module"` al `package.json` di `apps/mobile` — rompe Metro bundler.

---

## Bundle ID / Scheme — Città Chiara vs CivicAlert

| App | Bundle ID | Scheme | EAS account |
|---|---|---|---|
| Città Chiara (IT) | `it.alfasolution-tech.cittachiara` | `cittachiara` | alfasolution-tech |
| CivicAlert (UK) | `co.uk.alvenco.civicalert` | `civicalert` | alfasolution-tech |

---

## Push Notifications — Setup Expo
```ts
import * as Notifications from 'expo-notifications'
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: false,
  })
})
const token = (await Notifications.getExpoPushTokenAsync()).data
// Salvare token su Supabase/Firebase per invio server-side
```

---

## Errori da Evitare

| Errore | Fix |
|---|---|
| `preview` EAS senza `"channel": "preview"` | OTA update non arriva mai — aggiungere subito |
| `jose` import statico su CommonJS backend | Dynamic import: `const { jwtVerify } = await import('jose')` |
| `"type": "module"` in apps/mobile/package.json | Rimuovere — rompe Metro |
| Build EAS sprecato per fix OTA risolvibile | Usare `eas update --branch preview` |
| Google redirect non registrato | Registrare tutti i scheme su Supabase + Google Cloud Console |

---

## Risorse EAS
- Account: `alfasolution-tech`
- CivicAlert project ID: `e30d05fa-2de1-447e-86f5-6db61657a7e4`
- Supabase Città Chiara: `ljbrmoozwrqrbuldmbez`
- Backend: `https://citta-chiara.vercel.app/api/trpc`

---

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali |
