import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './input';
import { FormControl } from '../form-control';

describe('Input', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('has displayName', () => {
    expect(Input.displayName).toBe('Input');
  });

  it('renders as an input element', () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId('input').tagName).toBe('INPUT');
  });

  // ── Controlled / Uncontrolled ──────────────────────────────
  it('works as controlled', () => {
    const onChange = vi.fn();
    render(<Input value="hello" onChange={onChange} />);
    const input = screen.getByDisplayValue('hello');
    expect(input).toBeInTheDocument();
  });

  it('works as uncontrolled with defaultValue', () => {
    render(<Input defaultValue="initial" />);
    expect(screen.getByDisplayValue('initial')).toBeInTheDocument();
  });

  // ── Invalid ────────────────────────────────────────────────
  it('has aria-invalid when invalid', () => {
    render(<Input invalid data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('has data-invalid when invalid', () => {
    render(<Input invalid data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('data-invalid', 'true');
  });

  // ── Disabled ───────────────────────────────────────────────
  it('is disabled when disabled prop is true', () => {
    render(<Input disabled data-testid="input" />);
    expect(screen.getByTestId('input')).toBeDisabled();
  });

  // ── Clearable ──────────────────────────────────────────────
  it('shows clear button when clearable and has value', () => {
    render(<Input clearable defaultValue="hello" />);
    expect(screen.getByLabelText('Clear input')).toBeInTheDocument();
  });

  it('does not show clear button when empty', () => {
    render(<Input clearable />);
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument();
  });

  it('calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<Input clearable defaultValue="hello" onClear={onClear} />);
    await user.click(screen.getByLabelText('Clear input'));
    await waitFor(() => {
      expect(onClear).toHaveBeenCalledOnce();
    });
  });

  // ── Counter ────────────────────────────────────────────────
  it('shows character counter', () => {
    render(<Input showCounter maxLength={100} defaultValue="hello" />);
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  // ── Floating label ─────────────────────────────────────────
  it('renders floating label', () => {
    render(<Input floatingLabel="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Input size={size} data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['outline', 'filled', 'flushed'] as const)('renders %s variant', (variant) => {
    render(<Input variant={variant} data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(
      <label htmlFor="email">
        Email
        <Input id="email" placeholder="Enter email" />
      </label>
    );
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (clearable)', async () => {
    const { container } = render(
      <label htmlFor="search">
        Search
        <Input id="search" placeholder="Search" clearable />
      </label>
    );
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Input className="custom-class" data-testid="input" />);
    expect(screen.getByTestId('input').className).toContain('custom-class');
  });

  // ── FormControl context integration ────────────────────────
  it('inherits disabled, required and aria-invalid from a surrounding FormControl', () => {
    render(
      <FormControl isDisabled isRequired isInvalid>
        <Input data-testid="input" />
      </FormControl>
    );
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('adopts the id provided by FormControl context (so <FormLabel htmlFor> matches)', () => {
    render(
      <FormControl id="ctx-id">
        <Input data-testid="input" />
      </FormControl>
    );
    expect(screen.getByTestId('input')).toHaveAttribute('id', 'ctx-id');
  });
});
