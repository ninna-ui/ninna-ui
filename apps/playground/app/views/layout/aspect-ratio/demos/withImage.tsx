import { AspectRatio } from "@ninna-ui/layout";

export default function WithImage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Video (16:9)</p>
        <AspectRatio ratio="video">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
            alt="Mountain landscape"
            className="w-full h-full object-cover rounded-lg"
          />
        </AspectRatio>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Square (1:1)</p>
        <AspectRatio ratio="square">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=400&fit=crop"
            alt="Nature"
            className="w-full h-full object-cover rounded-lg"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
