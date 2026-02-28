import { CircularProgress } from "@ninna-ui/feedback";

export default function Basic() {
  return (
    <div className="flex items-center gap-8">
      <CircularProgress value={25} />
      <CircularProgress value={50} />
      <CircularProgress value={75} />
      <CircularProgress value={100} />
    </div>
  );
}
