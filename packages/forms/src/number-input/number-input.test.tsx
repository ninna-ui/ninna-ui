import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberInput } from './number-input';

describe('NumberInput', () => {
  it('renders spinbutton input', () => {
    render(<NumberInput defaultValue={2} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('increments value through stepper', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NumberInput defaultValue={1} onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('applies min and max aria metadata', () => {
    render(<NumberInput defaultValue={3} min={0} max={10} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-valuemin', '0');
    expect(input).toHaveAttribute('aria-valuemax', '10');
  });
});
