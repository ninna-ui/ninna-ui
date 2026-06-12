import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    await expect(container).toBeAccessible();
  });

  describe('keyboard navigation', () => {
    it('step before activeStep has data-status="complete"', () => {
      render(
        <Stepper activeStep={2}>
          <Stepper.Step label="Step 1" />
          <Stepper.Step label="Step 2" />
          <Stepper.Step label="Step 3" />
        </Stepper>
      );
      const steps = document.querySelectorAll('[data-slot="step"]');
      expect(steps[0]).toHaveAttribute('data-status', 'complete');
      expect(steps[1]).toHaveAttribute('data-status', 'complete');
      expect(steps[2]).toHaveAttribute('data-status', 'current');
    });

    it('active step has data-status="current"', () => {
      render(
        <Stepper activeStep={1}>
          <Stepper.Step label="Account" />
          <Stepper.Step label="Profile" />
          <Stepper.Step label="Confirm" />
        </Stepper>
      );
      const steps = document.querySelectorAll('[data-slot="step"]');
      expect(steps[0]).toHaveAttribute('data-status', 'complete');
      expect(steps[1]).toHaveAttribute('data-status', 'current');
      expect(steps[2]).toHaveAttribute('data-status', 'upcoming');
    });

    it('upcoming step has data-status="upcoming"', () => {
      render(
        <Stepper activeStep={0}>
          <Stepper.Step label="First" />
          <Stepper.Step label="Second" />
        </Stepper>
      );
      const steps = document.querySelectorAll('[data-slot="step"]');
      expect(steps[1]).toHaveAttribute('data-status', 'upcoming');
    });

    it('each step has an accessible aria-label describing its state', () => {
      render(
        <Stepper activeStep={1}>
          <Stepper.Step label="Account" />
          <Stepper.Step label="Profile" />
        </Stepper>
      );
      const steps = document.querySelectorAll('[data-slot="step"]');
      expect(steps[0]?.getAttribute('aria-label')).toMatch(/complete/i);
      expect(steps[1]?.getAttribute('aria-label')).toMatch(/current/i);
    });
  });
});
