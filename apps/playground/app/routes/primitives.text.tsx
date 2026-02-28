import TextView, { textSections } from "~/views/primitives/text";

export default function TextRoute() {
  return <TextView />;
}


export const handle = {
  sections: textSections,
};