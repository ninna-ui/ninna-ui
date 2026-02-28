import { Status } from "@ninna-ui/feedback";

export default function Sizes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <Status value="success" size="sm">Small</Status>
        <Status value="success" size="md">Medium</Status>
        <Status value="success" size="lg">Large</Status>
      </div>
      <div className="flex items-center gap-6">
        <Status value="danger" size="sm">Small</Status>
        <Status value="danger" size="md">Medium</Status>
        <Status value="danger" size="lg">Large</Status>
      </div>
    </div>
  );
}
