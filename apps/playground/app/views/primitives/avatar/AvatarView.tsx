import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Code, Heading } from "@ninna-ui/primitives";
import { avatarMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Shapes from "./demos/shapes";
import Fallback from "./demos/fallback";
import WithRing from "./demos/withRing";
import Group from "./demos/group";
import UseCases from "./demos/useCases";

export const avatarSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "shapes", title: "Shapes", level: 3 },
  { id: "fallback", title: "Fallback", level: 3 },
  { id: "with-ring", title: "With Ring", level: 3 },
    { id: "group", title: "Avatar Group", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "avatar-props", title: "Avatar Props", level: 3 },
  { id: "avatar-group-props", title: "AvatarGroup Props", level: 3 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const AVATAR_PROPS: PropDefinition[] = [
  {
    name: "src",
    type: "string",
    description: "Image source URL for the avatar",
  },
  {
    name: "alt",
    type: "string",
    description: "Alternative text for the image",
  },
  {
    name: "name",
    type: "string",
    description: "Name used to generate initials fallback (e.g., 'John Doe' → 'JD')",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the avatar",
  },
  {
    name: "shape",
    type: "'circle' | 'square'",
    defaultValue: "'circle'",
    description: "Shape of the avatar",
  },
  {
    name: "radius",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: "Border radius when shape is 'square'",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color theme for fallback background",
  },
  {
    name: "showRing",
    type: "boolean",
    defaultValue: "false",
    description: "Show a colored ring around the avatar",
  },
  {
    name: "ringColor",
    type: "Color",
    description: "Ring color (defaults to color prop)",
  },
  {
    name: "fallback",
    type: "React.ReactNode",
    description: "Custom fallback content when image fails or no src",
  },
  {
    name: "showFallbackIcon",
    type: "boolean",
    defaultValue: "false",
    description: "Show fallback icon instead of initials",
  },
    {
    name: "loading",
    type: "'eager' | 'lazy'",
    defaultValue: "'lazy'",
    description: "Image loading attribute",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const AVATAR_GROUP_PROPS: PropDefinition[] = [
  {
    name: "max",
    type: "number",
    description: "Maximum number of avatars to show before overflow indicator",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size for all avatars in the group",
  },
  {
    name: "spacing",
    type: "'tight' | 'normal' | 'loose'",
    defaultValue: "'normal'",
    description: "Spacing between avatars (overlap amount)",
  },
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "Avatar components to display in the group",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Avatar , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Avatar
      src="/user-avatar.jpg"
      alt="John Doe"
      name="John Doe"
      size="md"
    />
  );
}`;

const GROUP_USAGE = `import { Avatar, AvatarGroup , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <AvatarGroup max={3}>
      <Avatar name="John Doe" color="primary" />
      <Avatar name="Jane Smith" color="secondary" />
      <Avatar name="Bob Wilson" color="success" />
      <Avatar name="Alice Brown" color="info" />
    </AvatarGroup>
  );
}`;

export function AvatarView() {
  return (
    <div className="">
      <ComponentHeader meta={avatarMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Avatar component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic avatar examples with image, initials, and fallback icon."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/avatar/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Avatars in different sizes from xs to xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/avatar/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Different color themes for the fallback background."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/avatar/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="shapes"
          title="Shapes"
          description="Circle and square shapes with different border radius options."
          level={3}
        >
          <CodePreview
            component={<Shapes />}
            filePath="app/views/primitives/avatar/demos/shapes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="fallback"
          title="Fallback"
          description="Different fallback options: initials, icon, custom content, or when image fails to load."
          level={3}
        >
          <CodePreview
            component={<Fallback />}
            filePath="app/views/primitives/avatar/demos/fallback.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-ring"
          title="With Ring"
          description="Avatars with a colored ring border."
          level={3}
        >
          <CodePreview
            component={<WithRing />}
            filePath="app/views/primitives/avatar/demos/withRing.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="group"
          title="Avatar Group"
          description="Group multiple avatars with overlap and overflow indicator."
          level={3}
        >
          <CodePreview
            component={<Group />}
            filePath="app/views/primitives/avatar/demos/group.tsx"
          />
          <div className="mt-4">
            <UsageExample code={GROUP_USAGE} />
          </div>
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of avatar usage in different contexts."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/avatar/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Avatar components."
        >
          <div className="space-y-8">
            <div id="avatar-props">
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">Avatar Props</Heading>
              <PropsTable data={AVATAR_PROPS} />
            </div>
            <div id="avatar-group-props">
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">AvatarGroup Props</Heading>
              <PropsTable data={AVATAR_GROUP_PROPS} />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Avatar has <Code>role="img"</Code> for proper semantic meaning</li>
              <li>Uses <Code>aria-label</Code> with alt text or name for screen readers</li>
                            <li>AvatarGroup has <Code>role="group"</Code> with descriptive label</li>
              <li>Images use <Code>loading="lazy"</Code> by default for performance</li>
              <li>Fallback content is properly announced to screen readers</li>
              <li>Overflow count in groups is accessible with proper labeling</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
