# /improve Task Suite — Overview

> Executable improvement tasks for the Ninna UI monorepo and the `ninna-ui-web` docs site.
> Generated from a full architect audit at **v0.6.0** (June 2026).
> Any agent (or human) can pick up a task file and execute it independently.

## Ground Rules (apply to EVERY task)

1. **NO breaking changes.** No prop removals/renames, no export removals, no new packages,
   no new components. Only additive or internal changes with defaults preserving current behavior.
2. **No git operations.** Do not commit, push, or open PRs. Leave all changes in the
   local working tree for the maintainer to review.
3. **Verification is mandatory.** Every task ends with its listed verification commands green.
   The baseline gate for any code change in the monorepo is:
   ```bash
   pnpm build && pnpm test && pnpm lint
   ```
   For packaging changes also run: `pnpm check-exports` and `pnpm check-pack`.
4. **Sync checklist.** If a task changes component behavior/props/styles, update ALL of:
   - Storybook story: `apps/docs/src/stories/<category>/<Component>.stories.tsx`
   - Playground view: `apps/playground/app/views/<category>/...`
   - Web docs page: `ninna-ui-web/app/views/docs/<category>/...` (separate repo folder:
     `d:\projects\ninna-ui\ninna-ui-web`)
   - `ninna-ui-web/public/llms.txt` and `llms-full.txt` if APIs are documented there
   - `packages/core` safelist: run `pnpm safelist` if any Tailwind class strings changed
5. **Follow existing conventions.** 4-file component pattern, `forwardRef` + `displayName`,
   `data-slot` attributes, semantic color tokens only, no `dark:` prefixes, no `'use client'`.
   See `docs/guides/DEVELOPMENT_RULES.md` and `docs/standards/COMPONENT_STANDARD.md`.

## Task Groups & Execution Order

| Phase | Group | Risk | Description |
|-------|-------|------|-------------|
| 1 | `10-docs-accuracy/` | None | Fix documentation drift (versions, counts, stale trees) |
| 1 | `20-hygiene/` | Low | Repo cleanup, toolchain alignment, build script extraction |
| 2 | `30-testing/` | Low | Backfill missing tests, CI quality gates, size budgets |
| 3 | `40-performance/` | Medium | Memoization, re-render audits, CSS weight audit |
| 4 | `60-sync/` | None | Docs-site/Storybook parity sweep + permanent sync checklist |

Within a group, execute tasks in numeric order. Tasks in different groups of the
same phase are independent and can run in parallel.

## Branch & PR Conventions

Each task group lives on its own branch, named with the conventional-commit types
enforced by `.github/workflows/pr-title.yml`
(`feat|fix|refactor|docs|chore|perf|test|style`):

| Group | Branch | PR title example |
|-------|--------|------------------|
| `10-docs-accuracy/` | `docs/improve-10-docs-accuracy` | `docs: fix documentation drift (improve 10)` |
| `20-hygiene/` | `chore/improve-20-hygiene` | `chore: repo hygiene cleanup (improve 20)` |
| `30-testing/` | `test/improve-30-testing` | `test: backfill coverage and CI gates (improve 30)` |
| `40-performance/` | `perf/improve-40-performance` | `perf: memoization and CSS weight audit (improve 40)` |
| `60-sync/` | `docs/improve-60-sync` | `docs: docs-site parity sweep (improve 60)` |

Note: `tasks/` is gitignored on `main`; task files are committed on their branches
with `git add -f`.

## Task File Template

Every task file follows this structure:

```
# NN — Title
Status: TODO | IN PROGRESS | DONE
Phase / Priority / Estimated size
## Context        — why this exists, evidence
## Constraints    — non-breaking rules specific to this task
## Files to touch — exact paths
## Steps          — numbered, mechanical
## Acceptance criteria — checkboxes
## Verification   — exact commands
## Sync checklist — docs/storybook/web updates (or "N/A")
```

When you finish a task, set its `Status:` line to `DONE` and check off acceptance criteria.

## Deferred Backlog (DO NOT implement in this cycle)

New-component competitive gaps recorded for a future cycle (explicitly excluded by maintainer):

- P1: Combobox/Autocomplete, DatePicker + DateRangePicker, Command palette, AlertDialog,
  Toggle + ToggleGroup, Collapsible
- P2: ContextMenu, HoverCard, Menubar, ScrollArea, Rating, TagsInput, Carousel
- Infra: `@ninna-ui/hooks` package, additional theme presets, FOUC-free color-mode script
