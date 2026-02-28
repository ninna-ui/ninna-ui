import { Code } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Code color="neutral">neutral</Code>
      <Code color="primary">primary</Code>
      <Code color="secondary">secondary</Code>
      <Code color="accent">accent</Code>
      <Code color="info">info</Code>
      <Code color="success">success</Code>
      <Code color="warning">warning</Code>
      <Code color="danger">danger</Code>
    </div>
  );
}
