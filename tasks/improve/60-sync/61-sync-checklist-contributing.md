# 61 — Permanent docs/Storybook sync checklist in CONTRIBUTING

Status: TODO
Phase: 4 · Priority: Medium · Size: XS

## Context

The project maintains four documentation surfaces that must stay in sync with any
component change:

1. Storybook stories (`apps/docs/src/stories/`)
2. Playground views (`apps/playground/app/views/`)
3. Public docs site (`ninna-ui-web/app/views/docs/`, separate repo folder)
4. AI-agent files (`ninna-ui-web/public/llms.txt`, `llms-full.txt`, `sitemap.xml`)

`docs/guides/CONTRIBUTING.md` has a component checklist (~lines 195-210) covering code
quality (ARIA, tokens, JSDoc) but NOT documentation-surface sync. Drift keeps recurring
(see tasks 11-15) because no checklist enforces it.

## Constraints

- Documentation only.

## Files to touch

- `docs/guides/CONTRIBUTING.md`

## Steps

1. Locate the existing component checklist in `CONTRIBUTING.md` (the `- [ ]` block
   around lines 195-210).
2. Append a new subsection "Documentation sync (required for any component change)":
   ```markdown
   ### Documentation Sync Checklist

   Any PR that changes a component's props, behavior, or styles MUST also update:

   - [ ] Storybook story: `apps/docs/src/stories/<category>/<Component>.stories.tsx`
   - [ ] Playground view: `apps/playground/app/views/<category>/`
   - [ ] Public docs (separate repo `ninna-ui-web`): `app/views/docs/<category>/`
   - [ ] `ninna-ui-web/public/llms.txt` + `llms-full.txt` (if the API is listed there)
   - [ ] Safelist: run `pnpm safelist` if any Tailwind class strings changed
   - [ ] Version constants if releasing: `apps/playground/app/constants/version.ts`
         AND `ninna-ui-web/app/constants/version.ts`
   ```
3. Cross-link from `docs/guides/DEVELOPMENT_RULES.md` ("see the Documentation Sync
   Checklist in CONTRIBUTING.md") if a natural place exists — one line max.

## Acceptance criteria

- [ ] CONTRIBUTING.md contains the sync checklist with all 6 items.
- [ ] Checklist placed adjacent to the existing component checklist.

## Verification

```powershell
Select-String -Path docs/guides/CONTRIBUTING.md -Pattern "Documentation Sync Checklist"
```

## Sync checklist

- N/A (this task creates the checklist).
