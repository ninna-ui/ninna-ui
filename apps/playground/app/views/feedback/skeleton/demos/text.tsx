import { SkeletonText } from "@ninna-ui/feedback";

export default function TextDemo() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <SkeletonText noOfLines={2} />
      <SkeletonText noOfLines={3} />
      <SkeletonText noOfLines={4} gap="12px" />
    </div>
  );
}
