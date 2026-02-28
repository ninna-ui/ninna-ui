import DataDisplayOverview, { dataDisplayOverviewSections } from "~/views/data-display/overview";

export default function DataDisplayOverviewRoute() {
  return <DataDisplayOverview />;
}


export const handle = {
  sections: dataDisplayOverviewSections,
};