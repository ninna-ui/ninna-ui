import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { EmptyState } from './empty-state';

describe('EmptyState', () => {
  it('renders with title', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(EmptyState.displayName).toBe('EmptyState');
  });

  it('has correct data-slot', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByRole('status')).toHaveAttribute('data-slot', 'empty-state');
  });

  it('has role="status"', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has aria-label matching title', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'No results');
  });

  it('renders description', () => {
    render(<EmptyState title="No results" description="Try a different search" />);
    expect(screen.getByText('Try a different search')).toBeInTheDocument();
  });

  it('renders icon with aria-hidden', () => {
    const icon = <svg data-testid="icon" />;
    render(<EmptyState title="No results" icon={icon} />);
    const iconContainer = screen.getByTestId('icon').closest('[data-slot="icon"]');
    expect(iconContainer).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders action', () => {
    render(<EmptyState title="No results" action={<button>Retry</button>} />);
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<EmptyState title="No results"><p>Custom content</p></EmptyState>);
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<EmptyState ref={ref} title="No results" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    render(<EmptyState title="No results" className="custom" />);
    expect(screen.getByRole('status')).toHaveClass('custom');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(
      <EmptyState title="No results found" description="Try adjusting your search" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
