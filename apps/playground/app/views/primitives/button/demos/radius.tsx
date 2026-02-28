import { Button } from "@ninna-ui/primitives";

export default function Radius() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button radius="none" color="primary">None</Button> 
      <Button radius="sm" color="primary">SM</Button> 
      <Button radius="md" color="primary">MD</Button> 
      <Button radius="lg" color="primary">LG</Button> 
      <Button radius="xl" color="primary">XL</Button> 
      <Button radius="full" color="primary">Full (Pill)</Button> 
    </div>
  );
}
