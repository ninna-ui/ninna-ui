import { Divider } from "@ninna-ui/primitives";

export default function Horizontal() {
  return (
    <div className="space-y-4 w-full">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Soft (default)</p>
        <Divider variant="horizontal" weight="soft" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Solid</p>
        <Divider variant="horizontal" weight="solid" />
      </div>
    </div>
  );
}
