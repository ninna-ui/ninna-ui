import { Skeleton } from "@ninna-ui/feedback";
import { Text } from "@ninna-ui/primitives";

export default function Variants() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Text size="sm" weight="medium">Pulse (default)</Text>
        <Skeleton variant="pulse" height="40px" />
      </div>
      <div className="space-y-2">
        <Text size="sm" weight="medium">Shine</Text>
        <Skeleton variant="shine" height="40px" />
      </div>
      <div className="space-y-2">
        <Text size="sm" weight="medium">None</Text>
        <Skeleton variant="none" height="40px" />
      </div>
    </div>
  );
}
