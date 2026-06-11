# 23 — Verify/restore changesets config and husky git hooks

Status: TODO
Phase: 1 · Priority: Medium · Size: S

## Context

Both `.changeset/` and `.husky/` directories at the monorepo root appear **empty**,
yet the root `package.json` references both:

- Scripts: `changeset`, `version-packages`, `release` (changesets)
- `.lintstagedrc.json` exists (109 bytes) — implies a husky `pre-commit` hook should run lint-staged
- DevDeps: `@changesets/cli`, `@changesets/changelog-github`

Without `.changeset/config.json`, `pnpm changeset` falls back to defaults (wrong
changelog generator, no `ignore` list for private apps). Without `.husky/pre-commit`,
lint-staged never runs.

## Constraints

- Restore configuration only — do not change release semantics (access: public,
  baseBranch main, changelog-github).

## Files to touch

- `.changeset/config.json` (CREATE if missing)
- `.husky/pre-commit` (CREATE if missing)
- `package.json` (root — add `"prepare": "husky"` script and `husky` devDep if absent)

## Steps

1. Inspect `.changeset/` and `.husky/` — folders may contain only gitignored content;
   confirm with `Get-ChildItem -Force`.
2. If `.changeset/config.json` missing, create it:
   ```json
   {
     "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
     "changelog": ["@changesets/changelog-github", { "repo": "ninna-ui/ninna-ui" }],
     "commit": false,
     "access": "public",
     "baseBranch": "main",
     "updateInternalDependencies": "patch",
     "ignore": ["@ninna-ui/playground", "@ninna-ui/docs"]
   }
   ```
   Verify the actual private app package names first
   (`apps/playground/package.json`, `apps/docs/package.json`) and use those in `ignore`.
3. Check `husky` is a devDependency; if not, add the latest 9.x and a
   `"prepare": "husky"` root script.
4. Create `.husky/pre-commit` containing:
   ```
   pnpm lint-staged
   ```
   (Confirm `lint-staged` is installed; if not, add devDep — `.lintstagedrc.json`
   already defines its config.)
5. Dry-run: `pnpm changeset status` and stage a trivial file + run
   `pnpm lint-staged` manually to confirm the config executes.

## Acceptance criteria

- [ ] `.changeset/config.json` exists with github changelog + private apps ignored.
- [ ] `pnpm changeset status` runs without config errors.
- [ ] `.husky/pre-commit` runs lint-staged (verified manually — no commit needed).

## Verification

```bash
pnpm changeset status
pnpm exec lint-staged --help
```

## Sync checklist

- [ ] `docs/guides/PUBLISHING.md` — confirm it describes the changesets flow accurately.
