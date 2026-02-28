import { Divider } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="space-y-6 w-full">
      <Divider variant="with-text" text="Neutral" color="neutral" />
      <Divider variant="with-text" text="Primary" color="primary" />
      <Divider variant="with-text" text="Secondary" color="secondary" />
      <Divider variant="with-text" text="Accent" color="accent" />
      <Divider variant="with-text" text="Info" color="info" />
      <Divider variant="with-text" text="Success" color="success" />
      <Divider variant="with-text" text="Warning" color="warning" />
      <Divider variant="with-text" text="Danger" color="danger" />
    </div>
  );
}
