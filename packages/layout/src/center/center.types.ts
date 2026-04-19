import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";

/**
 * Base owned props for the Center component.
 */
export interface CenterBaseProps {

  /** Use inline-flex instead of flex */
  inline?: boolean;

  /** Additional CSS class names */
  className?: string;
}

/**
 * Center component props — polymorphic.
 * Defaults to rendering a `<div>`.
 *
 * @example
 * <Center as="main" className="min-h-screen"><Spinner /></Center>
 */
export type CenterProps<C extends ElementType = "div"> = PolymorphicProps<C, CenterBaseProps>;
