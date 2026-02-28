import { Slider } from "@ninna-ui/forms";

export default function Marks() {
  return (
    <div className="flex flex-col gap-8 w-80">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Boolean marks (auto)</span>
        <Slider defaultValue={[50]} marks />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Custom marks with labels</span>
        <Slider 
          defaultValue={[25]} 
          marks={[
            { value: 0, label: "0%" },
            { value: 25, label: "25%" },
            { value: 50, label: "50%" },
            { value: 75, label: "75%" },
            { value: 100, label: "100%" },
          ]} 
        />
      </div>
    </div>
  );
}
