import { Wrap } from "@ninna-ui/layout";

export default function Alignment() {
  const alignments = ["start", "center", "end"] as const;

  return (
    <div className="space-y-6">
      {alignments.map((align) => (
        <div key={align}>
          <p className="text-sm text-base-content/70 mb-2">align="{align}"</p>
          <Wrap gap="2" align={align} className="p-4 bg-base-200 rounded-lg min-h-[80px]">
            <span className="px-3 py-1 bg-primary text-primary-content rounded">Short</span>
            <span className="px-3 py-4 bg-primary text-primary-content rounded">Tall</span>
            <span className="px-3 py-2 bg-primary text-primary-content rounded">Medium</span>
          </Wrap>
        </div>
      ))}
    </div>
  );
}
