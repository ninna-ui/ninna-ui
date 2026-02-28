import { Textarea } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Textarea color="neutral" placeholder="Neutral" rows={2} />
      <Textarea color="primary" placeholder="Primary" rows={2} />
      <Textarea color="secondary" placeholder="Secondary" rows={2} />
      <Textarea color="accent" placeholder="Accent" rows={2} />
      <Textarea color="info" placeholder="Info" rows={2} />
      <Textarea color="success" placeholder="Success" rows={2} />
      <Textarea color="warning" placeholder="Warning" rows={2} />
      <Textarea color="danger" placeholder="Danger" rows={2} />
    </div>
  );
}
