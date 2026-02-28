import { Progress } from "@ninna-ui/feedback";

export default function Variants() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-1">
        <span className="text-sm text-base-content/70">Default</span>
        <Progress value={60} variant="default" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-base-content/70">Striped</span>
        <Progress value={60} variant="striped" color="primary" />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-base-content/70">Animated</span>
        <Progress value={60} variant="animated" color="primary" />
      </div>
    </div>
  );
}
