---
"@ninna-ui/core": patch
"@ninna-ui/feedback": patch
"@ninna-ui/layout": patch
---

chore: remove unused core class maps and tighten types

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
  - Keep custom animation utilities (animate-in, slide-in-from-*, etc.)

- Update barrel exports to remove empty module references
  - Remove export * for deleted/empty files from index.ts barrels

### Impact
- Reduces @ninna-ui/core bundle size by removing dead exports
- Improves type safety with stricter component prop typing
- Eliminates duplicate type definitions across packages
- Optimizes Tailwind CSS generation by removing redundant @source directives
