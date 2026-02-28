import { Button } from "@ninna-ui/primitives"; 

export default function Custom() {
  return (
    <div className="space-y-8">


      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Soft Variants</h3>
        <p className="text-sm text-base-content/70 mb-4">
          Soft variants with custom colors and dark mode support
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="soft"
            className="bg-secondary/10 text-secondary hover:bg-secondary/20"
          >
            Purple Soft
          </Button>
          <Button
            variant="soft"
            className="bg-warning/10 text-warning hover:bg-warning/20"
          >
            Orange Soft
          </Button>
          <Button
            variant="soft"
            className="bg-success/10 text-success hover:bg-success/20"
          >
            Teal Soft
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Outline Variants</h3>
        <p className="text-sm text-base-content/70 mb-4">
          Outline variants with custom border colors
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-content"
          >
            Purple Outline
          </Button>
          <Button
            variant="outline"
            className="border-warning text-warning hover:bg-warning hover:text-warning-content"
          >
            Orange Outline
          </Button>
          <Button
            variant="outline"
            className="border-success text-success hover:bg-success hover:text-success-content"
          >
            Teal Outline
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Gradient Buttons</h3>
        <p className="text-sm text-base-content/70 mb-4">
          Use Tailwind gradient utilities for eye-catching buttons
        </p>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Purple to Pink
          </Button>
          <Button className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
            Blue to Cyan
          </Button>
          <Button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            Orange to Red
          </Button>
          <Button className="bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
            Green to Emerald
          </Button>
        </div>
      </section>

    </div>
  );
}
