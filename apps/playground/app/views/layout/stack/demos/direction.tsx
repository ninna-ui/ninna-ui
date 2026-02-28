import { Stack, HStack, VStack } from "@ninna-ui/layout";

export default function Direction() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Column (default)</p>
        <Stack direction="column" gap="2">
          <div className="p-3 bg-info/10 rounded">1</div>
          <div className="p-3 bg-info/10 rounded">2</div>
          <div className="p-3 bg-info/10 rounded">3</div>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">Row</p>
        <Stack direction="row" gap="2">
          <div className="p-3 bg-success/10 rounded">1</div>
          <div className="p-3 bg-success/10 rounded">2</div>
          <div className="p-3 bg-success/10 rounded">3</div>
        </Stack>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">HStack (shorthand for row)</p>
        <HStack gap="2">
          <div className="p-3 bg-secondary/10 rounded">A</div>
          <div className="p-3 bg-secondary/10 rounded">B</div>
          <div className="p-3 bg-secondary/10 rounded">C</div>
        </HStack>
      </div>
      
      <div>
        <p className="text-sm text-base-content/70 mb-2">VStack (shorthand for column)</p>
        <VStack gap="2">
          <div className="p-3 bg-warning/10 rounded">X</div>
          <div className="p-3 bg-warning/10 rounded">Y</div>
          <div className="p-3 bg-warning/10 rounded">Z</div>
        </VStack>
      </div>
    </div>
  );
}
