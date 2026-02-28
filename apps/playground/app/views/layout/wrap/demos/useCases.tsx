import { Wrap } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Tag Cloud */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Tag Cloud</p>
        <Wrap gap="2">
          {["React", "TypeScript", "Tailwind", "Node.js", "GraphQL", "Next.js", "Remix", "Vite"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {tag}
            </span>
          ))}
        </Wrap>
      </div>

      {/* Filter Chips */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Filter Chips</p>
        <Wrap gap="2">
          {["All", "Active", "Completed", "Pending", "Archived"].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                i === 0
                  ? "bg-primary text-primary-content"
                  : "bg-base-300 text-base-content/70 hover:bg-base-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </Wrap>
      </div>

      {/* Avatar Group */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Avatar Group</p>
        <Wrap gap="2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </Wrap>
      </div>
    </div>
  );
}
