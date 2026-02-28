import DataTableView, { dataTableSections } from "~/views/data-display/data-table";
export default function DataTableRoute() { return <DataTableView />; }

export const handle = { sections: dataTableSections };