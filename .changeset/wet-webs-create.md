---
"@ninna-ui/react-internal": patch
"@ninna-ui/data-display": patch
"@ninna-ui/navigation": patch
"@ninna-ui/forms": patch
"@ninna-ui/utils": patch
"@ninna-ui/core": patch
"@ninna-ui/cli": patch
---

**Testing hygiene (tasks 31–35) — no public API changes.**

- **core**: contract tests for all 26 class-map objects and generates CSS safelist for theme utilities; removes `--passWithNoTests`
- **utils**: backfill tests for `composeEventHandlers`, `canUseDOM`, `getOwnerWindow`, and `KEYS` constants; removes `--passWithNoTests`
- **react-internal**: 36 new tests covering all 11 Radix engine wrappers and `Slot`/`Slottable`; adds `vitest.config.ts`
- **cli**: 14 new tests for `init` helper logic (workspace:* dep-swap, CSS preset swap, data-theme swap, template directory existence); adds vitest infrastructure
- **forms**: keyboard-navigation test suites for `PinInput` (focus advance, Backspace retreat, ArrowLeft/Right, paste, numeric type guard) and `NumberInput` (ArrowUp/Down, min/max clamp, `aria-valuenow`)
- **data-display**: keyboard-navigation test suites for `Tree` (ArrowRight expand, ArrowLeft collapse, Space select, `aria-selected`) and `Calendar` (Enter/Space select, `aria-pressed`, disabled date guard)
- **navigation**: keyboard-navigation test suites for `Pagination` (`aria-current="page"`, Enter/Space activate, tab order) and `Stepper` (`data-status` per step, accessible `aria-label`)
