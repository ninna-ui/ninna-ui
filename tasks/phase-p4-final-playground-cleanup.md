# Phase P4 — Final Playground Cleanup & Route Audit

**Status**: ✅ COMPLETED  
**Priority**: HIGH  
**Repo**: `ninna-ui-dev`  
**Depends on**: Phase P1, P2, P3 (completed)

## Objective

Complete the playground SPA migration by auditing all route files and components to ensure no SEO/SSR artifacts remain. Verify every component page is optimized for developer experience and AI agent readability.

---

## Background

Phases P1-P3 successfully migrated the playground to SPA mode and updated most documentation. This final phase ensures every route file and component is clean, consistent, and focused on DX rather than public website concerns.

---

## Steps

### 1. Remove Stale Task References

**Fix remaining `@ninna-ui/hooks` references in task files:**

- [ ] **`tasks/phase-r1-build-verification.md`**:
  - Line 52: Remove `@ninna-ui/hooks` from "Packages Verified" list (item #3)  
  - Line 53: Remove "8 test files" attributed to hooks from test count summary
  - Update package count if needed

- [ ] **`tasks/phase-p2-docs-links-and-ai-readiness.md`**:
  - Lines 20-33: Mark all hooks removal tasks as ✅ COMPLETED
  - Lines 185-186: Mark hooks criteria as ✅ COMPLETED

- [ ] **`tasks/phase-p3-pre-release-issues.md`**:
  - Lines 20, 33: Mark hooks references as resolved
  - Line 123: Remove hooks issue from critical issues table

### 2. Route File Meta Cleanup

Audit all component route files and remove any remaining SEO/meta exports:

**Files to check (69 component pages):**
```bash
apps/playground/app/routes/**/*.tsx
```

**Remove these exports if present:**
```typescript
export function meta() { ... }  // Remove entirely
```

**Keep these exports (needed for SPA):**
```typescript
export function handle() { ... }  // Keep for sidebar navigation
export default function ComponentName() { ... }  // Keep
```

**Specific routes to audit:**
- [ ] `getting-started.*.tsx` (5 files)
- [ ] `primitives.*.tsx` (15 files) 
- [ ] `feedback.*.tsx` (9 files)
- [ ] `forms.*.tsx` (17 files)
- [ ] `layout.*.tsx` (10 files)
- [ ] `overlays.*.tsx` (5 files)
- [ ] `navigation.*.tsx` (5 files)
- [ ] `data-display.*.tsx` (7 files)
- [ ] `code-block.*.tsx` (1 file)

### 3. Component Page Consistency

Ensure every component page follows the consistent structure:

**Required sections in order:**
1. **ComponentHeader** — Title, description, package import
2. **Usage** — Import example with `UsageExample`
3. **Demos** — Live interactive examples with `CodePreview`
4. **API Reference** — Props table with `PropsTable`
5. **Accessibility** — ARIA notes and keyboard support

**Audit for consistency:**
- [ ] All 69 component pages have ComponentHeader
- [ ] All have UsageExample section
- [ ] All have PropsTable section  
- [ ] All have Accessibility section
- [ ] Consistent heading hierarchy (h2, h3)
- [ ] No stray meta/SEO descriptions

### 4. Source Registry Verification

The new `sourceRegistry.ts` replaces the server-side loader:

- [ ] **`apps/playground/app/utils/sourceRegistry.ts`**:
  - Verify all 69 components are registered
  - Check import paths are correct
  - Ensure type assertions work: `(import.meta as unknown as { glob: ... })`
  - Test that `getSource()` returns correct file content

- [ ] **`apps/playground/app/components/docs/CodePreview.tsx`**:
  - Verify it uses `getSource()` from registry
  - No server-side loader imports
  - Works correctly in SPA mode

### 5. Layout Component Final Polish

**`apps/playground/app/components/layout/index.tsx`:**

- [ ] Confirm "Dev Playground · docs ↗" badge is present
- [ ] Verify footer links to `https://ninna-ui.dev`
- [ ] Check no SEO-related components remain
- [ ] Sidebar navigation works without server data
- [ ] Theme toggle functions correctly in SPA

### 6. Build Verification

**Final SPA build verification:**

- [ ] `pnpm --filter playground build` produces SPA output
- [ ] No `build/server/` folder created
- [ ] `build/client/index.html` exists
- [ ] All 69 component pages accessible via client-side routing
- [ ] No build errors or warnings

### 7. Performance Check

**SPA performance optimization:**

- [ ] Bundle size appropriate for dev tool (< 2MB total)
- [ ] Code splitting working for component pages
- [ ] No server-side runtime dependencies
- [ ] Fast cold start for local development

---

## Files Changed Summary

| File | Action |
|------|--------|
| `tasks/phase-r1-build-verification.md` | Remove hooks references |
| `tasks/phase-p2-docs-links-and-ai-readiness.md` | Mark hooks cleanup as completed |
| `tasks/phase-p3-pre-release-issues.md` | Remove hooks from issues table |
| `apps/playground/app/routes/**/*.tsx` | Remove meta() exports (69 files) |
| `apps/playground/app/utils/sourceRegistry.ts` | Verify complete component registry |
| `apps/playground/app/components/docs/CodePreview.tsx` | Confirm SPA-compatible source loading |

---

## Success Criteria

- [ ] Zero references to `@ninna-ui/hooks` in any task files
- [ ] All 69 component route files have no `meta()` exports
- [ ] Every component page follows consistent structure
- [ ] `sourceRegistry.ts` contains all 69 components
- [ ] `pnpm --filter playground build` produces clean SPA output
- [ ] Client-side routing works for all component pages
- [ ] Layout shows "Dev Playground" branding and links to ninna-ui.dev
- [ ] Bundle size and performance appropriate for development tool

---

## Completion

After this phase:
- ✅ Playground is 100% SPA-optimized developer sandbox
- ✅ All SEO/website concerns removed
- ✅ Consistent, clean component pages for DX and AI agents
- ✅ Ready for contributors to explore components locally
- ✅ Clean separation from ninna-ui-web public documentation site
