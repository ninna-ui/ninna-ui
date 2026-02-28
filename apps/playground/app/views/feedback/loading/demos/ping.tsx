import { Loading } from "@ninna-ui/feedback";

export default function Ping() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Loading variant="ping" color="neutral" />
      <Loading variant="ping" color="primary" />
      <Loading variant="ping" color="secondary" />
      <Loading variant="ping" color="accent" />
      <Loading variant="ping" color="info" />
      <Loading variant="ping" color="success" />
      <Loading variant="ping" color="warning" />
      <Loading variant="ping" color="danger" />
    </div>
  );
}
