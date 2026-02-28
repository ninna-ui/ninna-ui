import { SkeletonCircle } from "@ninna-ui/feedback";

export default function Circle() {
  return (
    <div className="flex items-center gap-4">
      <SkeletonCircle size="32px" />
      <SkeletonCircle size="40px" />
      <SkeletonCircle size="48px" />
      <SkeletonCircle size="64px" />
    </div>
  );
}
