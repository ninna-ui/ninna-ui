import { Flex } from "@ninna-ui/layout";

export default function Inline() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">inline=false (default)</p>
        <Flex gap="2" className="p-2 bg-base-200 rounded">
          <span className="px-2 py-1 bg-primary text-primary-content rounded text-sm">Tag 1</span>
          <span className="px-2 py-1 bg-primary text-primary-content rounded text-sm">Tag 2</span>
        </Flex>
        <p className="text-xs text-base-content/70 mt-1">Takes full width</p>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">inline=true</p>
        <Flex inline gap="2" className="p-2 bg-base-200 rounded">
          <span className="px-2 py-1 bg-primary text-primary-content rounded text-sm">Tag 1</span>
          <span className="px-2 py-1 bg-primary text-primary-content rounded text-sm">Tag 2</span>
        </Flex>
        <p className="text-xs text-base-content/70 mt-1">Shrinks to content</p>
      </div>
    </div>
  );
}
