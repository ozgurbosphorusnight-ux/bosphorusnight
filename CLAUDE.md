# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication

Always respond in Turkish when working in this repository.

## Project Overview

A premium Bosphorus dinner cruise booking website targeting tourists in Istanbul. The site is a conversion-focused landing page designed to funnel visitors from ads to WhatsApp for reservation. This is NOT an e-commerce site — there is no online payment. The entire booking flow ends on WhatsApp.

## Core Design Principles

- **Mobile-first**: Most traffic comes from mobile ads. First-screen CTA must be visible, WhatsApp button always accessible.
- **Premium but minimal**: Dark navy/black base, gold accents, clean white text. No bright/cheap-feeling colors, no complex animations.
- **Few choices, fast action**: 3 packages only (Standard, Premium, VIP). Don't overwhelm with options.
- **Performance**: Pages must load fast — avoid heavy video/image payloads. Optimize all assets.

## Site Architecture

Single landing page with anchor sections (not multi-page), plus separate privacy/terms pages.

### Landing Page Sections (in order)
1. **Hero** — Background video or high-quality night Bosphorus image, headline, subtitle listing key features, two CTAs (WhatsApp + View Packages)
2. **Trust bar** — Icon row: same-day booking, secure reservation, real assistance, premium options
3. **Packages** — 3 cards (Standard / Premium with "Most Popular" badge / VIP), each with inclusions list, "from €..." pricing, WhatsApp CTA
4. **What's Included** — Bullet list of cruise features (dinner, entertainment, views, transfer option, multilingual support)
5. **Gallery** — Photo/video grid (boat exterior, table setup, night views, entertainment, atmosphere)
6. **How It Works** — 3 steps: choose date/package → WhatsApp chat → confirm & enjoy
7. **Last-Minute CTA** — Urgency block for same-day/tonight availability with dedicated WhatsApp button
8. **Why Choose Us** — Differentiators (fast support, curated options, clear communication, premium focus)
9. **Social Proof** — Customer satisfaction statements initially; real reviews/screenshots later
10. **FAQ** — Accordion with 8 core questions (inclusions, transfers, tonight booking, couples, children, confirmation process, cancellation)
11. **Bottom CTA** — Final conversion push with WhatsApp + "View Today's Options" buttons
12. **Footer** — Brand, WhatsApp, email, policy links, copyright

### Navigation
Home | Packages | Gallery | FAQ | Contact/WhatsApp

## Content Language

All user-facing content is in **English** (target audience: international tourists). Internal docs/planning may be in Turkish.

## Future Expansion (not for initial build)

- Separate pages per package for SEO (standard-cruise, premium-cruise, vip-cruise, last-minute-tonight)
- Real customer testimonials and WhatsApp screenshot reviews
- Original photo/video content replacing stock imagery
- AI chatbot using FAQ content as knowledge base
