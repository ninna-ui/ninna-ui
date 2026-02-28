import SelectView, { selectSections } from "~/views/forms/select";

export default function Select() {
  return <SelectView />;
}


export const handle = {
  sections: selectSections,
};