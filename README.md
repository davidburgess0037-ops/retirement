# Ledger & Leaf — Best Retirement Plans (Next.js sample)

A sample retirement-planning marketing/education page, inspired by the structure of
NerdWallet's "Best Retirement Plans For You" guide, built from scratch with original
copy and design in Next.js 14 (App Router) + Tailwind CSS.

## What's inside

- `app/layout.tsx` — root layout, Google Fonts (Fraunces + Inter + JetBrains Mono)
- `app/page.tsx` — assembles the page from the components below
- `app/data.ts` — all copy: the 8 account types, the 4-step decision path, FAQs
- `components/Hero.tsx` — hero with a hand-drawn "compounding" growth-line signature
- `components/PlanGrid.tsx` — card grid comparing all 8 account types
- `components/DecisionPath.tsx` — numbered 4-question flow to find the right account
- `components/CompareTable.tsx` — full side-by-side comparison table
- `components/Faq.tsx` — frequently asked questions
- `components/GrowthLine.tsx` — the reusable SVG signature motif

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access on first build so
`next/font` can fetch Fraunces, Inter, and JetBrains Mono from Google Fonts.

## Images

Two photos are pulled from Unsplash (free license, hot-linked from
`images.unsplash.com`, no download needed). Swap the URLs in `Hero.tsx` and
`DecisionPath.tsx` for your own images at any time.

## Notes

This is a sample/demo, not a real financial product. Contribution limits are the
IRS's published 2026 figures at the time this was built — verify current numbers
before using them for real planning.
