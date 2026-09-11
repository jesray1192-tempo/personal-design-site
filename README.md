# Jessica Ray — personal design site

Editorial portfolio for Jessica Ray, an experience designer working on AI-native products.

This repository is **only** the personal design / case-study site. It is not the InvestPilot investment tools platform and should not grow trading, portfolio, or market features.

The copy on every page is scaffolded and marked `[PLACEHOLDER]` so it can be replaced with real work without changing the layout.

## Stack

- [Next.js](https://nextjs.org/) App Router (v16) and React 19
- TypeScript
- Tailwind CSS v4
- Deploy target: [Vercel](https://vercel.com/)

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — positioning, selected work, approach |
| `/work` | Case study index |
| `/work/[slug]` | Case study detail — fixed 问题 / 过程 / 结果 |
| `/about` | Biography and focus |
| `/contact` | Contact form and direct email |

Case studies live in `src/data/cases.ts`. The leading case is **桔子星球漫游日记** (`/work/orange-planet-diary`). Every case uses a fixed narrative: **问题 / Problem**, **过程 / Process**, **结果 / Result** (`src/components/CaseNarrative.tsx`). Site name, email, and social links live in `src/data/site.ts`. Cover art is still a placeholder — drop the Figma case-hero export at `public/cases/orange-planet-diary/` when ready.

Visual style is intentionally unlocked: type is editorial, color stays neutral zinc-like ink and paper so a brand palette can land later. Work filters, a resume download, and contact-form mail wiring are deferred.

## Local development

Requires Node.js 20 or newer (20+ / 22 is fine).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run lint
npm run build
npm start
```

Copy `.env.example` to `.env.local` if you want a real site URL for metadata, sitemap, and Open Graph tags:

```bash
cp .env.example .env.local
```

```bash
# [PLACEHOLDER] Production URL after the first Vercel deploy (no trailing slash).
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Replace before launch

1. `src/data/site.ts` — name is already set; replace email, location, social URLs, and `NEXT_PUBLIC_SITE_URL`.
2. `src/data/cases.ts` — leading case is 桔子星球漫游日记. Keep `narrative.problem`, `narrative.process`, and `narrative.result`. Do not add extra section keys. Add further cases behind it as they are ready.
3. Search the repo for `[PLACEHOLDER]` and replace remaining page copy, portraits, and figure captions.
4. Contact form stays local-only for now. Wire `src/components/ContactForm.tsx` later if you want email delivery.
5. Add real images under `public/` and optional Figma / live URLs on each case (`links.figma`, `links.live`).
6. Later, not in this scaffold: work filters, resume download, a locked brand color system.

Do not add investment, trading, or brokerage product surfaces here.

## Deploy on Vercel

1. Push this repository to GitHub (already at [jesray1192-tempo/personal-design-site](https://github.com/jesray1192-tempo/personal-design-site)).
2. In [Vercel](https://vercel.com/), click **Add New… → Project** and import the repo.
3. Framework preset should be **Next.js**. Leave the build command as `next build` and the output as the default.
4. Add the environment variable `NEXT_PUBLIC_SITE_URL` with the production URL (the `*.vercel.app` domain, or your custom domain). No trailing slash.
5. Deploy. After the first deploy, set that same URL as the canonical domain in `NEXT_PUBLIC_SITE_URL` if you attach a custom domain.
6. Optional: in the Vercel project, add the custom domain under **Settings → Domains**.

Vercel will run `npm install` and `npm run build` on each push to the production branch.

## Project layout

```
src/
  app/            App Router pages, sitemap, robots, metadata
  components/     Header, footer, case cards, placeholders, contact form
  data/           Site identity and case studies
  lib/            Shared metadata helpers
public/           Static assets (favicon)
```

## Accessibility and SEO

- Skip link, landmarks, labeled form fields, visible focus, and `prefers-reduced-motion`
- Per-page titles and descriptions, Open Graph / Twitter tags, `sitemap.xml`, `robots.txt`, and Person JSON-LD
- Responsive editorial layout from small screens up
