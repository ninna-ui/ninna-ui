import { Heading } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="space-y-4">
      <Heading as="h3" color="neutral">Neutral color heading</Heading>
      <Heading as="h3" color="primary">Primary color heading</Heading>
      <Heading as="h3" color="secondary">Secondary color heading</Heading>
      <Heading as="h3" color="accent">Accent color heading</Heading>
      <Heading as="h3" color="info">Info color heading</Heading>
      <Heading as="h3" color="success">Success color heading</Heading>
      <Heading as="h3" color="warning">Warning color heading</Heading>
      <Heading as="h3" color="danger">Danger color heading</Heading>
    </div>
  );
}
