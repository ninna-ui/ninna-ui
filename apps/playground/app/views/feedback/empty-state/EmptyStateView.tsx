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
import { emptyStateMeta } from "./meta";

import Basic from "./demos/basic";
import WithIcon from "./demos/withIcon";
import Sizes from "./demos/sizes";
import WithAction from "./demos/withAction";
import UseCases from "./demos/useCases";

export const emptyStateSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "with-icon", title: "With Icon", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "with-action", title: "With Action", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const EMPTY_STATE_PROPS: PropDefinition[] = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Title text to display",
  },
  {
    name: "description",
    type: "string",
    description: "Description text below the title",
  },
  {
    name: "icon",
    type: "React.ReactNode",
    description: "Icon to display above the title",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the empty state",
  },
  {
    name: "action",
    type: "React.ReactNode",
    description: "Action button or content below the description",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Additional content below the description",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { EmptyState } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

function SearchIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

export default function Example() {
  return (
    <EmptyState
      icon={<SearchIcon />}
      title="No results found"
      description="Try adjusting your search or filters."
      action={<Button>Clear Filters</Button>}
    />
  );
}`;

export function EmptyStateView() {
  return (
    <div className="">
      <ComponentHeader meta={emptyStateMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the EmptyState component to display empty or unavailable resource states."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A simple empty state with title and description."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/empty-state/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icon"
          title="With Icon"
          description="Add an icon to make the empty state more visually informative."
          level={3}
        >
          <CodePreview
            component={<WithIcon />}
            filePath="app/views/feedback/empty-state/demos/withIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Different sizes for various contexts."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/feedback/empty-state/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-action"
          title="With Action"
          description="Add action buttons to guide users on what to do next."
          level={3}
        >
          <CodePreview
            component={<WithAction />}
            filePath="app/views/feedback/empty-state/demos/withAction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Common empty state patterns for different scenarios."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/empty-state/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the EmptyState component."
        >
          <PropsTable data={EMPTY_STATE_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="status"</Code> to indicate the empty state</li>
              <li>Sets <Code>aria-label</Code> to the title for screen readers</li>
              <li>Icons are marked with <Code>aria-hidden="true"</Code> as they are decorative</li>
              <li>Uses semantic heading for the title to maintain document structure</li>
              <li>Action buttons are focusable and keyboard accessible</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
