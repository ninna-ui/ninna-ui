import { Table } from "@ninna-ui/data-display";

export default function TableWithFooter() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Item</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Widget A</Table.Cell>
          <Table.Cell className="text-right">$250</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Widget B</Table.Cell>
          <Table.Cell className="text-right">$150</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Widget C</Table.Cell>
          <Table.Cell className="text-right">$350</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell className="font-semibold">Total</Table.Cell>
          <Table.Cell className="text-right font-semibold">$750</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
