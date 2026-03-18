import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const dataDisplayOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Card", description: "Content container with header, body, footer, and multiple variants.", href: "/data-display/card" },
  { name: "Stat", description: "Statistic display with label, value, trend indicator, and help text.", href: "/data-display/stat" },
  { name: "Table", description: "Semantic HTML table with striped, hoverable, and compact variants.", href: "/data-display/table" },
  { name: "DataTable", description: "Feature-rich data table with sorting, pagination, and selection.", href: "/data-display/data-table" },
  { name: "Timeline", description: "Vertical timeline for activity feeds, changelogs, and history.", href: "/data-display/timeline" },
  { name: "Tree", description: "Hierarchical tree view with expand/collapse and selection.", href: "/data-display/tree" },
  { name: "Calendar", description: "Date calendar with single and range selection modes.", href: "/data-display/calendar" },
];

const features = [
  "7 data display components",
  "DataTable with sorting, pagination, selection",
  "Card with composable sub-components",
  "Timeline for activity feeds",
  "Tree view with nested data",
  "Calendar with date range support",
];

export default function DataDisplayOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/data-display"
      title="Data Display"
      description="Components for presenting data - cards, tables, statistics, timelines, trees, and calendars. Display structured information clearly."
      components={components}
      features={features}
    />
  );
}
