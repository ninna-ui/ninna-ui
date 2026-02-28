import { Wrap } from "@ninna-ui/layout";

export default function Gap() {
  const gaps = ["0", "2", "4", "6"] as const;

  return (
    <div className="space-y-6">
      {gaps.map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <Wrap gap={gap} className="p-4 bg-base-200 rounded-lg">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="px-3 py-1 bg-primary text-primary-content rounded text-sm">
                Tag {i + 1}
              </span>
            ))}
          </Wrap>
        </div>
      ))}
    </div>
  );
}
