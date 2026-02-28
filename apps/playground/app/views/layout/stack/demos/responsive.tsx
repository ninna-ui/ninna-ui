import { Stack } from "@ninna-ui/layout";

export default function Responsive() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-base-content/70">
        Stack can be combined with responsive classes for adaptive layouts
      </p>
      <Stack 
        direction="column" 
        gap="4" 
        className="md:flex-row"
      >
        <div className="p-4 bg-primary/10 rounded-lg flex-1 text-center">
          Item 1
        </div>
        <div className="p-4 bg-primary/10 rounded-lg flex-1 text-center">
          Item 2
        </div>
        <div className="p-4 bg-primary/10 rounded-lg flex-1 text-center">
          Item 3
        </div>
      </Stack>
    </div>
  );
}
