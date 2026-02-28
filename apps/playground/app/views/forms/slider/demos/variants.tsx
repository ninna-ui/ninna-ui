import { Slider } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Default</p>
        <Slider defaultValue={[50]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With Label</p>
        <Slider defaultValue={[50]} label="Volume" showValue />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With Marks</p>
        <Slider 
          defaultValue={[50]} 
          marks={[
            { value: 0 },
            { value: 25 },
            { value: 50 },
            { value: 75 },
            { value: 100 },
          ]} 
        />
      </div>
    </div>
  );
}
