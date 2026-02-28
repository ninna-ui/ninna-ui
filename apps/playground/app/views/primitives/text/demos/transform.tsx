import { Text } from "@ninna-ui/primitives";

export default function Transform() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Text transformations</p>
        <div className="space-y-2">
          <Text uppercase>uppercase text</Text>
          <Text lowercase>LOWERCASE TEXT</Text>
          <Text capitalize>capitalize each word</Text>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Text decorations</p>
        <div className="space-y-2">
          <Text italic>Italic text style</Text>
          <Text underline>Underlined text</Text>
          <Text strikethrough>Strikethrough text</Text>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Combined styles</p>
        <div className="space-y-2">
          <Text weight="bold" italic>Bold and italic text</Text>
          <Text uppercase weight="semibold" color="primary">Uppercase semibold primary</Text>
          <Text size="lg" underline color="info">Large underlined info text</Text>
        </div>
      </div>
    </div>
  );
}
