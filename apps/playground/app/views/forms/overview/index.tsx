import { PackageOverview } from "~/components/docs/PackageOverview";
import type { ComponentSectionType } from "~/components/docs/types";

export const formsOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  { name: "Input", description: "Text input with variants, sizes, colors, and addon support.", href: "/forms/input" },
  { name: "Textarea", description: "Multi-line text input with auto-resize option.", href: "/forms/textarea" },
  { name: "Checkbox", description: "Radix-powered checkbox with indeterminate state and group support.", href: "/forms/checkbox" },
  { name: "CheckboxGroup", description: "Group of checkboxes with shared state and select-all support.", href: "/forms/checkbox-group" },
  { name: "Switch", description: "Toggle switch with on/off states and label positioning.", href: "/forms/switch" },
  { name: "RadioGroup", description: "Radix-powered radio buttons with card variant for rich selection.", href: "/forms/radio-group" },
  { name: "Select", description: "Radix-powered dropdown select with search, groups, and custom items.", href: "/forms/select" },
  { name: "Slider", description: "Range slider with marks, tooltips, and multi-thumb support.", href: "/forms/slider" },
  { name: "NumberInput", description: "Numeric input with increment/decrement buttons and min/max.", href: "/forms/number-input" },
  { name: "PinInput", description: "One-time code input with auto-focus and paste support.", href: "/forms/pin-input" },
  { name: "FileUpload", description: "Drag-and-drop file upload with preview and validation.", href: "/forms/file-upload" },
  { name: "Field", description: "Form field wrapper with label, help text, and error message.", href: "/forms/field" },
  { name: "FormControl", description: "Low-level form control context for custom form components.", href: "/forms/form-control" },
  { name: "FormGroup", description: "Semantic fieldset grouping for related form fields with legend, description, and direction.", href: "/forms/form-group" },
  { name: "InputGroup", description: "Input with left/right addons for icons, text, or buttons.", href: "/forms/input-group" },
];

const features = [
  "20 form components and utilities",
  "Radix primitives for Checkbox, Radio, Select, Slider",
  "Built-in form validation integration",
  "Controlled and uncontrolled modes",
  "Full keyboard navigation",
  "ARIA-compliant with screen reader support",
  "FormControl context for custom components",
  "8 color variants for focus states",
];

export default function FormsOverview() {
  return (
    <PackageOverview
      packageName="@ninna-ui/forms"
      title="Forms"
      description="Accessible form components powered by Radix UI primitives - inputs, selects, checkboxes, sliders, file uploads, and form infrastructure."
      components={components}
      features={features}
    />
  );
}
