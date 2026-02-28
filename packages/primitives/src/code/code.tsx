import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  codeStyles,
  getBgColorClass,
  getTextColorClass,
  getSizeClass,
} from "./code.styles";
import type { CodeProps } from "./code.types";

/**
 * Code component for rendering inline code snippets with various styles.
 *
 * @example
 * ```tsx
 * <Code>npm install</Code>
 * <Code color="primary">const x = 1</Code>
 * <Code size="lg">function hello()</Code>
 * ```
 */
export const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      color = "neutral",
      size = "sm",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      codeStyles.base,
      getBgColorClass(color),
      getTextColorClass(color),
      getSizeClass(size),
      className
    );

    return (
      <code
        ref={ref}
        data-slot="code"
        className={classes}
        {...props}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = "Code";
