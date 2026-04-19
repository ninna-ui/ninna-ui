---
"@ninna-ui/core": minor
"@ninna-ui/layout": minor
---

Standardize polymorphic pattern in layout components:
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
