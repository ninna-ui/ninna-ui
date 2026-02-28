export const tableStyles = {
  wrapper: 'relative w-full overflow-auto',
  root: 'w-full caption-bottom text-sm',
  header: '[&_tr]:border-b [&_tr]:border-base-200',
  body: '[&_tr:last-child]:border-0',
  footer: 'border-t border-base-200 bg-base-200/30 font-medium [&>tr]:last:border-b-0',
  row: 'border-b border-base-200 transition-colors hover:bg-base-200/30 data-[state=selected]:bg-base-200/50',
  head: 'h-10 px-3 text-left align-middle font-medium text-base-content/70 [&:has([role=checkbox])]:pr-0',
  cell: 'p-3 align-middle [&:has([role=checkbox])]:pr-0',
  caption: 'mt-4 text-sm text-base-content/70',
};
