import PaginationView, { paginationSections } from "~/views/navigation/pagination";
export default function PaginationRoute() { return <PaginationView />; }

export const handle = { sections: paginationSections };