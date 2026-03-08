import { Loading } from "@ninna-ui/feedback";

export default function Dots() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Loading variant="dots" color="neutral" />
      <Loading variant="dots" color="primary" />
      <Loading variant="dots" color="secondary" />
      <Loading variant="dots" color="accent" />
      <Loading variant="dots" color="info" />
      <Loading variant="dots" color="success" />
      <Loading variant="dots" color="warning" />
      <Loading variant="dots" color="danger" />
    </div>
  );
}
