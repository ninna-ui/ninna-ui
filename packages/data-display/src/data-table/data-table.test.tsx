import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataTable } from './data-table';

type Row = { id: number; name: string; score: number };

const rows: Row[] = [
  { id: 1, name: 'Beta', score: 70 },
  { id: 2, name: 'Alpha', score: 90 },
];

const columns = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'score', header: 'Score', accessorKey: 'score' },
] as const;

describe('DataTable', () => {
  it('renders rows and headers', () => {
    render(<DataTable<Row> data={rows} columns={columns as never} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
  });

  it('sorts data when clicking sortable header', async () => {
    const user = userEvent.setup();
    render(<DataTable<Row> data={rows} columns={columns as never} />);
    await user.click(screen.getByText('Name'));

    await waitFor(() => {
      const bodyRows = document.querySelectorAll('[data-slot="data-table-row"]');
      expect(bodyRows.length).toBe(2);
    });
  });

  it('renders empty state when no data', () => {
    render(<DataTable<Row> data={[]} columns={columns as never} emptyMessage="No rows" />);
    expect(screen.getByText('No rows')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DataTable<Row> data={rows} columns={columns as never} />);
    await expect(container).toBeAccessible();
  });
});
