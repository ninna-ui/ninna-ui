import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  blockquoteStyles,
  getVariantClass,
  getBorderColorClass,
  getBgColorClass,
  getIconColorClass,
} from "./blockquote.styles";
import type { BlockquoteProps } from "./blockquote.types";

/**
 * Default quote icon
 */
const DefaultQuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

/**
 * Blockquote component for rendering styled quotations with optional citation.
 *
 * @example
 * ```tsx
 * <Blockquote>This is a quote</Blockquote>
 * <Blockquote color="primary" variant="filled">Styled quote</Blockquote>
 * <Blockquote citeSource="John Doe">Quote with citation</Blockquote>
 * ```
 */
export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    {
      color = "neutral",
      variant = "outline",
      cite,
      citeSource,
      showIcon = false,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasBg = variant === "solid" || variant === "soft";

    const classes = cn(
      blockquoteStyles.base,
      getVariantClass(variant),
      getBorderColorClass(color),
      hasBg && getBgColorClass(color),
      className
    );

    return (
      <blockquote
        ref={ref}
        data-slot="blockquote"
        className={classes}
        cite={cite}
        {...props}
      >
        {showIcon && (
          <span data-slot="icon" className={cn(blockquoteStyles.iconWrapper, getIconColorClass(color))}>
            {icon ?? <DefaultQuoteIcon />}
          </span>
        )}
        <p data-slot="content" className={blockquoteStyles.content}>{children}</p>
        {citeSource && (
          <footer data-slot="citation" className={blockquoteStyles.citation}>
            — {citeSource}
          </footer>
        )}
      </blockquote>
    );
  }
);

Blockquote.displayName = "Blockquote";
