import { Tree } from "@ninna-ui/data-display";
import type { TreeNode } from "@ninna-ui/data-display";

const fileTree: TreeNode[] = [
  {
    id: "src", label: "src",
    children: [
      { id: "components", label: "components", children: [
        { id: "button", label: "Button.tsx" },
        { id: "input", label: "Input.tsx" },
      ]},
      { id: "app", label: "App.tsx" },
    ],
  },
  { id: "public", label: "public", children: [
    { id: "favicon", label: "favicon.ico" },
  ]},
  { id: "package", label: "package.json" },
];

export default function TreeCollapsed() {
  return (
    <div className="w-[300px]">
      <Tree data={fileTree} defaultExpandedIds={[]} />
    </div>
  );
}
