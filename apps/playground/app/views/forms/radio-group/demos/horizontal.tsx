import { RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function Horizontal() {
  return (
    <RadioGroup orientation="horizontal" defaultValue="option1">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  );
}
