# Phase R7 — npm Publish (First Release)

**Status**: PENDING  
**Priority**: CRITICAL  
**Depends on**: Phase R1, R2, R3, R4, R5, R6

## Objective
Execute the first public release of all **10 publishable** `@ninna-ui/*` packages to npm with proper versioning, changelog generation, and automated publishing workflow.

> **Published packages (10):** `core`, `primitives`, `feedback`, `layout`, `forms`, `overlays`, `navigation`, `data-display`, `code-block`, `cli`  
> **NOT published:** `utils` (bundled internally), `react-internal` (private Radix wrappers), `playground` (private), `docs` (private)

---

## Prerequisites

### 1. npm Account Setup
```bash
# Create npm account (if not exists)
# Visit: https://www.npmjs.com/signup

# Login to npm CLI
npm login
# Enter username, password, email, and OTP (if 2FA enabled)

# Verify authentication
npm whoami
```

### 2. npm Organization Setup
```bash
# Create @ninna-ui organization on npm
# Visit: https://www.npmjs.com/org/create
# Organization name: ninna-ui
# Type: Free (open source)

# Verify organization access
npm access ls-packages @ninna-ui
```

### 3. Two-Factor Authentication (Recommended)
```bash
# Enable 2FA for publishing
# Visit: https://www.npmjs.com/settings/<username>/tfa
# Choose "Authorization and Publishing" level

# Generate authentication token with publish permission
npm token create --read-only=false
# Save token securely for CI/CD
```

### 4. GitHub Repository Setup
- [ ] Repository is public: `https://github.com/ninna-ui/ninna-ui`
- [ ] All code pushed to `main` branch
- [ ] No uncommitted changes in working directory
- [ ] All CI checks passing

---

## Pre-Publish Validation

### Phase Completion Checklist
- [ ] **Phase R1**: All packages build, typecheck, lint, test pass
- [ ] **Phase R2**: All package.json metadata verified
- [ ] **Phase R3**: GitHub repo public, CI/CD configured, npm org ready
- [ ] **Phase R4**: CLI and templates validated
- [ ] **Phase R5**: Storybook and Playground verified
- [ ] **Phase R6**: All documentation reviewed

### Package Metadata Verification
```bash
# Verify all package.json files have correct fields
pnpm -r --filter="@ninna-ui/*" exec -- cat package.json | grep -E '"name"|"version"|"license"|"repository"'

# Check for workspace:* dependencies (should be none in final packages)
pnpm -r --filter="@ninna-ui/*" exec -- grep -l "workspace:" package.json
```

### Files Configuration Verification
Verify each package's `package.json` has correct `files` array:
- `@ninna-ui/core`: `["dist", "theme"]`
- `@ninna-ui/cli`: `["dist", "templates"]`
- All other packages: `["dist"]`

---

## Publishing Workflow

### Step 1: Clean Environment
```bash
# Remove all build artifacts and node_modules
pnpm clean
rm -rf node_modules packages/*/node_modules apps/*/node_modules

# Fresh install
pnpm install

# Verify lockfile is up to date
git status pnpm-lock.yaml
```

### Step 2: Full Build and Test
```bash
# Build all packages (excluding docs due to memory constraints)
pnpm build --filter=!@ninna-ui/docs

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Run tests
pnpm test --filter=!@ninna-ui/playground --filter=!@ninna-ui/docs

# Verify builds succeeded
ls -la packages/*/dist
```

### Step 3: Create Changesets
```bash
# Run changeset CLI
pnpm changeset

# Interactive prompts:
# 1. "Which packages would you like to include?"
#    → Select ALL 10 published packages:
#      @ninna-ui/core
#      @ninna-ui/primitives
#      @ninna-ui/feedback
#      @ninna-ui/layout
#      @ninna-ui/forms
#      @ninna-ui/overlays
#      @ninna-ui/navigation
#      @ninna-ui/data-display
#      @ninna-ui/code-block
#      @ninna-ui/cli
#    → DO NOT include: @ninna-ui/utils (internal), @ninna-ui/react-internal (private)

# 2. "Which packages should have a major bump?"
#    → NONE (press Enter)

# 3. "Which packages should have a minor bump?"
#    → ALL 10 packages (for initial 0.1.0 release)

# 4. Summary message:
#    → "Initial public release of Ninna UI component library"

# This creates .changeset/<random-id>.md file
```

