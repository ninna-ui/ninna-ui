import { forwardRef, useState, useCallback } from 'react';
import { cn } from '@ninna-ui/utils';
import { treeStyles, treeItemVariants } from './tree.styles';
import type { TreeProps, TreeItemProps, TreeNode } from './tree.types';

function getAllNodeIds(nodes: TreeNode[]): string[] {
  return nodes.flatMap((node) => [node.id, ...(node.children ? getAllNodeIds(node.children) : [])]);
}

const TreeItem = ({
  node,
  level,
  selectedId,
  onSelect,
  expandedIds,
  onToggle,
  showLines,
  showIcons,
}: Omit<TreeItemProps, 'aria-label' | 'aria-labelledby'>) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;

  const handleClick = (e: React.MouseEvent) => {
    if (node.disabled) return;
    e.stopPropagation();
    if (hasChildren) onToggle(node.id);
    onSelect?.(node.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (node.disabled) return;
      if (hasChildren) onToggle(node.id);
      onSelect?.(node.id);
    }
    if (e.key === 'ArrowRight' && hasChildren && !isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    }
    if (e.key === 'ArrowLeft' && hasChildren && isExpanded) {
      e.preventDefault();
      onToggle(node.id);
    }
  };

  return (
    <div data-slot="tree-item" className={treeStyles.item}>
      <div
        className={treeStyles.itemWrapper}
        style={{ paddingLeft: `${level * 24}px` }}
      >
        <div
          role="treeitem"
          tabIndex={node.disabled ? -1 : 0}
          aria-selected={isSelected}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-disabled={node.disabled || undefined}
          aria-level={level + 1}
          className={cn(
            treeItemVariants({ isSelected, disabled: !!node.disabled })
          )}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {hasChildren ? (
            <span
              className={treeStyles.toggle}
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation();
                onToggle(node.id);
              }}
            >
              <svg className="size-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                {isExpanded ? (
                  <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </span>
          ) : (
            <span className={treeStyles.togglePlaceholder} />
          )}
          {showIcons && node.icon && <span className={treeStyles.icon}>{node.icon}</span>}
          <span className={treeStyles.label}>{node.label}</span>
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div
          role="group"
          className={treeStyles.children}
        >
          {showLines && (
            <div
              className={treeStyles.line}
              aria-hidden="true"
              style={{ left: `${level * 24 + 18}px` }}
            />
          )}
          {node.children!.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
              expandedIds={expandedIds}
              onToggle={onToggle}
              showLines={showLines}
              showIcons={showIcons}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeRoot = forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      data,
      selectedId,
      defaultExpandedIds,
      onSelect,
      showLines = true,
      showIcons = true,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref
  ) => {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(
      () => new Set(defaultExpandedIds ?? getAllNodeIds(data))
    );

    const handleToggle = useCallback((id: string) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }, []);

    return (
      <div
        ref={ref}
        role="tree"
        data-slot="tree"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={cn(treeStyles.root, "pl-4", className)}
        {...props}
      >
        {data.map((node) => (
          <TreeItem
            key={node.id}
            node={node}
            level={0}
            selectedId={selectedId}
            onSelect={onSelect}
            expandedIds={expandedIds}
            onToggle={handleToggle}
            showLines={showLines}
            showIcons={showIcons}
          />
        ))}
      </div>
    );
  }
);

TreeRoot.displayName = 'Tree';

export const Tree = TreeRoot;
