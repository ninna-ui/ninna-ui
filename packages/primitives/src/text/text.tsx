import { forwardRef, createElement } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  textStyles,
  getSizeClass,
  getWeightClass,
  getColorClass,
  getAlignClass,
  getLineClampClass,
} from './text.styles';
import type { TextProps } from './text.types';

/**
 * Text component for rendering typography with various styles.
 *
 * @example
 * ```tsx
 * <Text>Default text</Text>
 * <Text size="lg" weight="bold">Large bold text</Text>
 * <Text color="primary">Primary colored text</Text>
 * <Text truncate>This text will be truncated...</Text>
 * <Text as="span" muted>Muted span text</Text>
 * ```
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      as = 'p',
      size = 'md',
      weight,
      color = 'neutral',
      align,
      truncate = false,
      lineClamp,
      muted = false,
      noWrap = false,
      uppercase = false,
      lowercase = false,
      capitalize = false,
      italic = false,
      underline = false,
      strikethrough = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      textStyles.base,
      getSizeClass(size),
      weight && getWeightClass(weight),
      getColorClass(color, muted),
      align && getAlignClass(align),
      truncate && !lineClamp && textStyles.truncate,
      lineClamp && getLineClampClass(lineClamp),
      noWrap && textStyles.noWrap,
      uppercase && textStyles.transform.uppercase,
      lowercase && textStyles.transform.lowercase,
      capitalize && textStyles.transform.capitalize,
      italic && textStyles.decoration.italic,
      underline && textStyles.decoration.underline,
      strikethrough && textStyles.decoration.strikethrough,
      className
    );

    return createElement(
      as,
      { ref, 'data-slot': 'text', className: classes, ...props },
      children
    );
  }
);

Text.displayName = 'Text';
