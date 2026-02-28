import { RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Outline (default)</span>
        <RadioGroup variant="outline" defaultValue="a" orientation="horizontal">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Soft</span>
        <RadioGroup variant="soft" defaultValue="a" orientation="horizontal">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Solid</span>
        <RadioGroup variant="solid" defaultValue="a" orientation="horizontal">
          <RadioGroupItem value="a" label="Option A" />
          <RadioGroupItem value="b" label="Option B" />
        </RadioGroup>
      </div>
    </div>
  );
}
