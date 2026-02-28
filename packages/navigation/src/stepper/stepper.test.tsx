import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Stepper } from './stepper';

describe('Stepper', () => {
  it('renders steps and marks active state', () => {
    render(
      <Stepper activeStep={1}>
        <Stepper.Step label="Account" />
        <Stepper.Step label="Profile" />
        <Stepper.Step label="Confirm" />
      </Stepper>
    );

    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(document.querySelectorAll('[data-slot="step"]')).toHaveLength(3);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Stepper activeStep={1}>
        <Stepper.Step label="Account" />
        <Stepper.Step label="Profile" />
      </Stepper>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
