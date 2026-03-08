import { forwardRef, createElement } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  textVariants,
  TEXT_LINE_CLAMP,
  TEXT_TRANSFORMS,
  TEXT_DECORATIONS,
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
      textVariants({ size, weight, color: muted ? undefined : color, align, truncate: truncate && !lineClamp ? true : false, noWrap, muted }),
      lineClamp && TEXT_LINE_CLAMP[lineClamp],
      uppercase && TEXT_TRANSFORMS.uppercase,
      lowercase && TEXT_TRANSFORMS.lowercase,
      capitalize && TEXT_TRANSFORMS.capitalize,
      italic && TEXT_DECORATIONS.italic,
      underline && TEXT_DECORATIONS.underline,
      strikethrough && TEXT_DECORATIONS.strikethrough,
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
