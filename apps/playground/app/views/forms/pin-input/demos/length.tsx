import { PinInput } from "@ninna-ui/forms";

export default function Length() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">4 digits (default)</span>
        <PinInput length={4} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">6 digits</span>
        <PinInput length={6} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">8 digits</span>
        <PinInput length={8} />
      </div>
    </div>
  );
}
