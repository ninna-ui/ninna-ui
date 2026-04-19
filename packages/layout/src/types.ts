/**
 * Layout package — public type re-exports.
 *
 * All layout types originate in @ninna-ui/core (single source of truth).
 * This barrel exists so the layout package's own index.ts has one import
 * point, and so external consumers can import from "@ninna-ui/layout" directly.
 *
 * Internal component files import directly from '@ninna-ui/core' — not this barrel.
 */
export type {
  Breakpoint,
  ResponsiveValue,
  ContainerMaxWidth,
  FlexDirection,
  FlexAlign,
  FlexJustify,
  FlexWrap,
  GapSize,
  GridColumns,
  GridRows,
  GridFlow,
  AspectRatioPreset,
  SeparatorOrientation,
} from '@ninna-ui/core';
