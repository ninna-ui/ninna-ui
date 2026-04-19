import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Text } from './text';

describe('Text', () => {
  it('renders with default p tag', () => {
    render(<Text>Hello</Text>);
    const el = screen.getByText('Hello');
    expect(el.tagName).toBe('P');
  });

  it('has correct displayName', () => {
    expect(Text.displayName).toBe('Text');
  });

  it('has correct data-slot', () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText('Hello')).toHaveAttribute('data-slot', 'text');
  });

  it('renders as different elements', () => {
    const { rerender } = render(<Text as="span">Hello</Text>);
    expect(screen.getByText('Hello').tagName).toBe('SPAN');

    rerender(<Text as="div">Hello</Text>);
    expect(screen.getByText('Hello').tagName).toBe('DIV');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLParagraphElement>();
    render(<Text ref={ref}>Hello</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('merges className', () => {
    render(<Text className="custom">Hello</Text>);
    expect(screen.getByText('Hello')).toHaveClass('custom');
  });

  it('applies truncate class', () => {
    render(<Text truncate>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('truncate');
  });

  it('applies text transform classes', () => {
    const { rerender } = render(<Text uppercase>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('uppercase');

    rerender(<Text lowercase>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('lowercase');

    rerender(<Text capitalize>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('capitalize');
  });

  it('applies decoration classes', () => {
    const { rerender } = render(<Text italic>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('italic');

    rerender(<Text underline>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('underline');

    rerender(<Text strikethrough>Hello</Text>);
    expect(screen.getByText('Hello').className).toContain('line-through');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(<Text>Accessible text content</Text>);
    await expect(container).toBeAccessible();
  });
});
