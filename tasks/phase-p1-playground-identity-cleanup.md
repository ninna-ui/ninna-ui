# Phase P1 — Playground Identity Cleanup

**Status**: ✅ COMPLETED  
**Priority**: HIGH  
**Repo**: `ninna-ui-dev`  
**Target**: `apps/playground`  
**Depends on**: Nothing (first step)

## Objective

Strip all public-documentation-website concerns from `apps/playground`. It must become a clean **DX sandbox** — a local developer tool for previewing components, not a public-facing site. All SEO, SSR server, and production-website artefacts move to `ninna-ui-web`.

---

## Background

The playground was originally built as both a DX sandbox and the documentation website. Now that `ninna-ui-web` is the dedicated public site, the playground should be a simple SPA that runs locally for contributors and AI agents to explore components without server overhead.

---

## Steps

### 1. `package.json`
- [x] `description` → `"Developer playground for Ninna UI — live component sandbox for local development"`
- [x] Remove `start` script (`react-router-serve ./build/server/index.js`) — no server needed for SPA
- [x] Remove `@react-router/serve` from deps. Note: `@react-router/node` + `isbot` must stay in `dependencies` (pnpm `shamefully-hoist=false` requires them locally for build-time SPA pre-render)
- [x] Verify `name` remains `@ninna-ui/playground` (private, fine)

### 2. `react-router.config.ts`
- [x] Change `ssr: true` → `ssr: false` (SPA mode — no server bundle, faster cold start, no node adapter)

```typescript
// Before
export default { ssr: true } satisfies Config;

// After
export default { ssr: false } satisfies Config;
```

### 3. `vite.config.ts`
- [x] Remove the entire `build.rollupOptions.output.manualChunks` block — chunk splitting is irrelevant for a local dev tool, adds build complexity for no benefit
- [x] Keep `server.port: 3000`, `plugins`, target

```typescript
// Simplified vite.config.ts (remove build block entirely or keep just target)
export default defineConfig({
  server: { port: 3000 },
  plugins: [reactRouter(), tsconfigPaths(), tailwindcss()],
});
```

### 4. `app/root.tsx` — Remove all SEO/production meta
- [x] Delete `SITE_URL` constant
- [x] Delete `STRUCTURED_DATA` JSON-LD block
- [x] Replace the full `meta: MetaFunction` export with minimal version:

```typescript
export const meta: MetaFunction = () => [
  { title: "Ninna UI Playground" },
  { name: "description", content: "Developer playground for Ninna UI components." },
];
```

- [x] Remove `shouldRevalidate` export (SPA handles this differently; not needed)
- [x] Keep: `ThemeProvider`, `MainLayout`, `Toaster`, `ErrorBoundary`, `HydrateFallback`. Refactored to use exported `Layout` function (React Router v7 SPA mode requirement)

### 5. `app/routes/_index.tsx` — Remove duplicate meta
- [x] Remove the entire `export function meta()` block (OG tags, Twitter cards are irrelevant here)
- [x] Keep: `export default function Index()`, `export const handle`

### 6. `public/` — Remove production-website assets
**Remove these files:**
- [x] `sitemap.xml`
- [x] `robots.txt`
- [x] `og-image.png`
- [x] `site.webmanifest`
- [x] `apple-touch-icon.png`
- [x] `icon-192.png`
- [x] `icon-512.png`
- [x] `icon-maskable-512.png`
- [x] `llms.txt` (moves to `ninna-ui-web` — already there)

**Keep these files:**
- [x] `favicon.svg` ✅
- [x] `logo.svg` ✅
- [x] `theme-init.js` ✅ (dark mode flash prevention)
- [x] `humans.txt` ✅

### 7. `app/components/layout/index.tsx` (MainLayout) — Add dev banner
- [x] Add a small "Dev Playground" indicator in the topbar (between logo and theme controls)
- [x] Add "Docs ↗" link to footer pointing to `https://ninna-ui.dev`

**Topbar addition** (between `<NinnaLogo />` and theme switcher):
```tsx
<a
  href="https://ninna-ui.dev"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary hover:bg-primary/20 transition-colors"
>
  Dev Playground · docs ↗
</a>
```

**Footer addition:**
```tsx
<a href="https://ninna-ui.dev" target="_blank" rel="noopener noreferrer" className="hover:text-base-content transition-colors">
  ninna-ui.dev ↗
</a>
```

### 8. `README.md` — Rewrite
- [x] Remove "primary documentation site" language
- [x] Describe as: developer sandbox / local component preview tool
- [x] Update `## Development` section — note SPA mode (no `start` script)
- [x] Add link to `ninna-ui.dev` for full public docs

### 9. `ROUTING_STRUCTURE.md` — Update language
- [x] Replace "documentation site" references with "playground"
- [x] Remove public-website route descriptions (api.component-source removed)
- [x] Keep the route convention table (still useful for contributors)

---

## Files Changed Summary

| File | Action |
|------|--------|
| `package.json` | Update description, remove server scripts/deps |
| `react-router.config.ts` | `ssr: false` |
| `vite.config.ts` | Remove manualChunks |
| `app/root.tsx` | Remove SEO meta, SITE_URL, STRUCTURED_DATA, shouldRevalidate |
| `app/routes/_index.tsx` | Remove meta() export |
| `public/sitemap.xml` | 🗑️ Delete |
| `public/robots.txt` | 🗑️ Delete |
| `public/og-image.png` | 🗑️ Delete |
| `public/site.webmanifest` | 🗑️ Delete |
| `public/apple-touch-icon.png` | 🗑️ Delete |
| `public/icon-192.png` | 🗑️ Delete |
| `public/icon-512.png` | 🗑️ Delete |
| `public/icon-maskable-512.png` | 🗑️ Delete |
| `public/llms.txt` | 🗑️ Delete (lives in ninna-ui-web) |
| `app/components/layout/index.tsx` | Add dev banner + ninna-ui.dev footer link |
| `README.md` | Rewrite as DX sandbox |
| `ROUTING_STRUCTURE.md` | Update language |

---

## Success Criteria
- [x] `pnpm --filter playground dev` starts without errors (SPA mode)
- [x] `pnpm --filter playground build` produces SPA build (no `server/` folder in output)
- [x] No `sitemap.xml`, `robots.txt`, or production assets in `public/`
- [x] `root.tsx` has no OG/Twitter/JSON-LD meta
- [x] Topbar shows "Dev Playground · docs ↗" link
- [x] Footer links to `https://ninna-ui.dev`
- [x] `pnpm typecheck` passes
