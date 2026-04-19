import { Grid, Box } from "@ninna-ui/layout";

export default function Align() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-base-content/70 mb-3">align="start"</p>
        <Grid columns={3} gap="4" align="start" className="h-40 bg-base-200/50 p-4 rounded-lg">
          <Box className="bg-primary/20 p-4 h-12 rounded">Item 1</Box>
          <Box className="bg-secondary/20 p-4 h-24 rounded">Item 2</Box>
          <Box className="bg-accent/20 p-4 h-16 rounded">Item 3</Box>
        </Grid>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">align="center"</p>
        <Grid columns={3} gap="4" align="center" className="h-40 bg-base-200/50 p-4 rounded-lg">
          <Box className="bg-primary/20 p-4 h-12 rounded">Item 1</Box>
          <Box className="bg-secondary/20 p-4 h-24 rounded">Item 2</Box>
          <Box className="bg-accent/20 p-4 h-16 rounded">Item 3</Box>
        </Grid>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-3">align="stretch" (default grid behavior without fixed heights)</p>
        <Grid columns={3} gap="4" align="stretch" className="h-40 bg-base-200/50 p-4 rounded-lg">
          <Box className="bg-primary/20 p-4 rounded">Stretched</Box>
          <Box className="bg-secondary/20 p-4 rounded">Stretched</Box>
          <Box className="bg-accent/20 p-4 rounded">Stretched</Box>
        </Grid>
      </div>
    </div>
  );
}
