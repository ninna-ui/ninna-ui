import { Input } from "@ninna-ui/forms";

export default function CharacterCounter() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input
        placeholder="Max 50 characters"
        maxLength={50}
        showCounter
      />
      <Input
        placeholder="Max 100 characters"
        maxLength={100}
        showCounter
        defaultValue="This input shows a character counter"
      />
    </div>
  );
}
