import { Grid } from "@ninna-ui/layout";

export default function Basic() {
  return (
    <Grid columns={3} gap="4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-4 bg-success/10 rounded-lg text-center">
          {i + 1}
        </div>
      ))}
    </Grid>
  );
}
