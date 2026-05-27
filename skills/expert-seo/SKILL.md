# expert-seo/SKILL.md
> Skill Alvenco — Know-how SEO tecnico reale da progetti live
> Ultimo aggiornamento: 27 Maggio 2026

---

## Descrizione
Expertise SEO tecnica per siti Next.js App Router con i18n. Copre metadata, sitemap, schema.org, hreflang, Core Web Vitals, link building B2B. Basata su lavoro reale: alvencoltd.co.uk, sapori-perduti-web, almahotel-site, cm-impianti-web.

---

## Quando usarla
- Creazione di un nuovo sito (configurare SEO al primo commit, non dopo)
- Audit SEO su sito esistente
- Generare prompt Cursor con SEO inclusa
- Ottimizzare per ricerche locali UK o IT
- Configurare i18n con next-intl + hreflang

---

## Pattern Operativi

### File obbligatori in ogni progetto Next.js

```
app/
├── sitemap.ts              → dinamico, include hreflang alternates
├── robots.ts               → punta alla sitemap
├── opengraph-image.tsx     → OG image dinamica 1200x630
└── [locale]/layout.tsx     → generateMetadata con canonical + hreflang
components/
└── schema-org.tsx          → JSON-LD iniettato nel layout
```

### sitemap.ts — Pattern bilingue IT/EN (Alvenco)
```ts
import { MetadataRoute } from 'next'
const BASE = 'https://www.alvencoltd.co.uk'
const LOCALES = ['en', 'it']
const PAGES = ['', '/servizi', '/vision', '/contatti', '/faq']

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap(locale =>
    PAGES.map(page => ({
      url: `${BASE}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${BASE}/en${page}`,
          it: `${BASE}/it${page}`,
          'x-default': `${BASE}/en${page}`, // SEMPRE hardcoded su /en — mai dinamico
        }
      }
    }))
  )
}
```

### generateMetadata — Schema obbligatorio per pagina
```ts
// REGOLA: MAI 'use client' nello stesso file di generateMetadata
export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params  // Next.js 15/16: params è sempre Promise
  const canonical = `https://www.example.com/${locale}/pagina`
  return {
    title: '...',
    description: '...',
    alternates: {
      canonical,
      languages: { en: '.../en/pagina', it: '.../it/pagina', 'x-default': '.../en/pagina' }
    },
    openGraph: { url: canonical, locale, type: 'website' },
    twitter: { card: 'summary_large_image' }
  }
}
```

### Schema.org — Tipi usati in Alvenco

**LocalBusiness** (alvencoltd.co.uk):
```json
{ "@type": "LocalBusiness", "name": "Alvenco Ltd", "email": "hello@alvencoltd.co.uk",
  "telephone": "+447754812247", "address": { "@type": "PostalAddress",
  "addressLocality": "Bishop's Stortford", "addressCountry": "GB" } }
```

**Restaurant** (Sapori Perduti): `"@type": "Restaurant"` + `servesCuisine`, `hasMenu`, `openingHours`

**FAQPage** (homepage + pagina FAQ): array di `Question`+`Answer` — attiva rich snippet Google

**Article** (blog): `datePublished`, `author`, `image` — obbligatorio per ogni post

### Security Headers (next.config.ts — obbligatori)
```ts
{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
```

### Keyword Strategy — Pattern Alvenco

| Mercato | Keyword | Strumento |
|---|---|---|
| UK locale | "web agency Hertfordshire", "web developer Bishop's Stortford" | GBP + LocalBusiness schema |
| IT diaspora | "agenzia web UK italiani" | Contenuti IT con hreflang |
| AI Search | "how much does a website cost UK 2026" | Blog 1600+ parole ✅ pubblicato |
| Ristorante Palermo | "ristorante celiaci Palermo" | Restaurant schema + 5 lingue |

---

## Errori da Evitare

| Errore | Fix |
|---|---|
| `generateMetadata` + `'use client'` nello stesso file | Impossibile — separa sempre |
| `x-default` hreflang dinamico | Hardcoda SEMPRE su `/en` fisso |
| Query params URL indicizzati (`?topic=web`) | Canonical fisso o robots disallow |
| Nessun Article schema sugli articoli blog | Aggiungere `datePublished`, `author`, `image` |
| Google Business Profile assente | Priorità massima per ricerche locali UK |
| OG image statica | Usare `app/opengraph-image.tsx` dinamico |

---

## Canali Link Building verificati

1. **Bark.com** ✅ Registrato Maggio 2026 — lead diretti UK
2. **Clutch.co** 🟡 In corso — citato da ChatGPT/Gemini "best web agency UK"
3. **Google Business Profile** 🔴 Da completare — priorità massima
4. Yell.com, FreeIndex, Thomson Local — directory UK locali

---

## Changelog
| Data | Nota |
|---|---|
| 27-05-2026 | Skill creata da sessioni reali Alvenco |
