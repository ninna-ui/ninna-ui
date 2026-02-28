import { LinkOverlay, LinkBox, Heading, Text } from "@ninna-ui/primitives";

export default function Basic() {
  return (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
      <Heading as="h3" size="lg">
        <LinkOverlay href="#">
          Card Title
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        The entire card is clickable because of LinkOverlay.
      </Text>
    </LinkBox>
  );
}
