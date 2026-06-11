# 13 — ARCHITECTURE.md corrections

Status: DONE
Phase: 1 · Priority: High · Size: S

## Context

`docs/architecture/ARCHITECTURE.md` has four verified inaccuracies:

1. **A3 — CLI templates**: Line ~242 says "3 framework templates"; the CLI has **4**
   (`packages/cli/templates/`: vite-react, nextjs, react-router, astro). README.md:86
   correctly says 4.
2. **A4 — phantom folders**: The monorepo tree (lines ~43-56) shows a root `templates/`
   folder (templates actually live in `packages/cli/templates/`) and a root `tasks/`
   folder that did not exist until this improve cycle.
3. **A8 — story count**: Line ~26 says "54 story files", line ~250 says "65 story files".
   Actual count: 66 `*.stories.tsx` files under `apps/docs/src/stories/` (verify with
   command below).
4. **A10 — theme docs conflict**: Line ~130 says "The `data-theme` attribute is always
   required on `<html>`". The presets were updated to zero-config: every preset defines
   variables on `:root` as a fallback, so `data-theme` is OPTIONAL (only needed for
   multi-theme / per-section theming). Verify against `packages/core/src/theme/presets/default.css`
   selector structure before editing.

## Constraints

- Documentation only. Verify each fact against actual code before writing it.

## Files to touch

- `docs/architecture/ARCHITECTURE.md`

## Steps

1. Count stories: PowerShell
   `(Get-ChildItem -Recurse apps/docs/src/stories -Filter *.stories.tsx).Count`
   — use the real number in both places that mention story counts.
2. Fix the CLI section: "4 framework templates" + list astro; update the
   `@ninna-ui/cli` package-inventory paragraph (~line 242) as well.
3. Fix the monorepo tree: remove root `templates/` entry (note templates under
   `packages/cli/templates/` instead); update `tasks/` description to
   "improvement task files (tasks/improve/)".
4. Read `packages/core/src/theme/presets/default.css` to confirm the `:root` fallback
   pattern, then rewrite the "data-theme is always required" paragraph (~line 130) to
   describe zero-config behavior with `data-theme` as the multi-theme opt-in.
5. Sweep the rest of the file for other stale counts while editing (component counts are
   handled separately in task 14 — do not duplicate that work, but fix obvious typos).
6. Bump the "Last Updated" line in the file header.

## Acceptance criteria

- [x] Story count consistent in all mentions and matches the actual file count.
- [x] CLI documented as 4 templates everywhere in the file.
- [x] Monorepo tree matches the real directory layout.
- [x] Theme section accurately describes `:root` fallback + optional `data-theme`.

## Verification

```powershell
(Get-ChildItem -Recurse apps/docs/src/stories -Filter *.stories.tsx).Count
Select-String -Path docs/architecture/ARCHITECTURE.md -Pattern "3 framework templates|always required"
# second command must return no matches
```

## Sync checklist

- N/A (internal docs only).

## Findings

- A3, A4, A8 fixed (story count = 65; CLI = 4 templates; tree corrected; safelist.css added to theme tree).
- A10 DISPROVEN: presets/default.css has NO :root fallback - selectors are [data-theme=...] only, so 'data-theme is always required' in ARCHITECTURE.md is CORRECT and was left unchanged.

