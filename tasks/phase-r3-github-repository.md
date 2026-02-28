# Phase R3 — GitHub Repository Setup

**Status**: PENDING  
**Priority**: CRITICAL  
**Depends on**: Phase R2

## Objective
Prepare the GitHub repository `ninna-ui/ninna-ui` for public release. Set up branch protection, CI/CD, issue templates, and community files.

## Steps

### 1. Create GitHub Organization & Repository
- [ ] Create `ninna-ui` GitHub organization (if not exists)
- [ ] Create `ninna-ui/ninna-ui` repository (public)
- [ ] Set repository description: "Modern React component library — Tailwind CSS v4, 5 themes, 69 accessible components"
- [ ] Set topics: `react`, `tailwindcss`, `component-library`, `design-system`, `typescript`, `accessibility`, `ui-components`
- [ ] Set homepage URL to documentation site (when deployed)

### 2. Branch Setup
- [ ] `main` branch as default
- [ ] Branch protection on `main`:
  - Require pull request reviews (1 reviewer minimum)
  - Require status checks to pass (build, typecheck, test, lint)
  - Require branches to be up to date
  - No force pushes
- [ ] Create `develop` branch for active development (optional)

### 3. GitHub Actions CI/CD

#### `.github/workflows/ci.yml` — PR Checks
```yaml
name: CI
on: [pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm test
```

#### `.github/workflows/release.yml` — Publish to npm
```yaml
name: Release
on:
  push:
    branches: [main]
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm, registry-url: https://registry.npmjs.org }
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: changesets/action@v1
        with:
          publish: pnpm release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 4. Issue & PR Templates

#### `.github/ISSUE_TEMPLATE/bug_report.md`
- Component name, version, browser, reproduction steps, expected vs actual

#### `.github/ISSUE_TEMPLATE/feature_request.md`
- Component/package, use case, proposed API, alternatives considered

#### `.github/PULL_REQUEST_TEMPLATE.md`
- Description, type (feat/fix/docs/refactor), checklist (tests, types, docs, changeset)

### 5. Community Files
- [ ] Verify `LICENSE` (MIT) is at repo root
- [ ] Verify `CONTRIBUTING.md` is accurate and complete
- [ ] Add `CODE_OF_CONDUCT.md` (Contributor Covenant)
- [ ] Add `SECURITY.md` with vulnerability reporting instructions

### 6. npm Organization
- [ ] Create `ninna-ui` npm organization
- [ ] Verify `@ninna-ui` scope is available or claimed
- [ ] Generate npm access token for CI (`NPM_TOKEN`)
- [ ] Add `NPM_TOKEN` to GitHub repository secrets

### 7. Repository Secrets
- [ ] `NPM_TOKEN` — npm publish token (automation type)
- [ ] `GITHUB_TOKEN` — auto-provided by GitHub Actions

## Success Criteria
- Repository is public on GitHub
- CI runs on every PR (build + typecheck + lint + test)
- Changesets action configured for automated releases
- npm organization ready with access token
- Issue/PR templates in place
