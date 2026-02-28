import { Slider } from "@ninna-ui/forms";

export default function Orientation() {
  return (
    <div className="flex gap-8 items-start">
      <div className="w-64">
        <span className="text-sm text-base-content/70 mb-2 block">Horizontal (default)</span>
        <Slider defaultValue={[50]} orientation="horizontal" />
      </div>
      <div className="h-48">
        <span className="text-sm text-base-content/70 mb-2 block">Vertical</span>
        <Slider defaultValue={[50]} orientation="vertical" className="h-40" />
      </div>
    </div>
  );
}
