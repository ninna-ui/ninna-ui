import { Stepper } from "@ninna-ui/navigation";

export default function StepperVertical() {
  return (
    <div className="w-[300px]">
      <Stepper activeStep={1} orientation="vertical">
        <Stepper.Step label="Create Account" description="Enter email and password" />
        <Stepper.Step label="Verify Email" description="Check your inbox" />
        <Stepper.Step label="Complete Profile" description="Add your details" />
      </Stepper>
    </div>
  );
}
