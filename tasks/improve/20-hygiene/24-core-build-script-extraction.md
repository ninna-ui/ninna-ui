# 24 — Extract core's inline CSS-copy build step + document forwardRef policy

Status: TODO
Phase: 1 · Priority: Low · Size: S

## Context

Two cleanups:

1. **B4** — `packages/core/package.json` `build` script embeds a ~400-char inline
   `node -e "..."` one-liner that recursively copies `.css` files from `src/theme` to
   `dist/theme`. Unreadable, unlintable, untestable.
2. **B5** — React 19 supports `ref` as a regular prop, but the library uses `forwardRef`
   everywhere. The policy decision is to **keep `forwardRef`** (React 18 compatibility,
   no churn) — but this should be a written rule so contributors don't "modernize" piecemeal.

## Constraints

- The build output must be byte-identical: same CSS files, same `dist/theme/` layout.
- Do not change tsup config or the safelist generation step ordering.

## Files to touch

- `packages/core/scripts/copy-css.mjs` (NEW)
- `packages/core/package.json` (build script)
- `docs/guides/DEVELOPMENT_RULES.md` (forwardRef policy)

## Steps

1. Create `packages/core/scripts/copy-css.mjs` with the same logic as the inline
   snippet (recursive copy of `*.css` from `src/theme` to `dist/theme`), using
   `node:fs` / `node:path` ESM imports. Match the style of the existing
   `generate-safelist.mjs` in the same folder.
2. Change the build script to:
   `"build": "node scripts/generate-safelist.mjs && tsup && node scripts/copy-css.mjs"`
3. Build core and diff `dist/theme/` contents against a pre-change build
   (file list + sizes must match).
4. Add to `docs/guides/DEVELOPMENT_RULES.md` (component patterns section):
   > **forwardRef policy**: All components use `forwardRef` + `displayName`, even though
   > React 19 supports `ref`-as-prop. This preserves React 18 compatibility and API
   > uniformity. Do not migrate individual components to ref-as-prop.

## Acceptance criteria

- [ ] No inline `node -e` remains in `packages/core/package.json`.
- [ ] `dist/theme/` contains the same CSS files as before (all 5 presets + tailwind.css).
- [ ] forwardRef policy documented.

## Verification

```bash
pnpm --filter @ninna-ui/core build
# inspect: dist/theme must contain tailwind.css + presets/{default,ocean,sunset,forest,minimal}.css
pnpm build && pnpm check-exports
```

## Sync checklist

- N/A.
