import { Heading } from "@ninna-ui/primitives";

export default function Sizes() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Override default sizes with the size prop</p>
        <div className="space-y-2">
          <Heading as="h2" size="6xl">Size 6xl</Heading>
          <Heading as="h2" size="5xl">Size 5xl</Heading>
          <Heading as="h2" size="4xl">Size 4xl</Heading>
          <Heading as="h2" size="3xl">Size 3xl</Heading>
          <Heading as="h2" size="2xl">Size 2xl</Heading>
          <Heading as="h2" size="xl">Size xl</Heading>
          <Heading as="h2" size="lg">Size lg</Heading>
        </div>
      </div>
    </div>
  );
}
