import { AspectRatio } from "@ninna-ui/layout";

export default function CustomRatio() {
  const ratios = [
    { ratio: 1, label: "1:1" },
    { ratio: 4/3, label: "4:3" },
    { ratio: 16/9, label: "16:9" },
    { ratio: 2.35, label: "2.35:1 (Cinemascope)" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {ratios.map(({ ratio, label }) => (
        <div key={label}>
          <p className="text-sm text-base-content/70 mb-2">{label}</p>
          <AspectRatio ratio={ratio} className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg">
            <div className="flex items-center justify-center h-full text-white font-bold text-sm">
              {label}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
