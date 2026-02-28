import { Separator, VStack, HStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Menu Separator */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Menu Separator</p>
        <div className="max-w-xs bg-base-100 border border-base-300 rounded-lg shadow-lg">
          <VStack gap="0">
            <button className="w-full px-4 py-2 text-left hover:bg-base-200 text-base-content/70">Profile</button>
            <button className="w-full px-4 py-2 text-left hover:bg-base-200 text-base-content/70">Settings</button>
            <Separator className="my-1" />
            <button className="w-full px-4 py-2 text-left hover:bg-base-200 text-danger">Logout</button>
          </VStack>
        </div>
      </div>

      {/* Navigation Separator */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Navigation Separator</p>
        <HStack gap="4" align="center">
          <a href="/home" className="text-base-content/70 hover:text-primary">Home</a>
          <Separator orientation="vertical" className="h-4" />
          <a href="/products" className="text-base-content/70 hover:text-primary">Products</a>
          <Separator orientation="vertical" className="h-4" />
          <a href="/about" className="text-base-content/70 hover:text-primary">About</a>
          <Separator orientation="vertical" className="h-4" />
          <a href="/contact" className="text-base-content/70 hover:text-primary">Contact</a>
        </HStack>
      </div>

      {/* Form Section Separator */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Form Section Separator</p>
        <div className="max-w-md p-4 bg-base-100 border border-base-300 rounded-lg">
          <VStack gap="4">
            <div>
              <label htmlFor="separator-name" className="block text-sm font-medium text-base-content/70 mb-1">Name</label>
              <input id="separator-name" type="text" className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-100" />
            </div>
            <Separator />
            <div>
              <label htmlFor="separator-email" className="block text-sm font-medium text-base-content/70 mb-1">Email</label>
              <input id="separator-email" type="email" className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-100" />
            </div>
          </VStack>
        </div>
      </div>
    </div>
  );
}
