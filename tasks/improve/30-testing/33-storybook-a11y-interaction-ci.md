# 33 — Storybook a11y addon + interaction-test CI gate

Status: TODO
Phase: 2 · Priority: Medium · Size: M

## Context

`apps/docs` (Storybook 10) has 66 story files but:

- No `@storybook/addon-a11y` — accessibility is only checked in vitest via @sa11y.
- No `play` interaction tests — stories are render-only.
- No CI job that builds Storybook or runs the test-runner, so broken stories are only
  discovered manually.

## Constraints

- Additive only: do not rewrite existing stories; add `play` functions to a small,
  high-value subset first.
- CI additions must not slow the main test job — use a separate job/workflow step.
- Check Storybook 10 docs for current addon/test-runner package names before installing
  (`@storybook/addon-a11y`, `@storybook/test-runner`, `storybook/test` utilities).

## Files to touch

- `apps/docs/.storybook/main.ts` (register a11y addon)
- `apps/docs/package.json` (devDeps + `test-storybook` script)
- `.github/workflows/ci.yml` (inspect actual workflow filenames first; add storybook job)
- ~8 story files (add `play` functions):
  - `apps/docs/src/stories/primitives/Button.stories.tsx` (click, loading disables)
  - `apps/docs/src/stories/forms/Select.stories.tsx` (open, pick option)
  - `apps/docs/src/stories/forms/Checkbox.stories.tsx` (toggle)
  - `apps/docs/src/stories/overlays/Modal.stories.tsx` (open, Escape closes)
  - `apps/docs/src/stories/overlays/DropdownMenu.stories.tsx` (open, arrow nav)
  - `apps/docs/src/stories/navigation/Tabs.stories.tsx` (arrow-key switching)
  - `apps/docs/src/stories/navigation/Accordion.stories.tsx` (expand/collapse)
  - `apps/docs/src/stories/forms/PinInput.stories.tsx` (typing advances focus)

## Steps

1. Add `@storybook/addon-a11y` to `apps/docs` and register it in `.storybook/main.ts`.
2. Add `@storybook/test-runner` + script `"test-storybook": "test-storybook"`.
3. Write `play` functions for the 8 stories above using `storybook/test`
   (`within`, `userEvent`, `expect`). Keep each play under ~15 lines, asserting the
   single key behavior listed.
4. CI: add a job that runs `pnpm --filter @ninna-ui/docs build` (storybook build) and
   then the test-runner against the static build
   (`test-storybook --ci` pattern with `http-server`/`concurrently`, per test-runner docs).
5. Run locally end-to-end before wiring CI.

## Acceptance criteria

- [ ] a11y panel available in Storybook dev mode.
- [ ] 8 interaction tests pass via `pnpm --filter @ninna-ui/docs test-storybook`.
- [ ] CI job builds Storybook and runs the test-runner.

## Verification

```bash
pnpm --filter @ninna-ui/docs build
pnpm --filter @ninna-ui/docs test-storybook
pnpm build && pnpm test && pnpm lint
```

## Sync checklist

- [ ] Note the new commands in `docs/standards/TESTING_STRATEGY.md`.
