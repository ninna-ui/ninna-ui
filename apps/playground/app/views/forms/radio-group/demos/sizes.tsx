import { RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <RadioGroup size="sm" defaultValue="a">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <RadioGroup size="md" defaultValue="a">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <RadioGroup size="lg" defaultValue="a">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
    </div>
  );
}
