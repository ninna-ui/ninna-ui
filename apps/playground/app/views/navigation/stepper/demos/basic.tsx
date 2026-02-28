import { Stepper } from "@ninna-ui/navigation";

export default function BasicStepper() {
  return (
    <Stepper activeStep={1}>
      <Stepper.Step label="Account" description="Create your account" />
      <Stepper.Step label="Profile" description="Set up your profile" />
      <Stepper.Step label="Review" description="Review and submit" />
    </Stepper>
  );
}
