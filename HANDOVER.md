# INZOZI PARK — Website Handover

**Prepared as a first website concept for the INZOZI PARK team.**
Everything on the site is either (a) verified public information or
(b) clearly marked as “to be confirmed”. Nothing was invented.

---

## 1. What was built

**9 pages**, mobile-first, in a premium hospitality style (deep green /
cream / warm neutral / subtle gold, editorial serif headings):

| Page | Purpose |
| --- | --- |
| `/` Home | Cinematic hero, introduction, the six services, weddings feature, events index, the “venue + food + family + entertainment” experience, gallery preview, location map, closing CTA |
| `/venue` Venue & Events | The spaces (event hall, garden, rooftop bar), what the venue hosts, practical visitor info |
| `/services` Services | Detailed sections for all six services with “use it for” lists and CTAs |
| `/weddings` Weddings | Premium wedding landing page: why INZOZI PARK, venue, decoration, catering, guest experience, gallery, enquiry CTA |
| `/gallery` Gallery | Category filtering (Weddings / Events / Food & Drinks / Kids & Family / Venue), masonry grid, lightbox with keyboard support |
| `/about` About | Honest editorial story — the meaning of “Inzozi”, the place, what you'll find, how the park hosts |
| `/contact` Contact | Both phone lines, WhatsApp, Instagram, directions, opening-hours placeholder, map, enquiry CTA |
| `/enquire` Event Enquiry | Full enquiry form (all fields from the brief) with validation, professional confirmation + WhatsApp hand-off, “what happens next” |
| `/kids` Kids & Family (optional page, built) | Play experiences, family days, kids' birthdays |

**Conversion flows**

- Primary: **“Plan Your Event” / “Start an Enquiry”** → `/enquire`
- Secondary: **“WhatsApp Us”** → `wa.me/250788336932` with a pre-filled message
  (floating button on every page + menu + contact page + form confirmation)
- The enquiry form **never claims a booking is confirmed** — it prepares the
  enquiry and hands it to the team via WhatsApp/call, or POSTs to an endpoint
  when one is provided (see `site.formEndpoint`).

**Engineering**

- Next.js 15 + TypeScript + Tailwind v4, **fully static export** (`out/`),
  ~112 kB first load, no backend required
- All business content centralised in **`src/content/site.ts`**
- Photography slot system: `scripts/image-slots.mjs` → branded placeholders
  swap to real photos automatically (see “Adding photography”)
- Reusable components: Navbar, Footer, Hero, SectionHeading, CTASection,
  ServiceCard, GalleryGrid, EnquiryForm, ContactCard, WhatsAppButton, FAQ,
  EventIndex, InfoNote, MapEmbed, Reveal
- Subtle motion (hero reveal, scroll fade/slide, hover zoom), fully disabled
  under `prefers-reduced-motion`; content stays visible without JavaScript
- **Verified in a real browser at 360 / 390 / 768 / 1024 / 1440 px:**
  0 console errors, no horizontal overflow, all nav links resolve, form
  validation + confirmation tested, WhatsApp/tel/Instagram/Maps links tested,
  and a full axe-core accessibility audit passes with **0 violations** on
  every page (WCAG 2.1 AA)

---

## 2. Verified information used (public sources)

- Business name: **INZOZI PARK**
- Location: **Kicukiro – Gahanga, Kigali, Rwanda — near Merez Station**
- Publicly described services: wedding/event venue, multipurpose hall,
  decoration, catering, bar & grill, coffee, kids park; hosting weddings,
  birthdays, meetings, family outings, school visits, photo shoots,
  church gatherings
- Phone numbers (from the venue's recent public posts):
  **+250 788 336 932** (presented as primary) and **+250 788 643 162**
- Instagram: **@inzozi_park** (bio: “Events Venue | Decoration | Bar and
  grill | Kids Park | Catering”)
- Visitor amenities from public listings: on-site parking, wheelchair-
  accessible entrance/facilities, card payments

**Not used (unknown):** founding year, founders, capacity numbers, prices,
packages, opening hours, email address, statistics, reviews, awards.

---

## 3. What INZOZI PARK still needs to provide

Every item below is a clearly marked placeholder or neutral statement today.
The single file to edit is **`src/content/site.ts`** (each item is commented).

| # | Item | Where it appears now |
| --- | --- | --- |
| 1 | **Which phone number is the primary booking line** (currently +250 788 336 932) | Contact page, footer, WhatsApp, click-to-call everywhere |
| 2 | **WhatsApp number** — confirm it is the same line (currently primary number) | All WhatsApp links |
| 3 | **Photography** — real photos of the venue, weddings, food, kids park (see priority list below). AI-generated “concept visuals” currently illustrate most slots and are clearly labelled; real photos replace them automatically | Every page |
| 4 | **Opening hours** | Contact page + footer show “to be confirmed” |
| 5 | **Email address** (if any) | Not shown anywhere today (none published) |
| 6 | **Packages / pricing text** — even one approved sentence, e.g. how pricing works | Site currently says: “Availability, packages and pricing are provided by the INZOZI PARK team based on your event requirements.” |
| 7 | **Hall capacity / garden capacity** (even rough guidance) | Not stated anywhere today |
| 8 | **Kids park details** — current attractions, supervision, entrance fee policy | Kids page keeps this generic; rates are not mentioned |
| 9 | **Exact Google Maps pin / plus code** for perfect directions | Buttons currently search “Inzozi Park Gahanga Kigali” |
| 10 | **Final domain name** (e.g. inzozipark.rw) + social links (TikTok?) | Metadata/sitemap use a placeholder domain; footer links Instagram only |
| 11 | **Preferred enquiry delivery** — WhatsApp only, or an email endpoint (Formspree/Resend/etc.) | Form hands off to WhatsApp today; set `site.formEndpoint` to switch |
| 12 | **Any corrections to service descriptions** | Services page, home page |

### Priority photography wishlist (real photos — these override the concept visuals)

1. `public/images/hero/home.jpg` — wide golden-hour shot of the venue
2. `public/images/weddings/ceremony.jpg` — a decorated wedding setup
3. `public/images/venue/hall.jpg` — the main hall dressed for an event
4. `public/images/venue/garden.jpg` — the garden & grounds
5. `public/images/venue/rooftop.jpg` — the rooftop bar with the hills behind
6. `public/images/services/kids.jpg` — children enjoying the kids park
7. `public/images/services/catering.jpg` — a beautifully presented spread

*(Full slot list with paths: `scripts/image-slots.mjs`. How-to:
`public/images/README.md`.)*

---

## 4. How to run / deploy

```bash
npm install
npm run dev      # local development → http://localhost:3000
npm run build    # production build → static files in ./out
```

**Deploying the static `out/` folder**

- **Vercel / Netlify / Cloudflare Pages:** import the repo — build command
  `npm run build`, publish directory `out`
- **cPanel / any web host:** upload the contents of `out/` to `public_html`
- **Nginx:** serve `out/` as a static root

After final content approval: update the domain in `src/app/layout.tsx`
(`metadataBase`), `src/app/sitemap.ts` and `src/app/robots.ts`, then rebuild.

---

## 5. Content safety rules baked into the site

- No invented prices, reviews, ratings, awards, statistics or capacity claims
- No fake testimonials
- No “best/leading venue” superlatives
- Placeholder photographs are explicitly labelled “photograph coming soon”
- Unknown facts render neutral copy or a “to be confirmed” note
