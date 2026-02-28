import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders textarea with placeholder', () => {
    render(<Textarea placeholder="Write here" />);
    expect(screen.getByPlaceholderText('Write here')).toBeInTheDocument();
  });

  it('shows character counter when enabled', () => {
    render(<Textarea showCounter maxLength={20} defaultValue="hello" />);
    expect(screen.getByText('5/20')).toBeInTheDocument();
  });

  it('calls onChange when input changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'abc');
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('has aria-invalid when invalid', () => {
    render(<Textarea invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <label htmlFor="message">
        Message
        <Textarea id="message" />
      </label>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
