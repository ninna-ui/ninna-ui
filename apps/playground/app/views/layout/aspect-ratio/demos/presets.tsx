import { AspectRatio } from "@ninna-ui/layout";

export default function Presets() {
  const presets = [
    { name: "square", label: "1:1" },
    { name: "video", label: "16:9" },
    { name: "portrait", label: "3:4" },
    { name: "wide", label: "21:9" },
  ] as const;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {presets.map(({ name, label }) => (
        <div key={name}>
          <p className="text-sm text-base-content/70 mb-2">{name} ({label})</p>
          <AspectRatio ratio={name} className="bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg">
            <div className="flex items-center justify-center h-full text-white font-bold">
              {label}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
