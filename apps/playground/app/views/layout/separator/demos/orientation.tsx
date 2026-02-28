import { Separator, VStack, HStack } from "@ninna-ui/layout";

export default function Orientation() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">orientation="horizontal" (default)</p>
        <VStack gap="4" className="max-w-md">
          <p className="text-base-content/70">Content above</p>
          <Separator orientation="horizontal" />
          <p className="text-base-content/70">Content below</p>
        </VStack>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">orientation="vertical"</p>
        <HStack gap="4" className="h-16" align="center">
          <span className="text-base-content/70">Left</span>
          <Separator orientation="vertical" />
          <span className="text-base-content/70">Center</span>
          <Separator orientation="vertical" />
          <span className="text-base-content/70">Right</span>
        </HStack>
      </div>
    </div>
  );
}
