import { Grid } from "@ninna-ui/layout";

export default function Flow() {
  const flows = ["row", "column", "dense"] as const;

  return (
    <div className="space-y-6">
      {flows.map((flow) => (
        <div key={flow}>
          <p className="text-sm text-base-content/70 mb-2">flow="{flow}"</p>
          <Grid columns={3} flow={flow} gap="2" className={flow === "column" ? "h-48" : ""}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-3 bg-success/10 rounded text-center text-sm">
                {i + 1}
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
