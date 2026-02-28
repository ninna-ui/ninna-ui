import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const overlaysOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Modal", description: "Dialog overlay with header, body, footer, and close button. Focus-trapped and dismissible.", href: "/overlays/modal" },
  { name: "Drawer", description: "Slide-in panel from any edge with multiple sizes and placements.", href: "/overlays/drawer" },
  { name: "Popover", description: "Floating content panel anchored to a trigger element.", href: "/overlays/popover" },
  { name: "Tooltip", description: "Lightweight hover/focus tooltip with arrow and placement options.", href: "/overlays/tooltip" },
  { name: "DropdownMenu", description: "Context menu with items, checkboxes, radio groups, and submenus.", href: "/overlays/dropdown-menu" },
];

const features = [
  "5 overlay components powered by Radix UI",
  "Automatic focus trapping and restoration",
  "Keyboard navigation (Escape to close)",
  "Scroll lock on body when open",
  "Accessible ARIA dialog/menu patterns",
  "Controlled and uncontrolled modes",
];

export default function OverlaysOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/overlays"
      title="Overlays"
      description="Overlay components built on Radix UI — modals, drawers, popovers, tooltips, and dropdown menus. Fully accessible with focus management."
      components={components}
      features={features}
    />
  );
}
