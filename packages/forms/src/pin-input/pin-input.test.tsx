import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    await expect(container).toBeAccessible();
  });

  describe('keyboard navigation', () => {
    it('typing a digit advances focus to next input', async () => {
      const user = userEvent.setup();
      render(<PinInput length={4} />);
      const inputs = screen.getAllByRole('textbox');
      await user.click(inputs[0]!);
      await user.keyboard('1');
      await waitFor(() => {
        expect(document.activeElement).toBe(inputs[1]);
      });
    });

    it('Backspace on empty field moves focus to previous input', async () => {
      const user = userEvent.setup();
      render(<PinInput length={4} />);
      const inputs = screen.getAllByRole('textbox');
      // focus first, type a digit to move to second, then backspace on second (now empty)
      await user.click(inputs[0]!);
      await user.keyboard('1');
      // now on input[1] which is empty — Backspace should retreat
      await user.keyboard('{Backspace}');
      await waitFor(() => {
        expect(document.activeElement).toBe(inputs[0]);
      });
    });

    it('ArrowLeft moves focus to previous input', async () => {
      const user = userEvent.setup();
      render(<PinInput length={4} />);
      const inputs = screen.getAllByRole('textbox');
      await user.click(inputs[1]!);
      await user.keyboard('{ArrowLeft}');
      await waitFor(() => {
        expect(document.activeElement).toBe(inputs[0]);
      });
    });

    it('ArrowRight moves focus to next input', async () => {
      const user = userEvent.setup();
      render(<PinInput length={4} />);
      const inputs = screen.getAllByRole('textbox');
      await user.click(inputs[0]!);
      await user.keyboard('{ArrowRight}');
      await waitFor(() => {
        expect(document.activeElement).toBe(inputs[1]);
      });
    });

    it('paste fills all fields from first input', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<PinInput length={4} onChange={onChange} />);
      const inputs = screen.getAllByRole('textbox');
      await user.click(inputs[0]!);
      await user.paste('5678');
      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith('5678');
      });
    });

    it('numeric type rejects non-digit characters', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<PinInput length={4} type="number" onChange={onChange} />);
      const inputs = screen.getAllByRole('textbox');
      await user.click(inputs[0]!);
      await user.keyboard('a');
      // onChange should not be called since 'a' is rejected
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
