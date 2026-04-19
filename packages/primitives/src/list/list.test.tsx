import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { List, ListItem } from './list';

describe('List', () => {
  it('renders children', () => {
    render(
      <List>
        <ListItem>Item one</ListItem>
        <ListItem>Item two</ListItem>
      </List>
    );
    expect(screen.getByText('Item one')).toBeInTheDocument();
    expect(screen.getByText('Item two')).toBeInTheDocument();
  });

  it('has correct data-slot on List', () => {
    render(
      <List data-testid="list">
        <ListItem>Item</ListItem>
      </List>
    );
    expect(screen.getByTestId('list')).toHaveAttribute('data-slot', 'list');
  });

  it('has correct data-slot on ListItem', () => {
    const { container } = render(
      <List>
        <ListItem>Item</ListItem>
      </List>
    );
    expect(container.querySelector('[data-slot="list-item"]')).toBeInTheDocument();
  });

  it('renders as ul by default (unordered)', () => {
    render(<List data-testid="list"><ListItem>Item</ListItem></List>);
    expect(screen.getByTestId('list').tagName).toBe('UL');
  });

  it('renders as ol for ordered type', () => {
    render(<List type="ordered" data-testid="list"><ListItem>Item</ListItem></List>);
    expect(screen.getByTestId('list').tagName).toBe('OL');
  });

  it.each(['none', 'sm', 'md', 'lg'] as const)('renders %s spacing', (spacing) => {
    render(
      <List spacing={spacing} data-testid="list">
        <ListItem>Item</ListItem>
      </List>
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('renders with check marker', () => {
    render(
      <List marker="check">
        <ListItem>Item</ListItem>
      </List>
    );
    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  it('has displayName on List', () => {
    expect(List.displayName).toBe('List');
  });

  it('has displayName on ListItem', () => {
    expect(ListItem.displayName).toBe('ListItem');
  });

  it('merges custom className', () => {
    render(
      <List className="custom-class" data-testid="list">
        <ListItem>Item</ListItem>
      </List>
    );
    expect(screen.getByTestId('list').className).toContain('custom-class');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <List>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
      </List>
    );
    await expect(container).toBeAccessible();
  });
});
