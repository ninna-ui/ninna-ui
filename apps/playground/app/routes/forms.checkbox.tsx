import CheckboxView, { checkboxSections } from "~/views/forms/checkbox";

export default function Checkbox() {
  return <CheckboxView />;
}


export const handle = {
  sections: checkboxSections,
};