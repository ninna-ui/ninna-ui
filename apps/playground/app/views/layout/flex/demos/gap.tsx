import { Flex } from "@ninna-ui/layout";

export default function Gap() {
  const gaps = ["0", "2", "4", "6", "8"] as const;

  return (
    <div className="space-y-4">
      {gaps.map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <Flex gap={gap} className="p-4 bg-base-200 rounded-lg">
            <div className="px-4 py-2 bg-primary text-primary-content rounded">1</div>
            <div className="px-4 py-2 bg-primary text-primary-content rounded">2</div>
            <div className="px-4 py-2 bg-primary text-primary-content rounded">3</div>
          </Flex>
        </div>
      ))}
    </div>
  );
}
