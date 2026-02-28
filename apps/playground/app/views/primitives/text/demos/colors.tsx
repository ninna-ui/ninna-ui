import { Text } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="space-y-2">
      <Text color="neutral">Neutral color text</Text>
      <Text color="primary">Primary color text</Text>
      <Text color="secondary">Secondary color text</Text>
      <Text color="accent">Accent color text</Text>
      <Text color="info">Info color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="danger">Danger color text</Text>
      <Text muted>Muted text (secondary/subtle)</Text>
    </div>
  );
}
