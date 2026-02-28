import { NumberInput } from '@ninna-ui/forms';

export default function PrecisionDemo() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-base-content/70">2 decimal places, step by 0.01</p>
      <NumberInput defaultValue={9.99} step={0.01} precision={2} />
    </div>
  );
}
