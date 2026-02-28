import InputGroupView, { inputGroupSections } from "~/views/forms/input-group";

export default function InputGroupRoute() {
  return <InputGroupView />;
}


export const handle = {
  sections: inputGroupSections,
};