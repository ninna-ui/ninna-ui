import { Status } from "@ninna-ui/feedback";

export default function Basic() {
  return (
    <div className="flex items-center gap-6">
      <Status value="success" />
      <Status value="danger" />
      <Status value="warning" />
      <Status value="info" />
    </div>
  );
}
