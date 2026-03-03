# Tracking Plan

## Overview

This document outlines the analytics and event tracking strategy for the proposal site. Implementation is deferred until the site is approved for launch. Placeholders are defined here for reference.

---

## Analytics Platform Options

### Option A — Google Analytics 4 (GA4)
- Add `@next/third-parties` for GA4 integration
- Measurement ID: `G-XXXXXXXXXX` (to be provided)
- Implementation: Add `<GoogleAnalytics gaId="G-XXXXXXXXXX" />` to `src/app/layout.tsx`
- Docs: https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries

### Option B — Vercel Analytics (Recommended for simplicity)
- Zero-config for Vercel-hosted projects
- Install: `pnpm add @vercel/analytics`
- Add `<Analytics />` component to `src/app/layout.tsx`
- Docs: https://vercel.com/docs/analytics

> **Recommendation:** Use Vercel Analytics as the baseline (no configuration needed). Add GA4 if the client requires it.

---

## Event Tracking Placeholders

The following events should be tracked once analytics is configured:

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `page_view` | On every page load | `{ page_path, page_title }` |
| `cta_click` | User clicks primary CTA button | `{ cta_label, cta_location }` |
| `section_view` | Section enters viewport | `{ section_name }` |
| `accordion_expand` | FAQ/accordion item opened | `{ item_label }` |
| `tab_change` | User switches tabs | `{ tab_name }` |
| `contact_click` | User clicks contact/email link | `{ link_type }` |

---

## Form Submission Tracking

> No forms are included in the initial launch. If a contact form is added:

- Track `form_start` when user focuses first field
- Track `form_submit_attempt` on submit click
- Track `form_submit_success` on successful submission
- Track `form_submit_error` with error message on failure

---

## Conversion Goals

| Goal | Description | Priority |
|------|-------------|----------|
| Primary CTA Click | User clicks "Get Started" or main CTA | High |
| Contact Initiated | User clicks email or Calendly link | High |
| Full Page Scroll | User reaches bottom of homepage | Medium |
| Proposal Download | If PDF download is added | Medium |
| Time on Site > 2min | Engagement quality signal | Low |

---

## Environment Variables

```env
# Add to Vercel dashboard under project settings
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> Do not commit this value to the repository. Set it in Vercel's environment variable settings.
