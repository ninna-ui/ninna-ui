import NavigationOverview, { navigationOverviewSections } from "~/views/navigation/overview";

export default function NavigationOverviewRoute() {
  return <NavigationOverview />;
}


export const handle = {
  sections: navigationOverviewSections,
};