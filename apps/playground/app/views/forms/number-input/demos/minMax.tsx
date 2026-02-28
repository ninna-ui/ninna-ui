import { NumberInput } from '@ninna-ui/forms';

export default function MinMaxDemo() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-base-content/70">Value clamped between 0 and 100</p>
      <NumberInput defaultValue={50} min={0} max={100} />
    </div>
  );
}
