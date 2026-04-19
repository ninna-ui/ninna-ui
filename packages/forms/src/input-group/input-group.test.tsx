import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputAddon, InputGroup } from './input-group';

describe('InputAddon', () => {
  it('renders with children', () => {
    render(<InputAddon>https://</InputAddon>);
    expect(screen.getByText('https://')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<InputAddon data-testid="addon">$</InputAddon>);
    expect(screen.getByTestId('addon')).toHaveAttribute('data-slot', 'addon');
  });

  it('has displayName', () => {
    expect(InputAddon.displayName).toBe('InputAddon');
  });

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<InputAddon size={size} data-testid="addon">$</InputAddon>);
    expect(screen.getByTestId('addon')).toBeInTheDocument();
  });

  it.each(['start', 'end'] as const)('renders %s placement', (placement) => {
    render(<InputAddon placement={placement} data-testid="addon">$</InputAddon>);
    expect(screen.getByTestId('addon')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<InputAddon ref={ref}>$</InputAddon>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});

describe('InputGroup', () => {
  it('renders children', () => {
    render(
      <InputGroup startElement={<span>@</span>}>
        <input aria-label="username" />
      </InputGroup>
    );
    expect(screen.getByText('@')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(
      <InputGroup data-testid="group">
        <input aria-label="value" />
      </InputGroup>
    );
    expect(screen.getByTestId('group')).toHaveAttribute('data-slot', 'input-group');
  });

  it('has displayName', () => {
    expect(InputGroup.displayName).toBe('InputGroup');
  });

  it('renders end element', () => {
    render(
      <InputGroup endElement={<span>USD</span>}>
        <input aria-label="amount" />
      </InputGroup>
    );
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  // The following three tests assert the *CSS strategy* applied to each
  // adornment wrapper. We cannot meaningfully exercise CSS `pointer-events`
  // via events because jsdom does not perform CSS-driven hit-testing — see
  // https://github.com/jsdom/jsdom/issues/1742. In the browser, the combined
  // `pointer-events-none` on the wrapper plus the descendant selector
  // re-enabling `button`, `a`, `input` and `[role="button"]` produces the
  // user-facing behaviour (decorative icons transparent, interactive
  // children clickable) described in the component docs.
  it('applies the smart pointer-events strategy to decorative adornments by default', () => {
    render(
      <InputGroup startElement={<svg data-testid="icon" aria-hidden="true" />}>
        <input aria-label="search" />
      </InputGroup>
    );
    const slot = screen.getByTestId('icon').parentElement!;
    expect(slot).toHaveAttribute('data-slot', 'start-element');
    expect(slot.className).toContain('pointer-events-none');
    // Interactive descendants opt back in via a descendant selector.
    expect(slot.className).toMatch(/\[&_button\]:pointer-events-auto/);
    expect(slot.className).toMatch(/\[&_a\]:pointer-events-auto/);
    expect(slot.className).toMatch(/\[&_input\]:pointer-events-auto/);
  });

  it('still routes synthetic clicks to interactive children in tests (event bubbling path)', async () => {
    // Even though jsdom does not enforce CSS hit-testing, this confirms the
    // event path is wired normally when the user lands directly on an
    // interactive child. Regression guard in case we ever stopPropagation.
    const user = userEvent.setup();
    const onButtonClick = vi.fn();
    render(
      <InputGroup
        endElement={
          <button type="button" onClick={onButtonClick} aria-label="toggle">
            toggle
          </button>
        }
      >
        <input aria-label="password" />
      </InputGroup>
    );
    await user.click(screen.getByRole('button', { name: 'toggle' }));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('applies the fully-inert class when endElementPointerEvents="none"', () => {
    render(
      <InputGroup
        endElementPointerEvents="none"
        endElement={
          <button type="button" aria-label="toggle" data-testid="btn">
            toggle
          </button>
        }
      >
        <input aria-label="password" />
      </InputGroup>
    );
    const slot = screen.getByTestId('btn').parentElement!;
    expect(slot).toHaveAttribute('data-slot', 'end-element');
    // Explicit "none" uses a variant that disables ALL descendants, so no
    // `[&_button]:pointer-events-auto` rule should be present.
    expect(slot.className).toContain('pointer-events-none');
    expect(slot.className).not.toMatch(/\[&_button\]:pointer-events-auto/);
  });

  it('applies the fully-enabled class when startElementPointerEvents="auto"', () => {
    render(
      <InputGroup
        startElementPointerEvents="auto"
        startElement={<span data-testid="start">@</span>}
      >
        <input aria-label="username" />
      </InputGroup>
    );
    const slot = screen.getByTestId('start').parentElement!;
    expect(slot.className).toContain('pointer-events-auto');
    expect(slot.className).not.toMatch(/pointer-events-none/);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InputGroup startElement={<span aria-hidden="true">@</span>}>
        <input aria-label="Username" />
      </InputGroup>
    );
    await expect(container).toBeAccessible();
  });
});
