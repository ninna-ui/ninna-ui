import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  const originalResizeObserver = (globalThis as unknown as { ResizeObserver?: unknown }).ResizeObserver;

  beforeAll(() => {
    class ResizeObserverMock {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = ResizeObserverMock;
  });

  afterAll(() => {
    if (originalResizeObserver) {
      (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = originalResizeObserver;
      return;
    }
    delete (globalThis as unknown as { ResizeObserver?: unknown }).ResizeObserver;
  });

  it('renders slider thumb and label', () => {
    render(<Slider label="Volume" defaultValue={[25]} />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('shows value label when showValue is enabled', () => {
    render(<Slider defaultValue={[33]} showValue />);
    expect(screen.getByText('33')).toBeInTheDocument();
  });

  it('applies aria-labelledby when label is provided', () => {
    const { container } = render(<Slider label="Volume" defaultValue={[50]} />);
    const sliderRoot = container.querySelector('[data-slot="slider"]');
    expect(sliderRoot).toHaveAttribute('aria-labelledby');
  });
});
