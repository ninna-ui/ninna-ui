import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
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

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InputGroup startElement={<span aria-hidden="true">@</span>}>
        <input aria-label="Username" />
      </InputGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
