import FieldView, { fieldSections } from "~/views/forms/field";

export default function FieldRoute() {
  return <FieldView />;
}


export const handle = {
  sections: fieldSections,
};