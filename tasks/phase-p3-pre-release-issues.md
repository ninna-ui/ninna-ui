# Phase P3 — Pre-Release Issues & Final Checks

**Status**: ✅ COMPLETED  
**Priority**: CRITICAL  
**Repo**: `ninna-ui-dev`  
**Depends on**: Phase P1, Phase P2, Phase R1–R6 (all completed)

## Objective

Final audit and validation pass before executing npm publish (Phase R7). Ensures the publish list is clean (10 packages, no hooks, no utils), documentation is accurate, and the release will succeed.

---

## Confirmed Facts (Do Not Re-debate)

| Item | Status |
|------|--------|
| Published packages | **10**: `core`, `primitives`, `feedback`, `forms`, `layout`, `overlays`, `navigation`, `data-display`, `code-block`, `cli` |
| `@ninna-ui/utils` | **NOT published** — bundled internally into each component package |
| `@ninna-ui/hooks` | **Does not exist** — no package folder, all references are stale |
| `@ninna-ui/react-internal` | **NOT published** — private Radix engine wrappers |
| GitHub URL | `https://github.com/ninna-ui/ninna-ui` |
| `ninna-ui-web` | **Separate standalone project** — not in this pnpm workspace |

---

## Steps

### 1. Fix `tasks/phase-r7-npm-publish.md` — Final Publish Checklist

This is the authoritative publish document. After P2 cleanup it must reflect reality:

- [ ] **Changeset prompt**: list exactly 10 packages (remove `@ninna-ui/utils`, `@ninna-ui/hooks`)
- [ ] **Dependency graph** at bottom of file: remove hooks entry, verify utils shows as NOT published
- [ ] **Post-publication checklist**: `npm view` commands for 10 packages only
- [ ] **Installation testing**: `pnpm add` command lists 10 packages only
- [ ] **Release notes template**: Published Packages section = 10 packages (remove hooks from "Core & Utilities")
- [ ] **GitHub Actions workflow**: `pnpm test` filters exclude correct packages

Correct 10-package list for `pnpm changeset` interactive prompt:
```
@ninna-ui/core
@ninna-ui/primitives
@ninna-ui/feedback
@ninna-ui/layout
@ninna-ui/forms
@ninna-ui/overlays
@ninna-ui/navigation
@ninna-ui/data-display
@ninna-ui/code-block
@ninna-ui/cli
```

### 2. Verify CLI Templates Have No `workspace:*` Deps

- [ ] Check `packages/cli/templates/vite-react/package.json` — `@ninna-ui/*` deps must use `^0.1.0` (not `workspace:*`)
- [ ] Check `packages/cli/templates/nextjs/package.json` — same
- [ ] Check `packages/cli/templates/react-router/package.json` — same
- [ ] Verify CLI's `init` script does NOT do runtime `workspace:*` → `latest` swap (was fixed in R1 — re-confirm)

### 3. Build & Test Final Verification

After P1 (playground SPA) and P2 (docs) changes:

- [ ] `pnpm build` — all packages + apps build successfully
- [ ] `pnpm typecheck` — 0 TypeScript errors (SPA mode changes may affect playground typecheck)
- [ ] `pnpm vitest run` — all tests pass
- [ ] `pnpm --filter playground build` — confirms SPA output (no `build/server/` folder)
- [ ] `pnpm lint` — no errors

### 4. `pnpm-workspace.yaml` Audit

- [ ] Confirm `ninna-ui-web` is NOT listed in workspace packages
- [ ] Confirm `apps/playground` and `apps/docs` are listed correctly
- [ ] Verify the workspace glob patterns match actual folder structure

### 5. Package `files` Field Audit

Each published package's `package.json` must have correct `files` array:
- [ ] `@ninna-ui/core`: `["dist", "theme"]` (includes CSS presets)
- [ ] `@ninna-ui/cli`: `["dist", "templates"]` (includes starter templates)
- [ ] All other 8 packages: `["dist"]`
- [ ] Confirm no `src/` files leak into published packages

### 6. Dependency Versions Audit

- [ ] No published package has `workspace:*` in its `dependencies` or `peerDependencies`
- [ ] All cross-package deps use correct semver (e.g. `@ninna-ui/core: "^0.1.0"`)
- [ ] React peer dep: `">=19.0.0"` on all component packages
- [ ] `tailwindcss` peer dep: `">=4.0.0"` where applicable

### 7. `CHANGELOG.md` (Root)

- [ ] Ensure root `CHANGELOG.md` is up to date
- [ ] Confirm changesets will auto-generate per-package `CHANGELOG.md` files on publish

### 8. Create `RELEASE_NOTES.md`

Create `RELEASE_NOTES.md` at monorepo root with the v0.1.0 release content (for GitHub release creation in Phase R7). Use the template from `phase-r7-npm-publish.md` but update:
- [ ] Use correct 10-package list (not 12)
- [ ] Add `ninna-ui.dev` as the documentation link
- [ ] Remove hooks from the package list
- [ ] Ensure component count is accurate (69 components)

### 9. npm Organization Pre-check

- [ ] Verify `@ninna-ui` npm organization exists at `https://www.npmjs.com/org/ninna-ui`
- [ ] Verify npm account has publish rights to the org
- [ ] Test `npm whoami` returns correct account

### 10. GitHub Repository Pre-check

- [ ] Repository at `https://github.com/ninna-ui/ninna-ui` is public
- [ ] `main` branch is up to date with all P1+P2 changes
- [ ] No uncommitted changes before creating changeset

---

## Critical Issues Found (Must Fix Before Release)

| # | Issue | File | Fix |
|---|-------|------|-----|
| � | `@ninna-ui/utils` listed in changeset publish steps | `phase-r7-npm-publish.md` | Mark as internal, remove from publish |
| 🟡 | Playground still has SSR enabled | `react-router.config.ts` | Fixed in Phase P1 ✅ |
| 🟡 | All docs lack `ninna-ui.dev` links | Multiple `.md` files | Fixed in Phase P2 ✅ |
| 🟡 | `ninna-ui-web/package.json` uses `workspace:*` deps | `ninna-ui-web/package.json` | Fixed in Phase W1 |

---

## Files Changed Summary

| File | Action |
|------|--------|
| `tasks/phase-r7-npm-publish.md` | Fix package list (10 pkgs), remove hooks/utils from publish steps |
| `packages/cli/templates/*/package.json` | Verify `^0.1.0` (not `workspace:*`) |
| `pnpm-workspace.yaml` | Verify ninna-ui-web NOT listed |
| `RELEASE_NOTES.md` | Create (new file) |

---

## Success Criteria
- [ ] `pnpm build` passes (all packages + apps)
- [ ] `pnpm typecheck` — 0 errors
- [ ] `pnpm vitest run` — 0 failures
- [ ] `phase-r7-npm-publish.md` lists exactly 10 published packages
- [ ] Zero `workspace:*` in CLI template `package.json` files
- [ ] `RELEASE_NOTES.md` exists at monorepo root
- [ ] `ninna-ui-web` NOT in `pnpm-workspace.yaml`
- [ ] Ready to execute Phase R7 (npm publish)
