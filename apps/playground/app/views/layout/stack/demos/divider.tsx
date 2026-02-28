import { VStack, Separator } from "@ninna-ui/layout";

export default function Divider() {
  return (
    <VStack gap="4" className="max-w-sm">
      <div className="p-4 bg-primary/10 rounded-lg w-full text-center">
        Section 1
      </div>
      <Separator />
      <div className="p-4 bg-primary/10 rounded-lg w-full text-center">
        Section 2
      </div>
      <Separator />
      <div className="p-4 bg-primary/10 rounded-lg w-full text-center">
        Section 3
      </div>
    </VStack>
  );
}
