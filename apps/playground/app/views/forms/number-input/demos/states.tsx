import { NumberInput } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="flex flex-col gap-4 w-48">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Normal</span>
        <NumberInput defaultValue={50} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Disabled</span>
        <NumberInput defaultValue={50} disabled />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Invalid</span>
        <NumberInput defaultValue={50} invalid />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Read-only</span>
        <NumberInput defaultValue={50} readOnly />
      </div>
    </div>
  );
}
