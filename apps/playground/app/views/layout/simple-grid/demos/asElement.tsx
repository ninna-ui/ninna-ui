import { SimpleGrid } from "@ninna-ui/layout";

export default function AsElement() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-base-content/70">
        SimpleGrid can be rendered as a semantic list using the <code>as</code> prop.
      </p>
      <SimpleGrid as="ul" columns={3} gap="4" className="list-none p-0 m-0">
        <li className="p-4 bg-primary/10 text-primary rounded-md flex items-center justify-center">
          Item 1
        </li>
        <li className="p-4 bg-primary/10 text-primary rounded-md flex items-center justify-center">
          Item 2
        </li>
        <li className="p-4 bg-primary/10 text-primary rounded-md flex items-center justify-center">
          Item 3
        </li>
      </SimpleGrid>
    </div>
  );
}
