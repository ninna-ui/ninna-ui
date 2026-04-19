import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Field } from './field';

describe('Field', () => {
  it('renders with label and child input', () => {
    render(
      <Field label="Email">
        <input type="email" />
      </Field>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Field.displayName).toBe('Field');
  });

  it('has correct data-slot', () => {
    const { container } = render(
      <Field label="Email">
        <input type="email" />
      </Field>
    );
    expect(container.querySelector('[data-slot="field"]')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor/id', () => {
    render(
      <Field label="Email">
        <input type="email" />
      </Field>
    );
    const label = screen.getByText('Email');
    const htmlFor = label.getAttribute('for');
    expect(htmlFor).toBeTruthy();
    const input = document.getElementById(htmlFor!);
    expect(input).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <Field label="Email" required>
        <input type="email" />
      </Field>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(
      <Field label="Email" helperText="We will never share your email">
        <input type="email" />
      </Field>
    );
    expect(screen.getByText('We will never share your email')).toBeInTheDocument();
  });

  it('shows error text when invalid', () => {
    render(
      <Field label="Email" errorText="Email is required" invalid>
        <input type="email" />
      </Field>
    );
    const errorEl = screen.getByText('Email is required');
    expect(errorEl).toBeInTheDocument();
    expect(errorEl).toHaveAttribute('role', 'alert');
  });

  it('sets data-invalid when invalid', () => {
    const { container } = render(
      <Field label="Email" invalid>
        <input type="email" />
      </Field>
    );
    expect(container.querySelector('[data-slot="field"]')).toHaveAttribute('data-invalid', 'true');
  });

  it('sets data-disabled when disabled', () => {
    const { container } = render(
      <Field label="Email" disabled>
        <input type="email" />
      </Field>
    );
    expect(container.querySelector('[data-slot="field"]')).toHaveAttribute('data-disabled', 'true');
  });

  it('passes aria-invalid to child input', () => {
    render(
      <Field label="Email" invalid>
        <input type="email" data-testid="input" />
      </Field>
    );
    expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true');
  });

  it('passes aria-required to child input', () => {
    render(
      <Field label="Email" required>
        <input type="email" data-testid="input" />
      </Field>
    );
    expect(screen.getByTestId('input')).toHaveAttribute('aria-required', 'true');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Field ref={ref} label="Email">
        <input type="email" />
      </Field>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    const { container } = render(
      <Field label="Email" className="custom">
        <input type="email" />
      </Field>
    );
    expect(container.querySelector('[data-slot="field"]')).toHaveClass('custom');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(
      <Field label="Email" helperText="Enter your email address">
        <input type="email" />
      </Field>
    );
    await expect(container).toBeAccessible();
  });

  it('passes axe audit with error state', async () => {
    const { container } = render(
      <Field label="Email" errorText="Email is required" invalid>
        <input type="email" />
      </Field>
    );
    await expect(container).toBeAccessible();
  });
});
