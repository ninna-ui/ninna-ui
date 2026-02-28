import { forwardRef, useMemo, useState } from 'react';
import { cn } from '@ninna-ui/utils';
import { dataTableStyles } from './data-table.styles';
import type { DataTableProps, DataTableColumn, SortState, SortDirection } from './data-table.types';

function getSortedData<T>(data: T[], columns: DataTableColumn<T>[], sortState: SortState | undefined): T[] {
  if (!sortState || !sortState.direction) return data;
  const col = columns.find((c) => c.id === sortState.columnId);
  if (!col) return data;

  return [...data].sort((a, b) => {
    const aVal = col.accessorFn ? col.accessorFn(a) : col.accessorKey ? a[col.accessorKey] : '';
    const bVal = col.accessorFn ? col.accessorFn(b) : col.accessorKey ? b[col.accessorKey] : '';
    const aStr = String(aVal ?? '');
    const bStr = String(bVal ?? '');
    const cmp = aStr.localeCompare(bStr, undefined, { numeric: true });
    return sortState.direction === 'asc' ? cmp : -cmp;
  });
}

function SortIndicator({ direction }: { direction: SortDirection }) {
  if (!direction) {
    return (
      <svg className={dataTableStyles.sortIcon} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 3.5l3 4H5l3-4zm0 9l-3-4h6l-3 4z" />
      </svg>
    );
  }
  return (
    <svg className={cn(dataTableStyles.sortIcon, dataTableStyles.sortIconActive)} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {direction === 'asc' ? (
        <path d="M8 4l4 5H4l4-5z" />
      ) : (
        <path d="M8 12L4 7h8l-4 5z" />
      )}
    </svg>
  );
}

function DataTableInner<T>(
  {
    data,
    columns,
    striped = false,
    hoverable = true,
    bordered = false,
    compact = false,
    sortState: controlledSort,
    onSortChange,
    rowKey,
    emptyMessage = 'No data available.',
    caption,
    loading = false,
    className,
    'aria-label': tableAriaLabel,
    ...props
  }: DataTableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [internalSort, setInternalSort] = useState<SortState>({ columnId: '', direction: null });
  const currentSort = controlledSort ?? internalSort;

  const handleSort = (columnId: string) => {
    let direction: SortDirection;
    if (currentSort.columnId !== columnId) {
      direction = 'asc';
    } else if (currentSort.direction === 'asc') {
      direction = 'desc';
    } else {
      direction = null;
    }
    const newSort: SortState = { columnId, direction };
    if (onSortChange) {
      onSortChange(newSort);
    } else {
      setInternalSort(newSort);
    }
  };

  const sortedData = useMemo(() => getSortedData(data, columns, currentSort), [data, columns, currentSort]);

  const getCellValue = (row: T, col: DataTableColumn<T>) => {
    if (col.cell) return col.cell(row);
    if (col.accessorFn) return col.accessorFn(row);
    if (col.accessorKey) return row[col.accessorKey] as React.ReactNode;
    return null;
  };

  const alignClass = (align?: 'left' | 'center' | 'right') => {
    if (align === 'center') return 'text-center';
    if (align === 'right') return 'text-right';
    return 'text-left';
  };

  return (
    <div ref={ref} data-slot="data-table" className={cn('relative', className)} {...props}>
      <div className={dataTableStyles.wrapper}>
        <table className={dataTableStyles.root} aria-label={tableAriaLabel} aria-busy={loading}>
          {caption && <caption className={dataTableStyles.caption}>{caption}</caption>}
          <thead className={dataTableStyles.header}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.id}
                  data-slot="data-table-head"
                  className={cn(
                    compact ? dataTableStyles.headCompact : dataTableStyles.head,
                    col.sortable && dataTableStyles.headSortable,
                    alignClass(col.align)
                  )}
                  style={col.width ? { width: col.width } : undefined}
                  onClick={col.sortable ? () => handleSort(col.id) : undefined}
                  aria-sort={
                    col.sortable
                      ? currentSort.columnId === col.id && currentSort.direction
                        ? currentSort.direction === 'asc' ? 'ascending' : 'descending'
                        : 'none'
                      : undefined
                  }
                >
                  {col.header}
                  {col.sortable && (
                    <SortIndicator
                      direction={currentSort.columnId === col.id ? currentSort.direction : null}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={dataTableStyles.body}>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className={dataTableStyles.empty}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, i) => (
                <tr
                  key={rowKey ? String(row[rowKey]) : i}
                  data-slot="data-table-row"
                  className={cn(
                    dataTableStyles.row,
                    hoverable && dataTableStyles.rowHoverable,
                    striped && dataTableStyles.rowStriped
                  )}
                >
                  {columns.map((col) => (
                    <td
                      key={col.id}
                      data-slot="data-table-cell"
                      className={cn(
                        compact ? dataTableStyles.cellCompact : dataTableStyles.cell,
                        bordered && dataTableStyles.cellBordered,
                        alignClass(col.align)
                      )}
                    >
                      {getCellValue(row, col)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {loading && (
        <div className={dataTableStyles.loading} role="status" aria-label="Loading data" aria-live="polite">
          <svg className="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export const DataTable = forwardRef(DataTableInner) as unknown as <T>(
  props: DataTableProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement | null;

(DataTable as { displayName?: string }).displayName = 'DataTable';
