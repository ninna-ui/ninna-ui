import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { FormMessage } from './form-message';

describe('FormMessage', () => {
  it('renders with children', () => {
    render(<FormMessage>This field is required</FormMessage>);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<FormMessage data-testid="msg">Error text</FormMessage>);
    expect(screen.getByTestId('msg')).toHaveAttribute('data-slot', 'message');
  });

  it('has displayName', () => {
    expect(FormMessage.displayName).toBe('FormMessage');
  });

  it('renders as a p element', () => {
    render(<FormMessage data-testid="msg">Message</FormMessage>);
    expect(screen.getByTestId('msg').tagName).toBe('P');
  });

  it.each(['error', 'success', 'warning', 'hint'] as const)('renders %s type', (type) => {
    render(<FormMessage type={type} data-testid="msg">Message</FormMessage>);
    expect(screen.getByTestId('msg')).toBeInTheDocument();
  });

  it('sets role=alert for error type', () => {
    render(<FormMessage type="error" data-testid="msg">Error</FormMessage>);
    expect(screen.getByTestId('msg')).toHaveAttribute('role', 'alert');
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<FormMessage size={size} data-testid="msg">Message</FormMessage>);
    expect(screen.getByTestId('msg')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<FormMessage ref={ref}>Message</FormMessage>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });

  it('merges custom className', () => {
    render(<FormMessage className="custom" data-testid="msg">Message</FormMessage>);
    expect(screen.getByTestId('msg').className).toContain('custom');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<FormMessage type="error">Email is required</FormMessage>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
