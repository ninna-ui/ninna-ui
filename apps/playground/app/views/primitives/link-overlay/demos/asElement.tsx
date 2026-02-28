import { LinkOverlay, LinkBox, Heading, Text } from "@ninna-ui/primitives";

export default function AsElement() {
  return (
    <div className="space-y-4">
      <LinkBox as="article" className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
        <Heading as="h3" size="lg">
          <LinkOverlay href="#">
            Article Element
          </LinkOverlay>
        </Heading>
        <Text muted className="mt-2">
          This LinkBox renders as an article element.
        </Text>
      </LinkBox>

      <LinkBox as="section" className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
        <Heading as="h3" size="lg">
          <LinkOverlay href="#">
            Section Element
          </LinkOverlay>
        </Heading>
        <Text muted className="mt-2">
          This LinkBox renders as a section element.
        </Text>
      </LinkBox>
    </div>
  );
}
