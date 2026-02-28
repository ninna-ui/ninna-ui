import { CircularProgress } from "@ninna-ui/feedback";

export default function WithLabel() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Center Label</h4>
        <CircularProgress value={65} showValue labelPosition="center" color="primary" size="lg" />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Bottom Label</h4>
        <CircularProgress value={45} showValue labelPosition="bottom" color="success" size="lg" />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">No Label</h4>
        <CircularProgress value={80} labelPosition="none" color="info" size="lg" />
      </div>
    </div>
  );
}
