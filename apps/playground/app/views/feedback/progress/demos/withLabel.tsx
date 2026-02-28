import { Progress } from "@ninna-ui/feedback";

export default function WithLabel() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Label on Right (default)</h4>
        <Progress value={65} showValue labelPosition="right" color="primary" />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Label on Left</h4>
        <Progress value={45} showValue labelPosition="left" color="success" />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Label on Top</h4>
        <Progress value={80} showValue labelPosition="top" color="info" label="Upload Progress" />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Label Inside (requires lg or xl size)</h4>
        <Progress value={55} showValue labelPosition="inside" color="secondary" size="xl" />
      </div>
    </div>
  );
}
