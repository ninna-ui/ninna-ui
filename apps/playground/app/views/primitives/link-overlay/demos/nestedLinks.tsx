import { LinkOverlay, LinkBox, Link, Heading, Text } from "@ninna-ui/primitives";

export default function NestedLinks() {
  return (
    <LinkBox className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
      <Heading as="h3" size="lg">
        <LinkOverlay href="#">
          Article Title
        </LinkOverlay>
      </Heading>
      <Text muted className="mt-2">
        Written by{" "}
        <Link href="#" className="relative z-10" color="primary">
          John Doe
        </Link>
      </Text>
      <Text muted size="sm" className="mt-1">
        The author link is clickable separately from the card.
      </Text>
    </LinkBox>
  );
}
