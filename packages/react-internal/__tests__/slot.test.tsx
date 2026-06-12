/// <reference types="@ninna-ui/test-config/vitest.d.ts" />
import { describe, it, expect, vi } from 'vitest';
import { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Slot, Slottable } from '../src/index';

describe('Slot', () => {
  it('renders its child element instead of a wrapper', () => {
    render(
      <Slot data-testid="slotted">
        <a href="/home">Home</a>
      </Slot>
    );
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveAttribute('data-testid', 'slotted');
  });

  it('merges className from slot and child', () => {
    render(
      <Slot className="from-slot">
        <span className="from-child">text</span>
      </Slot>
    );
    const el = screen.getByText('text');
    expect(el).toHaveClass('from-slot');
    expect(el).toHaveClass('from-child');
  });

  it('merges style objects, child winning on conflicts', () => {
    render(
      <Slot style={{ color: 'red', margin: '4px' }}>
        <span style={{ color: 'blue' }}>styled</span>
      </Slot>
    );
    const el = screen.getByText('styled');
    expect(el).toHaveStyle({ color: 'rgb(0, 0, 255)', margin: '4px' });
  });

  it('composes event handlers - child first, then slot', () => {
    const order: string[] = [];
    const slotClick = vi.fn(() => order.push('slot'));
    const childClick = vi.fn(() => order.push('child'));

    render(
      <Slot onClick={slotClick}>
        <button onClick={childClick}>click me</button>
      </Slot>
    );
    fireEvent.click(screen.getByRole('button', { name: 'click me' }));

    expect(childClick).toHaveBeenCalledTimes(1);
    expect(slotClick).toHaveBeenCalledTimes(1);
    expect(order).toEqual(['child', 'slot']);
  });

  it('forwards the ref to the child DOM node', () => {
    const ref = createRef<HTMLElement>();
    render(
      <Slot ref={ref}>
        <button>with ref</button>
      </Slot>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('with ref');
  });

  it('supports Slottable for mixed children', () => {
    render(
      <Slot data-testid="root">
        <span data-testid="before">before</span>
        <Slottable>
          <button>target</button>
        </Slottable>
        <span data-testid="after">after</span>
      </Slot>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'root');
    expect(screen.getByText('before')).toBeInTheDocument();
    expect(screen.getByText('after')).toBeInTheDocument();
  });
});

describe('Slottable', () => {
  it('renders its children transparently', () => {
    render(<Slottable>plain text</Slottable>);
    expect(screen.getByText('plain text')).toBeInTheDocument();
  });
});
