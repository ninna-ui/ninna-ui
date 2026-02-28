import type { ComponentPropsWithoutRef } from 'react';
import type { CompactSize } from '@ninna-ui/core';

/** Props for the Pagination root component */
export interface PaginationProps extends ComponentPropsWithoutRef<'nav'> {
  /** Size of the pagination @default 'md' */
  size?: CompactSize;
}

/** Props for the Pagination content list */
export type PaginationContentProps = ComponentPropsWithoutRef<'ul'>;

/** Props for a Pagination item */
export type PaginationItemProps = ComponentPropsWithoutRef<'li'>;

/** Props for a Pagination link/button */
export interface PaginationLinkProps extends ComponentPropsWithoutRef<'button'> {
  /** Whether this is the active/current page */
  isActive?: boolean;
  /** Size variant @default 'md' */
  size?: CompactSize;
}

/** Props for the Pagination previous button */
export type PaginationPreviousProps = PaginationLinkProps;

/** Props for the Pagination next button */
export type PaginationNextProps = PaginationLinkProps;

/** Props for the Pagination ellipsis indicator */
export type PaginationEllipsisProps = ComponentPropsWithoutRef<'span'>;
