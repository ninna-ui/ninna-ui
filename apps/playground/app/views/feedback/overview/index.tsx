import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const feedbackOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Alert", description: "Contextual feedback messages with info, success, warning, and danger variants.", href: "/feedback/alert" },
  { name: "Toast", description: "Non-blocking notification popups with auto-dismiss and action support.", href: "/feedback/toast" },
  { name: "Progress", description: "Linear progress bar with label, stripe animation, and indeterminate mode.", href: "/feedback/progress" },
  { name: "CircularProgress", description: "Circular/ring progress indicator with percentage label.", href: "/feedback/circular-progress" },
  { name: "Loading", description: "Spinner and loading indicators with multiple animation variants.", href: "/feedback/loading" },
  { name: "Skeleton", description: "Content placeholder with pulse animation for loading states.", href: "/feedback/skeleton" },
  { name: "Status", description: "Colored dot indicator for online/offline/busy/away states.", href: "/feedback/status" },
  { name: "EmptyState", description: "Placeholder for empty lists and search results with icon and action.", href: "/feedback/empty-state" },
];

const features = [
  "8 feedback components",
  "Toast system with imperative API",
  "Progress bars with indeterminate mode",
  "Skeleton loading with circle and text variants",
  "Accessible ARIA roles and live regions",
  "Consistent color variants across all components",
];

export default function FeedbackOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/feedback"
      title="Feedback"
      description="User feedback components - alerts, toasts, progress indicators, loading states, and skeleton placeholders. Keep users informed about what's happening."
      components={components}
      features={features}
    />
  );
}
