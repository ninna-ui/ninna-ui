/**
 * Compose multiple event handlers into a single handler
 * Ensures all handlers are called and respects preventDefault
 */

/**
 * Compose event handlers, calling the internal handler first
 * If the original handler calls preventDefault, the internal handler won't be called
 *
 * @example
 * <button
 *   onClick={composeEventHandlers(props.onClick, () => {
 *     // Internal click handler
 *   })}
 * />
 */
export function composeEventHandlers<E>(
  originalHandler?: (event: E) => void,
  internalHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
): (event: E) => void {
  return function handleEvent(event: E) {
    originalHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      internalHandler?.(event);
    }
  };
}
