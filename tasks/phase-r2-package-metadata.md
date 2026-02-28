# Phase R2 — Package Metadata & npm Readiness

**Status**: ✅ COMPLETED  
**Priority**: CRITICAL  
**Depends on**: Phase R1  
**Completed**: February 2026

## Objective
Ensure every publishable package has correct, complete npm metadata. Verify package.json fields, exports, and files configuration for a clean first publish.

## Publishable Packages (10)
`core`, `primitives`, `feedback`, `layout`, `forms`, `overlays`, `navigation`, `data-display`, `code-block`, `cli`

**NOT published**: `utils` (bundled internally into each package), `react-internal` (private: true)


## Per-Package Checklist

### 1. Required Fields
- [x] `name` — correct `@ninna-ui/<name>` scope (all 13)
- [x] `version` — `0.1.0` (pre-release) on all packages
- [x] `description` — accurate, concise
- [x] `license` — `MIT`
- [x] `author` — `Ninna-UI Team`
- [x] `repository.url` — `https://github.com/ninna-ui/ninna-ui.git`
- [x] `repository.directory` — correct `packages/<name>`
- [x] `homepage` — all 13 packages (added to react-internal)
- [x] `bugs.url` — all 13 packages (added to react-internal)
- [x] `keywords` — relevant, includes `ninna-ui`

### 2. Exports Configuration
- [x] `type: "module"` — ESM-first (all 13)
- [x] `main` — `./dist/index.cjs` (11 library packages)
- [x] `module` — `./dist/index.js` (11 library packages)
- [x] `types` — `./dist/index.d.ts` (11 library packages)
- [x] `exports` — conditional exports with `import`/`require` + types (all 12 + CLI)
- [x] `files` — `["dist"]` only (no source shipped)
- [x] `sideEffects: false` — tree-shaking enabled (all 12 library packages)

### 3. Core Package CSS Exports
- [x] `@ninna-ui/core` has CSS export paths in `exports` field
- [x] `exports["./theme/presets/*.css"]` maps to `./src/theme/presets/*.css`
- [x] Theme presets accessible via `@ninna-ui/core/theme/presets/default.css`
- [x] `files` includes both `dist` and `src/theme`

### 4. CLI Package
- [x] `bin` field points to `./dist/index.js`
- [x] `exports` field added
- [x] `templates/` directory included in `files`
- [x] All 3 templates have `^0.1.0` for @ninna-ui deps (no `workspace:*`)

### 5. Peer Dependencies
- [x] All 8 component packages: `react: ">=19.0.0"`, `react-dom: ">=19.0.0"`
- [x] `utils`: `react: ">=19.0.0"` (optional peer dep — composeRefs uses React refs, not published)
- [x] `core`: no peer deps (pure TS/CSS)
- [x] `cli`: no peer deps (standalone tool)

### 6. Private Package
- [x] `react-internal` has `"private": true`
- [x] `react-internal` has `homepage` and `bugs` fields (added)

## Fixes Applied
- **@types/react**: `^18.2.0` → `^19.0.0` across all 11 packages
- **@types/react-dom**: `^18.2.0` → `^19.0.0` across all 10 packages
- **React 19 type fixes**: `JSX.Element` → `React.JSX.Element`, `child.props` casts, `cloneElement` ref handling, `PropsOf` type rewrite, `onToggle` omit in TreeItemProps
- **CLI**: Added `exports` field
- **react-internal**: Added `homepage` and `bugs` fields

## Success Criteria — ALL MET
- ✅ 10 packages ready for npm publish
- ✅ All metadata fields correct
- ✅ No `workspace:*` references in template output
- ✅ CSS exports work for `@ninna-ui/core`
- ✅ 15/15 build, 27/27 typecheck, 140 test files / 1,092 tests pass
