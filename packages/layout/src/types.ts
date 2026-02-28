/**
 * Shared layout component types
 * These are layout-package-specific types, not global core types.
 */

/** Container max width options */
export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';

/** Stack/Flex direction options */
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

/** Flex/Stack alignment options (cross-axis) */
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Flex/Stack justify options (main-axis) */
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

/** Flex wrap options */
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

/** Gap size options (spacing) */
export type GapSize = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';

/** Grid columns options */
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none';

/** Grid rows options */
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | 'none';

/** Grid flow options */
export type GridFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';

/** Aspect ratio preset options */
export type AspectRatioPreset = 'square' | 'video' | 'portrait' | 'wide';

/** Separator orientation options */
export type SeparatorOrientation = 'horizontal' | 'vertical';
