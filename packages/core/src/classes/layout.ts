/**
 * Layout Class Mappings
 * Shared gap, grid, and flex Tailwind class mappings
 */
import type {
  GapSize,
  GridColumns,
  GridRows,
  FlexDirection,
  FlexAlign,
  FlexJustify,
  FlexWrap,
  ResponsiveValue,
} from '../tokens';

/** Gap size class mappings */
export const GAP_SIZES: Record<GapSize, string> = {
  '0': 'gap-0',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
  '12': 'gap-12',
  '14': 'gap-14',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
};

/** Row gap size class mappings */
export const ROW_GAP_SIZES: Record<GapSize, string> = {
  '0': 'gap-y-0',
  '1': 'gap-y-1',
  '2': 'gap-y-2',
  '3': 'gap-y-3',
  '4': 'gap-y-4',
  '5': 'gap-y-5',
  '6': 'gap-y-6',
  '8': 'gap-y-8',
  '10': 'gap-y-10',
  '12': 'gap-y-12',
  '14': 'gap-y-14',
  '16': 'gap-y-16',
  '20': 'gap-y-20',
  '24': 'gap-y-24',
};

/** Column gap size class mappings */
export const COLUMN_GAP_SIZES: Record<GapSize, string> = {
  '0': 'gap-x-0',
  '1': 'gap-x-1',
  '2': 'gap-x-2',
  '3': 'gap-x-3',
  '4': 'gap-x-4',
  '5': 'gap-x-5',
  '6': 'gap-x-6',
  '8': 'gap-x-8',
  '10': 'gap-x-10',
  '12': 'gap-x-12',
  '14': 'gap-x-14',
  '16': 'gap-x-16',
  '20': 'gap-x-20',
  '24': 'gap-x-24',
};

/** Grid columns class mappings */
export const GRID_COLUMNS: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  none: 'grid-cols-none',
};

/**
 * Responsive grid columns — prefix each column class with a breakpoint.
 * Used internally by Grid's responsive `columns` prop.
 *
 * Accepts either a fixed `GridColumns` value or a `ResponsiveValue<GridColumns>`
 * breakpoint map.
 *
 * @example getResponsiveGridCols({ base: 1, md: 2, lg: 4 })
 * // → 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
 */
export function getResponsiveGridCols(
  value: ResponsiveValue<GridColumns>
): string {
  if (typeof value === 'number' || value === 'none') {
    return GRID_COLUMNS[value];
  }

  const entries = Object.entries(value);
  if (entries.length === 0) return '';

  return entries
    .map(([bp, cols]) => {
      const colClass = GRID_COLUMNS[cols as GridColumns];
      return bp === 'base' ? colClass : `${bp}:${colClass}`;
    })
    .join(' ');
}

/** Grid rows class mappings */
export const GRID_ROWS: Record<GridRows, string> = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  none: 'grid-rows-none',
};

/** Flex direction class mappings */
export const FLEX_DIRECTION: Record<FlexDirection, string> = {
  row:            'flex-row',
  column:         'flex-col',
  'row-reverse':  'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

/** Flex align-items class mappings */
export const FLEX_ALIGN: Record<FlexAlign, string> = {
  start:    'items-start',
  center:   'items-center',
  end:      'items-end',
  stretch:  'items-stretch',
  baseline: 'items-baseline',
};

/** Flex justify-content class mappings */
export const FLEX_JUSTIFY: Record<FlexJustify, string> = {
  start:   'justify-start',
  center:  'justify-center',
  end:     'justify-end',
  between: 'justify-between',
  around:  'justify-around',
  evenly:  'justify-evenly',
};

/** Flex wrap class mappings */
export const FLEX_WRAP: Record<FlexWrap, string> = {
  wrap:          'flex-wrap',
  nowrap:        'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};
