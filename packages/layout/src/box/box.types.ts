import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";

/**
 * Base owned props for the Box component.
 * All native element props are passed through via PolymorphicProps.
 */
export interface BoxBaseProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Box component props — polymorphic.
 * Defaults to rendering a `<div>`; use `as` to change the element.
 *
 * @example
 * <Box as="section">...</Box>
 * <Box as="article" id="post">...</Box>
 */
export type BoxProps<C extends ElementType = "div"> = PolymorphicProps<C, BoxBaseProps>;
