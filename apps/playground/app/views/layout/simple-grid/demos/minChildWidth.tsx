import { SimpleGrid } from "@ninna-ui/layout";

export default function MinChildWidth() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">minChildWidth="150px"</p>
        <SimpleGrid minChildWidth="150px" gap="4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 bg-success/10 rounded text-center">
              Card {i + 1}
            </div>
          ))}
        </SimpleGrid>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">minChildWidth="200px"</p>
        <SimpleGrid minChildWidth="200px" gap="4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 bg-success/10 rounded text-center">
              Card {i + 1}
            </div>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}
