import { forwardRef, createElement } from 'react';
import { cn } from '@ninna-ui/utils';
import { linkOverlayStyles } from './link-overlay.styles';
import type { LinkOverlayProps, LinkBoxProps } from './link-overlay.types';

/**
 * LinkBox component - A container that makes the entire area clickable via LinkOverlay.
 * Use this to wrap content that should be clickable as a single unit.
 *
 * @example
 * ```tsx
 * <LinkBox as="article" className="p-4 border rounded-lg hover:shadow-lg">
 *   <Heading as="h3">
 *     <LinkOverlay href="/article/1">Article Title</LinkOverlay>
 *   </Heading>
 *   <Text>Article description...</Text>
 *   <Link href="/author" className="relative z-10">Author Name</Link>
 * </LinkBox>
 * ```
 */
export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  ({ as = 'div', className, children, ...props }, ref) => {
    return createElement(
      as,
      {
        ref,
        'data-slot': 'link-box',
        className: cn(linkOverlayStyles.linkBox, className),
        ...props,
      },
      children
    );
  }
);

LinkBox.displayName = 'LinkBox';

/**
 * LinkOverlay component - Stretches to cover the entire LinkBox, making it clickable.
 * Place this inside a LinkBox to make the entire box clickable.
 *
 * @example
 * ```tsx
 * <LinkBox>
 *   <Heading>
 *     <LinkOverlay href="/page">Clickable Heading</LinkOverlay>
 *   </Heading>
 * </LinkBox>
 * ```
 */
export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  (
    {
      external = false,
      className,
      children,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === '_blank';

    const externalProps = isExternal
      ? {
          target: '_blank',
          rel: rel ?? 'noopener noreferrer',
        }
      : {};

    return (
      <a
        ref={ref}
        data-slot="link-overlay"
        className={cn(linkOverlayStyles.linkOverlay, className)}
        {...externalProps}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkOverlay.displayName = 'LinkOverlay';
