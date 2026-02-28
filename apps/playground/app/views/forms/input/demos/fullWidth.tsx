import { Input } from "@ninna-ui/forms";

export default function FullWidth() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Full width (default)</span>
        <Input placeholder="Takes full container width" fullWidth />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Auto width</span>
        <Input placeholder="Auto width" fullWidth={false} />
      </div>
    </div>
  );
}
