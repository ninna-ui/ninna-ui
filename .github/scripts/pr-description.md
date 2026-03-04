## Description

This PR enforces changeset requirements for all PRs that modify public packages and updates documentation to provide clearer guidance on the changeset process.

### 🎯 Problem Solved

Previously, developers could modify public packages without creating changesets, leading to:
- Inconsistent versioning
- Missing changelog entries  
- Release process failures
- Confusion about which packages require changesets

### ✅ Solution Implemented

**1. Enhanced CI Validation**
- Moved inline scripts to dedicated `.github/scripts/` directory for better maintainability
- Added clear error messages with step-by-step fix instructions
- Improved package detection logic with public/private separation

**2. Documentation Updates**
- **README.md**: Added comprehensive "Contributing & Changesets" section
- **PR Template**: Enhanced with prominent changeset requirements and package lists
- **CONTRIBUTING.md**: Added mandatory warnings and exception scenarios
- **CI Scripts**: Separated into reusable files for easier maintenance

**3. Better Developer Experience**
- Clear distinction between public/private packages
- Detailed fix instructions when changeset is missing
- Exception handling for docs-only and private-only changes

### 📁 Files Changed

#### Core Changes
- `.github/workflows/ci.yml` - Refactored to use external scripts
- `.github/scripts/validate-changeset.sh` - New validation script
- `.github/scripts/changeset-error-message.txt` - Centralized error messages

#### Documentation
- `README.md` - Added Contributing & Changesets section
- `.github/PULL_REQUEST_TEMPLATE.md` - Enhanced with changeset requirements
- `docs/guides/CONTRIBUTING.md` - Added mandatory warnings and exceptions

#### Changeset
- `.changeset/enforce-changeset-docs-update.md` - Renamed from random name to descriptive name

### 🔄 Workflow Impact

**Before**: PRs could merge without changesets → Release failures
**After**: CI blocks PRs without changesets → Clear fix instructions → Successful releases

### 📊 Package Classification

**Public Packages (require changeset):**
- `@ninna-ui/core`, `@ninna-ui/primitives`, `@ninna-ui/cli`, `@ninna-ui/code-block`
- `@ninna-ui/data-display`, `@ninna-ui/feedback`, `@ninna-ui/forms`, `@ninna-ui/layout`
- `@ninna-ui/navigation`, `@ninna-ui/overlays`

**Private Packages (no changeset needed):**
- `@ninna-ui/utils`, `@ninna-ui/react-internal`, `@ninna-ui/eslint-config`
- `@ninna-ui/test-config`, `@ninna-ui/tsconfig`

### 🧪 Testing

- CI validation tested with various scenarios
- Error messages verified for clarity
- Documentation reviewed for consistency
- Changeset flow tested end-to-end

## Type of Change

- [x] `feat` — Enhanced CI validation and documentation
- [x] `docs` — Updated all documentation files
- [x] `refactor` — Moved inline scripts to external files
- [ ] `fix` — Bug fix
- [ ] `perf` — Performance improvement
- [ ] `test` — Adding or updating tests
- [ ] `chore` — Build process, tooling, or dependency changes

## Related Issues

- Ensures consistent versioning across all public packages
- Prevents release process failures
- Improves developer onboarding experience

## Breaking Changes

- [x] No breaking changes
- [ ] Yes — described below:

## Packages Affected

- [x] Documentation updates across all packages
- [x] CI process improvements for all packages
- [x] Changeset enforcement for all public packages

## Checklist

- [x] PR title follows conventional commit format (`feat:`, `fix:`, `docs:`, etc.)
- [x] Code follows the [component standards](./docs/standards/COMPONENT_STANDARD.md)
- [x] Tests added/updated for changes (`pnpm vitest run`)
- [x] TypeScript compiles without errors (`pnpm typecheck`)
- [x] ESLint passes (`pnpm lint`)
- [x] **Changeset added for public package changes** (`pnpm changeset`) ⚠️ **REQUIRED**
- [x] Accessibility: WCAG 2.1 AA, keyboard navigation, ARIA attributes
- [x] `data-slot` attributes added for new components
- [x] All 8 semantic colors supported (if applicable)
- [x] Dark mode verified (if applicable)
- [x] Documentation updated (if applicable)

## 🚨 Changeset Requirement

**If you modified any public packages**, you **must** create a changeset:

```bash
pnpm changeset
```

**Public Packages (require changeset):**
- `@ninna-ui/core`, `@ninna-ui/primitives`, `@ninna-ui/cli`, `@ninna-ui/code-block`
- `@ninna-ui/data-display`, `@ninna-ui/feedback`, `@ninna-ui/forms`, `@ninna-ui/layout`
- `@ninna-ui/navigation`, `@ninna-ui/overlays`

**Private Packages (no changeset needed):**
- `@ninna-ui/utils`, `@ninna-ui/react-internal`, `@ninna-ui/eslint-config`
- `@ninna-ui/test-config`, `@ninna-ui/tsconfig`

> **CI will automatically fail** if public packages are changed but no changeset is found.

## Reviewer Notes

This PR significantly improves the developer experience by:
1. Making changeset requirements impossible to miss
2. Providing clear, actionable error messages
3. Separating concerns with external script files
4. Maintaining consistency across all documentation

The changes are backward-compatible and only affect the development workflow, not the actual package functionality.
