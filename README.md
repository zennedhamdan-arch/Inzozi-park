# INZOZI PARK — Website

Official website concept for **INZOZI PARK**, an events and family destination in
Kicukiro – Gahanga, Kigali, Rwanda.

> **“Where Your Special Moments Come to Life”**

Wedding & event venue · Decoration · Catering · Bar & Grill · Coffee · Kids Park

---

## Quick start

```bash
npm install
npm run dev        # develop at http://localhost:3000
npm run build      # production build → static site in ./out
npm run images     # regenerate image placeholders + manifest
```

The production build is a **fully static export** (`next.config.ts` →
`output: "export"`): deploy the `out/` folder to any static host — Vercel,
Netlify, Cloudflare Pages, GitHub Pages, cPanel or Nginx.

## Tech stack

- **Next.js 15** (App Router, static export) + **React 19**
- **Tailwind CSS v4** with a bespoke design-token theme
- **TypeScript**, zero runtime dependencies beyond React/Next
- Self-hosted variable fonts (Fraunces + Instrument Sans) — no external requests
- No CMS, no backend, no tracking

## Where things live

| Path | Purpose |
| --- | --- |
| `src/content/site.ts` | **All business content** — phones, WhatsApp, address, links, services, enquiry options, FAQs |
| `scripts/image-slots.mjs` | **Every photography slot** — names, paths, gallery categories |
| `public/images/` | Drop real venue photos here (see `public/images/README.md`) |
| `src/components/` | Navbar, Footer, Hero, SectionHeading, CTASection, ServiceCard, GalleryGrid, EnquiryForm, ContactCard, WhatsAppButton… |
| `src/app/` | One folder per page: home, venue, services, weddings, gallery, about, contact, enquire, kids |
| `HANDOVER.md` | Client handover: verified facts, pending items, deploy guide |

## Imagery: three tiers, automatic priority

Every image slot resolves in this order (see `scripts/generate-placeholders.mjs`):

1. **Real photograph** at `public/images/<slot.file>` — e.g.
   `public/images/venue/hall.jpg`. Copy a photo in with the exact slot
   filename and rebuild; it replaces everything else instantly.
2. **Concept visual** at `public/images/concept/<slot.id>.jpg` — AI-generated
   scenes created for this first concept, inspired by the venue's public
   social posts (garden + rooftop-bar venue, red & cream wedding decor,
   bouncy-castle/bumper-car kids park, Rwandan thousand-hills setting).
   They display automatically and are labelled “Concept visual” on the site.
3. **Branded placeholder SVG** — for any slot not yet covered.

Only tier 1 is permanent. Replace concept visuals with the park's own
photography before launch; the label and badge disappear automatically.

## Content accuracy

All business facts on the site come from publicly verifiable sources, and
anything unconfirmed is marked **“To be confirmed”** on the page and flagged
in `src/content/site.ts`. The site deliberately contains **no invented
pricing, reviews, statistics, awards, opening hours or email addresses**.
See `HANDOVER.md` for the checklist of what the INZOZI PARK team still needs
to provide.
