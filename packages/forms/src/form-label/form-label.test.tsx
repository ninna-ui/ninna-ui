import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FormLabel } from './form-label';

describe('FormLabel', () => {
  it('renders with children', () => {
    render(<FormLabel>Email address</FormLabel>);
    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<FormLabel data-testid="lbl">Email</FormLabel>);
    expect(screen.getByTestId('lbl')).toHaveAttribute('data-slot', 'label');
  });

  it('has displayName', () => {
    expect(FormLabel.displayName).toBe('FormLabel');
  });

  it('renders as a label element', () => {
    render(<FormLabel data-testid="lbl">Email</FormLabel>);
    expect(screen.getByTestId('lbl').tagName).toBe('LABEL');
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<FormLabel data-testid="lbl" size={size}>Email</FormLabel>);
    expect(screen.getByTestId('lbl')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<FormLabel ref={ref}>Email</FormLabel>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLLabelElement));
  });

  it('merges custom className', () => {
    render(<FormLabel data-testid="lbl" className="custom">Email</FormLabel>);
    expect(screen.getByTestId('lbl').className).toContain('custom');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <FormLabel htmlFor="email">Email</FormLabel>
        <input id="email" type="email" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
