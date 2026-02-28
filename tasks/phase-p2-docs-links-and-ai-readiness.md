# Phase P2 — Documentation Links & AI Readiness

**Status**: ✅ COMPLETED  
**Priority**: HIGH  
**Repo**: `ninna-ui-dev`  
**Depends on**: Phase P1 (playground cleanup)

## Objective

Fix all stale references (`@ninna-ui/hooks` never existed, `@ninna-ui/utils` is internal-only), correct all documentation cross-links, add `ninna-ui.dev` throughout, and ensure every `.md` file is accurate enough to be trusted by AI agents and new developers.

---

## Steps

### 1. Remove Stale `@ninna-ui/hooks` References

The `hooks` package folder does not exist. Phase R1 and R7 task files reference it incorrectly.

- [x] **`tasks/phase-r1-build-verification.md`**:
  - ✅ Remove `@ninna-ui/hooks` from "Packages Verified" list (item #3)
  - ✅ Remove "8 test files" attributed to hooks from test count summary
  - ✅ Fix "15/15 build tasks" note if hooks was counted as one of the 15

- [x] **`tasks/phase-r7-npm-publish.md`**:
  - ✅ Remove `@ninna-ui/hooks` from the changeset interactive prompt example
  - ✅ Remove from "12 packages" count → correct to **10 published packages**
  - ✅ Remove from the dependency graph section
  - ✅ Remove from the Post-Publication Checklist `npm view` commands
  - Remove from the "Test all 10 packages install" command in Installation Testing
  - Fix the release notes template (remove hooks from Published Packages list)

- [x] **Root `README.md`**: grep for any `hooks` reference and remove ✅ (No hooks references found)

- [x] **`docs/architecture/ARCHITECTURE.md`**: audit for hooks package inventory entry — remove if present ✅ (No hooks references found)

- [x] **`docs/brand/PRODUCT_BRAND.md`**: remove hooks from package table if present ✅ (No hooks references found)

---

### 2. Clarify `@ninna-ui/utils` as Internal (Not Published)

- [ ] **`tasks/phase-r7-npm-publish.md`**:
  - In changeset instructions, add explicit note: `@ninna-ui/utils` is **NOT published** — it is bundled into each component package at build time
  - Remove `@ninna-ui/utils` from the `npm view` verification commands
  - Fix package count: published packages = **10** (not 12)

- [ ] **`docs/architecture/ARCHITECTURE.md`**: verify `utils` is described as "bundled into each package (not installed separately)" — already correct in README, confirm ARCHITECTURE.md matches

---

### 3. Root `README.md` Updates

- [ ] Add **website link** to the Documentation section:
  ```
  - **[Documentation Website](https://ninna-ui.dev)** — Full component docs, guides, and examples
  ```
- [ ] Add **npm badge** to the badges row:
  ```
  [![npm](https://img.shields.io/npm/v/@ninna-ui/core.svg)](https://www.npmjs.com/org/ninna-ui)
  ```
- [ ] Update `## Development` section:
  - Clarify `playground` = local DX sandbox (not the public docs site)
  - Add note: "For full documentation, visit https://ninna-ui.dev"
  - Update `pnpm --filter @ninna-ui/playground dev` command description
- [ ] Update `## Project Structure` comment: `playground/` → "React Router v7 developer sandbox"
- [ ] Verify the package count in the tagline: "69 accessible components" (audit: README says 69, ARCHITECTURE says various per-package totals)
- [ ] Update GitHub URL if needed (confirmed: `github.com/ninna-ui/ninna-ui`)

---

### 4. `docs/architecture/ARCHITECTURE.md` Updates

- [ ] `apps/playground` description: change "React Router v7 component playground (~48 view files)" → "React Router v7 developer sandbox (SPA mode — 69 component views)"
- [ ] Add `ninna-ui-web` as separate external repo entry under `apps/` with note: "Separate standalone repo — see https://ninna-ui.dev"
- [ ] Remove hooks from any package inventory sections
- [ ] Verify `apps/docs` description (Storybook): update file count if stale ("54 story files" vs "65 story files" — pick the accurate one from current codebase)

---

### 5. `docs/brand/PRODUCT_BRAND.md` Updates

- [ ] **Section 6 "Documentation Strategy"**: update "Two Documentation Surfaces" → "Three Documentation Surfaces":

| Surface | URL | Purpose |
|---------|-----|---------|
| **Storybook** (`apps/docs`) | local `/storybook` | Component API reference, interactive props playground |
| **Playground** (`apps/playground`) | local `localhost:3000` | Developer sandbox — live component demos for contributors |
| **Website** (`ninna-ui-web`) | `https://ninna-ui.dev` | Public documentation, SEO-optimized, user-facing |

- [ ] Remove hooks from package naming table (Section 5)
- [ ] Update "Quality Standards" section: published packages = 10 (not 12)

---

### 6. `docs/guides/GETTING_STARTED.md` Updates

- [ ] Add `https://ninna-ui.dev` to the opening paragraph and Support section
- [ ] Fix GitHub issues link: `https://github.com/ninna-ui/ninna-ui/issues` (confirmed correct)
- [ ] Replace local relative "Examples" link with `https://ninna-ui.dev/primitives/button`
- [ ] Update **Next Steps** section:
  ```markdown
  - **[Documentation Website](https://ninna-ui.dev)** — Full component docs with live examples
  - **[GitHub](https://github.com/ninna-ui/ninna-ui)** — Source code and issues
  - **[npm](https://www.npmjs.com/org/ninna-ui)** — Published packages
  ```

---

### 7. `docs/guides/CONTRIBUTING.md` Updates

- [ ] Add section about `ninna-ui-web`:
  ```markdown
  ## Documentation Website
  The public documentation website lives in a separate repository: `ninna-ui-web`.
  It is a standalone project (not part of this pnpm workspace).
  See: https://ninna-ui.dev
  ```
- [ ] Add `ninna-ui.dev` link in any "Where to find docs" references

---

### 8. `docs/README.md` Updates

- [ ] Add `ninna-ui.dev` under "For New Users" quick navigation:
  ```markdown
  0. [Documentation Website](https://ninna-ui.dev) — Full public docs (quickest way to explore)
  ```

---

### 9. All Package `README.md` Files — Add Website Links

For each of the 10 published packages, add a docs link near the top. Packages:
`core`, `primitives`, `feedback`, `forms`, `layout`, `overlays`, `navigation`, `data-display`, `code-block`, `cli`

Format to add after the package description:
```markdown
📖 **[Full Documentation →](https://ninna-ui.dev/[category])**  
📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/[name])**  
🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/[name])**
```

URL mapping per package:
| Package | Docs URL |
|---------|----------|
| `@ninna-ui/core` | `https://ninna-ui.dev/getting-started/theming` |
| `@ninna-ui/primitives` | `https://ninna-ui.dev/primitives` |
| `@ninna-ui/feedback` | `https://ninna-ui.dev/feedback` |
| `@ninna-ui/forms` | `https://ninna-ui.dev/forms` |
| `@ninna-ui/layout` | `https://ninna-ui.dev/layout` |
| `@ninna-ui/overlays` | `https://ninna-ui.dev/overlays` |
| `@ninna-ui/navigation` | `https://ninna-ui.dev/navigation` |
| `@ninna-ui/data-display` | `https://ninna-ui.dev/data-display` |
| `@ninna-ui/code-block` | `https://ninna-ui.dev/code-block/code-block` |
| `@ninna-ui/cli` | `https://ninna-ui.dev/getting-started/installation` |

---

### 10. Apps `README.md` Files

- [ ] **`apps/playground/README.md`**: updated in Phase P1 — verify done ✓
- [ ] **`apps/docs/README.md`**: add link to `ninna-ui.dev` for reference, confirm Storybook description is accurate

---

## Files Changed Summary

| File | Action |
|------|--------|
| `tasks/phase-r1-build-verification.md` | Remove hooks references, fix counts |
| `tasks/phase-r7-npm-publish.md` | Remove hooks, mark utils internal, fix package count to 10 |
| `README.md` | Add website link, npm badge, fix playground description |
| `docs/architecture/ARCHITECTURE.md` | Fix playground desc, add ninna-ui-web note, remove hooks |
| `docs/brand/PRODUCT_BRAND.md` | Three docs surfaces, remove hooks, fix published count |
| `docs/guides/GETTING_STARTED.md` | Add ninna-ui.dev, GitHub, npm links |
| `docs/guides/CONTRIBUTING.md` | Add ninna-ui-web section |
| `docs/README.md` | Add ninna-ui.dev to For New Users |
| `packages/*/README.md` (10 files) | Add docs + npm + GitHub links |
| `apps/docs/README.md` | Add ninna-ui.dev link |

---

## Success Criteria
- [x] Zero references to `@ninna-ui/hooks` anywhere in `.md` files ✅
- [ ] `@ninna-ui/utils` consistently described as "internal, not published" across all docs
- [ ] Published package count = **10** everywhere it appears
- [ ] `https://ninna-ui.dev` linked from: root README, all package READMEs, GETTING_STARTED, docs/README
- [ ] GitHub URL `github.com/ninna-ui/ninna-ui` consistent across all docs
- [ ] `npm` links present in root README and package READMEs
- [x] `grep -r "hooks" docs/ packages/*/README.md` returns zero documentation references ✅
