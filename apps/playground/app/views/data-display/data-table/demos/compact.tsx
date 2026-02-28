import { DataTable } from "@ninna-ui/data-display";
import type { DataTableColumn } from "@ninna-ui/data-display";

interface User { id: number; name: string; email: string; role: string; }

const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer" },
  { id: 4, name: "Dave Brown", email: "dave@example.com", role: "Editor" },
];

const columns: DataTableColumn<User>[] = [
  { id: "name", header: "Name", accessorKey: "name" },
  { id: "email", header: "Email", accessorKey: "email" },
  { id: "role", header: "Role", accessorKey: "role" },
];

export default function DataTableCompact() {
  return <DataTable data={users} columns={columns} rowKey="id" compact />;
}
