import SwitchView, { switchSections } from "~/views/forms/switch";

export default function Switch() {
  return <SwitchView />;
}


export const handle = {
  sections: switchSections,
};