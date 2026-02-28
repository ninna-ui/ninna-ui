import { Grid } from "@ninna-ui/layout";

export default function Rows() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">rows=2, columns=3</p>
        <Grid columns={3} rows={2} gap="2" className="h-48">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-3 bg-success/10 rounded text-center flex items-center justify-center">
              {i + 1}
            </div>
          ))}
        </Grid>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">rows=3, columns=2</p>
        <Grid columns={2} rows={3} gap="2" className="h-64">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-3 bg-success/10 rounded text-center flex items-center justify-center">
              {i + 1}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}
