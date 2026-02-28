export const treeStyles = {
  root: 'text-sm',
  item: 'relative',
  itemContent: 'flex items-center gap-2 rounded-md px-2 py-1.5 cursor-pointer transition-colors text-base-content/80 hover:bg-base-200/50 hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  itemContentSelected: 'bg-primary/10 text-primary font-medium',
  itemContentDisabled: 'opacity-50 cursor-not-allowed hover:bg-transparent',
  toggle: 'flex items-center justify-center size-5 rounded-sm hover:bg-base-200 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
  togglePlaceholder: 'size-5 shrink-0',
  icon: 'size-4 shrink-0 text-base-content/70',
  label: 'truncate',
  children: 'relative',
  line: 'absolute left-[19px] top-0 bottom-0 w-px bg-base-200',
};
