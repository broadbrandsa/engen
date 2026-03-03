# Structure

## Folder Structure

```
engen-proposal/
├── docs/                        # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                  # Static images, logos, assets
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles + Tailwind + shadcn CSS vars
│   │   └── [route]/             # Additional pages added here
│   ├── components/
│   │   ├── sections/            # Full-page section components (Hero, CTA, etc.)
│   │   └── ui/                  # shadcn primitives (auto-generated, do not edit)
│   ├── content/                 # Static content files (copy, data, config)
│   └── lib/
│       └── utils.ts             # Utility functions (cn, etc.)
├── components.json              # shadcn configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── package.json
```

---

## Section Composition Rules

1. **One file per section.** Each distinct section of the site lives in `src/components/sections/` as its own `.tsx` file (e.g., `HeroSection.tsx`, `OverviewSection.tsx`).

2. **Sections are assembled in page files.** The `src/app/page.tsx` file imports and composes sections. Sections should not be tightly coupled to each other.

3. **Props over hardcoded content.** Where possible, sections accept content as props. Actual content values live in `src/content/` and are passed in from the page level.

4. **shadcn UI only in `src/components/ui/`.** Do not add custom components to this folder. It is managed by the shadcn CLI.

5. **No business logic in sections.** Sections are presentational. Any logic (data fetching, transformations) belongs at the page or utility level.

---

## Content Management Approach

- All site copy is managed in `src/content/` as TypeScript files or JSON
- A typical content file exports a typed object with all strings for a given section or page
- This approach allows content editors to update copy without touching component logic
- Example: `src/content/hero.ts` exports `{ headline, subheadline, ctaLabel, ctaHref }`
- If the site grows to require a CMS, this file-based layer makes migration straightforward
