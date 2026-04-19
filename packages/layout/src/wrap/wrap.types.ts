import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { FlexAlign, FlexJustify, GapSize } from '@ninna-ui/core';

/**
 * Base owned props for the Wrap component.
 */
export interface WrapBaseProps {

  /** Gap between wrapped items */
  gap?: GapSize;

  /** Align items on the cross axis */
  align?: FlexAlign;

  /** Justify items on the main axis */
  justify?: FlexJustify;

  /** Additional CSS class names */
  className?: string;
}

/**
 * Wrap component props — polymorphic.
 * Renders a flex-wrap container. Defaults to `<div>`.
 *
 * @example
 * <Wrap gap="2"><Badge /><Badge /></Wrap>
 * <Wrap as="ul" gap="3"><li>...</li></Wrap>
 */
export type WrapProps<C extends ElementType = "div"> = PolymorphicProps<C, WrapBaseProps>;
