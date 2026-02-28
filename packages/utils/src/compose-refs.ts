/**
 * Compose multiple refs into a single ref callback
 * Useful when you need to pass a ref to multiple consumers
 */

export type ComposedRef<T> =
  | ((instance: T | null) => void)
  | { current: T | null }
  | null
  | undefined;

/**
 * Compose multiple refs into a single ref callback
 *
 * @example
 * const Component = forwardRef((props, forwardedRef) => {
 *   const internalRef = useRef(null);
 *   return <div ref={composeRefs(forwardedRef, internalRef)} />;
 * });
 */
export function composeRefs<T>(
  ...refs: ComposedRef<T>[]
): (instance: T | null) => void {
  return (instance: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref != null) {
        ref.current = instance;
      }
    });
  };
}
