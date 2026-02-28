import { Slider } from "@ninna-ui/forms";

export default function Basic() {
  return (
    <div className="w-64">
      <Slider defaultValue={[50]} />
    </div>
  );
}
