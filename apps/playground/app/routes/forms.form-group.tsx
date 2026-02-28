import FormGroupView, { formGroupSections } from "~/views/forms/form-group";

export default function FormGroupRoute() {
  return <FormGroupView />;
}


export const handle = {
  sections: formGroupSections,
};