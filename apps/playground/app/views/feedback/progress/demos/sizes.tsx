import { Progress } from "@ninna-ui/feedback";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">xs</span>
        <Progress value={60} size="xs" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">sm</span>
        <Progress value={60} size="sm" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">md</span>
        <Progress value={60} size="md" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">lg</span>
        <Progress value={60} size="lg" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-xs text-base-content/70">xl</span>
        <Progress value={60} size="xl" color="primary" />
      </div>
    </div>
  );
}
