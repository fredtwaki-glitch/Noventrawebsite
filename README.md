# Noventra Technologies — Website

A premium marketing site for Noventra Technologies, built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## What's included

- Home page: hero, services, flagship Rent Management System showcase, portfolio,
  tech stack, "why choose us", demo booking, FAQ, request-a-quote form, contact
  section with a Google Maps placeholder, blog preview, newsletter signup
- `/blog` — blog listing placeholder
- `/privacy` and `/terms` — placeholder legal pages (have a lawyer review before launch)
- Custom `/404` page
- Sticky navbar, floating WhatsApp button, "back to top" button, cookie consent banner
- Light/dark mode (persisted, respects system preference)
- SEO metadata, `sitemap.xml`, `robots.txt`
- Fully responsive, scroll-triggered animations, glassmorphism + gradient design system

## Forms are UI-only for now

The Request a Quote, Book a Demo, and Newsletter forms are functional on the frontend
(validation, loading/success states) but don't send data anywhere yet. Each has a
`// TODO` comment marking where to wire up a backend. Easiest options:

- **Formspree** or **Resend** — drop-in email delivery, no backend code needed
- **A Next.js API route** (`src/app/api/.../route.ts`) — if you want full control,
  e.g. saving to a database

Search for `TODO: wire up` in:
- `src/components/QuoteForm.tsx`
- `src/components/DemoBooking.tsx`
- `src/components/Newsletter.tsx`

## Getting started locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Editing content

Almost all site copy (services, tech stack, FAQs, portfolio items, contact details)
lives in one place: `src/lib/data.ts`. Edit that file to update content across the
whole site without touching component code.

## Deploying

This project deploys cleanly to **Vercel** (recommended, made by the Next.js team):

1. Push this project to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Deploy — no configuration needed
4. Add your custom domain under Project → Settings → Domains

It will also work on Netlify or Cloudflare Pages with their Next.js build presets.

## Before going live

- [ ] Wire up the three forms to a real backend/email service
- [ ] Replace the Google Maps placeholder with a real embed once you have an office location
- [ ] Have the Privacy Policy and Terms pages reviewed by a lawyer
- [ ] Update `siteUrl` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` to your real domain
- [ ] Add real blog posts once ready (currently placeholders)
- [ ] Add a real `favicon.ico` / app icon if you want to replace the default
