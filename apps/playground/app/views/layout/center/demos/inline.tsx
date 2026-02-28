import { Center } from "@ninna-ui/layout";

export default function Inline() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">inline=false (default)</p>
        <Center className="h-24 bg-base-200 rounded-lg">
          <div className="p-4 bg-primary text-primary-content rounded">Centered</div>
        </Center>
        <p className="text-xs text-base-content/70 mt-1">Takes full width</p>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">inline=true</p>
        <Center inline className="h-24 w-24 bg-base-200 rounded-lg">
          <span className="text-2xl">🎯</span>
        </Center>
        <p className="text-xs text-base-content/70 mt-1">Shrinks to content</p>
      </div>
    </div>
  );
}
