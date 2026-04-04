/**
 * Size Design Tokens
 * Component size scale
 */

/** Standard component size scale */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Compact size scale for selectors - Checkbox, Radio, Switch, Slider */
export type CompactSize = Extract<Size, 'sm' | 'md' | 'lg'>;

/** Extended spinner size scale */
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
