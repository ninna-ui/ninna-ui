import type { HTMLAttributes, ReactNode } from 'react';
import type { Radius } from '@ninna-ui/core';

/** Skeleton animation variant options */
export type SkeletonVariant = 'pulse' | 'shine' | 'none';

/**
 * Props for the Skeleton component
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Animation variant
   * @default "pulse"
   */
  variant?: SkeletonVariant;

  /**
   * Width of the skeleton
   */
  width?: string | number;

  /**
   * Height of the skeleton
   */
  height?: string | number;

  /**
   * Border radius
   * @default "md"
   */
  radius?: Radius;

  /**
   * Whether the skeleton is loading
   * @default true
   */
  loading?: boolean;

  /**
   * Content to show when not loading
   */
  children?: ReactNode;
}

/**
 * Props for the SkeletonCircle component
 */
export interface SkeletonCircleProps extends Omit<SkeletonProps, "radius"> {
  /**
   * Size of the circle (width and height)
   * @default "40px"
   */
  size?: string | number;
}

/**
 * Props for the SkeletonText component
 */
export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of lines to render
   * @default 3
   */
  noOfLines?: number;

  /**
   * Gap between lines
   * @default "8px"
   */
  gap?: string | number;

  /**
   * Animation variant
   * @default "pulse"
   */
  variant?: SkeletonVariant;

  /**
   * Whether the skeleton is loading
   * @default true
   */
  loading?: boolean;

  /**
   * Content to show when not loading
   */
  children?: ReactNode;
}
