/**
 * Component Variant Design Tokens
 * Style variants for interactive components
 */

/**
 * Color variants for visual components — Badge, Alert, Toast, Checkbox, Radio, Switch
 * - solid: Filled background with contrasting text
 * - soft: Light tinted background with colored text
 * - outline: Transparent with colored border
 */
export type ColorVariant = 'solid' | 'soft' | 'outline';

/**
 * Button/IconButton style variants — extends ColorVariant with ghost + text
 * - ghost: No background, subtle hover
 * - text: Just colored text with underline on hover
 */
export type ButtonVariant = ColorVariant | 'ghost' | 'text';

/**
 * Form input visual variants — Input, Textarea, Select, NumberInput
 * - outline: Border with transparent background
 * - filled: Filled background, transparent border
 * - flushed: Bottom-border only, no rounded corners
 * - unstyled: No visual styling, bare input
 */
export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled';
