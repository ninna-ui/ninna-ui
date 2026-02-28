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
 * Polymorphic component props
 */
export type PolymorphicProps<
  C extends React.ElementType,
  Props = object
> = Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props> & {
    as?: C;
  };

/**
 * Polymorphic component ref
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
