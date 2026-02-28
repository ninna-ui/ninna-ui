import type { HTMLAttributes, ReactNode } from 'react';

/** EmptyState size options */
export type EmptyStateSize = 'sm' | 'md' | 'lg';

/**
 * Props for the EmptyState component
 */
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Title text
   */
  title: string;

  /**
   * Description text
   */
  description?: string;

  /**
   * Icon to display
   */
  icon?: ReactNode;

  /**
   * Size of the empty state
   * @default "md"
   */
  size?: EmptyStateSize;

  /**
   * Action button or content
   */
  action?: ReactNode;

  /**
   * Additional content below the description
   */
  children?: ReactNode;
}
