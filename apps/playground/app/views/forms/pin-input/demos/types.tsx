import { PinInput } from "@ninna-ui/forms";

export default function Types() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Text (default)</span>
        <PinInput type="text" placeholder="○" />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Number only</span>
        <PinInput type="number" placeholder="0" />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Password (masked)</span>
        <PinInput type="password" />
      </div>
    </div>
  );
}
