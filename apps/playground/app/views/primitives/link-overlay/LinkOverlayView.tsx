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
import { linkOverlayMeta } from "./meta";

import Basic from "./demos/basic";
import NestedLinks from "./demos/nestedLinks";
import AsElement from "./demos/asElement";
import External from "./demos/external";
import UseCases from "./demos/useCases";

export const linkOverlaySections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "nested-links", title: "Nested Links", level: 3 },
  { id: "as-element", title: "As Element", level: 3 },
  { id: "external", title: "External Links", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const LINK_BOX_PROPS: PropDefinition[] = [
  {
    name: "as",
    type: "'div' | 'article' | 'section' | 'aside' | 'header' | 'footer' | 'main' | 'nav'",
    defaultValue: "'div'",
    description: "The HTML element to render as",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const LINK_OVERLAY_PROPS: PropDefinition[] = [
  {
    name: "href",
    type: "string",
    description: "The URL the link points to",
  },
  {
    name: "external",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the link opens in a new tab",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { LinkOverlay, LinkBox, Heading, Text } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <LinkBox className="p-4 border rounded-lg">
      <Heading as="h3">
        <LinkOverlay href="/article">
          Article Title
        </LinkOverlay>
      </Heading>
      <Text>Article description...</Text>
    </LinkBox>
  );
}`;

export function LinkOverlayView() {
  return (
    <div className="">
      <ComponentHeader meta={linkOverlayMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Use LinkBox as a container and LinkOverlay to make the entire area clickable."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A simple clickable card using LinkBox and LinkOverlay."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/link-overlay/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="nested-links"
          title="Nested Links"
          description="Use relative z-10 class on nested links to make them clickable above the overlay."
          level={3}
        >
          <CodePreview
            component={<NestedLinks />}
            filePath="app/views/primitives/link-overlay/demos/nestedLinks.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="as-element"
          title="As Element"
          description="LinkBox can render as different semantic HTML elements."
          level={3}
        >
          <CodePreview
            component={<AsElement />}
            filePath="app/views/primitives/link-overlay/demos/asElement.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="external"
          title="External Links"
          description="LinkOverlay supports external links with proper security attributes."
          level={3}
        >
          <CodePreview
            component={<External />}
            filePath="app/views/primitives/link-overlay/demos/external.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of LinkOverlay component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/link-overlay/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for LinkBox and LinkOverlay components."
        >
          <div className="space-y-8">
            <div>
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">LinkBox Props</Heading>
              <PropsTable data={LINK_BOX_PROPS} />
            </div>
            <div>
              <Heading as="h3" size="xl" weight="semibold" className="mb-4">LinkOverlay Props</Heading>
              <PropsTable data={LINK_OVERLAY_PROPS} />
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
              <li>Semantic HTML: LinkBox can render as semantic elements like article, section, etc.</li>
              <li>Focus management: The LinkOverlay anchor receives focus for keyboard navigation</li>
              <li>Nested interactivity: Use relative z-10 on nested links/buttons to keep them interactive</li>
              <li>External links: Automatically adds rel=&quot;noopener noreferrer&quot; for security</li>
              <li>Click area: The entire card area is clickable, improving usability</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
