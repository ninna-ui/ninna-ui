# 14 — Component-count audit: single source of truth

Status: TODO
Phase: 1 · Priority: Medium · Size: M

## Context

Component counts disagree across documents:

- `README.md` says primitives=14, forms=17; headline "69 components"
- `docs/architecture/ARCHITECTURE.md` says primitives=15 (counts compound exports), forms=17
- `CHANGELOG.md` (0.1.0) says forms=18 (counted FormHelperText/FormErrorMessage separately)
- Per-package `package.json` descriptions also embed counts ("14 primitive React UI components…")

There is no script that derives these counts, so drift is inevitable.

## Constraints

- Documentation + a new read-only script. No runtime/library changes.
- Counting rule must be explicit and stable: **a "component" = a top-level component folder**
  in `packages/<pkg>/src/` (compound sub-components like `AvatarGroup`, `HStack`, `SelectItem`
  do NOT increase the count).

## Files to touch

- `scripts/count-components.js` (NEW)
- `README.md`
- `docs/architecture/ARCHITECTURE.md`
- `packages/*/package.json` (`description` fields, only where counts are wrong)
- `CHANGELOG.md` — do NOT edit historical entries; history stays as written.

## Steps

1. Create `scripts/count-components.js`:
   - For each component package (primitives, feedback, forms, layout, overlays,
     navigation, data-display, code-block), list directories in `src/` excluding
     `utils`, `__tests__`, and non-component folders (check each package for exceptions).
   - Print a table: package → count, plus a grand total.
   - Style-match `scripts/check-pack.js`.
2. Run it. Record the authoritative numbers.
3. Update `README.md` package table, headline count, and project-structure comments.
4. Update `ARCHITECTURE.md` package inventory headings ("### `@ninna-ui/primitives` - N Components")
   and the header summary count.
5. Fix `description` fields in `packages/*/package.json` where the count is wrong
   (description-only change; no version bump needed).
6. Add a one-line note to `docs/guides/DEVELOPMENT_RULES.md`: when adding/removing a
   component, run `node scripts/count-components.js` and update README + ARCHITECTURE.

## Acceptance criteria

- [ ] `node scripts/count-components.js` prints per-package + total counts.
- [ ] README, ARCHITECTURE, and package descriptions all match the script output.
- [ ] Counting rule documented in the script header comment.

## Verification

```bash
node scripts/count-components.js
pnpm build   # package.json description changes must not break packaging
pnpm check-exports
```

## Sync checklist

- [ ] `ninna-ui-web`: marketing pages cite component counts
      (e.g. `app/views/marketing/*`, comparison page, `llms.txt`). Grep for the old
      total ("69") in `d:\projects\ninna-ui\ninna-ui-web\app` and `public/` and update.
