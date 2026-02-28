import { Wrap } from "@ninna-ui/layout";

export default function Justify() {
  const justifications = ["start", "center", "end", "between"] as const;

  return (
    <div className="space-y-6">
      {justifications.map((justify) => (
        <div key={justify}>
          <p className="text-sm text-base-content/70 mb-2">justify="{justify}"</p>
          <Wrap gap="2" justify={justify} className="p-4 bg-base-200 rounded-lg">
            <span className="px-3 py-1 bg-primary text-primary-content rounded">A</span>
            <span className="px-3 py-1 bg-primary text-primary-content rounded">B</span>
            <span className="px-3 py-1 bg-primary text-primary-content rounded">C</span>
          </Wrap>
        </div>
      ))}
    </div>
  );
}
