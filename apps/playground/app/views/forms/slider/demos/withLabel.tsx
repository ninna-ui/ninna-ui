import { Slider } from "@ninna-ui/forms";

export default function WithLabel() {
  return (
    <div className="w-64">
      <Slider label="Volume" defaultValue={[75]} showValue />
    </div>
  );
}
