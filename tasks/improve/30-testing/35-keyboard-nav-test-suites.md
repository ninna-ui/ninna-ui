# 35 — Keyboard-navigation test suites for custom (non-Radix) widgets

Status: TODO
Phase: 2 · Priority: High · Size: L

## Context

Radix-backed components inherit keyboard handling from Radix, but the **custom-built**
interactive widgets implement their own keyboard logic and have thin keyboard test
coverage:

- `packages/data-display/src/tree/` — arrow nav, expand/collapse, Home/End
- `packages/data-display/src/calendar/` — arrow keys across day grid, PageUp/Down, Enter
- `packages/navigation/src/pagination/` — focus + Enter/Space activation
- `packages/navigation/src/stepper/` — focus order, current-step aria
- `packages/forms/src/pin-input/` — typing advances, Backspace retreats, paste distributes
- `packages/forms/src/number-input/` — ArrowUp/Down step, Shift for big step, min/max clamp

Existing test files exist for each (e.g. `tree.test.tsx`) — EXTEND them; read each
component's implementation first to test actual behavior, not assumed behavior.

## Constraints

- Tests only. If a keyboard behavior is genuinely missing/broken vs WAI-ARIA APG,
  do NOT silently change component behavior — record it in this file under
  `## Findings` and fix only if the fix is non-breaking and clearly a bug.
- Use `@testing-library/user-event` (already a root devDep) for realistic key events.

## Files to touch

- `packages/data-display/src/tree/tree.test.tsx` (EXTEND)
- `packages/data-display/src/calendar/calendar.test.tsx` (EXTEND)
- `packages/navigation/src/pagination/pagination.test.tsx` (EXTEND)
- `packages/navigation/src/stepper/stepper.test.tsx` (EXTEND)
- `packages/forms/src/pin-input/pin-input.test.tsx` (EXTEND)
- `packages/forms/src/number-input/number-input.test.tsx` (EXTEND)

## Steps

For each component:

1. Read the `.tsx` implementation and note every `onKeyDown`/key handler and the
   relevant WAI-ARIA APG pattern (Tree View, Grid/Calendar, Spinbutton, etc.).
2. Add a `describe("keyboard navigation")` block covering, per component:
   - **Tree**: ArrowDown/Up moves focus between visible items; ArrowRight expands /
     moves into children; ArrowLeft collapses / moves to parent; Home/End jump;
     Enter/Space selects; `aria-expanded` toggles.
   - **Calendar**: ArrowLeft/Right ±1 day, ArrowUp/Down ±7 days; month boundary moves
     month; Enter selects date (check PageUp/Down support in implementation first);
     focused day has correct `aria-selected`/tabindex roving.
   - **Pagination**: Tab order; Enter/Space activate page links; `aria-current="page"`.
   - **Stepper**: each step's `aria-current`/`data-state`; focus order matches steps.
   - **PinInput**: typing a digit advances focus; Backspace on empty field moves back;
     paste of full code fills all fields; non-numeric rejected when type is numeric.
   - **NumberInput**: ArrowUp/Down increments/decrements by `step`; clamps at min/max;
     `aria-valuenow/min/max` correct (verify Shift+Arrow large-step exists before testing).
3. Keep each test focused — one behavior per `it`.
4. Run `pnpm test` and the sa11y matcher on any newly rendered compositions.

## Acceptance criteria

- [ ] All 6 components have keyboard `describe` blocks covering the behaviors above
      (or documented `## Findings` entries where behavior doesn't exist).
- [ ] All tests green; no component behavior changed silently.

## Verification

```bash
pnpm --filter @ninna-ui/data-display test
pnpm --filter @ninna-ui/navigation test
pnpm --filter @ninna-ui/forms test
pnpm test
```

## Sync checklist

- [ ] Update test counts in `docs/standards/TESTING_STRATEGY.md`.
- [ ] Any `## Findings` gaps worth fixing later → add to the deferred backlog in
      `tasks/improve/00-OVERVIEW.md`.
