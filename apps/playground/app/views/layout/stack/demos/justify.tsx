import { HStack } from "@ninna-ui/layout";

export default function Justify() {
  const justifyOptions = ["start", "center", "end", "between", "around", "evenly"] as const;
  
  return (
    <div className="space-y-6">
      {justifyOptions.map((justify) => (
        <div key={justify}>
          <p className="text-sm text-base-content/70 mb-2">justify="{justify}"</p>
          <HStack gap="2" justify={justify} className="bg-base-200 rounded-lg p-2">
            <div className="p-3 bg-success text-success-content rounded text-sm">1</div>
            <div className="p-3 bg-success text-success-content rounded text-sm">2</div>
            <div className="p-3 bg-success text-success-content rounded text-sm">3</div>
          </HStack>
        </div>
      ))}
    </div>
  );
}
