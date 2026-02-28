import { NumberInput } from "@ninna-ui/forms";

export default function MinMaxStep() {
  return (
    <div className="flex flex-col gap-4 w-48">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Min: 0, Max: 10</span>
        <NumberInput min={0} max={10} defaultValue={5} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Step: 5</span>
        <NumberInput min={0} max={100} step={5} defaultValue={25} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Step: 0.1</span>
        <NumberInput min={0} max={1} step={0.1} defaultValue={0.5} />
      </div>
    </div>
  );
}
