import { Loading } from "@ninna-ui/feedback";

export default function Dots() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Loading variant="dots" color="neutral" size="xs" />
      <Loading variant="dots" color="primary" size="sm" />
      <Loading variant="dots" color="secondary" size="md" />
      <Loading variant="dots" color="accent" size="lg" />
      <Loading variant="dots" color="info" size="xl" />
      <Loading variant="dots" color="success" size="2xl" />
      <Loading variant="dots" color="warning" size="3xl" />
      <Loading variant="dots" color="danger" size="3xl" />
    </div>
  );
}
