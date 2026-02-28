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
import { treeMeta } from "./meta";

import Basic from "./demos/basic";
import Selection from "./demos/selection";
import Collapsed from "./demos/collapsed";

export const treeSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "selection", title: "With Selection", level: 3 },
  { id: "collapsed", title: "Collapsed by Default", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TREE_PROPS: PropDefinition[] = [
  { name: "aria-label", type: "string", description: "Accessible label for the tree widget (use when no visible label exists)" },
  { name: "aria-labelledby", type: "string", description: "ID of an element that labels the tree" },
  { name: "data", type: "TreeNode[]", required: true, description: "Tree data structure" },
  { name: "selectedId", type: "string", description: "Currently selected node id" },
  { name: "onSelect", type: "(id: string) => void", description: "Callback when a node is selected" },
  { name: "defaultExpandedIds", type: "string[]", description: "Initially expanded node ids" },
  { name: "showLines", type: "boolean", defaultValue: "true", description: "Show connecting lines between nodes" },
  { name: "showIcons", type: "boolean", defaultValue: "true", description: "Show folder/file icons" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const NODE_PROPS: PropDefinition[] = [
  { name: "id", type: "string", required: true, description: "Unique node identifier" },
  { name: "label", type: "string", required: true, description: "Display label for the node" },
  { name: "children", type: "TreeNode[]", description: "Child nodes (makes this a folder)" },
  { name: "icon", type: "ReactNode", description: "Custom icon for the node" },
];

const USAGE = `import { Tree } from "@ninna-ui/data-display";

const data = [
  { id: "1", label: "Folder", children: [
    { id: "1-1", label: "File.tsx" },
  ]},
];

export default function Example() {
  return <Tree data={data} />;
}`;

export function TreeViewPage() {
  return (
    <div>
      <ComponentHeader meta={treeMeta} />

      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Tree component in your application.">
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic file tree with folders and files." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/tree/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="selection" title="With Selection" description="Track and highlight selected nodes." level={3}>
          <CodePreview component={<Selection />} filePath="app/views/data-display/tree/demos/selection.tsx" />
        </ComponentSection>

        <ComponentSection id="collapsed" title="Collapsed by Default" description="Start with all nodes collapsed." level={3}>
          <CodePreview component={<Collapsed />} filePath="app/views/data-display/tree/demos/collapsed.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props for the Tree component.">
          <div className="space-y-8">
            <PropsTable title="Tree" data={TREE_PROPS} />
            <PropsTable title="TreeNode" data={NODE_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="tree"</Code> and <Code>role="treeitem"</Code> ARIA roles</li>
              <li>Supports <Code>aria-label</Code> and <Code>aria-labelledby</Code> props for labeling</li>
              <li>Arrow keys navigate between visible nodes</li>
              <li>Right arrow expands a collapsed folder, Left arrow collapses</li>
              <li>Enter/Space selects the focused node</li>
              <li>Expanded state is announced via <Code>aria-expanded</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
