import { Status } from "@ninna-ui/feedback";

export default function WithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <Status value="success">Completed</Status>
      <Status value="danger">Failed</Status>
      <Status value="warning">Pending</Status>
      <Status value="info">Processing</Status>
    </div>
  );
}
