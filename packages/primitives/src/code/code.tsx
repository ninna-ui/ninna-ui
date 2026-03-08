import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { codeVariants } from "./code.styles";
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
      codeVariants({ color, size }),
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
