/**
 * SSR-safe DOM utilities
 */

/**
 * Check if DOM APIs are available
 * Safe to use at module level
 */
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

/**
 * Get the owner document of an element
 * Falls back to global document if available
 */
function getOwnerDocument(
  element?: Element | null
): Document | undefined {
  return canUseDOM
    ? element?.ownerDocument ?? document
    : undefined;
}

/**
 * Get the owner window of an element
 * Falls back to global window if available
 */
export function getOwnerWindow(
  element?: Element | null
): (Window & typeof globalThis) | undefined {
  const doc = getOwnerDocument(element);
  return doc?.defaultView ?? (canUseDOM ? window : undefined);
}
