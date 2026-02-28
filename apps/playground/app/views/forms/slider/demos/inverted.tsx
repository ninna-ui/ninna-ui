import { Slider } from "@ninna-ui/forms";

export default function Inverted() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Normal</span>
        <Slider defaultValue={[30]} />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Inverted</span>
        <Slider defaultValue={[30]} inverted />
      </div>
    </div>
  );
}
