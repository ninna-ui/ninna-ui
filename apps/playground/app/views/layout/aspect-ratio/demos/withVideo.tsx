import { AspectRatio } from "@ninna-ui/layout";

export default function WithVideo() {
  return (
    <div className="max-w-2xl">
      <AspectRatio ratio="video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video embed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </AspectRatio>
    </div>
  );
}
