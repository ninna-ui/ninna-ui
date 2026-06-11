# 32 — Backfill tests: react-internal, cli, utils gaps

Status: TODO
Phase: 2 · Priority: High · Size: M

## Context

Verified test coverage gaps:

- `packages/react-internal/` — **zero test files**. The 11 Radix engine wrappers
  (`src/engines/*.ts`) and `Slot`/`Slottable` (`src/primitives/`) are the foundation
  of forms/overlays/navigation; a wrong re-export breaks everything downstream.
- `packages/cli/` — **zero test files**. Untested critical logic: template copy,
  `workspace:*` → `latest` dependency swap, theme-preset CSS-import swap
  (see `packages/cli/src/commands/init.ts`).
- `packages/utils/` — HAS tests (`__tests__/cn.test.ts`, `compose-refs.test.ts`,
  `create-context.test.tsx`), but `composeEventHandlers`, `KEYS`, and the SSR helpers
  (`canUseDOM`, `isBrowser`, `getOwnerDocument`, `getOwnerWindow`) are untested.

## Constraints

- Tests only — no production code changes unless a test exposes a real bug
  (fix minimally, note in status).
- Match existing test conventions: vitest + @testing-library/react, files in
  `__tests__/` (utils style) or co-located (component style) — follow each package's
  existing pattern; for packages with none, use `__tests__/`.

## Files to touch

- `packages/react-internal/__tests__/engines.test.tsx` (NEW)
- `packages/react-internal/__tests__/slot.test.tsx` (NEW)
- `packages/cli/__tests__/init.test.ts` (NEW)
- `packages/utils/__tests__/compose-event-handlers.test.ts` (NEW)
- `packages/utils/__tests__/ssr-helpers.test.ts` (NEW)
- Package `package.json` test scripts if they use `--passWithNoTests` (remove flag)

## Steps

1. **react-internal**:
   - For each engine (checkbox, switch, radio, select, slider, dialog, dropdown,
     popover, tooltip, tabs, accordion): assert the exported engine object exposes the
     expected parts (Root/Trigger/Content etc. — read each `src/engines/*-engine.ts`
     to derive the exact shape) and that parts are renderable React components
     (render a minimal composition where cheap; shape assertions where rendering
     requires complex setup like portals).
   - `Slot`: renders child element, merges className/props, composes refs;
     `Slottable` passes through children.
2. **cli**: read `packages/cli/src/` first to map functions, then test pure logic
   directly (import functions, avoid spawning the CLI):
   - dependency-swap: given a template package.json object with `workspace:*` deps,
     output uses `latest` (or pinned version — match actual implementation).
   - preset swap: given CSS content importing `presets/default.css` and preset `ocean`,
     output imports `presets/ocean.css`.
   - template path resolution: all 4 template folders exist and contain `package.json`.
   - Use `memfs` or temp dirs (`fs.mkdtemp`) for any filesystem tests; add devDep only
     to the cli package if needed.
3. **utils gaps**:
   - `composeEventHandlers`: both handlers called in order; second skipped when first
     calls `preventDefault` (match actual implementation semantics — read the source).
   - SSR helpers: `canUseDOM`/`isBrowser` true under jsdom; `getOwnerDocument`/`getOwnerWindow`
     return document/window for attached nodes and fall back correctly for null.
4. Remove `--passWithNoTests` from any package that now has tests.

## Acceptance criteria

- [ ] react-internal: all 11 engines + Slot covered.
- [ ] cli: swap logic, preset swap, and template integrity covered.
- [ ] utils: composeEventHandlers + SSR helpers covered.
- [ ] Root `pnpm test` count increases accordingly; all green.

## Verification

```bash
pnpm --filter @ninna-ui/react-internal test
pnpm --filter @ninna-ui/cli test
pnpm --filter @ninna-ui/utils test
pnpm test
```

## Sync checklist

- [ ] Update test counts in `docs/standards/TESTING_STRATEGY.md` and
      `docs/architecture/ARCHITECTURE.md` ("51 test files, 708 tests" lines).
