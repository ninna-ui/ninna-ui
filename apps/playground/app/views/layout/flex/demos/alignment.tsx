import { Flex } from "@ninna-ui/layout";

export default function Alignment() {
  const alignments = ["start", "center", "end", "stretch", "baseline"] as const;

  return (
    <div className="space-y-4">
      {alignments.map((align) => (
        <div key={align}>
          <p className="text-sm text-base-content/70 mb-2">align="{align}"</p>
          <Flex align={align} gap="4" className="h-24 p-4 bg-base-200 rounded-lg">
            <div className="px-4 py-2 bg-primary text-primary-content rounded">Short</div>
            <div className="px-4 py-6 bg-primary text-primary-content rounded">Tall</div>
            <div className="px-4 py-3 bg-primary text-primary-content rounded">Medium</div>
          </Flex>
        </div>
      ))}
    </div>
  );
}
