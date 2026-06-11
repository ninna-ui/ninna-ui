# 43 — CSS safelist weight audit (848 inline-safelisted classes)

Status: TODO
Phase: 3 · Priority: Medium · Size: M

## Context

`packages/core/scripts/generate-safelist.mjs` safelists **all** classes used across the
8 component packages via `@source inline()` directives written into the theme CSS.
This is the proven-reliable approach (filesystem `@source` directives fail from
`node_modules`), but it means every consumer ships CSS for ALL components — even when
they install only `@ninna-ui/primitives`.

Nobody has measured the actual cost. This task quantifies it and, only if the cost is
significant, prototypes an **additive, opt-in** reduction path.

## Constraints

- The default import (`@import "@ninna-ui/core/theme/presets/default.css"`) must keep
  working exactly as today — full safelist included. NO breaking changes.
- Do not remove `@source inline()` in favor of filesystem `@source` — that approach is
  known-broken from `node_modules` (documented project memory).

## Files to touch

- (Measurement) a throwaway scratch project OUTSIDE the repo or in a gitignored temp dir
- `tasks/improve/40-performance/43-css-safelist-weight-audit.md` (this file — record results)
- Only if Phase B is justified: `packages/core/scripts/generate-safelist.mjs`,
  new `src/theme/safelist/*.css` partials, `packages/core/package.json` exports

## Steps

### Phase A — Measure (always do)

1. Create a minimal Vite scratch app in a temp dir with Tailwind v4 +
   `@import "@ninna-ui/core/theme/presets/default.css"` (use `pnpm pack` output of core,
   or link the built dist) and a single `<Button>` usage.
2. Build and record the produced CSS size (raw + gzip).
3. Comment out the safelist `@source inline()` block, rebuild, record again.
   The delta = safelist cost. Record both numbers in `## Results` below.
4. Decision gate: if gzip delta < ~10 KB, STOP — document "cost acceptable, no action"
   and mark task done.

### Phase B — Opt-in per-package safelist partials (only if delta is large)

5. Extend `generate-safelist.mjs` to ALSO emit per-package partials
   (e.g. `src/theme/safelist/primitives.css`, `forms.css`, …) alongside the existing
   combined output. The combined output stays the default — untouched behavior.
6. Add core `exports` entries for `./theme/safelist/*.css`.
7. Document the opt-in pattern in `packages/core/README.md`:
   ```css
   /* Advanced: only safelist what you install */
   @import "@ninna-ui/core/theme/base.css";          /* check real file name */
   @import "@ninna-ui/core/theme/safelist/primitives.css";
   ```
   (Inspect the real theme CSS structure first — preset files import `../tailwind.css`;
   the partial scheme must compose with that without duplicating `@theme` blocks.)
8. Re-run the scratch-app measurement using the opt-in path to confirm savings.
9. Run the full verify pipeline: `pnpm safelist`, `pnpm --filter @ninna-ui/core verify-classes`,
   CI safelist `git diff` check must stay green (generator must remain idempotent).

## Acceptance criteria

- [ ] `## Results` documents measured CSS sizes (with/without safelist).
- [ ] Decision recorded (acceptable vs opt-in partials shipped).
- [ ] If Phase B: default preset output byte-identical to before; partials additive;
      generator idempotent; verify-classes green.

## Verification

```bash
pnpm safelist
git diff --exit-code packages/core/src/theme   # idempotency (Phase A) — no diff expected
pnpm --filter @ninna-ui/core build
pnpm --filter @ninna-ui/core verify-classes
pnpm build && pnpm check-exports
```

## Sync checklist

- [ ] If Phase B shipped: document the opt-in imports in
      `ninna-ui-web` theming docs (`app/views/docs/getting-started/theming/`) and `llms.txt`.

## Results

_(filled in by executor)_
