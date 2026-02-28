import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { iconButtonMeta } from "./meta";

import Solid from "./demos/solid";
import Soft from "./demos/soft";
import Outline from "./demos/outline";
import Ghost from "./demos/ghost";
import Sizes from "./demos/sizes";
import Radius from "./demos/radius";
import Loading from "./demos/loading";
import Disabled from "./demos/disabled";
import UseCases from "./demos/useCases";

export const iconButtonSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "solid", title: "Solid", level: 3 },
  { id: "soft", title: "Soft", level: 3 },
  { id: "outline", title: "Outline", level: 3 },
  { id: "ghost", title: "Ghost", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "radius", title: "Radius", level: 3 },
  { id: "loading", title: "Loading State", level: 3 },
  { id: "disabled", title: "Disabled State", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const ICON_BUTTON_PROPS: PropDefinition[] = [
  {
    name: "icon",
    type: "React.ReactNode",
    required: true,
    description: "The icon to display in the button",
  },
  {
    name: "aria-label",
    type: "string",
    required: true,
    description: "Accessible label for the button (required for screen readers)",
  },
  {
    name: "variant",
    type: "'solid' | 'soft' | 'outline' | 'ghost' | 'text'",
    defaultValue: "'solid'",
    description: "Visual style variant of the button",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the button",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the button (square dimensions)",
  },
  {
    name: "radius",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: "Border radius of the button",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Shows loading spinner and disables the button",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables the button",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { IconButton } from "@ninna-ui/primitives";
import { Heart } from "lucide-react";

export default function Example() {
  return (
    <IconButton
      icon={<Heart />}
      color="primary"
      aria-label="Like"
    />
  );
}`;

export function IconButtonView() {
  return (
    <div className="">
      <ComponentHeader meta={iconButtonMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the IconButton component in your application. Always provide an aria-label for accessibility."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="solid"
          title="Solid"
          description="Filled icon buttons with solid background colors."
          level={3}
        >
          <CodePreview
            component={<Solid />}
            filePath="app/views/primitives/icon-button/demos/solid.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="soft"
          title="Soft"
          description="Icon buttons with light tinted backgrounds and colored icons."
          level={3}
        >
          <CodePreview
            component={<Soft />}
            filePath="app/views/primitives/icon-button/demos/soft.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="outline"
          title="Outline"
          description="Icon buttons with transparent background and colored border."
          level={3}
        >
          <CodePreview
            component={<Outline />}
            filePath="app/views/primitives/icon-button/demos/outline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="ghost"
          title="Ghost"
          description="Icon buttons with no background and subtle hover effect."
          level={3}
        >
          <CodePreview
            component={<Ghost />}
            filePath="app/views/primitives/icon-button/demos/ghost.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Icon buttons in different sizes from xs to xl. All sizes maintain square dimensions."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/icon-button/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="radius"
          title="Radius"
          description="Different border radius options. Use 'full' for circular buttons."
          level={3}
        >
          <CodePreview
            component={<Radius />}
            filePath="app/views/primitives/icon-button/demos/radius.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="loading"
          title="Loading State"
          description="Icon buttons with loading spinner. The icon is replaced with a spinner during loading."
          level={3}
        >
          <CodePreview
            component={<Loading />}
            filePath="app/views/primitives/icon-button/demos/loading.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="disabled"
          title="Disabled State"
          description="Disabled icon buttons in different variants."
          level={3}
        >
          <CodePreview
            component={<Disabled />}
            filePath="app/views/primitives/icon-button/demos/disabled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of IconButton usage in different contexts."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/icon-button/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the IconButton component."
        >
          <PropsTable data={ICON_BUTTON_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>aria-label is required: Since IconButton has no visible text, an aria-label must be provided for screen readers</li>
              <li>IconButton has proper focus states with visible outlines</li>
              <li>Disabled buttons are not focusable and have aria-disabled attribute</li>
              <li>Loading buttons are disabled and announce loading state via aria-busy</li>
              <li>Icons are marked with aria-hidden to prevent duplicate announcements</li>
              <li>Keyboard navigation is fully supported (Enter and Space keys)</li>
              <li>The button element has type="button" by default to prevent form submission</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
