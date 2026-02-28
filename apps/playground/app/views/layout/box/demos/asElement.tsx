import { Box } from "@ninna-ui/layout";

export default function AsElement() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Default div</p>
        <Box className="p-4 bg-primary/10 rounded-lg">
          Default div element
        </Box>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With custom className</p>
        <Box className="p-4 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-lg">
          Styled with gradient
        </Box>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With border</p>
        <Box className="p-4 border-2 border-primary rounded-lg">
          Bordered box
        </Box>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">With shadow</p>
        <Box className="p-4 bg-base-100 shadow-lg rounded-lg">
          Shadowed box
        </Box>
      </div>
    </div>
  );
}
