import { Blockquote } from "@ninna-ui/primitives";

export default function Variants() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Outline (default)</p>
        <Blockquote variant="outline">
          A simple quote with just a left border.
        </Blockquote>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Solid</p>
        <Blockquote variant="solid">
          A quote with background color and left border.
        </Blockquote>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Soft</p>
        <Blockquote variant="soft">
          A quote with full border and background.
        </Blockquote>
      </div>
    </div>
  );
}
