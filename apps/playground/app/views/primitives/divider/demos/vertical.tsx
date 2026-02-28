import { Divider } from "@ninna-ui/primitives";

export default function Vertical() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Divider variant="vertical" weight="soft" className="h-6" />
        <span className="text-xs text-base-content/70">Soft</span>
      </div>
      <div className="flex items-center gap-2">
        <Divider variant="vertical" weight="solid" className="h-6" />
        <span className="text-xs text-base-content/70">Solid</span>
      </div>
    </div>
  );
}
