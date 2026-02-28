import { Text } from "@ninna-ui/primitives";

export default function Sizes() {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-4 flex-wrap">
        <Text size="xs">xs</Text>
        <Text size="sm">sm</Text>
        <Text size="md">md (default)</Text>
        <Text size="lg">lg</Text>
        <Text size="xl">xl</Text>
        <Text size="2xl">2xl</Text>
        <Text size="3xl">3xl</Text>
        <Text size="4xl">4xl</Text>
        <Text size="5xl">5xl</Text>
        <Text size="6xl">6xl</Text>
      </div>
    </div>
  );
}
