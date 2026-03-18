# @ninna-ui/data-display

## 0.4.1

### Patch Changes

- [`72e08d9eade52c6f3f0fa94199517753a5732cee`](https://github.com/ninna-ui/ninna-ui/commit/72e08d9eade52c6f3f0fa94199517753a5732cee) [#32](https://github.com/ninna-ui/ninna-ui/pull/32) Thanks [@chnkc41](https://github.com/chnkc41)! - docs: fix documentation consistency and version references
  - Add missing HTML setup sections with data-theme attribute to package READMEs
  - Update CLI template version references for consistency
  - Fix version constant documentation
  - Ensure all documentation accurately reflects theme setup requirements

- Updated dependencies [[`d4f6b998dbe79e6e3b4cd76be3f8742602b07c31`](https://github.com/ninna-ui/ninna-ui/commit/d4f6b998dbe79e6e3b4cd76be3f8742602b07c31), [`72e08d9eade52c6f3f0fa94199517753a5732cee`](https://github.com/ninna-ui/ninna-ui/commit/72e08d9eade52c6f3f0fa94199517753a5732cee)]:
  - @ninna-ui/core@0.4.1
  - @ninna-ui/utils@0.4.1

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

### Patch Changes

- Updated dependencies [[`a766345ed91d83f79fafb427858bacb234f36122`](https://github.com/ninna-ui/ninna-ui/commit/a766345ed91d83f79fafb427858bacb234f36122)]:
  - @ninna-ui/utils@0.4.0
  - @ninna-ui/core@0.4.0

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

- Updated dependencies [[`02cc545b1471c9986eea18bc0fded9fb9de4427d`](https://github.com/ninna-ui/ninna-ui/commit/02cc545b1471c9986eea18bc0fded9fb9de4427d), [`31be4238dc63b8d31d33c5ca4793955dd67a3f20`](https://github.com/ninna-ui/ninna-ui/commit/31be4238dc63b8d31d33c5ca4793955dd67a3f20), [`5d169f443ad7120742dc8bed37164c38b251ee5e`](https://github.com/ninna-ui/ninna-ui/commit/5d169f443ad7120742dc8bed37164c38b251ee5e)]:
  - @ninna-ui/core@0.3.5
  - @ninna-ui/utils@0.3.3

## 0.3.3

### Patch Changes

- [`c04d18c4ae4998d8d344545b32e31125233e8990`](https://github.com/ninna-ui/ninna-ui/commit/c04d18c4ae4998d8d344545b32e31125233e8990) [#18](https://github.com/ninna-ui/ninna-ui/pull/18) Thanks [@chnkc41](https://github.com/chnkc41)! - Tailwindcss safelist validation.
  Builds a minimal Tailwind CSS output using the ninna-ui theme and checks that every class token extracted from component source files has a corresponding CSS rule in the built output.
- Updated dependencies [[`c04d18c4ae4998d8d344545b32e31125233e8990`](https://github.com/ninna-ui/ninna-ui/commit/c04d18c4ae4998d8d344545b32e31125233e8990)]:
  - @ninna-ui/core@0.3.3

## 0.3.1

### Patch Changes

- [`5279ff2915abd1b01ff53a40f217f4fc1828e6a1`](https://github.com/ninna-ui/ninna-ui/commit/5279ff2915abd1b01ff53a40f217f4fc1828e6a1) [#15](https://github.com/ninna-ui/ninna-ui/pull/15) Thanks [@chnkc41](https://github.com/chnkc41)! - Fixed tailwindcss treeshaking class scanning

- Updated dependencies [[`5279ff2915abd1b01ff53a40f217f4fc1828e6a1`](https://github.com/ninna-ui/ninna-ui/commit/5279ff2915abd1b01ff53a40f217f4fc1828e6a1)]:
  - @ninna-ui/core@0.3.1

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

- Updated dependencies [[`992b089f83bee69e984968f16bcd11e5fb28dd17`](https://github.com/ninna-ui/ninna-ui/commit/992b089f83bee69e984968f16bcd11e5fb28dd17), [`fc5592107862b77fdc212034135bb6262a5c647d`](https://github.com/ninna-ui/ninna-ui/commit/fc5592107862b77fdc212034135bb6262a5c647d), [`78c530c1d32cb2a7ba847561640ff9bb6f59bafa`](https://github.com/ninna-ui/ninna-ui/commit/78c530c1d32cb2a7ba847561640ff9bb6f59bafa), [`fc5592107862b77fdc212034135bb6262a5c647d`](https://github.com/ninna-ui/ninna-ui/commit/fc5592107862b77fdc212034135bb6262a5c647d)]:
  - @ninna-ui/core@0.3.0

## 0.2.0

### Minor Changes

- [`b7e069425cab67c549e66321a007378df8848a23`](https://github.com/ninna-ui/ninna-ui/commit/b7e069425cab67c549e66321a007378df8848a23) [#3](https://github.com/ninna-ui/ninna-ui/pull/3) Thanks [@chnkc41](https://github.com/chnkc41)! - packages **must** include a changeset file.

### Patch Changes

- Updated dependencies [[`b7e069425cab67c549e66321a007378df8848a23`](https://github.com/ninna-ui/ninna-ui/commit/b7e069425cab67c549e66321a007378df8848a23), [`c04c5910c7596071b77a9e3df4e51b3071633544`](https://github.com/ninna-ui/ninna-ui/commit/c04c5910c7596071b77a9e3df4e51b3071633544)]:
  - @ninna-ui/core@0.2.0

## 0.1.0

### Minor Changes

- Initial release of Ninna UI

### Patch Changes

- Updated dependencies []:
  - @ninna-ui/core@0.1.0
