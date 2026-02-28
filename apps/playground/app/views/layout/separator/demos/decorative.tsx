import { Separator, VStack } from "@ninna-ui/layout";

export default function Decorative() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">decorative=true (default)</p>
        <VStack gap="4" className="max-w-md p-4 bg-base-200 rounded-lg">
          <p className="text-base-content/70">This separator is purely visual</p>
          <Separator decorative={true} />
          <p className="text-base-content/70">Screen readers will ignore it</p>
        </VStack>
        <p className="text-xs text-base-content/70 mt-1">role="none" - ignored by screen readers</p>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">decorative=false</p>
        <VStack gap="4" className="max-w-md p-4 bg-base-200 rounded-lg">
          <p className="text-base-content/70">This separator has semantic meaning</p>
          <Separator decorative={false} />
          <p className="text-base-content/70">Screen readers will announce it</p>
        </VStack>
        <p className="text-xs text-base-content/70 mt-1">role="separator" - announced by screen readers</p>
      </div>
    </div>
  );
}
