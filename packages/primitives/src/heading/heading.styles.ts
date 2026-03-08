import { cva, type VariantProps } from 'class-variance-authority';
import type { HeadingLevel } from '@ninna-ui/core';

export const headingVariants = cva(
  "scroll-m-20",
  {
    variants: {
      size: {
        xs:   "text-xs",
        sm:   "text-sm",
        base: "text-base",
        md:   "text-base",
        lg:   "text-lg",
        xl:   "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
      },
      weight: {
        thin:       "font-thin",
        extralight: "font-extralight",
        light:      "font-light",
        normal:     "font-normal",
        medium:     "font-medium",
        semibold:   "font-semibold",
        bold:       "font-bold",
        extrabold:  "font-extrabold",
        black:      "font-black",
      },
      color: {
        primary:   "text-primary",
        secondary: "text-secondary",
        accent:    "text-accent",
        neutral:   "text-neutral",
        success:   "text-success",
        danger:    "text-danger",
        warning:   "text-warning",
        info:      "text-info",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
      truncate: {
        true:  "truncate",
        false: "",
      },
      noWrap: {
        true:  "whitespace-nowrap",
        false: "",
      },
    },
    defaultVariants: { truncate: false, noWrap: false },
  }
);

export type HeadingVariantsProps = VariantProps<typeof headingVariants>;

export const HEADING_LEVEL_SIZES: Record<HeadingLevel, string> = {
  h1: "text-4xl lg:text-5xl",
  h2: "text-3xl lg:text-4xl",
  h3: "text-2xl lg:text-3xl",
  h4: "text-xl lg:text-2xl",
  h5: "text-lg lg:text-xl",
  h6: "text-base lg:text-lg",
};

export const HEADING_LEVEL_WEIGHTS: Record<HeadingLevel, string> = {
  h1: "font-bold",
  h2: "font-bold",
  h3: "font-semibold",
  h4: "font-semibold",
  h5: "font-medium",
  h6: "font-medium",
};

export const HEADING_LINE_CLAMP: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};
