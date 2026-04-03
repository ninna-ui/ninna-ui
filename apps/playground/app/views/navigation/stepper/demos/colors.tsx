import { Stepper } from "@ninna-ui/navigation";

export default function Colors() {
  const colors = ["neutral", "primary", "secondary", "accent", "success", "danger", "warning", "info"] as const;

  return (
    <div className="flex flex-col gap-12">
      {colors.map((color) => (
        <div key={color} className="flex flex-col gap-4">
          <div className="text-xs font-semibold uppercase text-base-content/50 px-2 tracking-wider">
            {color}
          </div>
          <Stepper activeStep={1} color={color}>
            <Stepper.Step label="Account" description="Step one" />
            <Stepper.Step label="Profile" description="Step two" />
            <Stepper.Step label="Review" description="Step three" />
          </Stepper>
        </div>
      ))}
    </div>
  );
}
