import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Tree } from './tree';

const data = [
  {
    id: 'root',
    label: 'Root',
    children: [{ id: 'child-1', label: 'Child 1' }],
  },
];

describe('Tree', () => {
  it('renders tree root and items', () => {
    render(<Tree data={data} />);
    expect(screen.getByRole('tree')).toBeInTheDocument();
    expect(screen.getByText('Root')).toBeInTheDocument();
  });

  it('calls onSelect when selecting node', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Tree data={data} onSelect={onSelect} />);
    await user.click(screen.getByText('Root'));
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith('root');
    });
  });

  it('supports keyboard select', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Tree data={data} onSelect={onSelect} />);
    const rootItem = screen.getByRole('treeitem', { name: /root/i });
    rootItem.focus();
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith('root');
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Tree data={data} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
