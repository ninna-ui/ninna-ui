import { LinkOverlay, LinkBox, Heading, Text } from "@ninna-ui/primitives";

export default function External() {
  return (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
      <Heading as="h3" size="lg">
        <LinkOverlay href="https://github.com" external>
          External Link Card
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        This card opens an external link in a new tab.
      </Text>
    </LinkBox>
  );
}
