import CheckboxGroupView, { checkboxGroupSections } from "~/views/forms/checkbox-group";

export default function CheckboxGroupRoute() {
  return <CheckboxGroupView />;
}


export const handle = {
  sections: checkboxGroupSections,
};