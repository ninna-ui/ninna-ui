import { Flex } from "@ninna-ui/layout";

export default function WrapDemo() {
  return (
    <Flex gap="4" wrap="wrap" className="max-w-md">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-4 bg-secondary/10 rounded-lg w-24 text-center">
          Item {i + 1}
        </div>
      ))}
    </Flex>
  );
}
