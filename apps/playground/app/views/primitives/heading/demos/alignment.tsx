import { Heading } from "@ninna-ui/primitives";

export default function Alignment() {
  return (
    <div className="space-y-4">
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h3" align="left">Left aligned heading</Heading>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h3" align="center">Center aligned heading</Heading>
      </div>
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h3" align="right">Right aligned heading</Heading>
      </div>
    </div>
  );
}
