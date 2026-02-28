import { useState, useMemo } from "react";
import { DataTable } from "@ninna-ui/data-display";
import { Pagination } from "@ninna-ui/navigation";
import type { DataTableColumn } from "@ninna-ui/data-display";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const allUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Dave Brown", email: "dave@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", role: "Viewer", status: "Inactive" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Hank Wilson", email: "hank@example.com", role: "Viewer", status: "Active" },
];

const PAGE_SIZE = 3;

export default function DataTableAdvanced() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () =>
      allUsers.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const columns: DataTableColumn<User>[] = [
    { id: "name", header: "Name", accessorKey: "name", sortable: true },
    { id: "email", header: "Email", accessorKey: "email", sortable: true },
    { id: "role", header: "Role", accessorKey: "role" },
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
    {
      id: "actions",
      header: "",
      cell: (row: User) => (
        <button
          type="button"
          className="text-xs text-primary hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            alert(`Action on ${row.name}`);
          }}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="w-full max-w-sm rounded-md border border-base-200 bg-base-100 px-3 py-2 text-sm text-base-content placeholder:text-base-content/70 focus:outline-none focus:ring-2 focus:ring-primary/50"
      />

      <DataTable
        data={paged}
        columns={columns}
        rowKey="id"
        striped
        caption={`Showing ${paged.length} of ${filtered.length} users`}
      />

      {totalPages > 1 && (
        <Pagination>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              />
            </Pagination.Item>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === page} onClick={() => setPage(p)}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              />
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      )}
    </div>
  );
}
