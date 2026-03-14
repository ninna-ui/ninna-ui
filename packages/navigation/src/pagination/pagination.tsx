import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { paginationLinkVariants, paginationStyles } from './pagination.styles';
import type {
  PaginationProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationEllipsisProps,
} from './pagination.types';

const ChevronLeftIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(
  ({ size = 'md', className, children, 'aria-label': ariaLabel = 'Pagination', ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        data-slot="pagination"
        data-size={size}
        className={cn(paginationStyles.nav, className)}
        {...props}
      >
        {children}
      </nav>
    );
  }
);

PaginationRoot.displayName = 'Pagination';

const PaginationContent = forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul ref={ref} data-slot="pagination-content" className={cn(paginationStyles.content, className)} {...props}>
        {children}
      </ul>
    );
  }
);

PaginationContent.displayName = 'Pagination.Content';

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} data-slot="pagination-item" className={cn(paginationStyles.item, className)} {...props}>
        {children}
      </li>
    );
  }
);

PaginationItem.displayName = 'Pagination.Item';

const PaginationLink = forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ isActive, size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        data-slot="pagination-link"
        aria-current={isActive ? 'page' : undefined}
        data-active={isActive ? '' : undefined}
        className={cn(
          paginationLinkVariants({ size, active: isActive }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PaginationLink.displayName = 'Pagination.Link';

const PaginationPrevious = forwardRef<HTMLButtonElement, PaginationPreviousProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    return (
      <PaginationLink
        ref={ref}
        aria-label="Go to previous page"
        size={size}
        className={cn(paginationStyles.previous, className)}
        {...props}
      >
        <ChevronLeftIcon />
        {children ?? <span className={paginationStyles.previousLabel}>Previous</span>}
      </PaginationLink>
    );
  }
);

PaginationPrevious.displayName = 'Pagination.Previous';

const PaginationNext = forwardRef<HTMLButtonElement, PaginationNextProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    return (
      <PaginationLink
        ref={ref}
        aria-label="Go to next page"
        size={size}
        className={cn(paginationStyles.next, className)}
        {...props}
      >
        {children ?? <span className={paginationStyles.nextLabel}>Next</span>}
        <ChevronRightIcon />
      </PaginationLink>
    );
  }
);

PaginationNext.displayName = 'Pagination.Next';

const PaginationEllipsis = forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        aria-hidden="true"
        data-slot="pagination-ellipsis"
        className={cn(paginationStyles.ellipsis, className)}
        {...props}
      >
        &#8230;
      </span>
    );
  }
);

PaginationEllipsis.displayName = 'Pagination.Ellipsis';

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
});
