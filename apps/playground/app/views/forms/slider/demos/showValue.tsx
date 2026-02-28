import { Slider } from "@ninna-ui/forms";

export default function ShowValue() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <Slider 
        defaultValue={[50]} 
        showValue 
        label="Volume"
      />
      <Slider 
        defaultValue={[25, 75]} 
        showValue 
        label="Price Range"
        formatValue={(v) => `$${v}`}
      />
      <Slider 
        defaultValue={[60]} 
        showValue 
        label="Brightness"
        formatValue={(v) => `${v}%`}
      />
    </div>
  );
}
