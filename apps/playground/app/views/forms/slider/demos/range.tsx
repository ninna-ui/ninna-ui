import { Slider } from "@ninna-ui/forms";

export default function Range() {
  return (
    <div className="w-64">
      <Slider label="Price Range" defaultValue={[25, 75]} showValue />
    </div>
  );
}
