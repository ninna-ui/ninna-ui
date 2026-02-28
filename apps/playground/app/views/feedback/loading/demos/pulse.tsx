import { Loading } from "@ninna-ui/feedback";

export default function Pulse() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Loading variant="pulse" color="neutral" />
      <Loading variant="pulse" color="primary" />
      <Loading variant="pulse" color="secondary" />
      <Loading variant="pulse" color="accent" />
      <Loading variant="pulse" color="info" />
      <Loading variant="pulse" color="success" />
      <Loading variant="pulse" color="warning" />
      <Loading variant="pulse" color="danger" />
    </div>
  );
}
