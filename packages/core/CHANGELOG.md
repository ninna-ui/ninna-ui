# @ninna-ui/core

## 0.6.0

### Minor Changes

- [`7cc72f04f4ed6fde3c39223d1f9aa3c0f4b1aa54`](https://github.com/ninna-ui/ninna-ui/commit/7cc72f04f4ed6fde3c39223d1f9aa3c0f4b1aa54) [#47](https://github.com/ninna-ui/ninna-ui/pull/47) Thanks [@chnkc41](https://github.com/chnkc41)! - Standardize polymorphic pattern in layout components:
  - Refactored all layout components to correctly use `PolymorphicProps` without redundant `React` imports or casts.
  - Added polymorphic `as` prop support to `SimpleGrid` for semantic HTML rendering.
  - Updated `getResponsiveGridCols` to use the unified `ResponsiveValue<GridColumns>` type.
  - Fixed an issue where runtime-generated responsive grid classes were purged by Tailwind v4 by injecting a permanent runtime safelist block into `tailwind.css`.
  - Removed redundant `ReactNode` imports and `children` props from all layout component type definitions.

  Code quality and build improvements:
  - Extracted auto-generated safelist into dedicated `safelist.css` file; `tailwind.css` now imports it and stays stable between builds.
  - Created root `tsconfig.json` with workspace `paths` mapping all packages to their source files, fixing IDE "no declaration file" errors.
  - Removed no-op `cn()` wrapping in `Box` component and cleaned up unused import.
  - Cleaned verbose JSDoc comments from all `*.styles.ts` files for a cleaner, self-documenting codebase.

### Patch Changes

- [`3e5269037ab994ad930d95fd75b84fa04b36f5c1`](https://github.com/ninna-ui/ninna-ui/commit/3e5269037ab994ad930d95fd75b84fa04b36f5c1) [#54](https://github.com/ninna-ui/ninna-ui/pull/54) Thanks [@chnkc41](https://github.com/chnkc41)! - Updated `vitest` dependency to `4.1.4` across all packages for improved stability and security.

- [`ee48eaea1caec5d95587d9bf42063bbbe7b00ae7`](https://github.com/ninna-ui/ninna-ui/commit/ee48eaea1caec5d95587d9bf42063bbbe7b00ae7) [#52](https://github.com/ninna-ui/ninna-ui/pull/52) Thanks [@chnkc41](https://github.com/chnkc41)! - Release v0.6.0 Coordinated Update:
  - Synchronized repository-wide version constants to 0.6.0.
  - Updated documentation, guides, and release notes to reflect internal dependency changes.
  - Finalized package release configurations for the coordinated monorepo release.

- [`2cbc9877d8577d6b056e9142e9302e58ce18cf6a`](https://github.com/ninna-ui/ninna-ui/commit/2cbc9877d8577d6b056e9142e9302e58ce18cf6a) [#53](https://github.com/ninna-ui/ninna-ui/pull/53) Thanks [@chnkc41](https://github.com/chnkc41)! - - Migrated accessibility testing suite from `@sa11y/vitest` to `@sa11y/vitest` for improved security and Vite 8+ compatibility.
  - Applied security patches for Vite Dev Server vulnerabilities via dependency overrides.

## 0.5.0

### Minor Changes

- [`1446e5e4cb664310859a0c97b05df7200c024235`](https://github.com/ninna-ui/ninna-ui/commit/1446e5e4cb664310859a0c97b05df7200c024235) [#41](https://github.com/ninna-ui/ninna-ui/pull/41) Thanks [@chnkc41](https://github.com/chnkc41)! - # Design System Consistency and Component Refinements

  This release focuses on standardizing visual continuity, theme support, layout alignment, and accessibility across core component packages.

  ### Component Updates:
  - **Stepper & Timeline**: Re-engineered connector line logic to ensure perfect center-to-center bridging between indicators. Fixed gaps in horizontal and vertical layouts and implemented full brand/semantic color support for indicators and separators.
  - **Card**: Implemented comprehensive variant support including `solid`, `soft` (filled), and `outline`. Added cross-theme color propagation (primary, secondary, accent, neutral, success, danger, warning, info) and standardized header/footer alignment.
  - **Tree**: Refined indentation logic and branch line connectivity for complex nested structures. Added support for `disabled` states and customized folder/file icons.
  - **Checkbox & CheckboxGroup**: Standardized indeterminate state handling, uncontrolled/controlled synchronization, and consistent styling with the rest of the forms package.
  - **Slider**: Fixed accessibility issues by correctly mapping `aria-labelledby` from labels to internal slider components. Standardized `data-slot` mappings for testing parity.
  - **Blockquote**: Updated `solid` and `soft` variants for better visual distinction and WCAG contrast compliance.
  - **Documentation**: Established the "Neutral First" convention for all component examples. Synchronized API references, sidebars, and interactive demos across the Playground, Documentation site, and ninna-ui-web.

  ### Performance and Stability:
  - Resolved multiple TypeScript and ESLint issues across the monorepo, including `Unexpected any` and unused variable warnings.
  - Fixed unit test failures in the navigation and primitives packages related to component composition and variant styling.
  - Optimized bundle size by refining internal component dependency mappings.

### Patch Changes

- [`81659d72a15fe8b6f6ff5a4733635bb63740a1cb`](https://github.com/ninna-ui/ninna-ui/commit/81659d72a15fe8b6f6ff5a4733635bb63740a1cb) [#39](https://github.com/ninna-ui/ninna-ui/pull/39) Thanks [@chnkc41](https://github.com/chnkc41)! - fix: upgrade all dependencies to latest stable versions and resolve security vulnerabilities
  - Updated all packages to latest stable versions
  - Fixed security vulnerabilities by upgrading direct dependencies
  - Removed pnpm overrides as direct upgrades are sufficient
  - Updated eslint, typescript, react, and all other dependencies
  - All packages now report 0 vulnerabilities in pnpm audit
  - Fixed vitest worker timeout issues with single-threaded execution
  - All tests (708) now pass successfully after dependency upgrade

- [`820a3bcd0a81fc9d4b049c658761ab02cd8780e9`](https://github.com/ninna-ui/ninna-ui/commit/820a3bcd0a81fc9d4b049c658761ab02cd8780e9) [#43](https://github.com/ninna-ui/ninna-ui/pull/43) Thanks [@chnkc41](https://github.com/chnkc41)! - updated some package versions to keep up date date and safeyt for security

- [`2c160427b752236c316d3412e27a6301afb9da3e`](https://github.com/ninna-ui/ninna-ui/commit/2c160427b752236c316d3412e27a6301afb9da3e) [#37](https://github.com/ninna-ui/ninna-ui/pull/37) Thanks [@chnkc41](https://github.com/chnkc41)! - Major documentation overhaul: Enhanced README with refined positioning and messaging, updated all package READMEs and CHANGELOGs, improved theme presets documentation, enhanced security policy with CVSS scoring and severity classification, updated GitHub templates and workflows, and standardized documentation across all 12 packages and tooling.

## 0.4.1

### Patch Changes

- [`d4f6b998dbe79e6e3b4cd76be3f8742602b07c31`](https://github.com/ninna-ui/ninna-ui/commit/d4f6b998dbe79e6e3b4cd76be3f8742602b07c31) [#34](https://github.com/ninna-ui/ninna-ui/pull/34) Thanks [@chnkc41](https://github.com/chnkc41)! - Fixes critical modal centering issue on ninna-ui.dev production site. The modal was not properly centered due to missing negative translate CSS classes in the safelist.

  **Changes:**
  - Added missing negative translate classes: `-translate-x-1/2`, `-translate-y-1/2`, `sm:-translate-x-1/2`, `sm:-translate-y-1/2`
  - Fixed generator logic to properly categorize negative translate classes with variant prefixes
  - Manual safelist update applied due to generator priority bug
  - Rebuilt core package with updated CSS safelist

  **Impact:**
  - Modals now properly centered on both playground and production documentation
  - Resolves visual inconsistency between development and production environments

- [`72e08d9eade52c6f3f0fa94199517753a5732cee`](https://github.com/ninna-ui/ninna-ui/commit/72e08d9eade52c6f3f0fa94199517753a5732cee) [#32](https://github.com/ninna-ui/ninna-ui/pull/32) Thanks [@chnkc41](https://github.com/chnkc41)! - docs: fix documentation consistency and version references
  - Add missing HTML setup sections with data-theme attribute to package READMEs
  - Update CLI template version references for consistency
  - Fix version constant documentation
  - Ensure all documentation accurately reflects theme setup requirements

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

## 0.3.3

### Patch Changes

- [`c04d18c4ae4998d8d344545b32e31125233e8990`](https://github.com/ninna-ui/ninna-ui/commit/c04d18c4ae4998d8d344545b32e31125233e8990) [#18](https://github.com/ninna-ui/ninna-ui/pull/18) Thanks [@chnkc41](https://github.com/chnkc41)! - Tailwindcss safelist validation.
  Builds a minimal Tailwind CSS output using the ninna-ui theme and checks that every class token extracted from component source files has a corresponding CSS rule in the built output.

## 0.3.1

### Patch Changes

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

- [`fc5592107862b77fdc212034135bb6262a5c647d`](https://github.com/ninna-ui/ninna-ui/commit/fc5592107862b77fdc212034135bb6262a5c647d) [#13](https://github.com/ninna-ui/ninna-ui/pull/13) Thanks [@chnkc41](https://github.com/chnkc41)! - chore: remove unused core class maps and tighten types

  ### Internal Cleanup
  - Remove 24 unused Record<Color, string> class maps from @ninna-ui/core
    - Delete states.ts (9 unused maps: FOCUS_RING_COLORS, etc.)
    - Delete variants.ts (5 unused maps: SOLID_VARIANTS, etc.)
    - Delete typography.ts (2 unused maps: TEXT_SIZE_CLASSES, TEXT_WEIGHT_CLASSES)
    - Delete radius.ts (1 unused map: RADIUS_CLASSES)
    - Remove 5 unused maps from base.ts (TEXT_MUTED_COLORS, SOFT_BG_COLORS, etc.)
    - Keep 5 actively used maps in base.ts (BG_COLORS, TEXT_COLORS, etc.)

  ### Type Improvements
  - Tighten loose string types in components
    - alert.tsx: AlertIcon size prop uses Size type instead of string
    - alert.styles.ts: ALERT_ICON_SIZES uses Record<Size, string>
    - loading.tsx: DOT_SIZES uses Record<SpinnerSize, string>

  ### Architecture Improvements
  - Eliminate duplicate layout type definitions
    - layout/src/types.ts now re-exports from @ninna-ui/core
    - Removes 11 duplicate type definitions (ContainerMaxWidth, FlexDirection, etc.)

  ### Build Optimization
  - Optimize tailwind.css @source inline() directives
    - Remove ~62 redundant lines that duplicate filesystem @source detection
    - Keep essential semantic color, opacity, hover, focus, peer-checked, data-state blocks
    - Keep custom animation utilities (animate-in, slide-in-from-\*, etc.)
  - Update barrel exports to remove empty module references
    - Remove export \* for deleted/empty files from index.ts barrels

  ### Impact
  - Reduces @ninna-ui/core bundle size by removing dead exports
  - Improves type safety with stricter component prop typing
  - Eliminates duplicate type definitions across packages
  - Optimizes Tailwind CSS generation by removing redundant @source directives

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
