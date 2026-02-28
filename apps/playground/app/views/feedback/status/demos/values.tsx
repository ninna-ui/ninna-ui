import { Status } from "@ninna-ui/feedback";

export default function Values() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 border border-base-300 rounded-lg">
        <Status value="success" size="md">Success</Status>
        <p className="mt-2 text-sm text-base-content/70">
          Indicates successful completion
        </p>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Status value="danger" size="md">Error</Status>
        <p className="mt-2 text-sm text-base-content/70">
          Indicates failure or error state
        </p>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Status value="warning" size="md">Warning</Status>
        <p className="mt-2 text-sm text-base-content/70">
          Indicates caution or pending state
        </p>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Status value="info" size="md">Info</Status>
        <p className="mt-2 text-sm text-base-content/70">
          Indicates informational state
        </p>
      </div>
    </div>
  );
}
