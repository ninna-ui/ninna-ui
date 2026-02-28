import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const primitivesOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Button", description: "Primary action trigger with variants, sizes, loading states, and icon support.", href: "/primitives/button" },
  { name: "Badge", description: "Small status indicator for counts, labels, and notifications.", href: "/primitives/badge" },
  { name: "Avatar", description: "User profile image with fallback initials and status indicators.", href: "/primitives/avatar" },
  { name: "IconButton", description: "Icon-only button with accessible label for toolbar actions.", href: "/primitives/icon-button" },
  { name: "Heading", description: "Semantic heading element (h1–h6) with size and weight control.", href: "/primitives/heading" },
  { name: "Text", description: "Body text with size, weight, alignment, and truncation options.", href: "/primitives/text" },
  { name: "Link", description: "Styled anchor with underline variants and external link support.", href: "/primitives/link" },
  { name: "LinkOverlay", description: "Makes an entire card or container clickable via a single link.", href: "/primitives/link-overlay" },
  { name: "Divider", description: "Visual separator with horizontal/vertical orientation and variants.", href: "/primitives/divider" },
  { name: "Code", description: "Inline code snippet with monospace styling.", href: "/primitives/code" },
  { name: "Blockquote", description: "Styled quotation block with accent border and variants.", href: "/primitives/blockquote" },
  { name: "List", description: "Ordered and unordered lists with custom markers and spacing.", href: "/primitives/list" },
  { name: "Kbd", description: "Keyboard shortcut display with platform-aware styling.", href: "/primitives/kbd" },
  { name: "Mark", description: "Highlighted text with customizable color.", href: "/primitives/mark" },
];

const features = [
  "16 components for building any UI",
  "8 color variants per component",
  "5 size options (xs–xl)",
  "Polymorphic 'as' prop on typography",
  "Full ref forwarding support",
  "Tree-shakeable — import only what you use",
];

export default function PrimitivesOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/primitives"
      title="Primitives"
      description="Foundational UI building blocks — buttons, badges, typography, links, and more. These are the atoms of the Ninna UI design system."
      components={components}
      features={features}
    />
  );
}
