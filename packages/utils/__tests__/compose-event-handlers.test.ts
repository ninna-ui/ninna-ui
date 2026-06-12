/// <reference types="@ninna-ui/test-config/vitest.d.ts" />
import { describe, it, expect, vi } from 'vitest';
import { composeEventHandlers } from '../src/compose-handlers';

describe('composeEventHandlers', () => {
  it('calls originalHandler first, then internalHandler', () => {
    const order: string[] = [];
    const original = vi.fn(() => order.push('original'));
    const internal = vi.fn(() => order.push('internal'));

    const handler = composeEventHandlers(original, internal);
    handler(new MouseEvent('click'));

    expect(original).toHaveBeenCalledTimes(1);
    expect(internal).toHaveBeenCalledTimes(1);
    expect(order).toEqual(['original', 'internal']);
  });

  it('skips internalHandler when originalHandler calls preventDefault', () => {
    const internal = vi.fn();
    const original = vi.fn((e: Event) => e.preventDefault());

    const handler = composeEventHandlers(original, internal);
    handler(new MouseEvent('click', { cancelable: true }));

    expect(original).toHaveBeenCalledTimes(1);
    expect(internal).not.toHaveBeenCalled();
  });

  it('calls internalHandler even after preventDefault when checkForDefaultPrevented is false', () => {
    const internal = vi.fn();
    const original = vi.fn((e: Event) => e.preventDefault());

    const handler = composeEventHandlers(original, internal, { checkForDefaultPrevented: false });
    handler(new MouseEvent('click', { cancelable: true }));

    expect(internal).toHaveBeenCalledTimes(1);
  });

  it('works with no originalHandler (undefined)', () => {
    const internal = vi.fn();
    const handler = composeEventHandlers(undefined, internal);
    handler(new MouseEvent('click'));
    expect(internal).toHaveBeenCalledTimes(1);
  });

  it('works with no internalHandler (undefined)', () => {
    const original = vi.fn();
    const handler = composeEventHandlers(original, undefined);
    expect(() => handler(new MouseEvent('click'))).not.toThrow();
    expect(original).toHaveBeenCalledTimes(1);
  });

  it('works with both handlers undefined', () => {
    const handler = composeEventHandlers(undefined, undefined);
    expect(() => handler(new MouseEvent('click'))).not.toThrow();
  });
});
