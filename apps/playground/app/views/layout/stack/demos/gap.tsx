import { HStack } from "@ninna-ui/layout";

export default function Gap() {
  const gaps = ["0", "1", "2", "4", "6", "8"] as const;
  
  return (
    <div className="space-y-6">
      {gaps.map((gap) => (
        <div key={gap}>
          <p className="text-sm text-base-content/70 mb-2">gap="{gap}"</p>
          <HStack gap={gap}>
            <div className="p-3 bg-primary/10 rounded">1</div>
            <div className="p-3 bg-primary/10 rounded">2</div>
            <div className="p-3 bg-primary/10 rounded">3</div>
          </HStack>
        </div>
      ))}
    </div>
  );
}
