import { forwardRef, createElement } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  headingVariants,
  HEADING_LEVEL_SIZES,
  HEADING_LEVEL_WEIGHTS,
  HEADING_LINE_CLAMP,
} from './heading.styles';
import type { HeadingProps } from './heading.types';

/**
 * Heading component for rendering semantic headings (h1-h6) with various styles.
 *
 * @example
 * ```tsx
 * <Heading as="h1">Page Title</Heading>
 * <Heading as="h2" size="3xl">Section Title</Heading>
 * <Heading as="h3" color="primary">Colored Heading</Heading>
 * <Heading as="h2" weight="normal">Light Weight Heading</Heading>
 * ```
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = 'h2',
      size,
      weight,
      color = 'neutral',
      align,
      truncate = false,
      lineClamp,
      noWrap = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      headingVariants({ size, weight, color, align, truncate: truncate && !lineClamp ? true : false, noWrap }),
      !size && HEADING_LEVEL_SIZES[as],
      !weight && HEADING_LEVEL_WEIGHTS[as],
      lineClamp && HEADING_LINE_CLAMP[lineClamp],
      className
    );

    return createElement(
      as,
      { ref, 'data-slot': 'heading', className: classes, ...props },
      children
    );
  }
);

Heading.displayName = 'Heading';
