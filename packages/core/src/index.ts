/**
 * @ninna-ui/core
 * Design system foundation: tokens, class mappings, and CSS theme
 * 
 * Architecture:
 * - tokens/   : Type definitions (Color, Size, Radius, etc.)
 * - classes/  : Tailwind class mappings (BG_COLORS, SOLID_VARIANTS, etc.)
 * - theme/    : Theme presets (default.css, ocean.css, etc.)
 * 
 * Usage:
 * ```css
 * @import "tailwindcss";
 * @import "@ninna-ui/core/theme/presets/default.css";
 * @source "../node_modules/@ninna-ui/*";
 * ```
 */

// Design tokens (types)
export * from './tokens';

// Class mappings
export * from './classes';  
