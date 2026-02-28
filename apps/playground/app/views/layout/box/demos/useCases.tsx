import { Box, VStack, HStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Card */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Card Component</p>
        <Box className="max-w-sm p-6 bg-base-100 border border-base-300 rounded-lg shadow-sm">
          <VStack gap="3">
            <h3 className="text-lg font-semibold text-base-content">Card Title</h3>
            <p className="text-base-content/70">This is a card built with Box component.</p>
            <button className="px-4 py-2 bg-primary text-primary-content rounded-lg text-sm">Action</button>
          </VStack>
        </Box>
      </div>

      {/* Alert Box */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Alert Box</p>
        <Box className="p-4 bg-warning/10 border-l-4 border-warning rounded-r-lg">
          <HStack gap="3">
            <span className="text-warning text-xl">⚠️</span>
            <p className="text-warning">This is a warning message.</p>
          </HStack>
        </Box>
      </div>

      {/* Feature Box */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Feature Box</p>
        <Box className="p-6 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
          <VStack gap="2">
            <span className="text-3xl">🚀</span>
            <h4 className="text-lg font-bold">Feature Title</h4>
            <p className="text-primary-content text-sm">Feature description goes here.</p>
          </VStack>
        </Box>
      </div>
    </div>
  );
}
