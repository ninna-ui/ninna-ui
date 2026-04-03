import { Blockquote } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="space-y-4">
      <Blockquote color="neutral" variant="outline">Neutral color quote</Blockquote>
      <Blockquote color="primary" variant="outline">Primary color quote</Blockquote>
      <Blockquote color="secondary" variant="outline">Secondary color quote</Blockquote>
      <Blockquote color="accent" variant="outline">Accent color quote</Blockquote>
      <Blockquote color="info" variant="outline">Info color quote</Blockquote>
      <Blockquote color="success" variant="outline">Success color quote</Blockquote>
      <Blockquote color="warning" variant="outline">Warning color quote</Blockquote>
      <Blockquote color="danger" variant="outline">Danger color quote</Blockquote>
    </div>
  );
}
