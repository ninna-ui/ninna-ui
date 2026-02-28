import BreadcrumbsView, { breadcrumbsSections } from "~/views/navigation/breadcrumbs";
export default function BreadcrumbsRoute() { return <BreadcrumbsView />; }

export const handle = { sections: breadcrumbsSections };