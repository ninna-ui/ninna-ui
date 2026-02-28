import OverlaysOverview, { overlaysOverviewSections } from "~/views/overlays/overview";

export default function OverlaysOverviewRoute() {
  return <OverlaysOverview />;
}


export const handle = {
  sections: overlaysOverviewSections,
};