# Assumptions

## General

This document captures the working assumptions under which this proposal site was designed and built. These assumptions should be reviewed and validated before, during, and after client approval.

---

## Data & Content

- **No internal data access:** This site does not connect to any internal databases, CRMs, CMSs, or APIs. All content is authored directly in the codebase.
- **Static content only:** All text, images, and data are hardcoded or stored in static content files within `src/content/`. There is no dynamic content fetching at runtime.
- **No user-generated content:** The site has no forms, logins, comments, or submission flows beyond any contact/CTA buttons that may link to external tools (e.g., Calendly, email).

---

## Strategy & Scope

- **Directional strategy only:** Any strategic recommendations, frameworks, or roadmaps presented in the proposal are directional. They are intended to communicate intent and approach, not serve as final deliverables.
- **Estimates are indicative:** Any timelines, costs, or resource estimates shown are illustrative and subject to revision after scoping is complete.
- **Requires validation post-approval:** All assumptions about client systems, integrations, or workflows must be validated with the client after proposal acceptance before execution begins.

---

## Technical

- **Standalone site:** This project has no monorepo dependencies and does not share packages, configs, or utilities with any other project.
- **No backend required at launch:** The site is a static/SSG export at launch. If dynamic features are needed later (e.g., form submissions, analytics events), they will require a scoping addendum.
- **Browser compatibility:** The site targets modern evergreen browsers (Chrome, Firefox, Safari, Edge). No IE11 support.

---

## Deployment

- **Vercel is the assumed hosting platform.** If deployment targets change (e.g., AWS, Netlify), build configuration may need adjustment.
- **Environment variables:** Any analytics keys or third-party integration tokens are managed via Vercel environment variables, not committed to the repository.
