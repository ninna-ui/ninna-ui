// @ts-nocheck — scaffold template; placeholder imports resolve once copied into a package.
// Template: rename to `component-name.types.ts`. Reuse shared scales from @ninna-ui/core.
import type { HTMLAttributes, ReactNode } from "react";
import type { Color, Size } from "@ninna-ui/core";

export interface MyThingProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: "solid" | "soft" | "outline";

  /** Color theme */
  color?: Color;

  /** Size of the component */
  size?: Size;

  /** Content rendered inside the component */
  children?: ReactNode;
}
