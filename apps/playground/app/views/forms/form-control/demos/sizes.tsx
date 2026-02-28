import { FormControl, FormLabel, FormMessage, Input } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <FormControl>
        <FormLabel>Small</FormLabel>
        <Input size="sm" placeholder="Small input" />
        <FormMessage type="hint">Small size input</FormMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Medium</FormLabel>
        <Input size="md" placeholder="Medium input" />
        <FormMessage type="hint">Medium size input</FormMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Large</FormLabel>
        <Input size="lg" placeholder="Large input" />
        <FormMessage type="hint">Large size input</FormMessage>
      </FormControl>
    </div>
  );
}
