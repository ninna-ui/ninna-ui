import { CircularProgress } from "@ninna-ui/feedback";

export default function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <CircularProgress value={60} color="neutral" />
      <CircularProgress value={60} color="primary" />
      <CircularProgress value={60} color="secondary" />
      <CircularProgress value={60} color="accent" />
      <CircularProgress value={60} color="info" />
      <CircularProgress value={60} color="success" />
      <CircularProgress value={60} color="warning" />
      <CircularProgress value={60} color="danger" />
    </div>
  );
}
