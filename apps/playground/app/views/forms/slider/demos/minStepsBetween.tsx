import { Slider } from "@ninna-ui/forms";

export default function MinStepsBetween() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Min 10 steps between thumbs</span>
        <Slider 
          defaultValue={[25, 75]} 
          minStepsBetweenThumbs={10}
          showValue
        />
      </div>
      <div>
        <span className="text-sm text-base-content/70 mb-2 block">Min 20 steps between thumbs</span>
        <Slider 
          defaultValue={[20, 80]} 
          minStepsBetweenThumbs={20}
          showValue
        />
      </div>
    </div>
  );
}
