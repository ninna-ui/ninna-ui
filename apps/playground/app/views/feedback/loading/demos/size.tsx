import { Loading } from "@ninna-ui/feedback";

export default function Size() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="xs" />
        <span className="text-xs text-base-content/70">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="sm" />
        <span className="text-xs text-base-content/70">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="md" />
        <span className="text-xs text-base-content/70">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="lg" />
        <span className="text-xs text-base-content/70">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="xl" />
        <span className="text-xs text-base-content/70">xl</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="2xl" />
        <span className="text-xs text-base-content/70">2xl</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loading variant="spin" color="primary" size="3xl" />
        <span className="text-xs text-base-content/70">3xl</span>
      </div>
    </div>
  );
}
