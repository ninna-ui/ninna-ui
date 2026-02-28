import { Box } from "@ninna-ui/layout";

export default function Styling() {
  return (
    <div className="space-y-4">
      <Box className="p-4 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-lg">
        Gradient background
      </Box>
      <Box className="p-4 border-2 border-dashed border-primary rounded-lg">
        Dashed border
      </Box>
      <Box className="p-4 bg-base-100 shadow-lg rounded-lg">
        With shadow
      </Box>
      <Box className="p-4 bg-primary/10 rounded-full text-center">
        Rounded full
      </Box>
    </div>
  );
}
