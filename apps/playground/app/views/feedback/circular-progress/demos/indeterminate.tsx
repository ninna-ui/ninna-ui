import { CircularProgress } from "@ninna-ui/feedback";

export default function Indeterminate() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Indeterminate</h4>
        <CircularProgress indeterminate color="primary" size="lg" />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Different Colors</h4>
        <div className="flex gap-4">
          <CircularProgress indeterminate color="success" />
          <CircularProgress indeterminate color="warning" />
          <CircularProgress indeterminate color="info" />
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Different Sizes</h4>
        <div className="flex items-center gap-4">
          <CircularProgress indeterminate color="primary" size="xs" />
          <CircularProgress indeterminate color="primary" size="sm" />
          <CircularProgress indeterminate color="primary" size="md" />
          <CircularProgress indeterminate color="primary" size="lg" />
        </div>
      </div>
    </div>
  );
}
