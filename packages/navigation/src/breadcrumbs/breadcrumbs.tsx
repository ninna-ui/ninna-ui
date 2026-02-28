import { forwardRef, Children, createContext, useContext, isValidElement } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@ninna-ui/utils';
import { breadcrumbsStyles, BREADCRUMBS_SIZES } from './breadcrumbs.styles';
import type {
  BreadcrumbsProps,
  BreadcrumbsItemProps,
  BreadcrumbsLinkProps,
  BreadcrumbsSeparatorProps,
  BreadcrumbsEllipsisProps,
} from './breadcrumbs.types';

interface BreadcrumbsContextValue {
  separator: ReactNode;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({ separator: '/' });

const DefaultSeparator = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const BreadcrumbsRoot = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ separator, maxItems, size = 'md', className, children, 'aria-label': ariaLabel = 'Breadcrumb', ...props }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);
    const sep = separator ?? <DefaultSeparator />;

    let visibleItems = items;
    let showEllipsis = false;

    if (maxItems && items.length > maxItems && maxItems > 2) {
      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 1));
      visibleItems = [firstItem!, ...lastItems];
      showEllipsis = true;
    }

    return (
      <BreadcrumbsContext.Provider value={{ separator: sep }}>
        <nav
          ref={ref}
          aria-label={ariaLabel}
          data-slot="breadcrumbs"
          className={cn(breadcrumbsStyles.nav, BREADCRUMBS_SIZES[size], className)}
          {...props}
        >
          <ol className={breadcrumbsStyles.list}>
            {visibleItems.map((child, index) => {
              const isFirst = index === 0;
              const showSep = !isFirst && !(showEllipsis && index === 1);
              const showEllipsisBefore = showEllipsis && index === 1;
              const itemKey = isValidElement(child) && child.key != null ? child.key : index;

              return (
                <span key={itemKey} className="contents">
                  {showEllipsisBefore && (
                    <>
                      <BreadcrumbsSeparator />
                      <li className={breadcrumbsStyles.item}>
                        <BreadcrumbsEllipsis />
                      </li>
                    </>
                  )}
                  {showSep && <BreadcrumbsSeparator />}
                  {child}
                </span>
              );
            })}
          </ol>
        </nav>
      </BreadcrumbsContext.Provider>
    );
  }
);

BreadcrumbsRoot.displayName = 'Breadcrumbs';

const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} data-slot="breadcrumbs-item" className={cn(breadcrumbsStyles.item, className)} {...props}>
        {children}
      </li>
    );
  }
);

BreadcrumbsItem.displayName = 'Breadcrumbs.Item';

const BreadcrumbsLink = forwardRef<HTMLAnchorElement, BreadcrumbsLinkProps>(
  ({ current, icon, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        data-slot="breadcrumbs-link"
        aria-current={current ? 'page' : undefined}
        className={cn(
          breadcrumbsStyles.link,
          current && breadcrumbsStyles.linkCurrent,
          icon && 'inline-flex items-center gap-1.5',
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
        {children}
      </a>
    );
  }
);

BreadcrumbsLink.displayName = 'Breadcrumbs.Link';

const BreadcrumbsSeparator = forwardRef<HTMLLIElement, BreadcrumbsSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    const { separator } = useContext(BreadcrumbsContext);
    return (
      <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        data-slot="breadcrumbs-separator"
        className={cn(breadcrumbsStyles.separator, className)}
        {...props}
      >
        {children ?? separator}
      </li>
    );
  }
);

BreadcrumbsSeparator.displayName = 'Breadcrumbs.Separator';

const BreadcrumbsEllipsis = forwardRef<HTMLSpanElement, BreadcrumbsEllipsisProps>(
  ({ className, 'aria-label': ariaLabel = 'More pages', ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="presentation"
        aria-label={ariaLabel}
        data-slot="breadcrumbs-ellipsis"
        className={cn(breadcrumbsStyles.ellipsis, className)}
        {...props}
      >
        &#8230;
      </span>
    );
  }
);

BreadcrumbsEllipsis.displayName = 'Breadcrumbs.Ellipsis';

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
  Link: BreadcrumbsLink,
  Separator: BreadcrumbsSeparator,
  Ellipsis: BreadcrumbsEllipsis,
});
