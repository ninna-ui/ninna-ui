import RadioGroupView, { radioGroupSections } from "~/views/forms/radio-group";

export default function RadioGroup() {
  return <RadioGroupView />;
}


export const handle = {
  sections: radioGroupSections,
};