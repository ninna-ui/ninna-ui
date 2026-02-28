import { Avatar } from "@ninna-ui/primitives";

export default function Shapes() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Circle" shape="circle" size="lg" color="primary" />
        <span className="text-xs text-base-content/70">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Square" shape="square" radius="none" size="lg" color="secondary" />
        <span className="text-xs text-base-content/70">square (none)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="SM" shape="square" radius="sm" size="lg" color="success" />
        <span className="text-xs text-base-content/70">square (sm)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="MD" shape="square" radius="md" size="lg" color="info" />
        <span className="text-xs text-base-content/70">square (md)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="LG" shape="square" radius="lg" size="lg" color="warning" />
        <span className="text-xs text-base-content/70">square (lg)</span>
      </div>
    </div>
  );
}
