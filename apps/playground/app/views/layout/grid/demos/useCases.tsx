import { Grid } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Card Grid */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Card Grid</p>
        <Grid columns={3} gap="4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 bg-base-100 border border-base-300 rounded-lg">
              <div className="w-full h-24 bg-linear-to-br from-emerald-400 to-teal-500 rounded mb-3" />
              <h4 className="font-semibold text-base-content">Card {i + 1}</h4>
              <p className="text-sm text-base-content/70">Description</p>
            </div>
          ))}
        </Grid>
      </div>

      {/* Dashboard Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Dashboard Layout</p>
        <Grid columns={4} gap="4">
          {["Users", "Revenue", "Orders", "Growth"].map((stat, i) => (
            <div key={stat} className="p-4 bg-base-100 border border-base-300 rounded-lg text-center">
              <p className="text-2xl font-bold text-success">{(i + 1) * 234}</p>
              <p className="text-sm text-base-content/70">{stat}</p>
            </div>
          ))}
        </Grid>
      </div>

      {/* Photo Gallery */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Photo Gallery</p>
        <Grid columns={4} gap="2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-linear-to-br from-pink-400 to-purple-500 rounded" />
          ))}
        </Grid>
      </div>
    </div>
  );
}
