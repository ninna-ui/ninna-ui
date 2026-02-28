import { Kbd } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Kbd color="neutral">neutral</Kbd>
      <Kbd color="primary">primary</Kbd>
      <Kbd color="secondary">secondary</Kbd>
      <Kbd color="accent">accent</Kbd>
      <Kbd color="info">info</Kbd>
      <Kbd color="success">success</Kbd>
      <Kbd color="warning">warning</Kbd>
      <Kbd color="danger">danger</Kbd>
    </div>
  );
}
