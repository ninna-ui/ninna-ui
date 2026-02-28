import StackView, { stackSections } from "~/views/layout/stack";

export default function StackRoute() {
  return <StackView />;
}


export const handle = {
  sections: stackSections,
};