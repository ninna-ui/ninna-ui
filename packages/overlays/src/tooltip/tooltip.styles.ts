export const tooltipStyles = {
  content: [
    'z-50 rounded-md px-3 py-1.5',
    'bg-neutral text-neutral-content',
    'text-sm shadow-md',
    'select-none pointer-events-none',
    'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=top]:slide-in-from-bottom-2',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
  ],
  arrow: 'fill-neutral',
};
