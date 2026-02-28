import IconButtonView, { iconButtonSections } from "~/views/primitives/icon-button";

export default function IconButtonRoute() {
  return <IconButtonView />;
}


export const handle = {
  sections: iconButtonSections,
};