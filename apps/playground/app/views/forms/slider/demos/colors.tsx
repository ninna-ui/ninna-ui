import { Slider } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-6 w-64">
      <Slider color="neutral" defaultValue={[50]} />
      <Slider color="primary" defaultValue={[50]} />
      <Slider color="secondary" defaultValue={[50]} />
      <Slider color="accent" defaultValue={[50]} />
      <Slider color="info" defaultValue={[50]} />
      <Slider color="success" defaultValue={[50]} />
      <Slider color="warning" defaultValue={[50]} />
      <Slider color="danger" defaultValue={[50]} />
    </div>
  );
}
