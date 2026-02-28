import { Textarea } from "@ninna-ui/forms";

export default function Resize() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">resize="none"</span>
        <Textarea resize="none" placeholder="Cannot resize" />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">resize="vertical" (default)</span>
        <Textarea resize="vertical" placeholder="Drag bottom edge to resize" />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">resize="horizontal"</span>
        <Textarea resize="horizontal" placeholder="Drag right edge to resize" fullWidth={false} className="w-64" />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">resize="both"</span>
        <Textarea resize="both" placeholder="Drag corner to resize" fullWidth={false} className="w-64" />
      </div>
    </div>
  );
}
