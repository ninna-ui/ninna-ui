import { Stepper } from "@ninna-ui/navigation";

export default function StepperAllComplete() {
  return (
    <Stepper activeStep={3}>
      <Stepper.Step label="Account" description="Created" />
      <Stepper.Step label="Profile" description="Completed" />
      <Stepper.Step label="Review" description="Submitted" />
    </Stepper>
  );
}
