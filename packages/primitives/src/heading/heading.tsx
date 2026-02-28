import { forwardRef, createElement } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  headingStyles,
  getLevelSizeClass,
  getLevelWeightClass,
  getSizeClass,
  getWeightClass,
  getColorClass,
  getAlignClass,
  getLineClampClass,
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
      headingStyles.base,
      size ? getSizeClass(size) : getLevelSizeClass(as),
      weight ? getWeightClass(weight) : getLevelWeightClass(as),
      getColorClass(color),
      align && getAlignClass(align),
      truncate && !lineClamp && headingStyles.truncate,
      lineClamp && getLineClampClass(lineClamp),
      noWrap && headingStyles.noWrap,
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
