import { Text } from "@ninna-ui/primitives";

export default function Basic() {
  return (
    <div className="space-y-4">
      <Text>
        This is a default paragraph text. The Text component renders as a paragraph by default
        and uses the base text size with default color.
      </Text>
      <Text as="span">This is a span element.</Text>
    </div>
  );
}
