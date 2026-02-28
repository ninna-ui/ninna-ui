import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { PinInput } from './pin-input';

describe('PinInput', () => {
  it('renders inputs based on length', () => {
    render(<PinInput length={6} />);
    expect(screen.getAllByRole('textbox')).toHaveLength(6);
  });

  it('calls onComplete when all digits are entered', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    render(<PinInput length={4} onComplete={onComplete} />);

    const inputs = screen.getAllByRole('textbox');
    await user.click(inputs[0]!);
    await user.keyboard('1234');

    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledWith('1234');
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<PinInput length={4} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
