import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Column definition for the DataTable */
export interface DataTableColumn<T> {
  /** Unique key for the column */
  id: string;
  /** Column header label */
  header: ReactNode;
  /** Accessor function to get cell value */
  accessorFn?: (row: T) => ReactNode;
  /** Key of the row object to access */
  accessorKey?: keyof T & string;
  /** Whether the column is sortable @default false */
  sortable?: boolean;
  /** Text alignment @default 'left' */
  align?: 'left' | 'center' | 'right';
  /** Custom cell renderer */
  cell?: (row: T) => ReactNode;
  /** Column width */
  width?: string;
}

/** Sort direction */
export type SortDirection = 'asc' | 'desc' | null;

/** Sort state */
export interface SortState {
  columnId: string;
  direction: SortDirection;
}

/** Props for the DataTable component */
export interface DataTableProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Accessible label for the table (used as aria-label on the table element) */
  'aria-label'?: string;
  /** Data rows */
  data: T[];
  /** Column definitions */
  columns: DataTableColumn<T>[];
  /** Whether to show striped rows @default false */
  striped?: boolean;
  /** Whether rows are hoverable @default true */
  hoverable?: boolean;
  /** Whether to show borders between cells @default false */
  bordered?: boolean;
  /** Whether the table is compact @default false */
  compact?: boolean;
  /** Sort state (controlled) */
  sortState?: SortState;
  /** Callback when sort changes */
  onSortChange?: (sort: SortState) => void;
  /** Row key accessor */
  rowKey?: keyof T & string;
  /** Empty state message */
  emptyMessage?: ReactNode;
  /** Caption for the table */
  caption?: ReactNode;
  /** Whether the table is loading @default false */
  loading?: boolean;
}
