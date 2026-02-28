import { Flex } from "@ninna-ui/layout";

export default function Direction() {
  const directions = ["row", "column", "row-reverse", "column-reverse"] as const;

  return (
    <div className="grid grid-cols-2 gap-6">
      {directions.map((dir) => (
        <div key={dir}>
          <p className="text-sm text-base-content/70 mb-2">{dir}</p>
          <Flex direction={dir} gap="2" className="p-4 bg-base-200 rounded-lg">
            <div className="px-3 py-2 bg-primary text-primary-content rounded">1</div>
            <div className="px-3 py-2 bg-primary text-primary-content rounded">2</div>
            <div className="px-3 py-2 bg-primary text-primary-content rounded">3</div>
          </Flex>
        </div>
      ))}
    </div>
  );
}
