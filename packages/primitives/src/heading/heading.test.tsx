import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Heading } from './heading';

describe('Heading', () => {
  it('renders with default h2 tag', () => {
    render(<Heading>Title</Heading>);
    const el = screen.getByText('Title');
    expect(el.tagName).toBe('H2');
  });

  it('has correct displayName', () => {
    expect(Heading.displayName).toBe('Heading');
  });

  it('has correct data-slot', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByText('Title')).toHaveAttribute('data-slot', 'heading');
  });

  it('renders correct heading level', () => {
    const { rerender } = render(<Heading as="h1">Title</Heading>);
    expect(screen.getByText('Title').tagName).toBe('H1');

    rerender(<Heading as="h3">Title</Heading>);
    expect(screen.getByText('Title').tagName).toBe('H3');

    rerender(<Heading as="h6">Title</Heading>);
    expect(screen.getByText('Title').tagName).toBe('H6');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(<Heading ref={ref}>Title</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('merges className', () => {
    render(<Heading className="custom-class">Title</Heading>);
    expect(screen.getByText('Title')).toHaveClass('custom-class');
  });

  it('applies truncate class', () => {
    render(<Heading truncate>Title</Heading>);
    expect(screen.getByText('Title').className).toContain('truncate');
  });

  it('applies noWrap class', () => {
    render(<Heading noWrap>Title</Heading>);
    expect(screen.getByText('Title').className).toContain('nowrap');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(<Heading as="h1">Accessible Heading</Heading>);
    await expect(container).toBeAccessible();
  });
});
