import { createRef } from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Table } from './table';

describe('Table', () => {
  it('renders a table element', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Table.displayName).toBe('Table');
  });

  it('has correct data-slot', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(container.querySelector('[data-slot="table"]')).toBeInTheDocument();
  });

  it('forwards ref to table element', () => {
    const ref = createRef<HTMLTableElement>();
    render(
      <Table ref={ref}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('merges className', () => {
    const { container } = render(
      <Table className="custom">
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(container.querySelector('[data-slot="table"]')).toHaveClass('custom');
  });
});

describe('Table subcomponents', () => {
  it('renders Header with thead and data-slot', () => {
    const { container } = render(
      <table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
          </Table.Row>
        </Table.Header>
      </table>
    );
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-header"]')).toBeInTheDocument();
  });

  it('renders Body with tbody and data-slot', () => {
    const { container } = render(
      <table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </table>
    );
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-body"]')).toBeInTheDocument();
  });

  it('renders Footer with tfoot and data-slot', () => {
    const { container } = render(
      <table>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </table>
    );
    expect(container.querySelector('tfoot')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-footer"]')).toBeInTheDocument();
  });

  it('renders Row with tr and data-slot', () => {
    const { container } = render(
      <table>
        <tbody>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </tbody>
      </table>
    );
    expect(container.querySelector('[data-slot="table-row"]')).toBeInTheDocument();
  });

  it('renders Head with th and data-slot', () => {
    const { container } = render(
      <table>
        <thead>
          <tr>
            <Table.Head>Header</Table.Head>
          </tr>
        </thead>
      </table>
    );
    expect(container.querySelector('th')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-head"]')).toBeInTheDocument();
  });

  it('renders Cell with td and data-slot', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Table.Cell>Data</Table.Cell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.querySelector('td')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-cell"]')).toBeInTheDocument();
  });

  it('renders Caption with data-slot', () => {
    const { container } = render(
      <table>
        <Table.Caption>Table caption</Table.Caption>
      </table>
    );
    expect(container.querySelector('caption')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-caption"]')).toBeInTheDocument();
  });

  it.each([
    ['Header', 'Table.Header'],
    ['Body', 'Table.Body'],
    ['Footer', 'Table.Footer'],
    ['Row', 'Table.Row'],
    ['Head', 'Table.Head'],
    ['Cell', 'Table.Cell'],
    ['Caption', 'Table.Caption'],
  ] as const)('%s has correct displayName', (key, expected) => {
    expect(Table[key].displayName).toBe(expected);
  });
});

describe('Table accessibility', () => {
  it('passes axe audit with full structure', async () => {
    const { container } = render(
      <Table>
        <Table.Caption>User list</Table.Caption>
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
      </Table>
    );
    await expect(container).toBeAccessible();
  });
});
