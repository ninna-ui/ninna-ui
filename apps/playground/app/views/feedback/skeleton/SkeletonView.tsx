import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Code } from "@ninna-ui/primitives";
import { skeletonMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Circle from "./demos/circle";
import TextDemo from "./demos/text";
import WithChildren from "./demos/withChildren";
import UseCases from "./demos/useCases";

export const skeletonSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "circle", title: "Circle", level: 3 },
  { id: "text", title: "Text", level: 3 },
  { id: "with-children", title: "With Children", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "skeleton-props", title: "Skeleton Props", level: 3 },
  { id: "skeleton-circle-props", title: "SkeletonCircle Props", level: 3 },
  { id: "skeleton-text-props", title: "SkeletonText Props", level: 3 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SKELETON_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'pulse' | 'shine' | 'none'",
    defaultValue: "'pulse'",
    description: "Animation variant for the skeleton",
  },
  {
    name: "width",
    type: "string | number",
    description: "Width of the skeleton (e.g., '200px', 200, '100%')",
  },
  {
    name: "height",
    type: "string | number",
    description: "Height of the skeleton (e.g., '20px', 20)",
  },
  {
    name: "radius",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: "Border radius of the skeleton",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "true",
    description: "Whether the skeleton is in loading state",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Content to show when loading is false",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const SKELETON_CIRCLE_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "string | number",
    defaultValue: "'40px'",
    description: "Size of the circle (width and height)",
  },
  {
    name: "variant",
    type: "'pulse' | 'shine' | 'none'",
    defaultValue: "'pulse'",
    description: "Animation variant",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "true",
    description: "Whether the skeleton is in loading state",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Content to show when loading is false",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const SKELETON_TEXT_PROPS: PropDefinition[] = [
  {
    name: "noOfLines",
    type: "number",
    defaultValue: "3",
    description: "Number of text lines to render",
  },
  {
    name: "gap",
    type: "string | number",
    defaultValue: "'8px'",
    description: "Gap between lines",
  },
  {
    name: "variant",
    type: "'pulse' | 'shine' | 'none'",
    defaultValue: "'pulse'",
    description: "Animation variant",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "true",
    description: "Whether the skeleton is in loading state",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Content to show when loading is false",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Skeleton, SkeletonCircle, SkeletonText } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <SkeletonCircle size="40px" />
        <SkeletonText noOfLines={2} />
      </div>
      <Skeleton height="200px" />
    </div>
  );
}`;

export function SkeletonView() {
  return (
    <div className="">
      <ComponentHeader meta={skeletonMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Skeleton components to display loading placeholders."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic skeleton placeholders with different widths."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/skeleton/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Different animation variants: pulse, shine, or none."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/feedback/skeleton/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="circle"
          title="Circle"
          description="Circular skeleton for avatar placeholders."
          level={3}
        >
          <CodePreview
            component={<Circle />}
            filePath="app/views/feedback/skeleton/demos/circle.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="text"
          title="Text"
          description="Text skeleton for paragraph placeholders."
          level={3}
        >
          <CodePreview
            component={<TextDemo />}
            filePath="app/views/feedback/skeleton/demos/text.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-children"
          title="With Children"
          description="Toggle between skeleton and actual content using the loading prop."
          level={3}
        >
          <CodePreview
            component={<WithChildren />}
            filePath="app/views/feedback/skeleton/demos/withChildren.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Common skeleton patterns for cards, profiles, feeds, and tables."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/skeleton/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Skeleton components."
        >
          <div className="space-y-8">
            <div>
              <h3 id="skeleton-props" className="text-lg font-semibold mb-4">Skeleton Props</h3>
              <PropsTable data={SKELETON_PROPS} />
            </div>
            <div>
              <h3 id="skeleton-circle-props" className="text-lg font-semibold mb-4">SkeletonCircle Props</h3>
              <PropsTable data={SKELETON_CIRCLE_PROPS} />
            </div>
            <div>
              <h3 id="skeleton-text-props" className="text-lg font-semibold mb-4">SkeletonText Props</h3>
              <PropsTable data={SKELETON_TEXT_PROPS} />
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
              <li>Uses <Code>role="status"</Code> to indicate loading state</li>
              <li>Sets <Code>aria-busy="true"</Code> to indicate content is loading</li>
              <li>Includes visually hidden "Loading..." text via <Code>sr-only</Code> class for screen readers</li>
              <li>Smoothly transitions to content when loading completes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
