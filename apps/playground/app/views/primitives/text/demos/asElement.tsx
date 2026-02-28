import { Text } from "@ninna-ui/primitives";

export default function AsElement() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Text as="p">Paragraph element (default)</Text>
        <Text as="span">Span element (inline)</Text>
        <Text as="div">Div element (block)</Text>
        <Text as="label">Label element</Text>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-base-content/70 mb-2">Semantic elements</p>
        <div className="flex flex-wrap gap-4 items-baseline">
          <Text as="strong">Strong (bold)</Text>
          <Text as="em">Emphasized (italic)</Text>
          <Text as="small">Small text</Text>
          <Text as="mark">Marked/highlighted</Text>
          <Text as="del">Deleted text</Text>
          <Text as="ins">Inserted text</Text>
          <Text as="sub">Subscript</Text>
          <Text as="sup">Superscript</Text>
        </div>
      </div>
    </div>
  );
}
