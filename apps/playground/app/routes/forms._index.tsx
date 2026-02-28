import FormsOverview, { formsOverviewSections } from "~/views/forms/overview";

export default function FormsOverviewRoute() {
  return <FormsOverview />;
}


export const handle = {
  sections: formsOverviewSections,
};