import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { CompactSize } from '@ninna-ui/core';

/** Props for the Breadcrumbs root component */
export interface BreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
  /** Custom separator between items @default '/' */
  separator?: ReactNode;
  /** Maximum number of visible items before collapsing */
  maxItems?: number;
  /** Size of the breadcrumbs @default 'md' */
  size?: CompactSize;
}

/** Props for a Breadcrumbs item */
export type BreadcrumbsItemProps = ComponentPropsWithoutRef<'li'>;

/** Props for a Breadcrumbs link */
export interface BreadcrumbsLinkProps extends ComponentPropsWithoutRef<'a'> {
  /** Whether this is the current/active page */
  current?: boolean;
  /** Icon element to render before the link text */
  icon?: ReactNode;
}

/** Props for the Breadcrumbs separator */
export type BreadcrumbsSeparatorProps = ComponentPropsWithoutRef<'li'>;

/** Props for the Breadcrumbs ellipsis */
export type BreadcrumbsEllipsisProps = ComponentPropsWithoutRef<'span'>;
