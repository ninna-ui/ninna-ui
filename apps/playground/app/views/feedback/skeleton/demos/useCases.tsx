import { Skeleton, SkeletonCircle, SkeletonText } from "@ninna-ui/feedback";
import { Heading } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Card Skeleton */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Card Skeleton</Heading>
        <div className="space-y-4">
          <Skeleton height="180px" radius="lg" />
          <SkeletonText noOfLines={2} />
          <div className="flex gap-2">
            <Skeleton width="80px" height="32px" radius="md" />
            <Skeleton width="80px" height="32px" radius="md" />
          </div>
        </div>
      </div>

      {/* Profile Skeleton */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Profile Skeleton</Heading>
        <div className="flex items-center gap-4">
          <SkeletonCircle size="64px" />
          <div className="flex-1">
            <Skeleton height="20px" width="150px" className="mb-2" />
            <Skeleton height="16px" width="100px" />
          </div>
        </div>
      </div>

      {/* Feed Skeleton */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Feed Skeleton</Heading>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-4">
              <SkeletonCircle size="40px" />
              <div className="flex-1">
                <Skeleton height="16px" width="120px" className="mb-2" />
                <SkeletonText noOfLines={2} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Table Skeleton</Heading>
        <div className="space-y-3">
          <div className="flex gap-4">
            <Skeleton height="16px" width="25%" />
            <Skeleton height="16px" width="35%" />
            <Skeleton height="16px" width="20%" />
            <Skeleton height="16px" width="20%" />
          </div>
          {[1, 2, 3, 4].map((row) => (
            <div key={row} className="flex gap-4">
              <Skeleton height="14px" width="25%" />
              <Skeleton height="14px" width="35%" />
              <Skeleton height="14px" width="20%" />
              <Skeleton height="14px" width="20%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
