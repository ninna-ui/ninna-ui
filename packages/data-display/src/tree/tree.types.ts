import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Data structure for a tree node */
export interface TreeNode {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: ReactNode;
  /** Optional icon */
  icon?: ReactNode;
  /** Child nodes */
  children?: TreeNode[];
  /** Whether the node is disabled */
  disabled?: boolean;
}

/** Props for the Tree root component */
export interface TreeProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /** Accessible label for the tree widget */
  'aria-label'?: string;
  /** Accessible labelledby for the tree widget */
  'aria-labelledby'?: string;
  /** Tree data */
  data: TreeNode[];
  /** Currently selected node id */
  selectedId?: string;
  /** Default expanded node ids */
  defaultExpandedIds?: string[];
  /** Callback when a node is selected */
  onSelect?: (id: string) => void;
  /** Whether to show connecting lines @default true */
  showLines?: boolean;
  /** Whether to show icons @default true */
  showIcons?: boolean;
}

/** Props for a Tree item (internal) */
export interface TreeItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect' | 'onToggle'> {
  /** The tree node data */
  node: TreeNode;
  /** Nesting level */
  level: number;
  /** Currently selected id */
  selectedId?: string;
  /** Selection handler */
  onSelect?: (id: string) => void;
  /** Expanded ids set */
  expandedIds: Set<string>;
  /** Toggle expansion handler */
  onToggle: (id: string) => void;
  /** Whether to show lines */
  showLines: boolean;
  /** Whether to show icons */
  showIcons: boolean;
}
