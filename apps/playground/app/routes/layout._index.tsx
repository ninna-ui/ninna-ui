import LayoutOverview, { layoutOverviewSections } from "~/views/layout/overview";

export default function LayoutOverviewRoute() {
  return <LayoutOverview />;
}


export const handle = {
  sections: layoutOverviewSections,
};