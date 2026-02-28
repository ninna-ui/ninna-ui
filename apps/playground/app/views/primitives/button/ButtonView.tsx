import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { buttonMeta } from "./meta";

import Solid from "./demos/solid";
import Soft from "./demos/soft";
import Outline from "./demos/outline";
import Ghost from "./demos/ghost";
import Text from "./demos/text";
import Size from "./demos/size";
import Radius from "./demos/radius";
import WithIcon from "./demos/withIcon";
import WithBadge from "./demos/withBadge";
import Loading from "./demos/loading";
import Disabled from "./demos/disabled";
import Action from "./demos/action";
import Custom from "./demos/custom";

export const buttonSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "solid", title: "Solid", level: 3 },
  { id: "soft", title: "Soft", level: 3 },
  { id: "outline", title: "Outline", level: 3 },
  { id: "ghost", title: "Ghost", level: 3 },
  { id: "text", title: "Text", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "radius", title: "Radius", level: 3 },
  { id: "with-icons", title: "With Icons", level: 3 },
  { id: "with-badge", title: "With Badge", level: 3 },
  { id: "loading", title: "Loading State", level: 3 },
  { id: "disabled", title: "Disabled State", level: 3 },
  { id: "actions", title: "Actions", level: 3 },
  { id: "custom", title: "Custom Styles", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const BUTTON_PROPS: PropDefinition[] = [
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
    description: "Size of the button",
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
    name: "fullWidth",
    type: "boolean",
    defaultValue: "false",
    description: "Makes the button full width",
  },
  {
    name: "leftIcon",
    type: "React.ReactNode",
    description: "Icon to display on the left side",
  },
  {
    name: "rightIcon",
    type: "React.ReactNode",
    description: "Icon to display on the right side",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "Button content",
  },
];

const BASIC_USAGE = `import { Button } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Button color="primary">
      Click me
    </Button>
  );
}`;

export function ButtonView() {
  return (
    <div className="">
      <ComponentHeader meta={buttonMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Button component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="solid"
          title="Solid"
          description="Filled buttons with solid background colors."
          level={3}
        >
          <CodePreview
            component={<Solid />}
            filePath="app/views/primitives/button/demos/solid.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="soft"
          title="Soft"
          description="Buttons with light tinted backgrounds and colored text."
          level={3}
        >
          <CodePreview
            component={<Soft />}
            filePath="app/views/primitives/button/demos/soft.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="outline"
          title="Outline"
          description="Buttons with transparent background and colored border."
          level={3}
        >
          <CodePreview
            component={<Outline />}
            filePath="app/views/primitives/button/demos/outline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="ghost"
          title="Ghost"
          description="Buttons with no background and subtle hover effect."
          level={3}
        >
          <CodePreview
            component={<Ghost />}
            filePath="app/views/primitives/button/demos/ghost.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="text"
          title="Text"
          description="Text-only buttons with underline on hover."
          level={3}
        >
          <CodePreview
            component={<Text />}
            filePath="app/views/primitives/button/demos/text.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Buttons in different sizes from xs to xl."
          level={3}
        >
          <CodePreview
            component={<Size />}
            filePath="app/views/primitives/button/demos/size.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="radius"
          title="Radius"
          description="Different border radius options."
          level={3}
        >
          <CodePreview
            component={<Radius />}
            filePath="app/views/primitives/button/demos/radius.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icons"
          title="With Icons"
          description="Buttons with left and right icons."
          level={3}
        >
          <CodePreview
            component={<WithIcon />}
            filePath="app/views/primitives/button/demos/withIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-badge"
          title="With Badge"
          description="Buttons with notification badges."
          level={3}
        >
          <CodePreview
            component={<WithBadge />}
            filePath="app/views/primitives/button/demos/withBadge.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="loading"
          title="Loading State"
          description="Buttons with loading spinner."
          level={3}
        >
          <CodePreview
            component={<Loading />}
            filePath="app/views/primitives/button/demos/loading.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="disabled"
          title="Disabled State"
          description="Disabled buttons in different variants."
          level={3}
        >
          <CodePreview
            component={<Disabled />}
            filePath="app/views/primitives/button/demos/disabled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="actions"
          title="Actions"
          description="Buttons with onClick handlers and links."
          level={3}
        >
          <CodePreview
            component={<Action />}
            filePath="app/views/primitives/button/demos/action.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom"
          title="Custom Styles"
          description="Custom styled buttons with unique effects."
          level={3}
        >
          <CodePreview
            component={<Custom />}
            filePath="app/views/primitives/button/demos/custom.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Button component."
        >
          <PropsTable data={BUTTON_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Buttons have proper focus states with visible outlines</li>
              <li>Disabled buttons are not focusable and have aria-disabled attribute</li>
              <li>Loading buttons are disabled and announce loading state to screen readers</li>
              <li>Icon-only buttons should include aria-label for accessibility</li>
              <li>Keyboard navigation is fully supported (Enter and Space keys)</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
