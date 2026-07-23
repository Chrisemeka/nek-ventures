# SMB Site Template

A production-ready Next.js marketing site template for Nigerian small and medium businesses. Every client-facing value lives in a single `site.config.ts` file, so a new client site can be spun up by editing config values — no component-level changes required.

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (CSS-first `@theme` configuration)
- Resend for transactional email
- Zod for request validation
- Deployed on Vercel

## Getting Started

```bash
git clone https://github.com/Chrisemeka/smb-site-template.git my-client-site
cd my-client-site
npm install
cp .env.local.example .env.local   # then fill in RESEND_API_KEY
```

Edit `site.config.ts` with the client's business details, then:

```bash
npm run dev      # start local dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Configuration

All client-specific content lives in [`site.config.ts`](./site.config.ts). The full schema is defined in [`types/site-config.ts`](./types/site-config.ts) — refer to it when adding new fields.

Highlights:

- `business` — name, tagline, description, logo, year founded
- `theme.colors` — brand palette (injected as CSS variables and exposed to Tailwind as `bg-primary`, `text-secondary`, etc.)
- `theme.fonts` — heading and body font names. Currently statically wired to Poppins and Inter in `app/layout.tsx` because `next/font/google` requires literal font names; swap the imports there to change fonts.
- `contact` — email, phone, WhatsApp number, address, hours
- `social` — set any channel to `null` to hide it in the footer
- `sections` — content and `enabled` flag for each section (hero, about, services, contact)
- `nav` — top nav items and CTA button
- `seo` — title, description, keywords, `ogImage`
- `features` — toggles for the WhatsApp floating button and back-to-top

## Environment Variables

Create `.env.local` from `.env.local.example`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Sends contact-form submissions via Resend. Get one at [resend.com/api-keys](https://resend.com/api-keys). |
| `NEXT_PUBLIC_SITE_URL` | Optional | Absolute origin used in `app/sitemap.ts` (e.g. `https://client.com`). Defaults to a placeholder. |

The API route sends from `onboarding@resend.dev` by default — swap to a verified sender in `app/api/contact/route.ts` before going live.

## Deployment

Vercel is the fastest path:

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add `RESEND_API_KEY` (and optionally `NEXT_PUBLIC_SITE_URL`) under Project Settings → Environment Variables.
4. Deploy. Subsequent pushes to `main` deploy automatically.

For custom domains, add the domain in Vercel and update DNS as instructed.

## Project structure

```
app/                 App Router pages, layouts, API routes, sitemap
components/sections/ Page sections (Hero, About, Services, Contact, etc.)
components/ui/       Reusable primitives (empty by default)
content/             JSON/MDX content (empty by default)
lib/                 Utilities (empty by default)
public/              Static assets, robots.txt
types/               TypeScript types, including SiteConfig
site.config.ts       Single source of truth for client-facing content
```

## Author

Built by Chukwuemeka Anyanwu — Fullstack Developer based in Lagos.
[GitHub](https://github.com/Chrisemeka)
