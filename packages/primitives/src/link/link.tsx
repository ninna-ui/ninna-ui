import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  linkStyles,
  getHoverColorClass,
  getUnderlineClass,
} from './link.styles';
import type { LinkProps } from './link.types';

/**
 * Default external link icon (arrow pointing up-right)
 */
const DefaultExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={linkStyles.externalIcon}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Link component for rendering accessible anchor elements with various styles.
 *
 * @example
 * ```tsx
 * <Link href="/about">About</Link>
 * <Link href="https://example.com" external>External Link</Link>
 * <Link href="/docs" color="primary" underline="hover">Documentation</Link>
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      size,
      color = 'neutral',
      underline = 'hover',
      external = false,
      showExternalIcon = true,
      externalIcon,
      className,
      children,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === '_blank';
    
    const classes = cn(
      linkStyles.base,
      size && linkStyles.sizes[size],
      linkStyles.colors[color],
      getHoverColorClass(color),
      getUnderlineClass(underline),
      className
    );

    const externalProps = isExternal
      ? {
          target: '_blank',
          rel: rel ?? 'noopener noreferrer',
        }
      : {};

    return (
      <a
        ref={ref}
        data-slot="link"
        className={classes}
        {...externalProps}
        {...props}
      >
        {children}
        {isExternal && showExternalIcon && (
          externalIcon ?? <DefaultExternalIcon />
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';
