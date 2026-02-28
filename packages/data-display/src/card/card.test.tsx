import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { Card } from './card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toBe('Card');
  });

  it('has correct data-slot', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument();
  });

  it('renders data-variant attribute', () => {
    const { container } = render(<Card variant="elevated">Content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveAttribute('data-variant', 'elevated');
  });

  it('renders interactive card with role and tabIndex', () => {
    const { container } = render(<Card interactive>Content</Card>);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>Content</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    const { container } = render(<Card className="custom">Content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveClass('custom');
  });
});

describe('Card.Header', () => {
  it('renders with data-slot', () => {
    const { container } = render(<Card.Header>Header</Card.Header>);
    expect(container.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Card.Header.displayName).toBe('Card.Header');
  });
});

describe('Card.Body', () => {
  it('renders with data-slot', () => {
    const { container } = render(<Card.Body>Body</Card.Body>);
    expect(container.querySelector('[data-slot="card-body"]')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Card.Body.displayName).toBe('Card.Body');
  });
});

describe('Card.Footer', () => {
  it('renders with data-slot', () => {
    const { container } = render(<Card.Footer>Footer</Card.Footer>);
    expect(container.querySelector('[data-slot="card-footer"]')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Card.Footer.displayName).toBe('Card.Footer');
  });
});

describe('Card.Title', () => {
  it('renders as h3 with data-slot', () => {
    render(<Card.Title>Title</Card.Title>);
    const el = screen.getByText('Title');
    expect(el.tagName).toBe('H3');
    expect(el).toHaveAttribute('data-slot', 'card-title');
  });

  it('has correct displayName', () => {
    expect(Card.Title.displayName).toBe('Card.Title');
  });
});

describe('Card.Description', () => {
  it('renders as p with data-slot', () => {
    render(<Card.Description>Desc</Card.Description>);
    const el = screen.getByText('Desc');
    expect(el.tagName).toBe('P');
    expect(el).toHaveAttribute('data-slot', 'card-description');
  });

  it('has correct displayName', () => {
    expect(Card.Description.displayName).toBe('Card.Description');
  });
});

describe('Card composition', () => {
  it('renders full card structure', () => {
    const { container } = render(
      <Card>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Body>Body content</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-title"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-description"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-body"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-footer"]')).toBeInTheDocument();
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card description text</Card.Description>
        </Card.Header>
        <Card.Body>Body content here</Card.Body>
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
