import { forwardRef, createElement, createContext, useContext } from "react";
import { cn } from "@ninna-ui/utils";
import {
  listStyles,
  getSpacingClass,
  getUnorderedMarkerClass,
  getOrderedMarkerClass,
  getMarkerColorClass,
  getIconColorClass,
} from "./list.styles";
import type { ListProps, ListItemProps } from "./list.types";
import type { Color } from "@ninna-ui/core";
import type { ReactNode } from "react";

/**
 * Context for passing list-level props to items
 */
interface ListContextValue {
  icon?: ReactNode;
  markerColor?: Color;
  hasCustomMarker: boolean;
}

const ListContext = createContext<ListContextValue>({
  hasCustomMarker: false,
});

/**
 * Check icon component
 */
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Arrow icon component
 */
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Get icon for marker type
 */
function getMarkerIcon(marker: string): ReactNode | null {
  switch (marker) {
    case "check":
      return <CheckIcon />;
    case "arrow":
      return <ArrowIcon />;
    default:
      return null;
  }
}

/**
 * List component for rendering styled ordered and unordered lists.
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * 
 * <List type="ordered" marker="decimal">
 *   <ListItem>First</ListItem>
 *   <ListItem>Second</ListItem>
 * </List>
 * 
 * <List marker="check" markerColor="success">
 *   <ListItem>Completed task</ListItem>
 * </List>
 * ```
 */
export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    {
      type = "unordered",
      spacing = "sm",
      marker = type === "ordered" ? "decimal" : "disc",
      markerColor = "neutral",
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isCustomMarker = marker === "check" || marker === "arrow" || marker === "none" || !!icon;
    const markerIcon = icon ?? getMarkerIcon(marker);

    const markerClass = type === "ordered"
      ? getOrderedMarkerClass(marker)
      : getUnorderedMarkerClass(marker);

    const classes = cn(
      listStyles.base,
      getSpacingClass(spacing),
      isCustomMarker ? listStyles.customMarker : markerClass,
      !isCustomMarker && getMarkerColorClass(markerColor),
      className
    );

    const Element = type === "ordered" ? "ol" : "ul";

    return (
      <ListContext.Provider value={{ icon: markerIcon, markerColor, hasCustomMarker: isCustomMarker }}>
        {createElement(
          Element,
          { ref, 'data-slot': 'list', className: classes, ...props },
          children
        )}
      </ListContext.Provider>
    );
  }
);

List.displayName = "List";

/**
 * ListItem component for rendering individual list items.
 *
 * @example
 * ```tsx
 * <ListItem>Basic item</ListItem>
 * <ListItem icon={<CustomIcon />}>Item with custom icon</ListItem>
 * ```
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      icon,
      iconColor,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { icon: listIcon, markerColor, hasCustomMarker } = useContext(ListContext);
    const itemIcon = icon ?? listIcon;
    const itemIconColor = iconColor ?? markerColor ?? "neutral";

    if (hasCustomMarker && itemIcon) {
      return (
        <li
          ref={ref}
          data-slot="list-item"
          className={cn(listStyles.itemBase, listStyles.itemWithIcon, className)}
          {...props}
        >
          <span data-slot="icon" className={cn(listStyles.iconWrapper, getIconColorClass(itemIconColor))}>
            {itemIcon}
          </span>
          <span data-slot="content" className="flex-1">{children}</span>
        </li>
      );
    }

    return (
      <li
        ref={ref}
        data-slot="list-item"
        className={cn(listStyles.itemBase, className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
