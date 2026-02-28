# Phase R4 — CLI & Template Validation

**Status**: PENDING  
**Priority**: HIGH  
**Depends on**: Phase R1

## Objective
Verify the CLI tool and all 3 starter templates work end-to-end. Templates must not contain `workspace:*` references and must install/build/run correctly as standalone projects.

## Steps

### 1. Template Package.json Audit
- [ ] `templates/vite-react/package.json` — no `workspace:*`, correct `@ninna-ui/*` versions
- [ ] `templates/nextjs/package.json` — no `workspace:*`, correct `@ninna-ui/*` versions
- [ ] `templates/remix/package.json` — no `workspace:*`, correct `@ninna-ui/*` versions
- [ ] All templates reference published package versions (e.g., `^0.1.0`)

### 2. Template CSS Setup
- [ ] Each template has correct CSS entry with `@import "tailwindcss"` + preset import
- [ ] `@source` directive points to correct `node_modules/@ninna-ui/*` path
- [ ] Vite templates use `@tailwindcss/vite`
- [ ] Next.js template uses `@tailwindcss/postcss`

### 3. Template Functionality
For each template (`vite-react`, `nextjs`, `remix`):
- [ ] `pnpm install` succeeds
- [ ] `pnpm dev` starts dev server without errors
- [ ] Demo page renders with Ninna UI components (Button, Heading, Text, Badge, Alert, Input)
- [ ] Theme switching works (change preset import)
- [ ] Dark mode works (`.dark` class toggle)
- [ ] `pnpm build` produces production build without errors

### 4. CLI Tool
- [ ] `npx @ninna-ui/cli init test-app` — interactive mode works
- [ ] `-t vite-react` flag works
- [ ] `-t nextjs` flag works
- [ ] `-t remix` flag works
- [ ] `--preset ocean` flag swaps theme preset in CSS
- [ ] `--skip-install` flag skips `pnpm install`
- [ ] Error handling: invalid template name, invalid preset, existing directory

### 5. CLI Package Build
- [ ] `@ninna-ui/cli` builds correctly
- [ ] `bin` field in package.json points to correct dist entry
- [ ] `files` field includes `dist` and `templates` directories
- [ ] Shebang (`#!/usr/bin/env node`) present in built output

## Success Criteria
- All 3 templates install, build, and run as standalone projects
- CLI scaffolds projects correctly with all flag combinations
- No `workspace:*` references in any template
- Theme preset switching works in all templates
