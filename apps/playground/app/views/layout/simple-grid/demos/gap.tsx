import { SimpleGrid } from "@ninna-ui/layout";

export default function Gap() {
  const gaps = ["0", "2", "4", "6"] as const;

  return (
    <div className="space-y-6">
      {gaps.map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <SimpleGrid columns={3} gap={gap}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-3 bg-success/10 rounded text-center text-sm">
                {i + 1}
              </div>
            ))}
          </SimpleGrid>
        </div>
      ))}
    </div>
  );
}
