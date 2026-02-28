import { HStack, VStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Card Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Card Layout</p>
        <VStack gap="4" className="p-4 border border-base-300 rounded-lg max-w-sm">
          <div className="w-full h-32 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <VStack gap="2" className="w-full">
            <h3 className="font-semibold text-base-content">Card Title</h3>
            <p className="text-sm text-base-content/70">
              This is a card description using Stack for layout.
            </p>
          </VStack>
          <HStack gap="2" className="w-full">
            <button className="px-4 py-2 bg-primary text-primary-content rounded-lg text-sm">Action</button>
            <button className="px-4 py-2 border border-base-300 rounded-lg text-sm">Cancel</button>
          </HStack>
        </VStack>
      </div>
      
      {/* Navigation */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Navigation Bar</p>
        <HStack justify="between" align="center" className="p-4 bg-base-200 rounded-lg">
          <span className="font-bold text-primary">Logo</span>
          <HStack gap="4">
            <a href="/home" className="text-base-content/70 hover:text-primary">Home</a>
            <a href="/about" className="text-base-content/70 hover:text-primary">About</a>
            <a href="/contact" className="text-base-content/70 hover:text-primary">Contact</a>
          </HStack>
          <button className="px-4 py-2 bg-primary text-primary-content rounded-lg text-sm">Sign In</button>
        </HStack>
      </div>
      
      {/* Form Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Form Layout</p>
        <VStack gap="4" className="max-w-sm">
          <VStack gap="1" className="w-full">
            <label htmlFor="stack-email" className="text-sm font-medium text-base-content/70">Email</label>
            <input 
              id="stack-email"
              type="email" 
              className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-100"
              placeholder="you@example.com"
            />
          </VStack>
          <VStack gap="1" className="w-full">
            <label htmlFor="stack-password" className="text-sm font-medium text-base-content/70">Password</label>
            <input 
              id="stack-password"
              type="password" 
              className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-100"
              placeholder="••••••••"
            />
          </VStack>
          <button className="w-full px-4 py-2 bg-primary text-primary-content rounded-lg">Submit</button>
        </VStack>
      </div>
    </div>
  );
}
