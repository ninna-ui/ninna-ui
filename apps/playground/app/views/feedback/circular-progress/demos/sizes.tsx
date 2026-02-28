import { CircularProgress } from "@ninna-ui/feedback";

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={60} size="xs" color="primary" />
        <span className="text-xs text-base-content/70">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={60} size="sm" color="primary" />
        <span className="text-xs text-base-content/70">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={60} size="md" color="primary" />
        <span className="text-xs text-base-content/70">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={60} size="lg" color="primary" />
        <span className="text-xs text-base-content/70">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress value={60} size="xl" color="primary" />
        <span className="text-xs text-base-content/70">xl</span>
      </div>
    </div>
  );
}
