import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import {
  Card,
  Stat,
  Table,
  DataTable,
  Timeline,
  Tree,
  Calendar,
} from '../src';
import type { DataTableColumn, TreeNode } from '../src';

// ─── Card ─────────────────────────────────────────────────────────────────────

describe('Card', () => {
  it('renders with data-slot="card"', () => {
    const { container } = render(<Card>content</Card>);
    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Card>hello</Card>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('renders all sub-components with correct data-slots', () => {
    const { container } = render(
      <Card>
        <Card.Header><Card.Title>Title</Card.Title><Card.Description>Desc</Card.Description></Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
    expect(container.querySelector('[data-slot="card-header"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-title"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-description"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-body"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card-footer"]')).toBeInTheDocument();
  });

  it('applies interactive role when interactive=true', () => {
    render(<Card interactive>click me</Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('sets data-variant', () => {
    const { container } = render(<Card variant="filled">x</Card>);
    expect(container.querySelector('[data-slot="card"]')).toHaveAttribute('data-variant', 'filled');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>x</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Card.displayName).toBe('Card');
    expect(Card.Header.displayName).toBe('Card.Header');
    expect(Card.Body.displayName).toBe('Card.Body');
    expect(Card.Footer.displayName).toBe('Card.Footer');
    expect(Card.Title.displayName).toBe('Card.Title');
    expect(Card.Description.displayName).toBe('Card.Description');
  });
});

// ─── Stat ─────────────────────────────────────────────────────────────────────

describe('Stat', () => {
  it('renders as dl with data-slot="stat"', () => {
    const { container } = render(<Stat />);
    expect(container.querySelector('[data-slot="stat"]')).toBeInTheDocument();
    expect(container.querySelector('dl')).toBeInTheDocument();
  });

  it('renders all sub-components', () => {
    const { container } = render(
      <Stat>
        <Stat.Label>Revenue</Stat.Label>
        <Stat.Value>$12,000</Stat.Value>
        <Stat.HelpText>Last 30 days</Stat.HelpText>
        <Stat.Trend direction="up">+12%</Stat.Trend>
        <Stat.Icon>★</Stat.Icon>
      </Stat>
    );
    expect(container.querySelector('[data-slot="stat-label"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="stat-value"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="stat-help"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="stat-trend"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="stat-icon"]')).toBeInTheDocument();
  });

  it('sets data-direction on trend', () => {
    const { container } = render(<Stat><Stat.Trend direction="down">-5%</Stat.Trend></Stat>);
    expect(container.querySelector('[data-slot="stat-trend"]')).toHaveAttribute('data-direction', 'down');
  });

  it('has displayNames', () => {
    expect(Stat.displayName).toBe('Stat');
    expect(Stat.Label.displayName).toBe('Stat.Label');
    expect(Stat.Value.displayName).toBe('Stat.Value');
    expect(Stat.HelpText.displayName).toBe('Stat.HelpText');
    expect(Stat.Trend.displayName).toBe('Stat.Trend');
    expect(Stat.Icon.displayName).toBe('Stat.Icon');
  });
});

// ─── Table ────────────────────────────────────────────────────────────────────

describe('Table', () => {
  const renderTable = () => render(
    <Table>
      <Table.Caption>Users</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice</Table.Cell>
          <Table.Cell>alice@example.com</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>1 user</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );

  it('renders with data-slot="table"', () => {
    const { container } = renderTable();
    expect(container.querySelector('[data-slot="table"]')).toBeInTheDocument();
  });

  it('renders all sub-component data-slots', () => {
    const { container } = renderTable();
    expect(container.querySelector('[data-slot="table-header"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-body"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-footer"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-caption"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-head"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-cell"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-row"]')).toBeInTheDocument();
  });

  it('renders cell content', () => {
    renderTable();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLTableElement>();
    render(<Table ref={ref}><Table.Body /></Table>);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('has displayNames', () => {
    expect(Table.displayName).toBe('Table');
    expect(Table.Header.displayName).toBe('Table.Header');
    expect(Table.Body.displayName).toBe('Table.Body');
    expect(Table.Footer.displayName).toBe('Table.Footer');
    expect(Table.Row.displayName).toBe('Table.Row');
    expect(Table.Head.displayName).toBe('Table.Head');
    expect(Table.Cell.displayName).toBe('Table.Cell');
    expect(Table.Caption.displayName).toBe('Table.Caption');
  });
});

// ─── DataTable ────────────────────────────────────────────────────────────────

type User = { id: number; name: string; role: string };

const DATA_TABLE_COLUMNS: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'role', header: 'Role', accessorKey: 'role' },
];

const DATA_TABLE_DATA: User[] = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
];

describe('DataTable', () => {
  it('renders with data-slot="data-table"', () => {
    const { container } = render(
      <DataTable data={DATA_TABLE_DATA} columns={DATA_TABLE_COLUMNS} rowKey="id" />
    );
    expect(container.querySelector('[data-slot="data-table"]')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<DataTable data={DATA_TABLE_DATA} columns={DATA_TABLE_COLUMNS} rowKey="id" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
  });

  it('renders row data', () => {
    render(<DataTable data={DATA_TABLE_DATA} columns={DATA_TABLE_COLUMNS} rowKey="id" />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('shows empty message when data is empty', () => {
    render(<DataTable data={[]} columns={DATA_TABLE_COLUMNS} emptyMessage="No results." />);
    expect(screen.getByText('No results.')).toBeInTheDocument();
  });

  it('shows loading overlay when loading=true', () => {
    render(<DataTable data={[]} columns={DATA_TABLE_COLUMNS} loading />);
    expect(screen.getByLabelText(/loading data/i)).toBeInTheDocument();
  });

  it('sorts ascending on sortable column click', async () => {
    const user = userEvent.setup();
    render(<DataTable data={DATA_TABLE_DATA} columns={DATA_TABLE_COLUMNS} rowKey="id" />);
    const nameHeader = screen.getByText('Name').closest('th')!;
    await user.click(nameHeader);
    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  it('sorts descending on second click', async () => {
    const user = userEvent.setup();
    render(<DataTable data={DATA_TABLE_DATA} columns={DATA_TABLE_COLUMNS} rowKey="id" />);
    const nameHeader = screen.getByText('Name').closest('th')!;
    await user.click(nameHeader);
    await user.click(nameHeader);
    expect(nameHeader).toHaveAttribute('aria-sort', 'descending');
  });

  it('renders caption when provided', () => {
    render(<DataTable data={[]} columns={DATA_TABLE_COLUMNS} caption="User list" />);
    expect(screen.getByText('User list')).toBeInTheDocument();
  });

  it('has displayName', () => {
    expect((DataTable as { displayName?: string }).displayName).toBe('DataTable');
  });
});

// ─── Timeline ─────────────────────────────────────────────────────────────────

describe('Timeline', () => {
  const renderTimeline = () => render(
    <Timeline>
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Heading>Event 1</Timeline.Heading>
          <Timeline.Description>Something happened</Timeline.Description>
          <Timeline.Time>2024-01-01</Timeline.Time>
        </Timeline.Content>
        <Timeline.Connector />
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Indicator status="success" />
        <Timeline.Content>
          <Timeline.Heading>Event 2</Timeline.Heading>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );

  it('renders with data-slot="timeline"', () => {
    const { container } = renderTimeline();
    expect(container.querySelector('[data-slot="timeline"]')).toBeInTheDocument();
  });

  it('renders all sub-component data-slots', () => {
    const { container } = renderTimeline();
    expect(container.querySelector('[data-slot="timeline-item"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-indicator"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-content"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-heading"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-description"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-time"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="timeline-connector"]')).toBeInTheDocument();
  });

  it('renders heading content', () => {
    renderTimeline();
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });

  it('sets data-status on indicator', () => {
    const { container } = renderTimeline();
    const indicators = container.querySelectorAll('[data-slot="timeline-indicator"]');
    expect(indicators[1]).toHaveAttribute('data-status', 'success');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Timeline ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Timeline.displayName).toBe('Timeline');
    expect(Timeline.Item.displayName).toBe('Timeline.Item');
    expect(Timeline.Indicator.displayName).toBe('Timeline.Indicator');
    expect(Timeline.Content.displayName).toBe('Timeline.Content');
    expect(Timeline.Connector.displayName).toBe('Timeline.Connector');
    expect(Timeline.Heading.displayName).toBe('Timeline.Heading');
    expect(Timeline.Description.displayName).toBe('Timeline.Description');
    expect(Timeline.Time.displayName).toBe('Timeline.Time');
  });
});

// ─── Tree ─────────────────────────────────────────────────────────────────────

const TREE_DATA: TreeNode[] = [
  {
    id: 'root',
    label: 'Root',
    children: [
      { id: 'child-1', label: 'Child 1' },
      { id: 'child-2', label: 'Child 2', children: [{ id: 'grandchild', label: 'Grandchild' }] },
    ],
  },
];

describe('Tree', () => {
  it('renders with role="tree" and data-slot="tree"', () => {
    const { container } = render(<Tree data={TREE_DATA} />);
    expect(screen.getByRole('tree')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="tree"]')).toBeInTheDocument();
  });

  it('renders root node label', () => {
    render(<Tree data={TREE_DATA} />);
    expect(screen.getByText('Root')).toBeInTheDocument();
  });

  it('renders children expanded by default', () => {
    render(<Tree data={TREE_DATA} />);
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Grandchild')).toBeInTheDocument();
  });

  it('collapses node on click', async () => {
    const user = userEvent.setup();
    render(<Tree data={TREE_DATA} />);
    await user.click(screen.getByText('Root'));
    expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
  });

  it('calls onSelect when a node is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Tree data={TREE_DATA} onSelect={onSelect} />);
    await user.click(screen.getByText('Child 1'));
    expect(onSelect).toHaveBeenCalledWith('child-1');
  });

  it('marks selected node with aria-selected', () => {
    render(<Tree data={TREE_DATA} selectedId="child-1" />);
    const child1 = screen.getByText('Child 1').closest('[role="treeitem"]')!;
    expect(child1).toHaveAttribute('aria-selected', 'true');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Tree data={[]} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Tree.displayName).toBe('Tree');
  });
});

// ─── Calendar ─────────────────────────────────────────────────────────────────

describe('Calendar', () => {
  it('renders with data-slot="calendar"', () => {
    const { container } = render(<Calendar />);
    expect(container.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Calendar />);
    expect(screen.getByRole('button', { name: /previous month/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next month/i })).toBeInTheDocument();
  });

  it('renders a grid with role="grid"', () => {
    render(<Calendar />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  it('navigates to next month on next button click', async () => {
    const user = userEvent.setup();
    const fixedDate = new Date(2024, 0, 1); // January 2024
    render(<Calendar defaultMonth={fixedDate} />);
    expect(screen.getByRole('grid', { name: /january 2024/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /next month/i }));
    expect(screen.getByRole('grid', { name: /february 2024/i })).toBeInTheDocument();
  });

  it('navigates to previous month on prev button click', async () => {
    const user = userEvent.setup();
    const fixedDate = new Date(2024, 1, 1); // February 2024
    render(<Calendar defaultMonth={fixedDate} />);
    await user.click(screen.getByRole('button', { name: /previous month/i }));
    expect(screen.getByRole('grid', { name: /january 2024/i })).toBeInTheDocument();
  });

  it('selects a date on click', async () => {
    const user = userEvent.setup();
    const fixedDate = new Date(2024, 0, 1);
    render(<Calendar defaultMonth={fixedDate} />);
    const targetDate = new Date(2024, 0, 15);
    const day15 = screen.getByRole('button', { name: targetDate.toLocaleDateString(undefined, { dateStyle: 'full' }) });
    await user.click(day15);
    expect(day15).toHaveAttribute('aria-pressed', 'true');
  });

  it('calls onValueChange when a date is selected', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    const fixedDate = new Date(2024, 0, 1);
    render(<Calendar defaultMonth={fixedDate} onValueChange={onValueChange} />);
    const targetDate = new Date(2024, 0, 10);
    await user.click(screen.getByRole('button', { name: targetDate.toLocaleDateString(undefined, { dateStyle: 'full' }) }));
    expect(onValueChange).toHaveBeenCalledWith(expect.any(Date));
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Calendar ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Calendar.displayName).toBe('Calendar');
  });
});
