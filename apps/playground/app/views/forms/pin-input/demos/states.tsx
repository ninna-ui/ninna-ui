import { PinInput } from '@ninna-ui/forms';

export default function StatesDemo() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Normal</p>
        <PinInput length={4} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With Default Value</p>
        <PinInput length={4} defaultValue="1234" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Disabled</p>
        <PinInput length={4} disabled defaultValue="1234" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Invalid</p>
        <PinInput length={4} invalid />
      </div>
    </div>
  );
}
