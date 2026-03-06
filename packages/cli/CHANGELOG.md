# @ninna-ui/cli

## 0.2.0

### Minor Changes

- [`b7e069425cab67c549e66321a007378df8848a23`](https://github.com/ninna-ui/ninna-ui/commit/b7e069425cab67c549e66321a007378df8848a23) [#3](https://github.com/ninna-ui/ninna-ui/pull/3) Thanks [@chnkc41](https://github.com/chnkc41)! - packages **must** include a changeset file.

### Patch Changes

- [`c04c5910c7596071b77a9e3df4e51b3071633544`](https://github.com/ninna-ui/ninna-ui/commit/c04c5910c7596071b77a9e3df4e51b3071633544) [#4](https://github.com/ninna-ui/ninna-ui/pull/4) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: production CSS purge, theme fallback, safelist hardening

  ### @ninna-ui/core (minor)
  - **Filesystem `@source` scanning in `tailwind.css`**: Added `@source` directives pointing to core's own dist and all 8 sibling `@ninna-ui` package dist files. Tailwind now automatically scans every component's JS output when a consumer imports any theme preset — no manual `@source` directive needed.
  - **Hardened `@source inline()` safelist**: Removed redundant layout/sizing/typography/radius inlines that the filesystem scanner already detects. Kept only patterns the Tailwind v4 scanner cannot extract from JS: opacity modifiers (`bg-primary/10`), variant prefixes (`hover:`, `focus:`, `peer-checked:`, `data-[]`, `marker:`), stroke utilities, and custom `@utility` names. Added clear documentation explaining why each category exists.
  - **`:root` fallback on `default.css` only**: Removed `:root` from ocean/sunset/forest/minimal presets to prevent CSS cascade conflicts when multiple presets are imported.
  - **Toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions.

  ### @ninna-ui/cli (patch)
  - Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.

## 0.1.0

### Minor Changes

- Initial release of Ninna UI
