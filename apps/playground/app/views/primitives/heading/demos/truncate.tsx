import { Heading } from "@ninna-ui/primitives";

export default function Truncate() {
  const longText = "This is a very long heading that will be truncated when it exceeds the container width to demonstrate the truncate functionality";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Single line truncate</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg">
          <Heading as="h3" truncate>{longText}</Heading>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Line clamp (2 lines)</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg">
          <Heading as="h3" size="lg" lineClamp={2}>{longText} {longText}</Heading>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">No wrap</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg overflow-x-auto">
          <Heading as="h3" noWrap>{longText}</Heading>
        </div>
      </div>
    </div>
  );
}
