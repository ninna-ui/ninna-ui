import { CircularProgress } from "@ninna-ui/feedback";

export default function CustomLabel() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Format (Steps)</h4>
        <CircularProgress
          value={3}
          max={5}
          showValue
          labelPosition="center"
          color="primary"
          size="lg"
          formatLabel={(value, max) => `${value}/${max}`}
        />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Format (Score)</h4>
        <CircularProgress
          value={85}
          max={100}
          showValue
          labelPosition="center"
          color="success"
          size="lg"
          formatLabel={(value) => `${value}pts`}
        />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Custom Content</h4>
        <CircularProgress
          value={75}
          color="info"
          size="xl"
        >
          <div className="text-center">
            <div className="text-lg font-bold text-base-content/70">75%</div>
            <div className="text-xs text-base-content/70">Complete</div>
          </div>
        </CircularProgress>
      </div>
    </div>
  );
}
