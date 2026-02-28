import { Center, VStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Loading State */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Loading State</p>
        <Center className="h-48 bg-base-200 rounded-lg">
          <VStack gap="3" align="center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
            <p className="text-base-content/70">Loading...</p>
          </VStack>
        </Center>
      </div>

      {/* Empty State */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Empty State</p>
        <Center className="h-48 bg-base-200 rounded-lg">
          <VStack gap="3" align="center">
            <span className="text-4xl">📭</span>
            <p className="text-base-content/70">No items found</p>
          </VStack>
        </Center>
      </div>

      {/* Icon Button */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Icon Button</p>
        <Center inline className="h-12 w-12 bg-primary hover:bg-primary/90 rounded-full cursor-pointer transition-colors">
          <span className="text-primary-content text-xl">+</span>
        </Center>
      </div>

      {/* Hero Section */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Hero Section</p>
        <Center className="h-64 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg">
          <VStack gap="4" align="center" className="text-white text-center px-4">
            <h2 className="text-3xl font-bold">Welcome</h2>
            <p className="text-primary-content">Centered hero content</p>
            <button className="px-6 py-2 bg-white text-primary rounded-lg font-medium">
              Get Started
            </button>
          </VStack>
        </Center>
      </div>
    </div>
  );
}
