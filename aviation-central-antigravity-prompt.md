# Aviation Central — Website Build Prompt
### Paste this into Antigravity. Build in stages, stop after each stage for review.

---

## 0. RULES

- Work through the Stages in order. Do not skip ahead.
- After each Stage: confirm the Acceptance Criteria pass, then stop and wait for "continue to
  Stage N" before starting the next one.
- Keep the app runnable and deployable at the end of every Stage.
- The attached reference image is the **UI blueprint**. Match its section order, layout density,
  and visual rhythm closely. Swap all copy, icons, and imagery for aviation/airshow content —
  do not build a travel-booking site.
- Build **reusable components**, not page-specific implementations. If a card, section header, or
  layout pattern appears more than once (even across different pages), it belongs in
  `/components` as a shared component with props — not copy-pasted per page.
- Every page must use **semantic HTML** (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`,
  proper heading hierarchy) and meet **WCAG AA** accessibility as an ongoing requirement across
  every Stage, not a one-time pass at the end.

---

## 1. PROJECT

Build a new marketing website for **Aviation Central**, a South African airshow/aviation
community brand, replacing their current WordPress site at https://aviationcentral.co.za/.
Facebook page: https://web.facebook.com/AviationSA/

**Tech stack (fixed):**
- Next.js 14+, App Router, TypeScript strict
- Tailwind CSS
- shadcn/ui components (install via CLI, don't hand-roll what shadcn already provides)
- lucide-react icons
- react-hook-form + zod for forms
- next/image everywhere, next/font for type — every image sets explicit `width`/`height` (or
  `fill` with a sized parent), a correct `sizes` attribute for responsive loading, and `priority`
  only on the hero/above-the-fold image per page (never blanket `priority` on every image)
- `motion` (Framer Motion) for tasteful scroll-reveal and hover/tap micro-interactions — subtle
  fade/slide-in on section entry, gentle hover states on cards and buttons. Respect
  `prefers-reduced-motion`. Do not overuse: motion should support the content, not distract from it
- `next-themes` for dark mode support — wire up the provider and CSS variable pairs (light/dark) for
  every color token now, even though dark mode stays **off/hidden** in the UI for this build (no
  visible toggle yet). This is future-proofing so dark mode is a config flip later, not a rebuild
- Deploy target: Vercel
- Event data: static typed dataset first, swap for Supabase in Stage 6

**Code organization (fixed):**
```
/lib
  /data   — static datasets (events.ts, etc.) and future Supabase client/queries
  /types  — shared TypeScript types (AirshowEvent, etc.)
  /utils  — formatting, filtering, and other pure helper functions
  /hooks  — reusable hooks (e.g. useEventFilters)
/components — shared, reusable UI components used across pages
```

**Pages required:**
```
/                     Home
/attending-an-airshow Airshow attending guide
/calendar             Airshow calendar (flagship page)
/calendar/[slug]      Event detail page
/about                About
/contact              Contact
/community            (optional, Stage 7) Facebook posts
```

---

## 2. DESIGN SYSTEM

**Palette** — set as Tailwind theme tokens, not hardcoded hex:
- `navy` #0B2545 — headers, headlines, footer background
- `sky` #3E7CB1 — gradients, links, secondary accents
- `amber` #F2A900 — primary CTA buttons only
- `ink` #14171F — body text
- `cloud` #F6F8FB — light section backgrounds
- white, plus 2–3 gray steps for borders/cards

**Type:** bold condensed sans for headlines (Sora or Archivo), Inter for body. Load with next/font.

**Component style:** rounded-lg cards, soft shadows, 8px spacing scale, pill-shaped badges for
dates/status, amber reserved strictly for primary CTAs.

**Container/spacing system:** every page and section uses the same container so the whole site
shares one visual rhythm: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Build this as a shared
`<Container>` component and use it everywhere — no page should define its own one-off max-width or
padding values.

**Dark mode tokens:** define each palette color as a light/dark CSS variable pair (e.g. `--cloud`
resolves to a light background in light mode and a deep navy/ink background in dark mode) so the
theme is dark-mode-ready even while the toggle stays hidden for this build.

**Animation:** define a couple of shared motion presets (e.g. `fadeInUp`, `staggerChildren`) in
`/lib/utils` or a small `/lib/motion.ts` and reuse them across sections rather than one-off
animation props per component.

Build this as `tailwind.config.ts` theme extension + shared layout primitives
(`<SiteHeader>`, `<SiteFooter>`, `<MobileNav>`, `<Container>`) before any page content.

---

## 3. UI BLUEPRINT — build the Home page as this exact section sequence

Follow the reference image section-for-section. Each section below states what the reference shows
and what to replace it with for Aviation Central.

**1. Header**
Reference: logo left, horizontal nav center, CTA button right.
Build: Aviation Central logo left, nav (Home / Calendar / Attending Guide / About / Contact)
center, amber "Find an Airshow" button right, linking to `/calendar`. Sticky on scroll. Collapse
to a `Sheet` drawer on mobile.

**2. Hero**
Reference: full-bleed photo, bold two-line headline with one line in the accent color, short
subhead, single primary CTA button, background scenic imagery.
Build: full-bleed jet/biplane photography with navy gradient overlay, headline like
"Discover Southern Africa's Airshows" (second line in amber), one-line subhead, primary amber CTA
button → `/calendar`.

**3. Floating search/filter widget**
Reference: a white card overlapping the hero bottom edge, containing a tabbed multi-field search
bar (trip type tabs, from/to, dates, search button).
Build: a white card in the same position, containing an "Find an Airshow" filter bar: Province
dropdown, Date range picker, free-text search input, amber "Search" button. This is a real,
functional filter that should carry through to `/calendar` (pass query params).

**4. Trust/benefit icon row**
Reference: 4 short items in a row, each with a small circular icon and one line of text
(best price guarantee, 24/7 support, secure booking, flexible dates).
Build: 4 items, circular icon + label: "Free Event Guide", "Community Driven", "Verified Dates",
"Province-wide Coverage".

**5. Destination grid**
Reference: "Top Places Around the World" — a row of image cards with location name overlaid.
Build: "Top Airshows in Southern Africa" — image cards (aircraft/event photo) with airshow name
+ province overlaid, linking to `/calendar/[slug]`. Include a "See all" link to `/calendar`.

**6. Category/experience icon row**
Reference: "Find Your Perfect Tour" — row of small icons with labels (Beach Holidays, Adventure,
Cultural Tours, Family Friendly, Luxury Escapes).
Build: "Browse By Experience" — icon row: Airshows, Fly-Ins, Static Displays, Aerobatics,
Museum Events. Each links to a filtered `/calendar` view.

**7. Featured package cards**
Reference: "Best Travel Packages" — 3 cards with image, title, days/reviews meta, price, CTA.
Build: "Featured Airshows" — 3 cards pulled from the event dataset: image, event name, date +
province meta, short blurb, "View Details" button → `/calendar/[slug]`.

**8. Stats strip**
Reference: 4 stats in a row on a colored band (10+ years, 50k+ customers, 200+ tours, 24/7
support).
Build: 4 stats on a navy band: years running, airshows listed, provinces covered, community
members/followers.

**9. "Make it easy" split section**
Reference: "We Make Travel Easy & Memorable" — text + checklist on one side, photo collage on the
other.
Build: "Why Aviation Central" — text + checklist (Southern Africa's airshow calendar,
first-timer's guide, community-sourced photos) on one side, aircraft photo collage on the other.

**10. Testimonials**
Reference: "Trusted by Thousands" — 3 cards, avatar, name, star rating, short quote.
Build: same layout, 3 community/attendee testimonials.

**11. CTA banner**
Reference: "Ready to Take Off? Let's Make Your Dream Trip Happen Today!" — full-width banded
section, plane image, single CTA button.
Build: keep this almost as-is, it already fits perfectly — "Ready for Takeoff? Find your next
airshow today." + amber CTA button → `/calendar`.

**12. Article/inspiration row**
Reference: "Stay Inspired" — 3 small article cards with image + title.
Build: "From the Runway" — 3 cards (can point to `/attending-an-airshow` sections or be left as
placeholder content clearly marked `TODO`).

**13. Newsletter band**
Reference: dark band, "Get Exclusive Travel Deals Straight to Your Inbox", email input + button.
Build: "Get Airshow Alerts in Your Inbox", email input (zod-validated) + amber button, stub the
submit handler.

**14. Footer**
Reference: dark green multi-column footer — logo, link columns, socials, payment/legal icons,
copyright line.
Build: navy multi-column footer — logo, nav column, "Company" column (About/Contact), social
icons (Facebook), copyright line. No payment icons.

This same visual language (cards, icon rows, banded sections, stat strips) should carry through to
`/calendar`, `/attending-an-airshow`, `/about`, and `/contact` — don't let those pages default back
to plain shadcn styling once the Home page sets the tone.

---

## 4. PAGE DETAIL

### `/calendar` — flagship page, most build effort
- List/grid view (event cards grouped by month) as default, plus a month **calendar view** using
  shadcn's `Calendar` component with event-day markers
- Filters: province, month, text search — client-side, isolated in a reusable hook, pre-filled from
  the Home page's search widget query params
- Empty state for no matches
- `/calendar/[slug]`: full description, date/time, venue, map placeholder, ticket link if present,
  back link

### `/attending-an-airshow`
- Intro, then scannable sections (accordion or checklist grid): what to bring, parking & arrival,
  etiquette & safety, family tips
- Closing CTA → `/calendar`

### `/about`
- Brand story: Aviation Central is a hub for South African aviation enthusiasts — airshow listings,
  first-timer guidance, community presence

### `/contact`
- shadcn `Form`, zod-validated (name, email, subject, message), stub API route
- Contact details + socials alongside form

### `/community` (Stage 7, optional)
- Do not scrape Facebook. Use a manually curated array of featured posts (image, caption, link back
  to Facebook) as the default — note the official Meta Page Plugin embed as an upgrade path only.

---

## 5. EVENT DATA SHAPE

```ts
type AirshowEvent = {
  slug: string;
  name: string;
  startDate: string;
  endDate?: string;
  province: "Gauteng" | "Western Cape" | "KwaZulu-Natal" | "Eastern Cape" | "Free State" | "Other";
  location: string;
  summary: string;
  description: string;
  heroImage: string;
  ticketUrl?: string;
  featured?: boolean;
};
```
Seed with 6–8 placeholder Southern African airshows, clearly marked `// TODO: replace with real
event data from client`.

---

## 6. BUILD STAGES

### Stage 0 — Scaffold
`create-next-app` (TS, App Router, Tailwind, ESLint). Install shadcn/ui, lucide-react,
react-hook-form, zod, motion, next-themes. Set up next/font, the `/lib` structure
(`/lib/data`, `/lib/types`, `/lib/utils`, `/lib/hooks`) and `/components` folder, empty placeholder
routes for every page.
**Acceptance:** dev server runs clean, every route reachable, no console errors, `/lib` and
`/components` folders exist with the structure above.

### Stage 1 — Design system
Implement palette/type tokens as light/dark CSS variable pairs, wire the `next-themes` provider
(dark mode hidden/off for now). Build `<SiteHeader>`, `<SiteFooter>`, `<MobileNav>`, `<Container>`.
Define shared motion presets.
**Acceptance:** header/footer on every route, mobile nav works, palette matches Section 2, not
default shadcn slate, every section uses `<Container>` (no one-off max-width/padding), dark-mode
CSS variables resolve correctly if toggled manually in devtools even though no UI toggle is shown,
keyboard navigation and focus states work across header/nav.

### Stage 2 — Home page
Build all 14 sections from Section 3, using stubbed event data for now.
**Acceptance:** every section from Section 3 present, in order, responsive at 375 / 768 / 1280px,
search widget UI functional (even if not yet wired to real filtering), section components live in
`/components` as reusable pieces (not inlined page-specific JSX), all images use `next/image` with
explicit sizing and `priority` only on the hero image, scroll-reveal/hover motion present but
subtle.

### Stage 3 — Calendar (flagship)
Implement the seed dataset. Build `/calendar` (list + month view, filters) and
`/calendar/[slug]`. Wire Home's destination grid, featured cards, and search widget to this data.
**Acceptance:** filtering works with no reload, month view marks event days, every seed event has a
working detail page, empty state works, fully responsive.

### Stage 4 — Attending an Airshow guide
Build per Section 4.
**Acceptance:** scannable on mobile, closing CTA links to `/calendar`.

### Stage 5 — About & Contact
Build per Section 4, including validated form + stub API route.
**Acceptance:** form validates, shows success/error state, submits without crashing.

### Stage 6 — Supabase + polish
Mirror the `AirshowEvent` type as a Supabase table, swap the calendar's data source to Supabase
reads with revalidation, keep the static file as fallback/seed. Full SEO metadata pass (replace all
placeholder titles/descriptions), sitemap.xml, robots.txt, accessibility pass.
**Acceptance:** calendar reads from Supabase with no regression, every route has real metadata,
Lighthouse a11y/SEO green.

### Stage 7 — Optional community page + deploy
Build `/community` per Section 4 if confirmed. Connect to Vercel, verify production build.
**Acceptance:** production deploy live, all prior acceptance criteria still hold, Lighthouse
performance ≥ 90 on Home and Calendar.

---

## 7. ASSETS NEEDED FROM CLIENT

- Vector/high-res logo
- Licensed aircraft/airshow photography (not scraped from Facebook)
- Final copy sign-off for About / Attending-an-Airshow
- Real event list (dates, venues, ticket links) to replace seed data
- Contact-form destination (email or form-handling service)
- Decision on `/community` page and which approach to use

---

*Work Stage 0 → Stage 7, pausing for review after each Stage as instructed in Section 0.*
