import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { LinkBox, LinkOverlay } from './link-overlay';

describe('LinkOverlay', () => {
  it('renders LinkBox and LinkOverlay slots', () => {
    render(
      <LinkBox>
        <h3>
          <LinkOverlay href="/docs">Docs</LinkOverlay>
        </h3>
      </LinkBox>
    );

    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('data-slot', 'link-overlay');
    expect(document.querySelector('[data-slot="link-box"]')).toBeInTheDocument();
  });

  it('applies external link defaults', () => {
    render(<LinkOverlay href="https://example.com" external>External</LinkOverlay>);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <LinkBox>
        <h3>
          <LinkOverlay href="/docs">Docs</LinkOverlay>
        </h3>
      </LinkBox>
    );
    await expect(container).toBeAccessible();
  });
});
