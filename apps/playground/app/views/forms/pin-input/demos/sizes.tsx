import { PinInput } from '@ninna-ui/forms';

export default function SizesDemo() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Extra Small</p>
        <PinInput size="xs" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <PinInput size="sm" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <PinInput size="md" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <PinInput size="lg" length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Extra Large</p>
        <PinInput size="xl" length={4} />
      </div>
    </div>
  );
}
