# 62 — ninna-ui-web parity sweep vs v0.6.0

Status: TODO
Phase: 4 · Priority: Medium · Size: L

## Context

The public docs site (`d:\projects\ninna-ui\ninna-ui-web`) pins all `@ninna-ui/*`
packages at `0.6.0` and has `NINNA_UI_VERSION = "0.6.0"`, which is current — but no
systematic parity audit has been done between the library's actual exported API and
what each docs page documents. Earlier tasks (11, 14, 15) fix specific drift; this is
the final full sweep after all other improve tasks land.

Run this task LAST (after groups 10-50 are done).

## Constraints

- Documentation-site changes only — no library changes.
- No git operations; leave changes in the working tree.

## Files to touch (within `d:\projects\ninna-ui\ninna-ui-web`)

- `app/views/docs/**` (component documentation views)
- `public/llms.txt`, `public/llms-full.txt`
- `public/sitemap.xml` (regenerated via `scripts/generate-seo.js` on build)
- `app/views/marketing/*`, comparison page (counts/claims)

## Steps

1. **Build the inventory**: for each component package, list public exports from
   `packages/*/src/index.ts` in the monorepo. This is the source of truth.
2. **Page coverage check**: every exported component must have a docs view under
   `app/views/docs/<category>/` and a route. List `app/routes/_docs.*` files and diff
   against the inventory. Record missing/extra pages.
3. **Props parity (spot-check at depth)**: for each docs page's props table, compare
   against the component's `*.types.ts`. Prioritize components changed in versions
   0.4.0-0.6.0 (read per-package CHANGELOGs to find them). Fix wrong defaults, missing
   props, removed props.
4. **Counts and claims**: grep the web repo for component totals, package counts,
   test counts, theme counts (`Select-String -Pattern "69|12 pkg|708 tests"` etc.)
   and align with the authoritative numbers from task 14's `count-components.js`.
5. **llms.txt / llms-full.txt**: verify every component/package/guide URL listed
   actually resolves to a route; add missing entries for anything new.
6. **Changelog page**: confirm `app/views/docs/changelog/ChangelogView.tsx` includes
   0.4.0-0.6.0 (coordinates with task 11).
7. **Build + verify**: full typecheck/lint/build; click-test a sample of changed pages
   via `pnpm dev` if feasible.

## Acceptance criteria

- [ ] Inventory diff documented below (`## Parity Report`): pages missing, pages stale,
      claims fixed.
- [ ] Every exported component has an accurate docs page.
- [ ] llms.txt / llms-full.txt URLs all resolve.
- [ ] All numeric claims match authoritative sources.

## Verification

```bash
# from d:\projects\ninna-ui\ninna-ui-web
pnpm typecheck && pnpm lint && pnpm build
```

## Sync checklist

- [ ] `sitemap.xml` regenerated (happens via prebuild `generate-seo.js`).
- [ ] Update `ROUTING_STRUCTURE.md` route counts if pages were added.

## Parity Report

_(filled in by executor)_
