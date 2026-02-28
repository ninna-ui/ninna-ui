/**
 * @ninna-ui/utils
 * Utility functions for the Ninna-UI design system
 * 
 * ⚠️ NOTE: This package must NOT contain any React/JSX code
 * Slot component has been moved to @ninna-ui/react-internal
 */

export { cn } from './cn.js';
export { composeRefs, type ComposedRef } from './compose-refs.js';
export { composeEventHandlers } from './compose-handlers.js';
export { createContext, type CreateContextReturn } from './create-context.js';
export { KEYS } from './keyboard.js';
export { canUseDOM, getOwnerWindow } from './dom.js';
export type * from './types.js';
