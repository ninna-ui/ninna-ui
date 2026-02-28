import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Checkbox, CheckboxGroup, CheckboxGroupItem } from './checkbox';

describe('Checkbox', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('renders without label', () => {
    const { container } = render(<Checkbox />);
    const checkbox = container.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Checkbox label="Test" />);
    const checkbox = document.querySelector('[data-slot="checkbox"]');
    expect(checkbox).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect(Checkbox.displayName).toBe('Checkbox');
  });

  // ── Controlled / Uncontrolled ──────────────────────────────
  it('works as uncontrolled with defaultChecked', () => {
    render(<Checkbox label="Test" defaultChecked />);
    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();
  });

  it('works as controlled', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Test" checked={false} onCheckedChange={onChange} />);
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });

  it('toggles when clicked (uncontrolled)', async () => {
    render(<Checkbox label="Test" />);
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    await waitFor(() => {
      expect(input).toBeChecked();
    });
  });

  // ── Disabled ───────────────────────────────────────────────
  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Test" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  // ── Invalid ────────────────────────────────────────────────
  it('has aria-invalid when invalid', () => {
    render(<Checkbox label="Test" invalid />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Indeterminate ──────────────────────────────────────────
  it('has aria-checked="mixed" when indeterminate', () => {
    render(<Checkbox label="Test" indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
  });

  // ── Label position ─────────────────────────────────────────
  it('renders label at end by default', () => {
    render(<Checkbox label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Checkbox label="Test" description="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref to input', () => {
    const ref = vi.fn();
    render(<Checkbox ref={ref} label="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Checkbox label="Accept terms" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (checked)', async () => {
    const { container } = render(<Checkbox label="Accept terms" defaultChecked />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('CheckboxGroup', () => {
  it('renders children', () => {
    render(
      <CheckboxGroup>
        <CheckboxGroupItem value="a" label="Option A" />
        <CheckboxGroupItem value="b" label="Option B" />
      </CheckboxGroup>
    );
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
  });

  it('has role="group"', () => {
    render(
      <CheckboxGroup>
        <CheckboxGroupItem value="a" label="A" />
      </CheckboxGroup>
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect(CheckboxGroup.displayName).toBe('CheckboxGroup');
  });

  it('manages selection state', async () => {
    const onChange = vi.fn();
    render(
      <CheckboxGroup value={[]} onValueChange={onChange}>
        <CheckboxGroupItem value="a" label="Option A" />
        <CheckboxGroupItem value="b" label="Option B" />
      </CheckboxGroup>
    );
    fireEvent.click(screen.getAllByRole('checkbox')[0]!);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(['a']);
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <CheckboxGroup>
        <CheckboxGroupItem value="a" label="Option A" />
        <CheckboxGroupItem value="b" label="Option B" />
      </CheckboxGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
