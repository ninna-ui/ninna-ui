import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

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
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (checked)', async () => {
    const { container } = render(<Checkbox label="Accept terms" defaultChecked />);
    await expect(container).toBeAccessible();
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
    await expect(container).toBeAccessible();
  });
});

// ── Size / layout regression (visual bug reported by the user:
//    "checkboxes of different sizes don't look like different sizes and
//    don't share a line with their label") ──────────────────────────────
describe('Checkbox sizes', () => {
  it('applies distinct w/h utility classes for sm / md / lg on the indicator', () => {
    const { container: smContainer } = render(<Checkbox size="sm" label="sm" />);
    const { container: mdContainer } = render(<Checkbox size="md" label="md" />);
    const { container: lgContainer } = render(<Checkbox size="lg" label="lg" />);

    const sm = smContainer.querySelector('[data-slot="indicator"]')!;
    const md = mdContainer.querySelector('[data-slot="indicator"]')!;
    const lg = lgContainer.querySelector('[data-slot="indicator"]')!;

    expect(sm.className).toMatch(/\bw-4\b/);
    expect(sm.className).toMatch(/\bh-4\b/);
    expect(md.className).toMatch(/\bw-5\b/);
    expect(md.className).toMatch(/\bh-5\b/);
    expect(lg.className).toMatch(/\bw-6\b/);
    expect(lg.className).toMatch(/\bh-6\b/);
  });

  it('scales the label typography with the checkbox size', () => {
    render(
      <>
        <Checkbox size="sm" label="sm" />
        <Checkbox size="md" label="md" />
        <Checkbox size="lg" label="lg" />
      </>
    );
    expect(screen.getByText('sm').className).toMatch(/\btext-sm\b/);
    expect(screen.getByText('md').className).toMatch(/\btext-base\b/);
    expect(screen.getByText('lg').className).toMatch(/\btext-lg\b/);
  });

  it('centre-aligns the checkbox with its label by default (no description)', () => {
    const { container } = render(<Checkbox label="single-line" />);
    // Wrapper is the outermost div around checkboxElement + labelWrapper.
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain('items-center');
    expect(wrapper.className).not.toContain('items-start');
    // Regression: drop the 44px min-height that visually detached the box.
    expect(wrapper.className).not.toMatch(/min-h-\[44px\]/);
  });

  it('top-aligns the checkbox with the first label line when a description is present', () => {
    const { container } = render(
      <Checkbox label="with desc" description="explanatory text" />
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain('items-start');
    expect(wrapper.className).not.toContain('items-center');
  });
});
