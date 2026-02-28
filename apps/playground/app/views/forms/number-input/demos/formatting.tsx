import { NumberInput } from "@ninna-ui/forms";

export default function Formatting() {
  return (
    <div className="flex flex-col gap-4 w-48">
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Precision: 2 decimals</span>
        <NumberInput precision={2} defaultValue={99.99} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Currency format</span>
        <NumberInput 
          defaultValue={1000} 
          format={(v) => `$${v.toLocaleString()}`}
          parse={(v) => parseFloat(v.replace(/[$,]/g, ""))}
        />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-1 block">Percentage format</span>
        <NumberInput 
          defaultValue={50} 
          min={0}
          max={100}
          format={(v) => `${v}%`}
          parse={(v) => parseFloat(v.replace(/%/g, ""))}
        />
      </div>
    </div>
  );
}
