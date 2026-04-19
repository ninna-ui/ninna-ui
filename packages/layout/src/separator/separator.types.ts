import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { SeparatorOrientation } from '@ninna-ui/core';
import type { SeparatorVariantsProps } from './separator.styles';

/**
 * Base owned props for the Separator component.
 */
export interface SeparatorBaseProps {
  /** Visual orientation of the separator */
  orientation?: SeparatorOrientation;

  /**
   * Color variant.
   * @default "default"
   */
  color?: SeparatorVariantsProps["color"];

  /**
   * When true, the separator is purely decorative (no semantic role).
   * When false, adds `role="separator"` and `aria-orientation`.
   * @default true
   */
  decorative?: boolean;

  /** Additional CSS class names */
  className?: string;
}

/**
 * Separator component props — polymorphic.
 * Defaults to rendering an `<hr>` element (semantically correct).
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-6" />
 * <Separator color="primary" />
 * <Separator decorative={false} aria-label="Section divider" />
 */
export type SeparatorProps<C extends ElementType = "hr"> = PolymorphicProps<C, SeparatorBaseProps>;
