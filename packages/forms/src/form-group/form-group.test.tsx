import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FormGroup } from './form-group';

describe('FormGroup', () => {
  it('renders with children', () => {
    render(
      <FormGroup legend="Personal Info">
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(
      <FormGroup data-testid="fg" legend="Info">
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg')).toHaveAttribute('data-slot', 'form-group');
  });

  it('has displayName', () => {
    expect(FormGroup.displayName).toBe('FormGroup');
  });

  it('renders as a fieldset element', () => {
    render(
      <FormGroup data-testid="fg" legend="Info">
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg').tagName).toBe('FIELDSET');
  });

  it('renders description', () => {
    render(
      <FormGroup legend="Info" description="Helpful description">
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByText('Helpful description')).toBeInTheDocument();
  });

  it('sets disabled attribute when disabled', () => {
    render(
      <FormGroup data-testid="fg" legend="Info" disabled>
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg')).toBeDisabled();
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s spacing', (spacing) => {
    render(
      <FormGroup data-testid="fg" legend="Info" spacing={spacing}>
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg')).toBeInTheDocument();
  });

  it.each(['vertical', 'horizontal'] as const)('renders %s direction', (direction) => {
    render(
      <FormGroup data-testid="fg" legend="Info" direction={direction}>
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <FormGroup ref={ref} legend="Info">
        <input type="text" />
      </FormGroup>
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLFieldSetElement));
  });

  it('merges custom className', () => {
    render(
      <FormGroup data-testid="fg" legend="Info" className="custom">
        <input type="text" />
      </FormGroup>
    );
    expect(screen.getByTestId('fg').className).toContain('custom');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormGroup legend="Contact Details">
        <input type="email" aria-label="Email" />
      </FormGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
