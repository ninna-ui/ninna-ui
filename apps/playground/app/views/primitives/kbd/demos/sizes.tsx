import { Kbd } from "@ninna-ui/primitives";

export default function Sizes() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <span className="text-sm text-base-content/70 mr-2">xs:</span>
        <Kbd size="xs">Ctrl</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-base-content/70 mr-2">sm:</span>
        <Kbd size="sm">Ctrl</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-base-content/70 mr-2">md:</span>
        <Kbd size="md">Ctrl</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-base-content/70 mr-2">lg:</span>
        <Kbd size="lg">Ctrl</Kbd>
      </div>
    </div>
  );
}
