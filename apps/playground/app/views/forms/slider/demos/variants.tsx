import { Slider } from "@ninna-ui/forms";

export default function Variants() {
  return (
    <div className="flex flex-col gap-6 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Solid (Default)</p>
        <Slider variant="solid" defaultValue={[50]} color="primary" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Soft</p>
        <Slider variant="soft" defaultValue={[70]} color="primary" />
      </div>
    </div>
  );
}
