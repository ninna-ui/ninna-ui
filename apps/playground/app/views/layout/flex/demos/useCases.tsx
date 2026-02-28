import { Flex } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Header Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Header Layout</p>
        <Flex justify="between" align="center" className="p-4 bg-base-100 border border-base-300 rounded-lg">
          <span className="font-bold text-base-content">Logo</span>
          <Flex gap="4">
            <a href="/home" className="text-base-content/70 hover:text-info">Home</a>
            <a href="/about" className="text-base-content/70 hover:text-info">About</a>
            <a href="/contact" className="text-base-content/70 hover:text-info">Contact</a>
          </Flex>
        </Flex>
      </div>

      {/* Media Object */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Media Object</p>
        <Flex gap="4" className="p-4 bg-base-100 border border-base-300 rounded-lg">
          <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold text-base-content">John Doe</h4>
            <p className="text-sm text-base-content/70">Software Engineer at Company</p>
          </div>
        </Flex>
      </div>

      {/* Button Group */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Button Group</p>
        <Flex gap="2">
          <button className="px-4 py-2 bg-primary text-primary-content rounded-l-lg">Left</button>
          <button className="px-4 py-2 bg-primary text-primary-content">Center</button>
          <button className="px-4 py-2 bg-primary text-primary-content rounded-r-lg">Right</button>
        </Flex>
      </div>
    </div>
  );
}
