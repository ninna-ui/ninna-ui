import { RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup color="neutral" defaultValue="a">
        <RadioGroupItem value="a" label="Neutral" />
      </RadioGroup>
      <RadioGroup color="primary" defaultValue="a">
        <RadioGroupItem value="a" label="Primary" />
      </RadioGroup>
      <RadioGroup color="secondary" defaultValue="a">
        <RadioGroupItem value="a" label="Secondary" />
      </RadioGroup>
      <RadioGroup color="accent" defaultValue="a">
        <RadioGroupItem value="a" label="Accent" />
      </RadioGroup>
      <RadioGroup color="info" defaultValue="a">
        <RadioGroupItem value="a" label="Info" />
      </RadioGroup>
      <RadioGroup color="success" defaultValue="a">
        <RadioGroupItem value="a" label="Success" />
      </RadioGroup>
      <RadioGroup color="warning" defaultValue="a">
        <RadioGroupItem value="a" label="Warning" />
      </RadioGroup>
      <RadioGroup color="danger" defaultValue="a">
        <RadioGroupItem value="a" label="Danger" />
      </RadioGroup>
    </div>
  );
}
