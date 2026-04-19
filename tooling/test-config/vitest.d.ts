/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare module 'vitest' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {
        toBeAccessible(): Promise<T>;
    }
}
