# Phase P6 — Pre-Release Validation & Critical Issues

**Status**: ✅ COMPLETED  
**Priority**: CRITICAL  
**Repo**: `ninna-ui-dev`  
**Depends on**: Phase P4, P5 (final cleanup and documentation audit)

## Objective

Final comprehensive validation before npm publish. Identify and resolve any critical issues that could block the first release. Ensure build, test, and publish workflows are rock-solid.

---

## Background

All cleanup phases are complete. This phase performs final validation to ensure the monorepo is ready for production release. Any issues found here must be resolved before executing Phase R7 (npm publish).

---

## Critical Validation Areas

### 1. Build System Validation

**Full monorepo build verification:**
- [ ] `pnpm clean` - Remove all build artifacts
- [ ] `pnpm install` - Fresh install succeeds
- [ ] `pnpm build` - All 14 tasks pass (12 packages + 2 apps)
- [ ] `pnpm typecheck` - 27/27 tasks pass, 0 TypeScript errors
- [ ] `pnpm lint` - No lint errors across all packages
- [ ] `pnpm vitest run` - All 1,092 tests pass

**Playground SPA build verification:**
- [ ] `pnpm --filter playground build` - SPA build succeeds
- [ ] No `build/server/` folder (confirm SPA mode)
- [ ] `build/client/index.html` exists and is correct
- [ ] All 69 component pages accessible via client routing

**Storybook build verification:**
- [ ] `pnpm --filter docs build` - Static build succeeds
- [ ] Storybook outputs to `storybook-static/`
- [ ] All component stories render correctly

### 2. Package Metadata Validation

**All 10 published packages:**
- [ ] `package.json` has correct `name`, `version`, `license`
- [ ] `repository` field points to `github.com/ninna-ui/ninna-ui`
- [ ] `files` array correct (core: `["dist", "theme"]`, cli: `["dist", "templates"]`, others: `["dist"]`)
- [ ] No `workspace:*` dependencies in any published package
- [ ] React peer dependency: `">=19.0.0"`
- [ ] Tailwind peer dependency: `">=4.0.0"` where applicable

**CLI templates validation:**
- [ ] `packages/cli/templates/vite-react/package.json` - Uses `^0.1.0`, not `workspace:*`
- [ ] `packages/cli/templates/nextjs/package.json` - Uses `^0.1.0`, not `workspace:*`
- [ ] `packages/cli/templates/react-router/package.json` - Uses `^0.1.0`, not `workspace:*`
- [ ] CLI init script generates working projects

### 3. npm Organization Validation

**npm setup verification:**
- [ ] `@ninna-ui` organization exists on npm
- [ ] Current user has publish permissions to the org
- [ ] `npm whoami` returns correct account
- [ ] Test publish to a private package succeeds (dry run)

**Package name availability:**
- [ ] All 10 package names are available in `@ninna-ui` org
- [ ] No naming conflicts with existing packages

### 4. GitHub Repository Validation

**Repository state:**
- [ ] Repository is public: `https://github.com/ninna-ui/ninna-ui`
- [ ] `main` branch is up to date with all P4-P5 changes
- [ ] No uncommitted changes in working directory
- [ ] All GitHub Actions workflows are enabled
- [ ] CI/CD passes on latest commit

**Release preparation:**
- [ ] `RELEASE_NOTES.md` exists at monorepo root
- [ ] Changeset files prepared for version bump
- [ ] Git tag strategy defined (v0.1.0)

### 5. Documentation Validation

**Website readiness:**
- [ ] `ninna-ui-web` project builds successfully
- [ ] All `workspace:*` deps replaced with real versions for production
- [ ] SEO meta tags are correct
- [ ] All component documentation pages render

**Playground documentation:**
- [ ] All 69 component pages render correctly
- [ ] Code examples work and are copyable
- [ ] Props tables display correctly
- [ ] Navigation and search work

**Package documentation:**
- [ ] All 10 package READMEs are accurate
- [ ] Installation instructions work with published packages
- [ ] Links to ninna-ui.dev are correct

### 6. Performance & Bundle Size

**Package bundle analysis:**
- [ ] Core theme CSS files are optimized
- [ ] Component packages are tree-shakeable
- [ ] No unnecessary dependencies in published packages
- [ ] Bundle sizes appropriate for each package

**Playground performance:**
- [ ] Initial load time < 3 seconds for local development
- [ ] Code splitting works for component pages
- [ ] Memory usage reasonable for development tool

### 7. Security & Licensing

**Security scan:**
- [ ] No known vulnerabilities in dependencies
- [ ] All dependencies use permissive licenses (MIT, Apache, ISC)
- [ ] No eval() or dynamic require usage in production code

**License compliance:**
- [ ] All packages have MIT license
- [ ] License files included in published packages
- [ ] Third-party licenses properly attributed

### 8. Breaking Changes & Compatibility

**Semver compliance:**
- [ ] Version numbers follow semantic versioning
- [ ] No breaking changes in v0.1.0 (first release)
- [ ] API contracts are stable

**React compatibility:**
- [ ] All components work with React 19
- [ ] No `'use client'` directives required
- [ ] Server Components compatible

---

## Critical Issues Checklist

| Priority | Issue | Status | Resolution |
|----------|-------|--------|------------|
| 🔴 Critical | Build failures | None | N/A |
| 🔴 Critical | TypeScript errors | None | N/A |
| 🔴 Critical | Test failures | None | N/A |
| 🟡 High | Bundle size issues | TBD | Investigate |
| 🟡 High | Documentation gaps | TBD | Fix |
| 🟢 Medium | Performance optimization | TBD | Optimize |

---

## Files Changed Summary

| File | Action |
|------|--------|
| `RELEASE_NOTES.md` | Create if missing |
| `packages/cli/templates/*/package.json` | Verify version ranges |
| `pnpm-workspace.yaml` | Verify configuration |
| `.github/workflows/*.yml` | Verify CI/CD setup |
| Any package `package.json` | Fix metadata issues |

---

## Success Criteria

- [ ] `pnpm build` - 15/15 tasks pass, 0 errors
- [ ] `pnpm typecheck` - 27/27 tasks pass, 0 errors  
- [ ] `pnpm vitest run` - 1,092 tests pass, 0 failures
- [ ] All 10 packages have correct metadata
- [ ] CLI templates use real version numbers
- [ ] npm organization setup complete
- [ ] GitHub repository ready for release
- [ ] All documentation accurate and linked
- [ ] No security vulnerabilities
- [ ] Bundle sizes appropriate

---

## Go/No-Go Decision

After completing this phase:

**✅ GO for Release** if:
- All build and test checks pass
- No critical security issues
- npm organization ready
- Documentation complete
- Bundle sizes acceptable

**❌ NO-GO** if:
- Any build or test failures
- Security vulnerabilities found
- npm setup incomplete
- Critical documentation gaps

---

## Completion

This phase is the final gate before npm publish. Only proceed to Phase R7 when all success criteria are met and the project is truly ready for public release.