### Step 4: Version Packages
```bash
# Apply changesets and update versions
pnpm version-packages

# This will:
# 1. Update all package.json versions to 0.1.0
# 2. Create CHANGELOG.md in each package
# 3. Update dependencies between packages
# 4. Remove the changeset file

# Verify versions updated
grep '"version"' packages/*/package.json

# Review generated CHANGELOGs
cat packages/core/CHANGELOG.md
cat packages/primitives/CHANGELOG.md
```

### Step 5: Commit Version Changes
```bash
# Stage version changes
git add .

# Commit with conventional message
git commit -m "chore: release v0.1.0"

# Push to GitHub
git push origin main
```

### Step 6: Dry Run (Package Inspection)
```bash
# Create tarball for inspection (dry run)
cd packages/core
npm pack --dry-run

# Verify package contents:
# ✓ Only dist/ files included
# ✓ package.json has correct version (0.1.0)
# ✓ No workspace:* dependencies
# ✓ theme/ directory included for @ninna-ui/core
# ✓ No src/ files leaked
# ✓ README.md included

# Inspect actual package size
npm pack
tar -tzf ninna-ui-core-0.1.0.tgz
rm ninna-ui-core-0.1.0.tgz

# Repeat for other critical packages
cd ../cli
npm pack --dry-run
# Verify templates/ directory included

cd ../..
```

### Step 7: Publish to npm
```bash
# Option A: Automated publish via changeset
pnpm release

# This runs:
# 1. turbo run build (rebuilds all packages)
# 2. changeset publish (publishes with --access public)
# 3. Creates git tags for each package@version

# Option B: Manual publish (if needed)
pnpm -r --filter="@ninna-ui/*" --filter="!@ninna-ui/react-internal" exec -- npm publish --access public

# Monitor output for errors
# Each package should show: + @ninna-ui/<name>@0.1.0
```

### Step 8: Verify Publication
```bash
# Check each package is live on npm
npm view @ninna-ui/core
npm view @ninna-ui/primitives
npm view @ninna-ui/forms
npm view @ninna-ui/overlays
npm view @ninna-ui/navigation
npm view @ninna-ui/data-display
npm view @ninna-ui/feedback
npm view @ninna-ui/layout
npm view @ninna-ui/code-block
# NOTE: @ninna-ui/utils is NOT published (internal bundle only)
# NOTE: @ninna-ui/react-internal is NOT published (private)
npm view @ninna-ui/cli

# Check organization page
# Visit: https://www.npmjs.com/org/ninna-ui

# Test installation in fresh project
mkdir /tmp/ninna-test && cd /tmp/ninna-test
pnpm init
pnpm add @ninna-ui/core @ninna-ui/primitives react react-dom
# Should install successfully with resolved dependencies

# Test CLI scaffolding
npx @ninna-ui/cli init test-app -t vite-react --preset default
cd test-app
pnpm install
pnpm dev
# Should start dev server successfully
```

### Step 9: Push Git Tags
```bash
# Changesets creates tags automatically
# Verify tags exist
git tag

# Push tags to GitHub
git push --tags

# Expected tags:
# @ninna-ui/core@0.1.0
# @ninna-ui/primitives@0.1.0
# @ninna-ui/forms@0.1.0
# ... (10 total)
```

### Step 10: Create GitHub Release
```bash
# Via GitHub CLI (recommended)
gh release create v0.1.0 \
  --title "Ninna UI v0.1.0 — Initial Release" \
  --notes "$(cat RELEASE_NOTES.md)" \
  --latest

# Or manually via GitHub UI:
# 1. Visit: https://github.com/ninna-ui/ninna-ui/releases/new
# 2. Tag: v0.1.0
# 3. Title: "Ninna UI v0.1.0 — Initial Release"
# 4. Description (example):
```

