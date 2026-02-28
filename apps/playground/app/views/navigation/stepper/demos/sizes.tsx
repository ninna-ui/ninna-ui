import { Stepper } from "@ninna-ui/navigation";

export default function StepperSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-3">
            Size: {size}
          </p>
          <Stepper activeStep={1} size={size}>
            <Stepper.Step label="Step 1" description="First" />
            <Stepper.Step label="Step 2" description="Second" />
            <Stepper.Step label="Step 3" description="Third" />
          </Stepper>
        </div>
      ))}
    </div>
  );
}
