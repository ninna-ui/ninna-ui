import { SimpleGrid } from "@ninna-ui/layout";

export default function Columns() {
  const columnCounts = [1, 2, 3, 4] as const;

  return (
    <div className="space-y-6">
      {columnCounts.map((cols) => (
        <div key={cols}>
          <p className="text-sm text-base-content/70 mb-2">columns={cols}</p>
          <SimpleGrid columns={cols} gap="2">
            {Array.from({ length: cols * 2 }).map((_, i) => (
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
