import { NumberInput } from '@ninna-ui/forms';

export default function StepperPositionsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Stepper on Right (default)</p>
        <NumberInput defaultValue={5} stepperPosition="right" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Stepper on Sides</p>
        <NumberInput defaultValue={5} stepperPosition="sides" />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">No Stepper</p>
        <NumberInput defaultValue={5} showStepper={false} />
      </div>
    </div>
  );
}
