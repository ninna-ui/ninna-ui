import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
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
    expect(await axe(container)).toHaveNoViolations();
  });
});
