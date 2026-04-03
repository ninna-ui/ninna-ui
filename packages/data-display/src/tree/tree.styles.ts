import { cva, type VariantProps } from 'class-variance-authority';

export const treeItemVariants = cva(
  "flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer transition-colors text-base-content/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 w-full",
  {
    variants: {
      isSelected: {
        true: "bg-primary/10 text-primary font-medium",
        false: "hover:bg-base-200/50 hover:text-base-content",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:bg-transparent",
        false: "",
      },
    },
    defaultVariants: {
      isSelected: false,
      disabled: false,
    },
  }
);

export const treeStyles = {
  root: 'text-sm w-full',
  item: 'relative w-full',
  itemWrapper: 'w-full',
  label: 'truncate select-none',
  toggle: 'relative flex items-center justify-center size-5 rounded-sm hover:bg-base-200 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary before:absolute before:inset-[-10px] before:content-[""]',
  togglePlaceholder: 'size-5 shrink-0',
  icon: 'size-4 shrink-0 text-base-content/70',
  children: 'relative w-full',
  line: 'absolute left-[9px] top-0 bottom-0 w-px bg-base-200',
};

export type TreeItemVariantsProps = VariantProps<typeof treeItemVariants>;
