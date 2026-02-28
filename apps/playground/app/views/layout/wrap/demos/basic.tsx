import { Wrap } from "@ninna-ui/layout";

export default function Basic() {
  const tags = ["React", "TypeScript", "Tailwind", "Remix", "Vite", "Node.js", "pnpm"];
  
  return (
    <Wrap gap="2">
      {tags.map((tag) => (
        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {tag}
        </span>
      ))}
    </Wrap>
  );
}
