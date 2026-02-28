import { DataTable } from "@ninna-ui/data-display";
import type { DataTableColumn } from "@ninna-ui/data-display";

interface User { id: number; name: string; email: string; status: string; }

const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", status: "Inactive" },
  { id: 4, name: "Dave Brown", email: "dave@example.com", status: "Active" },
];

const columns: DataTableColumn<User>[] = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true },
  { id: "email", header: "Email", accessorKey: "email" },
  {
    id: "status",
    header: "Status",
    cell: (row: User) => (
      <span
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
          row.status === "Active"
            ? "bg-success/10 text-success"
            : "bg-danger/10 text-danger"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

export default function DataTableCustomCells() {
  return <DataTable data={users} columns={columns} rowKey="id" />;
}
