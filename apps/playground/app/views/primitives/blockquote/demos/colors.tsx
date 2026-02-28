import { Blockquote } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="space-y-4">
      <Blockquote color="neutral" variant="solid">Neutral color quote</Blockquote>
      <Blockquote color="primary" variant="solid">Primary color quote</Blockquote>
      <Blockquote color="secondary" variant="solid">Secondary color quote</Blockquote>
      <Blockquote color="accent" variant="solid">Accent color quote</Blockquote>
      <Blockquote color="info" variant="solid">Info color quote</Blockquote>
      <Blockquote color="success" variant="solid">Success color quote</Blockquote>
      <Blockquote color="warning" variant="solid">Warning color quote</Blockquote>
      <Blockquote color="danger" variant="solid">Danger color quote</Blockquote>
    </div>
  );
}
