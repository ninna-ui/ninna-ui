import { Stat } from "@ninna-ui/data-display";

export default function StatSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex gap-8">
      {sizes.map((size) => (
        <Stat key={size}>
          <Stat.Label>Size: {size}</Stat.Label>
          <Stat.Value size={size}>$12,345</Stat.Value>
          <Stat.HelpText>Sample text</Stat.HelpText>
        </Stat>
      ))}
    </div>
  );
}
