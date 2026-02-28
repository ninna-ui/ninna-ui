import StepperView, { stepperSections } from "~/views/navigation/stepper";
export default function StepperRoute() { return <StepperView />; }

export const handle = { sections: stepperSections };