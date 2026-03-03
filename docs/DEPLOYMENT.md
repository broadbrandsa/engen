# Deployment

## GitHub Repository Setup

1. Create a new repository on GitHub (private or public, per client preference)
2. Do NOT initialize with a README — the local project already has git initialized
3. Connect the local project to the remote:

```bash
git remote add origin https://github.com/<org>/<repo-name>.git
git branch -M main
git push -u origin main
```

---

## Vercel Project Setup

1. Go to [vercel.com](https://vercel.com) and click **Add New → Project**
2. Import the GitHub repository
3. Configure the project settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `.` (project root, leave blank) |
| Build Command | `pnpm build` |
| Output Directory | *(leave blank — Next.js default)* |
| Install Command | `pnpm install` |

4. Click **Deploy**

---

## Root Directory Rules

- This is a **standalone project** — it is not inside a monorepo
- The `package.json` is at the project root
- Vercel's root directory should point to the repository root (default)
- Do NOT set a custom root directory unless the repo structure changes

---

## Build Command

```bash
pnpm build
```

This runs `next build`, which:
- Compiles TypeScript
- Generates static pages
- Optimizes assets
- Outputs to `.next/`

---

## Environment Variable Management

| Variable | Description | Where to Set |
|----------|-------------|--------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | Vercel Dashboard |
| *(future)* `NEXT_PUBLIC_SITE_URL` | Canonical site URL | Vercel Dashboard |

**Rules:**
- Never commit `.env.local` or any file containing real secrets
- All `NEXT_PUBLIC_*` variables are exposed to the browser — do not store secrets in them
- Server-only secrets (if added later) use non-prefixed variable names

---

## How to Redeploy

### Automatic Redeployment
Vercel automatically redeploys on every push to the `main` branch.

### Manual Redeployment
1. Go to the Vercel dashboard → your project
2. Click **Deployments** → find latest deployment
3. Click the **...** menu → **Redeploy**

### Preview Deployments
- Every pull request and non-main branch push creates a **preview deployment**
- Preview URLs follow the pattern: `https://<project>-<hash>.vercel.app`
- Share preview URLs for stakeholder review before merging to main

---

## Custom Domain (Post-Launch)

1. In Vercel dashboard → **Settings → Domains**
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions
4. SSL is handled automatically by Vercel

---

## Vercel Analytics

If Vercel Analytics is enabled:
- No additional configuration needed for Vercel-hosted projects
- Activate in Vercel dashboard under **Analytics** tab
- Add `<Analytics />` to `src/app/layout.tsx` from `@vercel/analytics/react`
