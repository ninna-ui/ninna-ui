/**
 * @ninna-ui/layout
 * Layout components for building responsive, semantic layouts.
 *
 * All components are fully polymorphic via the `as` prop and forward refs correctly.
 */

// Box — foundational layout primitive
export { Box, type BoxProps } from "./box";

// Container — max-width page wrapper
export { Container, type ContainerProps } from "./container";

// Stack — vertical/horizontal flex layout
export { Stack, HStack, VStack, type StackProps } from "./stack";

// Flex — explicit flexbox container
export { Flex, type FlexProps } from "./flex";

// Grid — CSS Grid container with responsive columns
export { Grid, type GridProps, type ResponsiveColumns } from "./grid";

// Center — horizontally + vertically centered content
export { Center, type CenterProps } from "./center";

// Wrap — flex-wrap container for tag/chip lists
export { Wrap, type WrapProps } from "./wrap";

// SimpleGrid — auto-responsive grid via minChildWidth
export { SimpleGrid, type SimpleGridProps } from "./simple-grid";

// AspectRatio — fixed aspect ratio wrapper
export { AspectRatio, type AspectRatioProps } from "./aspect-ratio";

// Separator — visual content divider
export { Separator, type SeparatorProps } from "./separator";

// Layout types — design tokens and responsive helpers
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
} from './types';
