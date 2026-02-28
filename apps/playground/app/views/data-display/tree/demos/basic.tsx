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
      { id: "index", label: "index.ts" },
    ],
  },
  { id: "package", label: "package.json" },
  { id: "tsconfig", label: "tsconfig.json" },
];

export default function BasicTree() {
  return (
    <div className="w-[300px]">
      <Tree data={fileTree} />
    </div>
  );
}
