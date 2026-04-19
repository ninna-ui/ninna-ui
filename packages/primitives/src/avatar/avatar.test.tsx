import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Avatar } from './avatar';

describe('Avatar', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with image src', () => {
    render(<Avatar src="/user.jpg" alt="John Doe" data-testid="avatar" />);
    const img = screen.getByTestId('avatar').querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/user.jpg');
    expect(img).toHaveAttribute('alt', 'John Doe');
  });

  it('renders initials when no src', () => {
    render(<Avatar name="John Doe" data-testid="avatar" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders single initial for single-word name', () => {
    render(<Avatar name="John" data-testid="avatar" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders fallback icon when no src and no name', () => {
    render(<Avatar data-testid="avatar" />);
    const fallback = screen.getByTestId('avatar').querySelector('[data-slot="fallback"]');
    expect(fallback).toBeInTheDocument();
  });

  it('renders custom fallback', () => {
    render(<Avatar fallback={<span data-testid="custom-fallback">?</span>} />);
    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Avatar name="Test" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveAttribute('data-slot', 'avatar');
  });

  it('has displayName', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });

  it('renders as a span element', () => {
    render(<Avatar name="Test" data-testid="avatar" />);
    expect(screen.getByTestId('avatar').tagName).toBe('SPAN');
  });

  // ── Sizes ──────────────────────────────────────────────────
  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('renders %s size', (size) => {
    render(<Avatar name="Test" size={size} data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  // ── Shapes ─────────────────────────────────────────────────
  it.each(['circle', 'square'] as const)('renders %s shape', (shape) => {
    render(<Avatar name="Test" shape={shape} data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  // ── Ring ───────────────────────────────────────────────────
  it('renders ring when showRing is true', () => {
    render(<Avatar name="Test" showRing data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  // ── Image loading ──────────────────────────────────────────
  it('uses lazy loading by default', () => {
    render(<Avatar src="/user.jpg" alt="User" data-testid="avatar" />);
    const img = screen.getByTestId('avatar').querySelector('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Avatar ref={ref} name="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="img"', () => {
    render(<Avatar name="Test" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveAttribute('role', 'img');
  });

  it('uses alt as aria-label', () => {
    render(<Avatar src="/user.jpg" alt="John Doe" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveAttribute('aria-label', 'John Doe');
  });

  it('uses name as aria-label when no alt', () => {
    render(<Avatar name="Jane Smith" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveAttribute('aria-label', 'Jane Smith');
  });

  it('uses "Avatar" as fallback aria-label', () => {
    render(<Avatar data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveAttribute('aria-label', 'Avatar');
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations (with name)', async () => {
    const { container } = render(<Avatar name="John Doe" />);
    await expect(container).toBeAccessible();
  });

  it('has no accessibility violations (with image)', async () => {
    const { container } = render(<Avatar src="/user.jpg" alt="John Doe" />);
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it('merges custom className', () => {
    render(<Avatar name="Test" className="custom-class" data-testid="avatar" />);
    expect(screen.getByTestId('avatar').className).toContain('custom-class');
  });
});
