# Publishing Ninna UI Packages

> **Complete npm publishing workflow for the Ninna UI monorepo** - Changesets-based version management, automated CI/CD publishing, fixed versioning across all 12 packages, and emergency rollback procedures.
>
> **Version:** 1.0.0 · **Last Updated:** February 2026

---

## Overview

Ninna UI uses Changesets for version management and publishing to npm. This guide covers the complete publishing workflow.

## Prerequisites

- **Node.js**: >=20.0.0
- **pnpm**: >=9.0.0
- **npm token**: Configured in `.npmrc`
- **GitHub access**: For changelog generation

## Publishing Workflow

### 1. Create Changeset

```bash
pnpm changeset
```

**Important:** When prompted for packages, **exclude private packages**:

#### ✅ Public Packages (Include)
- @ninna-ui/core
- @ninna-ui/utils
- @ninna-ui/react-internal
- @ninna-ui/primitives  
- @ninna-ui/cli
- @ninna-ui/code-block
- @ninna-ui/data-display
- @ninna-ui/feedback
- @ninna-ui/forms
- @ninna-ui/layout
- @ninna-ui/navigation
- @ninna-ui/overlays

#### ❌ Private Packages (Exclude)
- @ninna-ui/eslint-config
- @ninna-ui/test-config
- @ninna-ui/tsconfig

**Why?** Private packages are:
- Only used in development (`devDependencies`)
- Not published to npm (`private: true`)
- Internal workspace tools (linting, testing, TypeScript configs)

### 2. Choose Version Type

- **minor**: New features (use for initial releases)
- **patch**: Bug fixes
- **major**: Breaking changes

For first releases, use **minor** (0.0.0 → 0.1.0).

### 3. Add Summary

Describe the changes:
```
Initial release of Ninna UI packages with core components and design tokens
```

### 4. Update Versions

```bash
# Must be on main branch
pnpm version-packages
```

This:
- Updates all package versions
- Updates `workspace:*` dependencies to actual versions
- Generates CHANGELOG.md

### 5. Build and Publish

```bash
pnpm release
```

This runs:
```bash
pnpm build && changeset publish
```

## Version Strategy

### Fixed Packages

All public packages are versioned together (defined in `.changeset/config.json`):

```json
"fixed": [
  ["@ninna-ui/core", "@ninna-ui/primitives", "@ninna-ui/cli", ...]
]
```

### Internal Dependencies

Changeset automatically updates internal dependencies:
```json
// Before
"@ninna-ui/core": "workspace:*"

// After version-packages
"@ninna-ui/core": "^0.1.0"
```

## Troubleshooting

### Changeset Shows Private Packages

Manually deselect them using **spacebar** when prompted:
```
Which packages would you like to include?
[ ] @ninna-ui/utils          # Press space to deselect
[ ] @ninna-ui/react-internal # Press space to deselect
[*] @ninna-ui/core           # Keep selected
```

### Build Failures

Ensure all packages build: `pnpm build`
- All tests pass: `pnpm vitest run` 

Fix any build errors before publishing.

### npm Authentication

Check your `.npmrc`:
```ini
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

Or set environment variable:
```bash
export NPM_TOKEN=your_token
```

## Post-Publish

1. **GitHub Release**: Changeset creates GitHub releases automatically
2. **Changelog**: Updated in CHANGELOG.md
3. **npm Registry**: Packages available at npmjs.com

## Verification

```bash
# Check published packages
npm view @ninna-ui/core
npm view @ninna-ui/primitives

# Install fresh copy
npm install @ninna-ui/core@latest
```

## Emergency Rollback

If something goes wrong:

1. **Unpublish** (within 72 hours):
```bash
npm unpublish @ninna-ui/core@0.1.0
```

2. **Republish** fixed version:
```bash
pnpm changeset  # Create emergency changeset
pnpm version-packages
pnpm release
```

## Best Practices

- **Test thoroughly** before publishing
- **Use semantic versioning** correctly
- **Document breaking changes** in changeset summary
- **Monitor npm downloads** after release
- **Keep GitHub releases** in sync with npm

---

For more information, see:
- [Changesets Documentation](https://github.com/changesets/changesets)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/publishing-packages)
- [Contributing Guide](./CONTRIBUTING.md)
