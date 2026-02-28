import { Flex } from "@ninna-ui/layout";

export default function Justify() {
  const justifications = ["start", "center", "end", "between", "around", "evenly"] as const;

  return (
    <div className="space-y-4">
      {justifications.map((justify) => (
        <div key={justify}>
          <p className="text-sm text-base-content/70 mb-2">justify="{justify}"</p>
          <Flex justify={justify} className="p-4 bg-base-200 rounded-lg">
            <div className="px-4 py-2 bg-primary text-primary-content rounded">A</div>
            <div className="px-4 py-2 bg-primary text-primary-content rounded">B</div>
            <div className="px-4 py-2 bg-primary text-primary-content rounded">C</div>
          </Flex>
        </div>
      ))}
    </div>
  );
}
