/**
 * Shared utility types for Ninna-UI
 */

import type React from 'react';

/**
 * Make all properties in T optional and nullable
 */
export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * Extract the props type from a React component
 */
export type PropsOf<
  C extends React.ElementType
> = React.ComponentPropsWithoutRef<C>;

/**
 * Distributive Omit — works correctly with union types.
 * Prevents TypeScript from collapsing union types when omitting keys.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Polymorphic component props.
 * Merges custom Props with the intrinsic element props of `C`,
 * omitting any conflicting keys from the element's own props.
 * The `as` prop determines the rendered element type.
 *
 * @example
 * type BoxProps<C extends ElementType = 'div'> = PolymorphicProps<C, { shadow?: boolean }>;
 */
export type PolymorphicProps<
  C extends React.ElementType,
  Props = object
> = Props &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof Props | 'as'> & {
    /** Element or component to render as */
    as?: C;
  };

/**
 * Polymorphic component ref — the ref type for element `C`.
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

/**
 * Prettify a type for better IDE display
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & object;

/**
 * Make specific properties required
 */
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Make specific properties optional
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Merge two types, with the second type taking precedence
 */
export type Merge<T, U> = Omit<T, keyof U> & U;

/**
 * Get the value type of an object
 */
export type ValueOf<T> = T[keyof T];
