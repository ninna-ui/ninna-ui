# @ninna-ui/utils

> Shared utility functions for the Ninna-UI design system — class merging, ref composition, type-safe context, and SSR helpers.

[![npm](https://img.shields.io/npm/v/@ninna-ui/utils.svg)](https://www.npmjs.com/package/@ninna-ui/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

Shared utility functions used across all [Ninna UI](../../README.md) component packages. Core utilities (`cn`, `KEYS`, `canUseDOM`) are pure functions with **no React dependency**. React-aware utilities (`createContext`, `composeRefs`) use React as an **optional peer dependency**.

## Installation

```bash
pnpm add @ninna-ui/utils
```

## Exports

### `cn(...inputs)` — Class Name Merger

Combines Tailwind CSS classes with intelligent conflict resolution. Built on `clsx` + `tailwind-merge`.

```typescript
import { cn } from '@ninna-ui/utils';

cn('px-4 py-2', 'px-6');              // "py-2 px-6" — px-4 overridden
cn('text-red-500', false && 'hidden'); // "text-red-500"
cn('rounded-md', undefined, 'p-4');    // "rounded-md p-4"
```

### `composeRefs(...refs)` — Ref Composition

Combines multiple React refs into a single ref callback. Essential for `forwardRef` components that also use internal refs.

```typescript
import { composeRefs } from '@ninna-ui/utils';

const Component = forwardRef((props, forwardedRef) => {
  const internalRef = useRef(null);
  return <div ref={composeRefs(forwardedRef, internalRef)} />;
});
```

### `composeEventHandlers(external, internal)` — Event Handler Composition

Chains event handlers so both external (user-provided) and internal handlers run. Respects `event.preventDefault()`.

```typescript
import { composeEventHandlers } from '@ninna-ui/utils';

<button onClick={composeEventHandlers(props.onClick, handleInternalClick)} />
```

### `createContext(name)` — Type-Safe Context

Creates a React context with a required provider. Throws a helpful error if consumed outside its provider.

```typescript
import { createContext } from '@ninna-ui/utils';

const [FormProvider, useFormContext] = createContext<FormContextValue>('FormControl');
```

### `KEYS` — Keyboard Constants

Standard keyboard key constants for accessible event handling:

```typescript
import { KEYS } from '@ninna-ui/utils';

KEYS.ENTER      // "Enter"
KEYS.ESCAPE     // "Escape"
KEYS.SPACE      // " "
KEYS.ARROW_UP   // "ArrowUp"
KEYS.ARROW_DOWN // "ArrowDown"
KEYS.TAB        // "Tab"
```

### `canUseDOM` / `isBrowser` — SSR Safety

Runtime checks for safe DOM access in server-side rendering contexts:

```typescript
import { canUseDOM, isBrowser } from '@ninna-ui/utils';

if (canUseDOM) {
  // Safe to access window, document
}
```

## Architecture Rules

- **React is optional** — `cn`, `KEYS`, `canUseDOM` are pure; `createContext` and `composeRefs` require React
- **No DOM APIs** — Must work in SSR contexts (`canUseDOM` is a check, not a usage)
- **No `@ninna-ui/*` imports** — This is a leaf dependency
- **No side effects** — All functions are pure

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
