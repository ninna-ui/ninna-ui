/**
 * Layout Design Tokens
 * Spacing, grid, and flex type definitions shared across layout components
 */

/**
 * Breakpoint keys for responsive props.
 * Maps to Tailwind's default breakpoint scale.
 */
export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * A single value or a responsive object keyed by breakpoint.
 * Allows components to accept both simple and responsive values:
 *
 * @example
 * columns={3}               // fixed
 * columns={{ base: 1, md: 2, lg: 3 }}  // responsive
 */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

/** Gap size options (spacing scale) */
export type GapSize =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '8'
  | '10'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24';

/** Grid columns options */
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';

/** Grid rows options */
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | 'none';

/** Grid flow options */
export type GridFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';

/** Stack/Flex direction options */
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

/** Flex/Stack alignment options (cross-axis) */
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Flex/Stack justify options (main-axis) */
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

/** Flex wrap options */
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

/** Container max width options */
export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';

/** Separator orientation options */
export type SeparatorOrientation = 'horizontal' | 'vertical';

/** Aspect ratio preset options */
export type AspectRatioPreset = 'square' | 'video' | 'portrait' | 'wide';
