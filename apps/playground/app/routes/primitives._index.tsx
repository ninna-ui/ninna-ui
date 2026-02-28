import PrimitivesOverview, { primitivesOverviewSections } from "~/views/primitives/overview";

export default function PrimitivesOverviewRoute() {
  return <PrimitivesOverview />;
}


export const handle = {
  sections: primitivesOverviewSections,
};