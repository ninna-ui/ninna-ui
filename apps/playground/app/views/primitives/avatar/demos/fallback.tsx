import { Avatar } from "@ninna-ui/primitives";

export default function Fallback() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="John Doe" color="primary" />
        <span className="text-xs text-base-content/70">Initials</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="A" color="secondary" />
        <span className="text-xs text-base-content/70">Single Letter</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar showFallbackIcon color="info" />
        <span className="text-xs text-base-content/70">Icon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar
          fallback={<span className="text-lg">🎨</span>}
          color="warning"
        />
        <span className="text-xs text-base-content/70">Custom</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar
          src="https://invalid-url.com/broken-image.jpg"
          name="Fallback"
          color="danger"
        />
        <span className="text-xs text-base-content/70">Image Error</span>
      </div>
    </div>
  );
}
