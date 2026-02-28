import { Mark } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Mark color="neutral">neutral</Mark>
      <Mark color="primary">primary</Mark>
      <Mark color="secondary">secondary</Mark>
      <Mark color="accent">accent</Mark>
      <Mark color="info">info</Mark>
      <Mark color="success">success</Mark>
      <Mark color="warning">warning</Mark>
      <Mark color="danger">danger</Mark>
    </div>
  );
}
