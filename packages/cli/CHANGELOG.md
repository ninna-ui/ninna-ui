# @ninna-ui/cli

## 0.4.1

## 0.4.0

### Minor Changes

- [`a766345ed91d83f79fafb427858bacb234f36122`](https://github.com/ninna-ui/ninna-ui/commit/a766345ed91d83f79fafb427858bacb234f36122) [#30](https://github.com/ninna-ui/ninna-ui/pull/30) Thanks [@chnkc41](https://github.com/chnkc41)! - ### Minor Changes

  Introduce the new public internal architecture and coordinated package release.
  - Publish **@ninna-ui/utils** and **@ninna-ui/react-internal** as public npm packages.
  - All Ninna UI packages are now versioned together using a **Changesets fixed group**.
  - Consumers no longer need to install Radix UI dependencies directly - all Radix adapters are bundled inside **@ninna-ui/react-internal**.
  - Updated architecture documentation and contribution guidelines.
  - Fixed missing `react` and `react-dom` devDependencies in the overlays package.
  - Updated documentation and component counts to reflect the new public package structure.

  This release prepares the ecosystem for **v0.4.0 coordinated publishing** across all packages.

## 0.3.5

### Patch Changes

- [`02cc545b1471c9986eea18bc0fded9fb9de4427d`](https://github.com/ninna-ui/ninna-ui/commit/02cc545b1471c9986eea18bc0fded9fb9de4427d) [#24](https://github.com/ninna-ui/ninna-ui/pull/24) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: resolve React Router template hydration issues with minimal SSR fixes
  - Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
  - Maintain build-time dependencies in dependencies for npm compatibility

  Fixes hydration mismatch caused by Tailwind CSS v4's \__processed_\* attributes during SSR.

- [`31be4238dc63b8d31d33c5ca4793955dd67a3f20`](https://github.com/ninna-ui/ninna-ui/commit/31be4238dc63b8d31d33c5ca4793955dd67a3f20) [#27](https://github.com/ninna-ui/ninna-ui/pull/27) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: resolve Next.js template hydration issues with minimal SSR fixes
  - Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
  - Include minimal theme-init.js script to prevent FOUC with dark mode
  - Add className="light" to html element for consistent theme initialization
  - Add missing @types/node dependency for TypeScript support

  Fixes hydration mismatch caused by Tailwind CSS v4's \__processed_\* attributes during SSR.

- [`5d169f443ad7120742dc8bed37164c38b251ee5e`](https://github.com/ninna-ui/ninna-ui/commit/5d169f443ad7120742dc8bed37164c38b251ee5e) [#22](https://github.com/ninna-ui/ninna-ui/pull/22) Thanks [@chnkc41](https://github.com/chnkc41)! - ## Performance Improvements
  - Massive bundle size reduction (94% for overlays, 83% for forms, 95% for navigation)
  - Fixed modal responsive design for mobile devices
  - Made react-internal external to prevent bundling duplication
  - Updated dependencies for proper npm package compatibility

  ## Technical Changes
  - Updated tsup configs to externalize @ninna-ui/react-internal and @ninna-ui/utils
  - Added proper dependencies to package.json files
  - Maintained all functionality while dramatically reducing bundle sizes
  - All tests pass with new structure

- [`ba7d8f9cc5cb578fd8c0b3a25dc68ca5668e2561`](https://github.com/ninna-ui/ninna-ui/commit/ba7d8f9cc5cb578fd8c0b3a25dc68ca5668e2561) [#23](https://github.com/ninna-ui/ninna-ui/pull/23) Thanks [@chnkc41](https://github.com/chnkc41)! - ## CLI Templates Use Latest Versions
  - Updated all CLI template package versions to use `"latest"` tag
  - Templates now automatically install the newest stable version from npm
  - No more manual version updates needed in CLI templates
  - Future-proof solution - always gets latest optimizations and features
  - Applies to all templates: vite-react, nextjs, react-router

## 0.3.4

### Patch Changes

- Updated all CLI template package versions to use `"latest"` tag
- Templates now automatically install the newest stable version from npm
- No more manual version updates needed in CLI templates
- Future-proof solution - always gets latest optimizations and features
- Applies to all templates: vite-react, nextjs, react-router

## 0.3.3

### Patch Changes

- [`c04d18c4ae4998d8d344545b32e31125233e8990`](https://github.com/ninna-ui/ninna-ui/commit/c04d18c4ae4998d8d344545b32e31125233e8990) [#18](https://github.com/ninna-ui/ninna-ui/pull/18) Thanks [@chnkc41](https://github.com/chnkc41)! - Tailwindcss safelist validation.
  Builds a minimal Tailwind CSS output using the ninna-ui theme and checks that every class token extracted from component source files has a corresponding CSS rule in the built output.

## 0.3.1

### Patch Changes

- [`2a5a88df71e4ca57ad9fa6f893405b8c2df7c166`](https://github.com/ninna-ui/ninna-ui/commit/2a5a88df71e4ca57ad9fa6f893405b8c2df7c166) [#17](https://github.com/ninna-ui/ninna-ui/pull/17) Thanks [@chnkc41](https://github.com/chnkc41)! - ### Updated
  - Update CLI template package versions from 0.3.0 to 0.3.1
  - Update documentation version references to 0.3.1
  - Update ninna-ui-web dependencies to 0.3.1
  - Update Storybook versions to 10.2.16 in docs app

- [`5279ff2915abd1b01ff53a40f217f4fc1828e6a1`](https://github.com/ninna-ui/ninna-ui/commit/5279ff2915abd1b01ff53a40f217f4fc1828e6a1) [#15](https://github.com/ninna-ui/ninna-ui/pull/15) Thanks [@chnkc41](https://github.com/chnkc41)! - Fixed tailwindcss treeshaking class scanning

## 0.3.0

### Minor Changes

- [`fc5592107862b77fdc212034135bb6262a5c647d`](https://github.com/ninna-ui/ninna-ui/commit/fc5592107862b77fdc212034135bb6262a5c647d) [#13](https://github.com/ninna-ui/ninna-ui/pull/13) Thanks [@chnkc41](https://github.com/chnkc41)! - feat: v0.3.0 - component regression fixes and improvements

  ### Bug Fixes
  - **Tabs**: Fix vertical tabs - orientation now propagates via context to CVA variants; line variant renders `border-r` when vertical
  - **Input/Textarea/Select**: Fix double focus border - remove browser default outline with `outline-none focus:outline-none focus-visible:outline-none`; compound variants own the full focus ring
  - **Toast**: Fix viewport blocking clicks - add `pointer-events-none` to viewport container
  - **Loading dots**: Fix dots appearing as vertical lines - use `inline-flex` wrapper, proper `size-*` classes for round dots, `gap-1.5` spacing

  ### Improvements
  - **Loading dots**: Increased dot sizes across all breakpoints for better visibility
  - **Textarea**: Fix unused `fullWidth` lint error
  - Bump all packages to v0.3.0
  - Update all playground and docs meta version references to 0.3.0

### Patch Changes

- [`992b089f83bee69e984968f16bcd11e5fb28dd17`](https://github.com/ninna-ui/ninna-ui/commit/992b089f83bee69e984968f16bcd11e5fb28dd17) [#11](https://github.com/ninna-ui/ninna-ui/pull/11) Thanks [@chnkc41](https://github.com/chnkc41)! - feat: CLI hydration fixes and template updates to v0.2.0
  - Fix Next.js layout.tsx hydration: move Tailwind classes from body to wrapper div
  - Fix React Router root.tsx SSR: add Layout export, wrapper div, fix ScrollRestoration order
  - Fix init.ts preset prompt condition (was inverted)
  - Add data-theme swapping in init.ts for HTML/TSX files when non-default preset selected
  - Update all template READMEs with data-theme instructions for theme switching
  - Update playground InstallationView with data-theme steps for all frameworks
  - Add React type imports for React.ReactNode usage in templates
  - Update all CLI templates to use v0.2.0 packages and add missing packages
  - Enhance demo components with Card, Tabs, and CodeBlock

- [`78c530c1d32cb2a7ba847561640ff9bb6f59bafa`](https://github.com/ninna-ui/ninna-ui/commit/78c530c1d32cb2a7ba847561640ff9bb6f59bafa) [#10](https://github.com/ninna-ui/ninna-ui/pull/10) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: theme system - data-theme always required, fix dark mode selectors
  - Fix missing .dark [data-theme="default"] selector in default.css
  - Remove :root/:root.dark selectors from non-default presets
  - Update all documentation to reflect data-theme requirement
  - Fix playground ThemingView/ColorsView dark mode examples
  - Update Storybook CodeBlock example to remove :root
  - Fix architecture and getting-started docs with correct selector patterns
  - Fix CLI hydration issues and template package versions

## 0.2.0

### Minor Changes

- [`b7e069425cab67c549e66321a007378df8848a23`](https://github.com/ninna-ui/ninna-ui/commit/b7e069425cab67c549e66321a007378df8848a23) [#3](https://github.com/ninna-ui/ninna-ui/pull/3) Thanks [@chnkc41](https://github.com/chnkc41)! - packages **must** include a changeset file.

### Patch Changes

- [`c04c5910c7596071b77a9e3df4e51b3071633544`](https://github.com/ninna-ui/ninna-ui/commit/c04c5910c7596071b77a9e3df4e51b3071633544) [#4](https://github.com/ninna-ui/ninna-ui/pull/4) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: production CSS purge, theme fallback, safelist hardening

  ### @ninna-ui/core (minor)
  - **Filesystem `@source` scanning in `tailwind.css`**: Added `@source` directives pointing to core's own dist and all 8 sibling `@ninna-ui` package dist files. Tailwind now automatically scans every component's JS output when a consumer imports any theme preset - no manual `@source` directive needed.
  - **Hardened `@source inline()` safelist**: Removed redundant layout/sizing/typography/radius inlines that the filesystem scanner already detects. Kept only patterns the Tailwind v4 scanner cannot extract from JS: opacity modifiers (`bg-primary/10`), variant prefixes (`hover:`, `focus:`, `peer-checked:`, `data-[]`, `marker:`), stroke utilities, and custom `@utility` names. Added clear documentation explaining why each category exists.
  - **`:root` fallback on `default.css` only**: Removed `:root` from ocean/sunset/forest/minimal presets to prevent CSS cascade conflicts when multiple presets are imported.
  - **Toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions.

  ### @ninna-ui/cli (patch)
  - Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.

## 0.1.0

### Minor Changes

- Initial release of Ninna UI
