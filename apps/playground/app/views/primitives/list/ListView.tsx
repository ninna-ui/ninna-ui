import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Heading } from "@ninna-ui/primitives";
import { listMeta } from "./meta";

import Basic from "./demos/basic";
import Types from "./demos/types";
import Markers from "./demos/markers";
import IconMarkers from "./demos/iconMarkers";
import Spacing from "./demos/spacing";
import Colors from "./demos/colors";
import UseCases from "./demos/useCases";

export const listSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "types", title: "Types", level: 3 },
  { id: "markers", title: "Markers", level: 3 },
  { id: "icon-markers", title: "Icon Markers", level: 3 },
  { id: "spacing", title: "Spacing", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const LIST_PROPS: PropDefinition[] = [
  {
    name: "type",
    type: "'unordered' | 'ordered'",
    defaultValue: "'unordered'",
    description: "List type (ul or ol)",
  },
  {
    name: "spacing",
    type: "'none' | 'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: "Spacing between list items",
  },
  {
    name: "marker",
    type: "'disc' | 'circle' | 'square' | 'decimal' | 'alpha' | 'roman' | 'none' | 'check' | 'arrow'",
    defaultValue: "'disc' (unordered) / 'decimal' (ordered)",
    description: "Marker style",
  },
  {
    name: "markerColor",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Marker color",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom icon for all list items",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const LIST_ITEM_PROPS: PropDefinition[] = [
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom icon for this item (overrides list icon)",
  },
  {
    name: "iconColor",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    description: "Icon color for this item",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { List, ListItem } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  );
}`;

export function ListView() {
  return (
    <div className="">
      <ComponentHeader meta={listMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the List and ListItem components to display lists."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default list rendering."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/list/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="types"
          title="Types"
          description="Ordered and unordered list types."
          level={3}
        >
          <CodePreview
            component={<Types />}
            filePath="app/views/primitives/list/demos/types.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="markers"
          title="Markers"
          description="Different marker styles for lists."
          level={3}
        >
          <CodePreview
            component={<Markers />}
            filePath="app/views/primitives/list/demos/markers.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="icon-markers"
          title="Icon Markers"
          description="Lists with icon markers like check and arrow."
          level={3}
        >
          <CodePreview
            component={<IconMarkers />}
            filePath="app/views/primitives/list/demos/iconMarkers.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="spacing"
          title="Spacing"
          description="Different spacing options between list items."
          level={3}
        >
          <CodePreview
            component={<Spacing />}
            filePath="app/views/primitives/list/demos/spacing.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Lists with different marker colors."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/list/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of List component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/list/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for List and ListItem components."
        >
          <div className="space-y-8">
            <div>
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">List Props</Heading>
              <PropsTable data={LIST_PROPS} />
            </div>
            <div>
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">ListItem Props</Heading>
              <PropsTable data={LIST_ITEM_PROPS} />
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
              <li>Semantic HTML: Uses native ul/ol and li elements for proper semantics</li>
              <li>List role: Proper list role is automatically applied</li>
              <li>Screen readers: List items are properly announced with count</li>
              <li>Nested lists: Supports proper nesting with correct hierarchy</li>
              <li>Icon markers: Icons are hidden from screen readers (aria-hidden)</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
