import { useState } from "react";
import { Tree } from "@ninna-ui/data-display";
import type { TreeNode } from "@ninna-ui/data-display";

const fileTree: TreeNode[] = [
  {
    id: "src", label: "src",
    children: [
      { id: "components", label: "components", children: [
        { id: "button", label: "Button.tsx" },
        { id: "input", label: "Input.tsx" },
        { id: "modal", label: "Modal.tsx" },
      ]},
      { id: "hooks", label: "hooks", children: [
        { id: "use-state", label: "useState.ts" },
        { id: "use-effect", label: "useEffect.ts" },
      ]},
      { id: "app", label: "App.tsx" },
    ],
  },
  { id: "package", label: "package.json" },
];

export default function TreeSelection() {
  const [selected, setSelected] = useState("button");

  return (
    <div className="w-[300px]">
      <Tree data={fileTree} selectedId={selected} onSelect={setSelected} />
      <p className="mt-4 text-sm text-base-content/70">Selected: {selected}</p>
    </div>
  );
}
