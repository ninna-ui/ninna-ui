import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva(
  "",
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
        left:    "text-left",
        center:  "text-center",
        right:   "text-right",
        justify: "text-justify",
      },
      truncate: {
        true:  "truncate",
        false: "",
      },
      noWrap: {
        true:  "whitespace-nowrap",
        false: "",
      },
      muted: {
        true:  "text-base-content/70",
        false: "",
      },
    },
    defaultVariants: { truncate: false, noWrap: false, muted: false },
  }
);

export type TextVariantsProps = VariantProps<typeof textVariants>;

export const TEXT_LINE_CLAMP: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

export const TEXT_TRANSFORMS: Record<'uppercase' | 'lowercase' | 'capitalize', string> = {
  uppercase:  "uppercase",
  lowercase:  "lowercase",
  capitalize: "capitalize",
};

export const TEXT_DECORATIONS: Record<'italic' | 'underline' | 'strikethrough', string> = {
  italic:        "italic",
  underline:     "underline",
  strikethrough: "line-through",
};
