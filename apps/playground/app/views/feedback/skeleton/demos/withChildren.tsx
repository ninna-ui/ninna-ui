import { useState } from "react";
import { Skeleton, SkeletonText } from "@ninna-ui/feedback";
import { Button, Text } from "@ninna-ui/primitives";

export default function WithChildren() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-4 w-full max-w-md">
      <Button onClick={() => setIsLoading(!isLoading)} size="sm">
        {isLoading ? "Show Content" : "Show Skeleton"}
      </Button>
      
      <div className="p-4 border border-base-300 rounded-lg">
        <Skeleton loading={isLoading} height="200px" radius="lg">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            alt="Mountain landscape"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </Skeleton>
        
        <div className="mt-4">
          <SkeletonText loading={isLoading} noOfLines={2}>
            <Text weight="semibold">Beautiful Mountain Landscape</Text>
            <Text size="sm" className="mt-1 text-base-content/70">
              A stunning view of snow-capped mountains at sunrise.
            </Text>
          </SkeletonText>
        </div>
      </div>
    </div>
  );
}
