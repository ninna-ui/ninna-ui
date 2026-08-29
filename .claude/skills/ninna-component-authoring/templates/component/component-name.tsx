// @ts-nocheck — scaffold template; placeholder imports resolve once copied into a package.
// Template: rename `component-name` -> kebab file name, `MyThing` -> PascalCase component.
import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { myThingVariants } from "./component-name.styles";
import type { MyThingProps } from "./component-name.types";

/**
 * MyThing — short one-line description.
 *
 * @example
 * ```tsx
 * <MyThing variant="solid" color="primary">Hello</MyThing>
 * ```
 */
export const MyThing = forwardRef<HTMLDivElement, MyThingProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="my-thing"
        className={cn(myThingVariants({ variant, color, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

MyThing.displayName = "MyThing";
