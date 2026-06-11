# 31 — Core class-map contract tests

Status: TODO
Phase: 2 · Priority: High · Size: M

## Context

`@ninna-ui/core` exports ~27 Tailwind class-map objects (`BG_COLORS`, `TEXT_COLORS`,
`SOLID_VARIANTS`, `RADIUS_CLASSES`, etc. — see `packages/core/src/classes/`) plus token
types, but has only one test file (`src/index.test.ts`) and its `test` script uses
`--passWithNoTests`. These maps are the contract every component package builds on:
a missing key (e.g. a `Color` token without a `BG_COLORS` entry) silently breaks styling.

## Constraints

- Tests only — no changes to the maps themselves. If a test reveals a genuine missing
  key, fix it additively and note it in the task status.
- Remove `--passWithNoTests` from `packages/core/package.json` once tests exist.

## Files to touch

- `packages/core/src/classes/__tests__/class-maps.test.ts` (NEW — or follow existing
  test placement convention; check `packages/core/src/index.test.ts` first)
- `packages/core/package.json` (test script)

## Steps

1. Inspect `packages/core/src/tokens/` to enumerate token unions
   (`Color`, `Size`, `Radius`, `TextSize`, `TextWeight`, `ColorVariant`, etc.).
2. Write contract tests:
   - **Completeness**: every color-keyed map (`BG_COLORS`, `TEXT_COLORS`, `BORDER_COLORS`,
     `RING_COLORS`, `SOFT_BG_COLORS`, `SOLID_VARIANTS`, `OUTLINE_VARIANTS`, `GHOST_VARIANTS`,
     `SOFT_VARIANTS`, etc.) has an entry for every `Color` token. Iterate over a literal
     array of all colors and assert `expect(map[color]).toBeTruthy()`.
   - **Shape**: values are non-empty strings; no value contains `dark:` (hard architecture
     rule); no value contains hardcoded palette colors (`red-500`, `blue-`, etc. — regex).
   - **Size maps**: `RADIUS_CLASSES`, `TEXT_SIZE_CLASSES`, `TEXT_WEIGHT_CLASSES` cover
     their full token unions.
   - **Snapshot**: one `toMatchSnapshot()` per map to catch accidental class edits
     (intentional changes update snapshots consciously).
3. Remove `--passWithNoTests` from core's test script.
4. Run the suite; if a completeness test fails, the missing key is a REAL bug — add the
   missing entry following the pattern of sibling entries and re-run `pnpm safelist`.

## Acceptance criteria

- [ ] Every exported class map covered by completeness + shape tests.
- [ ] Snapshots committed.
- [ ] `--passWithNoTests` removed; `pnpm --filter @ninna-ui/core test` runs real tests.
- [ ] No `dark:` or hardcoded palette classes anywhere in maps (enforced by test).

## Verification

```bash
pnpm --filter @ninna-ui/core test
pnpm safelist && git diff --exit-code packages/core/src/theme   # safelist unchanged unless a bug was fixed
pnpm build && pnpm test
```

## Sync checklist

- N/A (tests only), unless a missing map key was fixed — then run the full safelist
  + verify-classes flow: `pnpm --filter @ninna-ui/core verify-classes`.
