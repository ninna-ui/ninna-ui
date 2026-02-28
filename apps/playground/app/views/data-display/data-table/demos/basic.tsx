import { DataTable } from "@ninna-ui/data-display";
import type { DataTableColumn } from "@ninna-ui/data-display";

interface User { id: number; name: string; email: string; role: string; status: string; }

const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Dave Brown", email: "dave@example.com", role: "Editor", status: "Active" },
];

const columns: DataTableColumn<User>[] = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true },
  { id: "email", header: "Email", accessorKey: "email", sortable: true },
  { id: "role", header: "Role", accessorKey: "role", sortable: true },
  { id: "status", header: "Status", accessorKey: "status" },
];

export default function BasicDataTable() {
  return <DataTable data={users} columns={columns} rowKey="id" />;
}
