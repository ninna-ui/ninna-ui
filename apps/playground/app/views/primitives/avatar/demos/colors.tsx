import { Avatar } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="NE" color="neutral" />
      <Avatar name="PR" color="primary" />
      <Avatar name="SE" color="secondary" />
      <Avatar name="AC" color="accent" />
      <Avatar name="IN" color="info" />
      <Avatar name="SU" color="success" />
      <Avatar name="WA" color="warning" />
      <Avatar name="DA" color="danger" />
    </div>
  );
}
