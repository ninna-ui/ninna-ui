/**
 * @ninna-ui/layout
 * Layout components for building responsive layouts
 */

// Box
export { Box } from "./box";
export type { BoxProps } from "./box";

// Container
export { Container } from "./container";
export type { ContainerProps } from "./container";

// Stack
export { Stack, HStack, VStack } from "./stack";
export type { StackProps } from "./stack";

// Flex
export { Flex } from "./flex";
export type { FlexProps } from "./flex";

// Grid
export { Grid } from "./grid";
export type { GridProps } from "./grid";

// Center
export { Center } from "./center";
export type { CenterProps } from "./center";

// Wrap
export { Wrap } from "./wrap";
export type { WrapProps } from "./wrap";

// SimpleGrid
export { SimpleGrid } from "./simple-grid";
export type { SimpleGridProps } from "./simple-grid";

// AspectRatio
export { AspectRatio } from "./aspect-ratio";
export type { AspectRatioProps } from "./aspect-ratio";

// Separator
export { Separator } from "./separator";
export type { SeparatorProps } from "./separator";

// Re-export all layout types
export type {
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
