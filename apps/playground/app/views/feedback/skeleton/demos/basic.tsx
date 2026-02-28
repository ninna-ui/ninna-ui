import { Skeleton } from "@ninna-ui/feedback";

export default function Basic() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Skeleton height="20px" />
      <Skeleton height="20px" width="80%" />
      <Skeleton height="20px" width="60%" />
    </div>
  );
}
