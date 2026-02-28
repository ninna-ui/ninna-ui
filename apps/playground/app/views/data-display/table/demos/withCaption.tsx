import { Table } from "@ninna-ui/data-display";

export default function TableWithCaption() {
  return (
    <Table>
      <Table.Caption>Team Members</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Role</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Carol</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
          <Table.Cell>Inactive</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
