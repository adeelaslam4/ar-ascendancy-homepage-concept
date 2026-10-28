# A.R. ASCENDANCY — Homepage Concept

Complimentary, non-binding homepage concept prepared by **PENAXIS (Private) Limited** for
**Alina Rogall / A.R. ASCENDANCY** (Berlin). Confidential — covered by the mutual NDA.

The commissioned website will be built in WordPress with a lightweight custom theme; this
repository is the visual prototype of the homepage only.

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — structure, copy, keywords, CTAs and emphasis taken 1:1 from the Miro board |
| `/typografie` | Logo variants, headline fonts (Caviar Dreams vs. Bodoni Moda), script fonts for "Her Ascendancy", colour codes — each with licence status and our recommendation |
| `/zugang` | Gate page shown to anyone without the invitation link |
| `/bilder` | Internal contact sheet of the photographs on the current site (used for selection only; remove before handover) |

## Access control

The preview is private. `middleware.ts` requires the `ACCESS_KEY` environment variable:

- open `https://<host>/?key=<ACCESS_KEY>` once → a 30-day, HttpOnly cookie is set and the key is removed from the URL
- every other visitor is shown `/zugang`
- `X-Robots-Tag: noindex, nofollow, noarchive`, `robots.txt` (`Disallow: /`) and `<meta name="robots">` block search-engine indexing
- no Vercel login is required for the viewer (works on the Hobby plan)

Rotate the key by changing `ACCESS_KEY` in Vercel and redeploying.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · fonts self-hosted via `next/font/local`
(no Google Fonts requests at runtime — GDPR-correct).

```bash
npm install
echo "ACCESS_KEY=your-key" > .env.local
npm run dev
```

## Brand system (binding, from the client)

| Usage | HEX |
|---|---|
| Background | `#EFE6DF` |
| Logo | `#D6C1A3` |
| Accents / rules | `#D2B799` |
| Text & headings | `#4A3434` |
| "Her Ascendancy" | `#7C4242` |

Fonts: Manrope 400/500 (body, nav, buttons) · Bodoni Moda (headlines — OFL, nearest legal match to the
"Doing Life" title lettering) · Caviar Dreams (tagline, labels — free for commercial use) · Great Vibes
(script accent — OFL; Blacksword Signature is commercial and not embedded). Allura and Pinyon Script are
included for the comparison page only.

## Design rationale (short)

- **Restraint over effect.** One cream ground, one soft second cream, one dark interlude for the final
  CTA. No gradients, no 3D, no parallax. Motion is limited to a soft fade-up on scroll and 300 ms hovers.
- **Editorial grid.** Portrait/text pairs on a 12-column grid with generous gutters; images sit at 4:5,
  text at a 38 rem measure. Left/right sequence follows the Miro board exactly.
- **Authority through type.** A high-contrast Didone at large sizes carries the positioning line; the
  SEO keyword phrase stays one H1, with the capitalised part set smaller and letter-spaced beneath.
- **Understated conversion.** Text links and outlined buttons throughout; one filled button style
  reserved for "Kostenfreies Erstgespräch buchen" and the final CTA.
- **Gender-neutral luxury.** Warm neutrals and deep brown rather than blush or rose; burgundy only on
  "Her Ascendancy" and hover states.

## Open items for the client

1. Calendly link (all booking CTAs currently point to `#calendly`)
2. Final photographs per the image brief (concept uses portraits from the current site as stand-ins)
3. Logo as vector (SVG) in the flat `#D6C1A3` web rendering, or confirmation of the preferred variant
4. Decision on headline font (Bodoni Moda recommended) and script font (Great Vibes recommended, or
   Blacksword licence purchased by A.R. ASCENDANCY)
5. Mailchimp account and audience (form is visual only in this concept)
6. Impressum / Datenschutzerklärung texts
7. Approved English copy before any EN version is published
