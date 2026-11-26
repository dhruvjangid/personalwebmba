# Dhruv Jangid: My Journey, Experiences & Beyond

An interactive, scroll-driven portfolio that tells a life-and-career story instead of listing a résumé.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · Lucide React.
No backend, no database, no required environment variables.

## Sections

| Section | What it is |
| --- | --- |
| Home | Hero with the four-line identity statement |
| My Journey | Vertical timeline across 5 chapters, with a progress line and expandable milestones |
| Ventures | Interactive cards (CosmicDesigner.in, Sanitizer Venture, Education & Social Impact) opening into full stories, plus the CosmicDesigner workflow |
| Experience | Tech Mahindra animated stats, award spotlight, internships |
| Education | IMT Ghaziabad feature, academic record, certifications |
| Achievements | Animated counters, filterable achievements, leadership roles |
| About | Introduction, philosophy and a four-lens interactive panel |
| Contact | Email, WhatsApp, LinkedIn, Resume, plus a floating contact toolbar |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Requires Node.js 18.18 or newer.

## Add the details that are still missing

Nothing was invented, so three things are for you to supply.

1. **Contact details.** Copy `.env.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
   NEXT_PUBLIC_WHATSAPP_NUMBER=919XXXXXXXXX   # country code + number, digits only
   NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-handle
   ```
   Until they are set, the WhatsApp and LinkedIn icons appear greyed out and disabled instead of linking to nothing.
   Email already points to `mailto:pgp26dhruvjangid@imt.ac.in`.

2. **Resume.** Replace `public/Dhruv-Jangid-Resume.pdf` (currently a one-line placeholder) with your real PDF, keeping the same file name.

3. **Story placeholders.** Anything in square brackets in `lib/data.ts`, such as `[Add: the biggest obstacle you faced ...]`, shows on the site as a dashed amber marker. Replace those with your own words (they appear in the venture stories under "My contribution" and "The challenge").

## Editing content

- All story text, dates, stats and achievements: `lib/data.ts`
- Name, email, links, nav: `lib/site.ts`
- Accent colour: `tailwind.config.ts` (`accent`) and `--accent` / `--accent-rgb` in `app/globals.css`
- Page order: `app/page.tsx`

## Deploy to Vercel

1. Create a GitHub repository and push the project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On https://vercel.com, choose **Add New → Project** and import the repository.
3. Vercel detects Next.js automatically. Leave the build settings as they are.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_LINKEDIN_URL`.
5. Click **Deploy**. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to your final domain and redeploy so sharing previews, the sitemap and canonical URL are correct.

## Quality notes

- Fully responsive (mobile menu, stacked layouts, bottom contact bar on phones).
- Respects `prefers-reduced-motion`; animations are subtle and run once.
- Keyboard accessible: skip link, focus styles, Escape closes dialogs, ARIA on tabs and expandable panels.
- SEO: metadata, Open Graph / Twitter tags, JSON-LD, `sitemap.xml`, `robots.txt`.
- Single route with in-page anchors, so there are no broken routes.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | TypeScript check |
