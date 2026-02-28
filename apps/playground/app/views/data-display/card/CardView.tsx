import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { cardMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Interactive from "./demos/interactive";

export const cardSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "interactive", title: "Interactive", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CARD_PROPS: PropDefinition[] = [
  { name: "variant", type: "'outline' | 'elevated' | 'filled' | 'ghost'", defaultValue: "'outline'", description: "Visual style variant" },
  { name: "interactive", type: "boolean", defaultValue: "false", description: "Enable hover and focus styles for clickable cards" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const HEADER_PROPS: PropDefinition[] = [
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TITLE_PROPS: PropDefinition[] = [
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const USAGE = `import { Card } from "@ninna-ui/data-display";
import { Button } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
      </Card.Header>
      <Card.Body>Content here</Card.Body>
      <Card.Footer>
        <Button size="sm">Action</Button>
      </Card.Footer>
    </Card>
  );
}`;

export function CardView() {
  return (
    <div>
      <ComponentHeader meta={cardMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Card component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic card with header, body, and footer." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/card/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="variants" title="Variants" description="Card supports outline, elevated, filled, and ghost styles." level={3}>
          <CodePreview component={<Variants />} filePath="app/views/data-display/card/demos/variants.tsx" />
        </ComponentSection>

        <ComponentSection id="interactive" title="Interactive" description="Cards with hover and focus styles for clickable use cases." level={3}>
          <CodePreview component={<Interactive />} filePath="app/views/data-display/card/demos/interactive.tsx" />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Card component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Card (Root)" data={CARD_PROPS} />
            <PropsTable title="Card.Header" data={HEADER_PROPS} />
            <PropsTable title="Card.Title" data={TITLE_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility">
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Card uses semantic HTML with proper heading hierarchy</li>
              <li>Interactive cards receive focus styles and are keyboard navigable</li>
              <li>Card content is read naturally by screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
