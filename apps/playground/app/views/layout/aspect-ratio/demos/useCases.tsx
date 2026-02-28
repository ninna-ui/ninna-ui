import { AspectRatio, VStack, HStack  } from "@ninna-ui/layout";


export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Card with Image */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Card with Image</p>
        <div className="max-w-sm border border-base-300 rounded-lg overflow-hidden">
          <AspectRatio ratio="video">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
              alt="Mountain landscape at sunset"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <VStack gap="2" className="p-4">
            <h3 className="font-semibold text-base-content">Card Title</h3>
            <p className="text-sm text-base-content/70">Card description goes here.</p>
          </VStack>
        </div>
      </div>

      {/* Avatar Grid */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Avatar Grid</p>
        <HStack gap="4">
          {['A', 'B', 'C', 'D'].map((letter) => (
            <div key={letter} className="w-16">
              <AspectRatio ratio="square">
                <div className="w-full h-full bg-linear-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                  {letter}
                </div>
              </AspectRatio>
            </div>
          ))}
        </HStack>
      </div>

      {/* Map Container */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Map Container</p>
        <div className="max-w-lg">
          <AspectRatio ratio={16/9}>
            <div className="w-full h-full bg-base-300 rounded-lg flex items-center justify-center">
              <span className="text-base-content/70">Map Placeholder</span>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
