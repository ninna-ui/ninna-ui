import { Slider } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <Slider size="sm" defaultValue={[30]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <Slider size="md" defaultValue={[50]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <Slider size="lg" defaultValue={[70]} />
      </div>
    </div>
  );
}
