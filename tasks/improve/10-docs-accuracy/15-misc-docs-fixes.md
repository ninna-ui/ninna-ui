# 15 — Misc documentation fixes (docs index, version doc, web routing doc)

Status: TODO
Phase: 1 · Priority: Medium · Size: S

## Context

Three smaller verified drift items:

1. **A6** — `docs/README.md` directory tree (lines ~21-25) lists 4 files under `guides/`
   but the folder contains 5: `PUBLISHING.md` is missing from the tree and from the
   "Quick Navigation" sections.
2. **A7** — `docs/VERSION_CONSTANT.md` says the web docs version constant is "Future"
   (lines ~60-62), but `ninna-ui-web/app/constants/version.ts` already exists and exports
   `NINNA_UI_VERSION = "0.6.0"`.
3. **A9** — `ninna-ui-web/ROUTING_STRUCTURE.md` documents `_marketing.*` route files,
   but the repo was restructured to `_site.*` prefixes (verify against
   `ninna-ui-web/app/routes/` before editing).

## Constraints

- Documentation only. Verify each claim against the filesystem before writing.

## Files to touch

- `docs/README.md`
- `docs/VERSION_CONSTANT.md`
- `d:\projects\ninna-ui\ninna-ui-web\ROUTING_STRUCTURE.md`

## Steps

1. `docs/README.md`: add `PUBLISHING.md` to the guides tree with a short description
   ("Release and npm publishing workflow"); add it under "For Maintainers" navigation.
2. `docs/VERSION_CONSTANT.md`: change the "Web Docs (Future)" section to "Web Docs",
   stating the constant exists at `ninna-ui-web/app/constants/version.ts` and must be
   bumped together with `apps/playground/app/constants/version.ts` on each release.
   Also fix the "Implementation Notes" claim "exported from the core package" if untrue
   (check `packages/core/src/index.ts` for a version export first).
3. `ninna-ui-web/ROUTING_STRUCTURE.md`:
   - List actual route files: `Get-ChildItem d:\projects\ninna-ui\ninna-ui-web\app\routes`
   - Replace every `_marketing.*` reference with the actual prefix (`_site.*`).
   - Verify the views-folder tree matches `app/views/` (e.g. `ExampleCard.tsx` may have
     been renamed `BlockCard.tsx` — list the folder and use real names).
   - Update route-count claims to the actual number.

## Acceptance criteria

- [ ] `docs/README.md` tree matches `docs/guides/` contents exactly.
- [ ] `VERSION_CONSTANT.md` reflects the existing web constant and the dual-bump rule.
- [ ] `ROUTING_STRUCTURE.md` contains zero stale `_marketing` references (unless files
      genuinely still use that prefix) and matches the live `app/routes/` listing.

## Verification

```powershell
Select-String -Path "d:\projects\ninna-ui\ninna-ui-web\ROUTING_STRUCTURE.md" -Pattern "_marketing"
# must return no matches (assuming routes were renamed to _site.*)
```

## Sync checklist

- N/A (internal docs only).
