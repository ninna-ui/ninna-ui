# 34 — Bundle-size budgets with size-limit

Status: TODO
Phase: 2 · Priority: Medium · Size: M

## Context

The library advertises tree-shakeability ("import only what you use"), but nothing
measures or enforces bundle size. A regression (e.g. a barrel accidentally importing
Radix into primitives, or a heavy dependency creeping in) would ship unnoticed.

## Constraints

- Measurement + CI gate only — no production code changes.
- Budgets must be generous on first pass (current size + ~15% headroom); the goal is
  catching regressions, not forcing optimization now.

## Files to touch

- `package.json` (root — `size-limit` devDeps + `size` script)
- `.size-limit.json` (NEW, root) — or per-package config if the monorepo layout requires it
- `.github/workflows/ci.yml` (inspect actual workflow filenames; add size job)

## Steps

1. Add devDeps at root: `size-limit`, `@size-limit/preset-small-lib`.
2. Build all packages first (`pnpm build`) — size-limit measures `dist/` output.
3. Create `.size-limit.json` entries (gzip) for at least:
   - `packages/primitives/dist/index.js` — full package
   - `{ "import": "{ Button }", "path": "packages/primitives/dist/index.js" }` — tree-shake check
   - `packages/forms/dist/index.js`
   - `packages/overlays/dist/index.js`
   - `packages/layout/dist/index.js`
   - `packages/feedback/dist/index.js`
   - `packages/navigation/dist/index.js`
   - `packages/data-display/dist/index.js`
   - `packages/code-block/dist/index.js`
   - `packages/core/dist/index.js`
   - `packages/utils/dist/index.js`
   Mark `react`, `react-dom` as `ignore` so peer deps don't count.
4. Run `pnpm exec size-limit` to get current numbers; set each `limit` to current + ~15%.
5. Add root script `"size": "size-limit"` and a CI step after build.
6. Record the baseline table (package → gzip size) in this task file under a
   `## Baseline` heading when done.

## Acceptance criteria

- [ ] `pnpm size` passes locally with documented budgets.
- [ ] Single-component import entry proves tree-shaking (Button import ≪ full package).
- [ ] CI fails if any package exceeds its budget.

## Verification

```bash
pnpm build
pnpm size
```

## Sync checklist

- [ ] If the Button-only import is NOT meaningfully smaller than the full package,
      file the finding in `40-performance/42` notes — that indicates a tree-shaking bug
      worth investigating (sideEffects flags, barrel structure).
