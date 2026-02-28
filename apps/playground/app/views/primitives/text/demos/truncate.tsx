import { Text } from "@ninna-ui/primitives";

export default function Truncate() {
  const longText = "This is a very long text that will be truncated when it exceeds the container width. The truncate prop adds an ellipsis at the end to indicate that there is more content.";

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Single line truncate</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg">
          <Text truncate>{longText}</Text>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Line clamp (2 lines)</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg">
          <Text lineClamp={2}>{longText} {longText}</Text>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Line clamp (3 lines)</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg">
          <Text lineClamp={3}>{longText} {longText}</Text>
        </div>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">No wrap</p>
        <div className="max-w-md p-4 border border-base-300 rounded-lg overflow-x-auto">
          <Text noWrap>{longText}</Text>
        </div>
      </div>
    </div>
  );
}
