import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';
import { toBeAccessible } from '@sa11y/vitest';

// Register toBeAccessible using OUR vitest 4 expect instance.
// @sa11y/vitest ships with peer dep vitest@^3.x - its registerSa11yMatcher()
// extends the wrong vitest's expect. We import the raw matcher function and
// extend the correct expect ourselves.
expect.extend({ toBeAccessible });

// All mocks are guarded behind `typeof window` so this file is safe to
// import in Node-only test suites (hooks, utils) even though jsdom is the
// default environment.
if (typeof globalThis.window !== 'undefined') {
    // ResizeObserver - required by many Radix primitives
    globalThis.ResizeObserver ??= class ResizeObserver {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
    } as unknown as typeof ResizeObserver;

    // PointerEvent - required by Radix for pointer interactions
    globalThis.PointerEvent ??= class PointerEvent extends Event {
        readonly pointerId: number;
        readonly pointerType: string;
        constructor(type: string, init: PointerEventInit = {}) {
            super(type, init);
            this.pointerId = init.pointerId ?? 0;
            this.pointerType = init.pointerType ?? '';
        }
    } as unknown as typeof PointerEvent;

    // matchMedia - required by useMediaQuery and responsive components
    Object.defineProperty(globalThis, 'matchMedia', {
        writable: true,
        configurable: true,
        value: vi.fn().mockImplementation((query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });

    // HTMLElement pointer capture - required by Radix Slider, Dialog, etc.
    HTMLElement.prototype.hasPointerCapture ??= () => false;
    HTMLElement.prototype.setPointerCapture ??= () => {};
    HTMLElement.prototype.releasePointerCapture ??= () => {};
    HTMLElement.prototype.scrollIntoView ??= () => {};

    // HTMLCanvasElement.getContext - required by axe-core
    HTMLCanvasElement.prototype.getContext = (() => null) as never;

    // getComputedStyle - jsdom stub for Radix animations/transitions
    const origGetComputedStyle = globalThis.getComputedStyle;
    globalThis.getComputedStyle = (elt: Element, pseudoElt?: string | null) => {
        try {
            return origGetComputedStyle(elt, pseudoElt);
        } catch {
            return { getPropertyValue: () => '' } as unknown as CSSStyleDeclaration;
        }
    };
}

// Automatic cleanup after every test for DOM isolation
afterEach(() => {
    cleanup();
});
