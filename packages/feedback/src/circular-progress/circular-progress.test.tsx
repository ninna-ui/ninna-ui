import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CircularProgress } from './circular-progress';

describe('CircularProgress', () => {
  it('renders progressbar role with value bounds', () => {
    render(<CircularProgress value={25} max={100} label="Upload progress" />);
    const progress = screen.getByRole('progressbar', { name: 'Upload progress' });
    expect(progress).toHaveAttribute('aria-valuenow', '25');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders centered value label when enabled', () => {
    render(<CircularProgress value={40} max={100} showValue labelPosition="center" />);
    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  it('sets aria-busy when indeterminate', () => {
    render(<CircularProgress indeterminate label="Loading" />);
    expect(screen.getByRole('progressbar', { name: 'Loading' })).toHaveAttribute('aria-busy', 'true');
  });
});
