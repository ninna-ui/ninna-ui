import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { IconButton } from './icon-button';

describe('IconButton', () => {
  it('renders icon button with aria-label', () => {
    render(<IconButton icon={<span>+</span>} aria-label="Add" />);
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('is disabled and busy when loading', () => {
    render(<IconButton icon={<span>+</span>} aria-label="Add" loading />);
    const button = screen.getByRole('button', { name: 'Add' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<IconButton icon={<span>+</span>} aria-label="Add" onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Add' }));
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<IconButton icon={<span>+</span>} aria-label="Add item" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
