import { Progress } from "@ninna-ui/feedback";

export default function Indeterminate() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Indeterminate Loading</h4>
        <Progress indeterminate color="primary" />
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Different Colors</h4>
        <div className="flex flex-col gap-3">
          <Progress indeterminate color="success" />
          <Progress indeterminate color="warning" />
          <Progress indeterminate color="info" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Different Sizes</h4>
        <div className="flex flex-col gap-3">
          <Progress indeterminate color="primary" size="xs" />
          <Progress indeterminate color="primary" size="sm" />
          <Progress indeterminate color="primary" size="md" />
          <Progress indeterminate color="primary" size="lg" />
        </div>
      </div>
    </div>
  );
}
