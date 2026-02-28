import { Flex } from "@ninna-ui/layout";

export default function Basic() {
  return (
    <Flex gap="4">
      <div className="p-4 bg-info/10 rounded-lg">Item 1</div>
      <div className="p-4 bg-info/10 rounded-lg">Item 2</div>
      <div className="p-4 bg-info/10 rounded-lg">Item 3</div>
    </Flex>
  );
}
