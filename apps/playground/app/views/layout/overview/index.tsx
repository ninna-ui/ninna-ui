import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const layoutOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Box", description: "Base layout primitive — a styled div with all layout props.", href: "/layout/box" },
  { name: "Container", description: "Centered content wrapper with responsive max-width presets.", href: "/layout/container" },
  { name: "Stack", description: "Vertical stack with consistent spacing between children.", href: "/layout/stack" },
  { name: "Flex", description: "Flexbox container with direction, alignment, and gap control.", href: "/layout/flex" },
  { name: "Grid", description: "CSS Grid container with columns, rows, and gap configuration.", href: "/layout/grid" },
  { name: "SimpleGrid", description: "Auto-responsive grid with minChildWidth or fixed column count.", href: "/layout/simple-grid" },
  { name: "Center", description: "Centers content horizontally and vertically.", href: "/layout/center" },
  { name: "Wrap", description: "Flex wrap container for tags, chips, and inline elements.", href: "/layout/wrap" },
  { name: "AspectRatio", description: "Maintains a fixed aspect ratio for images and video embeds.", href: "/layout/aspect-ratio" },
  { name: "Separator", description: "Horizontal or vertical visual divider between content sections.", href: "/layout/separator" },
];

const features = [
  "12 layout components (Box, Stack, HStack, VStack, Flex, Grid, ...)",
  "Responsive gap and spacing props",
  "CSS Grid and Flexbox abstractions",
  "Container with 6 max-width presets",
  "AspectRatio for media embeds",
  "Zero runtime — pure Tailwind class composition",
];

export default function LayoutOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/layout"
      title="Layout"
      description="Responsive layout primitives — stacks, grids, containers, and spacing utilities. Build any layout with semantic, composable components."
      components={components}
      features={features}
    />
  );
}
