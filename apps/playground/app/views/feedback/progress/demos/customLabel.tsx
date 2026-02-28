import { Progress } from "@ninna-ui/feedback";

export default function CustomLabel() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Format (MB)</h4>
        <Progress
          value={750}
          max={1000}
          showValue
          labelPosition="right"
          color="primary"
          formatLabel={(value, max) => `${value}MB / ${max}MB`}
        />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Format (Steps)</h4>
        <Progress
          value={3}
          max={5}
          showValue
          labelPosition="right"
          color="success"
          formatLabel={(value, max) => `Step ${value} of ${max}`}
        />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Format (Files)</h4>
        <Progress
          value={42}
          max={100}
          showValue
          labelPosition="top"
          color="info"
          label="Uploading files..."
          formatLabel={(value, max) => `${value} / ${max} files`}
        />
      </div>
    </div>
  );
}
