// @ts-nocheck — scaffold template; placeholder imports resolve once copied into a package.
// Template: rename to `component-name.styles.ts`. ALL styling lives here via cva.
// Use SEMANTIC TOKENS ONLY (bg-primary, text-primary-content, bg-base-100, border-base-200).
// Never hardcode hex or palette colors (e.g. bg-blue-500) — that breaks zero-runtime theming.
import { cva, type VariantProps } from "class-variance-authority";

export const myThingVariants = cva(
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
      },
      color: {
        primary: "",
        neutral: "",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    compoundVariants: [
      // solid
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-content hover:bg-primary/90",
      },
      {
        variant: "solid",
        color: "neutral",
        class: "bg-neutral text-neutral-content hover:bg-neutral/90",
      },
      // soft
      {
        variant: "soft",
        color: "primary",
        class: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      {
        variant: "soft",
        color: "neutral",
        class: "bg-neutral/10 text-neutral hover:bg-neutral/20",
      },
      // outline
      {
        variant: "outline",
        color: "primary",
        class: "border border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "outline",
        color: "neutral",
        class: "border border-base-300 text-base-content hover:bg-base-200",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
  },
);

export type MyThingVariantProps = VariantProps<typeof myThingVariants>;
