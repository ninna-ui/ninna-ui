import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import { Skeleton, SkeletonCircle, SkeletonText } from './skeleton';

describe('Skeleton', () => {
  // ── Rendering ──────────────────────────────────────────────
  it('renders with default props', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders with custom width and height', () => {
    render(<Skeleton width="200px" height="20px" data-testid="skeleton" />);
    const el = screen.getByTestId('skeleton');
    expect(el.style.width).toBe('200px');
    expect(el.style.height).toBe('20px');
  });

  it('renders with numeric width and height', () => {
    render(<Skeleton width={200} height={20} data-testid="skeleton" />);
    const el = screen.getByTestId('skeleton');
    expect(el.style.width).toBe('200px');
    expect(el.style.height).toBe('20px');
  });

  // ── Loading state ──────────────────────────────────────────
  it('shows children when loading is false', () => {
    render(
      <Skeleton loading={false}>
        <div data-testid="content">Loaded</div>
      </Skeleton>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('hides children when loading is true', () => {
    render(
      <Skeleton loading={true}>
        <div data-testid="content">Loaded</div>
      </Skeleton>
    );
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it('has correct data-slot attribute', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('data-slot', 'skeleton');
  });

  it('has displayName', () => {
    expect(Skeleton.displayName).toBe('Skeleton');
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(['pulse', 'shine', 'none'] as const)('renders %s variant', (variant) => {
    render(<Skeleton variant={variant} data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  // ── Ref forwarding ─────────────────────────────────────────
  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Skeleton ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="status"', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('role', 'status');
  });

  it('has aria-busy="true"', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-busy', 'true');
  });

  it('has aria-label="Loading"', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-label', 'Loading');
  });

  it('has sr-only text', () => {
    render(<Skeleton data-testid="skeleton" />);
    const srOnly = screen.getByTestId('skeleton').querySelector('.sr-only');
    expect(srOnly).toBeInTheDocument();
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it('has no accessibility violations', async () => {
    const { container } = render(<Skeleton width="200px" height="20px" />);
    await expect(container).toBeAccessible();
  });
});

describe('SkeletonCircle', () => {
  it('renders with default size', () => {
    render(<SkeletonCircle data-testid="circle" />);
    const el = screen.getByTestId('circle');
    expect(el.style.width).toBe('40px');
    expect(el.style.height).toBe('40px');
  });

  it('renders with custom size', () => {
    render(<SkeletonCircle size={64} data-testid="circle" />);
    const el = screen.getByTestId('circle');
    expect(el.style.width).toBe('64px');
    expect(el.style.height).toBe('64px');
  });

  it('has data-slot="skeleton-circle"', () => {
    render(<SkeletonCircle data-testid="circle" />);
    expect(screen.getByTestId('circle')).toHaveAttribute('data-slot', 'skeleton-circle');
  });

  it('has displayName', () => {
    expect(SkeletonCircle.displayName).toBe('SkeletonCircle');
  });

  it('shows children when not loading', async () => {
    render(
      <SkeletonCircle loading={false}>
        <img data-testid="avatar" alt="avatar" src="" />
      </SkeletonCircle>
    );
    await waitFor(() => {
      expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<SkeletonCircle size={48} />);
    await expect(container).toBeAccessible();
  });
});

describe('SkeletonText', () => {
  it('renders default 3 lines', () => {
    render(<SkeletonText data-testid="text" />);
    const el = screen.getByTestId('text');
    const lines = el.children;
    // 3 lines + 1 sr-only span
    expect(lines.length).toBe(4);
  });

  it('renders custom number of lines', () => {
    render(<SkeletonText noOfLines={5} data-testid="text" />);
    const el = screen.getByTestId('text');
    // 5 lines + 1 sr-only span
    expect(el.children.length).toBe(6);
  });

  it('has data-slot="skeleton-text"', () => {
    render(<SkeletonText data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveAttribute('data-slot', 'skeleton-text');
  });

  it('has displayName', () => {
    expect(SkeletonText.displayName).toBe('SkeletonText');
  });

  it('shows children when not loading', () => {
    render(
      <SkeletonText loading={false}>
        <p data-testid="paragraph">Loaded text</p>
      </SkeletonText>
    );
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<SkeletonText noOfLines={3} />);
    await expect(container).toBeAccessible();
  });
});
