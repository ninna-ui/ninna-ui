import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { tableStyles } from './table.styles';
import type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps,
} from './table.types';

const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={tableStyles.wrapper}>
        <table ref={ref} data-slot="table" className={cn(tableStyles.root, className)} {...props}>
          {children}
        </table>
      </div>
    );
  }
);

TableRoot.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} data-slot="table-header" className={cn(tableStyles.header, className)} {...props}>
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = 'Table.Header';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} data-slot="table-body" className={cn(tableStyles.body, className)} {...props}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'Table.Body';

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot ref={ref} data-slot="table-footer" className={cn(tableStyles.footer, className)} {...props}>
        {children}
      </tfoot>
    );
  }
);

TableFooter.displayName = 'Table.Footer';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr ref={ref} data-slot="table-row" className={cn(tableStyles.row, className)} {...props}>
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'Table.Row';

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <th ref={ref} data-slot="table-head" className={cn(tableStyles.head, className)} {...props}>
        {children}
      </th>
    );
  }
);

TableHead.displayName = 'Table.Head';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <td ref={ref} data-slot="table-cell" className={cn(tableStyles.cell, className)} {...props}>
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'Table.Cell';

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <caption ref={ref} data-slot="table-caption" className={cn(tableStyles.caption, className)} {...props}>
        {children}
      </caption>
    );
  }
);

TableCaption.displayName = 'Table.Caption';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
});
