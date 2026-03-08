# @ninna-ui/core

## 0.3.0

### Minor Changes

- [`fc5592107862b77fdc212034135bb6262a5c647d`](https://github.com/ninna-ui/ninna-ui/commit/fc5592107862b77fdc212034135bb6262a5c647d) [#13](https://github.com/ninna-ui/ninna-ui/pull/13) Thanks [@chnkc41](https://github.com/chnkc41)! - feat: v0.3.0 — component regression fixes and improvements

  ### Bug Fixes
  - **Tabs**: Fix vertical tabs — orientation now propagates via context to CVA variants; line variant renders `border-r` when vertical
  - **Input/Textarea/Select**: Fix double focus border — remove browser default outline with `outline-none focus:outline-none focus-visible:outline-none`; compound variants own the full focus ring
  - **Toast**: Fix viewport blocking clicks — add `pointer-events-none` to viewport container
  - **Loading dots**: Fix dots appearing as vertical lines — use `inline-flex` wrapper, proper `size-*` classes for round dots, `gap-1.5` spacing

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
  - **Filesystem `@source` scanning in `tailwind.css`**: Added `@source` directives pointing to core's own dist and all 8 sibling `@ninna-ui` package dist files. Tailwind now automatically scans every component's JS output when a consumer imports any theme preset — no manual `@source` directive needed.
  - **Hardened `@source inline()` safelist**: Removed redundant layout/sizing/typography/radius inlines that the filesystem scanner already detects. Kept only patterns the Tailwind v4 scanner cannot extract from JS: opacity modifiers (`bg-primary/10`), variant prefixes (`hover:`, `focus:`, `peer-checked:`, `data-[]`, `marker:`), stroke utilities, and custom `@utility` names. Added clear documentation explaining why each category exists.
  - **`:root` fallback on `default.css` only**: Removed `:root` from ocean/sunset/forest/minimal presets to prevent CSS cascade conflicts when multiple presets are imported.
  - **Toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions.

  ### @ninna-ui/cli (patch)
  - Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.

## 0.1.0

### Minor Changes

- Initial release of Ninna UI
