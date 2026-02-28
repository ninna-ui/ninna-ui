/**
 * State Color Class Mappings
 * Focus, hover, and other interactive state colors
 */
import type { Color } from '../../tokens';

/** Focus ring colors (20% opacity) */
export const FOCUS_RING_COLORS: Record<Color, string> = {
  primary: 'focus:ring-primary/20',
  secondary: 'focus:ring-secondary/20',
  accent: 'focus:ring-accent/20',
  neutral: 'focus:ring-neutral/20',
  success: 'focus:ring-success/20',
  danger: 'focus:ring-danger/20',
  warning: 'focus:ring-warning/20',
  info: 'focus:ring-info/20',
};

/** Focus border colors */
export const FOCUS_BORDER_COLORS: Record<Color, string> = {
  primary: 'focus:border-primary',
  secondary: 'focus:border-secondary',
  accent: 'focus:border-accent',
  neutral: 'focus:border-neutral',
  success: 'focus:border-success',
  danger: 'focus:border-danger',
  warning: 'focus:border-warning',
  info: 'focus:border-info',
};

/** Input focus colors - Combined focus border, ring, and focus-visible ring */
export const INPUT_FOCUS_COLORS: Record<Color, string> = {
  primary: 'focus:border-primary focus:ring-primary/20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  secondary: 'focus:border-secondary focus:ring-secondary/20 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1',
  accent: 'focus:border-accent focus:ring-accent/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1',
  neutral: 'focus:border-neutral focus:ring-neutral/20 focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-1',
  success: 'focus:border-success focus:ring-success/20 focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-1',
  danger: 'focus:border-danger focus:ring-danger/20 focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-1',
  warning: 'focus:border-warning focus:ring-warning/20 focus-visible:ring-2 focus-visible:ring-warning focus-visible:ring-offset-1',
  info: 'focus:border-info focus:ring-info/20 focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-1',
};

/** Radix checked state background colors (data-[state=checked]) */
export const CHECKED_BG_COLORS: Record<Color, string> = {
  primary: 'data-[state=checked]:bg-primary',
  secondary: 'data-[state=checked]:bg-secondary',
  accent: 'data-[state=checked]:bg-accent',
  neutral: 'data-[state=checked]:bg-neutral',
  success: 'data-[state=checked]:bg-success',
  danger: 'data-[state=checked]:bg-danger',
  warning: 'data-[state=checked]:bg-warning',
  info: 'data-[state=checked]:bg-info',
};

/** Radix checked state border colors (data-[state=checked]) */
export const CHECKED_BORDER_COLORS: Record<Color, string> = {
  primary: 'data-[state=checked]:border-primary',
  secondary: 'data-[state=checked]:border-secondary',
  accent: 'data-[state=checked]:border-accent',
  neutral: 'data-[state=checked]:border-neutral',
  success: 'data-[state=checked]:border-success',
  danger: 'data-[state=checked]:border-danger',
  warning: 'data-[state=checked]:border-warning',
  info: 'data-[state=checked]:border-info',
};

/** Peer-checked background colors (for hidden input + visual label pattern) */
export const PEER_CHECKED_BG_COLORS: Record<Color, string> = {
  primary: 'peer-checked:bg-primary',
  secondary: 'peer-checked:bg-secondary',
  accent: 'peer-checked:bg-accent',
  neutral: 'peer-checked:bg-neutral',
  success: 'peer-checked:bg-success',
  danger: 'peer-checked:bg-danger',
  warning: 'peer-checked:bg-warning',
  info: 'peer-checked:bg-info',
};

/** Peer-checked border colors */
export const PEER_CHECKED_BORDER_COLORS: Record<Color, string> = {
  primary: 'peer-checked:border-primary',
  secondary: 'peer-checked:border-secondary',
  accent: 'peer-checked:border-accent',
  neutral: 'peer-checked:border-neutral',
  success: 'peer-checked:border-success',
  danger: 'peer-checked:border-danger',
  warning: 'peer-checked:border-warning',
  info: 'peer-checked:border-info',
};

/** Focus-visible ring colors */
export const FOCUS_VISIBLE_RING_COLORS: Record<Color, string> = {
  primary: 'focus-visible:ring-primary',
  secondary: 'focus-visible:ring-secondary',
  accent: 'focus-visible:ring-accent',
  neutral: 'focus-visible:ring-neutral',
  success: 'focus-visible:ring-success',
  danger: 'focus-visible:ring-danger',
  warning: 'focus-visible:ring-warning',
  info: 'focus-visible:ring-info',
};

/** Peer focus-visible ring colors */
export const PEER_FOCUS_VISIBLE_RING_COLORS: Record<Color, string> = {
  primary: 'peer-focus-visible:ring-primary',
  secondary: 'peer-focus-visible:ring-secondary',
  accent: 'peer-focus-visible:ring-accent',
  neutral: 'peer-focus-visible:ring-neutral',
  success: 'peer-focus-visible:ring-success',
  danger: 'peer-focus-visible:ring-danger',
  warning: 'peer-focus-visible:ring-warning',
  info: 'peer-focus-visible:ring-info',
};
