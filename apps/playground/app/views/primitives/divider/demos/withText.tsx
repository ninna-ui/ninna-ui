import { Divider } from "@ninna-ui/primitives";

export default function WithText() {
  return (
    <div className="space-y-6 w-full">
      <Divider variant="with-text" text="OR" color="primary" weight="soft" />
      <Divider variant="with-text" text="Continue with" color="secondary" weight="soft" />
      <Divider variant="with-text" text="Section Break" color="info" weight="solid" />
      <Divider variant="with-text" text="End of Content" color="danger" weight="solid" />
    </div>
  );
}
