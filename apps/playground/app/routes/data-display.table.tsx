import TableView, { tableSections } from "~/views/data-display/table";
export default function TableRoute() { return <TableView />; }

export const handle = { sections: tableSections };