**Release Notes Template**:
```markdown
# Ninna UI v0.1.0 — Initial Release 🎉

We're excited to announce the first public release of **Ninna UI**, a modern React component library built with TypeScript, Tailwind CSS v4, and accessibility in mind.

## 📦 Published Packages

All packages are now available on npm under the `@ninna-ui` scope:

- **Core**
  - `@ninna-ui/core` — Design tokens, themes, and CSS utilities *(utils is bundled internally, not published separately)*

- **Component Packages**
  - `@ninna-ui/primitives` — Button, Badge, Avatar, Link, Text, Heading, Divider, etc.
  - `@ninna-ui/feedback` — Alert, Toast, Progress, Loading, Skeleton, Status
  - `@ninna-ui/layout` — Container, Stack, Grid, Spacer, Box, Center
  - `@ninna-ui/forms` — Input, Checkbox, Radio, Select, Switch, Slider, TextArea, Field
  - `@ninna-ui/overlays` — Modal, Drawer, Tooltip, Popover, Dropdown Menu
  - `@ninna-ui/navigation` — Tabs, Accordion, Breadcrumbs, Pagination, Stepper
  - `@ninna-ui/data-display` — Table, Card, Calendar, Tree

- **Developer Tools**
  - `@ninna-ui/code-block` — Syntax-highlighted code blocks
  - `@ninna-ui/cli` — Scaffolding tool with 3 starter templates

## 🚀 Quick Start

```bash
# Install core packages
pnpm add @ninna-ui/core @ninna-ui/primitives

# Or scaffold a new project
npx @ninna-ui/cli init my-app
```

## ✨ Key Features

- **69 Components** across 10 published packages
- **5 Built-in Themes** with DaisyUI-level color vibrancy
- **100% TypeScript** with full type definitions
- **Accessibility First** with ARIA attributes and keyboard navigation
- **Framework Agnostic** — works with Next.js, Remix, Vite, or vanilla React
- **Tailwind CSS v4** with CSS variable-based theming
- **Tree-shakeable** — import only what you need
- **SSR Compatible** with React 19 support

## 📚 Documentation

- **Live Playground**: https://ninna-ui.dev
- **Component Docs**: https://docs.ninna-ui.dev
- **GitHub**: https://github.com/ninna-ui/ninna-ui

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © Ninna-UI Team
```

---

## Post-Publication Checklist

### Immediate Verification (< 5 minutes)
- [ ] All 10 published packages visible on https://www.npmjs.com/org/ninna-ui
- [ ] Package README displays correctly on npm
- [ ] Version 0.1.0 shows as "latest" tag
- [ ] GitHub tags pushed and visible
- [ ] GitHub release created with v0.1.0

### Installation Testing (< 15 minutes)
```bash
# Test in fresh Vite project
npm create vite@latest test-ninna -- --template react-ts
cd test-ninna
pnpm add @ninna-ui/core @ninna-ui/primitives
# Add import and basic usage in App.tsx
pnpm dev

# Test CLI scaffolding
npx @ninna-ui/cli init test-cli-app -t nextjs --preset ocean
cd test-cli-app
pnpm install
pnpm dev

# Test all 10 published packages install without errors
pnpm add @ninna-ui/core @ninna-ui/primitives @ninna-ui/feedback @ninna-ui/layout @ninna-ui/forms @ninna-ui/overlays @ninna-ui/navigation @ninna-ui/data-display @ninna-ui/code-block @ninna-ui/cli
```

### Documentation Links (< 10 minutes)
- [ ] Update README.md with npm install badges
- [ ] Update website with "Install from npm" instructions
- [ ] Announce on social media / dev.to / Reddit r/reactjs
- [ ] Submit to awesome-react lists

---

## Troubleshooting

### Issue: "You do not have permission to publish"
```bash
# Solution 1: Verify npm login
npm whoami

# Solution 2: Verify organization membership
npm org ls ninna-ui

# Solution 3: Re-authenticate
npm logout
npm login
```

