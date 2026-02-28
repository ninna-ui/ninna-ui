import { Heading } from "@ninna-ui/primitives";

export default function Weights() {
  return (
    <div className="space-y-4">
      <Heading as="h2" weight="light">Light weight heading</Heading>
      <Heading as="h2" weight="normal">Normal weight heading</Heading>
      <Heading as="h2" weight="medium">Medium weight heading</Heading>
      <Heading as="h2" weight="semibold">Semibold weight heading (default)</Heading>
      <Heading as="h2" weight="bold">Bold weight heading</Heading>
    </div>
  );
}
