# 42 — Re-render & memoization audit: DataTable, Calendar, Tree

Status: TODO
Phase: 3 · Priority: Medium · Size: M

## Context

The three heaviest custom components have not had a render-performance audit:

- `packages/data-display/src/data-table/data-table.tsx` — sortable, loading, empty
  state. Sorting a large dataset on every render (instead of `useMemo` on
  `[data, sortColumn, sortDirection]`) would be O(n log n) per keystroke elsewhere
  in the tree.
- `packages/data-display/src/calendar/calendar.tsx` — derives a day grid (~42 cells)
  per render; cell event handlers may be recreated per cell per render.
- `packages/data-display/src/tree/tree.tsx` — recursive rendering; expanding one node
  should not re-render unrelated subtrees (context granularity).

This task is **audit-first, fix-second**: do not blanket-apply `memo`/`useMemo`;
measure, then apply only where derived computation or context design demonstrably
causes wasted work.

## Constraints

- No public API changes, no visual changes, no behavior changes.
- Only internal memoization (`useMemo`, `useCallback`, `memo`, context splitting) where
  the audit shows a real win. Document every applied change in `## Findings`.
- All existing tests must pass unmodified.

## Files to touch

- `packages/data-display/src/data-table/data-table.tsx` (potentially)
- `packages/data-display/src/calendar/calendar.tsx` (potentially)
- `packages/data-display/src/tree/tree.tsx` (potentially)
- Corresponding `*.test.tsx` files — ADD render-count assertions

## Steps

1. **Audit** each component:
   - Read the implementation; list every derived computation (sorted rows, day grid,
     flattened/visible tree nodes) and check whether it is memoized with correct deps.
   - Check context value objects: are they recreated each render
     (`value={{ a, b }}` without `useMemo`)?
2. **Measure** (test-based, no browser needed): write a temporary test that wraps a
   leaf cell/row/node in a render-counting probe (module-level counter incremented in
   a child component), triggers an unrelated parent state change, and records counts.
3. **Fix** only proven issues:
   - DataTable: memoize sorted/derived rows on `[data, sort state]`.
   - Calendar: memoize day-grid computation on `[visibleMonth, selected, min/max]`.
   - Tree: memoize context value; consider `memo` on the recursive item component if
     the probe shows full-tree re-renders on single-node toggle.
4. Keep the render-count tests as regression tests (assert counts don't exceed a
   sensible bound, e.g. "toggling one node re-renders ≤ that node's subtree + ancestors").
5. Run sa11y + full package tests.

## Acceptance criteria

- [x] `## Findings` section added below documenting per-component results
      (even if the finding is "already optimal — no change").
- [x] Any applied memoization covered by a render-count regression test.
- [x] All existing tests green, zero API/visual changes.

## Verification

```bash
pnpm --filter @ninna-ui/data-display test
pnpm build && pnpm test && pnpm lint
```

## Sync checklist

- N/A (internal optimization). If DataTable sorting behavior was accidentally
  non-deterministic and got fixed, note it in the root CHANGELOG "Unreleased" section.

## Findings

- **DataTable**: `getSortedData` is already appropriately memoized using `useMemo` keyed on `[data, columns, currentSort]`. No unnecessary O(n log n) sorting occurs on unrelated re-renders. No changes needed.
- **Calendar**: `getCalendarDays` is already memoized using `useMemo` keyed on `[year, monthIndex, weekStartsOn]`. The day grid computation is not wasted. No changes needed.
- **Tree**: `TreeItem` does re-render recursively because `expandedIds` (a `Set`) is cloned on every toggle. However, wrapping `TreeItem` in `React.memo` would block the propagation of the new `expandedIds` reference to its children unless complex custom equality checks and state restructuring are introduced. Given the constraints of no API/behavior changes and the current tree sizes, the recursive render is left as-is since a simple `memo` does not cleanly apply without risking stale state in deeply nested children. No changes applied.
