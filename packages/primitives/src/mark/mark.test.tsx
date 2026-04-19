import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Mark } from './mark';

describe('Mark', () => {
  it('renders with children', () => {
    render(<Mark>highlighted</Mark>);
    expect(screen.getByText('highlighted')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<Mark data-testid="mark">text</Mark>);
    expect(screen.getByTestId('mark')).toHaveAttribute('data-slot', 'mark');
  });

  it('has displayName', () => {
    expect(Mark.displayName).toBe('Mark');
  });

  it('renders as a mark element', () => {
    render(<Mark data-testid="mark">text</Mark>);
    expect(screen.getByTestId('mark').tagName).toBe('MARK');
  });

  it.each(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const)(
    'renders %s color',
    (color) => {
      render(<Mark color={color} data-testid="mark">text</Mark>);
      expect(screen.getByTestId('mark')).toBeInTheDocument();
    }
  );

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Mark ref={ref}>text</Mark>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLElement));
  });

  it('merges custom className', () => {
    render(<Mark className="custom-class" data-testid="mark">text</Mark>);
    expect(screen.getByTestId('mark').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Mark>highlighted text</Mark>);
    await expect(container).toBeAccessible();
  });
});
