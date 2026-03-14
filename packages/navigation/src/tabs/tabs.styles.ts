import { cva, type VariantProps } from 'class-variance-authority';

export const tabsListVariants = cva(
  "flex items-center overflow-x-auto",
  {
    variants: {
      variant: {
        line:     "",
        enclosed: "bg-base-200/50 rounded-lg p-1 gap-1",
        soft:     "gap-1",
        outline:  "border border-base-200 rounded-lg p-1 gap-1",
      },
      orientation: {
        horizontal: "flex-row",
        vertical:   "flex-col",
      },
    },
    compoundVariants: [
      { variant: "line", orientation: "horizontal", class: "border-b border-base-200 gap-0" },
      { variant: "line", orientation: "vertical",   class: "border-r border-base-200 gap-0" },
    ],
    defaultVariants: { variant: "line", orientation: "horizontal" },
  }
);

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        line:     "",
        enclosed: "rounded-md px-3 py-1.5 data-[state=active]:bg-base-100 data-[state=active]:shadow-sm data-[state=active]:text-base-content text-base-content/70",
        soft:     "rounded-md px-3 py-1.5 data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-base-content/70 hover:bg-base-200/50",
        outline:  "rounded-md px-3 py-1.5 border border-transparent data-[state=active]:bg-base-100 data-[state=active]:border-base-200 data-[state=active]:shadow-sm text-base-content/70",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      orientation: {
        horizontal: "",
        vertical:   "",
      },
    },
    compoundVariants: [
      { variant: "line", orientation: "horizontal", class: "border-b-2 border-transparent px-4 pb-2.5 pt-2 data-[state=active]:border-primary data-[state=active]:text-primary hover:text-base-content/80" },
      { variant: "line", orientation: "vertical",   class: "border-r-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:text-primary hover:text-base-content/80" },
    ],
    defaultVariants: { variant: "line", size: "md", orientation: "horizontal" },
  }
);

export type TabsListVariantsProps = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariantsProps = VariantProps<typeof tabsTriggerVariants>;

export const TABS_ROOT_CLASS = "flex flex-col";
export const TABS_CONTENT_CLASS = "mt-2 focus:outline-none data-[state=inactive]:hidden";
