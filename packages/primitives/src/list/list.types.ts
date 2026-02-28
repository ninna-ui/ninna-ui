import type { HTMLAttributes, ReactNode, LiHTMLAttributes } from "react";
import type { Color } from "@ninna-ui/core";

export type ListType = "unordered" | "ordered";
export type ListSpacing = "none" | "sm" | "md" | "lg";
export type ListMarker = "disc" | "circle" | "square" | "decimal" | "alpha" | "roman" | "none" | "check" | "arrow";

export interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  /** List type */
  type?: ListType;
  
  /** Spacing between items */
  spacing?: ListSpacing;
  
  /** Marker style */
  marker?: ListMarker;
  
  /** Marker color */
  markerColor?: Color;
  
  /** Whether to use custom icon markers */
  icon?: ReactNode;
}

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Custom icon for this item */
  icon?: ReactNode;
  
  /** Icon color for this item */
  iconColor?: Color;
}
