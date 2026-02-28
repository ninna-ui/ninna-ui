import { Heading } from "@ninna-ui/primitives";

export default function Basic() {
  return (
    <div className="space-y-4">
      <Heading as="h1">This is an h1 heading</Heading>
      <Heading as="h2">This is an h2 heading</Heading>
      <Heading as="h3">This is an h3 heading</Heading>
    </div>
  );
}
