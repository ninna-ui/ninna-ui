import { Stack } from "@ninna-ui/layout";

export default function Basic() {
  return (
    <Stack gap="4">
      <div className="p-4 bg-primary/10 rounded-lg text-center">
        Item 1
      </div>
      <div className="p-4 bg-primary/10 rounded-lg text-center">
        Item 2
      </div>
      <div className="p-4 bg-primary/10 rounded-lg text-center">
        Item 3
      </div>
    </Stack>
  );
}
