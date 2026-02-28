import { Text } from "@ninna-ui/primitives";

export default function Alignment() {
  return (
    <div className="space-y-4">
      <div className="p-4 border border-base-300 rounded-lg">
        <Text align="left">Left aligned text (default)</Text>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Text align="center">Center aligned text</Text>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Text align="right">Right aligned text</Text>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Text align="justify">
          Justified text spreads words evenly across each line. This is useful for creating
          a clean, newspaper-like appearance in your text blocks. The spacing between words
          is adjusted to make both edges of the text align with the container.
        </Text>
      </div>
    </div>
  );
}
