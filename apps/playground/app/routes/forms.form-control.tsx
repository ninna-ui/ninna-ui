import FormControlView, { formControlSections } from "~/views/forms/form-control";

export default function FormControlRoute() {
  return <FormControlView />;
}


export const handle = {
  sections: formControlSections,
};