import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Link } from './link';

describe('Link', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with children', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders as an anchor element', () => {
    render(<Link href="/about" data-testid="link">About</Link>);
    expect(screen.getByTestId('link').tagName).toBe('A');
  });

  it('passes href to anchor', () => {
    render(<Link href="/about" data-testid="link">About</Link>);
    expect(screen.getByTestId('link')).toHaveAttribute('href', '/about');
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Link href="/about" data-testid="link">About</Link>);
    expect(screen.getByTestId('link')).toHaveAttribute('data-slot', 'link');
  });

  it('has displayName', () => {
    expect(Link.displayName).toBe('Link');
  });

  // ── External links ────────────────────────────────────────
  it('adds target="_blank" for external links', () => {
    render(<Link href="https://example.com" external data-testid="link">External</Link>);
    expect(screen.getByTestId('link')).toHaveAttribute('target', '_blank');
  });

  it('adds rel="noopener noreferrer" for external links', () => {
    render(<Link href="https://example.com" external data-testid="link">External</Link>);
    expect(screen.getByTestId('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows external icon by default for external links', () => {
    render(<Link href="https://example.com" external data-testid="link">External</Link>);
    const svg = screen.getByTestId('link').querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides external icon when showExternalIcon is false', () => {
    render(
      <Link href="https://example.com" external showExternalIcon={false} data-testid="link">
        External
      </Link>
    );
    const svg = screen.getByTestId('link').querySelector('svg');
    expect(svg).not.toBeInTheDocument();
  });

  it('renders custom external icon', () => {
    render(
      <Link href="https://example.com" external externalIcon={<span data-testid="custom-icon">↗</span>}>
        External
      </Link>
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('treats target="_blank" as external', () => {
    render(<Link href="https://example.com" target="_blank" data-testid="link">External</Link>);
    expect(screen.getByTestId('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // ── Colors ─────────────────────────────────────────────────
  it.each(['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'] as const)(
    'renders %s color',
    (color) => {
      render(<Link href="#" color={color} data-testid="link">Test</Link>);
      expect(screen.getByTestId('link')).toBeInTheDocument();
    }
  );

  // ── Underline ──────────────────────────────────────────────
  it.each(['always', 'hover', 'none'] as const)('renders %s underline', (underline) => {
    render(<Link href="#" underline={underline} data-testid="link">Test</Link>);
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Link ref={ref} href="#">Test</Link>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Link href="/about">About</Link>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (external)', async () => {
    const { container } = render(
      <Link href="https://example.com" external>External Link</Link>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Link href="#" className="custom-class" data-testid="link">Test</Link>);
    expect(screen.getByTestId('link').className).toContain('custom-class');
  });
});
