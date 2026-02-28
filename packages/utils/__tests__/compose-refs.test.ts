import { describe, it, expect, vi } from 'vitest';

import { composeRefs } from '../src/compose-refs';

describe('composeRefs', () => {
  it('calls all callback refs with the node', () => {
    const ref1 = vi.fn();
    const ref2 = vi.fn();
    const composed = composeRefs(ref1, ref2);

    const node = document.createElement('div');
    composed(node);

    expect(ref1).toHaveBeenCalledWith(node);
    expect(ref2).toHaveBeenCalledWith(node);
  });

  it('sets object refs current property', () => {
    const ref1 = { current: null as HTMLDivElement | null };
    const ref2 = { current: null as HTMLDivElement | null };
    const composed = composeRefs(ref1, ref2);

    const node = document.createElement('div');
    composed(node);

    expect(ref1.current).toBe(node);
    expect(ref2.current).toBe(node);
  });

  it('handles mixed ref types', () => {
    const callbackRef = vi.fn();
    const objectRef = { current: null as HTMLDivElement | null };
    const composed = composeRefs(callbackRef, objectRef);

    const node = document.createElement('div');
    composed(node);

    expect(callbackRef).toHaveBeenCalledWith(node);
    expect(objectRef.current).toBe(node);
  });

  it('handles null refs', () => {
    const ref1 = vi.fn();
    const composed = composeRefs(ref1, null, undefined);

    const node = document.createElement('div');
    composed(node);

    expect(ref1).toHaveBeenCalledWith(node);
  });

  it('handles null node', () => {
    const ref1 = vi.fn();
    const ref2 = { current: document.createElement('div') as HTMLDivElement | null };
    const composed = composeRefs(ref1, ref2);

    composed(null);

    expect(ref1).toHaveBeenCalledWith(null);
    expect(ref2.current).toBe(null);
  });
});
