import { Table } from "@ninna-ui/data-display";

export default function BasicTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice Johnson</Table.Cell>
          <Table.Cell>alice@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Smith</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Carol White</Table.Cell>
          <Table.Cell>carol@example.com</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
