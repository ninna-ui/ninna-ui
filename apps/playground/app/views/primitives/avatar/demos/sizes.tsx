import { Avatar } from "@ninna-ui/primitives";

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="XS" size="xs" color="primary" />
        <span className="text-xs text-base-content/70">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="SM" size="sm" color="primary" />
        <span className="text-xs text-base-content/70">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="MD" size="md" color="primary" />
        <span className="text-xs text-base-content/70">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="LG" size="lg" color="primary" />
        <span className="text-xs text-base-content/70">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="XL" size="xl" color="primary" />
        <span className="text-xs text-base-content/70">xl</span>
      </div>
    </div>
  );
}
