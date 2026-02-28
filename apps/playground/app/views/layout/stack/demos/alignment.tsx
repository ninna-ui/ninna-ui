import { HStack } from "@ninna-ui/layout";

export default function Alignment() {
  const alignments = ["start", "center", "end", "stretch", "baseline"] as const;
  
  return (
    <div className="space-y-6">
      {alignments.map((align) => (
        <div key={align}>
          <p className="text-sm text-base-content/70 mb-2">align="{align}"</p>
          <HStack gap="4" align={align} className="h-24 bg-base-200 rounded-lg p-2">
            <div className="p-3 bg-primary text-primary-content rounded text-sm">Short</div>
            <div className="p-3 py-6 bg-primary text-primary-content rounded text-sm">Tall</div>
            <div className="p-3 bg-primary text-primary-content rounded text-sm">Med</div>
          </HStack>
        </div>
      ))}
    </div>
  );
}
