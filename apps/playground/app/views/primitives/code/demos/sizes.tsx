import { Code } from "@ninna-ui/primitives";

export default function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Code size="xs">xs size</Code>
      <Code size="sm">sm size</Code>
      <Code size="base">base size</Code>
      <Code size="lg">lg size</Code>
      <Code size="xl">xl size</Code>
    </div>
  );
}
