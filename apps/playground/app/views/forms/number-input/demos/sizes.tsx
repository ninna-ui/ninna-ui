import { NumberInput } from '@ninna-ui/forms';

export default function SizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <NumberInput size="xs" defaultValue={10} />
      <NumberInput size="sm" defaultValue={20} />
      <NumberInput size="md" defaultValue={30} />
      <NumberInput size="lg" defaultValue={40} />
      <NumberInput size="xl" defaultValue={50} />
    </div>
  );
}