### Issue: "Package name already exists"
```bash
# Check if package exists
npm view @ninna-ui/core

# If squatted, request via npm support or choose different name
# If you own it, verify authentication
```

### Issue: "Version 0.1.0 already published"
```bash
# Increment patch version
pnpm changeset
# Select packages → patch bump → version-packages → publish
```

### Issue: "Workspace dependencies not resolved"
```bash
# Changesets should resolve workspace:* automatically
# Verify in package tarball:
npm pack
tar -tzf <package>.tgz package/package.json
# Should show exact versions, not workspace:*

# If not resolved, check changeset config in .changeset/config.json
```

### Issue: "Some packages failed to publish"
```bash
# Find which packages succeeded
npm view @ninna-ui/core version
npm view @ninna-ui/primitives version

# Re-publish failed packages individually
cd packages/<failed-package>
npm publish --access public

# Update git tags if needed
git tag @ninna-ui/<package>@0.1.0
git push origin @ninna-ui/<package>@0.1.0
```

---

## Rollback Procedures

### Within 72 Hours of Publish
```bash
# npm allows unpublish if < 72 hours and < 300 downloads
npm unpublish @ninna-ui/<package>@0.1.0

# Re-publish after fixing
npm publish --access public
```

### After 72 Hours
```bash
# Cannot unpublish, must publish patch version
# Fix issue, then:
pnpm changeset
# Select affected packages → patch bump
pnpm version-packages
pnpm release

# Mark deprecated (if needed)
npm deprecate @ninna-ui/<package>@0.1.0 "Critical bug, use 0.1.1+"
```

---

## Future Releases

### Patch Release (0.1.x)
```bash
# For bug fixes
pnpm changeset
# Select packages → patch
pnpm version-packages
git add . && git commit -m "chore: release v0.1.x"
git push
pnpm release
git push --tags
```

### Minor Release (0.x.0)
```bash
# For new features
pnpm changeset
# Select packages → minor
pnpm version-packages
git add . && git commit -m "chore: release v0.x.0"
git push
pnpm release
git push --tags
```

### Major Release (x.0.0)
```bash
# For breaking changes
pnpm changeset
# Select packages → major
pnpm version-packages
# Update migration guide
git add . && git commit -m "chore: release vx.0.0"
git push
pnpm release
git push --tags
```

---

## Automated Publishing (CI/CD)

### GitHub Actions Workflow
Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v2
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm release
          version: pnpm version-packages
          commit: 'chore: version packages'
          title: 'chore: version packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Setup Secrets
1. Go to GitHub repo → Settings → Secrets → Actions
2. Add `NPM_TOKEN`:
   - Generate: `npm token create`
   - Add token value

---

## Package Dependency Graph
```
@ninna-ui/core (no deps)
├── @ninna-ui/utils → core  [INTERNAL — bundled, not published]
│   ├── @ninna-ui/primitives → core, utils
│   ├── @ninna-ui/feedback → core, utils
│   ├── @ninna-ui/layout → core, utils
│   ├── @ninna-ui/data-display → core, utils
│   ├── @ninna-ui/code-block → core, utils
│   └── @ninna-ui/react-internal → core, utils  [PRIVATE — not published]
│       ├── @ninna-ui/forms → core, utils, react-internal
│       ├── @ninna-ui/overlays → core, utils, react-internal
│       └── @ninna-ui/navigation → core, utils, react-internal
└── @ninna-ui/cli (no runtime deps)
```

**Changesets automatically publishes in correct order based on this graph.**

---

## Success Criteria
- [x] All 10 published packages published to npm with version 0.1.0
- [x] No workspace:* dependencies in published packages
- [x] All packages installable: `pnpm add @ninna-ui/<name>`
- [x] CLI scaffolding works: `npx @ninna-ui/cli init`
- [x] GitHub release created with changelog
- [x] Git tags pushed for each package
- [x] npm organization page updated
- [x] Installation verified in fresh project
- [x] Documentation links updated

---

## Additional Resources
- [Changesets Documentation](https://github.com/changesets/changesets)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [npm Organization Management](https://docs.npmjs.com/orgs/)
