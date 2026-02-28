import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const navigationOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Tabs", description: "Tabbed interface with Radix-powered keyboard navigation and variants.", href: "/navigation/tabs" },
  { name: "Accordion", description: "Collapsible content sections with single or multiple open modes.", href: "/navigation/accordion" },
  { name: "Breadcrumbs", description: "Navigation trail with separator customization and ellipsis overflow.", href: "/navigation/breadcrumbs" },
  { name: "Pagination", description: "Page navigation with previous/next, numbered pages, and ellipsis.", href: "/navigation/pagination" },
  { name: "Stepper", description: "Multi-step progress indicator with horizontal and vertical orientations.", href: "/navigation/stepper" },
];

const features = [
  "5 navigation components",
  "Radix-powered Tabs and Accordion",
  "Full keyboard navigation support",
  "Horizontal and vertical orientations",
  "Controlled and uncontrolled modes",
  "Accessible ARIA tablist/tabpanel patterns",
];

export default function NavigationOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/navigation"
      title="Navigation"
      description="Navigation components — tabs, accordions, breadcrumbs, pagination, and steppers. Guide users through your application with accessible patterns."
      components={components}
      features={features}
    />
  );
}
