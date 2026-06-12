import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from './pagination';

describe('Pagination', () => {
  it('renders navigation landmarks and current page', () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Link isActive>1</Pagination.Link>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    );

    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1' })).toHaveAttribute('aria-current', 'page');
  });

  it('triggers next click handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Pagination.Next onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Go to next page' }));
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Link isActive>1</Pagination.Link>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link>2</Pagination.Link>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    );
    await expect(container).toBeAccessible();
  });

  describe('keyboard navigation', () => {
    it('active page link has aria-current="page"', () => {
      render(
        <Pagination>
          <Pagination.Content>
            <Pagination.Item><Pagination.Link>1</Pagination.Link></Pagination.Item>
            <Pagination.Item><Pagination.Link isActive>2</Pagination.Link></Pagination.Item>
            <Pagination.Item><Pagination.Link>3</Pagination.Link></Pagination.Item>
          </Pagination.Content>
        </Pagination>
      );
      expect(screen.getByRole('button', { name: '2' })).toHaveAttribute('aria-current', 'page');
      expect(screen.getByRole('button', { name: '1' })).not.toHaveAttribute('aria-current');
    });

    it('Enter activates a page link', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Pagination>
          <Pagination.Content>
            <Pagination.Item><Pagination.Link onClick={onClick}>5</Pagination.Link></Pagination.Item>
          </Pagination.Content>
        </Pagination>
      );
      const btn = screen.getByRole('button', { name: '5' });
      btn.focus();
      await user.keyboard('{Enter}');
      await waitFor(() => {
        expect(onClick).toHaveBeenCalled();
      });
    });

    it('Space activates a page link', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Pagination>
          <Pagination.Content>
            <Pagination.Item><Pagination.Link onClick={onClick}>3</Pagination.Link></Pagination.Item>
          </Pagination.Content>
        </Pagination>
      );
      const btn = screen.getByRole('button', { name: '3' });
      btn.focus();
      await user.keyboard(' ');
      await waitFor(() => {
        expect(onClick).toHaveBeenCalled();
      });
    });

    it('Previous and Next buttons are in tab order', () => {
      render(
        <Pagination>
          <Pagination.Content>
            <Pagination.Item><Pagination.Previous /></Pagination.Item>
            <Pagination.Item><Pagination.Link isActive>1</Pagination.Link></Pagination.Item>
            <Pagination.Item><Pagination.Next /></Pagination.Item>
          </Pagination.Content>
        </Pagination>
      );
      const prev = screen.getByRole('button', { name: 'Go to previous page' });
      const next = screen.getByRole('button', { name: 'Go to next page' });
      expect(prev).not.toHaveAttribute('tabindex', '-1');
      expect(next).not.toHaveAttribute('tabindex', '-1');
    });
  });
});
