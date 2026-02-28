/**
 * Component Color Variant Class Mappings
 * Style variants for buttons and interactive components
 */
import type { Color } from '../../tokens';

/** Solid variant - Filled background with contrasting text */
export const SOLID_VARIANTS: Record<'base' | 'hover', Record<Color, string>> = {
  base: {
    primary: 'bg-primary text-primary-content',
    secondary: 'bg-secondary text-secondary-content',
    accent: 'bg-accent text-accent-content',
    neutral: 'bg-neutral text-neutral-content',
    success: 'bg-success text-success-content',
    danger: 'bg-danger text-danger-content',
    warning: 'bg-warning text-warning-content',
    info: 'bg-info text-info-content',
  },
  hover: {
    primary: 'hover:bg-primary/90',
    secondary: 'hover:bg-secondary/90',
    accent: 'hover:bg-accent/90',
    neutral: 'hover:bg-neutral/90',
    success: 'hover:bg-success/90',
    danger: 'hover:bg-danger/90',
    warning: 'hover:bg-warning/90',
    info: 'hover:bg-info/90',
  },
};

/** Soft variant - Light tinted background with colored text */
export const SOFT_VARIANTS: Record<'base' | 'hover', Record<Color, string>> = {
  base: {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    neutral: 'bg-neutral/10 text-neutral',
    success: 'bg-success/10 text-success',
    danger: 'bg-danger/10 text-danger',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-info/10 text-info',
  },
  hover: {
    primary: 'hover:bg-primary/20',
    secondary: 'hover:bg-secondary/20',
    accent: 'hover:bg-accent/20',
    neutral: 'hover:bg-neutral/20',
    success: 'hover:bg-success/20',
    danger: 'hover:bg-danger/20',
    warning: 'hover:bg-warning/20',
    info: 'hover:bg-info/20',
  },
};

/** Outline variant - Transparent with colored border, fills on hover */
export const OUTLINE_VARIANTS: Record<'base' | 'hover', Record<Color, string>> = {
  base: {
    primary: 'border border-primary bg-transparent text-primary',
    secondary: 'border border-secondary bg-transparent text-secondary',
    accent: 'border border-accent bg-transparent text-accent',
    neutral: 'border border-neutral bg-transparent text-neutral',
    success: 'border border-success bg-transparent text-success',
    danger: 'border border-danger bg-transparent text-danger',
    warning: 'border border-warning bg-transparent text-warning',
    info: 'border border-info bg-transparent text-info',
  },
  hover: {
    primary: 'hover:bg-primary hover:text-primary-content',
    secondary: 'hover:bg-secondary hover:text-secondary-content',
    accent: 'hover:bg-accent hover:text-accent-content',
    neutral: 'hover:bg-neutral hover:text-neutral-content',
    success: 'hover:bg-success hover:text-success-content',
    danger: 'hover:bg-danger hover:text-danger-content',
    warning: 'hover:bg-warning hover:text-warning-content',
    info: 'hover:bg-info hover:text-info-content',
  },
};

/** Ghost variant - No background, subtle hover */
export const GHOST_VARIANTS: Record<Color, string> = {
  primary: 'text-primary hover:bg-primary/10',
  secondary: 'text-secondary hover:bg-secondary/10',
  accent: 'text-accent hover:bg-accent/10',
  neutral: 'text-neutral hover:bg-neutral/10',
  success: 'text-success hover:bg-success/10',
  danger: 'text-danger hover:bg-danger/10',
  warning: 'text-warning hover:bg-warning/10',
  info: 'text-info hover:bg-info/10',
};

/** Text variant - Just colored text with underline on hover */
export const TEXT_VARIANTS: Record<Color, string> = {
  primary: 'text-primary hover:underline',
  secondary: 'text-secondary hover:underline',
  accent: 'text-accent hover:underline',
  neutral: 'text-neutral hover:underline',
  success: 'text-success hover:underline',
  danger: 'text-danger hover:underline',
  warning: 'text-warning hover:underline',
  info: 'text-info hover:underline',
};
