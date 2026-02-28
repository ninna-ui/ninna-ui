import { Kbd, Text, Heading } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Keyboard Shortcuts */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Keyboard Shortcuts</Heading>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Text>Copy</Text>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <span className="text-base-content/70">+</span>
              <Kbd>C</Kbd>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Text>Paste</Text>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <span className="text-base-content/70">+</span>
              <Kbd>V</Kbd>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Text>Save</Text>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <span className="text-base-content/70">+</span>
              <Kbd>S</Kbd>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Text>Undo</Text>
            <div className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <span className="text-base-content/70">+</span>
              <Kbd>Z</Kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Usage */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Inline Usage</Heading>
        <Text>
          Press <Kbd size="xs">Enter</Kbd> to submit the form or <Kbd size="xs">Esc</Kbd> to cancel.
        </Text>
      </div>

      {/* Navigation Keys */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Navigation Keys</Heading>
        <div className="flex items-center gap-2">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
          <span className="text-base-content/70 ml-2">Arrow keys for navigation</span>
        </div>
      </div>

      {/* Special Keys */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Special Keys</Heading>
        <div className="flex flex-wrap items-center gap-2">
          <Kbd>Tab</Kbd>
          <Kbd>Caps Lock</Kbd>
          <Kbd>Backspace</Kbd>
          <Kbd>Delete</Kbd>
          <Kbd>Space</Kbd>
        </div>
      </div>
    </div>
  );
}
