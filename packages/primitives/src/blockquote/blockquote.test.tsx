import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Blockquote } from './blockquote';

describe('Blockquote', () => {
  it('renders with children', () => {
    render(<Blockquote>Quote text</Blockquote>);
    expect(screen.getByText('Quote text')).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    render(<Blockquote data-testid="bq">Quote</Blockquote>);
    expect(screen.getByTestId('bq')).toHaveAttribute('data-slot', 'blockquote');
  });

  it('has displayName', () => {
    expect(Blockquote.displayName).toBe('Blockquote');
  });

  it('renders as a blockquote element', () => {
    render(<Blockquote data-testid="bq">Quote</Blockquote>);
    expect(screen.getByTestId('bq').tagName).toBe('BLOCKQUOTE');
  });

  it.each(['solid', 'soft', 'outline'] as const)('renders %s variant', (variant) => {
    render(<Blockquote variant={variant} data-testid="bq">Quote</Blockquote>);
    expect(screen.getByTestId('bq')).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] as const)(
    'renders %s color',
    (color) => {
      render(<Blockquote color={color} data-testid="bq">Quote</Blockquote>);
      expect(screen.getByTestId('bq')).toBeInTheDocument();
    }
  );

  it('renders cite source', () => {
    render(<Blockquote citeSource="Jane Doe">Quote text</Blockquote>);
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Blockquote ref={ref}>Quote</Blockquote>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLQuoteElement));
  });

  it('merges custom className', () => {
    render(<Blockquote className="custom-class" data-testid="bq">Quote</Blockquote>);
    expect(screen.getByTestId('bq').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Blockquote>This is a quote</Blockquote>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
