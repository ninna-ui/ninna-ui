import { Separator, VStack, HStack  } from "@ninna-ui/layout";


export default function Basic() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Horizontal</p>
        <VStack gap="4">
          <p className="text-base-content/70">Content above</p>
          <Separator />
          <p className="text-base-content/70">Content below</p>
        </VStack>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">Vertical</p>
        <HStack gap="4" className="h-16" align="center">
          <span className="text-base-content/70">Left</span>
          <Separator orientation="vertical" />
          <span className="text-base-content/70">Right</span>
        </HStack>
      </div>
    </div>
  );
}
