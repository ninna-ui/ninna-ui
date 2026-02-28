import { SimpleGrid } from "@ninna-ui/layout";

export default function Basic() {
  return (
    <SimpleGrid columns={3} gap="4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-4 bg-success/10 rounded-lg text-center">
          Card {i + 1}
        </div>
      ))}
    </SimpleGrid>
  );
}
