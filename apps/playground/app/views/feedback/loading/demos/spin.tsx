import { Loading } from "@ninna-ui/feedback";

export default function Spin() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Loading variant="spin" color="neutral" />
      <Loading variant="spin" color="primary" />
      <Loading variant="spin" color="secondary" />
      <Loading variant="spin" color="accent" />
      <Loading variant="spin" color="info" />
      <Loading variant="spin" color="success" />
      <Loading variant="spin" color="warning" />
      <Loading variant="spin" color="danger" />
    </div>
  );
}
