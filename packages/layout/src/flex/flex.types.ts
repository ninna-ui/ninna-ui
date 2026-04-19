import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { FlexDirection, FlexAlign, FlexJustify, FlexWrap, GapSize } from '@ninna-ui/core';

/**
 * Base owned props for the Flex component.
 */
export interface FlexBaseProps {

  /** Flex direction */
  direction?: FlexDirection;

  /** Gap between items */
  gap?: GapSize;

  /** Align items on the cross axis */
  align?: FlexAlign;

  /** Justify items on the main axis */
  justify?: FlexJustify;

  /** Wrap behavior */
  wrap?: FlexWrap;

  /** Render as inline-flex instead of flex */
  inline?: boolean;

  /** Additional CSS class names */
  className?: string;
}

/**
 * Flex component props — polymorphic.
 * Defaults to rendering a `<div>`.
 */
export type FlexProps<C extends ElementType = "div"> = PolymorphicProps<C, FlexBaseProps>;
