import { Loading } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Button Loading State */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Button Loading</h4>
        <div className="flex gap-4">
          <Button variant="outline" color="neutral" disabled className="flex items-center gap-2">
            <Loading variant="spin" size="sm" color="neutral" />
            Loading...
          </Button>
          <Button color="success" disabled className="flex items-center gap-2">
            <Loading variant="spin" size="sm" color="accent" />
            Saving...
          </Button>
        </div>
      </div>

      {/* Card Loading */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Card Loading</h4>
        <div className="border border-base-300 rounded-lg p-8 flex flex-col items-center justify-center gap-3">
          <Loading variant="spin" size="lg" color="primary" />
          <span className="text-sm text-base-content/70">Loading content...</span>
        </div>
      </div>

      {/* Inline Loading */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Inline Loading</h4>
        <div className="text-sm text-base-content/70 flex items-center gap-2">
          Fetching data <Loading variant="dots" size="sm" color="primary" />
        </div>
      </div>

      {/* Full Page Loading */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Overlay Loading</h4>
        <div className="relative border border-base-300 rounded-lg p-8 h-40">
          <div className="text-sm text-base-content/70">Background content</div>
          <div className="absolute inset-0 bg-base-100/80 flex items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Loading variant="spin" size="xl" color="primary" />
              <span className="text-sm text-base-content/70">Please wait...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
